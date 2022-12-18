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
const modules = require(`./modules/index.js`)
const funcs = new modules.Funcs()


const {default: axios} = require("axios");
const playwright = require("playwright");
const proxies = fs.readFileSync("./proxies.txt").toString().replace(/\r/gi, "").split("\n");

(async  function() {
    while (true) {
        for(let proxy of proxies){
            await GenerateToken(proxy);
        }
    }
})();

function GenerateToken(Proxy) {
    return new Promise(async function(resolve) {
        console.log("[STARTED] " + Proxy);
        const PBrowser = await playwright.firefox.launch({headless: false, proxy:{server:Proxy}});
        const PContext = await PBrowser.newContext();
        const PPage = await PContext.newPage();
        var startTime = Date.now();
        try {
            try {
                await PPage.goto("https://discord.com/", {"timeout": 60000, "waitUntil": "networkidle"});
                console.log("[WORKING] " + Proxy);
            }
            catch {
                console.log("[BAD] " + Proxy);
                throw false;
            }
            const button = await PPage.waitForSelector(`.gtm-click-class-open-button`, {timeout: 900000})
            await button.click()
            const button2 = await PPage.waitForSelector(`.username-1XgXmI`, {timeout: 900000})
            await button2.type(`${usernames[Math.round(Math.random() * usernames.length)]}`)
            const button3 = await PPage.waitForSelector(`.buttonBrand-24ECS3`, {timeout: 900000})
            await button3.click()
            

        const button4 = await PPage.waitForSelector(`#react-select-2-input`, {timeout: 900000})
        await button4.type("January\n");
        
        const button5 = await PPage.waitForSelector(`#react-select-3-input`, {timeout: 900000})
        await button5.type("1\n");
        
        const button6 = await PPage.waitForSelector(`#react-select-4-input`, {timeout: 900000})
        await button6.type("1950\n\n");
        
        const button7 = await PPage.waitForSelector(`button.close-hZ94c6`, {timeout: 900000});
        await button7.click("button.close-hZ94c6");


  
setTimeout(async () => {
    const token =  funcs.get_token(PPage)
    const read =  fs.readFileSync(`./tokens.txt`, {encoding: 'utf-8'}) || ``
    await fs.writeFileSync(`./tokens.txt`, `${read}\n${token}`)
    const button8 = await PPage.waitForSelector(`#react-select-2-input`, {timeout: 900000})
     button8.type(`24`)
     PPage.keyboard.press("Enter")
    const button9 = await PPage.waitForSelector('#react-select-3-input', {timeout: 900000})
     button9.type("1")
    await PPage.keyboard.press("Enter")
    const button10 = await PPage.waitForSelector('#react-select-4-input', {timeout: 900000})
     button10.type(`1988`)
    }, 90000);
    }

    catch {
        console.error("[ERROR] " + Proxy);
        }
        
        resolve(startTime + 150000 - Date.now());
        }, );
        }
        
      
            