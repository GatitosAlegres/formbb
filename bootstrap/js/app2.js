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