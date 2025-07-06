function viajar(destino){
    if(destino === "Brasil"){
console.log ("Gire a la izquierda");
    } 
    
    else if(destino === "Argentina"){
        console.log ("Gire a la derecha");
    }

    else {
        console.log("Nos perdimos")
    }
        
}

viajar ("Colombia");

function puedeManejar (edad){
   if (edad >= 18) {
    console.log(true);
   }

   else {
    console.log (false);
   }

}

puedeManejar (15)

function puedeTomar(edad){
    if(edad >=21){
     console.log("Si puede tomar");
    }
        
   else{
    console.log("No puede tomar chamaco");
   }
}

puedeTomar (19)

function mayorDeEdad(edad){
    if(edad >= 18){
        console.log("Es mayor de edad");
    }
    else{
        console.log("Es menor de edad");
    }
}

mayorDeEdad (16)