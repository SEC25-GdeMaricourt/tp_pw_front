import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private usersService: UsersService
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.usersService.createUser(this.signupForm.value).subscribe(
        response => {
          console.log('Signup successful', response);
          localStorage.setItem('isConnected', 'true');
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigateByUrl('/').then(() => {
            window.location.reload();
          });
        },
        error => {
          console.error('Signup failed', error);
        }
      );
    }
  }
}