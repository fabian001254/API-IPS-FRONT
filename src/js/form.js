import { Form } from './mandar.js';
import { medico } from './medico.js';
import { cita } from './cita.js';
import { paciente } from './paciente.js';
import { especialidad } from './especialidad.js';

const address = "http://localhost:3000/"
async function submitForm(event){
 event.preventDefault();
  const formType = window.formType;
  switch (formType) {
    case "Medico":
      await medico(address)
      break;
    case "Paciente":
      await paciente(address)   
      break;
    case "Cita":
        await cita(address)
      break;
    case "Especialidad":
        await especialidad(address)
      break;
    default:
      console.error("Tipo de formulario no válido.");
      break;
  }
}

async function init() {
  const form = new Form();
  await form.render();  
  const botonEnviar = form.getBotonEnviar();
  botonEnviar.addEventListener('click', submitForm);
}

init();
