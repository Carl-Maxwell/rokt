Keyboard = {
  initialize: function() {
    addEventListener('keydown', this.keyDown.bind(this));
    addEventListener('keyup'  , this.keyUp  .bind(this));

    keyStates = {};
    callbacks = {};
  },

  state: function(key) {
    return keyStates[key];
  },

  keyDown: function(evt) {
    key = fromWhichToString(evt.which);

    change = !keyStates[key];
    keyStates[key] = true;

    if (change && callbacks[key] && callbacks[key].length) {
      callbacks[key].forEach(function(callback) {
        callback(evt);
      });

      callbacks[key] = callbacks[key].filter(function(callback) {
        return !callback.once;
      });
    }
  },

  keyUp: function(evt) {
    key = fromWhichToString(evt.which);

    keyStates[key] = false;
  },

  on:   function(key, callback) {
    if (key in callbacks) {
      callbacks[key].push(callback);
    } else {
      callbacks[key] = [callback];
    }
  },

  off:  function(key) {
    callbacks[key] = [];
  },

  once: function(key, callback) {
    callback.once = true;
    this.on(key, callback);
  }
};
