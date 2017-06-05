function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  var output = "";
  if (this._isDivisibleBy(3, number)) {
    output += "Fizz"
  }
  if (this._isDivisibleBy(5, number)) {
    output += "Buzz"
  }
  if (this._isNotDivisibleBy(3, 5, number)) {
    output = number
  }
  return output
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}

FizzBuzz.prototype._isNotDivisibleBy = function(divisor_1, divisor_2, number) {
  return number % divisor_1 != 0 && number % divisor_2 != 0
}

for (i = 1; i <=1000; i++) {
  fizzBuzz = new FizzBuzz()
  console.log(fizzBuzz.play(i))
}