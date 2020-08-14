class Player {

    constructor() {
        this.name = null;
        this.distance = 0;
        this.index = null;
    }

    getCount() {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        }, function (error) {
            console.log(error);
        })
     }

     updateCount(count) {
        database.ref("/").update({
            playerCount: count
        })
    }

    update() {
        database.ref("players/player"+this.index).set({
            Name: this.name,
            Distance: this.distance
        })
    }

    static getPlayerInfo() {
        database.ref("players").on("value", (data) => {
            allPlayers = data.val();
        }, (error) => {
            console.log(error);
        }) 
    }
}