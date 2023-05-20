import { Usuario } from "./Usuario";

class EmailManager {
    usuarios: Usuario[];
  
    constructor(usuarios: Usuario[]) {
      this.usuarios = usuarios;
    }
  }