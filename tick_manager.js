TickManager = {
  components: {},

  tick: function(delta) {
    var func = function(component) {
      component.tick(delta);
    };
    
    for (var name in this.components) {
      this.components[name].forEach(func);
    }
  },

  register: function(component) {
    if (!(component.name in this.components)) {
      this.components[component.name] = [];
    }

    this.components[component.name].push(component);
  },

  unregister: function(component) {
    var i = this.components[component.name].indexOf(component);

    this.components[component.name].splice(i, 1);
  }
};
