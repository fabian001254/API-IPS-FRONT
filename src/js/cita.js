
import { mensajes } from "./mensaje.js";
export async function cita(address){
    const fechaC = document.getElementById("fecha").value;
    const fechaArray = fechaC.split("-")
    const fecha = fechaArray[2] + "-" + fechaArray[1] + "-" + fechaArray[0];
    const cedula = parseFloat(document.getElementById("cedulapaciente").value);
    const tarjeta =parseFloat(document.getElementById("tarjetaprofesional").value);
    const respuesta = await fetch(address + formType, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({ fecha:fecha, pacienteCedula:cedula, tarjetaProfesional:tarjeta})
    }); 
    mensajes(respuesta.status)
  }

  export async function tablaCitas(address){
    const data = await fetch(address + formType)
    const datos = await data.json();
    console.log(datos)
    const container = document.getElementById("container")
    const tabla = document.createElement('table')
    tabla.className = "table table-striped"
    const fila = tabla.insertRow();
    fila.className = "text-center";
    fila.insertCell().innerHTML = "Id Cita";
    fila.insertCell().innerHTML = "Fecha de la cita";
    fila.insertCell().innerHTML = "Nombre Medico";
    fila.insertCell().innerHTML = "Apellido Medico";
    fila.insertCell().innerHTML = "Cedula Paciente";
    fila.insertCell().innerHTML = "Nombre Paciente";
    fila.insertCell().innerHTML = "Apellido Paciente";
    
    console.log(datos)
    for (const citas of datos.citas){
        const fila = tabla.insertRow();
        fila.className = "text-center"; 
        fila.insertCell().innerHTML = citas.Id_Cita;
        const fecha = citas.Dia_Cita.split("T")
        fila.insertCell().innerHTML = fecha[0];
        fila.insertCell().innerHTML = citas.Nombre_Medico;
        fila.insertCell().innerHTML = citas.Apellido_Medico;
        fila.insertCell().innerHTML = citas.Cedula_Paciente;
        fila.insertCell().innerHTML = citas.Nombre_Paciente;
        fila.insertCell().innerHTML = citas.Apellido_Paciente;
    }

    container.appendChild(tabla);
}