console.log("<------------------------------->");
console.log(new Date().toDateString());

// igual =
let counter = 100;
let response = 100 == "100"; // comparación
console.log(` ${counter} == '100' => ${response}`);

// estrictamente igual ===
let responseB = 100 === "100"; // false
console.log(` ${counter} === '100' => ${responseB}`);

// diferente !=
let brand = "mazda";
let responseC = brand != "chevrolet";
console.log(`${brand} != 'chevrolet' = ${responseC}`);
console.log(brand != "Mazda"); // true

// estrictamente diferente !==
let numberA = 10;
let responseA = numberA != "10";
console.log(`${numberA} != '10' => ${responseA}`);
let responseD = numberA !== "10";
console.log(`${numberA} !== '10' => ${responseD}`);

// mayor >
console.log(`counter > 10 ? ${counter > 10}`);
console.log(`counter >= 99 ? ${counter >= 99}`);

// menor <
console.log(`counter < 10 ? ${counter < 10}`); // counter = 100
console.log(`counter <= 100 ? ${counter <= 100}`); // counter = 100
