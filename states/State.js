export default class GameState {
  constructor(game) {
    this.game = game;
    this.prevState = null;
  }

  update(deltaTime, actions) {}
  render(canvas) {}
  enterState() {
    console.log("entering state");
    console.log(this.game.stateStack);
    if (this.game.stateStack.length > 1) {
      console.log("adding prev state");
      this.prevState = this.game.stateStack[this.game.stateStack.length - 1];
    }
    this.game.stateStack.push(this);
  }
  exitState() {
    this.game.stateStack.pop();
  }
}
