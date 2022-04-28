import { onClickOutside, touchEvents } from "./click-events.js";

const button = document.querySelector("[data-menu='button']");
const menuItems = document.querySelector("[data-menu='items']");

function openMenu() {
  activeMenu();
  onClickOutside(menuItems, touchEvents, disableMenu);
}

function activeMenu() {
  button.classList.add("active");
  menuItems.classList.add("active");
}

function disableMenu() {
  button.classList.remove("active");
  menuItems.classList.remove("active");
}

export default function initMenuMobile() {
  if (!(button && menuItems)) return;
  touchEvents.forEach((event) => {
    button.addEventListener(event, openMenu);
  });
}
