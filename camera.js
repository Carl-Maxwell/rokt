Camera = {
  initialize: function() {
    this.x = 0;
    this.y = 0;
    this.width  = WIDTH;
    this.height = HEIGHT;
  },

  tick: function(player) {
    this.x = player.position.x - WIDTH/2;
    this.y = player.position.y - HEIGHT/2;
  }
};
