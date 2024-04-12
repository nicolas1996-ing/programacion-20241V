console.log("ciclo-while");

let numberForTable = +process.argv[2];
let results = [];
let number = 1;
while (number <= 10) {
  results.push({
    multiplicando: numberForTable,
    multiplicador: number,
    result: numberForTable * number,
  });
  number++;
}

console.table(results);
