/**
 * Sanadk  Portfolio — Main Native JavaScript
 * Handles DOM rendering, Scroll-Based Reveals, Featured Carousel, Search & Filters.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  highlightActiveNav();
  initCustomCursor();
  initMagneticButtons();

  const page = document.body.dataset.page;

  if (page === "home") {
    initHomePage();
    initHeroMesh();
    initDynamicHeroText();
  } else if (page === "projects") {
    initProjectsPage();
  } else if (page === "project-detail") {
    initProjectDetailPage();
  }

  // Initialize IntersectionObserver scroll reveals
  initScrollReveal();
});

/* IntersectionObserver Scroll Reveal System */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.1,
      },
    );

    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("active"));
  }
}

/* Helper to get data regardless of format */
function getPortfolioData() {
  const team =
    typeof TEAM_DATA !== "undefined"
      ? TEAM_DATA
      : typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA.team
        ? PORTFOLIO_DATA.team
        : [];

  if (typeof PORTFOLIO_DATA !== "undefined") {
    return {
      ...PORTFOLIO_DATA,
      team: team,
    };
  }
  return { projects: [], services: [], techStack: [], team: team };
}

/* Navigation Utilities */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileToggle");
  const menu = document.getElementById("mobileMenu");

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }
}

function highlightActiveNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function createProjectCardHTML(project, index = 0) {
  const techBadges = (project.technologies || [])
    .slice(0, 4)
    .map(
      (tech) =>
        `<span class="text-xs bg-white/10 text-white px-2.5 py-1 rounded-md border border-white/5 font-medium">${tech}</span>`,
    )
    .join("");

  let teamAvatarHTML = "";
  if (project.teamMembers && project.teamMembers.length > 0) {
    const firstMember = project.teamMembers[0];
    const name =
      typeof firstMember === "object" ? firstMember.name : firstMember;
    const avatar =
      typeof firstMember === "object" && firstMember.avatar
        ? firstMember.avatar
        : null;
    const initial = name ? name.charAt(0).toUpperCase() : "A";

    if (avatar) {
      teamAvatarHTML = `
        <div class="flex items-center gap-2">
          <img src="${avatar}" alt="${name}" title="${name}" class="w-8 h-8 rounded-full object-cover border border-amber-400/40 shadow-sm" />
          <span class="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">${name}</span>
        </div>
      `;
    } else {
      teamAvatarHTML = `
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-200 font-extrabold flex items-center justify-center text-xs" title="${name}">
            ${initial}
          </div>
          <span class="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">${name}</span>
        </div>
      `;
    }
  } else {
    teamAvatarHTML = `
      <div class="w-8 h-8 rounded-full bg-white/10 text-white font-extrabold flex items-center justify-center text-xs">
        S
      </div>
    `;
  }

  const delayClass =
    index === 0
      ? ""
      : index === 1
        ? "delay-1"
        : index === 2
          ? "delay-2"
          : "delay-3";

  return `
    <a href="project.html?project=${project.slug}" class="project-card reveal ${delayClass} group flex flex-col h-[480px] bg-[#6f0f0f] border border-white/10 hover:border-amber-400/40 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-amber-950/40 cursor-pointer block text-left">
      <!-- Image Thumbnail -->
      <div class="relative h-52 overflow-hidden bg-neutral-900 flex-shrink-0">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        <span class="absolute top-4 left-4 inline-block px-3 py-1 text-[11px] font-extrabold tracking-wider text-amber-300 uppercase bg-black/80 rounded-full border border-amber-400/30 backdrop-blur-md">
          ${project.categoryLabel || project.category}
        </span>
      </div>

      <!-- Details Content -->
      <div class="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 class="text-2xl font-heading font-extrabold text-white mb-2 line-clamp-1 group-hover:text-amber-300 transition-colors">
            ${project.title}
          </h3>
          <p class="text-xs text-neutral-300 mb-4 line-clamp-2 leading-relaxed">
            ${project.tagline || project.description}
          </p>

          <!-- Technologies list -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${techBadges}
          </div>
        </div>

        <div>
          <!-- Card Footer Actions -->
          <div class="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
            <!-- Left: Avatar -->
            ${teamAvatarHTML}

            <!-- Right: Actions -->
            <div class="flex items-center gap-2">
              ${
                project.links && project.links.live
                  ? `
                <span onclick="event.preventDefault(); event.stopPropagation(); window.open('${project.links.live}', '_blank');" class="p-2 rounded-xl bg-white/10 hover:bg-amber-400 hover:text-black text-white transition-all border border-white/10 cursor-pointer shadow-sm" title="Live Preview">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </span>
              `
                  : ""
              }
              <span class="w-8 h-8 rounded-xl bg-white/10 group-hover:bg-amber-400 group-hover:text-black text-amber-300 flex items-center justify-center transition-all duration-300 border border-white/10 group-hover:border-amber-400">
                <i class="fas fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-0.5"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  `;
}

/* ==========================================================================
   Home Page Logic & Carousel
   ========================================================================== */

function initHomePage() {
  const data = getPortfolioData();

  // Filter projects where featured === true
  const featuredProjects = data.projects.filter(
    (p) => p.featured === true || p.featured === "true",
  );

  initFeaturedCarousel(featuredProjects);

  // Render Services / Tech Solutions
  const servicesContainer = document.getElementById("servicesContainer");
  if (servicesContainer && data.services) {
    servicesContainer.innerHTML = data.services
      .map(
        (service, idx) => `
      <div class="reveal ${idx > 0 ? `delay-${idx % 4}` : ""} service-card flex flex-col justify-between">
        <div>
          <div class="service-icon">
            <i class="fas fa-${service.icon}"></i>
          </div>
          <h3 class="service-title">${service.title}</h3>
          <p class="service-desc">${service.description}</p>
        </div>
        ${
          service.tags
            ? `
          <div class="tech-tags" style="margin-top: 1.25rem; padding-top: 0.75rem; border-top: 1px solid var(--border-dark);">
            ${service.tags.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
        `
            : ""
        }
      </div>
    `,
      )
      .join("");
  }

  // Render Team Members (Compact 4 per row, centered layout)
  const teamContainer = document.getElementById("teamContainer");
  if (teamContainer && data.team) {
    teamContainer.className = "flex flex-wrap justify-center gap-4 sm:gap-5";
    const isWhiteSection = teamContainer.closest(".section-white") !== null;

    teamContainer.innerHTML = data.team
      .map((member, idx) => {
        const cardBgClass = isWhiteSection
          ? "bg-white border-slate-200 text-slate-900 shadow-md hover:border-amber-500/50"
          : "bg-[#120505] border-white/10 text-white shadow-xl hover:border-amber-500/40";

        const titleColorClass = isWhiteSection
          ? "text-slate-900"
          : "text-white";
        const roleColorClass = isWhiteSection
          ? "text-[#781e1e]"
          : "text-amber-500";
        const badgeBgClass = isWhiteSection
          ? "bg-slate-100 text-slate-700 border-slate-200"
          : "bg-white/10 text-white border-white/5";
        const iconBorderClass = isWhiteSection
          ? "border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200"
          : "border-white/20 bg-white/10 text-white hover:bg-white/20";
        const bioGradientClass = isWhiteSection
          ? "from-slate-900/90 via-slate-900/40"
          : "from-black/95 via-black/40";

        const isValidLink = (url) => {
          if (!url || typeof url !== "string") return false;
          const trimmed = url.trim();
          return (
            trimmed !== "" &&
            trimmed !== "#" &&
            trimmed !== "javascript:void(0);" &&
            trimmed !== "javascript:void(0)"
          );
        };

        const hasLinkedin =
          member.socialLinks && isValidLink(member.socialLinks.linkedin);
        const hasGithub =
          member.socialLinks && isValidLink(member.socialLinks.github);
        const hasPortfolio =
          member.socialLinks && isValidLink(member.socialLinks.portfolio);
        const hasAnySocial = hasLinkedin || hasGithub || hasPortfolio;

        const activeProjects = (member.activeProjects || []).filter(
          (p) => p && typeof p === "string" && p.trim() !== "",
        );

        return `
        <div class="reveal ${idx > 0 ? `delay-${idx % 4}` : ""} group flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-15px)] max-w-[270px] p-4 rounded-2xl ${cardBgClass} border transition-all duration-300">
          <!-- Image frame -->
          <div class="relative h-44 rounded-xl overflow-hidden mb-3 bg-neutral-900 border border-black/10 flex-shrink-0">
            <img src="${member.avatar || "assets/images/team/member1.svg"}" alt="${member.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t ${bioGradientClass} to-transparent flex items-end p-2.5">
              <p class="text-[10px] text-white italic line-clamp-2 leading-tight">"${member.bio || ""}"</p>
            </div>
          </div>

          <!-- Details -->
          <div class="flex flex-col justify-between flex-grow">
            <div>
              <h3 class="text-base font-heading font-extrabold ${titleColorClass} mb-0.5 line-clamp-1">${member.name}</h3>
              <span class="inline-block text-[10px] font-bold ${roleColorClass} uppercase tracking-wider mb-2 line-clamp-1">${member.role}</span>

              <!-- Skills -->
              <div class="flex flex-wrap gap-1 mb-3">
                ${(member.skills || [])
                  .slice(0, 4)
                  .map(
                    (s) =>
                      `<span class="text-[9px] font-medium ${badgeBgClass} px-2 py-0.5 rounded border">${s}</span>`,
                  )
                  .join("")}
              </div>
            </div>

            <!-- Active Projects & Social Connect -->
            <div class="border-t ${isWhiteSection ? "border-slate-200" : "border-white/10"} pt-2.5 mt-auto space-y-2">
              ${
                activeProjects.length > 0
                  ? `
                <div>
                  <span class="text-[9px] ${isWhiteSection ? "text-slate-500" : "text-neutral-400"} block mb-1 uppercase tracking-wider font-extrabold">Active Projects</span>
                  <div class="flex flex-wrap gap-1">
                    ${activeProjects.map((p) => `<span class="text-[9px] ${badgeBgClass} px-2 py-0.5 rounded border font-medium line-clamp-1">${p}</span>`).join("")}
                  </div>
                </div>
              `
                  : ""
              }

              ${
                hasAnySocial
                  ? `
                <div class="flex items-center justify-between pt-1">
                  <span class="text-[9px] ${isWhiteSection ? "text-slate-500" : "text-neutral-400"} uppercase tracking-wider font-extrabold">Connect</span>
                  <div class="flex gap-1.5">
                    ${
                      hasLinkedin
                        ? `
                      <a href="${member.socialLinks.linkedin.trim()}" target="_blank" rel="noopener noreferrer" class="w-7 h-7 rounded-full border ${iconBorderClass} flex items-center justify-center transition-all shadow text-[10px]" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    `
                        : ""
                    }
                    ${
                      hasGithub
                        ? `
                      <a href="${member.socialLinks.github.trim()}" target="_blank" rel="noopener noreferrer" class="w-7 h-7 rounded-full border ${iconBorderClass} flex items-center justify-center transition-all shadow text-[10px]" title="GitHub"><i class="fab fa-github"></i></a>
                    `
                        : ""
                    }
                    ${
                      hasPortfolio
                        ? `
                      <a href="${member.socialLinks.portfolio.trim()}" target="_blank" rel="noopener noreferrer" class="w-7 h-7 rounded-full border ${iconBorderClass} flex items-center justify-center transition-all shadow text-[10px]" title="Portfolio"><i class="fas fa-globe"></i></a>
                    `
                        : ""
                    }
                  </div>
                </div>
              `
                  : ""
              }
            </div>
          </div>
        </div>
      `;
      })
      .join("");
  }

  // Re-observe dynamically injected reveals
  initScrollReveal();
}

function initFeaturedCarousel(featuredProjects) {
  const track = document.getElementById("carouselTrack");
  const dotsContainer = document.getElementById("carouselDots");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");

  if (!track) return;

  if (!featuredProjects || featuredProjects.length === 0) {
    track.innerHTML = `
      <div class="carousel-slide" style="grid-template-columns: 1fr; text-align: center;">
        <p class="text-muted">No featured projects found. Set "featured: true" in data.js to feature projects here!</p>
      </div>
    `;
    return;
  }

  // Render Carousel Slides
  track.innerHTML = featuredProjects
    .map(
      (project) => `
    <div class="carousel-slide">
      <div class="slide-image-box">
        <img src="${project.image}" alt="${project.title}" />
      </div>
      <div class="slide-content-box">
        <span class="slide-category">${project.categoryLabel || project.category}</span>
        <h3 class="slide-title">${project.title}</h3>
        <p class="slide-desc">${project.tagline || project.description}</p>
        <div class="tech-tags" style="margin-bottom: 1.5rem;">
          ${(project.technologies || [])
            .slice(0, 4)
            .map((t) => `<span class="tech-tag">${t}</span>`)
            .join("")}
        </div>
        <a href="project.html?project=${project.slug}" class="btn btn-primary">
          View Project <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `,
    )
    .join("");

  // Render Indicator Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = featuredProjects
      .map(
        (_, idx) => `
      <button type="button" class="carousel-dot ${idx === 0 ? "active" : ""}" data-index="${idx}" aria-label="Go to slide ${idx + 1}"></button>
    `,
      )
      .join("");
  }

  let currentIndex = 0;
  const totalSlides = featuredProjects.length;
  let autoplayTimer = null;

  function updateSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update Dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".carousel-dot");
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) dot.classList.add("active");
        else dot.classList.remove("active");
      });
    }
  }

  function startAutoplay() {
    stopAutoplay();
    if (totalSlides > 1) {
      autoplayTimer = setInterval(() => {
        updateSlide(currentIndex + 1);
      }, 3000); // 3 seconds interval
    }
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  // Navigation Event Listeners
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      updateSlide(currentIndex - 1);
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      updateSlide(currentIndex + 1);
      startAutoplay();
    });
  }

  if (dotsContainer) {
    dotsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("carousel-dot")) {
        const idx = parseInt(e.target.dataset.index, 10);
        updateSlide(idx);
        startAutoplay();
      }
    });
  }

  // Hover Pause
  const wrapper = track.closest(".carousel-wrapper");
  if (wrapper) {
    wrapper.addEventListener("mouseenter", stopAutoplay);
    wrapper.addEventListener("mouseleave", startAutoplay);
  }

  // Start initial autoplay
  startAutoplay();
}

/* ==========================================================================
   Projects Showcase Page Logic
   ========================================================================== */

function initProjectsPage() {
  const data = getPortfolioData();
  const container = document.getElementById("projectsGrid");
  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");
  const techSelect = document.getElementById("techSelect");

  if (!container) return;

  let activeCategory = "all";
  let activeTech = "all";
  let searchQuery = "";

  function filterAndRender() {
    const filtered = (data.projects || []).filter((project) => {
      // Category filter
      const matchesCat =
        activeCategory === "all" ||
        (project.category &&
          project.category.toLowerCase() === activeCategory.toLowerCase());

      // Technology filter
      const matchesTech =
        activeTech === "all" ||
        (project.technologies &&
          project.technologies.some(
            (t) => t.toLowerCase() === activeTech.toLowerCase(),
          ));

      // Search query
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        (project.technologies &&
          project.technologies.some((t) => t.toLowerCase().includes(q)));

      return matchesCat && matchesTech && matchesSearch;
    });

    if (filtered.length > 0) {
      container.innerHTML = filtered
        .map((p, idx) => createProjectCardHTML(p, idx))
        .join("");
    } else {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0;" class="text-white">
          <i class="fas fa-folder-open" style="font-size: 2.5rem; margin-bottom: 1rem; display: block; opacity: 0.6;"></i>
          <h3 class="text-xl font-bold mb-2">No projects match your filters</h3>
          <p class="text-sm opacity-70">Try adjusting your search term, category, or technology select filter.</p>
        </div>
      `;
    }

    // Re-observe dynamically injected project cards
    initScrollReveal();
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      filterAndRender();
    });
  }

  // Category select handler
  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      activeCategory = e.target.value;
      filterAndRender();
    });
  }

  // Tech select handler
  if (techSelect) {
    techSelect.addEventListener("change", (e) => {
      activeTech = e.target.value;
      filterAndRender();
    });
  }

  // Initial render
  filterAndRender();
}

/* ==========================================================================
   Project Detail Page Logic
   ========================================================================== */

function initProjectDetailPage() {
  const data = getPortfolioData();
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project");

  const contentArea = document.getElementById("projectDetailContent");
  const notFoundArea = document.getElementById("projectNotFound");

  const project = (data.projects || []).find(
    (p) => p.slug === slug || p.id === slug,
  );

  if (!project) {
    if (contentArea) contentArea.style.display = "none";
    if (notFoundArea) notFoundArea.style.display = "block";
    return;
  }

  if (notFoundArea) notFoundArea.style.display = "none";
  if (contentArea) contentArea.style.display = "block";

  document.title = `${project.title} — Sanadk  Portfolio`;

  const categoryElem = document.getElementById("detailCategory");
  if (categoryElem)
    categoryElem.textContent = project.categoryLabel || project.category;

  const titleElem = document.getElementById("detailTitle");
  if (titleElem) titleElem.textContent = project.title;

  const taglineElem = document.getElementById("detailTagline");
  if (taglineElem) taglineElem.textContent = project.tagline;

  // Project Media Screenshots & Interactive Carousel
  const screenshots =
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : project.image
        ? [project.image]
        : [];

  const trackElem = document.getElementById("detailCarouselTrack");
  const thumbsElem = document.getElementById("detailGalleryThumbnails");
  const prevBtn = document.getElementById("detailCarouselPrev");
  const nextBtn = document.getElementById("detailCarouselNext");
  const counterElem = document.getElementById("detailCarouselCounter");
  const carouselWrapper = document.getElementById("detailCarouselWrapper");

  if (trackElem && screenshots.length > 0) {
    // Render Carousel Slides
    trackElem.innerHTML = screenshots
      .map(
        (src, idx) => `
      <div class="detail-carousel-slide">
        <img src="${src}" alt="${project.title} - Screenshot ${idx + 1}" loading="${idx === 0 ? "eager" : "lazy"}" />
      </div>
    `,
      )
      .join("");

    // Render Side-by-Side Thumbnails
    if (thumbsElem) {
      if (screenshots.length > 1) {
        thumbsElem.style.display = "flex";
        thumbsElem.innerHTML = screenshots
          .map(
            (src, idx) => `
          <button type="button" class="gallery-thumb-btn ${idx === 0 ? "active" : ""}" data-index="${idx}" aria-label="View screenshot ${idx + 1}">
            <img src="${src}" alt="Thumbnail ${idx + 1}" />
          </button>
        `,
          )
          .join("");
      } else {
        thumbsElem.style.display = "none";
      }
    }

    let currentIndex = 0;
    const totalSlides = screenshots.length;
    let autoplayTimer = null;

    function updateSlide(index) {
      if (totalSlides <= 0) return;
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;

      currentIndex = index;
      trackElem.style.transform = `translateX(-${currentIndex * 100}%)`;

      // Update Active Thumbnail
      if (thumbsElem) {
        const thumbBtns = thumbsElem.querySelectorAll(".gallery-thumb-btn");
        thumbBtns.forEach((btn, idx) => {
          if (idx === currentIndex) {
            btn.classList.add("active");
            
            // Scroll only the thumbnail container without scrolling the main window
            const isVertical = window.innerWidth >= 768;
            if (isVertical) {
              const targetScrollTop =
                btn.offsetTop -
                thumbsElem.offsetTop -
                thumbsElem.clientHeight / 2 +
                btn.clientHeight / 2;
              thumbsElem.scrollTo({
                top: Math.max(0, targetScrollTop),
                behavior: "smooth",
              });
            } else {
              const targetScrollLeft =
                btn.offsetLeft -
                thumbsElem.offsetLeft -
                thumbsElem.clientWidth / 2 +
                btn.clientWidth / 2;
              thumbsElem.scrollTo({
                left: Math.max(0, targetScrollLeft),
                behavior: "smooth",
              });
            }
          } else {
            btn.classList.remove("active");
          }
        });
      }

      // Update Slide Counter
      if (counterElem) {
        counterElem.textContent = `${currentIndex + 1} / ${totalSlides}`;
      }
    }

    function startAutoplay() {
      stopAutoplay();
      if (totalSlides > 1) {
        autoplayTimer = setInterval(() => {
          updateSlide(currentIndex + 1);
        }, 3500); // Auto-advance every 3.5 seconds
      }
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    // Prev / Next Button Listeners
    if (prevBtn) {
      if (totalSlides <= 1) {
        prevBtn.style.display = "none";
      } else {
        prevBtn.style.display = "flex";
        prevBtn.onclick = () => {
          updateSlide(currentIndex - 1);
          startAutoplay();
        };
      }
    }

    if (nextBtn) {
      if (totalSlides <= 1) {
        nextBtn.style.display = "none";
      } else {
        nextBtn.style.display = "flex";
        nextBtn.onclick = () => {
          updateSlide(currentIndex + 1);
          startAutoplay();
        };
      }
    }

    if (counterElem) {
      if (totalSlides <= 1) {
        counterElem.style.display = "none";
      } else {
        counterElem.style.display = "block";
        counterElem.textContent = `1 / ${totalSlides}`;
      }
    }

    // Thumbnail Clicks
    if (thumbsElem) {
      thumbsElem.onclick = (e) => {
        const btn = e.target.closest(".gallery-thumb-btn");
        if (btn) {
          const idx = parseInt(btn.dataset.index, 10);
          updateSlide(idx);
          startAutoplay();
        }
      };
    }

    // Pause on Hover
    if (carouselWrapper) {
      carouselWrapper.onmouseenter = stopAutoplay;
      carouselWrapper.onmouseleave = startAutoplay;
      carouselWrapper.ontouchstart = stopAutoplay;
      carouselWrapper.ontouchend = startAutoplay;
    }

    // Start initial autoplay
    startAutoplay();
  }

  const descElem = document.getElementById("detailDescription");
  if (descElem) descElem.textContent = project.description;

  const roleElem = document.getElementById("detailRole");
  if (roleElem)
    roleElem.textContent = project.role || "Development & Integration";

  // Participating Team Members
  const teamElem = document.getElementById("detailTeamMembers");
  if (teamElem) {
    if (project.teamMembers && project.teamMembers.length > 0) {
      teamElem.innerHTML = project.teamMembers
        .map((member) => {
          const name = typeof member === "object" ? member.name : member;
          const role =
            typeof member === "object" && member.role
              ? member.role
              : "Contributor";
          const avatar =
            typeof member === "object" && member.avatar ? member.avatar : null;
          return `
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
            ${
              avatar
                ? `
              <img src="${avatar}" alt="${name}" style="width: 38px; height: 38px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-dark);" />
            `
                : `
              <div style="width: 38px; height: 38px; border-radius: 50%; background-color: rgba(120,30,30,0.1); color: var(--primary); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem;">
                ${name.charAt(0)}
              </div>
            `
            }
            <div>
              <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-white);">${name}</div>
              <div style="font-size: 0.8rem; color: var(--text-white-muted);">${role}</div>
            </div>
          </div>
        `;
        })
        .join("");
    } else {
      teamElem.innerHTML = `<p class="text-muted" style="font-size: 0.85rem;">No team members assigned.</p>`;
    }
  }

  // Role Details List
  const roleListElem = document.getElementById("detailRoleDetails");
  if (roleListElem && project.roleDetails) {
    roleListElem.innerHTML = project.roleDetails
      .map(
        (item) => `
      <li><i class="fas fa-check-circle"></i> <span>${item}</span></li>
    `,
      )
      .join("");
  }

  // Technologies
  const techElem = document.getElementById("detailTechnologies");
  if (techElem && project.technologies) {
    techElem.innerHTML = project.technologies
      .map(
        (t) =>
          `<span class="tech-tag"><i class="fas fa-code text-[11px] text-amber-400 mr-1"></i>${t}</span>`,
      )
      .join("");
  }

  // Features List
  const featuresElem = document.getElementById("detailFeatures");
  if (featuresElem && project.features) {
    featuresElem.innerHTML = project.features
      .map(
        (f) => `
      <li><i class="fas fa-check text-accent"></i> <span>${f}</span></li>
    `,
      )
      .join("");
  }

  // Links (Live & GitHub)
  const linksContainer = document.getElementById("detailLinks");
  if (linksContainer) {
    let linksHTML = "";
    if (project.links && project.links.live) {
      linksHTML += `
        <a href="${project.links.live}" target="_blank" rel="noopener" class="btn btn-primary" style="width: 100%; margin-bottom: 0.75rem;">
          <i class="fas fa-external-link-alt"></i> Live Demo
        </a>
      `;
    }
    if (project.links && project.links.github) {
      linksHTML += `
        <a href="${project.links.github}" target="_blank" rel="noopener" class="btn btn-outline-light" style="width: 100%;">
          <i class="fab fa-github"></i> View Repository
        </a>
      `;
    }
    if (!linksHTML) {
      linksHTML = `<p class="text-muted" style="font-size: 0.9rem;">Internal enterprise system (No public demo link).</p>`;
    }
    linksContainer.innerHTML = linksHTML;
  }

  // Re-observe reveals
  initScrollReveal();
}

/* ==========================================================================
   Interactive Feature 4: Custom Interactive Cursor & Magnetic Buttons
   ========================================================================== */
function initCustomCursor() {
  // Check if touch device
  if (window.matchMedia("(hover: none) or (pointer: coarse)").matches) {
    return;
  }

  // Create cursor DOM elements if not already present
  let cursor = document.getElementById("customCursor");
  if (!cursor) {
    cursor = document.createElement("div");
    cursor.id = "customCursor";
    cursor.className = "custom-cursor";
    cursor.innerHTML = `
      <div class="cursor-dot"></div>
      <div class="cursor-ring">
        <span class="cursor-label"></span>
      </div>
    `;
    document.body.appendChild(cursor);
  }

  const cursorLabel = cursor.querySelector(".cursor-label");

  let mouseX = -100;
  let mouseY = -100;
  let currentX = -100;
  let currentY = -100;
  let isVisible = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      cursor.classList.add("active");
      cursor.classList.remove("hidden");
    }
  });

  document.addEventListener("mouseleave", () => {
    cursor.classList.add("hidden");
    isVisible = false;
  });

  document.addEventListener("mouseenter", () => {
    cursor.classList.remove("hidden");
  });

  // Smooth lerp follow loop
  function renderCursor() {
    currentX += (mouseX - currentX) * 0.18;
    currentY += (mouseY - currentY) * 0.18;

    cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Delegate hover states across document
  document.addEventListener("mouseover", (e) => {
    // Check for interactive cards (Project Card, Carousel Slide, Team Member, Service Card)
    const card = e.target.closest(
      ".project-card, .carousel-slide, .team-card, .service-card, .slide-image-box, .detail-image-box"
    );
    if (card) {
      cursor.classList.add("hovering-card");
      cursor.classList.remove("hovering-link");
      if (card.closest(".team-card")) {
        cursorLabel.textContent = "Team";
      } else if (card.closest(".service-card")) {
        cursorLabel.textContent = "Explore";
      } else {
        cursorLabel.textContent = "View";
      }
      return;
    }

    // Check for clickable links & buttons
    const linkOrBtn = e.target.closest(
      "a, button, .btn, .filter-btn, .carousel-nav-btn, .carousel-dot, input, select"
    );
    if (linkOrBtn) {
      cursor.classList.add("hovering-link");
      cursor.classList.remove("hovering-card");
      cursorLabel.textContent = "";
      return;
    }

    // Default
    cursor.classList.remove("hovering-link", "hovering-card");
    cursorLabel.textContent = "";
  });
}

function initMagneticButtons() {
  if (window.matchMedia("(hover: none) or (pointer: coarse)").matches) {
    return;
  }

  // Use delegation for magnetic buttons so dynamic elements (like carousel buttons, project cards) also work
  document.addEventListener("mousemove", (e) => {
    const target = e.target.closest(".btn, [data-magnetic], .carousel-nav-btn");
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;

    target.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
  });

  document.addEventListener("mouseout", (e) => {
    const target = e.target.closest(".btn, [data-magnetic], .carousel-nav-btn");
    if (target && !target.contains(e.relatedTarget)) {
      target.style.transform = "";
    }
  });
}

/* ==========================================================================
   Interactive Feature 2: Tech Mesh Particle Constellation Canvas
   ========================================================================== */
function initHeroMesh() {
  const canvas = document.getElementById("heroCanvas");
  const heroSection = document.getElementById("heroSection");
  if (!canvas || !heroSection) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = heroSection.offsetWidth);
  let height = (canvas.height = heroSection.offsetHeight);

  let animationFrameId;
  let isHeroVisible = true;

  // Track mouse coordinates relative to hero canvas
  const mouse = {
    x: null,
    y: null,
    radius: 170,
  };

  heroSection.addEventListener("mousemove", (e) => {
    const rect = heroSection.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  heroSection.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Handle Resize
  function handleResize() {
    if (!heroSection || !canvas) return;
    width = canvas.width = heroSection.offsetWidth;
    height = canvas.height = heroSection.offsetHeight;
    createParticles();
  }

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 150);
  });

  // Pause when off-screen to save performance
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isHeroVisible = entry.isIntersecting;
          if (isHeroVisible && !animationFrameId) {
            animate();
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(heroSection);
  }

  // Particle Class
  class Particle {
    constructor() {
      this.reset();
      this.x = Math.random() * width;
      this.y = Math.random() * height;
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 1.8 + 1.2;
      this.baseAlpha = Math.random() * 0.4 + 0.3;
      this.isGold = Math.random() > 0.45;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.pulseAngle = Math.random() * Math.PI * 2;
    }

    update() {
      this.pulseAngle += this.pulseSpeed;
      this.x += this.vx;
      this.y += this.vy;

      // Bounce smoothly off boundaries
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Subtle interaction with mouse
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          // Gentle attraction
          this.x += (dx / dist) * force * 0.8;
          this.y += (dy / dist) * force * 0.8;
        }
      }
    }

    draw() {
      const dynamicAlpha =
        this.baseAlpha + Math.sin(this.pulseAngle) * 0.2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.isGold
        ? `rgba(201, 168, 76, ${Math.max(0.15, dynamicAlpha)})`
        : `rgba(255, 255, 255, ${Math.max(0.1, dynamicAlpha * 0.8)})`;
      ctx.fill();
    }
  }

  let particles = [];

  function createParticles() {
    particles = [];
    const count = Math.min(
      Math.max(Math.floor((width * height) / 16000), 32),
      68
    );
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  createParticles();

  function drawConnections() {
    const maxDist = 120;
    const maxDistSq = maxDist * maxDist;

    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];

      // Draw line to mouse if close
      if (mouse.x !== null && mouse.y !== null) {
        const dmx = mouse.x - p1.x;
        const dmy = mouse.y - p1.y;
        const distMouseSq = dmx * dmx + dmy * dmy;
        const mouseRadiusSq = mouse.radius * mouse.radius;

        if (distMouseSq < mouseRadiusSq) {
          const mouseAlpha = (1 - Math.sqrt(distMouseSq) / mouse.radius) * 0.45;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(201, 168, 76, ${mouseAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      // Draw line to neighboring particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxDistSq) {
          const alpha = (1 - Math.sqrt(distSq) / maxDist) * 0.22;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle =
            p1.isGold || p2.isGold
              ? `rgba(201, 168, 76, ${alpha})`
              : `rgba(255, 255, 255, ${alpha * 0.7})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    if (!isHeroVisible) {
      animationFrameId = null;
      return;
    }

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    drawConnections();

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   Interactive Feature 5: Dynamic Typewriter Text in Hero Title
   ========================================================================== */
function initDynamicHeroText() {
  const dynamicTextElem = document.getElementById("dynamicHeroText");
  if (!dynamicTextElem) return;

  const words = [
    "digital products",
    "enterprise ERPs",
    "scalable web apps",
    "cloud solutions",
    "smart software",
  ];

  let wordIndex = 0;
  let charIndex = words[0].length;
  let isDeleting = true;
  let typingDelay = 2200; // Wait 2.2s before deleting initial word

  function typeLoop() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      // Erase character by character
      charIndex--;
      const text = currentWord.substring(0, charIndex);
      dynamicTextElem.textContent = text || "\u00A0";
      typingDelay = 45; // Fast erasing
    } else {
      // Type character by character
      charIndex++;
      const text = currentWord.substring(0, charIndex);
      dynamicTextElem.textContent = text || "\u00A0";
      typingDelay = 90; // Natural typing rhythm
    }

    // Finished typing the entire word
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingDelay = 2200; // Pause to let user read
    }
    // Finished erasing the word
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingDelay = 400; // Small pause before typing next word
    }

    setTimeout(typeLoop, typingDelay);
  }

  setTimeout(typeLoop, typingDelay);
}
