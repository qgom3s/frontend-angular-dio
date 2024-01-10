class People {
    name;
    height;
    weight;

    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    describe() {
        console.log(`Name: ${this.name}, height: ${this.height} and weight: ${this.weight}.`);
    }

    imc() {
        return this.weight / this.height ** 2;
    }
}

const jose = new People('José', 1.70, 70);

jose.describe();

console.log(`Jose IMC: ` + jose.imc().toFixed(2));
