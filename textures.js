function Textures(name) {
  var textures = Textures.textures;

  if (name in textures) {
    return textures[name];
  } else {
    return textures[name] = PIXI.Texture.fromImage('pngs/' + name + '.png');
  }
};

Textures.textures = {};
