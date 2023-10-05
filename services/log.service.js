import chalk from "chalk"
import dedent from "dedent-js";
const printError = (error) => {
    console.log(chalk.red("ERROR: ") + error)
}
const printSuccess = (error) => {
    console.log(chalk.green("ERROR: ") + error)
}
const printHelp = () => {
    console.log(dedent(
        `
        ${chalk.cyan("HELP")}
        Вывод погоды
        -h помошь
        -s [city] установка города
        -t [api_key] установка токена
        `
        )

    )
}

export {printError,printSuccess,printHelp}