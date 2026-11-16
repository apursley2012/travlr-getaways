/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /trip-form.ts                                                         *
 * Purpose: Centralizes the trip form fields and constraints shared by         *
 *          add/edit screens.                                                  *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/** Keep the Angular write contract aligned with the server's Mongoose trip schema. */
export function createTripForm(builder: FormBuilder, initialCode = ''): FormGroup {
  return builder.group({
    _id: [],
    code: [initialCode, [Validators.required, Validators.maxLength(64), Validators.pattern(/^[A-Za-z0-9_-]+$/)]],
    name: ['', [Validators.required, Validators.maxLength(160)]],
    length: ['', [Validators.required, Validators.maxLength(80)]],
    start: ['', Validators.required],
    resort: ['', [Validators.required, Validators.maxLength(160)]],
    perPerson: [null, [Validators.required, Validators.min(0)]],
    image: ['', [Validators.required, Validators.maxLength(255)]],
    description: ['', [Validators.required, Validators.maxLength(5000)]]
  });
}
