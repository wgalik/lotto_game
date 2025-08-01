let selectNumberBtns = document.getElementsByClassName("selectNumber");
let btnRandomNum = document.getElementById("randomNum");
let submitBtn = document.getElementById("submit");
btnRandomNum.style.color = "red";
submitBtn.style.color = "red";
let selectedNumber = [];
let randomNum = [];
let yourNum = [];

for (let i = 0; i < selectNumberBtns.length; i++) {
  selectNumberBtns[i].addEventListener("click", function () {
    selectNumberBtns[i].classList.toggle("black");
    let black = document.getElementsByClassName("black").length;

    if (black > 6) {
      selectNumberBtns[i].classList.remove("black");
    }
  });
}

btnRandomNum.addEventListener("click", function () {
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

  document.getElementById("result").innerHTML =
    "Twój wynik to liczby: " + randomNum;
});

submitBtn.addEventListener("click", takeNumber);
btnRandomNum.addEventListener("click", takeNumber);
function takeNumber() {
  yourNum = [];
  let num2 = [];
  // Number(document.getElementById("yourNum").value);
  for (let i = 0; i < 6; i++) {
    num2 = Number(document.getElementsByClassName("black")[i].innerHTML);
    yourNum.push(num2);

    // if (
    //   yourNum.length < 6 &&
    //   num2 > 0 &&
    //   num2 <= 49 &&
    //   yourNum.indexOf(num2) === -1
    // ) {
    //   yourNum.push(num2);
    // } else if (yourNum.length >= 6) {
    //   alert("wybrałeś 6 liczb");
    // }
  }

  yourNum = yourNum.sort(function (a, b) {
    return a - b;
  });

  random();

  compare();
}

// btnRandomNum.addEventListener("click",
function random() {
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

  document.getElementById("result").innerHTML =
    "Twój wynik to liczby: " + randomNum;
}

function compare() {
  let lost = 0;
  let win = 0;

  if (yourNum.length == 6) {
    console.log(randomNum);
    console.log(yourNum);

    for (let i = 0; i < randomNum.length; i++) {
      if (yourNum.indexOf(randomNum[i]) >= 0) {
        win += 1;
      } else {
        lost += 1;
      }
    }
  }
  console.log(win);
  // console.log(lost);
}
