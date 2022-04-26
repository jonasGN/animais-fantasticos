import { onClickOutside } from "./html-events.js";

const dropdownMenu = document.querySelector("[data-dropdown]");

const userEvents = ["click", "touchstart"];

function onClickMenu(event) {
  event.preventDefault();
  onClickOutside(this, userEvents);
}

export default function initDropdownMenu() {
  if (dropdownMenu) {
    userEvents.forEach((event) => {
      dropdownMenu.addEventListener(event, onClickMenu);
    });
  }
}
