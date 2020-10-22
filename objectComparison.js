let x = {
    name: "Imran",
    age : 28,
    Delhi: "Noida"
  }
  
  
  let y = {
    name: "Imran",
    age : 28,
    address: "Delhi"
  }
  
  
  function foo(x, y){
  for(var key in x){
    if(x[key] !== y[key]){
      return false
    }
  
  }
    return true
    }
  
  console.log(foo(x, y))