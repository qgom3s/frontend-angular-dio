function payDebit(priceProduto) {
    return priceProduto * 0.9;
}

function payCash(priceProduto) {
    return priceProduto * 0.85;
}

function payCredit(priceProduto, numberInstallments) {
    if (numberInstallments <= 2) {
        return priceProduto;
    } else {
        return priceProduto * 1.1;
    }
}

function selectPaymentMethod(atSight, isDebit, productValue, parcel) {
    if (atSight == true) {
        return payCash(productValue);
    } else if (isDebit == true) {
        return payDebit(productValue);
    } else {
        return payCredit(productValue, parcel);
    }
}

(function () {
    const product = 100;
    let paid = selectPaymentMethod(false, false, product, 3);
    console.log('Amount to be paid $' + paid.toFixed(2) + '.');
})();