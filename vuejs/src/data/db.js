const regionsPeru = [
  "Amazonas",
  "Ancash",
  "Apurimac",
  "Arequipa",
  "Ayacucho",
  "Cajamarca",
  "Callao",
  "Cusco",
  "Huancavelica",
  "Huanuco",
  "Ica",
  "Junin",
  "La Libertad",
  "Lambayeque",
  "Lima",
  "Loreto",
  "Madre de Dios",
  "Moquegua",
  "Pasco",
  "Piura",
  "Puno",
  "San Martin",
  "Tacna",
  "Tumbes",
  "Ucayali",
];

const nationalities = [
  //southAmerica
  "Argentina",
  "Bolivia",
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Guyana",
  "Paraguay",
  "Peru",
  "Suriname",
  "Uruguay",
  "Venezuela",
  //northAmerica
  "EEUU",
  "Canada",
  "Mexico",
  "Panama",
  "Cuba",
  //Europe
  "Alemania",
  "Francia",
  "Italia",
  "España",
  "Portugal",
  "Rusia",
  "Belgica",
  "Holanda",
  "Suiza",
  "Noruega",
  "Dinamarca",
];

const ages = (min, max) => {
  const data = [];
  for (let i = min; i <= max; i++) {
    data.push(i);
  }
  return data;
};

//estado civil
const civilStatus = ["Soltero", "Casado", "Divorciado", "Viudo"];

export default {
  regionsPeru,
  ages,
  civilStatus,
  nationalities,
};
