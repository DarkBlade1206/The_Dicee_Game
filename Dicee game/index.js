const reRollBtn = document.querySelector(".btn");

reRollBtn.addEventListener("click", () => {
  let randomNumber1 = Math.random();
  randomNumber1 = (randomNumber1 * 6);
  randomNumber1 = Math.floor(randomNumber1) + 1;

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

  let randomNumber2 = Math.random();
  randomNumber2 = (randomNumber2 * 6);
  randomNumber2 = Math.floor(randomNumber2) + 1;

  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelectorAll("p")[1].innerHTML = "👍🏻player 2";
    document.querySelectorAll("p")[0].innerHTML = "👍🏻player 1";
  }
  else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins";
    document.querySelectorAll("p")[0].innerHTML = "🚩player 1";
    document.querySelectorAll("p")[1].innerHTML = "player 2";
  }
  else {
    document.querySelector("h1").innerHTML = "player 2 wins";
    document.querySelectorAll("p")[1].innerHTML = "🚩player 2";
    document.querySelectorAll("p")[0].innerHTML = "player 1";

  }
  rotate();
});

function rotate() {
  document.querySelector(".img1").style.transform = "rotate(360deg)";
  document.querySelector(".img2").style.transform = "rotate(360deg)";
  setTimeout(removeRotate, 400);
}
function removeRotate() {
  document.querySelector(".img1").style.transform = "rotate(0deg)";
  document.querySelector(".img2").style.transform = "rotate(0deg)";
}
