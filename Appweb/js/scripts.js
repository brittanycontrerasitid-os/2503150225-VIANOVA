const formulario = document.getElementById("miFormulario");

        formulario.addEventListener("submit", function(event) {

            event.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const edad = document.getElementById("edad").value;

            alert(nombre + " " + edad);

            document.getElementById("resultado").textContent =
                nombre + " " + edad;

        });
