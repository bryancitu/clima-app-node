const axios = require('axios')

const getLugarLatLng = async (direccion) => {

    const encodedUlr = encodeURI( direccion)

    const resp = await axios.get(`https://geocode.xyz/${encodedUlr}?json=1`)

    const direc = resp.data.standard.city;
    const lat = resp.data.latt;
    const lng = resp.data.longt;

    return {
        direc,
        lat,
        lng
    }
}

module.exports ={
    getLugarLatLng
}