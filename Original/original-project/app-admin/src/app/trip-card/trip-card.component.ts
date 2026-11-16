/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /trip-card.component.ts                                               *
 * Purpose: Owns Angular behavior and state for the reusable trip display      *
 *          feature.                                                           *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
})
export class TripCardComponent {
  @Input({ required: true }) trip!: Trip;

  constructor(private readonly router: Router) {}

  editTrip(trip: Trip): void {
    // The selected code survives route navigation so the edit view can load the same record.
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['/edit-trip']);
  }
}
