class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  start() {
    if (gameState === 0) {
      player = new PLAYER();
      player.getCount();
      form = new Form();
      form.display();
    }
  }

  play() {
    form.hide1();
    textSize(30);
    text("Game Start", 120, 100)
    PLAYER.getPlayerInfo();

    if(allPlayer !== undefined){
      var display_position = 130;
      for(var plr in allPlayer){
        console.log(plr,"player"+player.index)
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayer[plr].name + ": " + allPlayer[plr].distance, 120,display_position)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}