function Animal(legs, horns, type) {
    this.legs = legs;
    this.horns = horns;
    this.type = type
}

Animal.prototype.getProps = function () {
    console.log(this);
}

Animal.prototype.type = "Pet";

Object.prototype.getProps = function () {
    console.log("Imran");
}
var animal = new Animal(4, 2);

console.log(animal.type)









