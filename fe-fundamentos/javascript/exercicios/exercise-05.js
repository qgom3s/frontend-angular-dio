const atSight = false;
const isDebit = false;
const nParcel = 4;

let parcel;
let productPrice = 55.0;

if (atSight) {
    if (isDebit) {
        productPrice = productPrice * 0.9;
        console.log("À vista no débito, desconto de 10%, preço total $" + productPrice.toFixed(2));
    } else {
        productPrice = productPrice * 0.85;
        console.log("À vista em dinheiro/PIX, desconto de 15%, preço total $" + productPrice.toFixed(2));
    }
} else {
    if (nParcel <= 2) {
        parcel = productPrice / nParcel;
        console.log("No crédito, em " + nParcel + " vezes com parcela(s) de $" + parcel.toFixed(2) + " totalizando $" + productPrice.toFixed(2));
    } else {
        parcel = productPrice * 1.1 / nParcel;
        console.log("No crédito, em " + nParcel + " vezes com parcela(s) de $" + parcel.toFixed(2) + " totalizando $" + productPrice.toFixed(2))
    }
}