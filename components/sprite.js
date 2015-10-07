Sprite = Component.extend('sprite', {
  initialize: function(textureName) {
    var sprite = this.entity.sprite = new PIXI.Sprite(Textures(textureName));

    this.sprite = sprite;
    this.entity.spriteComponent = this;

    scene.addChild(this.sprite);
  }
});
