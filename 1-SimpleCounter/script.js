const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

let count = 0;

incrementButton.addEventListener("click", () => {
  count++;
  updateCounter();
  // counterDisplay.textContent = count;
  counterDisplay.style.color = "green";
});

decrementButton.addEventListener("click", () => {
  count--;
  updateCounter();
  // counterDisplay.textContent = count;
  counterDisplay.style.color = "red";
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCounter();
  // counterDisplay.textContent = count;
  counterDisplay.style.color = "black";
});

function updateCounter() {
  counterDisplay.textContent = count;
}
