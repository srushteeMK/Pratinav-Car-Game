class PLAYER {
  constructor() {
    this.index = null;
    this.name = "";
    this.distance = 0;
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", function (data) {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance,
    });
  }

  static getPlayerInfo() {
    database.ref("players").on("value", (data) => {
      allPlayer = data.val();
    });
  }
}
