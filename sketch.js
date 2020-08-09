var database, gameState, playerCount, game, form, player;

function setup() {

  gameState = 0;

  database=firebase.database();

  game = new Game();

  game.getState();
  
  game.start();

}