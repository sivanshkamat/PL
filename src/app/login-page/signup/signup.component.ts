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

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService,
    private fb: FormBuilder
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
    

    if (this.signUpForm.valid  || !email || !password) {
      return;
    }
    console.log(email);

    this.authService
    .signUp(email, password)
    .pipe(
      this.toast.observe({
        loading: 'Signing up...',
        success: 'Congrats! You are all signed up',
        error: ({ message }) => `${message}`,
      })
    )
    .subscribe(() => {
      this.router.navigate(['/home']);
    });
}
}
