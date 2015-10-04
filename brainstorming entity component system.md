Rokt entity-component-system

```javascript
Player = Entity.extend([
  Position,
  Motion,
  [Sprite, 'bunny.png'],
  Physical,
  PlayerInput
]);

Position = Component.extend({
  initialize: function() {
    console.log('rawr');
  }
});

Tile = Entity.extend([
  Position
]);

Position = Component.extend({
  // some functions, like initialize & stuff
  // this holds the members & methods that relate to having a position
  initialize: function() {}
});

Motion = Component.extend({
  // some functions, like initialize & stuff
  // this holds the members & methods that relate to having a position
});

Demon = Entity.extend([
  Position,
  Motion,
  Physical,
  DemonBot,
  [Sprite, 'demon.png']
]);

player = new Player({position: [0, 0]});

BrickTile    = Tile.extend([Sprite, 'bricks.png'  ]);
PlatformTile = Tile.extend([Sprite, 'platform.png']);
```
