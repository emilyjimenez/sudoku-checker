var SudokuGrid = require('./../js/scripts').sudokuModule;

$(document).ready(function() {
  var newGrid = new SudokuGrid();
  newGrid.setUpGrid();
  $('#wsBox').append(newGrid.currentGrid.join(""));
  console.log(newGrid.currentGrid);
});
