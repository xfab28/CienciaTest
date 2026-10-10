//Indices
const materia_universo = document.querySelector(".LMBU");
const materia_interior = document.querySelector(".LMI");
const enlace_quimico = document.querySelector(".EQ");
const transformaciones = document.querySelector(".TM");
const cantidad = document.querySelector(".CS");
const esquiometria = document.querySelector(".E");
const disoluciones = document.querySelector(".D");
const quimica = document.querySelector(".QO");
const biomoleculas = document.querySelector(".B");

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

//Eventos
let secciones = [tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9];

materia_universo.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem1.style.display = "flex";
});

materia_interior.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem2.style.display = "flex";
});

enlace_quimico.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem3.style.display = "flex";
});

transformaciones.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem4.style.display = "flex";
});

cantidad.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem5.style.display = "flex";
});

esquiometria.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem6.style.display = "flex";
});

disoluciones.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem7.style.display = "flex";
});

quimica.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem8.style.display = "flex";
});

biomoleculas.addEventListener("click", () => {
    for (let i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";    
    }

    tem9.style.display = "flex";
});