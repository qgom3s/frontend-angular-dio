// Encapsulation -> calling one function inside another.
function writeName(name) {
    return name;
}

function checkAge(age) {
    if (age < 18) {
        return 'You are underage ' + writeName('John') + '.';
    } else {
        return 'You are of legal age ' + writeName('John') + '.';
    }
}

(function () {
    console.log(checkAge(30));
})();