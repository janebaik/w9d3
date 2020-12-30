const Game = require("../../solution/game");

class View {
  constructor($el, game) {
    // debugger
    this.game = game || new Game();

    this.setupBoard();
  };

  bindEvents() {};

  makeMove($square) {};

  setupBoard() {
    const $figure = $('.ttt')
    // debugger
    const $row1 = $('<ul class="row"></ul>');
    const $row2 = $('<ul class="row"></ul>');
    const $row3 = $('<ul class="row"></ul>');

    $figure.append($row1);
    $figure.append($row2);
    $figure.append($row3);
    
    const $column = $('<li class="column"></li>');

    for (let i = 1; i <= 3; i++) {
      $row1.append($('<li class="column"></li>'));
      $row2.append($('<li class="column"></li>'));
      $row3.append($('<li class="column"></li>'));
    }
  };
};

module.exports = View;
