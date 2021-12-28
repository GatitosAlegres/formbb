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

const nationalityFF = document.querySelector("#nationalityFF");
const loadNationalitiesFF = () => {
  nationalities.forEach((nacionalidad) => {
    const option = document.createElement("option");
    option.value = nacionalidad;
    option.innerHTML = nacionalidad;
    nationalityFF.appendChild(option);
  });
};
loadNationalitiesFF();

const nationalityMF = document.querySelector("#nationalityMF");
const loadNationalitiesMF = () => {
  nationalities.forEach((nacionalidad) => {
    const option = document.createElement("option");
    option.value = nacionalidad;
    option.innerHTML = nacionalidad;
    nationalityMF.appendChild(option);
  });
};
loadNationalitiesMF();

const nationalityFM = document.querySelector("#nationalityFM");
const loadNationalitiesFM = () => {
  nationalities.forEach((nacionalidad) => {
    const option = document.createElement("option");
    option.value = nacionalidad;
    option.innerHTML = nacionalidad;
    nationalityFM.appendChild(option);
  });
};
loadNationalitiesFM();

const nationalityMM = document.querySelector("#nationalityMM");
const loadNationalitiesMM = () => {
  nationalities.forEach((nacionalidad) => {
    const option = document.createElement("option");
    option.value = nacionalidad;
    option.innerHTML = nacionalidad;
    nationalityMM.appendChild(option);
  });
};
loadNationalitiesMM();