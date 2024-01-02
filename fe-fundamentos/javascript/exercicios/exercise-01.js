/* 
    var -> if you MUST support old browsers
    const -> if the value should not be changed
    let -> if you can't use const
*/

// variables
const fuelCost = 5.083; // R$/litro - Florianópolis/SC - 31-12-2023.
const distanceOfTheRoute = 79; // em Km - Florianópolis -> Balneário Camboriú.
const averageFuelConsumption = 12.1; // KM/litro - Sandeiro Stepway.

// Calculation of the cost of the trip
let estimatedCost = fuelCost * distanceOfTheRoute / averageFuelConsumption;

console.log("Custo estimado da viagem R$:" + estimatedCost.toFixed(2));
