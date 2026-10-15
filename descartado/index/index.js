//Variables
const ir_registro = document.querySelector(".ir-registro");
const ir_inicio = document.querySelector(".ir-inicio");
const inicio_sesion = document.querySelector(".inicio-sesion");
const registro = document.querySelector(".registro");

//Eventos
ir_registro.addEventListener("click", () => {
    inicio_sesion.classList.add("ocultar-inicio");
    registro.classList.remove("ocultar-registro");
});

ir_inicio.addEventListener("click", () => {
    registro.classList.add("ocultar-registro");
    inicio_sesion.classList.remove("ocultar-inicio");
});