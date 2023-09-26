const { crearArchivo } =  require('./helpers/multiplicar')
const  argv  = require('./config/yargs')
require('colors');








console.clear();

console.log(`${argv}`.green);



if(argv.h){
    for (let index = 0; index <= argv.h; index++) {
        crearArchivo(index, argv.listar, argv.n)
        .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.green))
        .catch(error => console.log("error", error));
        
    }
}
