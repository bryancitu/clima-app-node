const axios = require('axios')

const getClima = async (lat, lgn) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgn}&appid=a6166a4a9ca709232096708ee43e4666`)

    const temperatura = resp.data.main.temp;

    return {
        temperatura
    }
}

module.exports ={
    getClima
}