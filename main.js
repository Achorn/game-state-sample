import Game from "./Game.js";

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const game = new Game(canvas, ctx);

  let lastTime = 0;
  function tick(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    game.update(deltaTime);
    game.draw();

    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // game.update(deltaTime);
    // game.draw();
    window.requestAnimationFrame(() => tick());
  }
  tick(lastTime);
});
