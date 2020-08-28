/* currying is a technique that takes n numbers of arguments and convert
them into a single argument */

// a normal function that takes 2 argument and return the sum of.

function add(a, b) {
    return a + b;

}

// same function using currying technique 

function add(a) {
    return function (b) {
        return a + b
    }
};

console.log(add(1)(3))

// currying a function using arrow function

let add2 = a => b => a + b; // (a, b) => a + b;

console.log(add2(2)(3))