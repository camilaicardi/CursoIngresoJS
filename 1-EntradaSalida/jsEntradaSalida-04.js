/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{ 
	// primer paso:
	var nombre;

// seg paso: al nombre le doy un significado
 nombre = prompt("ingrese su nombre");

// copio el nombre de la variable nombre dentro de la caja de texto html. con la fun documt y el id 
 document.getElementById("txtIdNombre").value = nombre;
	
  

 

}

