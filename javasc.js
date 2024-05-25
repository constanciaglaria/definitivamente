var nombre= prompt("Ingrese su nombre");
function saludo(nombre){
   if(!nombre==""){
    alert("Bienvenido " + nombre)
   } else{
        alert("Por favor ingrese su nombre")
    
    }
}

saludo(nombre)