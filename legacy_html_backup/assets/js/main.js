const profileData = {
  currentRole: "Research Fellow",
  currentOrg: "National University of Singapore (NUS)",
  focus: "AI-Driven Molecular Design & Photoacoustic Imaging",
  methods: "AI/ML · TD-DFT · CASSCF · CASPT2",
  vision: "AI-accelerated discovery of smarter, more sustainable materials",
  heroLead:
    "I spend a lot of time on quantum chemical calculations, then I talk (a lot) with experimental colleagues so the story doesn't stop at the screen. Bench, microscope, spectrum: that's where the loop closes.",
  keywords: [
    "Quantum chemical calculations",
    "Exp ↔ theory",
    "Photostability",
    "Excited states",
    "Molecular design",
    "Bioimaging probes",
    "AI / ML",
    "HPC workflows",
  ],
};

const toolkitChips = [
  { label: "TD-DFT" },
  { label: "SF-TDDFT" },
  { label: "MRSF-TDDFT" },
  { label: "CASSCF" },
  { label: "CASPT2" },
  { label: "Nonadiabatic dynamics" },
  { label: "Quantum chemical calculations" },
  { label: "Spectra ↔ structures" },
  { label: "Python · HPC" },
  { label: "Multimodal ML", soon: true },
];

const heroMetrics = {
  citations: "554",
  hIndex: "12",
  i10Index: "14",
  papers: "30+",
};

const researchThemes = [
  {
    theme: "Photostability and Molecular Design",
    description: "Predicting photothermal degradation pathways and stress-testing in silico to design ultra-stable fluorophores. E.g., predicting stability for long-term live-cell imaging.",
    papers: "Nature Methods (2025), Adv. Sci.",
    icon: "fa-shield-halved"
  },
  {
    theme: "Excited-State Mechanisms",
    description: "Leveraging TD-DFT, CASSCF, and nonadiabatic dynamics to unravel the photochemical mechanisms behind molecular behavior and photoinduced electron transfer.",
    papers: "Nature Protocols (2025), J. Phys. Chem. A, CCS Chem",
    icon: "fa-bolt"
  },
  {
    theme: "Photoswitches and Photocages",
    description: "Designing responsive molecular switches and dark state photocages for advanced biological applications and controllable fluorescence.",
    papers: "JACS (2025), Angew. Chem. (2025)",
    icon: "fa-toggle-on"
  },
  {
    theme: "AI/ML for Molecular Discovery",
    description: "Building automated quantum chemistry workflows and machine learning models to accelerate the discovery of new photoactive materials.",
    papers: "High-throughput screening pipelines",
    icon: "fa-network-wired"
  }
];

const researchPillars = [
  {
    icon: "fa-flask", // Changed from fa-microscope to fa-flask (more common icon)
    title: "Excited-State Dynamics",
    summary:
      "Quantum chemical calculations (TD-DFT and variants, CASSCF/CASPT2) to unravel mechanisms behind photophysics, ultralong emission, and photoinduced processes.",
    badges: ["TD-DFT", "SF-TDDFT", "CASSCF", "CASPT2"],
  },
  {
    icon: "fa-atom", // Changed from fa-dna to fa-atom (more common icon)
    title: "AI-Enhanced Molecular Engineering",
    summary:
      "AI-guided design of organic fluorophores for photoacoustic imaging and photothermal therapy, pairing machine learning with quantum chemical calculations. Multimodal ML (structures, spectra, microscopy) is next on my roadmap.",
    badges: ["AI-Guided Design", "Photoacoustic", "Photothermal", "Multimodal ML (soon)"],
  },
  {
    icon: "fa-lightbulb", // Changed from fa-earth-asia to fa-lightbulb (more common icon)
    title: "AI-Driven Materials Discovery",
    summary:
      "Machine learning and AI for accelerated molecular design, developing photostable materials for optoelectronics and environmental sensing through intelligent property prediction.",
    badges: ["AI/ML", "Photostability", "Materials Discovery"],
  },
];

const educationTimeline = [
  {
    year: "2020 – 2024",
    title: "Doctor of Philosophy – PhD, Science, Maths and Technology",
    institution: "Singapore University of Technology and Design (SUTD)",
    description:
      "Focused on excited-state conformational dynamics of organic dyes under Prof. Xiaogang Liu, using TD-DFT, CASSCF, and CASPT2 methods.",
  },
  {
    year: "2017 – 2019",
    title: "Master of Science – MS, Applied Mathematics and Chemistry",
    institution: "Lahore University of Management Sciences",
    description:
      "Cross-disciplinary training in applied mathematics and chemistry.",
  },
  {
    year: "2011 – 2015",
    title: "Bachelor of Science – BS, Chemical and Biomolecular Engineering",
    institution: "University of Engineering and Technology, Lahore",
    description:
      "Foundational engineering education in chemical and biomolecular processes.",
  },
];

const experienceData = [
  {
    role: "Research Fellow",
    org: "National University of Singapore (NUS)",
    location: "Singapore",
    duration: "Aug 2026 – Present",
    highlights: [
      "Joining to advance research in computational chemistry and molecular design.",
      "Advancing AI-guided fluorophore design for bioimaging and phototherapy applications.",
    ],
  },
  {
    role: "Research Fellow",
    org: "Nanyang Technological University (NTU)",
    location: "Singapore",
    duration: "Jan 2026 – Aug 2026",
    highlights: [
      "Leading full-time research in computational chemistry and molecular design.",
      "Advancing AI-guided fluorophore design for bioimaging and phototherapy applications.",
    ],
  },
  {
    role: "Visiting Research Fellow",
    org: "Nanyang Technological University (NTU)",
    location: "Singapore",
    duration: "Aug 2025 – Jan 2026",
    highlights: [
      "Research collaboration in computational chemistry and molecular design.",
    ],
  },
  {
    role: "Postdoctoral Research Fellow",
    org: "Singapore University of Technology and Design (SUTD)",
    location: "Singapore",
    duration: "Sep 2024 – Jan 2026",
    highlights: [
      "Designing organic fluorophores for photoacoustic imaging and photothermal therapy.",
      "Merging quantum chemical modeling with real-world biomedical applications.",
    ],
  },
  {
    role: "Visiting Researcher",
    org: "University College London",
    location: "London, UK",
    duration: "Mar 2023 – August 2023",
    highlights: [
      "Collaborated with Prof. Rachel Crespo-Otero on excited-state decay pathways.",
      "Simulated excited-state decay in solid-state systems and developed photostable materials.",
    ],
  },
  {
    role: "Visiting Researcher",
    org: "Queen Mary University of London",
    location: "London, UK",
    duration: "Mar 2023 – August 2023",
    highlights: [
      "Advanced expertise in nonadiabatic dynamics and machine learning for molecular design.",
      "Photochemical simulations for photostable materials development.",
    ],
  },
];

// University logos for the Affiliations section on the main page
// Add your photos to assets/img/main/ directory
const partnerLogos = [
  {
    name: "SUTD",
    shortName: "SUTD",
    url: "https://www.sutd.edu.sg/",
    logo: "assets/img/main/sutd.jpg", // Add sutd.jpg to assets/img/main/
  },
  {
    name: "NTU",
    shortName: "NTU",
    url: "https://www.ntu.edu.sg/",
    logo: "assets/img/main/ntu.jpg", // Add ntu.jpg to assets/img/main/
  },
  {
    name: "UCL",
    shortName: "UCL",
    url: "https://www.ucl.ac.uk/",
    logo: "assets/img/main/ucl.jpg", // Add ucl.jpg to assets/img/main/
  },
  {
    name: "Queen Mary University",
    shortName: "QMUL",
    url: "https://www.qmul.ac.uk/",
    logo: "assets/img/main/queen-mary.jpg", // Add queen-mary.jpg to assets/img/main/
  },
  {
    name: "Lahore University of Management Sciences",
    shortName: "LUMS",
    url: "https://lums.edu.pk/",
    logo: "assets/img/main/lums.jpg", // Add lums.jpg to assets/img/main/
  },
  {
    name: "University of Engineering and Technology, Lahore",
    shortName: "UET Lahore",
    url: "https://uet.edu.pk/",
    logo: "assets/img/main/uet-lahore.jpg", // Add uet-lahore.jpg to assets/img/main/
  },
];

const newsHighlights = [
  {
    title: "FB3 2026 in Torino: presented and connected",
    description:
      "Shared work and met colleagues at the 6th International Conference on Fluorescent Biomolecules and their Building Blocks in Italy, with support from NTU and MOE Singapore.",
    tag: "Conference",
  },
  {
    title: "Celebrating My PhD Graduation in Computational Chemistry!",
    description:
      "Successfully completed PhD in Science, Maths and Technology at SUTD, focusing on excited-state conformational dynamics of organic dyes.",
    tag: "Milestone",
  },
  {
    title: "Exciting News: Bursary Award for Summer School in Catalysis!",
    description:
      "Awarded a bursary to attend a summer school in catalysis, furthering research in computational chemistry applications.",
    tag: "Award",
  },
  {
    title: "Oral Presentation at Fluorescent Biomolecules Conference",
    description:
      "Delivered an oral presentation at the Fluorescent Biomolecules conference in Hong Kong, sharing research on photostability and excited-state dynamics.",
    tag: "Conference",
  },
  {
    title: "12th Asian Photochemistry Conference in Melbourne",
    description:
      "Attended and presented at the 12th Asian Photochemistry Conference in Melbourne, Australia, engaging with the photochemistry community.",
    tag: "Conference",
  },
];

// NOTE: Replace with your actual research video/presentation if available
const heroVideo = ""; // Add your video URL here when available

// Hero card removed - profile data kept for potential future use

function researchCardsMarkup() {
  return researchPillars
    .map(
      (pillar, i) => `
      <div class="col-md-4">
        <article class="home-pillar-card h-100 home-pillar-card--${i + 1}">
          <div class="home-pillar-icon text-primary">
            <i class="fa-solid ${pillar.icon}"></i>
          </div>
          <h3 class="h5 fw-bold mb-3">${pillar.title}</h3>
          <p class="text-muted mb-4">${pillar.summary}</p>
          <div class="d-flex flex-wrap gap-2 mt-auto">
            ${pillar.badges
              .map(
                (badge) =>
                  `<span class="home-pillar-badge">${badge}</span>`
              )
              .join("")}
          </div>
        </article>
      </div>`
    )
    .join("");
}

function renderResearchCards() {
  const el = document.getElementById("researchPageCards");
  if (el) el.innerHTML = researchCardsMarkup();
}

function renderTimeline() {
  const template = document.getElementById("timelineItemTemplate");
  const timeline = document.getElementById("educationTimeline");
  if (!template || !timeline) return;
  timeline.innerHTML = "";

  educationTimeline.forEach((item) => {
    const node = template.content.cloneNode(true);
    node.querySelector(".year").textContent = item.year;
    node.querySelector(".title").textContent = item.title;
    node.querySelector(".institution").textContent = item.institution;
    node.querySelector(".description").textContent = item.description;
    timeline.appendChild(node);
  });
}

function renderExperience() {
  const container = document.getElementById("experienceCards");
  if (!container) return;
  container.innerHTML = experienceData
    .map(
      (exp) => `
      <div class="col-md-6 col-lg-4">
        <article class="home-exp-card h-100">
          <p class="home-exp-duration">${exp.duration}</p>
          <h3 class="h5 fw-bold mb-2">${exp.role}</h3>
          <p class="mb-1 fw-medium">${exp.org}</p>
          <p class="text-muted small mb-3">${exp.location}</p>
          <ul class="list-unstyled text-muted small mb-0">
            ${exp.highlights
              .map(
                (point) =>
                  `<li class="mb-2 ps-3 home-exp-li">${point}</li>`
              )
              .join("")}
          </ul>
        </article>
      </div>`
    )
    .join("");
}

function renderPartnerLogos() {
  const container = document.getElementById("partnerLogos");
  if (!container) return;
  container.innerHTML = partnerLogos
    .map(
      (partner) => `
      <div class="col">
        <a
          class="partner-logo-card d-flex align-items-center justify-content-center position-relative"
          href="${partner.url}"
          target="_blank"
          rel="noopener"
        >
          <img 
            src="${partner.logo}" 
            alt="${partner.name}" 
            loading="lazy"
            class="partner-logo-img"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="logo-fallback d-none flex-column align-items-center justify-content-center">
            <i class="fa-solid fa-building-columns fa-2x text-primary mb-2"></i>
            <span class="text-primary fw-semibold small text-center">${partner.shortName || partner.name}</span>
          </div>
        </a>
      </div>`
    )
    .join("");
}

// News carousel removed from main page - now on separate news.html page

// Intro video button removed

function renderHeroKeywords() {
  const el = document.getElementById("heroKeywords");
  if (!el || !profileData.keywords) return;
  el.innerHTML = profileData.keywords
    .map((k) => `<span class="home-keyword-pill">${k}</span>`)
    .join("");
}

function renderToolkit() {
  const el = document.getElementById("heroToolkit");
  if (!el) return;
  el.innerHTML = toolkitChips
    .map((item) => {
      const cls = item.soon ? "home-tool-chip home-tool-chip--soon" : "home-tool-chip";
      const suffix = item.soon ? `<span class="home-tool-soon">soon</span>` : "";
      return `<span class="${cls}">${item.label}${suffix}</span>`;
    })
    .join("");
}

function renderResearchHighlights() {
  const container = document.getElementById("researchHighlightsGrid");
  if (!container) return;
  container.innerHTML = researchThemes
    .map(
      (t) => `
      <div class="col-md-6">
        <div class="home-paper-card h-100 d-flex flex-column p-4 rounded-4 shadow-sm border border-primary-subtle bg-white">
          <div class="d-flex align-items-center mb-3">
            <div class="icon-circle bg-primary-subtle text-primary me-3" style="width: 48px; height: 48px; font-size: 1.25rem;">
              <i class="fa-solid ${t.icon}"></i>
            </div>
            <h3 class="h5 fw-bold mb-0 text-primary">${t.theme}</h3>
          </div>
          <p class="text-muted flex-grow-1">${t.description}</p>
          <div class="mt-auto pt-3 border-top">
            <span class="home-paper-meta mb-0 fw-semibold"><i class="fa-solid fa-book-open me-2"></i>${t.papers}</span>
          </div>
        </div>
      </div>`
    )
    .join("");
}

function renderHomeNews() {
  const container = document.getElementById("homeNewsGrid");
  if (!container) return;
  container.innerHTML = newsHighlights
    .map(
      (n) => `
      <div class="col-md-6 col-lg-3">
        <article class="home-news-tile h-100">
          <span class="home-news-tag">${n.tag}</span>
          <h3 class="home-news-title">${n.title}</h3>
          <p class="home-news-desc">${n.description}</p>
        </article>
      </div>`
    )
    .join("");
}

// Simple counter animation function
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      // Restore the "+" if it was a string like "30+"
      if (typeof end === "string" && end.includes("+")) {
        obj.innerHTML = end;
      }
    }
  };
  window.requestAnimationFrame(step);
}

function renderHeroStats() {
  const citationsEl = document.getElementById("heroCitations");
  const hIndexEl = document.getElementById("heroHIndex");
  const publicationsEl = document.getElementById("heroPublications");

  if (citationsEl) animateValue(citationsEl, 0, parseInt(heroMetrics.citations), 2000);
  if (hIndexEl) animateValue(hIndexEl, 0, parseInt(heroMetrics.hIndex), 2000);
  if (publicationsEl) {
    animateValue(publicationsEl, 0, parseInt(heroMetrics.papers), 2000);
    // after animation we might want to put the + back. The animateValue handles this.
    setTimeout(() => publicationsEl.innerHTML = heroMetrics.papers, 2100);
  }

  // Render i10-index if the element exists
  const i10IndexEl = document.getElementById("heroi10Index");
  if (i10IndexEl) animateValue(i10IndexEl, 0, parseInt(heroMetrics.i10Index), 2000);

  const positionEl = document.getElementById("heroPosition");
  const orgEl = document.getElementById("heroOrg");
  const leadEl = document.getElementById("heroLead");

  if (positionEl) positionEl.textContent = profileData.currentRole;
  if (orgEl) orgEl.textContent = profileData.currentOrg;
  if (leadEl) leadEl.textContent = profileData.heroLead || "";
}

// Handle contact form submission with Formspree
function initContactForm() {
  const form = document.getElementById("contactForm");
  const messageDiv = document.getElementById("formMessage");
  const submitBtn = document.getElementById("submitBtn");
  
  if (!form) return;
  
  // Check if Formspree ID is set
  const formAction = form.getAttribute("action");
  if (formAction && formAction.includes("YOUR_FORM_ID")) {
    // Formspree not configured yet - show helpful message
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      messageDiv.className = "alert alert-warning";
      messageDiv.innerHTML = `
        <i class="fa-solid fa-info-circle me-2"></i>
        <strong>Form not configured yet.</strong><br>
        <small>Please set up Formspree (free at <a href="https://formspree.io" target="_blank">formspree.io</a>) 
        and update the form action URL, or email me directly at 
        <a href="mailto:abedisyedaliabbas@gmail.com">abedisyedaliabbas@gmail.com</a></small>
      `;
      messageDiv.classList.remove("d-none");
    });
    return;
  }
  
  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    
    const spinner = submitBtn.querySelector(".spinner-border");
    const originalBtnText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.disabled = true;
    if (spinner) spinner.classList.remove("d-none");
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
    
    // Hide previous messages
    messageDiv.classList.add("d-none");
    
    try {
      const formData = new FormData(form);
      
      // Submit to Formspree
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
      
      if (response.ok) {
        // Success
        messageDiv.className = "alert alert-success";
        messageDiv.innerHTML = '<i class="fa-solid fa-check-circle me-2"></i>Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
        messageDiv.classList.remove("d-none");
        form.reset();
        
        // Scroll to message
        setTimeout(() => {
          messageDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 100);
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      
      // Error - show user-friendly message with email fallback
      messageDiv.className = "alert alert-danger";
      messageDiv.innerHTML = `
        <i class="fa-solid fa-exclamation-circle me-2"></i>
        <strong>Sorry, there was an error sending your message.</strong><br>
        <small>Please try again or email me directly at 
        <a href="mailto:abedisyedaliabbas@gmail.com?subject=Contact from Website">abedisyedaliabbas@gmail.com</a></small>
      `;
      messageDiv.classList.remove("d-none");
      
      // Scroll to message
      setTimeout(() => {
        messageDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    } finally {
      // Reset button
      submitBtn.disabled = false;
      if (spinner) spinner.classList.add("d-none");
      submitBtn.innerHTML = originalBtnText;
    }
  });
}



function fetchGitHubProjects() {
  const container = document.getElementById("githubProjectsGrid");
  if (!container) return;
  
  // As requested, hardcoding a single project for now
  container.innerHTML = `
    <div class="col-md-8 mx-auto">
      <a href="https://github.com/abedisyedaliabbas/quantum-input-generator" target="_blank" rel="noopener" class="home-project-card text-decoration-none h-100 d-flex flex-column p-4 rounded-4 shadow-sm border border-primary-subtle bg-white">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <h3 class="h5 fw-bold mb-0 text-primary text-break"><i class="fa-brands fa-github me-2"></i>Quantum Input Generator</h3>
          <span class="badge bg-light text-dark border">Python</span>
        </div>
        <p class="text-muted small flex-grow-1 mb-3">An automated tool for generating and managing quantum chemical input files for Gaussian and ORCA calculations, enabling high-throughput computational screening.</p>
        <div class="d-flex gap-3 text-muted small mt-auto">
          <span class="text-primary fw-medium">View Repository →</span>
        </div>
      </a>
    </div>
  `;
}

const taglines = [
  "Research Fellow at NUS",
  "Computational Chemist",
  "Molecular Designer",
  "Excited-State Dynamics"
];

function initRotatingTagline() {
  const el = document.getElementById("rotatingTagline");
  if (!el) return;
  
  let currentIndex = 0;
  
  setInterval(() => {
    el.style.opacity = 0;
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % taglines.length;
      el.textContent = taglines[currentIndex];
      el.style.opacity = 1;
    }, 500);
  }, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  initRotatingTagline();
  renderHeroStats();
  renderResearchHighlights();
  renderHomeNews();
  renderResearchCards();
  renderTimeline();
  renderExperience();
  renderPartnerLogos();
  initContactForm();
  fetchGitHubProjects();
});
