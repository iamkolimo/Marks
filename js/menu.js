(() => {
  const chips = document.querySelectorAll(".chip");
  const sections = document.querySelectorAll(".menu-section");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => {
        c.classList.remove("is-active");
        c.setAttribute("aria-selected", "false");
      });
      chip.classList.add("is-active");
      chip.setAttribute("aria-selected", "true");

      const filter = chip.dataset.filter;
      sections.forEach((s) => {
        const show = filter === "all" || s.dataset.section === filter;
        s.classList.toggle("is-hidden", !show);
      });

      if (filter !== "all") {
        const target = document.querySelector(`.menu-section[data-section="${filter}"]`);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
