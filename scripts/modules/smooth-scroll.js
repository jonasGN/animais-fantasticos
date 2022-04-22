export default function initWindowSmoothScroll() {
  const internaLinks = document.querySelectorAll("[data-menu] a[href^='#']");

  if (internaLinks.length) {
    internaLinks.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });

    function scrollToSection(event) {
      event.preventDefault();

      const href = this.getAttribute("href");
      const section = document.querySelector(href);

      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  }
}
