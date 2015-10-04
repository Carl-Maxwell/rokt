document.addEventListener("DOMContentLoaded", function(event) {
  document.body.style.width  = window.innerWidth;
  document.body.style.height = window.innerHeight;

  var w = Math.floor(window.innerWidth  / 400);
  var h = Math.floor(window.innerHeight / 240);

  var ratio = Math.max(Math.min(w, h), 1);

  renderer = new PIXI.WebGLRenderer(400 * ratio, 240 * ratio);

  PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

  renderer.view.style.marginLeft = (window.innerWidth  - ratio*400)/2;
  renderer.view.style.marginTop  = (window.innerHeight - ratio*240)/2;

  renderer.view.style.border = '1px solid #111';

  document.body.appendChild(renderer.view);

  scene = new PIXI.Container();
  scene.scale.x = ratio;
  scene.scale.y = ratio;

  var bunnyTexture = PIXI.Texture.fromImage('pngs/bunny.png');
  var bunny        = new PIXI.Sprite(bunnyTexture);

  var brickTexture = PIXI.Texture.fromImage('pngs/brick.png');
  var brick        = new PIXI.Sprite(brickTexture);

  bunny.position.x = 200 - 8;
  bunny.position.y = 240 / 2 - 8;

  brick.x = 0;
  brick.y = 240 - 16;

  scene.addChild(bunny);
  scene.addChild(brick);

  animate();

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene);
  }
});
