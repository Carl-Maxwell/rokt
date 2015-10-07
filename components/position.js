Position = Component.extend('position', {
  initialize: function(position) {
    this.x = position[0];
    this.y = position[1];

    this.entity.position = this;
  },

  afterInitialize: function() {
    var sprite = this.entity.sprite;

    sprite.x = this.x;
    sprite.y = this.y;
  }
});
