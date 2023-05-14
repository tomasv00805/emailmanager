const correo = document.getElementById('correos');
const templateCorreo = document.getElementById('template-correo').content;
const fragment = document.createDocumentFragment();

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
  data.forEach(correo => {
    templateCorreo.querySelector(".remitente").textContent = correo.correo;
    templateCorreo.querySelector(".Asunto").textContent = correo.asunto;
    templateCorreo.querySelector(".cuerpo").textContent = correo.mensaje.split(' ').slice(0, 10).join(' ');
    
    
    const clone = templateCorreo.cloneNode(true);
    fragment.appendChild(clone);
  });
  correo.appendChild(fragment);
};