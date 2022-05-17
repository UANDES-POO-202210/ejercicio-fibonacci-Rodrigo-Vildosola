/*
Dado un arreglo de números, escribir una función que retorne una copia del arreglo que recibe
como parámetro ordenada de manera creciente. Importante que el arreglo original no se vea modifi-
cado, es decir, después de llamar al método ordenar si imprimo el valor de retorno y el valor original
el primero debe estar ordenado y el original no.
Para esto, define el arreglo de números que vas a usar (no lo pidas por consola, déjalo fijo en
el código), luego define la función ordenar y finalmente imprime el valor del arreglo original y el
ordenado.
*/
console.log("Problema 1:");
const compare = (a, b) => a - b;
const array_sort = sorted_array =>  sorted_array.sort(compare);

const array = [8,2,19,1,-1, 100];
let sorted_array = [...array];

sorted_array = array_sort(sorted_array);

console.log(array);
console.log(sorted_array);

console.log();
