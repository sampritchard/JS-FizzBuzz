function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  var output = "";
  if (number == 0) {
    return "Please enter a number other than 0";
  }
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

var formFizzBuzz = document.getElementById("form");

formFizzBuzz.onsubmit = function(evt){
  evt.preventDefault();
  var fizzBuzz = new FizzBuzz()
  var number = document.getElementById("number").value;
  if (number.match(/\d+/g)) {
    document.getElementById("output").innerHTML = fizzBuzz.play(number);
  } else {
    document.getElementById("output").innerHTML = "Please enter a number";
  }
}