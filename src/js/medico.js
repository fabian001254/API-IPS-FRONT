import { mensajes } from "./mensaje.js";
    
    export async function medico(address){
        const tarjeta = parseFloat(document.getElementById('tarjetaprofesional').value);
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const consultorio = document.getElementById('consultorio').value;
        const correo = document.getElementById('correo').value;
        const especialidad = document.getElementById('especialidad').value;
        const respuesta = await fetch(address + formType, {
          "method": "POST",
          "headers": {
            "Content-Type": "application/json"
          },
          "body": JSON.stringify({ tarjetaProfesional: tarjeta, nombre:nombre, apellido:apellido, consultorio:consultorio, correo:correo, especialidad:especialidad })
        }); 
        mensajes(respuesta.status)
      }
    
    
    
    export async function tablaMedicos(address){
        const data = await fetch(address + formType)
        const datos = await data.json();
        console.log(datos)
        const container = document.getElementById("container")
        const tabla = document.createElement('table')
        tabla.className = "table table-striped"
        const fila = tabla.insertRow();
        fila.className = "text-center";
        fila.insertCell().innerHTML = "Tarjeta Profesional";
        fila.insertCell().innerHTML = "Nombre";
        fila.insertCell().innerHTML = "Apellido";
        fila.insertCell().innerHTML = "Consultorio";
        fila.insertCell().innerHTML = "Correo";
        fila.insertCell().innerHTML = "Especialidad";
    
        for (const medicos of datos.medicos){
            const fila = tabla.insertRow();
            fila.className = "text-center"; 
            fila.insertCell().innerHTML = medicos.tarjetaProfesional;
            fila.insertCell().innerHTML = medicos.nombre;
            fila.insertCell().innerHTML = medicos.apellido;
            fila.insertCell().innerHTML = medicos.consultorio;
            fila.insertCell().innerHTML = medicos.correo;
            fila.insertCell().innerHTML = medicos.especialidad;
        }

        container.appendChild(tabla);
    }

  