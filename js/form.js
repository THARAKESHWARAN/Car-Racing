class Form {
        constructor() {
            this.input = createInput("Your Name");
            this.button = createButton("Next");
            this.greeting = createElement("h3");
            this.wait = createElement("h4");
            this.resetButton = createButton("Reset");
        }

        display() {
            var title = createElement("h1")
            title.html("Car racing");
            title.position(windowWidth/2-100, windowHeight/2-200);

            this.input.position(windowWidth/2-100, windowHeight/2-100);
 
            this.button.position(windowWidth/2-50, windowHeight/2-60);

            this.resetButton.position(windowWidth-320, windowHeight-650);
 
            this.greeting.position(windowWidth/2-80, windowHeight/2);

             this.waitState = ()=> {
                this.input.hide();
                this.button.hide();
                this.wait.html("Wait For Other Players!");
                this.wait.position(windowWidth/2-100, windowHeight/2+100);

                player = new Player();

                player.name = this.input.value();
                playerCount++;
                player.index = playerCount;

                player.update();
                player.updateCount(playerCount);
                this.greeting.html("Hi  "+ player.name);
            }

            this.button.mousePressed(this.waitState);


            this.resetButton.mousePressed(()=>{
                player.updateCount(0);
                game.updateState(0);
                window.location.reload();
            })
        }

        hide() {
            this.greeting.hide();
            this.wait.hide();
        }
}