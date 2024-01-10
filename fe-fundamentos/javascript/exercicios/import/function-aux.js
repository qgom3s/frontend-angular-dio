const studentSort = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const studentNum = studentSort[i]
    i++;
    return studentNum;
}

function print(text) {
    console.log(text);
}

module.exports = { gets, print };
