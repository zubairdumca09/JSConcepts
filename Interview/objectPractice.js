let y = 10;

let x = [
    {
        name: "Imran",
    },

    {
        name: "Zubair",

    },


    {
        name: "Zeeshan",

    },

    {
        name: "Rahul",

    }

]

// let arr = x.map((elem) => {
//     return {...elem, address: "myaddress"}
// })

// console.log(arr)

// let arr1 = x.map((e) => {
//     return { ...e, age: e.age + 1 }
// })

// console.log(arr1)

let arr2 = x.map((e, index) => {
    return { ...e, age: y + index }

})

console.log(arr2)