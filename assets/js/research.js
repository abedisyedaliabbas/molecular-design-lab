(() => {
  const toggle = document.querySelector(".theme-toggle");
  let theme;
  try {
    theme = localStorage.getItem("research-theme");
  } catch (_) {
    /* Storage is optional. */
  }
  if (!["light", "dark"].includes(theme)) theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  function applyTheme() {
    document.documentElement.dataset.theme = theme;
    toggle?.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
  }
  applyTheme();
  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      theme = theme === "dark" ? "light" : "dark";
      applyTheme();
      try {
        localStorage.setItem("research-theme", theme);
      } catch (_) {
        /* Storage is optional. */
      }
    });
  }
  const menu = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-nav");
  if (menu && navigation) {
    menu.hidden = false;
    navigation.dataset.open = "false";
    const closeMenu = () => {
      menu.setAttribute("aria-expanded", "false");
      navigation.dataset.open = "false";
    };
    menu.addEventListener("click", () => {
      const open = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", String(open));
      navigation.dataset.open = String(open);
    });
    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menu.focus();
      }
    });
  }
  const search = document.querySelector("#publication-search");
  if (!search) return;
  const year = document.querySelector("#publication-year");
  const type = document.querySelector("#publication-type");
  const entries = [...document.querySelectorAll(".publication-entry")];
  const status = document.querySelector("#publication-status");
  const empty = document.querySelector("#publication-empty");
  [...new Set(entries.map((entry) => entry.dataset.year))]
    .sort()
    .reverse()
    .forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      year.append(option);
    });
  const params = new URLSearchParams(location.search);
  search.value = params.get("q") || "";
  if ([...year.options].some((option) => option.value === params.get("year"))) year.value = params.get("year");
  if ([...type.options].some((option) => option.value === params.get("type"))) type.value = params.get("type");
  function filter(updateURL = true) {
    const words = search.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    let count = 0;
    entries.forEach((entry) => {
      const visible =
        words.every((word) => entry.dataset.search.toLocaleLowerCase().includes(word)) &&
        (!year.value || entry.dataset.year === year.value) &&
        (!type.value || entry.dataset.type === type.value);
      (entry.closest("li") || entry).hidden = !visible;
      if (visible) count++;
    });
    status.textContent = `${count} of ${entries.length} research outputs`;
    empty.hidden = count > 0;
    if (updateURL) {
      const url = new URL(location.href);
      for (const [key, value] of [
        ["q", search.value.trim()],
        ["year", year.value],
        ["type", type.value],
      ])
        value ? url.searchParams.set(key, value) : url.searchParams.delete(key);
      try {
        history.replaceState(null, "", url);
      } catch (_) {
        /* Filtering works without history. */
      }
    }
  }
  search.addEventListener("input", () => filter());
  year.addEventListener("change", () => filter());
  type.addEventListener("change", () => filter());
  document.querySelector("#publication-reset")?.addEventListener("click", () => {
    search.value = "";
    year.value = "";
    type.value = "";
    filter();
    search.focus();
  });
  filter(false);
})();
