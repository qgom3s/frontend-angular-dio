// variables
const testGrade1 = 5;
const testGrade2 = 8;
const testGrade3 = 10;

const studentAverage = (testGrade1 + testGrade2 + testGrade3) / 3;
console.log(studentAverage);

// Conditional
if (studentAverage < 5) {
    console.log("Aluno REPROVADO!!!");
} else if (studentAverage > 7) {
    console.log("Aluno APROVADO!!!");
} else {
    console.log("Aluno em RECUPERAÇÂO...");
}
