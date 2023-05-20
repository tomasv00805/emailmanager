//importa el Emailmanager
import { EmailManager } from "../class/Emailmanager";
import * as fs from 'fs';
//creame el emailmanager y crea dos usuarios

let emailManager = new EmailManager([]);
emailManager.crearUsuario("usuario1", "usuario1@gmail.com", "1234", [], []);
emailManager.crearUsuario("usuario2", "usuario2@gmail.com", "1234", [], []);

//creame un email y envialo
emailManager.enviarCorreo("usuario1@gmail.com", ["usuario2@gmail.com"], "asunto", "cuerpo");

//imprime los usuarios
const jsonArray = JSON.stringify(emailManager.getUsuarios());

fs.writeFile('../api2.json', jsonArray, (error) => {
    if (error) {
      console.error('Error al guardar el archivo:', error);
      return;
    }
    console.log('El archivo se ha guardado correctamente.');
  });