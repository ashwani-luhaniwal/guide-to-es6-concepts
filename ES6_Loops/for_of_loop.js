/**
 * for..of
 * --------
 * for..of is very similar to for..in with slight modification.
 * for..of iterates through list of elements like Array and returns the elements
 * (not their index) one by one.
 */
let arr = [2, 3, 4, 1];
for (let value of arr) {
    console.log(value);
}
// Output: 2 3 4 1

let string = "JavaScript";
for (let char of string) {
    console.log(char);
}
// Output: J a v a S c r i p t