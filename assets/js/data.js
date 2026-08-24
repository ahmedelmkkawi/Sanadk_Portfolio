/**
 * ============================================================================
 * Sanadk Portfolio — Central Projects & Site Data Configuration
 * ============================================================================
 *
 * يحتوي هذا الملف على بيانات المشاريع والخدمات والتقنيات وإعدادات الموقع.
 * بيانات الفريق تم فصلها في ملف منفصل: assets/js/team-data.js
 */

const PORTFOLIO_DATA = {
  // 1. معلومات الموقع والتواصل
  siteConfig: {
    brandName: "Sanadk",
    tagline: "We build digital products that solve real problems.",
    email: "sanadk@gamil.com",
    phone: "+20 0106 593 7431",
    website: "https://portfolio.sanadk.org",
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
        "Portfolio site Daniels showcasing dynamic scrolling, filtering, and design transitions.",
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
        live: "https://portfolio.sanadk.org",
        github: "https://github.com/",
      },
      featured: true,
    },
    {
      id: "3",
      slug: "EduPlatform",
      title: "EduPlatform",
      tagline: "Modern Educational & Course Learning Management Platform.",
      category: "web",
      categoryLabel: "WEB",
      description:
        "Full-featured online learning and course platform providing course catalogs, student enrollments, interactive quizzes, and API integrations.",
      image: "assets/images/projects/EduPlatform/main.jpeg",
      screenshots: [
        "assets/images/projects/EduPlatform/main.jpeg",
        "assets/images/projects/EduPlatform/2.jpeg",
        "assets/images/projects/EduPlatform/3.jpeg",
        "assets/images/projects/EduPlatform/4.jpeg",
        "assets/images/projects/EduPlatform/5.jpeg",
      ],
      technologies: ["React js", "Express js", "SqlLite", "Typescript"],
      role: "Backend Development",
      roleDetails: [
        "Developed backend API for the educational platform using Node.js and Express.js.",
        "Integrated with SQLite database to manage courses, users, and enrollments.",
      ],
      features: [
        "Course Catalog & Enrollment Management",
        "User Progress Tracking",
        "Secure Authentication & Database APIs",
      ],
      teamMembers: [
        {
          name: "Elmasry",
          role: "Head of frontend development",
          avatar: "assets/images/team/Mahmoud Elmasry.jpeg",
        },
      ],
      links: {
        live: "https://portfolio.sanadk.org",
        github: "https://github.com/",
      },
      featured: true,
    },
    {
      id: "4",
      slug: "erp-inventory-v1",
      title: "نظام إدارة المخزون والمبيعات (ERP) – النسخة الأولى",
      tagline: "نظام برمجي متكامل لإدارة المخزون والمبيعات والمشتريات والمحاسبة بواجهة عربية حديثة.",
      category: "erp",
      categoryLabel: "ERP System",
      description:
        "نظام برمجي متكامل لإدارة المخزون والمبيعات والمشتريات بواجهة عربية حديثة. يتيح تسجيل الدخول للمستخدمين، وإدارة الأصناف والعملاء، وإنشاء فواتير بيع وشراء، ومتابعة الفواتير والمرتجعات، إلى جانب قسم محاسبي يعرض الأرباح والمصروفات وحركة الأموال. كما يضم لوحة تحكم رئيسية تلخّص أعداد الفواتير وحالة المخزون بشكل سريع ومباشر.",
      image: "assets/images/projects/نظام إدارة المخزون والمبيعات (ERP)/main.png",
      screenshots: [
        "assets/images/projects/نظام إدارة المخزون والمبيعات (ERP)/main.png",
        "assets/images/projects/نظام إدارة المخزون والمبيعات (ERP)/Screenshot 2026-08-25 012114.png",
        "assets/images/projects/نظام إدارة المخزون والمبيعات (ERP)/Screenshot 2026-08-25 012129.png",
        "assets/images/projects/نظام إدارة المخزون والمبيعات (ERP)/Screenshot 2026-08-25 012145.png",
        "assets/images/projects/نظام إدارة المخزون والمبيعات (ERP)/Screenshot 2026-08-25 012157.png",
        "assets/images/projects/نظام إدارة المخزون والمبيعات (ERP)/Screenshot 2026-08-25 012218.png",
        "assets/images/projects/نظام إدارة المخزون والمبيعات (ERP)/Screenshot 2026-08-25 012235.png",
        "assets/images/projects/نظام إدارة المخزون والمبيعات (ERP)/Screenshot 2026-08-25 012249.png",
        "assets/images/projects/نظام إدارة المخزون والمبيعات (ERP)/Screenshot 2026-08-25 012302.png",
        "assets/images/projects/نظام إدارة المخزون والمبيعات (ERP)/Screenshot 2026-08-25 012316.png",
        "assets/images/projects/نظام إدارة المخزون والمبيعات (ERP)/Screenshot 2026-08-25 012330.png",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap 5", "Chart.js"],
      role: "Backend Architecture & Full-Stack Development",
      roleDetails: [
        "بناء وتطوير هيكل قاعدة البيانات ولوحة التحكم المحاسبية المتكاملة.",
        "برمجة نظام الفواتير والمخزون وحساب الأرباح والمصروفات بدقة عالية.",
        "تصميم واجهة عربية متكاملة وسهلة الاستخدام للمستخدمين والمسؤولين.",
      ],
      features: [
        "لوحة تحكم إحصائية لحالة المخزون والفواتير لحظياً",
        "إدارة شاملة للمبيعات والمشتريات والمرتجعات",
        "قسم محاسبي متكامل لحركة الأموال والأرباح والمصروفات",
        "إدارة صلاحيات المستخدمين والعملاء والموردين",
      ],
      teamMembers: [
        {
          name: "Hamdy Elhakeem",
          role: "Backend Architect & System Engineer",
          avatar: "assets/images/team/Hamdy Elhakeem.jpg",
        },
      ],
      links: {
        live: "",
        github: "",
      },
      featured: true,
    },
    {
      id: "5",
      slug: "erp-inventory-accounting-v2",
      title: "نظام إدارة المخزون والمحاسبة – النسخة الثانية",
      tagline: "إصدار مخصص لإدارة المخزون والعمليات المحاسبية وخطط استهلاك المواد الخام.",
      category: "erp",
      categoryLabel: "ERP System",
      description:
        "نسخة أخرى من نظام إدارة المخزون بتصميم أبسط وألوان مختلفة عن النسخة الأولى، تشمل نفس الوظائف الأساسية من إدارة المخزون والعملاء وفواتير البيع والشراء والمرتجعات، بالإضافة إلى قسم للمحاسبة يوضح الحركات المالية، وقسم لإنشاء خطط استهلاك المواد الخام. صُممت هذه النسخة لتناسب استخدامًا أو عميلًا مختلفًا بنفس فكرة النظام الأول.",
      image: "assets/images/projects/نظام إدارة المخزون والمحاسبة/main.png",
      screenshots: [
        "assets/images/projects/نظام إدارة المخزون والمحاسبة/main.png",
        "assets/images/projects/نظام إدارة المخزون والمحاسبة/Screenshot 2026-08-25 012631.png",
        "assets/images/projects/نظام إدارة المخزون والمحاسبة/Screenshot 2026-08-25 012651.png",
        "assets/images/projects/نظام إدارة المخزون والمحاسبة/Screenshot 2026-08-25 012711.png",
        "assets/images/projects/نظام إدارة المخزون والمحاسبة/Screenshot 2026-08-25 012731.png",
        "assets/images/projects/نظام إدارة المخزون والمحاسبة/Screenshot 2026-08-25 012752.png",
        "assets/images/projects/نظام إدارة المخزون والمحاسبة/Screenshot 2026-08-25 012830.png",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Chart.js", "CSS3"],
      role: "Backend Architecture & Database Design",
      roleDetails: [
        "تطوير وحدات إدارة وتتبع استهلاك المواد الخام بدقة.",
        "برمجة الحركات المالية والحسابات المبسطة للمنشأة.",
        "تنفيذ واجهة مستخدم نظيفة وبسيطة تركز على السرعة والإنتاجية.",
      ],
      features: [
        "خطط استهلاك ومتابعة المواد الخام بدقة",
        "إدارة العملاء وفواتير البيع والشراء والمرتجعات",
        "دفتر أستاذ وحركات مالية مبسطة وسريعة",
        "تقارير تصدير المخزون والإحصائيات الدورية",
      ],
      teamMembers: [
        {
          name: "Hamdy Elhakeem",
          role: "Backend Architect & System Engineer",
          avatar: "assets/images/team/Hamdy Elhakeem.jpg",
        },
      ],
      links: {
        live: "",
        github: "",
      },
      featured: true,
    },
    {
      id: "6",
      slug: "dental-motion-graphics-red",
      title: "موقع كورس دينتال موشن جرافيك – النسخة الحمراء",
      tagline: "صفحة هبوط تسويقية لكورس تعليمي متخصص في صناعة المحتوى البصري لطب الأسنان.",
      category: "web",
      categoryLabel: "Landing Page",
      description:
        "صفحة هبوط (Landing Page) لكورس تعليمي بعنوان 'دينتال موشن جرافيك' يقدّمه الدكتور عبدالرحمن عثمان، يستهدف تعليم صناعة المحتوى والمونتاج البصري المتخصص في المجال الطبي وطب الأسنان باستخدام برامج After Effects وPhotoshop. يعرض الموقع نبذة عن الكورس، ونماذج من أعمال سابقة (Showcase)، وتفاصيل عن أقسام الكورس المختلفة مثل After Effects وMotion Surgery، بتصميم داكن بدرجات اللون الموف والأحمر الداكن.",
      image: "assets/images/projects/موقع كورس دينتال موشن جرافيك النسخة الحمراء/main.png",
      screenshots: [
        "assets/images/projects/موقع كورس دينتال موشن جرافيك النسخة الحمراء/main.png",
        "assets/images/projects/موقع كورس دينتال موشن جرافيك النسخة الحمراء/Screenshot 2026-08-25 013258.png",
        "assets/images/projects/موقع كورس دينتال موشن جرافيك النسخة الحمراء/Screenshot 2026-08-25 013319.png",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Cloudflare Pages"],
      role: "Web Development & UI Design",
      roleDetails: [
        "تطوير واجهة الهبوط الترويجية التفاعلية للكورس.",
        "تنفيذ معرض أعمال سابقة (Showcase) وأقسام المناهج التدريبية.",
        "تحسين سرعة التحميل والتوافق التام مع كافة الشاشات.",
      ],
      features: [
        "استعراض نماذج مرئية لمشاريع الموشن جرافيك الطبي",
        "شرح مفصل لوحدات الكورس وMotion Surgery",
        "تصميم جذاب بدرجات الأحمر والموف الداكن",
        "روابط حجز سريعة ونماذج تواصل مباشرة",
      ],
      teamMembers: [
        {
          name: "Hamdy Elhakeem",
          role: "Full Stack & Web Developer",
          avatar: "assets/images/team/Hamdy Elhakeem.jpg",
        },
      ],
      links: {
        live: "https://odonto-graphics-site.pages.dev/",
        github: "",
      },
      featured: true,
    },
    {
      id: "7",
      slug: "b2b-service-providers-platform",
      title: "منصة ربط الشركات بمزودي الخدمات",
      tagline: "منصة إلكترونية لربط رواد الأعمال والشركات بأفضل مزودي الخدمات في التسويق والتصميم والبرمجة.",
      category: "web",
      categoryLabel: "B2B Platform",
      description:
        "منصة إلكترونية تربط أصحاب الأعمال بأفضل الشركات المتخصصة لتنفيذ مشاريعهم في مجالات مثل التسويق والتصميم والبرمجة وغيرها. يعرض الموقع إحصائيات ثقة مثل عدد المشاريع المنفذة ونسبة رضا العملاء وعدد الشركات المسجّلة، ويتيح للمستخدم تصفح قائمة الشركات المتاحة والتواصل معها مباشرة وطلب عرض سعر.",
      image: "assets/images/projects/منصة ربط الشركات بمزودي الخدمات/main.png",
      screenshots: [
        "assets/images/projects/منصة ربط الشركات بمزودي الخدمات/main.png",
        "assets/images/projects/منصة ربط الشركات بمزودي الخدمات/Screenshot 2026-08-25 013644.png",
        "assets/images/projects/منصة ربط الشركات بمزودي الخدمات/Screenshot 2026-08-25 013656.png",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "REST APIs"],
      role: "Web Development & Frontend Architecture",
      roleDetails: [
        "بناء الواجهة التفاعلية لتصفح وتصنيف الشركات ومزودي الخدمات.",
        "تنفيذ نظام إحصائيات الثقة ومعدلات رضا العملاء.",
        "برمجة نماذج طلب عروض الأسعار والتواصل المباشر.",
      ],
      features: [
        "دليل تفاعلي للشركات ومزودي الخدمات المتخصصة",
        "مؤشرات ثقة وإحصائيات مباشرة لنسبة الرضا والمشاريع المنفذة",
        "نظام طلب عروض الأسعار (RFQ) والتواصل السريع",
        "تصميم عصري متجاوب يدعم الفلترة السريعة للمجالات",
      ],
      teamMembers: [
        {
          name: "Hamdy Elhakeem",
          role: "Full Stack & Web Developer",
          avatar: "assets/images/team/Hamdy Elhakeem.jpg",
        },
      ],
      links: {
        live: "",
        github: "",
      },
      featured: true,
    },
    {
      id: "8",
      slug: "dental-motion-graphics-dark",
      title: "موقع كورس دينتال موشن جرافيك – النسخة الداكنة",
      tagline: "صفحة هبوط لكورس دينتال موشن جرافيك 3×1 بتصميم داكن كحلي وعروض الحجز المباشر.",
      category: "web",
      categoryLabel: "Landing Page",
      description:
        "نسخة ثانية من موقع كورس 'دينتال موشن جرافيك' بتصميم داكن باللون الأزرق الكحلي، تعرض تفاصيل أقسام الكورس مثل تعديل الحالات (Case Editing) بأسلوب Before/After، وتصميم منشورات عرض الحالات (Case Post Design)، بالإضافة إلى قسم للعروض والحجز يوضح أسعار الكورس والعروض الترويجية المتاحة.",
      image: "assets/images/projects/موقع كورس دينتال موشن جرافيك النسخة الداكنة/main.png",
      screenshots: [
        "assets/images/projects/موقع كورس دينتال موشن جرافيك النسخة الداكنة/main.png",
        "assets/images/projects/موقع كورس دينتال موشن جرافيك النسخة الداكنة/Screenshot 2026-08-25 013258.png",
        "assets/images/projects/موقع كورس دينتال موشن جرافيك النسخة الداكنة/Screenshot 2026-08-25 013319.png",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Cloudflare Pages"],
      role: "Web Development & UI Architecture",
      roleDetails: [
        "تصميم وتطوير الموقع بالكامل بطابع داكن عصري باللون الكحلي.",
        "تنفيذ قسم استعراض الحالات Before/After وتصميم بوستات الحالات.",
        "برمجة بطاقات العروض والأسعار وحساب التخفيضات الترويجية.",
      ],
      features: [
        "استعراض احترافي لمقارنات Case Editing (قبل وبعد)",
        "قسم متخصص لتصميم بوستات عرض الحالات الطبية",
        "جدول أسعار وباقات الاشتراك مع العروض الخاصة",
        "أداء فائق السرعة واستجابة كاملة للشاشات",
      ],
      teamMembers: [
        {
          name: "Hamdy Elhakeem",
          role: "Full Stack & Web Developer",
          avatar: "assets/images/team/Hamdy Elhakeem.jpg",
        },
      ],
      links: {
        live: "https://dentographics-site.pages.dev/",
        github: "",
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
    "JavaScript (ES6+)",
    "TypeScript",
    "PHP",
    "Laravel",
    "MySQL",
    "Angular",
    "React",
    "Node.js",
    "Express",
    "Bootstrap 5",
    "Tailwind CSS",
    "Git",
    "REST APIs",
    "Chart.js",
    "Cloudflare",
  ],
};
