/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /app.component.ts                                                     *
 * Purpose: Defines the Angular administration shell that hosts navigation and *
 *          routed feature content.                                            *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Travlr Getaways Admin';
}
