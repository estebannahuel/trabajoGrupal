console.clear()
const {argv} = require("process")
require('colors')
const moduloTareas = require('./tareas');




switch (argv[2].toLocaleLowerCase()) {
    case "listar":
    console.log(`************************
lista de tareas 
 ****************`.red)
        

    moduloTareas.listar()

        break;
      case "agregar":
         if ( [+argv[3],argv[4]].includes(undefined)){

          console.log("ERROR el numero de clase y titulo son obligarios");
          break;
         }
         if(isNaN(+argv[3])|| argv[3]<1){
          console.log("ERROR: el numerode clase no es valido");
          break;
         }
           
        let respuesta = moduloTareas.agregar(+argv[3],argv[4])
        console.log(respuesta);

         break;

         case "filtrar" :
          const estados = ["pendiente", "terminado", "en proceso"]
          if(!argv[3]){
           
            console.log("ERROR: el filtro no va ");
            break;
          }
            
          if(!estados.includes(argv[3].toLocaleLowerCase())){
            console.log("ERROR: el estado deve ser el siguiente pendiente | en proseso | terminado");
            break;
          }
          
         moduloTareas.filtrar(argv[3].toLocaleLowerCase())

           case "editar" :

           if ( [+argv[3],argv[4]].includes(undefined)){

            console.log("ERROR el numero  y el estado son obligarios");
            break;
           }
           if(isNaN(+argv[3])|| argv[3]<1){
            console.log("ERROR: el numerode clase no es valido");
            break;
           }
            moduloTareas.editar(+argv[3],argv[4])
            
            break;
            case "eliminar" :

            respuesta = moduloTareas.eliminar(+argv[3]);
                console.log(respuesta);
                break;
    default:
      console.log("ERROR no se que quieres hacer ");
        break;
}