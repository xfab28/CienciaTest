//Variables
const btn_fisica = document.querySelector(".btn-fisica");
const btn_quimica = document.querySelector(".btn-quimica");
const btn_biologia = document.querySelector(".btn-biologia");

//Eventos
btn_fisica.addEventListener("click", () => {
    window.location.href = "../html/fisica.html";
});

btn_quimica.addEventListener("click", () => {
    window.location.href = "../html/quimica.html";
});

btn_biologia.addEventListener("click", () => {
    window.location.href = "../html/biologia.html";
});