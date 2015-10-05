Entity    = function() { this.superInitialize.apply(this, arguments); };
Component = function() { this.superInitialize.apply(this, arguments); this.initialize.apply(this, [].slice.call(arguments, 1)); };
System    = function() { this.superInitialize.apply(this, arguments); this.initialize.apply(this, arguments); };

Component.extend = System.extend = extend;

//
// Entity
//

_.extend(Entity, {
  extend: function(name, components) {
    var extension = extend.apply(this, [name]);
    extension.components = components;
    return extension;
  }
});

_.extend(Entity.prototype, {
  superInitialize: function(options) {
    var incomingComponents = this.constructor.components;
    this.components = [];

    incomingComponents.forEach(function(componentClass) {
      var args = undefined;

      if (Array.isArray(componentClass)) {
        args = Array.isArray(componentClass[1]) ? componentClass[1] : [componentClass[1]];
        componentClass = componentClass[0];
      }

      var name = componentClass.name.toLowerCase();
      if (name in options) {
        args = options[name];
      }

      this.components.push(new componentClass(this, args));
    }.bind(this));

    this.components.forEach(function(component) {
      if (component.afterInitialize) component.afterInitialize();
    });
  },
  initialize: function() {}
});

//
// Component
//

_.extend(Component.prototype, {
  superInitialize: function(parent) {
    this.parent = parent;
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
