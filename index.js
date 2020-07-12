const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// argv.direccion

// lugar.getLugarLatLng(argv.direccion)
//             .then( console.log);

// clima.getClima(40.72180, -84.11829)
//             .then( console.log)
//             .catch(console.log)


const getInfo = async ( direccion ) => {

    try{
        mi_direccion = await lugar.getLugarLatLng(direccion)
        mi_temperatura = await clima.getClima(mi_direccion.lat, mi_direccion.lng)
        return {
            mi_direccion,
            mi_temperatura
        }
    } catch (e) {
        return direccion
    }
        
}

getInfo( argv.direccion )
        .then( console.log)
        .catch(console.log)