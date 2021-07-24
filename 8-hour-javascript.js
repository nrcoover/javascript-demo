console.log('hello');

// alert('Hello, this is me!');

// How to write a comment inline.

// var age = prompt('What is your age?');



// VARIABLES //
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

// var age = prompt('What is your age?');

/* You can use Javascript to change things in your html page; you can do this with the "getElemenById" function of document: */

// document.getElementById('someText').innerHTML = age;



// NUMBERS IN JAVASCRIPT //
var num1 = 10;

// Increment num1 by 1
num1++;
console.log(num1++);

// Decrement num1 by 1
num1--;
console.log(num1--);

// Divide /, multiply *, remainder %
console.log(num1 % 6);

// Increment/decrement by any number you want
num1 += 10;
console.log(num1);



// FUNCTIONS IN JAVASCRIPT //
// Step 1. Create function.
function fun() {
    console.log('this is a function');
}

// Step 2. Call function.
fun();

                        /* 
Let's create a function that takes in a name and says hello followed by your name.

For Example:

Name: "Me"
Return" Hello Me"
                        */

function greeting(name) {
    console.log('Hello, ' + name);
}

// var yourName = prompt('Please enter your name.');
// greeting(yourName);

// Arguments in functions:

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log("The result of sumNumbers is: " + result);
}

sumNumbers(12, 14);

/* Because we haven't enforced that the parameters above be numbers, we can also pass two string into the function, which will effectively concatenate the two strings together: */

sumNumbers("Hello ", "Me!")



// WHILE LOOPS //
var num = 0;

while (num < 3) {
    num += 1;
    console.log(num);
}

// FOR LOOPS //

for (let i = 0; i < 3; i++) {
    console.log(i)
}



// DATA TYPES //
let yourAge = 18;                               // number
let yourName = 'Bob';                           // string
let name = {first: 'Jane', last: 'Doe'};        // object
let truth = false;                              // booleon
let groceries = ['apple', 'banana', 'oranges']; // array
let random;                                     // undefined
let nothing = null;                             // value null



// STRINGS IN JAVASCRIPT (COMMON METHODS //
let fruit = 'bananas';
let moreFruits = 'banana\napple';               // new line operator: \n 
console.log(moreFruits);

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));                 // creates a new string from the index locations specificed by the two parameters; the first parameter is inclusive, the second is exclusive.
console.log(fruit.replace('ban', '123'))        // finds 1st parameter, and replaces contents with that of the 2nd parameter
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());

console.log(fruit.charAt(2));               // returns the character from the specified index location.
console.log(fruit[2]);                      // effectively performs the same actions as the above function.
console.log(fruit.split(','));               // splits a string into a new array, separating the string at every instance of the specified parameter; this exapmle splits the string at every instance of a comma, which is none in this case.
console.log(fruit.split(''));               // splits by character; creates a new array, separating the string into new elements at every instance of a character; in Python, this would default to splitting at every instance of a comma, but no so in Javascript - it will split by exactly what you specify.



// ARRAYS //
let fruits1 = ['banana', 'apple', 'orange', 'pineapples'];
// declare the array as a new variable with bracket notation.
let fruits2 = new Array('banana', 'apple', 'organe', 'pineapples');
// declare an array using the new constructor method for array "new Array()".

console.log(fruits1[1]); // accessing values in an array by their index.

fruits1[0] = 'pear';  // redifining an element in an array.

for (let i = 0; i < fruits1.length; i++) {
    console.log(fruits1[i]);
}

// array common methods
console.log('to string', fruits1.toString());
console.log(fruits1.join(' - '));
console.log(fruits1, fruits1.pop(), fruits1);  // the .pop method removes the last item from the list.


        console.log(fruits1, fruits1.push('blackberries'), fruits1);  // appends an array by adding the input of .push onto the end of the array.
        console.log(fruits1[4]);

        fruits1[4] = 'new fruit';
        
        // You can also accomplish the same effect as .push (or the above "fruits1[4]") by doing the following:

        fruits1[fruits1.length] = 'newer fruit'
        // the fruits1.length methods ensures that you are always selecting a new element location because index's always start at 0; if the index is 8 items long, the last in the index would be index "7", therefore, by adding a new item at the location fruits.length (which is 8), you place the new item at the end of the current array, lengthening the array by 1. 

        console.log(fruits1);

console.log(fruits1.shift()); // remove first element from an array.
console.log(fruits1.unshift()); // adds an item at the first element of an array.

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits1.concat(vegetables);  // combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));  //creates a new array from the original, including all item from parameter 1 through to parameter 2, while excluding the item located at parameter 2.
console.log(allGroceries.reverse());

        console.log(allGroceries.sort()); // sorts an array of strings by alphabetical order.

        let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
        console.log(someNumbers.sort());  // sorts numbers by the first integer of each item's number.
        console.log(someNumbers.sort(function(a, b) {return a-b})); // sort numbers in ascending order;
        console.log(someNumbers.sort(function(a, b) {return b-a})); // sort numbers in descending order;

// Note: commonly with arrays, you write loops and add things to arrays.

        /*
        let lemptyArray = new Array();
        for (let j = 0; num < 10; j++) {
            lemptyArray.push(j);
        }

        console.log(lemptyArray);
        */

    // NOTE: THE ABOVE CODE WILL RESULT IN THE FOLLOWING MESSAGE ON GOOGLE CRHOM: "Aw, Snap! Something went wrong while displaying this webpage. Error code: Out of memory." In devtools, the console will give the following error: "Debugging connection was closed. Reason: Render process gone. Reconnect when ready by reopening DevTools."

    // The reason for this error was a mystery for a bit until I came across the following link: https://stackoverflow.com/questions/46855911/getting-error-debugging-connection-was-closed-reason-render-process-gone / 
    
        /*
                I had this error and it appeared random, but I got to the root of the cause: a never-ending for loop.

            Given the non-specificity of the error in Google Chrome, I had to write a bunch of console.log("...") notes to zero in on the issue and found that I (poorly) wrote a function that had both non-integer increments and also the potential to never reach the end of the loop.

            It looked something like this:

            var myArray = [];
            for (i = 0; i <= total; i += total / 100) {
            myArray.push(i);
            };
            Due to rounding issues, i was always <= total. I updated the code to instead use:

            var myArray = [];
            for (var i = 0; i <= 100; i++) {
            myArray.push(total * (i / 100));
            };
            And haven't had the problem since.

            And to the OP, while I haven't dived into your code too deeply, it could be that one of your for loops that decreases the iterator (i) could be creating the same never-ending loop. I'm referring specifically to this part of your code:

            Array.prototype.remByVal = function(val) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] === val) {
                    this.splice(i, 1);
                    i--;  // <-- This part here could be an issue
                }
            }
            return this;
            }

            answered Nov 20 '18 at 15:44 by elPastor
        */

let lemptyArray = new Array();
for (let i = 0; i < 10; i++) {
    lemptyArray.push(i);
}

console.log(lemptyArray);



// OBJECTS IN JAVASCRIPT; 'dictionaries' in Python

let student = {first: 'Peter', 
    last: 'Ryans', 
    age: 25, 
    height: 170,
    studentInfo: function (){
        return this.first + '\n'
         + this.last + '\n'
         + this.age;
    }
};

console.log(student.first);
// Note: console.log(student[first]); used to be able to accomplish teh same thing, but that method is now depricated.

console.log(student.last);

student.first = 'notPeter'; // this is how you can change a value within an array.
student.age++;
console.log(student.age);
console.log(student.studentInfo());



// CONSITIONALS, CONTORL FLOWS (IF ELSE)
// 18-35 IS MY TARGET DEMOGRAPHIC
// Booleon operators:
    // && AND
    // || OR

// let age = prompt(); WILL NOT WORK
// only "var" will work with "prompt"

    /*
    var age = prompt('what is your age?');
    
    if ( (age >= 18) && (age <= 35) ) {
        status = 'target demo';
        console.log(status);
    } else {
        status = 'not my target';
        console.log(status);
    }
    */

// SWITCH STATEMENTS
// if everyday was a weekday
// how to differentiate between weekday vs. weekend
// Day 0 --> 'Sunday'
// Day 4 --> 'Thursday' --> weekday
// Day 6 --> 'Saturday' --> weekend

var dayOfWeek = new Array();
dayOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',];


function daySwitcher (dayOfWeek) {
    switch (dayOfWeek) {
        case 0:
            text = 'weekend';
            break;
        case 5:
            text = 'weekend';
            break;
        case 6:
            text = 'weekend';
            break;
        default:
            text = 'weekday';
    }
    console.log(text);
}

daySwitcher(dayOfWeek.indexOf('Sunday'));
daySwitcher(dayOfWeek.indexOf('Monday'));
daySwitcher(dayOfWeek.indexOf('Tuesday'));
daySwitcher(dayOfWeek.indexOf('Wednesday'));
daySwitcher(dayOfWeek.indexOf('Thursday'));
daySwitcher(dayOfWeek.indexOf('Friday'));
daySwitcher(dayOfWeek.indexOf('Saturday'));