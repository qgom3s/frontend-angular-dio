function checkAge(age) {
    if (age < 18) {
        return 'You are underage.';
    } else {
        return 'You are of legal age.';
    }
}

(function () {
    console.log(checkAge(17));
})();