/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formulario-contacto');
  const mensajeRespuesta = document.getElementById('mensaje-respuesta');

  formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // detiene el envío tradicional y recarga

    const formData = new FormData(formulario);

    fetch('contacto.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      mensajeRespuesta.innerHTML = data;  // Mostrar mensaje
      formulario.reset();                  // Limpiar formulario
    })
    .catch(() => {
      mensajeRespuesta.innerHTML = " Hubo un error de conexión.";
    });
  });
});