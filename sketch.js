var database, gameState, playerCount, game, form, player, allPlayers;

var cars, car1, car2, car3, car4;

function setup() {

  createCanvas(windowWidth-300, windowHeight-200);

  gameState = 0;

  database=firebase.database();

  game = new Game();

  game.getState();
  
  game.start();

}

function draw() {
  if(playerCount === 4){
    game.updateState(1);
  }

  console.log(allPlayers);

  if(gameState === 1){
    clear();
    game.play();
  }
}