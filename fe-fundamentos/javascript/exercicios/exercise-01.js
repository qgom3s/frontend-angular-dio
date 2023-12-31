// variables
let fuelCost = 5.083; // R$/litro - Florianópolis/SC - 31-12-2023.
let distanceOfTheRoute = 79; // em Km - Florianópolis -> Balneário Camboriú.
const averageFuelConsumption = 12.1; // KM/litro - Sandeiro Stepway.

// Calculation of the cost of the trip
let estimatedCost = fuelCost * distanceOfTheRoute / averageFuelConsumption

console.log("Custo estimado da viagem R$:" + estimatedCost.toPrecision(4));
