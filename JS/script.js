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
  });
}




//eventlisteners and DOM
const purplePlayer = document.getElementsByClassName('.hole1');
const redPlayer = document.getElementsByClassName('.hole2');

document.getElementsByClassName('.gameRows').addEventListener('click', function(){
    gameStart();
});
















//functions

function gameSetup() {
    gameHoles = [ 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
    player = "one";
    winner = null;
}


function gameStart(e){
    let begin = parseInt(e.target.id.replace('gameHoles', ''));
    if (player === 'one' && begin > 5) return;
    if (player === 'two' && (begin <= 6 || move === 13)) return;
   
    
};

marbles= 24;
marbsPerHole= 4;
pitsAndHoles= 14;


let mancala=[pitsAndHoles];
let holesPerPlayer = 6;
let playerMove = pitsAndHoles - 1;
let initialPlay = 0;



function gameStart(){
 for ( let move = 0; move < marbsPerHole; move++){
   if( move == holesPerPlayer || move == playerMove) {
        mancala[move] = 0;
   }
    else {
        mancala[move] = marbsPerHole;
    }
   }
;}






































  

  
