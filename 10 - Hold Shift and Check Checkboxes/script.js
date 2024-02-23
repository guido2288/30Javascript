const inputs = document.querySelectorAll('input');

let lastCheck;

const handleCheck = (e) => {
  let inBetween = false;
  if(e.shiftKey  && this.checked) {
    inputs.forEach(checkbox => {
      if(checkbox === this || checkbox === lastCheck) {
        inBetween = !inBetween; 
      }

      if(inBetween){
        checkbox.checked = true;
      }
    });
  }
  lastCheck = this
  
}

inputs.forEach(input => {
  
  input.addEventListener("click", handleCheck)

});