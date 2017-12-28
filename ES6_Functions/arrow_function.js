/**
 * Arrow Function
 * ---------------
 * Functions in ES6 have changed a bit.
 * There are two parts of syntax:
 * 1. var newOne = ()
 * 2. => {}
 * The first part is just declaring a variable and assigning the function () to it.
 * It just says the variable is actually function.
 * Second part is declaring the body part of the function. The arrow part with curly
 * braces defines the body part.
 */
// Old Syntax
function oldOne() {
    console.log("Hello World...!");
}

// New Syntax
var newOne = () => {
    console.log("Hello World...!");
}

// function with parameters
let NewOneWithParameters = (a, b) => {
    console.log(a + b); // 30
}
NewOneWithParameters(10, 20);

/**
 * Default Parameters
 * -------------------
 * Default parameters are parameters which are given by default while declaring a function.
 * But it's value can be changed when calling the function.
 */
let Func = (a, b = 10) => {
    return a + b;
}
Func(20);   // 20 + 10 = 30
// In above, we are passing only one parameter. The function makes use of default parameter
// and executes the function.

Func(20, 50);   // 20 + 50 = 70
// Function takes two parameters and second parameter replaces default parameter.

let NotWorkingFunction = (a = 10, b) => {
    return a + b;
}
NotWorkingFunction(20); // NAN. Not gonna work.
// When calling function with parameters they get assigned in the order, the first value gets
// assigned to first parameter and second value gets assign to second parameter. Here, the 
// value 20 gets assigned to parameter 'a' and 'b' is not having any value.

NotWorkingFunction(20, 30); // 50