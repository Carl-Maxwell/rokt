Entity    = function() { this.superInitialize.apply(this, arguments); };
Component = function() { this.superInitialize.apply(this, arguments); this.initialize.apply(this, arguments); };
System    = function() { this.superInitialize.apply(this, arguments); this.initialize.apply(this, arguments); };

Component.extend = System.extend = extend;

//
// Entity
//

_.extend(Entity, {
  extend: function(components) {
    var extension = extend.apply(this);
    extension.components = components;
    return extension;
  }
});

_.extend(Entity.prototype, {
  superInitialize: function() {
    var incomingComponents = this.constructor.components;
    this.components = [];

    incomingComponents.forEach(function(componentClass) {
      var args = undefined;

      if (Array.isArray(componentClass)) {
        args = Array.isArray(componentClass[1]) ? componentClass[1] : [componentClass[1]];
        componentClass = componentClass[0];
      }

      this.components.push(new componentClass(args));
    }.bind(this));
  },
  initialize: function() {}
});

//
// Component
//

_.extend(Component.prototype, {
  superInitialize: function() {

  },
  initialize: function() {}
});

//
// System
//

_.extend(System.prototype, {
  superInitialize: function() {},
  initialize: function() {}
});
