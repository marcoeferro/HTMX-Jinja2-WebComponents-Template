// page: test
// Lógica específica de esta página. Orquesta organismos y moléculas.

(function () {
  'use strict';

  const SELECTOR = '[data-page-component="test"]';

  function init() {
    document.querySelectorAll(SELECTOR).forEach((el) => {
      if (el.dataset.initialized) return;
      el.dataset.initialized = 'true';

      // --- lógica de la página aquí ---

    });
  }

  // Inicializa en carga y después de cada swap HTMX
  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('htmx:afterSwap',   init);
})();