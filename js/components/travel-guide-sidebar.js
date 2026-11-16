/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /travel-guide-sidebar.js                                              *
 * Purpose: Renders the shared travel-guide sidebar used by News and Articles  *
 *          from one topic definition while allowing each page to choose its   *
 *          link target convention.                                            *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const guideGroups = [
  {
    newsTitle: "In This Guide",
    articlesTitle: "Travel Articles",
    items: [
      ["safer-beach-day", "Plan a Safer Beach Day"],
      ["before-you-paddle", "Before You Paddle"],
      ["reef-visits", "Responsible Reef Visits"],
      ["rip-currents", "Understanding Rip Currents"],
    ],
  },
  {
    newsTitle: "Quick Reminders",
    articlesTitle: "Vacation Tips",
    items: [
      ["beach-bag", "Beach Bag Checklist"],
      ["activity-plan", "Planning Coastal Activities"],
      ["diving-checklist", "Diving Checklist"],
      ["first-aid", "First Aid Preparation"],
      ["sandcastles", "Safer Sandcastles"],
      ["sun-protection", "Coastal Sun Protection"],
    ],
  },
];

/**
 * News points into the article page; Articles points to anchors on itself. The content and ordering remain one source of truth because the sidebar has the same conceptual responsibility on both pages.
 */
function renderGuideSidebar(element) {
  const variant = element.dataset.guideVariant === "articles" ? "articles" : "news";
  const prefix = variant === "articles" ? "" : "articles.html";

  element.innerHTML = guideGroups
    .map((group) => {
      const title = variant === "articles" ? group.articlesTitle : group.newsTitle;
      const items = group.items
        .map(([id, label]) => `      <li><a href="${prefix}#${id}">${label}</a></li>`)
        .join("\n");

      return `    <h3>${title}</h3>
    <ul>
${items}
    </ul>`;
    })
    .join("\n");
}

document.querySelectorAll("[data-guide-sidebar]").forEach(renderGuideSidebar);
