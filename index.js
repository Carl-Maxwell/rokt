
Rokt = {
  offset: {x: 0, y: 0}
};

window.addEventListener("resize", sizeCanvas);

PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;
scene = new PIXI.Container();

function sizeCanvas() {
  document.body.style.width  = window.innerWidth;
  document.body.style.height = window.innerHeight;

  var w = Math.floor(window.innerWidth  / 400);
  var h = Math.floor(window.innerHeight / 240);

  var ratio = Math.max(Math.min(w, h), 1);

  if (typeof renderer == "undefined") {
    renderer = new PIXI.WebGLRenderer(400 * ratio, 240 * ratio);
    document.body.appendChild(renderer.view);
  } else {
    renderer.resize(400 * ratio, 240 * ratio);
  }

  renderer.view.style.marginLeft = (window.innerWidth  - ratio*400)/2;
  renderer.view.style.marginTop  = (window.innerHeight - ratio*240)/2;

  renderer.view.style.border = '1px solid #111';

  scene.scale.x = ratio;
  scene.scale.y = ratio;
}

document.addEventListener("DOMContentLoaded", function(event) {
  sizeCanvas();

  animate();
  var lastTime = (new Date()).getTime();

  function animate(time) {
    var delta = time - lastTime;
    lastTime = time;

    requestAnimationFrame(animate);

    renderer.render(scene);
  }

  //
  // setup the map
  //

  var bunny = new Bunny({position: [200 - 8, 240 / 2 - 8]});

});

Sprite = Component.extend('sprite', {
  initialize: function(textureName) {
    this.sprite = new PIXI.Sprite(Textures(textureName));

    scene.addChild(this.sprite);
  }
});

Position = Component.extend('position', {
  initialize: function(position) {
    this.x = position[0];
    this.y = position[1];
  },
  afterInitialize: function() {
    var sprite = this.parent.components.find(function(component) {
      return component.constructor.name.toLowerCase() == 'sprite';
    }).sprite;

    sprite.x = this.x;
    sprite.y = this.y;
  }
});

Bunny = Entity.extend('bunny', [
  Position,
  [Sprite, 'bunny']
]);
