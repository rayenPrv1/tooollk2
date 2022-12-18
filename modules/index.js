const get_token = require("./get_token")
const locked_check = require("./locked_check")
const { PPage } = require("puppeteer")


class Funcs {
    constructor() {
    }
    
    /**
     * @param {PPage} PPage 
     * @returns {String}
     */
    async get_token(Page) {
        return await get_token(PPage)
    }

    /**
     * @param {String} token 
     * @returns {Boolean}
     */
    async locked_check(token) {
        return await locked_check(token)
    }
}

module.exports.Funcs = Funcs