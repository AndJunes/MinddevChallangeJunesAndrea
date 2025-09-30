export function initNavbar() {
  const toggle = document.querySelector(".header__toggle");
  const nav = document.querySelector(".header__nav");
  const icon = toggle.querySelector("i");

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !expanded);
    nav.classList.toggle("header__nav--open");

    // Cambiar ícono
    if (expanded) {
      icon.className = "ri-menu-line";
      toggle.setAttribute("aria-label", "Abrir menú");
    } else {
      icon.className = "ri-close-line";
      toggle.setAttribute("aria-label", "Cerrar menú");
    }
  });

  // Cerrar menú al hacer clic en un enlace (para móviles)
  document.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove('header__nav--open');
        toggle.setAttribute('aria-expanded', 'false');
        icon.className = "ri-menu-line";
        toggle.setAttribute("aria-label", "Abrir menú");
      }
    });
  });
}