class Car {
    model;
    color;
    averageFuelConsumption;

    constructor(model, color, averageFuelConsumption) {
        this.model = model;
        this.color = color;
        this.averageFuelConsumption = averageFuelConsumption;
    }

    describe() {
        console.log(`The car is a ${this.color} ${this.model}.`);

    };

    consumptionValue(kmTraveled, fuelPrice) {
        return kmTraveled / this.averageFuelConsumption * fuelPrice
    }
};

const s10 = new Car('Chevrolet', 'White', 10.4);

s10.describe();

console.log('Expense $: ' + s10.consumptionValue(75, 5.36).toFixed(2) + '.');
