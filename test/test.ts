//importa el Emailmanager
import { EmailManager } from "../class/Emailmanager";
import {Getjson} from "../class/Eljson";
//creame el emailmanager y crea dos usuarios

let emailManager = new EmailManager([]);
console.log (emailManager.usuarios);
Getjson(emailManager);
console.log (emailManager.usuarios);

//crear usuario
emailManager.enviarCorreo("pepe@gmail.com", ["usuario2@gmail.com","usuario1@gmail.com"],"hola","chau");

console.log(emailManager.usuarios);