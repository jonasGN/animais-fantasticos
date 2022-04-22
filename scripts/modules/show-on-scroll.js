export default function initShowContentOnScroll() {
  const sections = document.querySelectorAll("[data-section]");

  if (sections.length) {
    function showContentOnScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const visibleHeight = window.innerHeight * 0.7;
        const isSectionVisible = sectionTop - visibleHeight <= 0;

        if (isSectionVisible) {
          section.classList.add("active");
        }
      });
    }

    // call once page loads to animate the first section without scrolling
    showContentOnScroll();
    window.addEventListener("scroll", showContentOnScroll);
  }
}
