const letras = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const caracteresEspeciales = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const caracteresSoloLetras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";


function chequearLongitud(longitud){
      
      if ( longitud === undefined){
        return "Debe ingresar longitud";
      }

      if (typeof longitud === "string"){
        return "La longitud recibida no es válida";
      }

      if (longitud <3){
        return "La longitud debe ser mayor o igual a 3";
      }

         if (longitud >10){
        return "La longitud debe ser menor o igual a 10";
      }

      return "longitud"


}
