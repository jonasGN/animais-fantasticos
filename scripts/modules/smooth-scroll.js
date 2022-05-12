const internaLinks = document.querySelectorAll("[data-menu] a[href^='#']");

function scrollToSection(event) {
  event.preventDefault();

  const href = this.getAttribute("href");
  const section = document.querySelector(href);

  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });
}

export default function initWindowSmoothScroll() {
  if (!internaLinks.length) return;

  internaLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
