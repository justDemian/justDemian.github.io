
// Movi mode
function esDispositivoMovil() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (esDispositivoMovil()) {
  document.body.classList.add('modo-movil');
  console.log("Modo móvil activado 📱");
} else {
  console.log("Modo escritorio 🖥️");
}