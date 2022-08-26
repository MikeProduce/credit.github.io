"use strict";

const cardHolderTag = document.getElementById("card-name-num");
const cardName = document.getElementById("card-name");
const cardNum = document.getElementById("card-num");
const cardcardNum = document.getElementById("card-card-num");
const expDate = document.getElementById("exp-date");
const cardExpDate = document.getElementById("card-exp-first");
const expDateCard = document.getElementById("card-exp");
const monthYear = document.getElementById("month-date");
const monthYearCard = document.getElementById("card-exp-second");
const cvcInput = document.getElementById("CVC");
const cvcCard = document.getElementById("card-cvc");
const buttonclick = document.getElementById("button");
const onlyChars = document.getElementById("onlyChars");
const onlyChars1 = document.getElementById("onlyChars1");
const onlyChars2 = document.getElementById("onlyChars2");
const onlyChars3 = document.getElementById("onlyChars3");
const onlyChars4 = document.getElementById("onlyChars4");
const reset = document.getElementById("reset");

const adding = function (element, card) {
  // This evenlistener is responsible for whenever Card Holders Name is clicked
  element.addEventListener("click", function () {
    //These 3 are onclick changes that change bordercolor,font color, and it resets the value to 0 when it is clicked
    element.style.color = "black";
    element.value = "";
    //This function below allows whatever text is typed into card holdersName input to replace the text on the card img
    const inputHandler = function (e) {
      card.innerHTML = e.target.value;
    };
    element.addEventListener("input", inputHandler);
    element.addEventListener("propertychange", inputHandler);
  });
};
adding(cardHolderTag, cardName);
adding(cvcInput, cvcCard);
adding(cardNum, cardcardNum);
adding(expDate, cardExpDate);
adding(monthYear, monthYearCard);

// This one is for CardHolder Tag Name

// These are the test values to see if the value inputed is correct. I used regex to layout what can and cannot be used and then used an if else statement to decide whether the input is correct or not. The border of the input will let you know if the characters used are accepted. Green = good, red=bad, purple=not filled yet.

const wrongValue = function (values, inputP) {
  values.addEventListener("keyup", function () {
    const inputNum = /^[a-zA-Z\s]*$/.test(values.value) === false;
    let emptySpace = values.value;
    if (inputNum === false) {
      inputP.style.opacity = "0";
      values.style.outlineColor = "green";
      values.style.borderColor = "green";
    } else {
      inputP.style.opacity = "100";
      values.style.outlineColor = "red";
      values.style.borderColor = "red";
    }

    if (emptySpace.length == 0) {
      values.style.borderColor = "red";
      values.style.outlineColor = "red";
    }
  });
};
wrongValue(cardHolderTag, onlyChars);
wrongValue(cardNum, onlyChars1);
wrongValue(expDate, onlyChars2);
wrongValue(monthYear, onlyChars3);
wrongValue(cvcInput, onlyChars4);

// This one is for the Card number
const wrongValueNum = function (numVal, inputPP) {
  numVal.addEventListener("keyup", function () {
    const inputNum1 = /^[0-9\s]*$/.test(numVal.value) === false;
    let emptySpace = numVal.value;

    if (inputNum1 === false) {
      inputPP.style.opacity = "0";
      numVal.style.outlineColor = "green";
      numVal.style.borderColor = "green";
    } else {
      inputPP.style.opacity = "100";
      numVal.style.outlineColor = "red";
      numVal.style.borderColor = "red";
    }
    if (emptySpace.length == 0) {
      numVal.style.borderColor = "red";
      numVal.style.outlineColor = "red";
    }
  });
};
wrongValueNum(cardNum, onlyChars1);
wrongValueNum(expDate, onlyChars2);
wrongValueNum(monthYear, onlyChars3);
wrongValueNum(cvcInput, onlyChars4);

// this is for when the confirmation button is clicked we get a result!

buttonclick.addEventListener("click", function () {
  if (
    cardNum.style.borderColor === "green" &&
    expDate.style.borderColor === "green" &&
    monthYear.style.borderColor === "green" &&
    cvcInput.style.borderColor === "green" &&
    cardHolderTag.style.borderColor === "green" &&
    cvcInput.value.length === 3 &&
    monthYear.value.length === 2 &&
    expDate.value.length === 2 &&
    cardNum.value.length === 19
  ) {
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("form-div").style.display = "none";
  } else {
    alert("Please use the correct format or fill in the requirements");
  }
});

// this resets the whole page back to the first page
reset.addEventListener("click", function () {
  window.location.reload();
});
// This adds a space every 4 inputs in the cardnumber section
cardNum.addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});
