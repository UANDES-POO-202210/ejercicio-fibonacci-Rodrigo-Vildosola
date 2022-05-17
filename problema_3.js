/*
Escribe una función que filtre los elementos de un arreglo de objetos en base a uno de sus
parámetros. Para esto, define un arreglo de personas donde cada persona será un objeto con name
y height.
*/
console.log("Problema 3:");

const HEIGHT = 1.8;

const people = [
{ "name": "Pedro", "height": 1.78 },
{ "name": "Nicolás", "height": 1.90 },
{ "name": "Carmen", "height": 1.65 }];

const tallerThan = people => people.filter(person => person.height >= HEIGHT);

console.log(people);
console.log();

let new_people = tallerThan(people);
console.log(new_people);
