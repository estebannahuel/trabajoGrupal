const {leerJSON, escribirJSON} = require("../data")
//const Tarea = require("./Tareas")


module.exports = {
    tareas: leerJSON(),
    listar : require("./listar"), 
    //agregar : require("./agregar"), 
    //filtrar: require("./filtrar"),
    editar : require("./editar"), 
    //eliminar : require("./eliminar")
        

    
}