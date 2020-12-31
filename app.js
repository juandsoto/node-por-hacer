const { argv } = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando.toLowerCase()) {
    case 'crear':
        const tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        const listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('========Por Hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================='.green);
        }
        break;

    case 'actualizar':
        const actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        const borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        break;
}