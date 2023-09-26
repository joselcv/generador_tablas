const argv =require('yargs')
                .option('b',{
                    alias: 'base',
                    type:'number',
                    demandOption:true,
                    describe:'Es la base de la tabla de multiplicar'
                })
                .check((argv,options)=>{
                    console.log('yargs ',argv);
                    if(isNaN(argv.b)){
                        throw 'la base tiene que ser un numero'
                    }
                    return true;
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    default:false,
                    describe:'Muestra la tabla en consola'
                    
                })
                .option('h',{
                    alias:'hasta',
                    type:'number',
                    describe:'Cantidad de tablas',
                }).check((argv,options)=>{
                    if(isNaN(argv.h)){
                        throw 'Debe ser un numero'
                    }
                    return true;
                })
                .option('n',{
                    alias:'limit',
                    type:'number',
                    describe:'Limite de cada tabla',
                }).check((argv,options)=>{
                    if(isNaN(argv.n)){
                        throw 'Debe ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv