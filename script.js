const selectNumberBtns = document.querySelectorAll(".selectNumber");
const btnRandomNum = document.querySelector("#randomNum");
const submitBtn = document.querySelector("#submit");
const resetBtn = document.querySelector("#reset");
let selectedNumber,
  randomNum,
  yourNum = [];
let lost, win;

selectNumberBtns.forEach((number) => {
  number.addEventListener("click", () => {
    number.classList.toggle("black");
    const black = document.querySelectorAll(".black").length;
    if (black > 6) number.classList.remove("black");
  });
});

const reset = () => {
  yourNum.length = 0;
  const black = document.querySelectorAll(".black");
  black.forEach((button) => button.classList.remove("black"));
  document.getElementById("numbers").innerHTML = "";
};

const takeNumber = () => {
  yourNum = [];
  let black = [];
  for (let i = 0; i < 6; i++) {
    black = Number(document.getElementsByClassName("black")[i].innerHTML);
    yourNum.push(black);
  }
  yourNum = yourNum.sort((a, b) => a - b);
  document.getElementById("numbers").innerHTML = "Your Numbers: " + yourNum;
  random();
  compare();
};

const quickPick = () => {
  yourNum = [];
  const black = document.querySelectorAll(".black");
  black.forEach((button) => button.classList.remove("black"));

  for (let i = 0; yourNum.length < 6; i++) {
    let num = Math.floor(Math.random() * 49) + 1;
    if (yourNum.indexOf(num) === -1) yourNum.push(num);
  }
  yourNum = yourNum.sort((a, b) => a - b);

  document.getElementById("numbers").innerHTML = "Your Numbers: " + yourNum;

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
  randomNum = randomNum.sort(function (a, b) {
    return a - b;
  });

  document.getElementById("result").innerHTML = "Winning numbers:" + randomNum;
};

const compare = () => {
  lost = 0;
  win = 0;
  let winningNumbers = [];
  if (yourNum.length == 6) {
    console.log(randomNum);
    console.log(yourNum);

    for (let i = 0; i < randomNum.length; i++) {
      if (yourNum.indexOf(randomNum[i]) >= 0) {
        winningNumbers.push(randomNum[i]);
        win += 1;
      } else {
        lost += 1;
      }
    }
  }
  console.log("trafione: ", win);
  console.log("nie trafione: ", lost);
  console.log("Winning numbers: ", winningNumbers);
};
