/**
 * let
 * ----
 * let is similar to var but let has scope. let is only accessible in the block level it
 * is defined.
 */
if (true) {
    let a = 40;
    console.log(a); // 40
}
console.log(a); // undefined
// variable 'a' is not accessible outside function.

let a = 50;
let b = 100;
if (true) {
    let a = 60;
    var c = 10;
    console.log(a/c);   // 6
    console.log(b/c);   // 10
}
console.log(c);         // 10
console.log(a);         // 50