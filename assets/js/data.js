/**
 * ============================================================================
 * Sanadk  Portfolio — Central Projects & Site Data Configuration
 * ============================================================================
 *
 * يحتوي هذا الملف على بيانات المشاريع والخدمات والتقنيات وإعدادات الموقع.
 * بيانات الفريق تم فصلها في ملف منفصل: assets/js/team-data.js
 */

const PORTFOLIO_DATA = {
  // 1. معلومات الموقع والتواصل
  siteConfig: {
    brandName: "Sanadk ",
    tagline: "We build digital products that solve real problems.",
    email: "sanadk@gamil.com",
    phone: "+20 0106 593 7431",
    website: "https://sanadk.fwh.is/?i=1",
    facebook: "https://www.facebook.com/Sanadk65",
    linkedin: "https://www.linkedin.com/company/sanadkhub/",
    github: "https://github.com/",
    copyrightYear: 2026,
  },

  // 2. قائمة المشاريع (Projects Data)
  projects: [
    {
      id: "1",
      slug: "daniels",
      title: "Daniels",
      tagline:
        "portfolio site Daniels showcasing dynamic scrolling, filtering, and design transitions.",
      category: "web",
      categoryLabel: "WEB",
      description:
        "A sleek portfolio website built for showcasing creative designs, dynamic scrolling transitions, interactive filtering, and responsive UI components.",
      image: "assets/images/projects/daniels/main.png",
      screenshots: [
        "assets/images/projects/daniels/main.png",
        "assets/images/projects/daniels/2.png",
        "assets/images/projects/daniels/3.png",
        "assets/images/projects/daniels/4.png",
        "assets/images/projects/daniels/5.png",
      ],
      technologies: ["Html", "CSS", "Javascript", "jQuery"],
      role: "Frontend Development",
      roleDetails: [
        "Built responsive smooth-scrolling design layouts.",
        "Implemented interactive filtering and animations.",
      ],
      features: [
        "Dynamic Filtering Gallery",
        "Responsive Navigation Menu",
        "Interactive Design Transitions",
      ],
      teamMembers: [
        {
          name: "Ahmed",
          role: "Frontend Angular Developer",
          avatar: "assets/images/team/Ahmed Elmekkawi.jpeg",
        },
      ],
      links: {
        live: "https://ahmedelmkkawi.github.io/Daniels/",
        github: "https://github.com/ahmedelmkkawi/Daniels",
      },
      featured: true,
    },
    {
      id: "2",
      slug: "fresh-cart",
      title: "Fresh Cart",
      tagline: "Modern E-Commerce web application built with Angular.",
      category: "web",
      categoryLabel: "WEB",
      description:
        "Full-featured online grocery & e-commerce shopping platform providing product categories, cart management, checkout flow, and payment gateway integration.",
      image: "assets/images/projects/fresh-cart/main.png",
      screenshots: [
        "assets/images/projects/fresh-cart/main.png",
        "assets/images/projects/fresh-cart/2.png",
        "assets/images/projects/fresh-cart/3.png",
        "assets/images/projects/fresh-cart/4.png",
        "assets/images/projects/fresh-cart/5.png",
      ],
      technologies: ["Angular", "TypeScript", "Bootstrap 5", "REST APIs"],
      role: "Frontend Angular Development",
      roleDetails: [
        "Developed single page app architecture in Angular.",
        "Integrated cart state management and checkout API services.",
      ],
      features: [
        "Product Catalog & Category Filtering",
        "Cart & Wishlist State Management",
        "Secure Checkout & Order History",
      ],
      teamMembers: [
        {
          name: "Ahmed",
          role: "Frontend Angular Developer",
          avatar: "assets/images/team/Ahmed Elmekkawi.jpeg",
        },
      ],
      links: {
        live: "https://sanadk.fwh.is/?i=1",
        github: "https://github.com/",
      },
      featured: true,
    },
     {
      id: "3",
      slug: "EduPlatform",
      title: "EduPlatform",
      tagline: "Modern E-Commerce web application built with Angular.",
      category: "web",
      categoryLabel: "WEB",
      description:
        "Full-featured online grocery & e-commerce shopping platform providing product categories, cart management, checkout flow, and payment gateway integration.",
      image: "assets/images/projects/EduPlatform/main.jpeg",
      screenshots: [
        "assets/images/projects/EduPlatform/main.jpeg",
        "assets/images/projects/EduPlatform/2.jpeg",
        "assets/images/projects/EduPlatform/3.jpeg",
        "assets/images/projects/EduPlatform/4.jpeg",
        "assets/images/projects/EduPlatform/5.jpeg",
      ],
      technologies: ["React js" , "Express js" , "SqlLite" , "Typescript"],
      role: "Backend Development",
      roleDetails: [
        "Developed backend API for the educational platform using Node.js and Express.js.",
        "Integrated with SQLite database to manage courses, users, and enrollments.",
      ],
      features: [
        "Product Catalog & Category Filtering",
        "Cart & Wishlist State Management",
        "Secure Checkout & Order History",
      ],
      teamMembers: [
        {
          name: "Elmasry",
          role: "Head of frontend development",
          avatar: "assets/images/team/Mahmoud Elmasry.jpeg",
        },
      ],
      links: {
        live: "https://sanadk.fwh.is/?i=1",
        github: "https://github.com/",
      },
      featured: true,
    },
  ],

  // 3. حلول التقنية (Tech Solutions)
  services: [
    {
      icon: "code",
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technologies. From sleek landing pages to complex enterprise platforms — pixel-perfect and performant.",
      tags: ["Angular", "React", "Node.js", "PHP Laravel", "Full-Stack"],
    }, 
    {
      icon: "mobile-screen",
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences. From concept to App Store — we build apps that users love and businesses rely on.",
      tags: ["iOS", "Android", "Flutter"],
    },
  
    {
      icon: "building",
      title: "ERP Systems",
      description:
        "Enterprise resource planning systems that manage core business processes and improve organizational efficiency.",
      tags: ["ERP", "CRM", "Business Systems"],
    },
    {
      icon: "robot",
      title: "Automation",
      description:
        "Streamline your workflows and eliminate repetitive tasks with intelligent automation solutions — from RPA bots to custom business process automation.",
      tags: ["RPA", "Workflow", "Integration"],
    },
   
  ],

  // 4. تقنيات العمل (Tech Stack)
  techStack: [
    "HTML5",
    "CSS3",
    "Sass",
    "JavaScript (ES6+)",
    "TypeScript",
    "Angular",
    "Angular Material",
    "Bootstrap 5",
    "Git",
    "REST APIs",
    "JWT Auth",
    "Responsive Design",
    "Dependency Injection",
    "SPA Architecture",
    "Modular Components",
    "Figma (UI/UX)",
    "Hosting & Deployment",
  ],
};
