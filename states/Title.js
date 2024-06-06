import GameState from "./State.js";
// import GameWorld from "./GameWorld.js";

export default class Title extends GameState {
  constructor(game) {
    super(game);
  }
  update() {
    this.game.resetKeys();
  }
  render(context) {
    // console.log("ehho");
    context.font = "48px serif";
    context.fillStyle = "black";
    context.fillText("Game States Demo", 10, 50);
  }
}
