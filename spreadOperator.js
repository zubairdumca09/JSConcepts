function objectSpreading() {
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
    return { name: { ...person.name, x: 10 } }
}
function arraySpreading() {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];

    const arr3 = [[...arr1], arr2]
    const arr4 = [...arr1, arr2]

    //[[1,2,3],[2,3,4]]
    console.log(arr3)
    //[ 1, 2, 3, [ 2, 3, 4 ] ]
    console.log(arr4)

}

const errors = {
    contact: {
        regEx: /(^[0-9]{10}$)|(^[0][0-9]{10}$)/,
        error: false,
        message:
            'Field must contain 10 digit numeric data or 11 digit if starts with zero'
    },
    age: {
        regEx: /(^[0-9]{10}$)|(^[0][0-9]{10}$)/,
        error: false,
        message:
            'Field must contain 10 digit numeric data or 11 digit if starts with zero'
    },
    name: {
        regEx: /(^[0-9]{10}$)|(^[0][0-9]{10}$)/,
        error: false,
        message:
            'Field must contain 10 digit numeric data or 11 digit if starts with zero'
    },
}
//we have to change error key in age
let changedErr = { ...errors, age: { ...errors.age, error: true } }
console.log(changedErr)












