TilePosition = Component.extend('TilePosition', {
  initialize: function(position) {
    var x = this.x = position[0];
    var y = this.y = position[1];

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
