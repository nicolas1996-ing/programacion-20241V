var brand = "mala-practica";
let counter = 100;
const token = "abc123";

console.log(token);
counter = 199;
console.log(counter);

// comentario de una linea

/*
    este es un comentario 
    multiline :)
*/

// interpolación
let interpolation = `el valor de counter es ${counter}`;
console.log(interpolation);
console.log("el valor de counter es: ", counter);
console.log("el valor de counter es " + counter);

const persons = [
  {
    firstName: "Maëlla",
    lastName: "Attfield",
    age: 24,
    gender: "Male",
  },
  {
    firstName: "Angèle",
    lastName: "Hayler",
    age: 22,
    gender: "Male",
  },
  {
    firstName: "Médiamass",
    lastName: "Trusdale",
    age: 38,
    gender: "Bigender",
  },
  {
    firstName: "Océane",
    lastName: "Hagston",
    age: 28,
    gender: "Female",
  },
  {
    firstName: "Erwéi",
    lastName: "Clace",
    age: 54,
    gender: "Male",
  },
  {
    firstName: "Mahélie",
    lastName: "Swales",
    age: 44,
    gender: "Male",
  },
  {
    firstName: "Ruì",
    lastName: "Crosier",
    age: 18,
    gender: "Female",
  },
  {
    firstName: "Esbjörn",
    lastName: "Thomason",
    age: 36,
    gender: "Female",
  },
  {
    firstName: "Lài",
    lastName: "Hinkensen",
    age: 48,
    gender: "Female",
  },
  {
    firstName: "Aloïs",
    lastName: "Abrahmovici",
    age: 65,
    gender: "Male",
  },
  {
    firstName: "Joséphine",
    lastName: "Henriquet",
    age: 58,
    gender: "Male",
  },
  {
    firstName: "Jú",
    lastName: "Lidgley",
    age: 79,
    gender: "Male",
  },
  {
    firstName: "Cécilia",
    lastName: "Minette",
    age: 61,
    gender: "Female",
  },
  {
    firstName: "Célia",
    lastName: "Boc",
    age: 32,
    gender: "Male",
  },
  {
    firstName: "Irène",
    lastName: "Shepherdson",
    age: 39,
    gender: "Male",
  },
  {
    firstName: "Méryl",
    lastName: "Harken",
    age: 45,
    gender: "Female",
  },
  {
    firstName: "Yú",
    lastName: "Pickance",
    age: 30,
    gender: "Genderfluid",
  },
  {
    firstName: "Dorothée",
    lastName: "Giacomasso",
    age: 42,
    gender: "Male",
  },
  {
    firstName: "Chloé",
    lastName: "Leile",
    age: 61,
    gender: "Female",
  },
  {
    firstName: "Görel",
    lastName: "Joyce",
    age: 78,
    gender: "Male",
  },
  {
    firstName: "Mélodie",
    lastName: "Casaccio",
    age: 34,
    gender: "Male",
  },
  {
    firstName: "Nuó",
    lastName: "Obey",
    age: 71,
    gender: "Female",
  },
  {
    firstName: "Liè",
    lastName: "Janecki",
    age: 25,
    gender: "Male",
  },
  {
    firstName: "Loïc",
    lastName: "Adds",
    age: 37,
    gender: "Female",
  },
  {
    firstName: "Tú",
    lastName: "Northover",
    age: 25,
    gender: "Female",
  },
  {
    firstName: "Naéva",
    lastName: "Tours",
    age: 34,
    gender: "Female",
  },
  {
    firstName: "Uò",
    lastName: "Giraudat",
    age: 69,
    gender: "Male",
  },
  {
    firstName: "Yè",
    lastName: "Hawksworth",
    age: 50,
    gender: "Female",
  },
  {
    firstName: "Gösta",
    lastName: "Hurt",
    age: 51,
    gender: "Male",
  },
  {
    firstName: "Marie-noël",
    lastName: "Sollom",
    age: 78,
    gender: "Female",
  },
  {
    firstName: "Måns",
    lastName: "Kay",
    age: 69,
    gender: "Female",
  },
  {
    firstName: "Médiamass",
    lastName: "Heineken",
    age: 47,
    gender: "Male",
  },
  {
    firstName: "Méthode",
    lastName: "Lodin",
    age: 66,
    gender: "Female",
  },
  {
    firstName: "Dafnée",
    lastName: "Cullimore",
    age: 41,
    gender: "Male",
  },
  {
    firstName: "Yè",
    lastName: "Wash",
    age: 71,
    gender: "Female",
  },
  {
    firstName: "Thérèsa",
    lastName: "Bartul",
    age: 33,
    gender: "Female",
  },
  {
    firstName: "Ráo",
    lastName: "Saller",
    age: 37,
    gender: "Male",
  },
  {
    firstName: "Océane",
    lastName: "Mulgrew",
    age: 76,
    gender: "Male",
  },
  {
    firstName: "Sélène",
    lastName: "Deerr",
    age: 57,
    gender: "Male",
  },
  {
    firstName: "Méryl",
    lastName: "Fulstow",
    age: 42,
    gender: "Male",
  },
  {
    firstName: "Mélia",
    lastName: "Mylan",
    age: 50,
    gender: "Male",
  },
  {
    firstName: "Estée",
    lastName: "Skamal",
    age: 62,
    gender: "Female",
  },
  {
    firstName: "Véronique",
    lastName: "Davydoch",
    age: 50,
    gender: "Male",
  },
  {
    firstName: "Séverine",
    lastName: "Millichip",
    age: 56,
    gender: "Male",
  },
  {
    firstName: "Naëlle",
    lastName: "Pead",
    age: 22,
    gender: "Male",
  },
  {
    firstName: "Aimée",
    lastName: "Scurry",
    age: 24,
    gender: "Male",
  },
  {
    firstName: "Almérinda",
    lastName: "Canelas",
    age: 34,
    gender: "Genderfluid",
  },
  {
    firstName: "Vérane",
    lastName: "Wain",
    age: 43,
    gender: "Female",
  },
  {
    firstName: "Camélia",
    lastName: "Storkes",
    age: 25,
    gender: "Genderqueer",
  },
  {
    firstName: "Yáo",
    lastName: "Skyram",
    age: 67,
    gender: "Male",
  },
  {
    firstName: "Naëlle",
    lastName: "O'Carroll",
    age: 22,
    gender: "Female",
  },
  {
    firstName: "Amélie",
    lastName: "Pozzi",
    age: 33,
    gender: "Female",
  },
  {
    firstName: "Yóu",
    lastName: "Jolin",
    age: 62,
    gender: "Female",
  },
  {
    firstName: "Andréa",
    lastName: "Losty",
    age: 75,
    gender: "Male",
  },
  {
    firstName: "Dafnée",
    lastName: "Jemison",
    age: 61,
    gender: "Male",
  },
  {
    firstName: "Maï",
    lastName: "Havenhand",
    age: 61,
    gender: "Male",
  },
  {
    firstName: "Aloïs",
    lastName: "Domone",
    age: 61,
    gender: "Female",
  },
  {
    firstName: "Loïc",
    lastName: "Fogel",
    age: 65,
    gender: "Female",
  },
  {
    firstName: "Océane",
    lastName: "Cove",
    age: 55,
    gender: "Genderfluid",
  },
  {
    firstName: "Léonore",
    lastName: "McGlone",
    age: 63,
    gender: "Female",
  },
  {
    firstName: "Ráo",
    lastName: "Todari",
    age: 38,
    gender: "Male",
  },
  {
    firstName: "Méthode",
    lastName: "Dixey",
    age: 52,
    gender: "Male",
  },
  {
    firstName: "Publicité",
    lastName: "Whittlesee",
    age: 63,
    gender: "Genderfluid",
  },
  {
    firstName: "Rachèle",
    lastName: "Pinfold",
    age: 50,
    gender: "Male",
  },
  {
    firstName: "Amélie",
    lastName: "Bernhardi",
    age: 35,
    gender: "Female",
  },
  {
    firstName: "André",
    lastName: "Bims",
    age: 66,
    gender: "Male",
  },
  {
    firstName: "Estée",
    lastName: "Sphinxe",
    age: 41,
    gender: "Female",
  },
  {
    firstName: "Dafnée",
    lastName: "Lilbourne",
    age: 29,
    gender: "Male",
  },
  {
    firstName: "Béatrice",
    lastName: "Chyuerton",
    age: 48,
    gender: "Female",
  },
  {
    firstName: "Cunégonde",
    lastName: "Bubear",
    age: 26,
    gender: "Female",
  },
  {
    firstName: "Mylène",
    lastName: "Lockton",
    age: 37,
    gender: "Male",
  },
  {
    firstName: "Publicité",
    lastName: "Fortey",
    age: 33,
    gender: "Male",
  },
  {
    firstName: "Bérengère",
    lastName: "Corneille",
    age: 51,
    gender: "Female",
  },
  {
    firstName: "Tán",
    lastName: "Evershed",
    age: 68,
    gender: "Male",
  },
  {
    firstName: "Lài",
    lastName: "Coke",
    age: 29,
    gender: "Female",
  },
  {
    firstName: "Gösta",
    lastName: "Gibbonson",
    age: 68,
    gender: "Male",
  },
  {
    firstName: "Adèle",
    lastName: "Queyeiro",
    age: 45,
    gender: "Male",
  },
  {
    firstName: "Clémence",
    lastName: "Lawlan",
    age: 49,
    gender: "Male",
  },
  {
    firstName: "Ruì",
    lastName: "Stuther",
    age: 38,
    gender: "Female",
  },
  {
    firstName: "Styrbjörn",
    lastName: "Barlace",
    age: 67,
    gender: "Female",
  },
  {
    firstName: "Dà",
    lastName: "Ayce",
    age: 37,
    gender: "Male",
  },
  {
    firstName: "Lài",
    lastName: "Berzons",
    age: 56,
    gender: "Male",
  },
  {
    firstName: "Angèle",
    lastName: "Jedrysik",
    age: 52,
    gender: "Male",
  },
  {
    firstName: "Méthode",
    lastName: "Culross",
    age: 73,
    gender: "Female",
  },
  {
    firstName: "Aimée",
    lastName: "Burhill",
    age: 24,
    gender: "Female",
  },
  {
    firstName: "Maïwenn",
    lastName: "Molfino",
    age: 42,
    gender: "Male",
  },
  {
    firstName: "Ruò",
    lastName: "Surtees",
    age: 22,
    gender: "Male",
  },
  {
    firstName: "Bérengère",
    lastName: "D'Antonio",
    age: 33,
    gender: "Male",
  },
  {
    firstName: "Loïc",
    lastName: "Marchington",
    age: 30,
    gender: "Male",
  },
  {
    firstName: "Vénus",
    lastName: "Nobles",
    age: 36,
    gender: "Male",
  },
  {
    firstName: "Adèle",
    lastName: "Conrath",
    age: 63,
    gender: "Female",
  },
  {
    firstName: "Céline",
    lastName: "Hufton",
    age: 19,
    gender: "Female",
  },
  {
    firstName: "Faîtes",
    lastName: "Galletly",
    age: 19,
    gender: "Polygender",
  },
  {
    firstName: "Pò",
    lastName: "Coling",
    age: 53,
    gender: "Male",
  },
  {
    firstName: "Athéna",
    lastName: "Duran",
    age: 47,
    gender: "Female",
  },
  {
    firstName: "Anaé",
    lastName: "Argile",
    age: 60,
    gender: "Female",
  },
  {
    firstName: "Stéphanie",
    lastName: "Filkov",
    age: 53,
    gender: "Male",
  },
  {
    firstName: "Bénédicte",
    lastName: "Tyzack",
    age: 70,
    gender: "Genderqueer",
  },
  {
    firstName: "Lài",
    lastName: "Chaize",
    age: 29,
    gender: "Female",
  },
  {
    firstName: "Maï",
    lastName: "Eburah",
    age: 39,
    gender: "Female",
  },
];

console.table(persons);
