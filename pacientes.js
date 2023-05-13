function mostrarpacientes(){
    let pacientes = []
    let localpacientes = localStorage.getItem("pacientes")
    if(localpacientes){
        pacientes = JSON.parse(localpacientes)
    }
    console.log(pacientes,localpacientes)
    const tablapacientes = document.getElementById("tabla-pacientes")
    const cuerpotabla = tablapacientes.getElementsByTagName("tbody")[0]
    
    pacientes.forEach(paciente => {
        let fila = cuerpotabla.insertRow()
        let celdanombre = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaedad = fila.insertCell()
        let celdatelefono = fila.insertCell()
        

        celdanombre.textContent = paciente.nombre
        celdaApellido.textContent = paciente.apellido
        celdaNumeroCedula.textContent = paciente.cedula
        celdaEspecialidad.textContent = paciente.especialidad
        celdaedad.textContent = paciente.edad
        celdatelefono.textContent = paciente.telefono
        
    });

}
mostrarpacientes()