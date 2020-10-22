function foo(a, b){
    console.log(arguments)
   let x = Array.from(arguments)
    console.log(x.slice(0, 1))
    console.log(x.map((e)=>e))
    console.log(x)
    
  }
  
  foo(1, 2)