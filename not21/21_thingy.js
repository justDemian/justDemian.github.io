
// Movi mode
function esDispositivoMovil() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (esDispositivoMovil()) {
  document.getElementById("view_mode").href = 'mobile.css';
}


// Creación de la baraja
let cards = [];
let symbols = ["♠", "♥", "♦", "♣"];
let new_card = "";
let category = "";

for (let symbol=0 ; symbol<=3 ; symbol++) {
  for (let i=1 ; i<=13 ; i++){
    switch(i){
      case 1:
        category = "A";
        break;

      case 11:
        category = "J";
        break;

      case 12:
        category = "Q";
        break;

      case 13:
        category = "K";
        break;
      
      default:
        category = i.toString();
    }
    new_card = category + symbols[symbol];
    cards.push(new_card);
  }
}

// Iniciar Juego
let house = document.getElementById();