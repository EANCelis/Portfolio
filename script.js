window.onload = function () {
    console.log("Bienvenidx a mi portfolio! =)");
};

document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.querySelector("#contacto form");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        var campoNombre = document.getElementById("name");
        var nombre = campoNombre ? campoNombre.value : "usuario";

        alert("Gracias por tu mensaje " + nombre + ", te responderé pronto!");

        var mensajeExito = document.createElement("p");
        mensajeExito.textContent = "Mensaje enviado correctamente.";
        mensajeExito.style.color = "green";

        formulario.appendChild(mensajeExito);
        formulario.reset();
    });

    window.addEventListener("scroll", function () {
        var secciones = document.querySelectorAll("section");
        var enlacesMenu = document.querySelectorAll(".menu-lateral a");
        var seccionActiva = false;

        secciones.forEach(function (seccion) {
            var rect = seccion.getBoundingClientRect();
            var id = seccion.getAttribute("id");

            if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.3) {
                seccionActiva = true;
                enlacesMenu.forEach(function (enlace) {
                    enlace.classList.remove("activo");
                    if (enlace.getAttribute("href").includes(id)) {
                        enlace.classList.add("activo");
                    }
                });
            }
        });

        if (!seccionActiva) {
            enlacesMenu.forEach(function (enlace) {
                enlace.classList.remove("activo");
                if (enlace.getAttribute("href").includes("sobre-mi")) {
                    enlace.classList.add("activo");
                }
            });
        }
    });
});
