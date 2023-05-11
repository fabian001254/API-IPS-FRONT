import { tablaCitas } from "./cita.js";
import { tablaEspecialidad } from "./especialidad.js";
import { tablaMedicos } from "./medico.js";
import { tablaPacientes } from "./paciente.js";

const address = "http://localhost:3000/"
export async function renderT(){
    const formType = window.formType;
    const container = document.getElementById("container");
    const titulo = document.createElement("h1");
    titulo.className = "text-center mt-2 mb-4";
    titulo.innerHTML = " Tabla de "+formType
    container.appendChild(titulo);
    switch(formType) {
        case "Medico":
            await tablaMedicos(address)
            break
        case "Especialidad":
            await tablaEspecialidad(address)
            break
        case "Paciente":
            await tablaPacientes(address)
            break
        case "Cita":
            await tablaCitas(address)
            break
    }
}

renderT()