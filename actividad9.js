let linea = "-------------------";

for (let i = 1; i <= 500; i++){
    
    if (i % 4 == 0) {
        console.log(`${i} (Multiplo de 4)`);
    }else if (i % 9 == 0){
        console.log(`${i} (Multiplo de 9)`);
    }else{
        console.log(i)
    }
    if (i % 5 == 0) {
        console.log(linea)
    }
}



