/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /app.routes.ts                                                        *
 * Purpose: Defines navigation routes between administration features without  *
 *          embedding routing in components.                                   *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { LoginComponent } from './auth/login.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';

// Keep feature navigation declarative; data access remains inside the routed components/services.
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-trip', component: AddTripComponent },
  { path: 'edit-trip', component: EditTripComponent },
  { path: '', component: TripListingComponent, pathMatch: 'full' }
];
