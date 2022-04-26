const container = document.querySelector("[data-modal='container']");
const menuButton = document.querySelector("[data-modal='open']");
const closeButton = document.querySelector("[data-modal='close']");

export default function initModal() {
  if (hasModal()) {
    menuButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    container.addEventListener("click", onClickOutside);
  }
}

function toggleModal(event) {
  event.preventDefault();
  container.classList.toggle("active");
}

function onClickOutside(event) {
  if (this == event.target) toggleModal(event);
}

function hasModal() {
  return container && menuButton && closeButton;
}
