/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /environment.production.ts                                            *
 * Purpose: Uses the hosting origin for production API requests so deployments *
 *          do not                                                             *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

// Production hosting must route /api to the Express service on the same origin.
export const environment = {
  apiBaseUrl: '/api'
};
