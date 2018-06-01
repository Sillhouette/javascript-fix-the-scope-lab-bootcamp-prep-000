/** animal declared as a var and set to "dog" **/
var animal = 'dog';

/**
 *  myAnimal returns the variable animal
 */
function myAnimal() {
  return animal;
}

/**
 *  yourAnimal changes the local version of animal to "cat" then returns it, leaving the global animal alone
 **/
function yourAnimal() {
  return animal = 'cat';
}

/**
* add2 declares two and sets it to 2 then returns two plus the argument n
**/
function add2(n) {
  const two = 2;
  return n + two;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

var theFunk = funkyFunction()()
