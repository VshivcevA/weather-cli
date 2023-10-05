#!/usr/bin/env node
import {gerArgs} from "./healper/args.js"
import {printHelp, printSuccess} from "./services/log.service.js";
const initCli = () => {
    const args = gerArgs(process.argv)
    console.log("args: ", args)
    console.clear()
    if (args.h) {
    //     вывод help
        printHelp()
    }
    if (args.s) {
    //     city
    }
    if (args.t) {
    //     toket
    }
    // weather or ?
}
initCli()