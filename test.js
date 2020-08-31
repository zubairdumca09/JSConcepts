// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }

//Sollution 1
// function set(i) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }

// for (var i = 0; i < 10; i++) {
//     set(i);
// }

//Sollution 2
// for (var i = 0; i < 10; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i)
//         }, 0)
//     })(i)
// }

// function ax() {
//     'use strict'
//     a = 10
//     console.log(a);
//     if (true) {
//         let a;
//     }
// }
// ax();


var a = 10;
var b = 12;

function a() {
    let a;
}

var c = function () {
    var x = 1;

}

a();