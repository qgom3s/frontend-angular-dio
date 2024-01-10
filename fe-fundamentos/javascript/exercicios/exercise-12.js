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

    calcImc() {
        return this.weight / this.height ** 2;
    }

    classifyImc() {
        const imc = this.calcImc();

        if (imc < 18.5) {
            return 'low weight';
        } else if (imc < 25) {
            return 'normal weight';
        } else if (imc < 30) {
            return 'overweight';
        } else if (imc < 35) {
            return 'obesity: grade I';
        } else if (imc < 40) {
            return 'obesity: grade II';
        } else {
            return 'obesity: grade III';
        }

    }
}

const jose = new People('José', 1.70, 70);

jose.describe();

console.log(`Jose IMC: ` + jose.calcImc().toFixed(2));
console.log(`Body condition: ` + jose.classifyImc() + '.');
