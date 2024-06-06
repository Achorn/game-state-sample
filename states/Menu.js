const mainMenuOptions = [
  {
    title: "play",
    icon: "",
    action: () => console.log("set play game state"),
  },
  {
    title: "options",
    icon: "",
    action: () => console.log("set options menu state"),
  },
  {
    title: "quit",
    icon: "",
    action: () => console.log("quit game"),
  },
];

const title = "Main Menu";

export default class Menu {
  constructor(game) {
    this.game = game;

    this.title = title;
    this.options = mainMenuOptions;
    this.selectedOptionIndex = 0;
    this.init();
  }
  init() {
    this.game.input.on("keyDown", () => {
      let commands = this.game.input.commands;
      let key = [Object.keys(commands)[Object.keys(commands).length - 1]];
      this.update(key);
    });
  }
  draw(context) {
    // draw menu and buttons
    for (let i = 0; i < this.options.length; i++) {
      context.font = "48px serif";
      context.fillStyle = i == this.selectedOptionIndex ? "blue" : "black";

      context.fillText(this.options[i].title, 10, 50 * (i + 1));
    }
  }
  update() {
    // console.log(this.game.input.commands);

    if (this.game.input.commands["arrowup"]) {
      this.moveUp();
    }
    if (this.game.input.commands["arrowdown"]) {
      this.moveDown();
    }
    if (this.game.input.commands["enter"]) {
      this.select();
    }
    if (this.game.input.commands["backspace"]) {
      this.goBack();
    }
  }
  moveUp() {
    if (this.selectedOptionIndex > 0) {
      this.selectedOptionIndex--;
    }
  }
  moveDown() {
    if (this.selectedOptionIndex < this.options.length - 1) {
      this.selectedOptionIndex++;
    }
  }
  select() {
    console.log("selecting ", this.options[this.selectedOptionIndex].title);
  }
  goBack() {
    console.log("GO BACK");
  }
}
