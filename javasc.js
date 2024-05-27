//var nombre= prompt("Ingrese su nombre");
//function saludo(nombre){
  // if(!nombre==""){
    //alert("Bienvenido " + nombre)
   //} else{
     //   alert("Por favor ingrese su nombre")
    
    //}
//}

//saludo(nombre)

var edad= prompt("Por favor ingrese su edad");
    if(edad>=18){
        alert("Bienvenido, puedes ingresar a nuestra pagina")
    }else{
        alert("Usted es menor de edad, entra a nuestro sitio bajo su responsabilidad")
    }
//<button on click="go-home();"></button>
//function go-home(){
//    window.location.href="about:blank";
//}
document.getElementById('whatsappButton').addEventListener('click', function() {
    const phoneNumber = '3364526842'; 
    const message = 'Hola, me gustaría obtener más información.'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}); 

window.addEventListener('beforeunload', function(event) {
    const message = '¿Estás seguro de que quieres salir?';
    event.preventDefault();  
    event.returnValue = message; 
    return message;
});