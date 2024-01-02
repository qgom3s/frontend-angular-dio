// variables
const gasolineCost = 5.083; // R$/litro - Florianópolis/SC - 31-12-2023.
const ethanolCost = 4.29; // R$/litro - Florianópolis/SC - 02-01-2024.
const distanceOfTheRoute = 79; // em Km - Florianópolis -> Balneário Camboriú.
const averageFuelConsumption = 12.1; // KM/litro - Sandeiro Stepway.

/*
  Abordagem:
  - verifica se o tipo de combustível é gasolina -> True
  - se não for, é etanol
*/

// Calculation of the cost of the trip
const isGasoline = false;

if (isGasoline) {
    let estimatedCost = ethanolCost * distanceOfTheRoute / averageFuelConsumption;

    console.log("Custo estimado da viagem é R$" + estimatedCost.toFixed(2) + " usando gasolina.");
} else {
    let estimatedCost = gasolineCost * distanceOfTheRoute / averageFuelConsumption;

    console.log("Custo estimado da viagem é R$" + estimatedCost.toFixed(2) + " usando etanol.");
}
