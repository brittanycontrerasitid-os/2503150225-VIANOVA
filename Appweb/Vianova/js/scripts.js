//Botón para mostrar u ocultar los objetivos 
const btnObjetivos = document.getElementById("btnObjetivos");
const listaObjetivos = document.getElementById("listaObjetivos");

btnObjetivos.addEventListener("click", function() {

    if (listaObjetivos.style.display === "none") {
        listaObjetivos.style.display = "block";
        btnObjetivos.textContent = "Ocultar objetivos específicos";
    } else {
        listaObjetivos.style.display = "none";
        btnObjetivos.textContent = "Mostrar objetivos específicos";
    }

});

// Botón para cambiar el color de fondo
const btnTema = document.getElementById("btnTema");
let fondoClaro = true;

btnTema.addEventListener("click", function() {

    if (fondoClaro) {
        document.body.style.backgroundColor = "#fff3e0";
        fondoClaro = false;
    } else {
        document.body.style.backgroundColor = "#eaf2fb";
        fondoClaro = true;
    }

});

//Formulario para reportar un bache
const formulario = document.getElementById("formReporte");
let totalReportes = 0;

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const calle = document.getElementById("calle").value;
    const tamano = document.getElementById("tamano").value;

    alert("Gracias " + nombre + ", tu reporte fue enviado.");

    document.getElementById("resultado").textContent =
        "Reporte de " + nombre + ": bache de " + tamano + " cm en " + calle + ".";

    totalReportes = totalReportes + 1;
    document.getElementById("contador").textContent =
        "Reportes enviados: " + totalReportes;

    formulario.reset();

});