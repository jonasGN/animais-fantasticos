const html = document.documentElement;

/**
 * Types
 * @param {HTMLElement} element html element
 * @param {Array.<string>} events array of string
 * @param {VoidFunction} callBack callback function
 */
export function onClickOutside(element, events, callBack) {
  const outside = "data-outside";
  const hasOutside = element.hasAttribute(outside);

  if (!hasOutside) {
    element.setAttribute(outside, "");
    events.forEach((userEvent) => {
      // setTimeout is to prevent the listener to be added in bubble fase
      setTimeout(() => html.addEventListener(userEvent, handleClickOutside));
    });
  }

  function handleClickOutside(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleClickOutside);
      });
      !callBack ? null : callBack();
    }
  }
}

export const touchEvents = ["click", "touchstart"];
