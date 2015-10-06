Sprite = Component.extend('sprite', {
  initialize: function(textureName) {
    this.sprite = this.entity.sprite = new PIXI.Sprite(Textures(textureName));
    this.entity.spriteComponent = this;

    scene.addChild(this.sprite);
  }
});
