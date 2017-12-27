/**
 * -----------
 * Type Syntax
 * -----------
 * ES6 introduces variable declaration syntax: -
 * - Using let
 * - Using const
 */

// Declaration using var keyword
var name = "Tom";
console.log("The value in the variable is: " + name);

/**
 * ------------------------------
 * JavaScript and Dynamic Typing
 * ------------------------------
 * JavaScript is an un-typed language. This means JavaScript variable can hold a value of
 * any data type. You don't have to tell JavaScript during variable declaration what type
 * of value the variable will hold. The value type of variable can change during the
 * execution of program and JavaScript takes care of it automatically. This feature is
 * termed as "dynamic typing".
 */

/**
 * --------------------------
 * JavaScript Variable Scope
 * --------------------------
 * JavaScript defines only two scopes: -
 * - Global Scope: A variable with global scope can be accessed from within any part of 
 *   JavaScript code.
 * - Local Scope: A variable with local scope can be accessed from within a function 
 *   where it is declared.
 */
var num = 10;
function test() {
    var num = 100;
    console.log("Value of num in test() " + num);
}
console.log("Value of num outside test() " + num);
test();

/**
 * --------------------
 * Let and Block Scope
 * --------------------
 * The block scope restricts a variable's access to block in which it is declared. The
 * "var" keyword assigns a function scope to variable. Unlike, var keyword, the "let"
 * keyword allows script to restrict access to the variable to nearest enclosing block.
 */
"use strict";
function test() {
    var num = 100;
    console.log("Value of num in test() " + num); {
        console.log("Inner Block begins");
        let num = 200;
        console.log("Value of num: " + num);
    }
}

/**
 * -----
 * const
 * -----
 * The "const" declaration creates a read-only reference to value. It doesn't mean the
 * value it holds is immutable, just that the variable identifier cannot be reassigned.
 * Constants are block-scoped, much like variables defined using let statement. The 
 * value of constant cannot change through re-assignment and it can't be re-declared.
 * Rules of const variable
 * - Constants cannot be reassigned a value.
 * - A constant cannot be re-declared.
 * - A constant requires an initializer. This means constants must be initialized 
 *   during its declaration.
 * - The value assigned to "const" variable is immutable.
 */
/*
    const x = 10;
    x = 12; // will result in an error!!!
*/

/**
 * --------------------------
 * ES6 and Variable Hoisting
 * --------------------------
 * The scope of variable declared with var is its current execution context, which is
 * either the enclosing function or, for variables declared outside any function, global.
 * Variable hoisting allows the use of variable in JavaScript program, even before it 
 * is declared.
 */
main();
var main = function() {
    for (var x = 0; x < 5; x++) {
        console.log(x);
    }
    console.log("x can be accessed outside the block scope x value is: " + x);
    console.log("x is hoisted to the function scope");
}

/**
 * the concept of hoisting applies to variable declaration but not variable initialization.
 * It is recommended to always declare variables at the top of their scope (the top of
 * global code and top of function code), to enable code resolve the variable's scope.
 */