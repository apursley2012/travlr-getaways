/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /header.js                                                            *
 * Purpose: Defines the reusable site header, logo, and primary-navigation     *
 *          composition.                                                       *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 * Third-party: FreeWebsiteTemplates.com; rights retained.                     *
 *******************************************************************************
*/                                                                              

import { renderNavigation } from "./navigation.js";

export function renderHeader(currentSection) {
  return `<header class="site-header">
    <div class="site-logo">
      <a href="index.html">
        <img alt="Travlr Getaways" height="100" src="../images/logo.png" width="200" />
      </a>
    </div>
    <nav aria-label="Primary" class="site-navigation">
      ${renderNavigation(currentSection)}
    </nav>
  </header>`;
}
