const html = document.documentElement;

/**
 * Types
 * @param {HTMLElement} element html element
 * @param {Array.<string>} events array of string
 */
export function onClickOutside(element, events) {
  const outside = "data-outside";
  const hasOutside = element.hasAttribute(outside);

  if (!hasOutside) {
    events.forEach((userEvent) => {
      html.addEventListener(userEvent, handleClickOutside);
    });
    element.setAttribute(outside, "");
  }

  function handleClickOutside(event) {
    if (!element.contains(event.target)) {
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleClickOutside);
      });
      element.removeAttribute(outside);
    }
  }
}
