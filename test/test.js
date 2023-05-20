"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importa el Emailmanager
var Emailmanager_1 = require("../class/Emailmanager");
var fs = require("fs");
//creame el emailmanager y crea dos usuarios
var emailManager = new Emailmanager_1.EmailManager([]);
emailManager.crearUsuario("usuario1", "usuario1@gmail.com", "1234", [], []);
emailManager.crearUsuario("usuario2", "usuario2@gmail.com", "1234", [], []);
//creame un email y envialo
emailManager.enviarCorreo("usuario1@gmail.com", ["usuario2@gmail.com"], "asunto", "cuerpo");
//imprime los usuarios
var jsonArray = JSON.stringify(emailManager.getUsuarios());
fs.writeFile('api2.json', jsonArray, function (error) {
    if (error) {
        console.error('Error al guardar el archivo:', error);
        return;
    }
    console.log('El archivo se ha guardado correctamente.');
});
