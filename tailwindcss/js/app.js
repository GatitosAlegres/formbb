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

const provinciesPeru = [
  "Chachapoyas",
  "Bagua",
  "Bongará",
  "Condorcanqui",
  "Luya",
  "Rodríguez de Mendoza",
  "Utcubamba",
  "Huaraz",
  "Aija",
  "Antonio Raymondi",
  "Asunción",
  "Bolognesi",
  "Carhuaz",
  "Carlos Fermín Fitzcarrald",
  "Casma",
  "Corongo",
  "Huari",
  "Huarmey",
  "Huaylas",
  "Mariscal Luzuriaga",
  "Ocros",
  "Pallasca",
  "Pomabamba",
  "Recuay",
  "Santa",
  "Sihuas",
  "Yungay",
  "Abancay",
  "Andahuaylas",
  "Antabamba",
  "Atiquipa",
  "Bagua",
  "Bambamarca",
  "Bondoc",
  "Condoroma",
  "Cotabambas",
  "Chincheros",
  "Grau",
  "Huaraz",
  "Huaros",
  "La Unión",
  "Llata",
  "Marañon",
  "Oyon",
  "Pachitea",
  "Pisac",
  "San Agustín",
  "San Jerónimo",
  "Santiago de Chocorvos",
  "Santiago de Quirguiz",
  "Tacna",
  "Tocache",
];

const citiesPeru = [
  "Asunción",
  "Balsas",
  "Cajamarca",
  "Cheto",
  "Chicla",
  "Chocope",
  "Cochabamba",
  "Comercio",
  "El Alto",
  "El Carmen",
  "La Merced",
  "La Paz",
  "Llama",
  "Los Baños del Inca",
  "Manu",
  "Mariscal Castilla",
  "Miraflores",
  "Montero",
  "Pacasmayo",
  "Pedro Galvez",
  "Pomacanchi",
  "Río Grande",
  "Sabandía",
  "Sacsamarca",
  "San Juan de Siguas",
  "San Juan de Tarucani",
  "Santa Ana",
];

const departaments = document.querySelector("#departaments");
const loadDepartaments = () => {
  regionsPeru.forEach((region) => {
    const option = document.createElement("option");
    option.value = region;
    option.innerHTML = region;
    departaments.appendChild(option);
  });
  console.log(regionsPeru);
};
loadDepartaments();

const provincies = document.querySelector("#provincies");
const loadProvincies = () => {
  provinciesPeru.forEach((provincia) => {
    const option = document.createElement("option");
    option.value = provincia;
    option.innerHTML = provincia;
    provincies.appendChild(option);
  });
};
loadProvincies();

const cities = document.querySelector("#cities");
const loadCities = () => {
  citiesPeru.forEach((ciudad) => {
    const option = document.createElement("option");
    option.value = ciudad;
    option.innerHTML = ciudad;
    cities.appendChild(option);
  });
};
loadCities();