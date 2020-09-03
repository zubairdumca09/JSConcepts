let person ={
    name: "Izhar",
    age: 30,
    getName: function (){
    console.log(this.name)
  }
  }
  
  let person1 ={
    name: "Zubair",
    age: 32
  }


  let person2 ={
    name: "Imran",
    age: 32
  }

  
  function greetings(homeTown){
  return console.log(`Hello, my name is ${this.name} and I am ${this.age} years old I am from ${homeTown}`)  
  }
  
  
  greetings.call(person, "Amroha")
  greetings.call(person1, "Jhansi")
  
  greetings.apply(person, ["Delhi"])
  greetings.apply(person1, ["Noida"])
  
  let printGreetings = greetings.bind(person, "Jamia");
  let printGreetings1 = greetings.bind(person1, "Noida Extn.");
  
  printGreetings();
  printGreetings1();
  
  let printName = person.getName.bind(person)

  printName();