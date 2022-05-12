const html = document.documentElement;

export const touchEvents = ["click", "touchstart"];
/**
 * Types
 * @param {HTMLElement} element html element
 * @param {Array.<string>} events array of string
 * @param {VoidFunction} callBack callback function
 */
export function onClickOutside(element, events, callBack) {
  const outside = "data-outside";
  const hasOutside = element.hasAttribute(outside);

  function handleClickOutside(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleClickOutside);
      });

      if (callBack === undefined) return;
      callBack();
    }
  }

  if (!hasOutside) {
    element.setAttribute(outside, "");
    events.forEach((userEvent) => {
      // setTimeout is to prevent the listener to be added in bubble fase
      setTimeout(() => html.addEventListener(userEvent, handleClickOutside));
    });
  }
}
