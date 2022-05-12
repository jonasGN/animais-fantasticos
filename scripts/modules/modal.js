const container = document.querySelector("[data-modal='container']");
const menuButton = document.querySelector("[data-modal='open']");
const closeButton = document.querySelector("[data-modal='close']");

const hasModal = container && menuButton && closeButton;

function toggleModal(event) {
  event.preventDefault();
  container.classList.toggle("active");
}

function onClickOutside(event) {
  if (this === event.target) toggleModal(event);
}

export default function initModal() {
  if (hasModal) {
    menuButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    container.addEventListener("click", onClickOutside);
  }
}
