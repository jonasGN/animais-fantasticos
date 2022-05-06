const btcPriceElement = document.querySelector(".btc-price");

export default function initBtcTicker() {
  if (!btcPriceElement) return;
  updateBtcValueElement();
}

async function fetchBtcPrice() {
  const url = "https://blockchain.info/ticker";
  const response = await fetch(url);
  const data = await response.json();
  const price = data["BRL"]["buy"];

  return price;
}

async function updateBtcValueElement() {
  const price = await fetchBtcPrice();
  const donationValue = 100 / price;
  btcPriceElement.innerText = donationValue.toFixed(6);
}
