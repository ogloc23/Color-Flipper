const colors = [
  "coral",
  "aqua",
  "violet",
  "red",
  "orange",
  "green",
  "purple",
  "papayawhip",
  "pitch",
  "gold",
];

const btn = document.querySelector(".btn");
const color = document.querySelector("#color");

const randomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener("click", () => {
  const num = randomNumber();
  document.body.style.backgroundColor = colors[num];
  color.textContent = colors[num];
});
