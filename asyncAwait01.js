async function f(){
  
    let promise = new Promise((resolve, reject)=>{
      setTimeout(()=> resolve("Done"), 1000)
    });
      
  let result = await promise;
    
    alert(result)
    
    }

    f()
//1 - await keyword is always used with async function
//2 - async function always retuns promise


// const asyncFun = async () => {
//     const response = await fetch('https://randomuser.me/api/')
//     const json = await response.json();
//     console.log(json)
//     return json;
// }

// asyncFun();

const asyncFun = async () => {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () { resolve("Imran") }, 3000)
    })
    const json = await promise;
    console.log(json)
}

asyncFun();
