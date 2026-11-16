/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /environment.ts                                                       *
 * Purpose: Centralizes environment-specific Angular configuration used by     *
 *          administration services.                                           *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

// Deployment-specific API configuration stays outside feature and service logic.
export const environment = {
  apiBaseUrl: 'http://localhost:3000/api'
};
