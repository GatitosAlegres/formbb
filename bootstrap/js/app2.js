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

const nationalityFather = document.querySelector("#nationalityFather");
const loadNationalitiesFather = () => {
    nationalities.forEach((nacionalidad) => {
    const option = document.createElement("option");
    option.value = nacionalidad;
    option.innerHTML = nacionalidad;
    nationalityFather.appendChild(option);
  });
};
loadNationalitiesFather();

const nationalityMun = document.querySelector("#nationalityMum");
const loadNationalitiesMum = () => {
    nationalities.forEach((nacionalidad) => {
    const option = document.createElement("option");
    option.value = nacionalidad;
    option.innerHTML = nacionalidad;
    nationalityMun.appendChild(option);
  });
};
loadNationalitiesMum();

const ageFather = document.querySelector("#ageFather");
const loadAgesFather = () => {
  ages(15, 100).forEach((age) => {
    const option = document.createElement("option");
    option.value = age;
    option.innerHTML = age;
    ageFather.appendChild(option);
  });
};
loadAgesFather();

const ageMum = document.querySelector("#ageMum");
const loadAgesMum = () => {
  ages(15, 100).forEach((age) => {
    const option = document.createElement("option");
    option.value = age;
    option.innerHTML = age;
    ageMum.appendChild(option);
  });
};
loadAgesMum();