console.log("arrays");

let fruits = [
  "apple",
  "orange",
  "lemmon",
  "banana",
  "strawberry",
  "pear",
  "pineapple",
  [20, 30, ["a", "b", "c"]],
];

const arrayEmb = fruits[fruits.length - 1]; // [20, 30, ["a", "b", "c"]]
const arrayEmb2 = arrayEmb[arrayEmb.length - 1]; // ["a", "b", "c"]
// console.log(arrayEmb2[1]);

// longitud e un array
// console.log(`la longitud del arreglo es ${fruits.length}`);
// acceder a un elemento dentro del arreglo
// console.log(fruits[0]);
// console.log(fruits[2]);
// console.log(fruits[4]);
// console.log(fruits[fruits.length - 1]);
// console.log(fruits[fruits.length - 1][0]); // 20
// console.log(fruits[fruits.length - 1][1]); // 30
// console.log(fruits[fruits.length - 1][2]); // ["a", "b", "c"]
// console.log(fruits[fruits.length - 1][2][1]); // "b"

// insertar un elemento a un arr
fruits.push(2024);
fruits.push(2025);
fruits.push(2026);
console.log(fruits);

// como eliminar el ultimo elemento de un array
fruits.pop();
console.log(fruits);

// como eliminar el primer elemento de un array
fruits.shift();
console.log(fruits);

// acceder al index de un elemento
const orangeIdx = fruits.indexOf("orange");
console.log(orangeIdx);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
console.log(meses);
meses.splice(1, 1);
console.log(meses);

