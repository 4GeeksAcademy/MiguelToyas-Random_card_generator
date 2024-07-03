/* eslint-disable */
import "bootstrap";
import "./style.css";
//Definición de Arrays
const cardNumber = [
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
  "A",
];
const cardSuit = ['']

//Encontrar elementos en el DOM
const naipe = document.getElementById("naipe");
const number = document.getElementById("numero");
const numberText = document.getElementById("textoNumero");

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
