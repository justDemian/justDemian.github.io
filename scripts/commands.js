const command_input = document.getElementById("direct-input");
const command_history = document.getElementById("input-lines");
let knowed = true;

command_input.addEventListener('keydown', function(event){
  if (event.key === "Enter"){
    // Crear un nuevo <p> en history
    const cmd = command_input.value.trim().toLowerCase().split(/\s+/);

    // rutt
    if (cmd[0] === 'rutt'){
      knowed = true;
      rutt(cmd);
    }

    // Limpiar el historial
    else if (cmd[0] === 'clear' || cmd[0] === 'cls'){
      knowed = true;
      command_history.innerHTML = '';
    }

    // Se escribe algo pero no se reconoce
    else if (cmd[0] !== '' && knowed){
      knowed = false;
      line('<span class="red">Comando desconocido</span> - intenta otra vez')
    }

    command_input.value = "";
  }
})

const rutt = (cont)=>{
  let info = '';
  line('ola')
  for (let i = 0; i < cont.lenght; i++) {
    info = cont[i] + 'hola'
    line('a');
  }
}

const line = (cont)=>{
  const new_entry = document.createElement('p');
  new_entry.innerHTML = cont;
  command_history.appendChild(new_entry);
}