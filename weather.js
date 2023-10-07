#!/usr/bin/env node
import {gerArgs} from "./healper/args.js"
import {printHelp, printSuccess, printError, printWeather} from "./services/log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError("Не передан token")
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess("Token save")
    } catch (e) {
        printError(e.message)
    }
}
const saveCity = async (city) => {
    if (!city.length) {
        printError("Не передан город")
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess("City save")
    } catch (e) {
        printError(e.message)
    }
}

const getForcast = async () => {
    try {
        // const weather = await getWeather("limassol")
        const weather = await getWeather()
        printWeather(weather)
    } catch (e) {
        if (e?.response?.status === 404) {
            printError("Нверно указан город")
        } else if (e?.response?.status === 401) {
            printError("Неверно указан token")
        } else {
            printError(e.message)
        }
    }
}

const initCli = () => {
    const args = gerArgs(process.argv)
    if (args.h) {
        return printHelp()
    }
    if (args.c) {
        saveCity(args.c)
    }
    if (args.t) {
        return saveToken(args.t)
    }
    getForcast()
}
initCli()