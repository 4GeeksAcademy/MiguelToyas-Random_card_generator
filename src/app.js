/* eslint-disable */
import "bootstrap";
import "./style.css";

// Definición de Arrays
const cardNumbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const cardSuits = [
  "src/images/clubs.jpg",
  "src/images/diamonds.jpg",
  "src/images/hearts.jpg",
  "src/images/spades.jpg"
];

// Encontrar elementos en el DOM
const naipe = document.getElementById("naipe");
const number = document.getElementById("textoNumero");
const numberText = document.getElementById("textoNumero");
const suitUp = document.getElementById("suitUp");
const suitDown = document.getElementById("suitDown");

// Función para ajustar el tamaño de fuente
const adjustTextSize = () => {
  const naipeWidth = naipe.offsetWidth;
  const naipeHeight = naipe.offsetHeight;

  // Calcular tamaño de fuente basado en las dimensiones de naipe
  const fontSize = Math.min(naipeWidth, naipeHeight) / 2; // Ajusta el factor según necesites

  numberText.style.fontSize = `${fontSize}px`;
};

// Llamar a la función inicialmente y en el resize del navegador
adjustTextSize();
window.addEventListener("resize", adjustTextSize);
naipe.addEventListener("change", adjustTextSize);

// Generar una carta aleatoria
const obtainRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

function generateRandomCard() {
  let cardNumber = obtainRandomElement(cardNumbers);
  let cardSuit = obtainRandomElement(cardSuits);

  number.innerHTML = cardNumber;
  suitUp.src = cardSuit;
  suitDown.src = cardSuit;

  if (
    cardSuit === "src/images/diamonds.jpg" ||
    cardSuit === "src/images/hearts.jpg"
  ) {
    number.style.color = "red";
  } else {
    number.style.color = "black";
  }
}

window.onload = () => {
  generateRandomCard();
};

document.getElementById("button").addEventListener("click", generateRandomCard);
