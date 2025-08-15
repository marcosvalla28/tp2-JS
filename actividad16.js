let texto = prompt('Ingresa una cadena de texto');
let textoFinal = "";

for (let i = texto.length; i >= 0 ; i--){ 
    textoFinal = texto.charAt(i)
    document.write(textoFinal)
}
