export default function initAccordionFaqAnimation() {
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
