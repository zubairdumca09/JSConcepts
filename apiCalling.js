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

