Motion = TickingComponent.extend('Motion', {
  tick: function(delta) {
    this.entity.sprite.x += this.entity.velocity.x;
  }
});
