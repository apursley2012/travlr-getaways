/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /trip-data.service.ts                                                 *
 * Purpose: Centralizes Angular trip API communication so feature components   *
 *          do not duplicate HTTP logic.                                       *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Trip } from '../models/trip';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private readonly tripsUrl = `${environment.apiBaseUrl}/trips`;

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  /** Adds the bearer token only when one is available. Public GET requests stay token-free. */
  private get authorizationOptions(): { headers: HttpHeaders } {
    const token = this.authService.getToken();
    const headers = token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();

    return { headers };
  }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsUrl);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.tripsUrl, trip, this.authorizationOptions);
  }

  getTrip(tripCode: string): Observable<Trip> {
    // Encode route parameters so unusual trip codes cannot alter the API path.
    const url = `${this.tripsUrl}/${encodeURIComponent(tripCode)}`;
    return this.http.get<Trip>(url);
  }

  updateTrip(trip: Trip, originalCode: string = trip.code): Observable<Trip> {
    // Target the originally selected record even when the edit form changes its code.
    const url = `${this.tripsUrl}/${encodeURIComponent(originalCode)}`;
    return this.http.put<Trip>(url, trip, this.authorizationOptions);
  }
}
