// const person = {
//     name: "Imran",
//     getName: () => {
//         return function () {
//             console.log(this.name)
//         }
//     }
// }

// let person1 = person.getName()()

// console.log(person1)


function myFunction() {
    let arr = [1, 2, 3]
    arr.reduce(function (total, number) { console.log(this) })
}

myFunction()


