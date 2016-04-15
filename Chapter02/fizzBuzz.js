// FizzBuzz
var result = "";

for (var i = 100; i >= 0; i--) {
  switch (true) {
    case (i % 3 === 0 && i % 5 === 0):
      result = "FizzBuzz";
      break;
    case (i % 5 === 0):
      result = "Buzz";
      break;
    case (i % 3 === 0):
      result = "Fizz";
      break;
    default:
      result = i;
      break;
  }
  console.log(result);
}
