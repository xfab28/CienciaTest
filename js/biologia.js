//Indices
const sistemas_biologicos = document.querySelector(".SB");
const caracteristicas = document.querySelector(".CIP");
const equilibrio = document.querySelector(".EE");
const restauracion = document.querySelector(".REDS");
const genetica = document.querySelector(".G");
const evolucion = document.querySelector(".E");

//Temas
const tem1 = document.getElementById("tem1");
const tem2 = document.getElementById("tem2");
const tem3 = document.getElementById("tem3");
const tem4 = document.getElementById("tem4");
const tem5 = document.getElementById("tem5");
const tem6 = document.getElementById("tem6");

//Eventos
let secciones = [tem1, tem2, tem3, tem4, tem5, tem6];

sistemas_biologicos.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem1.style.display = "flex";
});

caracteristicas.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem2.style.display = "flex";
});

equilibrio.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem3.style.display = "flex";
});

restauracion.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem4.style.display = "flex";
});

genetica.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem5.style.display = "flex";
});

evolucion.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem6.style.display = "flex";
});