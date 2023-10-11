var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
var randomdiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;
var randomdiceImage2 = "images/dice" + randomNumber2 + ".png";

var images = document.querySelectorAll("img");
images[0].setAttribute("src", randomdiceImage1);
images[1].setAttribute("src", randomdiceImage2);

var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
    heading.innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 Wins!"
} 
else {
    heading.innerHTML = "Draw!"
}