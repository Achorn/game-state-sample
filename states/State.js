export default class GameState {
  constructor(game) {
    this.game = game;
    this.prevState = null;
  }

  update(deltaTime, actions) {}
  render(canvas) {}
  enterState() {
    if (this.game.stateStack > 1) {
      this.prevState = this.game.stateStack[this.game.stateStack.length - 1];
    }
    this.game.stateStack.push(this);
  }
  exitState() {
    this.game.stateStack.pop();
  }
}
