$(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000 // Tempo em milissegundos entre os slides (2 segundos neste caso)
    });
  });
  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}
