window.onload = iniciar;
function iniciar() {
  let boton = document.getElementById("btnCargar");
  boton.addEventListener("click", agregar);
}
async function agregar() {
  let txtFecha = document.getElementById("txtFecha").value;

  let inputPais = document.getElementById("inputPais").value;
  let estadisticas = json.dates[txtFecha].countries[inputPais];

  let url =
    "https://api.covid19tracking.narrativa.com/api/" +
    txtFecha +
    " /country/ " +
    inputPais;
  let json = await cargrUrl(url);
  document.getElementById("today_confirmed").innerHTML =
    estadisticas.today_confirmed;
  document.getElementById("today_deaths").innerHTML = estadisticas.today_deaths;
  document.getElementById(
    "today_hospitalised_patients_with_symptoms"
  ).innerHTML = estadisticas.today_hospitalised_patients_with_symptoms;
  document.getElementById("today_intensive_care").innerHTML =
    estadisticas.today_intensive_care;
  document.getElementById("today_new_confirmed").innerHTML =
    estadisticas.today_new_confirmed;
  document.getElementById("today_new_deaths").innerHTML =
    estadisticas.today_new_deaths;
  document.getElementById(
    "today_new_hospitalised_patients_with_symptoms"
  ).innerHTML = estadisticas.today_new_hospitalised_patients_with_symptoms;
  document.getElementById("today_new_intensive_care").innerHTML =
    estadisticas.today_new_intensive_care;
  document.getElementById("today_new_open_cases").innerHTML =
    estadisticas.today_new_open_cases;
  document.getElementById("today_new_recovered").innerHTML =
    estadisticas.today_new_recovered;
  document.getElementById("today_new_total_hospitalised_patients").innerHTML =
    estadisticas.today_new_total_hospitalised_patients;
  document.getElementById("today_open_cases").innerHTML =
    estadisticas.today_open_cases;
  document.getElementById("today_recovered").innerHTML =
    estadisticas.today_recovered;
}
async function cargrUrl(url) {
  let restultado = await fetch(url);
  return restultado.json();
}
