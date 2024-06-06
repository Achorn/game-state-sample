import GameState from "./State";

export default class GameWorld extends GameState {
  constructor(game) {
    super(game);
  }

  update(deltaTime, actions) {}

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
  }
}
