1) It allows the HTML to load faster.

2) To help keep code organized and allow other developers to easily understand your thought process on certain lines.

3) undefined, null, boolean, string and number

4) c. it depends

---

1)
//This statement instructs Javascript to write "Hello World" to the HTML itself.
function writeHelloWorld (a) {
  document.write("Hello World");
};

//This statement declares the value of the variable, toast
var toast = "buttered";

2)
var firstName = "Jack";
var lastName = "Smith";

function greet (first, last) {
  return "Good morning, " + first + " " last
};

greet(firstName, lastName);


3)
// a: string
var result = "The cat jumped over the moon";

// b: number
var result = 55 - 27;

// c: boolean
var result = 75 > 55;

// d: null
var data;
var result = data;

// e: number
var result = -6544.432;

4)
// here's the first variable assignment you'll need
// you'll need to to assign the other 2 numbers yourself
var firstNumber = 50;
var secondNumber = 100;
var thirdNumber = 500;
// add them together using + and store them in the sum variable
var sum = firstNumber + secondNumber + thirdNumber;

// finally, print the sum
console.log(sum);
//650
