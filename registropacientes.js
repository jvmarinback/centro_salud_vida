const nombre = document.getElementById("name")
const apellido = document.getElementById("apelli")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")
const formularioresgistro = document.getElementById("formulariop")

formularioresgistro.addEventListener("submit", function(event){
    event.preventDefault()
    //se crea el objeto medico para guardar los valores que ingresan en el
    //formulario
        const  paciente = {
            nombre: nombre.value,
            apellido: apellido.value,
            cedula: cedula.value,
            edad: edad.value,
            telefono: telefono.value,
            especialidad: especialidad.value
        }
        let pacientes = []
        let localpacientes = localStorage.getItem("pacientes")
        if (localpacientes){
            pacientes = JSON.parse(localpacientes)
        }
        pacientes.push(paciente)
        localStorage.setItem("pacientes", JSON.stringify(pacientes))
        alert("paciente registrado con exito")
    
})