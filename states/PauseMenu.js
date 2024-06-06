import GameState from "./State.js";

export default class PauseMenu extends GameState {
  constructor(game) {
    super(game);
  }

  update(deltaTime, actions) {
    if (actions["backspace"]) {
      this.exitState();
    }
    this.game.resetKeys();
  }

  render(context) {
    this.prevState.render(context);

    context.font = "48px serif";
    context.fillStyle = "black";
    context.fillText("pause menu", 100, 100);
  }
}
