function SudokuGrid() {
  this.row1 = [5,3,4,6,7,8,9,1,2];
  this.row2 = [6,7,2,1,9,5,3,4,8];
  this.row3 = [1,9,8,3,4,2,5,6,7];
  this.row4 = [8,5,9,7,6,1,4,2,3];
  this.row5 = [4,2,6,8,5,3,7,9,1];
  this.row6 = [7,1,3,9,2,4,8,5,6];
  this.row7 = [9,6,1,5,3,7,2,8,4];
  this.row8 = [2,8,7,4,1,9,6,3,5];
  this.row9 = [3,4,5,2,8,6,1,7,null];
  this.grid = [this.row1, this.row2, this.row3,
              this.row4, this.row5, this.row6,
              this.row7, this.row8, this.row9];
}


SudokuGrid.prototype.enterNumber = function(number) {
  this.row9[8] = number;
};

SudokuGrid.prototype.checkRow = function() {
  this.row9.sort(function(a,b){
    return a - b;
  });
  for(var i = 0; i < 9; i++){
    if (this.row9[i] === (i+1)){
      continue;
    } else {
      return false;
    }
  }
  return true;
};

SudokuGrid.prototype.checkColumn = function() {
  var col9 = [];
  this.grid.forEach(function(row){
    col9.push(row[8]);
  });
  col9.sort(function(a,b){
    return a - b;
  });
  console.log("is this col in order?" + col9)
  for(var i = 0; i < 9; i++){
    if (col9[i] === (i+1)){
      continue;
    } else {
      return false;
    }
  }
  return true;
};

SudokuGrid.prototype.checkSquare = function() {
  var sq9 = [];
  for (var i = 6; i < 9; i++){
    sq9.push(this.grid[i].slice(6,9));
  }
  var newSq9 = sq9.join().split(",");
  newSq9.sort(function(a,b){
    return a - b;
  });
  for(var i = 0; i < 9; i++){
    if (newSq9[i] === (i+1.toString())){
      continue;
    } else {
      return false;
    }
  }
  return true;
};

exports.sudokuModule = SudokuGrid;
