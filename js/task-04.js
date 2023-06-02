let counterValue = 0;

const totalEl = document.querySelector("#value");
const plusBtnEl = document.querySelector('button[data-action="increment"]');
const minusBtnEl = document.querySelector('button[data-action="decrement"]');

plusBtnEl.addEventListener("click", () => {
  counterValue += 1;
  totalEl.textContent = counterValue;
});

minusBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  totalEl.textContent = counterValue;
});
