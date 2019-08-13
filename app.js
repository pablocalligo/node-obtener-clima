const { argv } = require('./config/yargs')
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const getInfo = async(direccion) => {

    try {
        const geoInfo = await lugar.getLugarLatLng(argv.direccion)
        const temp = await clima.getClima(geoInfo.lat, geoInfo.lng)

        console.log(`El clima de ${direccion} es de ${temp}ºC`);
    } catch (error) {
        console.log(`No se pudo determinar el clima de ${direccion}`);
    }
}

getInfo(argv.direccion)