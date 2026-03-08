// template: test
// Lógica del layout de sección (nav activo, estado compartido, etc.).

(function () {
  'use strict';

  const SELECTOR = '[data-template="test"]';

  function init() {
    document.querySelectorAll(SELECTOR).forEach((el) => {
      if (el.dataset.initialized) return;
      el.dataset.initialized = 'true';

      // Marca el enlace de navegación activo según la URL actual
      const currentPath = window.location.pathname;
      el.querySelectorAll('[data-nav-link]').forEach((link) => {
        if (link.getAttribute('href') === currentPath) {
          link.classList.add('font-semibold', 'text-blue-600');
        }
      });

      // --- lógica del layout aquí ---

    });
  }

  // Inicializa en carga y después de cada swap HTMX
  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('htmx:afterSwap',   init);
})();