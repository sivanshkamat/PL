import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastComponent } from '../toast/toast.component';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [Auth, AuthService], 
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  dialogRef!: MatDialogRef<ToastComponent>; // Initialize with '!' to indicate it will be assigned in ngOnInit

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    }
  
    const { email, password } = this.loginForm.value;
  
    this.dialogRef = this.dialog.open(ToastComponent, {
      disableClose: true, // Prevent closing the dialog by clicking outside or pressing escape
    });
  
    this.dialogRef.componentInstance.toastConfig = {
      success: 'Logged in successfully',
      loading: 'Logging in...',
      error: (error) => `There was an error: ${error?.message || 'Unknown error'}`,
    };
  
    this.authService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(['/home']);
        this.dialogRef.close(); // Close the dialog after successful login
      },
      error: (error) => {
        // Handle signup error
        const errorMessage = error?.message || 'An error occurred during signup';
        this.toast.error(errorMessage);
        this.dialogRef.close(); // Close the dialog on signup error
      }
    });
  }
}
