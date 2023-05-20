class Usuario {
    nombre: string;
    correo: string;
    contraseña: string;
    bandejaEntrada: object[];
    bandejaEnviados: object[];
  
    constructor(nombre: string, correo: string, contraseña: string, bandejaEntrada: object[], bandejaEnviados: object[]) {
      this.nombre = nombre;
      this.correo = correo;
      this.contraseña = contraseña;
      this.bandejaEntrada = bandejaEntrada;
      this.bandejaEnviados = bandejaEnviados;
    }
    getNombre(){
        return this.nombre;
    }
    getCorreo(){
        return this.correo;
    }
    getContraseña(){
        return this.contraseña;
    }
    getBandejaEntrada(){
        return this.bandejaEntrada;
    }
    getBandejaEnviados(){
        return this.bandejaEnviados;
    }
    setNombre(nombre: string){
        this.nombre = nombre;
    }
    setCorreo(correo: string){
        this.correo = correo;
    }
    setContraseña(contraseña: string){
        this.contraseña = contraseña;
    }
    setBandejaEntrada(bandejaEntrada: object[]){
        this.bandejaEntrada = bandejaEntrada;
    }
    setBandejaEnviados(bandejaEnviados: object[]){
        this.bandejaEnviados = bandejaEnviados;
    }
  }