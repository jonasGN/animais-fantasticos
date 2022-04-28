import { onClickOutside, touchEvents } from "./click-events.js";

const dropdownMenu = document.querySelector("[data-dropdown]");

function onClickMenu(event) {
  event.preventDefault();
  onClickOutside(this, touchEvents);
}

export default function initDropdownMenu() {
  if (dropdownMenu) {
    touchEvents.forEach((event) => {
      dropdownMenu.addEventListener(event, onClickMenu);
    });
  }
}
