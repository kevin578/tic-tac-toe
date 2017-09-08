window.onload = function() {

	/*  
		board[0]    board[1]	board[2]
		board[3]	board[4]	board[5]
		board[6]	board[7]	board[8]
	*/

	var board = [

	"X",	"",		"", 
	"O",	"",		"", 
	"",		"",		"X"

	];

	var turn = {
		player: 'X',

		swap: function() {
			this.player = this.player == 'X' ? 'O' : 'X';
		}
	} 

	var moves = {};

	




	






	function checkBoard(i) {
		if( board[0] == i && board[1] == i && board[2] == i ||
			board[3] == i && board[4] == i && board[5] == i ||
			board[6] == i && board[7] == i && board[8] == i ||
			board[0] == i && board[3] == i && board[6] == i ||
			board[1] == i && board[4] == i && board[7] == i ||
			board[2] == i && board[5] == i && board[8] == i ||
			board[4] == i && board[4] == i && board[8] == i ||
			board[6] == i && board[4] == i && board[2] == i 
			) {
			return true
		} 
		else { 
			return false;
		}
	}

	function getOpenSpots(arr) {
		var emptyArray = []

		for(var i = 0; i < arr.length; i++) {
			if (arr[i].length < 1) {
				emptyArray.push(i);
			}
		}

		return emptyArray; 
	} 









}