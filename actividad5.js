let numero = prompt("Ingrese su DNI (Apretar cancelar para salir)");  //EN ESTA LINEA PEDIMOS QUE INGRESE UN DNI

while (numero !== null) {                                              // EN ESTE BUCLE PRIMERO VERIFICAMOS SI EL DATO INGRESADO NO ES NULO 
    const dni = +numero;                                              //EN ESTA LINEA CREAMOS UNA CONSTANTE QUE PARSEA EL DATO INGRESADO ANTERIORMENTE
    if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {                  //EN ESTE IF PREGUNTAMOS SI EL DATO ES UN NUMERO Y SI ESTA ENTRE 0 Y 99.999.999
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const letra = letras.charAt(dni % 23);
        alert(`La letra segun el dni ingresado es: ${letra}`);
    } else {
        alert("Número Inválido. Debe ingresar un valor válido que este entre 0 y 99.999.999");        
    }
    numero = prompt('Ingrese un nuevo DNI (Apretar cancelar para salir)');
}

document.write('Fin del programa');