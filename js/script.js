

function sumar(){
	console.log("Hola");
	let	num1 = document.getElementById("num1");
	let	num2 = document.getElementById("num2");
	let suma = parseInt(num1.value) + parseInt(num2.value);
	console.log("El resultado de la suma es:" + suma);
	let	ubicacionR = document.getElementById ("resultado-suma");
	ubicacionR.innerHTML=`<p class= "resul"> ${suma} </p>`; 

	num1.value ="";
	num2.value ="";
}
