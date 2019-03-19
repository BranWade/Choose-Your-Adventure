
function playGame() {
	var enterBar = confirm("You come across a bar in town. Do you want to have a drink?");

if(enterBar == true) {
	var drinkChoice = prompt("You enter the bar. You see three bottles of booze. Do you try vodka, gin or whiskey?");
if(drinkChoice == "vodka") {
	alert("vodka is not strong enough");
}
else if(drinkChoice == "gin") {
	alert("gin is for retirees");
} 
	else {	
	alert("Whiskey is just right!");
}



var mixChoice = prompt("What would you like to use as a mixer: seltzer, soda, straight");
if(mixChoice == "Seltzer") {
	alert("This mix is too basic. Go drink elsewhere");
}
	else if(mixChoice == "Soda") {
	alert("This mix is too sweet. Go drink elsewhere");

} 
	else {
	alert("This drink is just right!");



var intake = prompt("You've had too much. Would you like to vomit, sleep, die?");
  if(intake == "vomit"){
  	alert("You've been kicked out the bar!");
  }
   	 else if(intake =="sleep") {
  	 alert("No sleeping at the bar - leave.");

  }
  	
 	else {
 	alert("Whiskey is the only good choice");
 	alert("We only drink whiskey straight here");
 	alert("You've decided you need rehab.");
 	}
   }
  }
 	else {
 	alert("You've decided to take the path of enlightenment. No drinks for you!");
 }

 	var playAgain = confirm("Do you want to play again?");
 	if(playAgain == true) {
 	playGame();
 }

}

playGame();