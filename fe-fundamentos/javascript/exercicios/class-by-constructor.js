// Create a class that allows you to create instances
class People {
    name;
    age;
    yearOfBirth;

    // The constructor requires the declaration of parameters to instantiate an object.
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.yearOfBirth = 2024 - age;
    };

    describe() {
        console.log(`My name is ${this.name} and my age is ${this.age}.`);

    };
}

// Create a new instance of people
const john = new People('John Smith', 28);

console.log(john);
