import GameState from "./State.js";
import GameWorld from "./GameWorld.js";

export default class Title extends GameState {
  constructor(game) {
    super(game);
  }
  update(deltaTime, actions) {
    if (actions["enter"]) {
      let newState = new GameWorld(this.game);
      newState.enterState();
    }
    this.game.resetKeys();
  }
  render(context) {
    // console.log("ehho");
    context.font = "48px serif";
    context.fillStyle = "black";
    context.fillText("Game States Demo", 10, 50);
    context.font = "24px serif";
    context.fillStyle = "darkgrey";
    context.fillText("press enter to play", 100, 100);
  }
}
