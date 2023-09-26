
const fs = require('fs');
const  colors = require('colors');


const crearArchivo = async (base = 5, listar = false, n = 10) =>{

    if(listar){
        try {

            let salida = '';
        
            
            console.log(colors.blue("=========================="));
            console.log(colors.cyan(`Tabla del ${base}`));
            console.log(colors.blue("=========================="));
        
            for (let index = 1; index <= n; index++) {
                    salida += `${base} X ${index} = ${base * index} \n`;
                
            }
        
            if(salida){
                console.log(colors.rainbow(salida));
            }
        
                fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
                return `tabla-${base}.txt`
            } catch (error) {
                throw error
            }
        
    }   
    return `tabla-${base}.txt`


    // console.log(`tabla-${base}.txt creado`);


}

module.exports = {
    crearArchivo
}