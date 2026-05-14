(() => {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const yearEl = document.getElementById("year");
  const backToTop = document.querySelector(".back-to-top");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
    if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 600);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (toggle && nav) {
    const setNavState = (open) => {
      nav.classList.toggle("is-open", open);
      toggle.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", () => {
      setNavState(!nav.classList.contains("is-open"));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => setNavState(false))
    );
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document
    .querySelectorAll(".philosophy, .experiences, .reserve, .visit, .hero-inner > *")
    .forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
})();
