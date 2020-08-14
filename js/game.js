class Game {

    constructor() {

    }

    getState() {
       var gameStateRef = database.ref("gameState");
       gameStateRef.on("value", function (data) {
           gameState = data.val();
       }, function (error) {
           console.log(error);
       })
    }

    updateState(state) {
        database.ref("/").update({
            gameState: state
        })
    }

    async start() {
        if(gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display(); 
            car1 = createSprite(windowWidth/2-500, windowHeight/2+100);
            car2 = createSprite(windowWidth/2-300, windowHeight/2+100);
            car3 = createSprite(windowWidth/2-100, windowHeight/2+100);
            car4 = createSprite(windowWidth/2+100, windowHeight/2+100);
            cars = [car1, car2, car3, car4];
        }
    }

    play() {
        form.hide();
        // var message = createElement("h2");
        // message.html("GAME STARTED");
        // message.position(width +100, 250);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
           var yPosition = windowHeight/2+100;
           var index = 0;
            for(var i in allPlayers){
                cars[index].y = yPosition-allPlayers[i].Distance;
                if(index+1 === player.index){
                    cars[index].shapeColor = "red";
                    camera.position.y = cars[index].y;
                }
                camera.position.x = windowWidth/2;
                index = index+1;
            }
        }
        if(keyDown(UP_ARROW)){
            player.distance = player.distance + 50;
            player.update();
        } 
        drawSprites();
    }
}