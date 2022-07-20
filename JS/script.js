//Accordian Panel in Navigation Bar
let acc = document.getElementsByClassName("accordionHowTo");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });}



//eventlisteners and DOM


let startGame = document.querySelector('.startGame')
startGame.textContent = "Start Game"
startGame.addEventListener("click", boardDisplay);

let gameRound = document.querySelector('.holes1' ,'.holes2')
gameRound.addEventListener("click", gameRound);





//red
const h0 = document.getElementById("hole0");
const h1 = document.getElementById("hole1");
const h2 = document.getElementById("hole2");
const h3 = document.getElementById("hole3");
const h4 = document.getElementById("hole4");
const h5 = document.getElementById("hole5");
const h6 = document.querySelector("div.end2");
//purple
const h7 = document.getElementById("hole7");
const h8 = document.getElementById("hole8");
const h9 = document.getElementById("hole9");
const h10 = document.getElementById("hole10");
const h11 = document.getElementById("hole11");
const h12 = document.getElementById("hole12");
const h13 = document.querySelector("div.end1");


let holesArray = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];  

function boardDisplay() {
    h0.textContent = holesArray[1];
    h1.textContent = holesArray[2];
    h2.textContent = holesArray[3];
    h3.textContent = holesArray[4];
    h4.textContent = holesArray[5];
    h5.textContent = holesArray[6];
    h6.textContent = holesArray[0];
    h7.textContent = holesArray[8];
    h8.textContent = holesArray[9];
    h9.textContent = holesArray[10];
    h10.textContent = holesArray[11];
    h11.textContent = holesArray[12];
    h12.textContent= holesArray[13];
    h13.textContent = holesArray[7];
}



turn =1;
turn++;
let idx = holesArray[idx];
let startingIdx = 

function gameRound() {
    let idx = holesArray[idx];
        if (holesArray[1,5])
        for (let i = 0; i = 4 || i === idx; i++){
            return idx=0; 

        }
}
console.log(gameRound)





























  

  
