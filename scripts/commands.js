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

// RUT - Tool
const rutt = (cont)=>{
  // Asignación de valores
  let rutt_value = 0;
  let rutt_operation = "-null";
  let rutt_mod = "-null";
  let is_valid = true;

  let rutt_output = '<span  class="cya">RUT-Tool</span>: ';


  // Check de formato.
  if ([3,4].includes(cont.length)) {
    rutt_operation = cont[1];
    rutt_value = cont[2];
    if (cont.length === 4) {
      rutt_mod = cont[3];
    }
  } else {
    is_valid = false;
    line((rutt_output+'<span class="red">Error de formato</span> - comprueba el comando'));
  }

  if (is_valid) {
    switch(rutt_operation){
      // Búsqueda 
      case '-s':
        line((rutt_output+'Función de <span class="mag">Busqueda</span> en espera por implementar'));
        break;
      
      // Obtener valido
      case '-g':
        rutt_output += (rutt_value+'<span class="gre"> '+obtenerDigitoVerificador(rutt_value)+'</span>');
        line(rutt_output);
        break;

      // Validar
      case '-v':
        let vd = obtenerDigitoVerificador(rutt_value.slice(0, -1));
        if (rutt_value.slice(-1) === vd){
          rutt_output += rutt_value + ' es <span class="gre">valido</span>';
        } else {
          rutt_output += rutt_value+' <span class="red">no es valido</span> - '+rutt_value.slice(0, -1)+'<span class="gre">'+vd+'</span>'
        }

        line(rutt_output);
        break;
      
      default:
        line('<span  class="cya">RUT-Tool</span>: <span class="gol">Operación Desconocida</span> - ['+rutt_operation+'] inválida o no implmentada.');
    }
  }
}

const lines = (cont)=>{
  cont.forEach((text,index) => {
    setTimeout(() => { line(text); }, 500 * index)
  });
}

const line = (cont)=>{
  const new_entry = document.createElement('p');
  new_entry.innerHTML = cont;
  command_history.appendChild(new_entry);
}

function obtenerDigitoVerificador(rut) {
  let suma = 0;
  let multiplicador = 2;

  for (let i = rut.length - 1; i >= 0; i--) {
    suma += parseInt(rut[i]) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }

  const resto = 11 - (suma % 11);

  if (resto === 11) return '0';
  if (resto === 10) return 'K';
  return resto.toString();
}