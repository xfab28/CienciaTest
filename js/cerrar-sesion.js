//Variables
const log_out = document.querySelector(".log-out");
const fondo_gris = document.querySelector(".fondo-gris");
const cerrar_sesion = document.querySelector(".cerrar-sesion");
const aceptar = document.querySelector(".aceptar");
const cancelar = document.querySelector(".cancelar");

//Eventos
log_out.addEventListener("click", () => {
    fondo_gris.classList.remove("esconder");
});

aceptar.addEventListener("click", () => {
    cerrar_sesion.innerHTML = "";
    const h3 = document.createElement("h3");
    h3.textContent = "Cerrando sesión...";
    cerrar_sesion.appendChild(h3);

    setTimeout(() => {
        window.location.href = "../index.html"
    }, 3000);
});

cancelar.addEventListener("click", () => {
    fondo_gris.classList.add("esconder");
});