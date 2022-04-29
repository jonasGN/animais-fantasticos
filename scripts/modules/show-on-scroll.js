export default function initShowContentOnScroll() {
  const sections = document.querySelectorAll("[data-section]");

  if (sections.length) {
    function showContentOnScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const visibleHeight = window.innerHeight * 0.7;
        const isSectionVisible = sectionTop - visibleHeight <= 0;
        const hasActiveClass = section.classList.contains("active");

        if (isSectionVisible) {
          if (hasActiveClass) return;
          section.classList.add("active");
        } else {
          if (!hasActiveClass) return;
          section.classList.remove("active");
        }
      });
    }

    // call once page loads to animate the first section without scrolling
    showContentOnScroll();
    window.addEventListener("scroll", showContentOnScroll);
  }
}
