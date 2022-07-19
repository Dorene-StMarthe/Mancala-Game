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



//const playBtn = document.querySelector('.infobar');

//red
const h0 = document.getElementById("hole0");
const h1 = document.getElementById("hole1");
const h2 = document.getElementById("hole2");
const h3 = document.getElementById("hole3");
const h4 = document.getElementById("hole4");
const h5 = document.getElementById("hole5");
//purple
const h7 = document.getElementById("hole7");
const h8 = document.getElementById("hole8");
const h9 = document.getElementById("hole9");
const h10 = document.getElementById("hole10");
const h11 = document.getElementById("hole11");
const h12 = document.getElementById("hole12");



let holesArray = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];  

function boardDisplay() {
    h0.textContent = holesArray[1];
    h1.textContent = holesArray[2];
    h2.textContent = holesArray[3];
    h3.textContent = holesArray[4];
    h4.textContent = holesArray[5];
    h5.textContent = holesArray[6];
    h6.textContent = holesArray[7];
    h7.textContent = holesArray[8];
    h8.textContent = holesArray[9];
    h9.textContent = holesArray[10];
    h10.textContent = holesArray[11];
    h11.textContent = holesArray[12];
    h12.textContent= holesArray[13];
    
}




// class Players {
//     constructor(color, arrayIndex, pitIndex){
//     this.color = color;
//     this.arrayIndex= arrayIndex;
//     this.pitIndex = pitIndex;
// }}

// let purplePlayer = new Players(purple, holesArray[1,6], holesArray[0]);
// let redPlayer = new Players (red, holesArray[8,13], holesArray[7]);


// function game(amountIdx) {
//     let numMarbles = holesArray[amountIdx];
//     holesArray[amountIdx]=0;
//     amountIdx += 1;
//     while (numMarbles >0) {
//         if (amountIdx > 13 ) amountIdx = 0;
//         if (amountIdx !==13 || amountIdx !== 6){
//             holesArray[amountIdx]++;
//             numMarbles--;
//         }
//         amountIdx++;
//     }
//     return --amountIdx;
    
// }
// //console.log(game(3));



























  

  
