function validar() {
    var nombre = document.formulario.txt_nombre.value
    var edad = document.formulario.txt_edad.value
    var correo = document.formulario.txt_correo.value
    var medicamento = document.formulario.txt_medicamento.value
    var direccion = document.formulario.txt_direccion.value
    var rut = document.formulario.txt_rut.value
    var telefono = document.formulario.txt_telefono.value
    var farmacia = document.formulario.opt_comuna.value
    var edad = document.formulario.txt_edad.value
    var fecha = document.formulario.txt_fecha.value
    var comentarios = document.formulario.txa_descripcion.value
   
    if(medicamento.length < 4) {
        alert("El medicamento debe tener más 3 carácteres");
        document.formulario.txt_medicamento.focus();
        return false;
    }

    if(nombre.length < 4) {
        alert("Nombre debe tener más 3 carácteres");
        document.formulario.txt_nombre.focus();
        return false;
    }

    if(rut.length < 9 || rut.length > 10 || rut.indexOf('-') < 0 || rut.indexOf('.') > 1) {
        alert("El rut debe tener de 9 a 10 carácteres, llevar guión y sin puntos (.)")
        document.formulario.txt_rut.focus();
        return false;
    }

    if(parseInt(edad) < 18 || parseInt(edad) > 65) {
           alert("Edad debe ser entre 18 y 65");
           document.fomulario.txt_edad.focus();
           return false;
    }

    if(telefono.length < 9 || !telefono.startsWith(9) || telefono.indexOf('+') > 1 || telefono.indexOf('-') > 1) {
        console.log(telefono.length == 9)
        alert("El teléfono debe ser de 9 carácteres, no debe llevar guión y tampoco signo más (+)")
        document.formulario.txt_telefono.focus();
        return false;
    }
    
    if(correo.indexOf('@') < 0 || correo.indexOf('.') < 0 ) {
        alert("Correo debe incluir un @ y un punto");
        docuement.formulario.txt_correo.focus();
        return false;
    }
    
    if(direccion.length < 4) {
        alert("Dirección debe tener más 3 carácteres");
        document.formulario.txt_direccion.focus();
        return false;
    }
    
    if(fecha.length == 0 || farmacia.length == 0 || edad.length == 0) {
        return false;
    }

    alert("Datos ingresados correctamente: " +
        "\nNombre medicamento: "+ medicamento +
        "\nFarmacia: "+ farmacia +
        "\nNombre: "+ nombre +
        "\nRut: "+ rut +
        "\nEdad: "+ edad +
        "\nDirección: "+ direccion +
        "\nTeléfono: "+ telefono +
        "\nEmail: "+ correo +
        "\nFecha: "+ fecha +
        "\nComentarios: "+ comentarios
    );

    document.formulario.action = "eva-3.html";
    document.formulario.submit() = true
}