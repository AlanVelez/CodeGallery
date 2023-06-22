// Menu mobile open menu
document.addEventListener('DOMContentLoaded', function() {
    // Llamada a la función detectarClickEnlace()
    openMenu();
  });

  
function openMenu() {
    // Obtener el elemento del enlace por su id
    let enlace = document.getElementById('open-btn');
  
    // Agregar un event listener para el evento click
    enlace.addEventListener('click', function(event) {
      // Evitar el comportamiento predeterminado del enlace (navegación)
      event.preventDefault();
  
      let close = document.getElementsByClassName('mobile-menu');
      let back_g = document.getElementsByClassName('container');

      close[0].style.display = 'block';
      back_g[0].classList.add('filter-blur');
    });
  }
  