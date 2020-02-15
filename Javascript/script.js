// Writing into an HTML element, using
innerHTML()
document.getElementById("demo").innerHTML = "Hello JavaScript";
document.getElementById('demo').innerHTML = 'Hello JavaScript';
//     Writing into the HTML output using
document.write()
document.write(5 + 6);
//     Writing into an alert box, using
window.alert()
window.alert(5 + 6);
//     Writing into the browser console, using
console.log()
// Changing the style of an HTML element, is a variant of changing an HTML attribute:
document.getElementById("demo").style.fontSize = "35px";
//Hiding HTML elements can be done by changing the display style:
document.getElementById("demo").style.display = "none";
//Showing hidden HTML elements can also be done by changing the display style:
document.getElementById("demo").style.display = "block";
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
var a, b, c;
a = 5; b = 6; c = a + b;

var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object

var x = 16 + 4 + "Volvo"; //20Volvo
var x = "Volvo" + 16 + 4;    //Volvo164

var answer1 = "It's alright";             // Single quote inside double quotes
var answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
var answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes

var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123
var cars = ["Saab", "Volvo", "BMW"];
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
typeof "John Doe"     // Returns "string"
typeof (3 + 4)        // Returns "number"
var car;    // Value is undefined, type is undefined
car = undefined;    // Value is undefined, type is undefined

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
person.lastName;

var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       // Declares z as a Boolean object

// Event	Description
// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
var pos = str.lastIndexOf("locate");

var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools"); //By default, the replace() method replaces only the first match

str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools"); //To replace all matches, use a regular expression with a /g flag (global match)

var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!"); //concat() joins two or more strings

var str = "       Hello World!        ";
alert(str.trim()); //The trim() method removes whitespace from both sides of a string

var str = "HELLO WORLD";
str.charAt(0);            // returns H
str.charCodeAt(0);         // returns 72
str[0];                   // returns H

//A string can be converted to an array with the split() method
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe
txt.split("");           // Split in characters

var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000

var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600