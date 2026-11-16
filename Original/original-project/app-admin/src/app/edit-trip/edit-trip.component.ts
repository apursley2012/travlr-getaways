/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /edit-trip.component.ts                                               *
 * Purpose: Owns Angular behavior and state for the trip editing feature.      *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { createTripForm } from '../models/trip-form';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
})
export class EditTripComponent implements OnInit {
  editForm!: FormGroup;
  submitted = false;
  isSubmitting = false;
  message = '';
  private originalTripCode = '';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    // TripCard stores the selected code before navigation so this route can reload the record.
    const tripCode = localStorage.getItem('tripCode');
    this.originalTripCode = tripCode ?? '';

    if (!tripCode) {
      this.message = 'No trip was selected for editing.';
      this.router.navigate(['']);
      return;
    }

    this.editForm = createTripForm(this.formBuilder, tripCode);

    this.tripDataService.getTrip(tripCode).subscribe({
      next: (trip: Trip) => {
        // HTML date inputs require YYYY-MM-DD rather than the API's full date representation.
        const parsedStart = trip.start ? new Date(trip.start) : null;
        const start = parsedStart && !Number.isNaN(parsedStart.getTime())
          ? parsedStart.toISOString().slice(0, 10)
          : '';
        this.editForm.patchValue({ ...trip, start });
        this.message = `Trip ${tripCode} loaded.`;
      },
      error: () => {
        this.isSubmitting = false;
        this.message = 'The selected trip could not be loaded.';
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.isSubmitting || this.editForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    this.tripDataService.updateTrip(this.editForm.getRawValue(), this.originalTripCode).subscribe({
      next: () => {
        localStorage.removeItem('tripCode');
        this.router.navigate(['']);
      },
      error: () => {
        this.isSubmitting = false;
        this.message = 'The trip could not be updated.';
      }
    });
  }

  get f() {
    return this.editForm.controls;
  }
}
