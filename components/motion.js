Motion = TickingComponent.extend('Motion', {
  initialize: function() {
    this.velocity = this.entity.velocity = {x: 0, y: 0};
  },

  tick: function(delta) {
    var velocity = this.velocity;
    var entity   = this.entity;
    var position = entity.position;
    var sprite   = entity.sprite;
    var size     = entity.size;

    if (!size.width) return; //TODO this is a hack fix, proper solution is to add a loading bar to the game

    // collision detection & restitution

    var end = {
      x: position.x + velocity.x,
      y: position.y + velocity.y
    };

    // var xCollision = linetrace({x: end.x, y: position.y});

    var direction = sign(velocity.y) || 1;

    if (direction == 1) end.y += size.height;

    var yCollision = linetrace({x: position.x, y: end.y});

    if (!yCollision) {
      yCollision = linetrace({x: position.x + size.width, y: end.y});
    }

    if (yCollision) {
      entity.movementMode = WALKING;

      var difference = position.y - yCollision.position.y;

      var heights = floor(size.height);

      var y = yCollision.position.y;

      if (direction == -1)
        y += yCollision.size.height;
      else
        y -= size.height;

      position.y = y;
      sprite.y   = y;

      velocity.y = 0;
    } else {
      entity.movementMode = FALLING;

      //gravity


      if (velocity.y < GRAVITY)
        velocity.y = (velocity.y + min(GRAVITY, GRAVITY - velocity.y) + velocity.y) /2;
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
