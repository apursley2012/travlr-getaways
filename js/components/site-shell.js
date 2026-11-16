/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /site-shell.js                                                        *
 * Purpose: Composes shared shell components around each page's static, page-  *
 *          owned content.                                                     *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 * Third-party: FreeWebsiteTemplates.com; rights retained.                     *
 *******************************************************************************
*/                                                                              

import { renderFooter } from "./footer.js";
import { renderHeader } from "./header.js";

/**
 * Booking belongs to the Rooms section and Articles belongs to News. Pages declare that relationship with data-current-section instead of duplicating active-menu logic.
 */
function renderShell() {
  const container = document.querySelector(".site-container");

  if (!container) {
    return;
  }

  const currentSection = document.body.dataset.currentSection ?? "";
  container.insertAdjacentHTML("afterbegin", renderHeader(currentSection));
  container.insertAdjacentHTML("beforeend", renderFooter(currentSection));
}

renderShell();
