PlayerInput = TickingComponent.extend('PlayerInput', {
  initialize: function(args) {
    if (!args) args = [];

    this.maxVelocity = args[0] || 1;
    this.easingTime  = 10;
  },

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
    progress = max(0, min( 1, progress));

    // console.log(progress);

    this.entity.velocity.x = Ease(progress, "outSine") * direction;
  }
});
