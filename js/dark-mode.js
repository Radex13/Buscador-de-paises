const btnDark = document.querySelector('.btn-dark-mode');

// Verificar si hay un valor en localStorage
const currentMode = localStorage.getItem('dark-mode');

// Si existe un valor en localStorage, usarlo
if (currentMode === 'dark') {
  document.body.classList.add('dark-mode');
  btnDark.innerHTML = `
    <i class="fa-regular fa-sun"></i>
    Modo Claro
  `;
}

btnDark.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Guardar el valor del modo actual en localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'dark');
    btnDark.innerHTML = `
      <i class="fa-regular fa-sun"></i>
      Modo Claro
    `;
  } else {
    localStorage.setItem('dark-mode', 'light');
    btnDark.innerHTML = `
      <i class="fa-sharp fa-regular fa-moon"></i>
      Modo Oscuro
    `;
  }
});
