import chalk from "chalk"
import dedent from "dedent-js";
const printError = (error) => {
    console.log(chalk.red("ERROR: ") + error)
}
const printSuccess = (msg) => {
    console.log(chalk.green("SUCCESS: ") + msg)
}
const printHelp = () => {
    console.log(dedent(`
        
        ${chalk.cyan("HELP")}
        Вывод погоды
        -h помошь
        -c [city] установка города
        -t [api_key] установка токена
        
        `)
    )
}
const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
        case '01':
            return '☀️';
        case '02':
            return '🌤️';
        case '03':
            return '☁️';
        case '04':
            return '☁️';
        case '09':
            return '🌧️';
        case '10':
            return '🌦️';
        case '11':
            return '🌩️';
        case '13':
            return '❄️';
        case '50':
            return '🌫️';
        default:
            return '';
    }
};
const printWeather = (data) => {
    let {name,weather,main,wind} = data
    weather = weather[0]
    console.log(dedent(`
    
    ${chalk.bgYellow('Weather')}
    Город: ${name}
    Погода: ${weather.description} ${getIcon(weather.icon)}
    Температура: ${Math.round(main.temp)} \u2103
    Влажность: ${main.humidity} %
    Скорость ветра: ${Math.round(wind.speed)} м/с
    
    `))
}
export {printError,printSuccess,printHelp,printWeather}