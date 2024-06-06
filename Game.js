import UserInput from "./UserInput.js";
import Title from "./states/Title.js";

export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.input = new UserInput();
    // this.menu = new Menu(this);
    this.stateStack = []; //magage game states
    window.addEventListener("resize", (e) => {
      this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
    });
    this.loadStates();
  }
  resize(width, height) {}

  update(deltaTime) {
    this.stateStack[this.stateStack.length - 1].update(
      deltaTime,
      this.input.commands
    );
    // this.menu.update();
  }

  draw() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.stateStack[this.stateStack.length - 1].render(this.ctx);
    // this.menu.draw(this.ctx);
  }

  loadStates() {
    this.titleScreen = new Title(this);
    this.stateStack.push(this.titleScreen);
  }
  resetKeys() {
    this.commands = {};
  }
}
