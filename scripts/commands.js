const command_input = document.getElementById("direct-input");
const command_history = document.getElementById("input-lines");
let not_unknow = true;

command_input.addEventListener('keydown', function(event){
  if (event.key === "Enter"){
    // Crear un nuevo <p> en history
    const text = command_input.value.trim();
    text.toLowerCase();

    // Limpiar el historial
    if (text === 'clear'){
      not_unknow = true;
      command_history.innerHTML = '';
    }

    // rutt
    if (text.startsWith('rutt')){
      not_unknow = true;
      add_line('<span class="cyn">RUT</span> iniciado');
    }

    // Se escribe algo pero no se reconoce
    else if (text !== '' && not_unknow){
      not_unknow = false;
      add_line('<span class="red">Comando desconocido</span> - intenta otra vez');
    }
    command_input.value = "";
  }
})

const add_line = (content)=>{
  const new_entry = document.createElement('p');
  new_entry.innerHTML = content;
  command_history.appendChild(new_entry);
}