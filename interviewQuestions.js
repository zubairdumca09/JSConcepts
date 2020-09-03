// // sum(1)(2)(3)(4)() --output 10

// let sum = function (a){
//     return function (b){
//         return sum(a+b)
//     }
// }


// let n = 4
// function name(...args){
// if(args.length !== 1){
// return args.reduce((a,b)=>(a+b));
// }else{
// return function(n){
// return args[0]+name(n)
// };
// }
// }

// console.log(name(1,3,4,6))
// console.log(name(1)(2)(3)(4))


2.	// output [ [1, 2, 3], [4, 5], [9 ,[8] ] ] make all elements on same level


let a = [[1, 2, 3], [4, 5], [9, [8]]]

let b = [...a[0], ...a[1], ...a[2]]

let [...c, d] = b

let e = [...c, ...d]

console.log(e)