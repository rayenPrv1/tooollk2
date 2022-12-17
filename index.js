const puppeteer = require(`puppeteer`)
const fs = require(`node:fs`)
const usernames = [
    "KLLLO JAVA",
    "AMAZING PYTHOIOR",
    "MEOWLETCOLL",
    "SadLAfee",
    "7OBBY LOVE",
    "انا حلوو تجمرا",
    "كفل علي !",
    "زوزو كريمة",
    "حلى ترك لول",
    "احلى ترك خخ"
]
const ReCaptchaRemover = __dirname + `\\extensions\\0.3.3_0`
const proxyChain = require(`proxy-chain`)
const modules = require(`./modules/index.js`)
const funcs = new modules.Funcs()

const ok = async () => {
    const brws = await puppeteer.launch({
        headless: false,
        executablePath: `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`,
        args: [
            `--disable-extensions-except=${ReCaptchaRemover}`,
            `--load-extension=${ReCaptchaRemover}`
          ],
    })
    const page = await brws.newPage()
    
    page.setDefaultTimeout(120000)

    await page.goto(`https://discord.com`)
     const button = await page.waitForSelector(`.gtm-click-class-open-button`, {timeout: 900000})
    await button.click()
    const button2 = await page.waitForSelector(`.username-1XgXmI`, {timeout: 900000})
    await button2.type(`${usernames[Math.round(Math.random() * usernames.length)]}`)
    const button3 = await page.waitForSelector(`.buttonBrand-24ECS3`, {timeout: 900000})
    setTimeout(async () => {
        await button3.click()
        console.log(`[ Captcha ] ~ Solving.. `)
        setTimeout(async () => {
            const token = await funcs.get_token(page)
            const read = await fs.readFileSync(`./tokens.txt`, {encoding: 'utf-8'}) || ``
            await fs.writeFileSync(`./tokens.txt`, `${read}\n${token}`)
            const button4 = await page.waitForSelector(`#react-select-2-input`, {timeout: 900000})
            await button4.type(`24`)
            await page.keyboard.press("Enter")
            const button5 = await page.waitForSelector('#react-select-3-input', {timeout: 900000})
            await button5.type("1")
            await page.keyboard.press("Enter")
            const button6 = await page.waitForSelector('#react-select-4-input', {timeout: 900000})
            await button6.type(`1988`)
        }, 70000);
    }, 3000);
}
ok()