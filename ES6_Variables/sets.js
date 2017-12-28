/**
 * sets
 * -----
 * Sets are used to store unique values of any type.
 */
var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('a');  // We are adding dupplicate value
for (let element of sets) {
    console.log(element);
}
// Output: a b

/**
 * No duplicate values are displayed. Unique values are displayed.
 * sets are also iterable objects. We have to iterate through the elements to display it.
 */
var sets = new Set([1, 5, 6, 8, 9]);
sets.size;  // returns 5. Size of the sets
sets.has(1);    // returns true.
sets.has(10);   // returns false.
// "has" method returns a boolean value based on whether given element is present in set or not.