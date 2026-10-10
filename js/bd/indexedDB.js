let db;

//Crear base de datos
export function abrirBaseDatos() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("CienciaTestDB", 1);

        request.onupgradeneeded = (e) => {
            db = e.target.result;

            db.createObjectStore("Usuarios", {
                keyPath: "id",
                autoIncrement: true
            });
        }

        request.onsuccess = (e) => {
            db = e.target.result;

            resolve(db);
        };

        request.onerror = (e) => {
            reject(e);
        };
    });
};

//Guardar usuarios
export function guardarUsuarios(nombre, correo, contrasenia) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction("Usuarios", "readwrite");

        const store = transaction.objectStore("Usuarios");

        const request = store.add({
            nombre,
            correo,
            contrasenia
        });

        request.onsuccess = () => {
            resolve("Usuario guardado");
        };

        request.onerror = (e) => {
            reject(e);
        };
    });
};

//Obtener usuarios
export function obtenerUsuarios() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction("Usuarios", "readonly");

        const store = transaction.objectStore("Usuarios");

        const request = store.getAll();

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = (e) => {
            reject(e);
        };
    });
};