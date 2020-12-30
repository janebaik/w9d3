const View = require ('./ttt-view')
const Game = require('../../solution/game')

  $(() => {
    const game = new Game();
    const container = $(".ttt");//our figure is our container
    const view = new View(game, container);
    
    //can also instantiate game here 
  });
