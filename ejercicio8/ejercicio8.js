let nombre;
let horasT;
let valorHora;
let sueldo;
nombre=(prompt("ingrese su nombre"))
horasT=Number(prompt("ingrese las horas trabajadas"))
valorHora=Number(prompt("ingrese el valor de la hora"))
sueldo=parseint (horasT*valorHora);
alert("su sueldo " + nombre + "es " + sueldo + "$")
document.write("su sueldo " + nombre + "es " + sueldo + "$")
console.log("su sueldo " + nombre + "es " + sueldo + "$")