import {
    abrirBaseDatos,
    guardarUsuarios
} from "../bd/indexedDB.js";

await abrirBaseDatos();

//Variables
const usuario = document.querySelector(".usuario");
const correo_registro = document.querySelector(".correo-registro");
const contra_registro = document.querySelector(".contra-registro");
const contra_confirm = document.querySelector(".contra-confirm");
const aviso_registro = document.querySelector(".aviso-registro");
const btn_registro = document.querySelector(".btn-registro");

//Funcion especial
function limpiar() {
    setTimeout(() => {
        aviso_registro.textContent = "";
        aviso_registro.classList.remove("registro-desaprobado");
    }, 2000);
}

function mensaje(clase, aviso) {
    aviso_registro.classList.add(clase);
    aviso_registro.textContent = aviso;
}

//Eventos
btn_registro.addEventListener("click", async () => {
    if (usuario.value.length > 40 || usuario.value.length < 5) {
        mensaje("registro-desaprobado", "Nombre de usuario inválido");
        limpiar();
    } else if (correo_registro.value.indexOf("@") == -1 || correo_registro.value.indexOf(".") == -1) {
        mensaje("registro-desaprobado", "Correo inválido");
        limpiar();   
    } else if (contra_registro.value.length > 20 || contra_registro.value.length < 5) {
        mensaje("registro-desaprobado", "Contraseña inválido");
        limpiar();
    } else if (contra_confirm.value != contra_registro.value) {
        mensaje("registro-desaprobado", "La contraseña es diferente");
        limpiar();
    } else {
        await guardarUsuarios(usuario.value, correo_registro.value, contra_registro.value);

        mensaje("registro-aprobado", "Registro realizado con éxito");

        setTimeout(() => {
            window.location.href = "CienciaTest/html/carga.html";
        }, 2000);
    }
});