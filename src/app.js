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
const suitUp = document.getElementById("suitUp");
const suitDown = document.getElementById("suitDown");

// Función para ajustar el tamaño de fuente
const adjustTextSize = () => {
  const naipeWidth = naipe.offsetWidth;
  const naipeHeight = naipe.offsetHeight;

  const fontSize = Math.min(naipeWidth, naipeHeight) / 2;

  number.style.fontSize = `${fontSize}px`;
};

adjustTextSize();
window.addEventListener("resize", adjustTextSize);

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

// Ajustar dimensión de la carta
const resizeHandle = document.getElementById("resize-handle");
let isResizing = false;

resizeHandle.addEventListener("mousedown", e => {
  isResizing = true;
  document.addEventListener("mousemove", resize);
  document.addEventListener("mouseup", stopResize);
});

function resize(e) {
  if (isResizing) {
    const newWidth = e.clientX - naipe.offsetLeft;
    const newHeight = e.clientY - naipe.offsetTop;

    naipe.style.width = `${newWidth}px`;
    naipe.style.height = `${newHeight}px`;

    adjustTextSize();
  }
}

function stopResize() {
  isResizing = false;
  document.removeEventListener("mousemove", resize);
  document.removeEventListener("mouseup", stopResize);
}
