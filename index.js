document.addEventListener("DOMContentLoaded", function(event) {
  document.body.style.width  = window.innerWidth;
  document.body.style.height = window.innerHeight;

  var w = Math.floor(window.innerWidth / 400);
  var h = Math.floor(window.innerHeight / 240);

  var ratio = Math.max(Math.min(w, h), 1);

  renderer = new PIXI.WebGLRenderer(400, 240);

  renderer.view.style.width  = 400*ratio;
  renderer.view.style.height = 240*ratio;
  renderer.view.style.marginLeft = (window.innerWidth  - ratio*400)/2;
  renderer.view.style.marginTop  = (window.innerHeight - ratio*240)/2;
  renderer.view.style.border = '1px solid #111';

  document.body.appendChild(renderer.view);

  var scene = new PIXI.Container();

  var bunnyTexture = PIXI.Texture.fromImage('pngs/bunny.png');
  var bunny        = new PIXI.Sprite(bunnyTexture);

  var brickTexture = PIXI.Texture.fromImage('pngs/brick.png');
  var brick        = new PIXI.Sprite(brickTexture);

  bunny.position.x = 200;
  bunny.position.y = 200;

  // bunny.scale.x = 2;
  // bunny.scale.y = 2;

  scene.addChild(bunny);

  animate();

  function animate() {
      requestAnimationFrame(animate);
      // bunny.rotation += 0.01;
      renderer.render(scene);
  }

});
