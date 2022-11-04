var board=[];
var userChoice
var currentTurn

function minmax(){
 this.minPlayer=min;
 this.maxPlayer=max;
}

minmax.prototype.setMinMax=function(min,max){
 this.minPlayer=min;
 this.maxPlayer=max;
}

minmax.prototype.copyBoard=function(board){
 return board.slice(0);
}

minmax.prototype.makeMove=function(position,board,player){
 if(board[position]==0){
  var newBoard=this.copyBoard(board);
  newBoard[position]=player;
  return newBoard;
 }
 else{
  return null;
 }
}