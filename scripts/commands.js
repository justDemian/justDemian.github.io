let command_input = document.getElementById("direct-input");
let command_history = document.getElementById("input-lines");

command_input.addEventListener('keydown', function(event){
  if (event.key == "Enter"){
    const new_entry = document.createElement('p');
    new_entry.textContent = command_input.textContent;

    command_history.appendChild(new_entry);
  }
})