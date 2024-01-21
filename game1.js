// our choice
function rps(yourChoice) {
   console.log(yourChoice);
   var bot = rpsgen(rpsInt());
   var OurChoice = yourChoice.id;
   console.log(bot);
   result = Winner(OurChoice, bot);
   console.log(result);
   Message = Decide(result);
   console.log(Message);
   frontend(OurChoice, bot, Message);
}
// bot choice-----
function rpsInt() {
   return Math.floor(Math.random() * 3);
}
function rpsgen(Number) {
   return ['rock', 'paper', 'scissor'][Number];
}
// check winner

function Winner(yourChoice, BotChoice) {
   var Condition = {
      'rock': { 'rock': 0.5, 'paper': 0, 'scissor': 1 },
      'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
      'scissor': { 'rock': 0, 'paper': 1, 'scissor': 0.5 }
   };
   var yourChance = Condition[yourChoice][BotChoice];
   var BotChance = Condition[BotChoice][yourChoice];
   return [yourChance, BotChance];
}
// for message----
function Decide([myScore, BotScore]) {
   if (myScore == 0 && BotScore == 1) {
      return { 'message': 'You Lost', 'color': 'Red' };
   } else if (myScore == 1 && BotScore == 0) {
      return { 'message': 'You Win', 'color': 'Blue' };
   } else if (myScore == 0.5 && BotScore == 0.5) {
      return { 'message': 'Match Draw', 'color': 'Yellow' };
   }
}
// now look for frontend part---

function frontend(MyImage, BotImage, WinningMessage) {
   var x = document.getElementById("rock").src
   var y = document.getElementById("paper").src
   var z = document.getElementById("scissor").src
   var imageData = {
      'rock': x,
      'paper': y,
      'scissor': z
   }
   document.getElementById("rock").remove();
   document.getElementById("paper").remove();
   document.getElementById("scissor").remove();

   var myImage = document.createElement('div');
   var botImage = document.createElement('div');
   var MessagePart = document.createElement('div');

   myImage.innerHTML = "<img src='" + imageData[MyImage] + "' height=200 width=200 style = 'box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
   MessagePart.innerHTML = "<h1 style = 'color: " + WinningMessage['color'] + "; font-size :60px; padding:30px;'>" + WinningMessage['message'] + "</h1>"
   botImage.innerHTML = "<img src='" + imageData[BotImage] + "' height=200 width=200 style = 'box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"


   // now append this----
   document.getElementById('container').appendChild(myImage);
   document.getElementById('container').appendChild(MessagePart);
   document.getElementById('container').appendChild(botImage);


}

