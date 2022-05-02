const periodElement = document.querySelector("[data-working-period]");

export default function initWorkingPeriod() {
  const now = new Date();
  const today = now.getDay();
  const todayHour = now.getHours();

  const isOperationDay = today >= 1 && today <= 5;
  const isOperationHour = todayHour >= 8 && todayHour <= 18;

  if (isOperationDay && isOperationHour) {
    periodElement.classList.add("active");
  }
}
