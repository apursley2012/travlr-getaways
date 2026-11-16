/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /trip-listing.component.ts                                            *
 * Purpose: Owns Angular behavior and state for the trip collection feature.   *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message = '';

  constructor(private readonly tripDataService: TripDataService) {}

  ngOnInit(): void {
    // The admin list uses the API as its data source rather than a duplicated local dataset.
    this.tripDataService.getTrips().subscribe({
      next: (trips) => {
        this.trips = trips;
        this.message = trips.length ? '' : 'No trips are currently available.';
      },
      error: () => {
        this.message = 'Trips could not be loaded.';
      }
    });
  }
}
