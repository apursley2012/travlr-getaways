/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /navigation.js                                                        *
 * Purpose: Defines the reusable primary/footer navigation component for the   *
 *          static demo.                                                       *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 * Third-party: FreeWebsiteTemplates.com; rights retained.                     *
 *******************************************************************************
*/                                                                              

const navigationItems = [
  { key: "home", label: "Home", href: "index.html" },
  { key: "travel", label: "Travel", href: "travel.html" },
  { key: "rooms", label: "Rooms", href: "rooms.html" },
  { key: "meals", label: "Meals", href: "meals.html" },
  { key: "news", label: "News", href: "news.html" },
  { key: "about", label: "About", href: "about.html" },
  { key: "contact", label: "Contact", href: "contact.html" },
];

/**
 * Both navigation regions use the same destination data so adding or renaming a site section cannot leave the header and footer menus out of sync.
 */
export function renderNavigation(currentSection, variant = "primary") {
  const listClass =
    variant === "footer" ? "site-footer__navigation" : "site-navigation__list";
  const itemClass = variant === "footer" ? "" : "site-navigation__item";

  const items = navigationItems
    .map(({ key, label, href }) => {
      const isCurrent = key === currentSection;
      const classes = [itemClass, isCurrent ? "is-current" : ""].filter(Boolean).join(" ");
      const classAttribute = classes ? ` class="${classes}"` : "";
      const currentAttribute = isCurrent ? ' aria-current="page"' : "";

      return `        <li${classAttribute}>
          <a${currentAttribute} href="${href}">${label}</a>
        </li>`;
    })
    .join("\n");

  return `<ul class="${listClass}">
${items}
      </ul>`;
}
