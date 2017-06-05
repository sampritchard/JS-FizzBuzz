describe("FizzBuzz", function(){
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz()
  })
  it("returns Fizz", function(){
    var number = 3;
    expect(fizzBuzz.play(number)).toEqual('Fizz');
  });
  it("returns Buzz", function(){
    var number = 5;
    expect(fizzBuzz.play(number)).toEqual('Buzz');
  });
  it("returns FizzBuzz", function(){
    var number = 15;
    expect(fizzBuzz.play(number)).toEqual('FizzBuzz')
  })
  it("returns the number if its not divisible by 3 or 5", function(){
    var number = 8;
    expect(fizzBuzz.play(number)).toEqual(number)
  })
});
