// 1. Afficher le Cardholder name sur la front card
// 2. Afficher le card number sur la front card
// 3. Afficher le mois et l'année sur la carte
// 4. Transformer le mois et l'année en nombre uniquement
// 5. Afficher le cvc sur la back card
// 6. Si information éronné quand appuyer sur le bouton
//  Afficher un message d'erreur
//  Changer la couleur de bordure des input
// 7. Si empty alors bordure rouge et message d'empty

let form = document.getElementById("myForm");
let thankYou = document.getElementById("thank-you");
let errorName = document.querySelector(".errorMsg");
let numError = document.querySelector(".card-num-error");
let expiryError = document.querySelector(".expiry-error");
let submitBtn = document.getElementById("submit");
let cardHolderName = document.getElementById("cardholder-name");
let cardNumberInput = document.getElementById("card-number");
let cardMonthDisplay = document.querySelector(".card-month-display");
let cardYearDisplay = document.querySelector(".card-month-display");
let cardExpMonth = document.getElementById("expiry-month");
let cardExpYear = document.getElementById("expiry-year");
let yearError = document.querySelector(".year-error");
let cardExpCvc = document.getElementById("cvc");
let cvcDisplay = document.querySelector(".cvc-display");
let cvcError = document.querySelector(".cvc-error");
let buttonContinue = document.getElementById("continue");

addEventListener("keyup", (e) => {
  let cardHolderName = document.getElementById("cardholder-name").value;
  let cardName = document.querySelector(".card-name-display");
  let key = e.key;
  let keyletters = key.match(/^[A-za-z ]+$/);
  if (cardHolderName.length === 0) {
    errorName.innerHTML = "Please enter your name";
    cardHolderName = document.getElementById("cardholder-name");
    cardHolderName.style.border = "1px solid red";
  } else if (keyletters) {
    cardName.innerHTML = cardHolderName;
  } else {
    cardHolderName.setAttribute("disabled", "");
    cardHolderName = document.getElementById("cardholder-name");
    cardHolderName.style.border = "1px solid red";
    errorName.innerHTML = "Please enter only letters";
  }
});

addEventListener("keyup", (e) => {
  let cardNumberInput = document.getElementById("card-number").value;
  let cardNumber = document.querySelector(".card-number-display");
  let key = e.key;
  let keynumber = key.match(/(\d+)/);
  if (cardNumberInput === 0) {
    numError.innerHTML = "Please enter your number card";
    cardNumberInput = document.getElementById("card-number");
    cardNumberInput.style.border = "1px solid red";
  } else if (keynumber) {
    cardNumber.innerHTML = cardNumberInput;
  } else if (key === "Backspace") {
    cardNumberInput.setAttribute("enabled", "");
  } else {
    cardNumberInput.setAttribute("disabled", "");
    numError.innerHTML = "Please enter only numbers";
    cardNumberInput = document.getElementById("card-number");
    cardNumberInput.style.border = "1px solid red";
  }
});

cardNumberInput.addEventListener("input", (e) => {
  e.target.value = e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});

cardExpMonth.addEventListener("input", (e) => {
  let value = e.target.value;
  let valueNumber = value.match(/^[0-9 ]*$/);
  if (value === "") {
    yearError.innerHTML = "Please enter value date";
  } else if (valueNumber) {
    cardMonthDisplay.innerHTML = valueNumber;
  }
});

cardExpYear.addEventListener("input", (e) => {
  let value = e.target.value;
  let valueNumber = value.match(/^[0-9 ]*$/);
  if (value === "") {
    yearError.innerHTML = "Please enter value date";
  } else if (valueNumber) {
    cardYearDisplay.innerHTML = cardExpMonth.value + "/" + valueNumber;
  }
});

cardExpCvc.addEventListener("input", (e) => {
  let value = e.target.value;
  let valueNumber = value.match(/^[0-9 ]*$/);
  if (value === "") {
    cvcError.innerHTML = "Please enter your CVC Code";
  } else if (valueNumber) {
    cvcDisplay.innerHTML = valueNumber;
  }
});

submitBtn.addEventListener("click", () => {
  if (cardHolderName.value.length <= 0) {
    errorName.innerHTML = "Please enter your name";
  } else if (cardNumberInput.value.length <= 0) {
    numError.innerHTML = "Please enter your card number";
  } else if (cardExpMonth.value.length <= 0) {
    yearError.innerHTML = "Please enter your expiry card date";
  } else if (cardExpYear.value.length <= 0) {
    yearError.innerHTML = "Please enter your expiry card date";
  } else if (cardExpCvc.value.length <= 0) {
    cvcError.innerHTML = "Please enter your cvc code";
  } else {
    form.style.display = "none";
    thankYou.classList.remove("hidden");
  }
});

buttonContinue.addEventListener("click", () => {
  thankYou.classList.add("hidden");
  form.style.display = "block";
});
