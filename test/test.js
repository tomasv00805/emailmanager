"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importa el Emailmanager
var Emailmanager_1 = require("../class/Emailmanager");
var Eljson_1 = require("../class/Eljson");
//creame el emailmanager y crea dos usuarios
var emailManager = new Emailmanager_1.EmailManager([]);
console.log(emailManager.usuarios);
(0, Eljson_1.Getjson)(emailManager);
console.log(emailManager.usuarios);
//crear usuario
emailManager.enviarCorreo("pepe@gmail.com", ["usuario2@gmail.com", "usuario1@gmail.com"], "hola", "chau");
console.log(emailManager.usuarios);
