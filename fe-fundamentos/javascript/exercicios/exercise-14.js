const endPoint = 100;
const myList = [];

// Created a list of numbers
for (let index = 0; index < endPoint; index++) {
    myList.push(index);
}

console.log(myList);

for (let index = 0; index < myList.length; index++) {
    if (myList[index] % 2 === 0) {
        console.log(myList[index]);
    }
}
