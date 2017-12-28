/**
 * Maps
 * -----
 * Map holds key-value pairs. It's similar to an array but we can define our own
 * index. And indexes are unique in maps.
 */
let NewMap = new Map();
NewMap.set('name', 'Ashwani');
NewMap.set('id', 1234);
NewMap.set('interest', ['js', 'ruby', 'python']);

NewMap.get('name'); // Ashwani
NewMap.get('id');   // 1234
NewMap.get('interest'); // ['js', 'ruby', 'python']

/**
 * All indexes are unique in Maps. And we can use any value as key or value.
 */
let map = new Map();
map.set('name', 'John');
map.set('name', 'Ashwani');
map.set(1, 'number one');
map.set(NaN, 'No value');

map.get('name') // Ashwani. Here John is replaced by Ashwani
map.get(1); // number one
map.get(NaN);   // No value

/**
 * Other methods in Map
 */
let map = new Map();
map.set('name', 'Ashwani');
map.set('id', 10);

map.size;   // 2. Returns the size of map
map.keys(); // outputs only the keys
map.values();   // outputs only the values

for (let key of map.keys()) {
    console.log(key);
}
// Output: name id

// for..of loop outputs the key-value pair in array
var map = new Map();
for (let element of map) {
    console.log(element);
}
// Output: ['name', 'Ashwani'] ['id', 10]

var map = new Map();
for (let [key, value] of map) {
    console.log(key + " - " + value);
}
// Output: name - John and id - 10