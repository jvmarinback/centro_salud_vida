function mostrarmedicos(){
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if(localMedicos){
        medicos = JSON.parse(localMedicos)
    }
    const tablamedicos = document.getElementById("tabla-medicos")
    const cuerpotabla = tablamedicos.getElementsByTagName("tbody")[0]
    
    medicos.forEach(medico => {
        let fila = cuerpotabla.insertRow()
        let celdaNombreMedico = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaPacientes = fila.insertCell()

        celdaNombreMedico.textContent = medico.nombre
        celdaApellido.textContent = medico.apellido
        celdaNumeroCedula.textContent = medico.cedula
        celdaEspecialidad.textContent = medico.especialidad
        celdaConsultorio.textContent = medico.consultorio
        celdaCorreo.textContent = medico.correo
        celdaPacientes.textContent = "Sin asignar"
    });

}
mostrarmedicos()