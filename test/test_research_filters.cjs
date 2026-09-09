// Exercise search, combined filters, URL initialization, reset, and private-storage fallback.
const assert = require("node:assert/strict");
const vm = require("node:vm");
const fs = require("node:fs");
function element(value = "") {
  return {
    value,
    hidden: false,
    options: [{ value: "" }],
    listeners: {},
    dataset: {},
    textContent: "",
    addEventListener(event, fn) {
      this.listeners[event] = fn;
    },
    append(option) {
      this.options.push(option);
    },
    setAttribute(name, value) {
      this[name] = value;
    },
    focus() {},
    fire(event) {
      this.listeners[event]();
    },
  };
}
const controls = Object.fromEntries(
  [
    ".theme-toggle",
    "#publication-search",
    "#publication-year",
    "#publication-type",
    "#publication-status",
    "#publication-empty",
    "#publication-reset",
  ].map((key) => [key, element()])
);
controls["#publication-type"].options.push({ value: "article" }, { value: "dataset" });
const entries = [
  { year: "2026", type: "article", search: "Fluorogenic peptides Nature Chemistry" },
  { year: "2025", type: "article", search: "Photostable imaging Nature Methods" },
  { year: "2026", type: "dataset", search: "Photoinduced electron transfer workflow Abedi" },
].map((dataset) => {
  const item = element();
  return { dataset, closest: () => item, item };
});
let lastURL;
const context = {
  document: {
    documentElement: { dataset: {} },
    querySelector: (selector) => controls[selector],
    querySelectorAll: () => entries,
    createElement: () => element(),
  },
  localStorage: {
    getItem() {
      throw new Error("Storage denied");
    },
    setItem() {
      throw new Error("Storage denied");
    },
  },
  matchMedia: () => ({ matches: false }),
  location: { search: "?year=2026&type=article", href: "https://example.org/molecular-design-lab/publications/?year=2026&type=article" },
  history: {
    replaceState(_, __, url) {
      lastURL = url;
    },
  },
  URL,
  URLSearchParams,
};
vm.runInNewContext(fs.readFileSync("assets/js/research.js", "utf8"), context);
assert.equal(controls["#publication-status"].textContent, "1 of 3 research outputs");
assert.deepEqual(
  entries.map((e) => e.item.hidden),
  [false, true, true]
);
controls["#publication-type"].value = "";
controls["#publication-type"].fire("change");
assert.equal(controls["#publication-status"].textContent, "2 of 3 research outputs");
controls["#publication-search"].value = "ABEDI workflow";
controls["#publication-search"].fire("input");
assert.deepEqual(
  entries.map((e) => e.item.hidden),
  [true, true, false]
);
assert.equal(lastURL.searchParams.get("q"), "ABEDI workflow");
controls["#publication-search"].value = "nothing matches";
controls["#publication-search"].fire("input");
assert.equal(controls["#publication-empty"].hidden, false);
controls["#publication-reset"].fire("click");
assert.deepEqual(
  entries.map((e) => e.item.hidden),
  [false, false, false]
);
assert.equal(lastURL.search, "");
controls[".theme-toggle"].fire("click");
assert.equal(context.document.documentElement.dataset.theme, "dark");
assert.equal(controls[".theme-toggle"]["aria-label"], "Switch to light theme");
console.log("Publication filters, shareable URLs, reset, and theme fallback passed.");
