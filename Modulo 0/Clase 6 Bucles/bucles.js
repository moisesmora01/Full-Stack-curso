var suma = 0;
//suma = suma + 1;
//suma = suma + 2;
//suma = suma + 3;
//suma = suma + 4;

//console.log(suma);


//for ( var o=0 ; o<10 ; o++){
    //suma = suma + 1;
    //console.log(suma);
    
//}

//while ( suma <3 ){
    //suma = suma + 1;
    //console.log(suma);
    
//}

for (let i = 0; i < 20; i+=2) {
   suma = suma + i;
   console.log('Variable de iteración: ', i);
}
console.log('Variable suma: ', suma);