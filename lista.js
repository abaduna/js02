window.onload = iniciar;
var tareas = [];
function iniciar() {
  var btnAgregar = document.getElementById("btnAgregar");
  btnAgregar.addEventListener("click", clickBtnAgregar);
  var textarea = document.getElementById("textarea");
  var tarea = textarea.value;
}
function clickBtnAgregar(params) {
  tareas.push(textarea.value);

  refrescar();
}
function refrescar() {
  var html = "";
  var listado = document.getElementById("lista");
  for (tarea of tareas) {
    html += tarea + "<br>";
  }
  listado.innerHTML = html;
}
