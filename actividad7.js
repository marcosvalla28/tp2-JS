let numero = +prompt('Ingresa un numero (NO mayor que 50)')
let resultado = ""

if (numero <= +50) {
    for (let i = numero; i <= numero ; i--) {
        resultado = i
        console.log(String(resultado).repeat(i))
}
} else {
    console.log("No se acepta este numero")
}

