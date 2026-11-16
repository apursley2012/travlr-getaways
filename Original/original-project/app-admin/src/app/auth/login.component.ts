/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /login.component.ts                                                   *
 * Purpose: Owns the administration login form state, validation, and          *
 *          authentication workflow.                                           *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  submitted = false;
  isSubmitting = false;
  message = '';

  loginForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(128)]]
    });
  }

  /** Performs client-side form validation before delegating credential checks to the API. */
  onSubmit(): void {
    this.submitted = true;
    if (this.isSubmitting || this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.getRawValue();

    this.isSubmitting = true;

    this.authService.login(email ?? '', password ?? '').subscribe({
      next: () => this.router.navigate(['/']),
      error: () => {
        this.isSubmitting = false;
        this.message = 'Login failed. Check the email and password.';
      }
    });
  }
}
