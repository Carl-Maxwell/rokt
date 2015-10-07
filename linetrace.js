// TODO name more appropriately

function linetrace(end) {
  end.x /= 16;
  end.y /= 16;

  // end.normalize()

  // var length = sqrt((end.x * end.x) + (end.y * end.y)) ;
  //
  // end.x /= length;
  // end.y /= length;
  //
  // end.x = floor(end.x);
  // end.y = floor(end.y);

  // actually do stuff

  // console.log(floor(end.x), floor(end.y));

  return Tiles.map[floor(end.x)][floor(end.y)];
}
