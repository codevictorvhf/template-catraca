function clickMenu() {
  // Obtemos a referência ao submenu
  var submenu = document.querySelector(".nav .menu li ul");

  // Alternamos a classe 'show' para exibir ou ocultar o submenu
  submenu.classList.toggle("show");
}
