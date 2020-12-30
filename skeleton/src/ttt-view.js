const Game = require("../../solution/game");

class View {
  constructor(game, $el) {
    // debugger
    this.game = game;
    this.$el = $el
    this.setupBoard();
    this.bindEvents();
  };

  bindEvents() {
    this.$el.on('click', 'li' ( event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    }));
  }
  
  makeMove($square) {
    // this.game.playMove($square);
    
  };

  setupBoard() {
    const $el = $('.ttt');

    for (let i = 0; i < 3; i++) {
      const row = $("<ul class='row'></ul>");
      for (let x = 0; x < 3; x++) {
        const square = $("<li class='column'></li>");
        square.attr("row", i);
        square.attr("column", x);
        row.append(square);
      }
      this.$el.append(row);
    }

    // const $figure = $('.ttt')
    // const $row1 = $('<ul class="row"></ul>');
    // const $row2 = $('<ul class="row"></ul>');
    // const $row3 = $('<ul class="row"></ul>');

    
    // for (let i = 0; i < 3; i++) {
    //   $row1.append($('<li class="column"></li>'));
    //   $row1.attr("row", i);
    //   $row1.attr("column", 0);
      
    //   $row2.append($('<li class="column"></li>'));
    //   $row2.attr("row", i);
    //   $row2.attr("column", 1);
      
    //   $row3.append($('<li class="column"></li>'));
    //   $row3.attr("row", i);
    //   $row3.attr("column", 2);
    // };

    // $figure.append($row1);
    // $figure.append($row2);
    // $figure.append($row3);
  };

};

module.exports = View;
