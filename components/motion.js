Motion = TickingComponent.extend('Motion', {
  initialize: function() {
    this.velocity = this.entity.velocity = {x: 0, y: 0};
  },

  tick: function(delta) {
    var velocity = this.velocity;
    var position = this.entity.position;
    var sprite   = this.entity.sprite;
    var size     = this.entity.size;

    //gravity


    // collision detection & restitution

    var end = {
      x: position.x + velocity.x + size.width,
      y: position.y + velocity.y + size.height
    };

    // var xCollision = linetrace({}, {x: end.x, y: position.y});
    var yCollision = linetrace({}, {x: position.x, y: end.y});

    if (!yCollision) {
      yCollision = linetrace({}, {x: position.x + size.width, y: end.y});
    }

    if (yCollision) {
      var difference = position.y - yCollision.position.y;

      var heights = floor(size.height);

      position.y = yCollision.position.y - size.height;
      sprite.y   = yCollision.position.y - size.height;

      velocity.y = 0;
    } else {
      if (velocity.y < 1) velocity.y += min(1, 1 - velocity.y);
    }

    //
    // update position with velocity
    //

    position.x += velocity.x;
    sprite.x   += velocity.x;

    position.y += velocity.y;
    sprite.y   += velocity.y;
  }
});
