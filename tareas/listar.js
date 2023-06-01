const listar = function(encabezado = "LISTA DE TAREAS", tareas = this.tareas){ //recibo un array de tareas, y si no lo recibe va a hacer referencia a la propiedad tareas. La palabra reservada this hace referencia al obj donde estoy parado
    console.log(`\n******************* ${encabezado} *******************\n`.gray);
    tareas.forEach(({id, clase, titulo, estado}) => { //esta tarea es lo que recibo por parametro en la funcion de arriba y hago destructurin para llamar a clase titulo y estado en una linea, en el destructuring lleva parentesis porque es callback, sino no funca y tira error
        console.log(`CLASE: ${clase}: ${titulo} --> ${estado === "pendiente" ? estado.red : estado === "en proceso" ? estado.yellow : estado.green} [${id}]`) //esto resume al estar poniendo a cada rato clase.tarea titulo.tarea, etc
    });
    console.log('\n********************************************************\n'.gray);
}

module.exports = listar