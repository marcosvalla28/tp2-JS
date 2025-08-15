let texto = prompt('Ingrese un texto');
let vocal = "";

for (let i = 0 ; i < texto.length ; i++){
    let letra = texto.charAt(i);
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        vocal += letra
    }
}

document.write(vocal.length)

