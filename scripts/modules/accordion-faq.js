const questions = document.querySelectorAll("[data-accordion] dt");

const activeClass = "active";

function showAnswer() {
  const answer = this.nextElementSibling;

  this.classList.toggle(activeClass);
  answer.classList.toggle(activeClass);
}

export default function initAccordionFaqAnimation() {
  if (!questions.length) return;

  questions[0].classList.add(activeClass);
  questions[0].nextElementSibling.classList.add(activeClass);

  questions.forEach((question) => {
    question.addEventListener("click", showAnswer);
  });
}
