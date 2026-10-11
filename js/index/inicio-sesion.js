import {
    abrirBaseDatos,
    obtenerUsuarios
} from "../bd/indexedDB.js";

await abrirBaseDatos();

//Variables
const correo_inicio = document.querySelector(".correo-inicio");
const contra_inicio = document.querySelector(".contra-inicio");
const aviso_inicio = document.querySelector(".aviso-inicio");
const btn_inicio = document.querySelector(".btn-inicio");

//Funcion especial
function limpiar() {
    setTimeout(() => {
        aviso_inicio.textContent = "";
        aviso_inicio.classList.remove("inicio-desaprobado");
    }, 2000);
}

function mensaje(clase, aviso) {
    aviso_inicio.classList.add(clase);
    aviso_inicio.textContent = aviso;
}

console.log("URL actual:", window.location.href);
console.log("Destino calculado:", new URL("../html/carga.html", window.location.href).href);
//Evento
btn_inicio.addEventListener("click", async () => {
    const usuarios = await obtenerUsuarios();

    for(const usuario of usuarios) {
        if (correo_inicio.value == usuario.correo && contra_inicio.value == usuario.contrasenia) {
            mensaje("inicio-aprobado", "Inicio de sesión realizado éxitosamente");

            setTimeout(() => {
                window.location.href = "/html/carga.html"
            }, 2000);

            break;
        } else {
            mensaje("inicio-desaprobado", "Correo o contraseña incorrectos");
            limpiar();
        }
    }

});