const userWeight = 75; // em Kg.
const userHeight = 1.80; // em metros.

const imc = userWeight / userHeight ** 2;

if (imc < 18.5) {
  console.log("Usuário com " + imc.toFixed(2) + " e sua condição é: abaixo do peso.")
} else if (imc >= 18.5 && imc < 25) {
  console.log("Usuário com " + imc.toFixed(2) + " e sua condição é: peso normal.")
} else if (imc >= 25 && imc < 30) {
  console.log("Usuário com " + imc.toFixed(2) + " e sua condição é: acima do peso.")
} else if (imc >= 30 && imc <= 40) {
  console.log("Usuário com " + imc.toFixed(2) + " e sua condição é: obeso.")
} else {
  console.log("Usuário com " + imc.toFixed(2) + " e sua condição é: obesidade grave.")
}
