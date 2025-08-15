let sumar = ""


    while (confirm('quieres seguir sumando') == true) {
    let numero = +prompt('Ingrese un numero')
    if (!isNaN(numero)) {
        sumar = numero + numero
    }else {
        alert(`no es un numero`)
    }
}

document.write(`${sumar}`)