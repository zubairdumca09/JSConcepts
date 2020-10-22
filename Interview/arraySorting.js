let arr = [1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1]

let arrLength = arr.length

let zeroCount = 0

for (let i = 0; i < arrLength; i++) {
    if (arr[i] == 0) {
        zeroCount = zeroCount + 1
    }
}

// console.log(zeroCount)

let sortedArray = []

for (let i = 0; i < arr.length; i++) {
    if (i < zeroCount) {
        sortedArray.push(0)
    } else{
        sortedArray.push(1)
    }
}

console.log(sortedArray)