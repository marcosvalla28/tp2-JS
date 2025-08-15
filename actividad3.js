let textoFinal = "";

while (confirm("Presionar el boton") == true) {
    let texto = prompt('Escriba una cadena de oracion')
    textoFinal += texto + "-";
}
document.write(textoFinal)


