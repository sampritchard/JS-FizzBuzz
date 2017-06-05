function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  var output = "";
  if (number % 3 == 0) {
    output += "Fizz"
  }
  if (number % 5 == 0) {
    output += "Buzz"
  }
  if (number % 3 != 0 && number % 5 != 0) {
    output = number
  }
  return output
}

for (i = 1; i <=1000; i++) {
  fizzBuzz = new FizzBuzz()
  console.log(fizzBuzz.play(i))
}