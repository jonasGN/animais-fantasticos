function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  
  if (tabMenu.length && tabContent.length) {
    const active = "active-tab";
    // set initialy the tab 0 to active because this is 
    // always the first element to be visible on first load
    tabContent[0].classList.add(active);
    
    function activeTab(tabIndex) {
      clearTabs();
      tabContent[tabIndex].classList.add(active);
    }
    
    function clearTabs() { 
      tabContent.forEach((content) => {
        content.classList.remove(active)
      });
    }
    
    tabMenu.forEach((tab, index) => {
      tab.addEventListener("click", () => activeTab(index));
    });
  }
}

initTabNav();