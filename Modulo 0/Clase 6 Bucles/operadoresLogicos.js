function mayorYmenor(num){
    if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
        else console.log(false);
        
}

mayorYmenor ()

function operadorOr(str){
    if (str === 'henry' || str.length < 2) console.log(true);
    else console.log(false);

}

operadorOr('j')

function negacion(permiso){
    if (!permiso) console.log('tiene permiso');
    else console.log('No tiene permiso');
    
}

negacion(false)