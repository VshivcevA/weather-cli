#!/usr/bin/env node
import {gerArgs} from "./healper/args.js"
import {printHelp, printSuccess, printError} from "./services/log.service.js";
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
const initCli = () => {
    const args = gerArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        //     city
    }
    if (args.t) {
        return saveToken(args.t)
    }
    getWeather('limassol')
    // weather or ?
}
initCli()