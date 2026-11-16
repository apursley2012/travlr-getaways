/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /main.ts                                                              *
 * Purpose: Bootstraps the standalone Angular administration application with  *
 *          the shared application configuration.                              *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((error) => {
  console.error('Angular bootstrap failed:', error);
});
