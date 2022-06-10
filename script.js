const numbers = document.querySelectorAll("[data-number]");
const submit = document.querySelector("[data-submit]");
const component = document.querySelector("[data-component ]");
const thankYou = document.querySelector("[data-thank-you]");
const dataChosen = document.querySelector("[data-chosen]");
let selectedNumber = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (!e.target.classList.contains("active")) {
      numbers.forEach((num) => num.classList.remove("active"));
      e.target.classList.add("active");
    }
    selectedNumber = e.target.innerText;
    dataChosen.innerText = selectedNumber;
  });
});

submit.addEventListener("click", () => {
  numbers.forEach((num) => {
    if (num.classList.contains("active")) {
      component.classList.add("hidden");
      thankYou.classList.remove("hidden");
    } else {
      return;
    }
  });
});

//get selected number
