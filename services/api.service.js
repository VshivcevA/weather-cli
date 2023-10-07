import {getKeyValue, TOKEN_DICTIONARY} from "./storage.service.js";
import axios from "axios";

const getWeather = async () => {
    // const token = await getKeyValue(TOKEN_DICTIONARY.token)
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token)
    if (!token) {
        throw new Error('Не задан API, Задайте через команду -t [api_key]')
    }
    const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
    if (!city) {
        throw new Error('Не задан город, Задайте через команду -c [city]')
    }
    const {data, } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params:{
            q:city,
            appid: token,
            lang: "ru",
            units: "metric"
        }
    })
    return data
}
export { getWeather }