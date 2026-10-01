/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element) => {
  observer.observe(element);
});


/* =========================
   PARALLAX DO HERO
========================= */

const heroTitle = document.querySelector(".hero h1");

window.addEventListener("scroll", () => {

  const scroll = window.scrollY;

  if (scroll < window.innerHeight) {

    heroTitle.style.transform =
      `translateY(${scroll * 0.08}px)`;

  }

});


/* =========================
   NAVEGAÇÃO SUAVE
========================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId = link.getAttribute("href");

    if (!targetId.startsWith("#")) {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});
