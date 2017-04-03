function addBorder(picture) {
  var temp = [""];
  var pictureArrayLength = picture[0].length;

  for (var i = 0; i < pictureArrayLength + 2; i++) {
    temp[0] += "*";
  }
  
  for (var i = 0; i < picture.length; i++) {
    temp.push("*");
    
    for (var j = 0; j < pictureArrayLength; j++) {
      temp[i + 1] += picture[i][j];
    }
    
    temp[i + 1] += "*";
  }

  temp.push(temp[0]);
  return temp;
}