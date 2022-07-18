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




//eventlisteners
const clickHole = document.querySelectorAll('.hole');
clickHole.forEach((clickHole)=>{
clickHole.addEventListener('click', () => {
  alert("Hello World");
})});


const clickNum = document.querySelectorAll('h1');
clickNum.getElementsByTagName.addEventListener("click", function(){

});



//functions
let boardSetUp = {
marbles: 24,
marbsPerHole: 4,
pitsAndHoles: 14
};

boardSetUp.marbles;




































// //game setup
// const holesAndPits = 14;
// let mancala = [holesAndPits];

// let initialMarbles = 4;

// let gameSetup = function() {
//     for (let i=0; i< holesAndPits; i++){
//         if (i == redScorePit || i == purpleScorePit){
//             mancala[i] = 0;
//         }
//     else{
//         mancala[i] = initialMarbles;
// }
//         }};
// console.log(gameSetup)


// //Event Listeners
// const clickHole = document.querySelectorAll('.hole');
// const clickNum = document.querySelectorAll('h1')
// clickHole.forEach((clickHole)=>{
// clickHole.addEventListener('click', () => {
//     return game
    
    
// });
// });

// //playerstart: the hole where the player is drawing marbles

// let game = function(playerStart){
//     let i=0;
//     let numMarbles = mancala[playerStart];
//     let playAgain = false;
//     let pits = 0;

// //when the player takes out the marbles to play
//     mancala[playerStart] =0;

// //player increases marble count of holes while in play
//     for (i = playerStart+1; i<playerStart+1 + numMarbles; i++)
//     pits = i % holesAndPits;

//     mancala[pits] += 1;
// }


// function Player(color){
//     this.color = color
// }

// const redPlayer = new Player('red')
// const purplePlayer = new Player('purple')


// function gameOver(winningPlayer){
//     console.log("Congratulations!")
//     console.log(winningPlayer.name + " is the winner!")
//   }




  

  
