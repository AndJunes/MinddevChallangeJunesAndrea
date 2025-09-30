import { initNavbar } from "./modules/navbar.js";
import "./modules/contact.js";

document.addEventListener("DOMContentLoaded", () => {
    // Inicializar menú móvil
    initNavbar();

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Cerrar menú móvil si está abierto
                const nav = document.querySelector('.header__nav');
                const toggle = document.querySelector('.header__toggle');
                const icon = toggle.querySelector("i");
                
                nav.classList.remove('header__nav--open');
                toggle.setAttribute('aria-expanded', 'false');
                icon.className = "ri-menu-line";
                toggle.setAttribute('aria-label', 'Abrir menú');

                // Scroll suave
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Actualizar navegación activa al hacer scroll
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.header__nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('header__nav-link--active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('header__nav-link--active');
            }
        });
    }

    // Actualizar navegación al cargar y al hacer scroll
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav);

    // Botones que redirigen a otras secciones
    document.getElementById('btnGetStarted')?.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('btnGoServices')?.addEventListener('click', () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('btnGoContact')?.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});