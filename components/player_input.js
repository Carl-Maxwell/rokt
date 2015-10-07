PlayerInput = TickingComponent.extend('PlayerInput', {
  initialize: function(args) {
    if (!args) args = [];

    this.maxVelocity = args[0] || 2;
    this.easingTime  = 10;

    Keyboard.on('z'         , this.jump.bind(this));
    Keyboard.on('z:released', this.endJump.bind(this));
  },

  jump: function(evt) {
    if (this.entity.movementMode == WALKING) {
      this.jumping = now();
    }
  },

  endJump: function(evt) {
    this.jumping = false;
  },

  jumpDuration: 0.2,

  tick: function(delta) {
    direction = 0;

    if (Keyboard.state('left'))  direction -= 1;
    if (Keyboard.state('right')) direction += 1;

    var progress = delta / this.easingTime;

    progress = round(progress*1000)/1000;

    // if (direction === 0) {
    //   progress *= -1;
    //   direction = 1;
    // }

    progress = (abs(this.entity.velocity.x) / this.maxVelocity) + progress;
    progress = max(0, min(1, progress));

    this.entity.velocity.x = Ease(progress, "outSine") * direction * this.maxVelocity;

    if (this.jumping && this.jumping + this.jumpDuration > now())
      this.entity.velocity.y -= 2.30;
  }
});
