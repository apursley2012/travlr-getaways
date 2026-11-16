/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /add-trip.component.ts                                                *
 * Purpose: Owns Angular behavior and state for the trip creation feature.     *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { createTripForm } from '../models/trip-form';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-trip.component.html',
})
export class AddTripComponent implements OnInit {
  addForm!: FormGroup;
  submitted = false;
  isSubmitting = false;
  message = '';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    // Form constraints mirror the required fields and non-negative price in the API schema.
    this.addForm = createTripForm(this.formBuilder);
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.isSubmitting || this.addForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    this.tripDataService.addTrip(this.addForm.getRawValue()).subscribe({
      next: () => this.router.navigate(['']),
      error: () => {
        this.isSubmitting = false;
        this.message = 'The trip could not be added.';
      }
    });
  }

  get f() {
    return this.addForm.controls;
  }
}
