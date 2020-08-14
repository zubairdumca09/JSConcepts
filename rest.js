const person = {
    name: "per",
    age: 12,
    address: "city"
}

const { address, ...rest } = person

console.log(rest)