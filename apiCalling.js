function populate(data) {

}



function dataApi(fun) {
    fetch("https://randomuser.me/api")

        .then((res) => {
            return res.json()
        }).then((data) => {
            fun(data)
        }).catch((error) => {
            console.log(error)
        })
}

dataApi(populate)

// function populate(data1) {
//     console.log("MyData1", data1)
//     }
    
//     function loggingError(error) {
//     console.log("Ohh teri error aa gayi", error )
//     }
    
//     function dataApi(fun, catchError) {
//         fetch("https://arandomuser.me/api")
    
//             .then((res) => {
//                 return res.json()
//             }).then((data) => {
//                 fun(data)
//             }).catch((error) => {
//                 catchError(error)
//             })
//     }
    
//     dataApi(populate, loggingError)
    