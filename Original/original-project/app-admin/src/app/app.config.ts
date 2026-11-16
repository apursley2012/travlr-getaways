/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /app.config.ts                                                        *
 * Purpose: Defines application-wide Angular providers for routing and HTTP    *
 *          communication.                                                     *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
