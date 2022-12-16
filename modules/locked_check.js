const { default: axios } = require("axios")

const functions = require(`./index.js`)
const discordJS = require(`discord.js`)

/**
 * @param {String} token The token of the account you'd like to validate.
 */
async function locked_check(token) {
    if(!token) throw new Error(`Please validate your args, there should be a token.`)

    const req = await axios({
        url: `https://discord.com/api/v9/users/@me`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if(req.status == 200) return false
    else return true
}
module.exports = locked_check