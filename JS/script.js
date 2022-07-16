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


//game setup




const holesAndPits = 14;
let mancala = [holesAndPits];

let initialMarbles = 4;

let gameSetup = function() {
    for (let i=0; i< holesAndPits; i++){
        if (i == redScorePit || i == purpleScorePit){
            mancala[i] = 0;
        }
    else{
        mancala[i] = initialMarbles;
}
        }};
console.log(gameSetup)

const clickHole = document.querySelectorAll('.hole');
clickHole.forEach((clickHole)=>{
clickHole.addEventListener('click', () => {
  alert("Hello World")
});
});

