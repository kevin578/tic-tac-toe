window.onload = function() {

var mainBoard = [
0,		1,		2,
3,		4,		5,
6,		7,		8];

var huPlayer = 'X'
var aiPlayer = 'O'

var turn = "human"

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
  return arr.filter(function(x){
    if (typeof x === 'number') {
      return x;
          }
  });
}

function minimax(newBoard, player){

  
  var openSpots = getOpenSpots(newBoard);

  
  if (checkBoard(mainBoard, huPlayer)){
     return {score:-1};
  }
	else if (checkBoard(mainBoard, aiPlayer)){
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


console.log (minimax(mainBoard, huPlayer))




}