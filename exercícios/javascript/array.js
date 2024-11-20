const nota1 = 7.9;
const nota2 = 8.3;
const nota3 = 9.2;
const nota4 = 10;

// Array ->     0    1    2    3    4    5    6
const notas = [7.9, 8.3, 9.2, 10];
// notas = [3.5, 3.5, 3.5]; // Erro

console.log(notas[0]);
console.log(notas[1]);
console.log(notas[2]);
console.log(notas[3]);

notas.push(8.1);

console.log(notas[4]);
console.log(notas[5]);

notas[0] = 9.9;

console.log(notas[0]);
console.log(notas);