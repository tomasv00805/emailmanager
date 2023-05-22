const correo = document.getElementById('correos');
const fragment = document.createDocumentFragment();
const correoseleccionado = document.getElementById('correo_seleccionado');
const nombredeusuario = document.getElementById('nombreusermain');
const templateCorreoseleccionado = document.getElementById('template_correoseleccionado');
const loginForm = document.getElementById('login-form');
const botonsalir = document.getElementById('botonsalir');
let username = document.getElementById('username')
let password = document.getElementById('password')


function cambiarColor(botonPresionado) {
  var botones = document.querySelectorAll('.boton-cambio');
  botones.forEach(function(boton) {
    if (boton !== botonPresionado) {
      boton.classList.remove('bg-red-500');
    }
  });
  botonPresionado.classList.toggle('bg-red-500');
}



const pintarCorreos = data => {
  const templateCorreo = document.getElementById('template-correo').content;
  data.forEach(correo => {
    //se cargan los datos del correo en el template
    templateCorreo.querySelector(".remitente").textContent = correo.from;
    templateCorreo.querySelector(".Asunto").textContent = correo.subject;
    templateCorreo.querySelector(".cuerpo").textContent = correo.body;
    //se clona el template para unir todas sus partes
    const clone = templateCorreo.cloneNode(true);
    //se agrega el clone al fragment
    fragment.appendChild(clone);
  });
  //cargo el fragment en el div donde van a estar los correos
  correo.appendChild(fragment);
};
//funcion que redirecciona para obtener los correos dependiendo del usuario
function handleRoutes(){
  const savedUsername = localStorage.getItem('username');
  const path = window.location.pathname;
  if(path === '/webs/main.html'){
    fetch("http://localhost:3000/inbox/" + savedUsername)
      .then(res => res.json())
      .then(data => {
        pintarCorreos(data);
      });
  }
  if(path === '/webs/sent.html'){
    fetch("http://localhost:3000/sent/" + savedUsername)
      .then(res => res.json())
      .then(data => {
        pintarCorreos(data);
      }
      );
  }
}
//Cosas que solo se ejecutan en la pagina de main y send

if(window.location.pathname === '/webs/main.html' || window.location.pathname === '/webs/sent.html'){
  const savedUsername = localStorage.getItem('username');
  nombredeusuario.textContent = savedUsername;
  botonsalir.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'http://localhost:5500/index.html';
  }
  )
  //funcion para mostrar el formulario_correo cuadno haga clic en el boton con id botonenviarcorreo
  const botonenviarcorreo = document.getElementById('botonenviarcorreo');
  const formulario_correo = document.getElementById('formulario_correo');
  botonenviarcorreo.addEventListener('click', (e) => {
    e.preventDefault();
    templateCorreoseleccionado.classList.add("hidden");
    formulario_correo.classList.remove("hidden");
  }
  )
  //funcion para enviar el correo
  const botonenviar = document.getElementById('botonenviar');
  botonenviar.addEventListener('click', (e) => {
    e.preventDefault();
    const destinatario = document.getElementById('correopara').value;
    const asunto = document.getElementById('correoasunto').value;
    const cuerpo = document.getElementById('correocuerpo').value;
    const savedUsername = localStorage.getItem('username');
    fetch('http://localhost:3000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: savedUsername,
        to: destinatario,
        subject: asunto,
        body: cuerpo
      })
    })
      .then(res => res.json())
      .then(data => {
        if(data.error){
          alert(data.error);
        }else{
          alert('Correo enviado');
          formulario_correo.classList.add("hidden");
        }
      })
  }
  )
  
}

//Cosas que solo se ejecutan en la pagina index.html(login)
if(window.location.pathname === '/index.html'){
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(username.value === '' || password.value === ''){
      alert('Por favor, rellene todos los campos');
    }else{
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value
        })
      })
        .then(res => res.json())
        .then(data => {
          if(data.error){
            alert(data.error);
          }else{
            localStorage.setItem('username', username.value);
            window.location.href = 'http://localhost:5500/webs/main.html';
          }
        })
    }
  })
}


window.addEventListener('DOMContentLoaded', handleRoutes);