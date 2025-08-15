let texto = prompt('Ingrese una cadena de texto');


for (let i = 0; i < texto.length ; i++) {
    let letra = texto.charAt(i)
    let posicion = texto.indexOf(letra)
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        document.write(`<p>La vocal '${letra}' esta en la posicion ${posicion}</p>`);
    }
}