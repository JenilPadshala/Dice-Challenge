let randomNumber1 = Math.floor(Math.random()  * 6) + 1;
let randomNumber2 = Math.floor(Math.random()  * 6) + 1;
let url1 = "images/dice"+randomNumber1+".png";
let url2 = "images/dice"+randomNumber2+".png";

const firstDice = document.querySelector(".img1");
const secondDice = document.querySelector(".img2");
const heading = document.querySelector("h1");
firstDice.setAttribute("src", url1);
secondDice.setAttribute("src", url2);

if (randomNumber1 > randomNumber2){
    heading.textContent = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
    heading.textContent = "🚩 Player 2 Wins!";
}
else{
    heading.textContent = "It's a Draw!";
}