Size = Component.extend("Size", {
  initialize: function(size) {
    if (size && size.length) {
      this.width  = size[0];
      this.height = size[1];
    }

    this.entity.size = this;
  },

  afterInitialize: function() {
    var sprite = this.entity.sprite;

    if (sprite.texture.baseTexture.hasLoaded) {
      this.width  = sprite.width;
      this.height = sprite.height;
    } else {
      sprite.texture.on('update', function() {
        this.width  = sprite.width;
        this.height = sprite.height;
      }.bind(this));
    }

    // if (sprite && !this.width)  this.width  = sprite.width;
    // if (sprite && !this.height) this.height = sprite.height;
  }
});
