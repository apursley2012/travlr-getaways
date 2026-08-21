<!--
File: README.md
Document Title: Travlr Getaways
Author: Alysha Pursley
Date: August 2026
-->

<div align="center">

<img src="./images/logo.png" alt="Travlr Getaways logo" width="75%">

<h1>Travlr Getaways ✈️</h1>

<p><a href="https://github.com/apursley2012/travlr-getaways/stargazers"><img src="https://img.shields.io/github/stars/apursley2012/travlr-getaways?style=for-the-badge&amp;logo=github&amp;label=Stars" alt="Stars"></a> <a href="https://github.com/apursley2012/travlr-getaways/forks"><img src="https://img.shields.io/github/forks/apursley2012/travlr-getaways?style=for-the-badge&amp;logo=github&amp;label=Forks" alt="Forks"></a> <a href="https://github.com/apursley2012/travlr-getaways/issues"><img src="https://img.shields.io/github/issues/apursley2012/travlr-getaways?style=for-the-badge&amp;logo=github&amp;label=Issues" alt="Issues"></a> <a href="https://github.com/apursley2012/travlr-getaways/commits"><img src="https://img.shields.io/github/last-commit/apursley2012/travlr-getaways?style=for-the-badge&amp;logo=git&amp;label=Last%20Commit" alt="Last Commit"></a> <a href="https://github.com/apursley2012/travlr-getaways"><img src="https://img.shields.io/github/repo-size/apursley2012/travlr-getaways?style=for-the-badge&amp;logo=github&amp;label=Repo%20Size" alt="Repo Size"></a> <a href="https://github.com/apursley2012/travlr-getaways"><img src="https://img.shields.io/github/languages/top/apursley2012/travlr-getaways?style=for-the-badge&amp;label=Top%20Language" alt="Top Language"></a></p>

<p><a href="https://apursley2012.github.io/travlr-getaways/"><img src="https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-222222?style=for-the-badge&amp;logo=githubpages&amp;logoColor=white" alt="Live Demo"></a> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&amp;logo=nodedotjs&amp;logoColor=white" alt="Node.js"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&amp;logo=express&amp;logoColor=white" alt="Express"> <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white" alt="MongoDB"> <img src="https://img.shields.io/badge/Handlebars-000000?style=for-the-badge&amp;logo=handlebarsdotjs&amp;logoColor=white" alt="Handlebars"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" alt="JavaScript"></p>

<p><strong>A travel application project with customer trip browsing, administrative trip management, API-backed data, MongoDB persistence, authentication, and a public GitHub Pages presentation of the full-stack workflow.</strong></p>

<p><a href="https://apursley2012.github.io/travlr-getaways/">Open the live project</a> · <a href="https://github.com/apursley2012/travlr-getaways">View the repository</a> · <a href="https://github.com/apursley2012/travlr-getaways/issues/new/choose">Report an issue or request an addition</a></p>

</div>

---

## Table of Contents 📖

*   [Project Overview 🔎](#project-overview)
    *   [Purpose 🎯](#purpose)
    *   [Design Style and Inspiration 🎨](#design-style-and-inspiration)
    *   [Main Color Palette 🌈](#main-color-palette)
    *   [Preview Screenshots 🖼️](#preview-screenshots)
*   [Key Features ✨](#key-features)
*   [Tech Stack 🛠️](#tech-stack)
*   [Live Demo 🚀](#live-demo)
*   [Installation 📦](#installation)
    *   [Local Use 💻](#local-use)
    *   [GitHub Pages Deployment 🌐](#github-pages-deployment)
*   [Usage 🧭](#usage)
*   [Project Structure 🗂️](#project-structure)
    *   [Pages Included 📄](#pages-included)
    *   [Core Files and Architecture 🧩](#core-files-and-architecture)
    *   [File and Folder Structure 🌳](#file-and-folder-structure)
*   [Customer, Admin, and API Architecture 🏗️](#customer-admin-and-api-architecture)
*   [Customization Guide 🎨](#customization-guide)
*   [Accessibility and Browser Compatibility ♿](#accessibility-and-browser-compatibility)
*   [Repository Relationship 🔗](#repository-relationship)
*   [Project Scope and Limitations 📌](#project-scope-and-limitations)
*   [Possible Future Enhancements 💡](#possible-future-enhancements)
*   [Contributing 🤝](#contributing)
    *   [Reporting Issues 🐛](#reporting-issues)
    *   [Requesting Additions 📝](#requesting-additions)
*   [License 📜](#license)
*   [Important Links 🔗](#important-links)
*   [Attribution ℹ️](#attribution)

---

<a id="project-overview"></a>

<details open>
<summary><h2><strong>Project Overview 🔎</strong></h2></summary>





**Travlr Getaways** is a travel application that combines a customer-facing trip catalog with an authenticated administrative workflow. Travelers can browse trip information through the public experience, while authorized staff can manage the same underlying trip data through protected application features.

I built the project around the fact that a travel site serves two very different audiences. Customers need clear, attractive trip information with as little friction as possible, while staff need dependable ways to create, edit, and maintain the content behind those listings. Keeping those responsibilities separate produces a cleaner experience for both groups without duplicating the data model.

The application uses a shared API and data layer to connect those experiences. That architecture lets the public site focus on discovery while the administrative side focuses on maintenance, authentication, and content accuracy.

</details>

<a id="purpose"></a>

<details open>
<summary><h3><strong>Purpose 🎯</strong></h3></summary>




I created **Travlr Getaways** to support the two workflows a travel site needs most: customers need a clear way to discover and review trip options, while staff need secure tools for maintaining the trip information those customers see. The application separates the public travel experience from the authenticated administrative workflow while connecting both through the same API and data layer. Its purpose is to give travelers a simple browsing experience without making trip management difficult for the people responsible for keeping the catalog accurate.
</details>

<a id="design-style-and-inspiration"></a>

<details open>
<summary><h3><strong>Design Style and Inspiration 🎨</strong></h3></summary>



Travlr Getaways balances an inviting travel-facing experience with the more operational structure needed for trip data and administration. Teal and blue establish the travel brand, orange highlights important actions, and sand, cream, and paper tones keep destination content warm and readable. Customer-facing pages can feel visual and exploratory, while forms, records, and administrative areas use the same palette with a tighter information hierarchy.

</details>

<a id="main-color-palette"></a>

<details open>
<summary><h3><strong>Main Color Palette 🌈</strong></h3></summary>





I pulled the palette below directly from the current project stylesheet `css/style.css`.

Each row lists every interface-use category identified for that exact color value in the documented stylesheet analysis. When one hex value is reused for several jobs, I keep all of those uses together in the same row instead of reducing it to a single generic label.

| Hex | Color Name | Complete Use in the Interface |
| --- | --- | --- |
| `#039AAA` | Travlr Teal | Primary brand color and major interactive elements |
| `#047A86` | Dark Teal | Hover states; deeper accents; and supporting brand structure |
| `#0A6872` | Deep Teal | Darkest teal details and contrast |
| `#1261A0` | Travel Blue | Secondary brand color; links; and supporting actions |
| `#0D4B7D` | Dark Blue | Darker blue states and text emphasis |
| `#FF8B3D` | Travel Orange | Primary call-to-action and warm accent |
| `#D96E27` | Dark Orange | Hover states and deeper orange emphasis |
| `#F5EFE6` | Sand | Warm background and travel-oriented neutral surface |
| `#FFF7ED` | Cream | Soft panels and supporting light areas |
| `#FFFDFA` | Paper | Cards; forms; and primary light content surfaces |
| `#15222D` | Ink | Primary text |
| `#5C6B76` | Muted Slate | Secondary text |
| `#D8D8D1` | Line | Borders and separators |
| `#D8AE64` | Gold | Selective decorative and destination accents |

</details>

<a id="preview-screenshots"></a>

<details open>
<summary><h3><strong>Preview Screenshots 🖼️</strong></h3></summary>



Click any preview image in the repository screenshot folder to open the full-size file.


#### 🖼️ Screenshot Gallery


The gallery uses paired, centered images when screenshots are present. Keep screenshots under `images/screenshots/` and use names such as `travlr-getaways-screenshot-01.png`, `travlr-getaways-screenshot-02.png`, and so on. I have not invented image filenames that were not verified in the current project source.

</details>

---

<a id="key-features"></a>

<details open>
<summary><h2><strong>Key Features ✨</strong></h2></summary>



*   **Browse available travel packages and trip details**
*   **Separate customer-facing and administrator experiences**
*   **Authenticate administrative access**
*   **Create, read, update, and delete trip records through the application workflow**
*   **Store trip data with MongoDB/Mongoose in the full-stack implementation**
*   **Expose trip information through an API layer**
*   **Include a static public presentation for GitHub Pages where server functionality cannot run**
*   **Document architecture and implementation decisions through project writing**

</details>

---

<a id="tech-stack"></a>

<details open>
<summary><h2><strong>Tech Stack 🛠️</strong></h2></summary>



*   **Node.js**
*   **Express**
*   **MongoDB**
*   **Mongoose**
*   **Passport authentication**
*   **Handlebars**
*   **JavaScript**
*   **HTML/CSS**
*   **REST-style API structure**

</details>

---

<a id="live-demo"></a>

<details open>
<summary><h2><strong>Live Demo 🚀</strong></h2></summary>



Open the published project here:

[https://apursley2012.github.io/travlr-getaways/](https://apursley2012.github.io/travlr-getaways/)

</details>

---

<a id="installation"></a>

<details open>
<summary><h2><strong>Installation 📦</strong></h2></summary>



</details>

<a id="local-use"></a>

<details open>
<summary><h3><strong>Local Use 💻</strong></h3></summary>



1. Clone or download the repository.
2. Keep the existing folder structure intact so the page can still find its styles, scripts, data, and assets.
3. Open the root `index.html` for static projects, or follow the project-specific runtime instructions when a backend/source application is included.
4. Before I publish changes, I check the main workflow, navigation, saved browser data where it applies, and the responsive layout.

</details>

<a id="github-pages-deployment"></a>

<details open>
<summary><h3><strong>GitHub Pages Deployment 🌐</strong></h3></summary>



For the static/public portion, keep `index.html` at the repository root, use relative asset paths, then enable **Settings → Pages → Deploy from a branch → main → / (root)**. Projects that include Python, Node, MongoDB, authentication, browser automation, or another server runtime still need an appropriate backend host for those server-dependent features.

</details>

---

<a id="usage"></a>

<details open>
<summary><h2><strong>Usage 🧭</strong></h2></summary>



Start with the main page and follow the project’s primary workflow. The interface is intended to be usable without reading the source first, while the case studies, articles, documentation, and source folders provide the deeper implementation context. Where browser storage is used, saved information belongs to that browser/device unless the project explicitly includes a shared backend.

</details>

---

<a id="project-structure"></a>

<details open>
<summary><h2><strong>Project Structure 🗂️</strong></h2></summary>



</details>

<a id="pages-included"></a>

<details open>
<summary><h3><strong>Pages Included 📄</strong></h3></summary>



| Page / Area | Purpose |
| --- | --- |
| `customer-facing pages` | Trip browsing and public travel content |
| `admin pages` | Authenticated trip-management workflow |
| `API routes` | Trip-data endpoints used by the application |
| `MongoDB/Mongoose models` | Persistent trip-data model |
| `GitHub Pages presentation` | Static public-facing project experience |

</details>

<a id="core-files-and-architecture"></a>

<details open>
<summary><h3><strong>Core Files and Architecture 🧩</strong></h3></summary>



The repository separates the public interface from supporting source and documentation where the project needs that distinction. The important rule is that **Travlr Getaways should be documented as the project it is**, not as a generic theme or one-size-fits-all site. Files that implement the main workflow belong with the application, while case studies, articles, source history, data, or backend code are documented according to their real role.

</details>

<a id="file-and-folder-structure"></a>

<details open>
<summary><h3><strong>File and Folder Structure 🌳</strong></h3></summary>



```text
travlr-getaways/
├── README.md
├── customer-facing pages
├── admin pages
├── API routes
├── MongoDB/Mongoose models
└── GitHub Pages presentation
```

This tree highlights the major documented areas rather than inventing files that were not verified.

</details>

---

<a id="customer-admin-and-api-architecture"></a>

<details open>
<summary><h2><strong>Customer, Admin, and API Architecture 🏗️</strong></h2></summary>



The full-stack architecture keeps presentation and data responsibilities separate. Public pages consume trip information for browsing, while the administrative workflow performs protected management operations. MongoDB and Mongoose provide persistence, and the API layer gives both sides a consistent way to work with trip data.

The GitHub Pages version is documentation and presentation for the project, not a claim that MongoDB, Express, or Passport are running in the static host. Server-backed behavior belongs to the full-stack source and runtime.

</details>

---

<a id="customization-guide"></a>

<details open>
<summary><h2><strong>Customization Guide 🎨</strong></h2></summary>



The safest way to customize or extend **Travlr Getaways** is to preserve its existing workflow first, then change one layer at a time. Update project content and data in the files that already own that information, keep visual changes inside the existing style system, and test every page that shares the changed component or data source. New features should solve a problem that belongs to this project instead of copying a feature from an unrelated application.

For visual changes, update the documented palette intentionally and re-check contrast, responsive spacing, screenshots, and any state colors that depend on the same variables. For data or logic changes, test both the normal path and empty/error/edge cases before publishing.

</details>

---

<a id="accessibility-and-browser-compatibility"></a>

<details open>
<summary><h2><strong>Accessibility and Browser Compatibility ♿</strong></h2></summary>



The public interface should remain keyboard-navigable, readable at common mobile and desktop widths, and usable without relying on color alone to communicate state. Form controls should keep visible labels or accessible names, images should use meaningful `alt` text, focus indicators should remain visible, and decorative animation should respect reduced-motion preferences when motion is present. Browser compatibility should be checked in current Safari, Chrome, Firefox, and Edge where practical.

</details>

---

<a id="repository-relationship"></a>

<details open>
<summary><h2><strong>Repository Relationship 🔗</strong></h2></summary>



**Travlr Getaways** is documented as its own project. Supporting case studies, articles, source history, static presentation layers, or backend/runtime folders are parts of this repository only when they help explain or run this project. They should not be described as separate replacement projects.

Where this repository contains both a static GitHub Pages layer and source that requires another runtime, the two are related but not interchangeable: the static layer provides the public experience that can run in a browser, while the source/runtime layer preserves functionality that GitHub Pages cannot execute directly.

</details>

---

<a id="project-scope-and-limitations"></a>

<details open>
<summary><h2><strong>Project Scope and Limitations 📌</strong></h2></summary>



This README separates what the published browser version can do from functionality that belongs to a backend, database, native application, notebook, or other runtime. Static hosting limitations are stated where they materially affect the project. The documentation should not imply that GitHub Pages is providing server-side authentication, Python execution, MongoDB access, SMS delivery, or another service it cannot actually run.

</details>

---

<a id="possible-future-enhancements"></a>

<details open>
<summary><h2><strong>Possible Future Enhancements 💡</strong></h2></summary>



*   Publish a free hosted backend again if a stable long-running option is available
*   Add stronger admin validation and audit-friendly change feedback
*   Expand destination filtering and search
*   Add automated API and authentication tests

</details>

---

<a id="contributing"></a>

<details open>
<summary><h2><strong>Contributing 🤝</strong></h2></summary>



Contributions, bug reports, and practical improvement suggestions are welcome when they preserve the existing project direction and do not replace its identity with a generic redesign.

</details>

<a id="reporting-issues"></a>

<details open>
<summary><h3><strong>Reporting Issues 🐛</strong></h3></summary>



When reporting a problem, include the page or workflow involved, what you expected, what actually happened, browser/device information when relevant, and a screenshot if the issue is visual.

</details>

<a id="requesting-additions"></a>

<details open>
<summary><h3><strong>Requesting Additions 📝</strong></h3></summary>



Feature requests should explain the user problem the addition would solve and how it fits the existing project. Project-specific improvements are preferred over adding features only because they are common in other applications.

</details>

---

<a id="license"></a>

<details open>
<summary><h2><strong>License 📜</strong></h2></summary>



No license terms are assumed here. If the repository includes a `LICENSE` file, that file controls reuse. If it does not, normal copyright applies and permission should not be inferred from the repository being public.

</details>

---

<a id="important-links"></a>

<details open>
<summary><h2><strong>Important Links 🔗</strong></h2></summary>



*   **Live Project:** [https://apursley2012.github.io/travlr-getaways/](https://apursley2012.github.io/travlr-getaways/)
*   **Repository:** [https://github.com/apursley2012/travlr-getaways](https://github.com/apursley2012/travlr-getaways)
*   **Issues / Requests:** [https://github.com/apursley2012/travlr-getaways/issues/new/choose](https://github.com/apursley2012/travlr-getaways/issues/new/choose)

</details>

---

<a id="attribution"></a>

<details open>
<summary><h2><strong>Attribution ℹ️</strong></h2></summary>


Project documentation and original project materials are credited to their respective sources where applicable.

</details>

---

<div align=center>
   
***Made with ❤️ and a bit of 🪄.***
<br>
**©️ 2026 Alysha Pursley. All Rights Reserved.**

</div>
