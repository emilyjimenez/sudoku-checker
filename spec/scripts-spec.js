var SudokuGrid = require('./../js/scripts').sudokuModule;

describe('SudokuGrid', function() {
  var newGrid;

  beforeEach(function(){
    newGrid = new SudokuGrid();
  });

  it('should enter number in empty spot in grid', function() {
    newGrid.enterNumber(1);
    expect(newGrid.row9[8]).toEqual(1);
  });

  it('should check if a row is legit', function() {
    newGrid.enterNumber(9);
    var rowGood = newGrid.checkRow();
    expect(rowGood).toEqual(true);
  });

  it('should check if a column is legit', function() {
    newGrid.enterNumber(9);
    var colGood = newGrid.checkColumn();
    expect(colGood).toEqual(true);
  });

  it('should check if a square is legit', function() {
    newGrid.enterNumber(9);
    var sqGood = newGrid.checkSquare();
    expect(sqGood).toEqual(true);
  });

});
