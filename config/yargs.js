const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const crear = {
    descripcion
}

const actualizar = {
    descripcion,
    completado: {
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea',
        default: true
    }
}

const borrar = {
    descripcion
}

const argv = require('yargs').command('crear', 'Crea una tarea por hacer', crear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', actualizar)
    .command('borrar', 'Elimina una tarea por hacer', borrar).help().argv;

module.exports = {
    argv
}