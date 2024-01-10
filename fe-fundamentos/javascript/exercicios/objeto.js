// Object and properties

const people = {
    name: 'John Smith',
    age: 34,

    describe: function () {
        console.log(`My name is ${this.name} and my age is ${this.age}.`);
    }
};

people.describe();
