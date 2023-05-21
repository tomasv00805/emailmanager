const correo = document.getElementById('correos');
//const templateCorreo = document.getElementById('template-correo').content;
const fragment = document.createDocumentFragment();
const correoseleccionado = document.getElementById('correo_seleccionado');
//const templateCorreoseleccionado = document.getElementById('template_correoseleccionado').content;
const loginForm = document.getElementById('login-form');

function cambiarColor(botonPresionado) {
  var botones = document.querySelectorAll('.boton-cambio');
  botones.forEach(function(boton) {
    if (boton !== botonPresionado) {
      boton.classList.remove('bg-red-500');
    }
  });
  botonPresionado.classList.toggle('bg-red-500');
}


fetch("http://localhost:3000/inbox/:username")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }
  );
const pintarCorreos = data => {
  data.forEach(correo => {
    templateCorreo.querySelector(".remitente").textContent = correo.from;
    templateCorreo.querySelector(".Asunto").textContent = correo.subject;
    templateCorreo.querySelector(".cuerpo").textContent = correo.body;
    const clone = templateCorreo.cloneNode(true);
    fragment.appendChild(clone);
  });
  correo.appendChild(fragment);
};


loginForm.addEventListener('submit', (e) => { 
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  fetch('http://localhost:3000/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(data => {
    //window.location.href = 'http://localhost:5500/webs/main.html';
    console.log(data);
    });
}
);