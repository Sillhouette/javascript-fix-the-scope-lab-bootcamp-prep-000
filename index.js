/** animal declared as a var and set to "dog" **/
var animal = 'dog'

/**
 *  myAnimal returns the variable animal
 */
function myAnimal() {
  return animal
}

/**
 *  yourAnimal changes the local version of animal and sets it to "cat" then returns it
 **/
function yourAnimal() {
  //animal = 'cat'
  return animal = 'cat';
}

function add2(n) {
  const two = 2

  return n + two
  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk = funkyFunction()()
