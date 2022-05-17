/*
Dado un arreglo de palabras en castellano (es decir pueden contener tildes y la letra ñ), escribir
una función que retorne una copia del arreglo que recibe como parámetro ordenado por abecedario.
Al igual que en el problema anterior la función no debe modificar los argumentos que recibe, debe
generar una copia y sobre esa realizar el ordenamiento.
Para esto, define el arreglo de palabras que vas a usar (no lo pidas por consola, déjalo fijo en
el código), luego define la función ordenar y finalmente imprime el valor del arreglo original y el
ordenado. Preocúpate de usar palabras con ñ y tildes, como ñandú, música, introducción, etc. Para
esto debes usar la función localeCompare de Javascript.
*/
console.log("Problema 2:");

const word_compare = (a, b) => a.localeCompare(b);
const word_sorter = words_copy => words_copy.sort(word_compare);

const word_array = ["ñandú", "música", "introducción", "hola", "rodrigo", "ñoño", "año"];
let words_copy = [...word_array]; 

words_copy = word_sorter(words_copy);

console.log(word_array);
console.log(words_copy);

console.log();
