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



// const playGame = document.getElementsByClassName('holes1 holes2');
// playGame.addEventListener('click', function(){
//     game();

// });

// const playBtn = document.querySelector('.infobar');




// const h0 = document.getElementById("hole0");
// const h1 = document.getElementById("hole1");
// const h2 = document.getElementById("hole2");
// const h3 = document.getElementById("hole3");
// const h4 = document.getElementById("hole4");
// const h5 = document.getElementById("hole5");

// const h7 = document.getElementById("hole7");
// const h8 = document.getElementById("hole8");
// const h9 = document.getElementById("hole9");
// const h10 = document.getElementById("hole10");
// const h11 = document.getElementById("hole11");
// const h12 = document.getElementById("hole12");





// let setUp = function boardSetUp() {
//     h0.textContent = holesArray[hole0];
//     h1.textContent = holesArray[hole1];
//     h2.textContent = holesArray[hole2];
//     h3.textContent = holesArray[hole3];
//     h4.textContent = holesArray[hole4];
//     h5.textContent = holesArray[hole5];
//     h6.textContent = holesArray[hole6];
//     h7.textContent = holesArray[hole7];
//     h8.textContent = holesArray[hole8];
//     h9.textContent = holesArray[hole9];
//     h10.textContent = holesArray[hole10];
//     h11.textContent = holesArray[hole11];
//     h12.textContent= holesArray[hole12];
//     h13.textContent = holesArray[hole13];
//}


let holesArray = [0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];  
let marbsInHoles = 4;
let player = 1;



function game(amountIdx) {
    let numMarbles = holesArray[amountIdx];
    holesArray[amountIdx]=0;
    amountIdx += 1;
    while (numMarbles >0) {
        if (amountIdx > 13 ) amountIdx = 0;
        if ((player === 1 && amountIdx !==13) || (player === 2 && amountIdx !== 6)){
            holesArray[amountIdx]++;
            numMarbles--;
        }
        amountIdx++;
    }
    return --amountIdx;
    
}

console.log(game(3));





























  

  
