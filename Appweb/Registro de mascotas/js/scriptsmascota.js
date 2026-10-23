const formulario = document.getElementById("formMascota");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombreMascota").value;
    const especie = document.getElementById("especie").value;
    const edad = document.getElementById("edadMascota").value;

    alert("Mascota registrada: " + nombre);

    document.getElementById("resultado").textContent =
        nombre + " es un(a) " + especie + " de " + edad + " año(s).";

});