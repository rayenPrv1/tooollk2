const {default: axios} = require(`axios`)
const {PPage} = require(`puppeteer`)
/**
 * 
 * @param {PPage} PPage 
 * @returns {String} token
 */
async function get_token(PPage) {
    return await Page.evaluate(async () => {
        return document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token
})
}

module.exports = get_token