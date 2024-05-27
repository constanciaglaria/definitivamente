var zona= prompt ("Ingrese su zona o ciudad");
var fijo=1000;
var preciozona= 0;
function suma (preciozona, fijo){
    switch (zona) {
        case'oeste':
        preciozona=500;
        break;
        case'sur':
        preciozona=1000;
        break;
        case'norte':
        preciozona=1000;
        break;
        default:
           preciozona=-1000
    }
        var suma= preciozona+fijo;
       
        if(preciozona>=0){
            alert("el costo del servicio es " + suma)
        }else{
            alert("su zona esta fuera del radio, consulte por privado");
        }
    }
    suma(preciozona,fijo)