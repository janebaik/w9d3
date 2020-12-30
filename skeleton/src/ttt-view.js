const Game = require("../../solution/game");

class View {
  constructor($el, game) {
    this.game = game || new Game();
  };

  bindEvents() {};

  makeMove($square) {};

  setupBoard() {
    const figure = $('.ttt')
    const row1 = $('<ul class="row">')
    const row2 = $('<ul class="row">')
    const row3 = $('<ul class="row">')

    figure.append(row1)
    figure.append(row2)
    figure.append(row3)
  };
};

module.exports = View;
