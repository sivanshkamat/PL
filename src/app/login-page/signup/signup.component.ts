import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from 'firebase/auth';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastComponent } from '../toast/toast.component';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  dialogRef!: MatDialogRef<ToastComponent>; // Initialize with '!' to indicate it will be assigned in ngOnInit

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.signUpForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validators: passwordsMatchValidator() }
    );
  }

  ngOnInit(): void {}
  get email() {return this.signUpForm.get('email');}
  get password() {return this.signUpForm.get('password');}
  get confirmPassword() {return this.signUpForm.get('confirmPassword');}

  submit() {
    const { email, password } = this.signUpForm.value;

    if (this.signUpForm.valid || !email || !password) {
      return;
    }
    this.dialogRef = this.dialog.open(ToastComponent, {
      disableClose: true, // Prevent closing the dialog by clicking outside or pressing escape
    });

    this.dialogRef.componentInstance.toastConfig = {
      loading: 'Signing up...',
      success: 'Congrats! You are all signed up',
      error: (error) =>
        `There was an error: ${error?.message || 'Unknown error'}`,
    };

    this.authService.signUp(email, password).subscribe({
      next: () => {
        this.router.navigate(['/login']);
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
