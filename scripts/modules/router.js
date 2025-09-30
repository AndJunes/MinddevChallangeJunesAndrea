export class Router {
    constructor() {
        this.currentView = null;
        
        this.setupNavigation();
        
        // Manejar navegación del navegador (back/forward)
        window.addEventListener('popstate', () => {
            this.loadView(window.location.hash.slice(1) || 'home');
        });

        // Cargar vista inicial basada en el hash de la URL
        const initialView = window.location.hash.slice(1) || 'home';
        this.loadView(initialView);
    }

    setupNavigation() {
        document.querySelectorAll('[data-target]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = e.currentTarget.dataset.target;
                this.navigate(target);
            });
        });
    }

    navigate(viewId) {
        // Actualizar URL sin recargar la página
        window.history.pushState({}, '', `#${viewId}`);
        this.loadView(viewId);
    }

    loadView(viewId) {
        // Ocultar vista actual
        if (this.currentView) {
            this.currentView.classList.remove('active');
        }

        // Mostrar nueva vista
        this.currentView = document.getElementById(viewId);
        if (this.currentView) {
            this.currentView.classList.add('active');
            this.updateActiveNav(viewId);
            
            // Scroll suave al top de la vista
            this.currentView.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Vista por defecto si no existe
            this.loadView('home');
        }
    }

    updateActiveNav(viewId) {
        // Remover clase active de todos los enlaces
        document.querySelectorAll('[data-target]').forEach(link => {
            link.classList.remove('header__nav-link--active');
        });
        
        // Agregar clase active al enlace actual
        const activeLink = document.querySelector(`[data-target="${viewId}"]`);
        if (activeLink) {
            activeLink.classList.add('header__nav-link--active');
        }
    }
}