const selectNumberBtns = document.querySelectorAll(".selectNumber");
const btnRandomNum = document.querySelector("#random");
const submitBtn = document.querySelector("#submit");
const resetBtn = document.querySelector("#reset");
const numbers = document.querySelector("#numbers span");
const result = document.querySelector("#result span");
const matched = document.querySelector("#matched span");
let selectedNumber,
  randomNum,
  yourNum,
  matchedNumbers = [];

selectNumberBtns.forEach((number) => {
  number.addEventListener("click", () => {
    number.classList.toggle("black");
    const black = document.querySelectorAll(".black").length;
    if (black > 6) number.classList.remove("black");
  });
});

const reset = () => {
  yourNum = [];
  randomNum = [];
  matchedNumbers = [];
  const black = document.querySelectorAll(".black");
  black.forEach((button) => button.classList.remove("black"));
  [numbers, result, matched].forEach((element) => (element.innerHTML = ""));
};

const clear = () => {};

const takeNumber = () => {
  yourNum = [];
  const black = document.querySelectorAll(".black");
  if (black.length < 6) return;
  else {
    black.forEach((number) => {
      const value = Number(number.innerHTML);
      yourNum.push(value);
    });
  }
  toSort();
};

const quickPick = () => {
  yourNum = [];
  const black = document.querySelectorAll(".black");
  black.forEach((button) => button.classList.remove("black"));

  for (let i = 0; yourNum.length < 6; i++) {
    let num = Math.floor(Math.random() * 49) + 1;
    if (yourNum.indexOf(num) === -1) yourNum.push(num);
  }
  toSort();
};

const toSort = () => {
  yourNum = yourNum.sort((a, b) => a - b);
  yourNum = yourNum.map((number) => `<span>${number}</span>`);
  numbers.innerHTML = yourNum.join(" ");
  random();
  compare();
};

resetBtn.addEventListener("click", reset);
submitBtn.addEventListener("click", takeNumber);
btnRandomNum.addEventListener("click", quickPick);

const random = () => {
  randomNum = [];
  for (let i = 0; randomNum.length < 6; i++) {
    let num1 = Math.floor(Math.random() * 49) + 1;

    if (randomNum.indexOf(num1) === -1) {
      randomNum.push(num1);
    }
  }
  randomNum = randomNum.sort((a, b) => a - b);
  randomNum = randomNum.map((number) => `<span>${number}</span>`);
  result.innerHTML = randomNum.join(" ");
};

const compare = () => {
  matchedNumbers = [];
  if (yourNum.length == 6) {
    console.log(randomNum);
    console.log(yourNum);

    for (let i = 0; i < randomNum.length; i++) {
      if (yourNum.indexOf(randomNum[i]) >= 0) {
        matchedNumbers.push(randomNum[i]);
        win += 1;
      } else {
        lost += 1;
      }
    }
  }
  matched.innerHTML = matchedNumbers.join(" ");
};
