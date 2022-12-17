const get_token = require("./get_token")
const locked_check = require("./locked_check")
const { Page } = require("puppeteer")


class Funcs {
    constructor() {
    }
    
    /**
     * @param {Page} page 
     * @returns {String}
     */
    async get_token(page) {
        return await get_token(page)
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