const filas = parseInt(prompt('Ingrese el numero de filas'));
const columnas = parseInt(prompt('Ingrese el numero de columnas'));

let total = filas * columnas;

document.writeln("<table border>");

for (let indiceFila = 0 ; indiceFila < filas ; indiceFila++){
    document.writeln("<tr>")
    for (let indiceColumna = 0 ; indiceColumna < columnas ; indiceColumna++){
        document.writeln('<td>'+ total +'</td>');
        total--;
    }
    document.writeln("</tr>")
}

document.writeln("</table>")