JS1 Exercises
1) //this is a comment


/*
this is multi-line comment
*/
    var myName= "tori";
//

     

      var age = 20;
             
                if( age >= 21 ){
                   document.write("Can buy a beer! Party on, dude!");
                }
      
	1.	Take a look at the following code example and add semicolons in where they belong.

var firstName = "Jack";
var lastName = "Smith";

function greet (first, last) {
  return "Good morning, " + first + " " last
};

greet(firstName, lastName);


1.	Take a look at the examples below and identify what data type the variable result evaluates to for each.

//a:
var result = "The cat jumped over the moon";
string

// b:
var result = 55 - 27;
number

// c:
var result = 75 > 55;
boolean

// d:
var data;
var result = data;
undefined

// e:
var result = -6544.432;
number


Store the number values 50, 100, and 500 each in a separate variable. Then add the 3 variables using + and assign that sum to a fourth variable. Finally print the sum using console.log.

var firstNumber= 50;
var secondNumber= 100;
var thirdNumber = 500;
var sum = (firstNumber + secondNumber + thirdNumber);

console.log(sum);