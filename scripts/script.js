// animals section scripts
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  
  if (tabMenu.length && tabContent.length) {
    const activeClass = "active";
    // set initialy the tab 0 to active because this is 
    // always the first element to be visible on first load
    tabContent[0].classList.add(activeClass);
    
    function activeTab(tabIndex) {
      clearTabs();
      tabContent[tabIndex].classList.add(activeClass);
    }
    
    function clearTabs() { 
      tabContent.forEach((content) => {
        content.classList.remove(activeClass);
      });
    }
    
    tabMenu.forEach((tab, index) => {
      tab.addEventListener("click", () => activeTab(index));
    });
  }
}

initTabNav();

// faq section scripts
function initAccordionFaq() {
  const activeClass = "active";
  const questions = document.querySelectorAll(".js-accordion dt");
  
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