let nota = +prompt('Ingresa una nota del 0 - 10')

switch (true) {
    case nota <= 2 :
        alert('Muy deficiente')
        break;

    case nota <= 4 :
        alert('Insuficiente')
        break;

    case nota <= 6 :
        alert('Suficiente')
        break;    

    case nota == 7 :
        alert('Bien')
        break;
        
    case nota <= 9 :
        alert('Notable')
        break;
        
    case nota == 10 :
        alert('Sobresaliente')
        break;    
        
    default:
        alert('Numero erroneo')
        break;
}