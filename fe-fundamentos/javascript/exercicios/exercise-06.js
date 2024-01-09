// IMC utilizando funções.
function calculateImc(weight, height) {
    return weight / height ** 2;
}

function classifyImc(imc) {
    if (imc < 18.5) {
        return "Usuário com " + imc.toFixed(2) + " e sua condição é: abaixo do peso.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Usuário com " + imc.toFixed(2) + " e sua condição é: peso normal.";
    } else if (imc >= 25 && imc < 30) {
        return "Usuário com " + imc.toFixed(2) + " e sua condição é: acima do peso.";
    } else if (imc >= 30 && imc <= 40) {
        return "Usuário com " + imc.toFixed(2) + " e sua condição é: obeso.";
    } else {
        return "Usuário com " + imc.toFixed(2) + " e sua condição é: obesidade grave.";
    }
}

function main() {
    const userWeight = 75; // em Kg.
    const userHeight = 1.80; // em metros.

    userImc = calculateImc(userWeight, userHeight);
    userStatus = classifyImc(userImc);
    console.log(userStatus);
}

main();