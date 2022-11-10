// will constantly check if there is a winner
var playerTurn, moves, isGameOver, span, restartButton;  
 playerTurn = "x";  
 moves = 0;  
 isGameOver = false;  
 span = document.getElementsByTagName("span");  
 restartButton = '<button onclick="playAgain()">Play again</button>';  
 function play(y){  
      if (y.dataset.player=="none" && window.isGameOver == false) {  
           y.innerHTML = playerTurn;  
           y.dataset.player = playerTurn;  
           moves++;  
           if (playerTurn=="x") {  
                playerTurn="o";
                document.getElementById("player").innerHTML = "O";  
           } else if (playerTurn=="o") {  
                playerTurn="x"  
                document.getElementById("player").innerHTML = "X";  
           }  
      }  
      checkWinner(1,2,3);  
      checkWinner(4,5,6);  
      checkWinner(7,8,9);  
      checkWinner(1,4,7);  
      checkWinner(2,5,8);  
      checkWinner(3,6,9);  
      checkWinner(1,5,9);  
      checkWinner(3,5,7);  
      if (moves == 9 && isGameOver == false) {draw();}  
 }  
 function checkWinner(a, b, c) {  
      a--; b--; c--;  
      if (  
           (span[a].dataset.player === span[b].dataset.player) &&  
           (span[b].dataset.player === span[c].dataset.player) &&  
           (span[a].dataset.player === span[c].dataset.player) &&  
           ((span[a].dataset.player === "x") || span[a].dataset.player == "o")&&  
           isGameOver == false  
      ) {  
           span[a].parentNode.className += " activeBox";  
           span[b].parentNode.className += " activeBox";  
           span[c].parentNode.className += " activeBox";  
           gameOver(a);  
      }  
 }  
 // sets up a check if there is a win and says who won and asks if you want to play again
 function playAgain(){  
      document.getElementsByClassName("alert")[0].parentNode.removeChild(document.getElementsByClassName("alert")[0]);  
      resetGame();  
      window.isGameOver = false;  
      for(var k =0; k<span.length; k++){  
           span[k].parentNode.className= span[k].parentNode.className.replace("activeBox", "");
      }  
 }  
 // when you hit play again you restart the board
 function resetGame(){  
      for (i=0; i<span.length; i++){  
           span[i].dataset.player = "none";  
           span[i].innerHTML = "&nbsp;"  
      }  
      playerTurn = "x";  
 }  
 let winX = 0;
 let winO = 0;
 // says who won and places a restart button
 function gameOver(a){  
      var winner = span[a].dataset.player;
      var gameOverAlertElement = "<b>GAME OVER</b><br><br> Player " + span[a].dataset.player.toUpperCase() + ' Wins !!! <br><br>' + restartButton  
      var div = document.createElement("div");  
      div.className = "alert";  
      div.innerHTML = gameOverAlertElement;  
      document.getElementsByTagName("body")[0].appendChild(div);  
      window.isGameOver = true;  
      moves = 0;  
      console.log(winner)
      if(winner == "o"){
          winO++;
     document.getElementById("winO").innerHTML = "Wins for O: " + winO;
      } else {
          winX++;
          document.getElementById("winX").innerHTML = "Wins for X: " + winX; 
      }
 }  
 let drawNum = 0;
 // checks if it is a draw and outputs a draw and a restart button
 function draw(){  
      var drawAlertElement = '<strong>DRAW!!!</strong><br><br>' + restartButton;  
      var div = document.createElement("div");  
      div.className = "alert";  
      div.innerHTML = drawAlertElement;  
      document.getElementsByTagName("body")[0].appendChild(div);  
      window.isGameOver = true;  
      moves = 0;  
      drawNum++;
      document.getElementById("drawNum").innerHTML = "Draws: " + drawNum;
 }  