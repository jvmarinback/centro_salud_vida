const nombre = document.getElementById("name")
const apellido = document.getElementById("apelli")
const cedula = document.getElementById("cedula")
const numeroconsultorio = document.getElementById("consultorio")
const correo = document.getElementById("correo")
const especialidad = document.getElementById("especialidad")
const formularioresgistro = document.getElementById("formulario")

formularioresgistro.addEventListener("submit", function(event){
    event.preventDefault()
    //se crea el objeto medico para guardar los valores que ingresan en el
    //formulario
        const  medico = {
            nombre: nombre.value,
            apellido: apellido.value,
            cedula: cedula.value,
            consultorio: numeroconsultorio.value,
            correo: correo.value,
            especialidad: especialidad.value
        }
        let medicos = []
        let localMedicos = localStorage.getItem("medicos")
        if (localMedicos){
            medicos = JSON.parse(localMedicos)
        }
        medicos.push(medico)
        localStorage.setItem("medicos", JSON.stringify(medicos))
        alert("Medico registrado con exito")
    
})
