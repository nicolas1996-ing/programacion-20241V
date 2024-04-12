console.log("------------objetos------------");

let car = {
  brand: "mazda",
  weight: 1000,
  color: "blue",
  model: 2024,
  cc: 1200,
  fuelType: "gasolina",
};

console.table(car);

// acceder a una caracteristica
console.log(car.brand);
console.log(car["color"]);

// agregar una nueva caracteristica
car["mirrors"] = 2;
console.table(car);

// modifica el valor de una propiedad
car["brand"] = "toyota";
console.table(car);

// conocer todas las propiedades de un objetos (keys)
console.log(Object.keys(car));
// conocer todos los valores de las props de un objetos
console.log(Object.values(car));
// formar un arreglo a partir de un objeto
console.log(Object.entries(car));
// elminar una propiedad de un objeto
delete car.brand;
delete car.weight;
console.table(car);
