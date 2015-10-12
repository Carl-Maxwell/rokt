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

    collisions = {};

    ['x', 'y'].forEach(function(axis) {
      var direction = sign(velocity[axis]) || 1;

      var dimension      = axis == 'x' ? 'width'  : 'height';
      var otherDimension = axis == 'x' ? 'height' : 'width';

      var otherAxis = axis == 'x' ? 'y' : 'x';

      if (direction == 1) end[axis] += size[dimension];

      var point = {};

      point[axis]      = end[axis];
      point[otherAxis] = position[otherAxis];

      var collision = linetrace(point);

      if (!collision) {
        point[axis]      = end[axis];
        point[otherAxis] = position[otherAxis] + size[otherDimension]-1;

        collision = linetrace(point);
      }

      if (collision) {
        collisions[axis + direction] = true;

        var difference = position[axis] - collision.position[axis];

        var restituted = floor(collision.position[axis]);

        if (direction == -1) {
          restituted += collision.size[dimension];

          if (axis == 'y') restituted -= 1; 
        } else {
          restituted -= size[dimension];
        }

        position[axis] = restituted;
        sprite[axis]   = restituted;

        velocity[axis] = 0;
      }
    }.bind(this));

    if (!collisions['y1']) {
      entity.movementMode = FALLING;

      //gravity
      if (velocity.y < GRAVITY)
        velocity.y = (velocity.y + min(GRAVITY, GRAVITY - velocity.y) + velocity.y) /2;
    } else {
      entity.movementMode = WALKING;
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
