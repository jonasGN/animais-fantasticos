const numbersElement = document.querySelectorAll("[data-number]");

const observer = new MutationObserver(mutationHandler);

// watch for attributes changes in numbers section
function observeMutations() {
  const observerTarget = document.getElementById("numbers");
  observer.observe(observerTarget, { attributes: true });
}

function mutationHandler(mutation) {
  const isTargeActive = mutation[0].target.classList.contains("active");
  if (!isTargeActive) return;

  animateNumbers();
  observer.disconnect();
}

function animateNumbers() {
  numbersElement.forEach((n) => {
    const number = Number.parseInt(n.innerHTML);

    let counter = 0;
    const interval = Math.floor(number / 100);

    const timer = setInterval(() => {
      counter += interval;
      n.innerHTML = Number.parseInt(counter);

      if (counter >= number) {
        clearInterval(timer);
        n.innerHTML = number;
      }
    }, 20 * Math.random());
  });
}

export default function initNumbersAnimation() {
  observeMutations();
}
