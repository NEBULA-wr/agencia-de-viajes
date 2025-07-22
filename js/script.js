document.addEventListener('DOMContentLoaded', function() {

    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link'); // Seleccionamos todos los enlaces

    // --- LÓGICA DEL MENÚ DE NAVEGACIÓN ---

    // Función para mostrar el menú
    const showMenu = () => {
        if (navMenu && navToggle) {
            navMenu.classList.add('active');
        }
    };

    // Función para ocultar el menú
    const hideMenu = () => {
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    };
    
    // Abrir menú con el icono de hamburguesa
    if (navToggle) {
        navToggle.addEventListener('click', showMenu);
    }

    // Cerrar menú con el icono 'X'
    if (navClose) {
        navClose.addEventListener('click', hideMenu);
    }
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', hideMenu);
    });

    // --- FIN DE LÓGICA DE NAVEGACIÓN ---


    // Cambiar color del header al hacer scroll
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Menú desplegable en móvil (Tu código original, sigue siendo necesario)
    const dropdowns = document.querySelectorAll('.nav-menu .dropdown');
    if (window.innerWidth <= 992) {
        dropdowns.forEach(dropdown => {
            const dropdownToggle = dropdown.querySelector('a');
            dropdownToggle.addEventListener('click', (e) => {
                if(dropdown.querySelector('.dropdown-menu')) {
                    // Previene que se cierre el menú al abrir el submenú
                    e.stopPropagation(); 
                    e.preventDefault();
                    dropdown.querySelector('.dropdown-menu').classList.toggle('open');
                }
            });
        });
    }

    // === GALERÍA LIGHTBOX (Tu código, sin cambios) ===
    // ...

    // === GESTIÓN DE FORMULARIOS CON NOTIFICACIONES TOAST ===
    const showToast = (message, type = 'success') => {
        const toast = document.getElementById('toast-notification');
        if (!toast) return;

        toast.textContent = message;
        toast.className = 'toast show'; // Clases base
        toast.classList.add(type); // Añade 'success' o 'error'

        setTimeout(() => {
            toast.className = toast.className.replace('show', '');
        }, 3000);
    };

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aquí puedes añadir validación si quieres
            showToast('¡Gracias por tu mensaje! Te contactaremos pronto.', 'success');
            contactForm.reset();
        });
    }
    
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('¡Gracias por suscribirte a nuestro boletín!', 'success');
            newsletterForm.reset();
        });
    }
});