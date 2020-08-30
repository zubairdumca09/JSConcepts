let person = {
    name: {
        firstName: "Mohd",
        lastName: "Imran",
        x: {
            y: 2
        }
    },
    age: 1
}


// const { name, lastName, x } = person.name; // name will be undefined
const { name: { firstName, lastName, x: { y } } } = person;
// const { y } = person.name.x


// console.log(lastName, x)

console.log(y);