# Sanadk Portfolio — Native Simple

A lightweight, fast, and responsive static Portfolio web application built using **Pure Native HTML5, CSS3, and Vanilla JavaScript (ES6)**.

## 🚀 Features

- **Zero Frameworks & Zero Dependencies**: No React, Angular, Vue, npm, or build step required.
- **100% Free Hosting Ready**: Can be hosted on GitHub Pages, Vercel, Netlify, Cloudflare Pages, or opened directly in any browser.
- **Easy Data Editing**: All project data, team members, and site information are stored in `assets/js/data.js`.
- **Live Search & Category Filtering**: Instantly search projects by keyword or filter by Category (ERP, Web Apps, Mobile, AI).
- **Dynamic URL Project Details**: Project details are rendered dynamically via URL query string (`project.html?project=ugetic-erp`).
- **Responsive & Mobile Friendly**: Clean design optimized for Desktop, Tablet, and Mobile devices.

---

## 📁 Directory Structure

```text
new_portfolio/
│
├── index.html            # Home page (Hero, Selected Projects, Services, Tech Stack, Team, CTA)
├── projects.html         # All Projects gallery (Live search & category filter tabs)
├── project.html          # Project details view (URL parameter ?project=slug)
│
├── assets/
│   ├── css/
│   │   └── style.css     # Design system (Variables, typography, cards, layout, responsive)
│   │
│   ├── js/
│   │   ├── data.js       # Central data file for Projects, Team, and Site metadata
│   │   └── main.js       # Dynamic DOM renderer, URL parser, search & filter logic
│   │
│   └── images/
│       ├── logo.png      # Brand Logo
│       ├── projects/     # Project screenshots and thumbnails
│       └── team/         # Team member avatars
│
└── README.md             # Project documentation
```

---

## 🛠️ How to Add or Edit Projects

To add or modify any project, open `assets/js/data.js` in your favorite code editor and add an object to the `PROJECTS_DATA` array:

```js
{
  slug: "my-new-project",
  title: "My New Project",
  tagline: "Short one-sentence summary of the project.",
  category: "web", // Options: "erp", "web", "mobile", "ai"
  categoryLabel: "Web App",
  description: "Detailed overview description of the project...",
  image: "assets/images/projects/my-project.webp",
  technologies: ["React", "Node.js", "MongoDB"],
  role: "Full-Stack Developer",
  roleDetails: [
    "Built frontend dashboard UI",
    "Integrated RESTful APIs"
  ],
  features: [
    "Feature 1 title",
    "Feature 2 title"
  ],
  links: {
    live: "https://example.com",
    github: "https://github.com/user/repo"
  },
  featured: true // Set to true to show on Home page
}
```

Save the file and refresh your browser. That's it!

---

## 💻 Running Locally

You don't need any build steps! You can simply:

1. Double-click `index.html` to open directly in any web browser.
2. Or run a simple static server (e.g. `npx serve` or Python `python -m http.server 8000`).
