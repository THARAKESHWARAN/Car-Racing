class Player {

    constructor() {
        
    }

    getCount() {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", function (data) {
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

    updateName(name) {
        database.ref("player"+playerCount).set({
            Name: name
        })
    }
}