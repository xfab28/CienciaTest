//Indice
const magnitudes = document.querySelector(".MF");
const movimiento = document.querySelector(".MC");
const leyes = document.querySelector(".LN");
const gravitacion = document.querySelector(".GU");
const trabajo = document.querySelector(".TEP");
const hidrostatica = document.querySelector(".H");
const electricidad = document.querySelector(".EC");
const electromagnetismo = document.querySelector(".EM");
const ondas = document.querySelector(".O");
const efecto = document.querySelector(".EI");
const teoria = document.querySelector(".TR");

//Temas
const tem1 = document.getElementById("tem1");
const tem2 = document.getElementById("tem2");
const tem3 = document.getElementById("tem3");
const tem4 = document.getElementById("tem4");
const tem5 = document.getElementById("tem5");
const tem6 = document.getElementById("tem6");
const tem7 = document.getElementById("tem7");
const tem8 = document.getElementById("tem8");
const tem9 = document.getElementById("tem9");
const tem10 = document.getElementById("tem10");
const tem11 = document.getElementById("tem11");

//Eventos
let secciones = [tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11];

magnitudes.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem1.style.display = "flex";
});

movimiento.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem2.style.display = "flex";
});

leyes.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem3.style.display = "flex";
});

gravitacion.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem4.style.display = "flex";
});

trabajo.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem5.style.display = "flex";
});

hidrostatica.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem6.style.display = "flex";
});

electricidad.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem7.style.display = "flex";
});

electromagnetismo.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem8.style.display = "flex";
});

ondas.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem9.style.display = "flex";
});

efecto.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem10.style.display = "flex";
});

teoria.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem11.style.display = "flex";
});