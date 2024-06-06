import Menu from "./states/Menu.js";
import UserInput from "./UserInput.js";
export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.input = new UserInput();
    this.menu = new Menu(this);

    window.addEventListener("resize", (e) => {
      this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
    });
  }
  resize(width, height) {}

  update() {
    // this.menu.update();
  }

  draw() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.menu.draw(this.ctx);
  }
}
