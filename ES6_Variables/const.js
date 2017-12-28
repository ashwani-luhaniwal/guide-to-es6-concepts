/**
 * const
 * ------
 * const is used to assign a constant value to variable. And the value cannot be
 * changed. It's fixed.
 */
const a = 50;
a = 60; // shows error. You cannot change the value of const.

const b = "Constant variable";
b = "Assigning new value";  // shows error

const LANGUAGES = ['JS', 'Ruby', 'Python', 'Go'];
LANGUAGES = 'JavaScript';   // shows error
LANGUAGES.push('Java'); // Works fine
console.log(LANGUAGES);
/**
 * Whenever you define a const variable, JavaScript references the address of the value to
 * the variable. In above, variable 'LANGUAGES' actually references to the memory allocated
 * to the array. So you cannot change the variable to reference some other memory location
 * later. Throughout the program it only references to array.
 */