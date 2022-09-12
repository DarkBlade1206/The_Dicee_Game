

var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6);
randomNumber1 = Math.floor(randomNumber1) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6);
randomNumber2 = Math.floor(randomNumber2) + 1;

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 wins";
  document.querySelectorAll("p")[0].innerHTML = "🚩player 1";
}
else {
  document.querySelector("h1").innerHTML = "player 2 wins";
  document.querySelectorAll("p")[1].innerHTML = "🚩player 2";

}

const reRollBtn = document.querySelector(".btn");
reRollBtn.addEventListener("click", function () {
  reRoll = location.reload();
  document.querySelector(".img1").style.transform = "rotate(360deg)"
  document.querySelector(".img2").style.transform = "rotate(360deg)"
});