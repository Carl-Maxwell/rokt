TickingComponent = Component.extend('TickingComponent', {
  tick: function(delta) {},

  superAfterInitialize: function() {
    this.register();
  },

  register:   function() {
    TickManager.register(this);
  },

  unregister: function() {
    TickManager.unregister(this);
  }
});
