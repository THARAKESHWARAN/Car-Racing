class Player {

    constructor() {
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = 0;
    }

    getCount() {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        }, function (error) {
            console.log(error);
        })
    }

    getRank() {
        var endStateRef = database.ref("end");
        endStateRef.on("value", (data) => {
            this.rank = data.val();
        })
    }

    static updateRank(x) {
        database.ref("/").update({
            end: x
        })
    }


    updateCount(count) {
        database.ref("/").update({
            playerCount: count
        })
    }

    update() {
        database.ref("players/player" + this.index).set({
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