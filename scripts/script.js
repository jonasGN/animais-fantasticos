// animals section scripts
function initTabContentAnimation() {
  const sections = document.querySelectorAll("[data-tab-content] section");

  if (sections.length) {
    // alternate show animation for each section of content
    // this was done to avoid to put this animations manually on html
    sections.forEach((section, index) => {
      if (index % 2 == 0) {
        section.dataset["anime"] = "show-right";
      } else {
        section.dataset["anime"] = "show-down";
      }

      section.classList.add(section.dataset["anime"]);
    });
  }
}

function initTabNav() {
  const tabs = document.querySelectorAll("[data-tab-menu] li");
  const tabSections = document.querySelectorAll("[data-tab-content] section");

  if (tabs.length && tabSections.length) {
    const activeClass = "active";

    // set initialy the tab 0 to active because this is
    // always the first element to be visible on first load
    tabSections[0].classList.add(activeClass);
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activeTab(index));
    });

    function activeTab(tabIndex) {
      resetTabs();
      tabSections[tabIndex].classList.add(activeClass);
    }

    function resetTabs() {
      tabSections.forEach((section) => {
        section.classList.remove(activeClass);
      });
    }
  }
}
initTabContentAnimation();
initTabNav();

// faq section scripts
function initAccordionFaq() {
  const activeClass = "active";
  const questions = document.querySelectorAll("[data-accordion] dt");

  if (questions.length) {
    questions[0].classList.add(activeClass);
    questions[0].nextElementSibling.classList.add(activeClass);

    questions.forEach((question) => {
      question.addEventListener("click", showAnswer);
    });

    function showAnswer() {
      const answer = this.nextElementSibling;

      this.classList.toggle(activeClass);
      answer.classList.toggle(activeClass);
    }
  }
}

initAccordionFaq();

function initScrollToSection() {
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

initScrollToSection();

function initShowContentOnScroll() {
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

initShowContentOnScroll();
