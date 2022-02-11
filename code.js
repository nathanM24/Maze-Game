

// Move Character
onEvent("levelOne", "keydown", function (event) {
var heroX = getXPosition("colorHero");
var heroY = getYPosition("colorHero");

var distance = 6;

if(event.key == "Up") {
  heroY = heroY - distance;
  
} 

  if(event.key == "Down") {
    heroY = heroY + distance;
    
  }
  
  if(event.key == "Left" ) {
      heroX = heroX - distance;
      
    } 
    
      if(event.key == "Right") {
        heroX = heroX + distance;
      }
      
    setPosition("colorHero", heroX, heroY);  
});

 // Find time when maze is completed
 onEvent("startBtn", "click", function() {
var seconds = 0;
 timedLoop(1000, function countTime () {
   seconds = seconds + 1;
   console.log(seconds);
   setText("label6", "Good Job, you are able to get to Dr. Grey in " + seconds + (" seconds"));
 });
});
 onEvent("FinishBtn", "click", function () {
   setScreen("winnerScrn");
   stopTimedLoop();
 });
           
// Take player back to start screen

onEvent("startOvr2Btn", "click", function () {
  setScreen("startScreen");
});

// Start Game
onEvent("startBtn","click", function () {
  setScreen("levelOne");
});


