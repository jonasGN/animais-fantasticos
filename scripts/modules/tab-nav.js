export default function initTabNav() {
  const tabs = document.querySelectorAll("[data-tab-menu] li");
  const tabSections = document.querySelectorAll("[data-tab-content] section");

  if (tabs.length && tabSections.length) {
    const activeClass = "active";

    addAnimationClassToTab(tabSections);

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

function addAnimationClassToTab(sections) {
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
