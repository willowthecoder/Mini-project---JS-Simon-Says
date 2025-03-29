let userSeq = [];
let gameSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;

let level = 0;

let h2 = document.querySelector("h2");
let body = document.querySelector("body");
document.addEventListener("keydown", function () {
  if (started == false) {
    console.log("Game started");
    started = true;
  }
  levelUp();
});
//Flashing functions
function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(function () {
    btn.classList.remove("gameFlash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let bttn = document.querySelector(`.${randColor}`);
  gameFlash(bttn);
  gameSeq.push(randColor);
}

function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    body.style.backgroundColor = "red";
    setTimeout(function () {
      body.style.backgroundColor = "white";
    }, 150);
    h2.innerText = "Game over , press any key to start again ";
    reset();
  }
}
function btnpress() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

//clicking all buttons
let bttn = document.querySelectorAll(".btn");

for (btn of bttn) {
  btn.addEventListener("click", btnpress);
}
function reset() {
  started = false;
  level = 0;
  gameSeq = [];
  userSeq = [];
}
