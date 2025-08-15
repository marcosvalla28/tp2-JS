let nombre1 = prompt("Ingrese su nombre");
let edad1 = +prompt("Ingrese su edad");
let nombre2 = prompt("Ingrese un segundo nombre");
let edad2 = +prompt("Ingrese su edad");
let nombre3 = prompt("Ingrese un tercer nombre");
let edad3 = +prompt("Ingrese su edad");
let mayor = Math.max(edad1, edad2, edad3)

if (mayor == edad1) {
    document.write(nombre1)
}else if (mayor == edad2) {
    document.write(nombre2)
}else{
    document.write(nombre3)
}