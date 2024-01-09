function writeName(name) {
    console.log('My name is: ' + name + '.')
}

// main -> anonymous functions.
(function () {
    writeName('John');
    writeName('Jane');
})();