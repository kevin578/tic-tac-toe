window.onload = function() {

var mainBoard = [
0,		1,		2,
3,		4,		5,
6,		7,		8];

var huPlayer = 'X'
var aiPlayer = 'O'

var turn = "human";


var cellKey = {
	square1: 0,
	square2: 1,
	square3: 2,
	square4: 3,
	square5: 4,
	square6: 5,
	square7: 6,
	square8: 7,
}





humanTurn();

function humanTurn(){
	let square = document.getElementsByClassName('square');
	for (var i = 0; i < square.length; i++) {
	    square[i].addEventListener('click', function() {
				document.getElementById(this.id).innerHTML = huPlayer;
				mainBoard[cellKey[this.id]] = huPlayer;
				turn = "computer";
				computerTurn();
			});
	}
}


function computerTurn() {
  var compValue = minimax(mainBoard, aiPlayer);
  mainBoard[compValue.index] = aiPlayer;
  var cellId = getKeyByValue(cellKey, compValue.index);
  document.getElementById(cellId).innerHTML = aiPlayer; 
}



function clicked() {
	console.log("clicked")
	/*if (turn = "human") {
		document.getElementbyId(divName).innerHTML = huPlayer;
	}*/
}

function checkBoard(board, i) {
  if( board[0] == i && board[1] == i && board[2] == i || //across top
    board[3] == i && board[4] == i && board[5] == i || //across middle
    board[6] == i && board[7] == i && board[8] == i || // across bottom
    board[0] == i && board[3] == i && board[6] == i || // down left
    board[1] == i && board[4] == i && board[7] == i || // center down
    board[2] == i && board[5] == i && board[8] == i || // center right
    board[0] == i && board[4] == i && board[8] == i || // diagonal top left to bottom right
    board[6] == i && board[4] == i && board[2] == i // diagonal bottom left to top right
    ) {
    return true
  }
  else {
    return false;
  }
}
function getOpenSpots(arr) {
    return  arr.filter(s => s != "O" && s != "X");
}

function minimax(newBoard, player){


  var openSpots = getOpenSpots(newBoard);


  if (checkBoard(newBoard, huPlayer)){
     return {score:-1};
  }
	else if (checkBoard(newBoard, aiPlayer)){
    return {score:1};
	}
  else if (openSpots.length === 0){
  	return {score:0};
  }

    var moves = [];


    for (var i = 0; i < openSpots.length; i++){

		var move = {};
    	move.index = newBoard[openSpots[i]];
      	newBoard[openSpots[i]] = player;

      	if (player == aiPlayer){
        	var result = minimax(newBoard, huPlayer);
        	move.score = result.score;
      }
      	else{
        	var result = minimax(newBoard, aiPlayer);
        	move.score = result.score;
      }

     	newBoard[openSpots[i]] = move.index;
      	moves.push(move);
    }

	var bestMove;

    if(player === aiPlayer){

        var bestScore = -8;

        for(var i = 0; i < moves.length; i++){
          if(moves[i].score > bestScore){
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      }
      else {

    var bestScore = 8;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score < bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}


function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}


}
