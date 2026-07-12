const THEME_KEY = "molecular-theme";

function applyTheme(theme) {
  if (!document.body) return;
  
  document.body.setAttribute("data-theme", theme);
  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
  
  // Also update navbar background
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (theme === "dark") {
      navbar.classList.remove("bg-white");
      navbar.style.backgroundColor = "var(--brand-surface)";
    } else {
      navbar.classList.add("bg-white");
      navbar.style.backgroundColor = "";
    }
  }
}

function initThemeToggle() {
  // Wait a bit to ensure DOM is ready
  setTimeout(() => {
    const toggleBtn = document.getElementById("themeToggle");
    if (!toggleBtn) {
      console.warn("Theme toggle button not found");
      return;
    }

    const savedTheme = localStorage.getItem(THEME_KEY) || "light";
    applyTheme(savedTheme);

    toggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const currentTheme = document.body.getAttribute("data-theme") || "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem(THEME_KEY, nextTheme);
    });
  }, 100);
}

function updateFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Fix mobile menu toggle - ensure it's clickable on mobile
function initMobileMenu() {
  const toggler = document.querySelector(".navbar-toggler");
  const collapse = document.querySelector(".navbar-collapse");
  
  if (toggler && collapse) {
    // Force button to be clickable
    toggler.style.pointerEvents = "auto";
    toggler.style.cursor = "pointer";
    toggler.style.touchAction = "manipulation";
    toggler.style.zIndex = "1051";
    toggler.style.position = "relative";
    toggler.style.minWidth = "50px";
    toggler.style.minHeight = "50px";
    
    // Remove any event blockers
    toggler.addEventListener("touchstart", function(e) {
      e.stopPropagation();
    }, { passive: true });
    
    toggler.addEventListener("touchend", function(e) {
      e.stopPropagation();
      e.preventDefault();
      // Trigger click
      toggler.click();
    }, { passive: false });
    
    // Ensure Bootstrap collapse is initialized
    if (typeof bootstrap !== 'undefined') {
      // Initialize collapse if not already done
      if (!collapse._bsCollapse) {
        new bootstrap.Collapse(collapse, {
          toggle: false
        });
      }
    }
    
    // Add direct click handler as backup
    toggler.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Toggle manually if Bootstrap doesn't work
      if (collapse.classList.contains("show")) {
        collapse.classList.remove("show");
        toggler.setAttribute("aria-expanded", "false");
      } else {
        collapse.classList.add("show");
        toggler.setAttribute("aria-expanded", "true");
      }
    });
  }
}

// Initialize immediately if DOM is already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    updateFooterYear();
    initMobileMenu();
  });
} else {
  // DOM is already loaded
  initThemeToggle();
  updateFooterYear();
  initMobileMenu();
}

