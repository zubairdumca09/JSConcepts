let user = {
  name: "Imran",
  getName: function () {
    console.log(this.name)
  }
}

let x = user.getName;

x();

