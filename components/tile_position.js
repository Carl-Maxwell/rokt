TilePosition = Component.extend('TilePosition', {
  initialize: function(position) {
    var x = this.x = floor(position[0]/16)*16;
    var y = this.y = floor(position[1]/16)*16;

    this.entity.position = this;

    Tiles.map[floor(x/16)][floor(y/16)] = this.entity;

    this.velocity = this.entity.velocity = {x: 0, y: 0};
  },

  afterInitialize: function() {
    var sprite = this.entity.sprite;

    sprite.x = this.x;
    sprite.y = this.y;
  }
});
