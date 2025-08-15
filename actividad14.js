let texto = prompt("Ingrese un texto");

for (let i = 0 ; i < texto.length ; i++) {
    let letra = texto.charAt(i);
    document.write(`${letra}-`)
}
