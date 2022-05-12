const numbersElement = document.querySelectorAll("[data-number]");

function animateNumbers() {
  numbersElement.forEach((n) => {
    const number = Number.parseInt(n.innerHTML, 10);

    let counter = 0;
    const interval = Math.floor(number / 100);

    const timer = setInterval(() => {
      counter += interval;
      n.innerHTML = Number.parseInt(counter, 10);

      if (counter >= number) {
        clearInterval(timer);
        n.innerHTML = number;
      }
    }, 20 * Math.random());
  });
}

function mutationHandler(mutation, observer) {
  const isTargeActive = mutation[0].target.classList.contains("active");
  if (!isTargeActive) return;

  animateNumbers();
  observer.disconnect();
}

const observer = new MutationObserver((mutation) => {
  mutationHandler(mutation, observer);
});

// watch for attributes changes in numbers section
function observeMutations() {
  const observerTarget = document.getElementById("numbers");
  observer.observe(observerTarget, { attributes: true });
}

export default function initNumbersAnimation() {
  observeMutations();
}
