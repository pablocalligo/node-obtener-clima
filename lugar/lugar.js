const axios = require('axios')

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': '25558cc75bmshc86eefe72ad4445p1505eejsn0d6a5b1b8edd' }
    })

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0]
    const { name, lat, lon } = data

    return {
        direccion: name,
        lat,
        lng: lon
    }
}

module.exports = {
    getLugarLatLng
}