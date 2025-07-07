function redondearNumero(num) {
   // La función recibe un argumento llamado num el cual es un numero.
   // Debes redondear "num" al entero más próximo y retornarlo.
   // Por ejemplo: 
   // 1.5 ---> 2
   // 0.1 ---> 0
   // Tu código:

return Math.ceil(num);

}
console.log(redondearNumero(1.5))
module.exports = redondearNumero;

//Hecho