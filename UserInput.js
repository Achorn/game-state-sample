import EventEmitter from "./utils/EventEmiter.js";

export default class UserInput extends EventEmitter {
  constructor() {
    super();
    this.commands = {};
    document.addEventListener("keydown", (e) => {
      this.commands[e.key.toLowerCase()] = true;
      console.log(this.commands);
      // this.trigger("keyDown");
      // create observer pattern to notify active menus!!
    });
    document.addEventListener("keyup", (e) => {
      delete this.commands[e.key.toLowerCase()];
    });
  }
}
