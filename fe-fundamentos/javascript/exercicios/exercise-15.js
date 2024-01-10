const { gets, print } = require('./import/function-aux');
const sortedSet = [];

let bigNum = 0;

for (let i = 0; i < 5; i++) {
    const sortedNum = gets();
    sortedSet.push(sortedNum);
}

console.log(sortedSet);

for (let i = 0; i < sortedSet.length; i++) {
    if (sortedSet[i] > bigNum) {
        bigNum = sortedSet[i];
    }
}

console.log(`The largest number is: ` + bigNum + `.`);
