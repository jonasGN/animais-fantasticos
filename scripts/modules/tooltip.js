const map = document.querySelector("[data-tooltip='map']");

function createTooltipFrom(element) {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerText = element.getAttribute("aria-label");

  return tooltip;
}

const onMouseMove = {
  handleEvent(event) {
    this.tooltip.style.top = `${event.pageY + 10}px`;
    this.tooltip.style.left = `${event.pageX + 10}px`;
  },
};

const onMouseOut = {
  handleEvent() {
    this.tooltip.remove();
    this.element.removeEventListener("mouseleave", onMouseOut);
    this.element.removeEventListener("mousemove", onMouseMove);
  },
};

function onMouseIn() {
  const tooltip = createTooltipFrom(this);
  document.body.appendChild(tooltip);

  onMouseMove.tooltip = tooltip;
  this.addEventListener("mousemove", onMouseMove);

  onMouseOut.tooltip = tooltip;
  onMouseOut.element = this;
  this.addEventListener("mouseleave", onMouseOut);
}

export default function initTooltip() {
  if (!map) return;
  map.addEventListener("mouseover", onMouseIn);
}
