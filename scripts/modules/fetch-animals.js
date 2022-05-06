import initNumbersAnimation from "./numbers-animation.js";

const numbersGrid = document.querySelector(".numbers-container");

export default async function initFetchAnimals() {
  if (!numbersGrid) return;

  const animals = await fetchAnimals();
  animals.forEach((animal) => {
    const animalElement = createAnimal(animal);
    numbersGrid.appendChild(animalElement);
  });

  initNumbersAnimation();
}

async function fetchAnimals() {
  const file = "../../assets/animals-api.json";
  const response = await fetch(file);
  const data = await response.json();

  return data;
}

function createAnimal(animal) {
  const container = document.createElement("div");
  container.classList.add("numbers-item");

  const title = document.createElement("h3");
  title.innerText = animal["specie"];

  const number = document.createElement("span");
  number.innerText = animal["amount"];
  number.dataset["number"] = "";

  container.appendChild(title);
  container.appendChild(number);

  return container;
}
