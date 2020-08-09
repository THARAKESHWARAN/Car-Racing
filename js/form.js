class Form {
        constructor() {

        }

        display() {
            var title = createElement("h1")
            title.html("Car racing");
            title.position(width+100, 150);

            var input = createInput("Your Name");
            input.position(width+100, 250);

            var button = createButton("Next");
            button.position(width+150, 300);

            var greeting = createElement("h3");
            greeting.position(200, 150);

            button.mousePressed(function (){
                input.hide();
                button.hide();

                var name = input.value();
                greeting.html("Hi "+name);
                playerCount++;

                player.updateName(name);
                player.updateCount(playerCount);
            })
        }
}