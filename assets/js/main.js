(function () {
  // year
  const y = document.querySelectorAll("[data-year]");
  y.forEach(el => el.textContent = new Date().getFullYear());

  // active nav based on body data-page
  const page = document.body.getAttribute("data-page");
  if (page) {
    document.querySelectorAll(`[data-nav="${page}"]`).forEach(a => a.classList.add("active"));
  }

  // projects filter (only on projects.html)
  const filters = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-tags]");
  if (filters.length && cards.length) {
    const setActive = (key) => {
      filters.forEach(f => f.classList.toggle("active", f.dataset.filter === key));
      cards.forEach(c => {
        const tags = (c.dataset.tags || "").split(",").map(s => s.trim());
        c.style.display = (key === "all" || tags.includes(key)) ? "block" : "none";
      });
    };
    filters.forEach(f => f.addEventListener("click", () => setActive(f.dataset.filter)));
    setActive("all");
  }
})();
