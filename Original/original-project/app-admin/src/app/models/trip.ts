/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /trip.ts                                                              *
 * Purpose: Defines the shared TypeScript Trip contract used across            *
 *          administration components and data services.                       *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

/**
 * Shared trip record exchanged between the Angular administration UI and REST API. The optional `_id` is supplied by MongoDB; `code` is the application-facing trip identifier.
 */
export interface Trip {
  _id?: string;
  code: string;
  name: string;
  length: string;
  start: string | Date;
  resort: string;
  perPerson: number;
  image: string;
  description: string;
}
