const notas = [2, 3, 8, 10, 6, 5, 7, 8, 9, 6];
let aprobadas = [];
let desaprobadas = [];
let suma = 0;
let cant_aprobadas = 0;

console.log(`Notas del array`);
for (let i = 0; i < notas.length; i++) {
  console.log(`Nota N° ${i + 1}: ${notas[i]}`);
    suma += notas[i]; 
    if (notas[i] >= 6) {
        aprobadas.push(notas[i]);
        cant_aprobadas++;
    } else {
        desaprobadas.push(notas[i]);
    }                                           
}

console.log(`Notas aprobadas`);
for (let i = 0; i < aprobadas.length; i++) {
    console.log(`Nota N° ${i + 1}: ${aprobadas[i]}`);
}

console.log(`Notas desaprobadas`);
for (let i = 0; i < desaprobadas.length; i++) {
    console.log(`Nota N° ${i + 1}: ${desaprobadas[i]}`);
}

const promedio = suma / notas.length;
console.log(`El promedio general de las notas es: ${promedio.toFixed(2)}`);
console.log(`Cantidad de notas aprobadas: ${cant_aprobadas}`);
