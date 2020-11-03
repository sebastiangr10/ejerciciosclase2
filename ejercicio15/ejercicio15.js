let sandalias;
let tennis;
let mocasines;
let cliente;
let cantidadS;
let cantidadT;
let cantidadM;
let descuento;
let precioInicial;
let precioDescunto;
let precioFinal;

sandalias=Number(prompt("ingrese el precio de las sandalias"));
tennis=Number(prompt("ingrese el precio de los tennis"));
mocasines=Number(prompt("ingrese el precio de los mocasines"));
cliente=(prompt("nombre del cliente"));
cantidadS=(prompt("ingrese la cantidad de sandalias que compró el cliente"));
cantidadT=(prompt("ingrese la cantidad de tennis que compró el cliente"));
cantidadM=(prompt("ingrese la cantidad de mocasines que compró el cliente"));
precioInicial=((sandalias*cantidadS)+(tennis*cantidadT)+(mocasines*cantidadM))*1.55;
alert("el precio inicial de la compra incluida la ganancia del 55% del vendedor es " + precioInicial + " $");
console.log("el precio inicial de la compra incluida la ganancia del 55% del vendedor es " + precioInicial + "$");
descuento=precioInicial*0.08;
precioDescunto=precioInicial-descuento;
alert("el precio con descuento es " + precioDescunto + "$");
console.log("el precio con descuento es " + precioDescunto + "$");
precioFinal=precioDescunto*1.19;
alert("el precio final de su compra con el iva y el descuento incluido es " + precioFinal + "$")
document.write("el precio final de su compra con el iva y el descuento incluido es " + precioFinal + "$")
console.log("el precio final de su compra con el iva y el descuento incluido  es " + precioFinal + "$")