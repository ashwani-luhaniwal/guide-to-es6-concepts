/**
 * Getters and Setters
 * --------------------
 * Getters abd setters are introduced in ES6. It will come in handy if you are using classes
 * in JS.
 */
// Example without getters and setters:
class People {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
let person = new People("Ashwani Luhaniwal");
console.log(person.getName());
person.setName("Dany");
console.log(person.getName());
// Output: Ashwani Luhaniwal and Dany

// Example with getters and setters
class People {
    constructor(name) {
        this.name = name;
    }
    // 'get' property used to get the value of variable
    get Name() {
        return this.name;
    }
    // 'set' property used to set the value to variable
    set Name(name) {
        this.name = name;
    }
}
let person = new People("John");
console.log(person.Name);   // calling function doesn't require parenthesis.
person.Name = "Dany";
console.log(person.Name);
// Output: John Dany
