import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signinForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private authService: AuthService
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      this.authService.authenticate(this.signinForm.value).subscribe(
        response => {
          console.log('Signin successful', response);
          localStorage.setItem('isConnected', 'true');
          localStorage.setItem('user', JSON.stringify(response.user));
          this.router.navigateByUrl('/').then(() => {
            window.location.reload();
          });
        },
        error => {
          console.error('Signin failed', error);
        }
      );
    }
  }
}