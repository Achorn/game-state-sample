import GameState from "./State.js";
import PauseMenu from "./PauseMenu.js";

export default class GameWorld extends GameState {
  constructor(game) {
    super(game);
  }

  update(deltaTime, actions) {
    if (actions["escape"]) {
      let newState = new PauseMenu(this.game);
      newState.enterState();
    }
  }

  render(context) {
    //draw yellow background
    context.beginPath();
    context.fillStyle = "#ff6";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw blue triangle
    context.beginPath();
    context.fillStyle = "blue";
    context.moveTo(20, 20);
    context.lineTo(180, 20);
    context.lineTo(130, 130);
    context.closePath();
    context.fill();

    context.font = "48px serif";
    context.fillStyle = "green";
    context.fillText("FUN GAMEPLAY", 50, 100);

    context.font = "24px serif";
    context.fillStyle = "blue";
    context.fillText("press escape to pause", 100, 200);
  }
}
