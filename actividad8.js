let numero = +prompt("Ingresa un numero (no mayor que 50)")
let resultado = ""

if (numero <= 50) {
    for (let i = 0; i <= numero ;i++) {
    resultado += i 
    console.log(resultado)
}
} else {
    console.log('No es un numero valido')
}
