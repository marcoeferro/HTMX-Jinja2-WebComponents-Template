// molecule: test
// Lógica de presentación y eventos del componente.

(function () {
  'use strict';

  const SELECTOR = '[data-molecule="test"]';

  function init() {
    document.querySelectorAll(SELECTOR).forEach((el) => {
      if (el.dataset.initialized) return;
      el.dataset.initialized = 'true';

      // --- lógica del componente aquí ---

    });
  }

  // Inicializa en carga y después de cada swap HTMX
  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('htmx:afterSwap',   init);
})();