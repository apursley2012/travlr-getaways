/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /footer.js                                                            *
 * Purpose: Defines the reusable site footer and secondary navigation for the  *
 *          static demo.                                                       *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 * Third-party: FreeWebsiteTemplates.com; rights retained.                     *
 *******************************************************************************
*/                                                                              

import { renderNavigation } from "./navigation.js";

export function renderFooter(currentSection) {
  const currentYear = new Date().getFullYear();

  return `<footer class="site-footer">
    <div class="site-footer__inner">
      ${renderNavigation(currentSection, "footer")}
    </div>
    <nav aria-label="Policies" class="site-footer__policies">
      <a href="privacy.html">Privacy</a>
      <a href="terms.html">Terms</a>
      <a href="accessibility.html">Accessibility</a>
      <a href="case-study.html">Case Study</a>
    </nav>
    <p class="site-footer__copyright">© ${currentYear} Alysha Pursley. All rights reserved.</p>
  </footer>`;
}
