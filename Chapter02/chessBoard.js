// Chess Board
var result = "";
var size = 8;

for (var i = 0; i < size; i++) {
  for (var x = 0; x < size; x++) {
    if ((x + i) % 2 === 0)
      result += "#";
    else
      result += " ";
  }
  result += "\n";
}

console.log(result);
