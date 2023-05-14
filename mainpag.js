const correos = document.getElementById('correos');
const templateCorreo = document.getElementById('template-correo').content;

function cambiarColor(botonPresionado) {
  var botones = document.querySelectorAll('.boton-cambio');
  botones.forEach(function(boton) {
    if (boton !== botonPresionado) {
      boton.classList.remove('bg-red-500');
    }
  });
  botonPresionado.classList.toggle('bg-red-500');
}

document.addEventListener('DOMContentLoaded', function() {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch('../api.json');
    const data = await res.json();
    pintarCorreos(data);
  } catch (error) {
    console.log(error);
  }
};

const pintarCorreos = data => {
  console.log(data);
  data.forEach(correo => {
    templateCorreo.querySelector()
}