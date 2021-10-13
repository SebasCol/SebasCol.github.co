function enviarCorreo(params){
    var tempParams = {
        nombre: document.getElementById("nombre").value,
        mensaje: document.getElementById("mensaje").value,
        asunto: document.getElementById("asunto").value,
        correo: document.getElementById("correo").value,
        telefono: document.getElementById("telefono").value,
       
    };
    
    
    emailjs.send("service_vpc4t96","template_v072kud",tempParams)
    .then(function(res){
        console.log("success",res.status);
        alert('Informacion enviada correctamente');
        location.reload();

    })
}