// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
// Hello Yaakov
// Good Bye John
// Good Bye Jen
// Good Bye Jason
// Hello Paul
// Hello Frank
// Hello Larry
// Hello Paula
// Hello Laura
// Good Bye Jim


var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

//***********************************************************************************
// Print names and greetings using simple for loop
//***********************************************************************************

for(let name of names) {
  var firstLetter = name.charAt(0).toLowerCase();
  if(firstLetter == "j") {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}

//***********************************************************************************
// Print names by using function along with Array.prototype.map
//***********************************************************************************
console.log("Print out using Array.prototype.map");

function printByeOrHello(name) {
  var firstLetter = name.charAt(0).toLowerCase();
  if(firstLetter == "j") {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}

names.map(name => printByeOrHello(name));

//***********************************************************************************
// (Bonus/Optional) Print two separate Arrays using Array.prototype.reduce
//***********************************************************************************
console.log("Print out using Array.prototype.reduce");

var initialValue = { hello: [], bye: [] };

// helper method to print out arrays
function printArray(anArray) {
  for(let item of anArray) {
    console.log(item);
  }  
}

greetings = names.reduce((initialValue, name) => {
  var firstLetter = name.charAt(0).toLowerCase();
  if(firstLetter == "j") {
    initialValue.bye.push(byeSpeaker.speakSimple(name));
  } else {
    initialValue.hello.push(helloSpeaker.speakSimple(name));
  }
  return initialValue;
},initialValue);

printArray(greetings.hello);
printArray(greetings.bye);


