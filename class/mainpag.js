function cambiarColor(botonPresionado) {
  var botones = document.querySelectorAll('.boton-cambio');
  botones.forEach(function(boton) {
    if (boton !== botonPresionado) {
      boton.classList.remove('bg-red-500');
    }
  });
  botonPresionado.classList.toggle('bg-red-500');
}