// Create a class that allows you to create instances
class People {
    name;
    age;

    describe() {
        console.log(`My name is ${this.name} and my age is ${this.age}.`);

    };
}

// Create a new instance of people
const john = new People();
john.name = 'John Smith';
john.age = 30;

console.log(john);
