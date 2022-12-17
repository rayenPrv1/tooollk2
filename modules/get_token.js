const {default: axios} = require(`axios`)
const {Page} = require(`puppeteer`)
/**
 * 
 * @param {Page} page 
 * @returns {String} token
 */
async function get_token(page) {
    return await page.evaluate(async () => {
        return document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token
})
}

module.exports = get_token