const x = 111
const outer = (a) => (b) => {
    console.log(a, b, x)
}

let fun = outer(10); //closure

fun(11);

