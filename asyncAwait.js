async function f(){
  
    let promise = new Promise((resolve, reject)=>{
      setTimeout(()=> resolve("Done"), 1000)
    });
      
  let result = await promise;
    
    alert(result)
    
    }

    f()