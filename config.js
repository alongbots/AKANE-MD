/*
 * Base By Richie 
 * Created On 11/10/2024
 * Contact Me on tg t.me/hmmletts 
*/

const chalk = require("chalk")
const fs = require("fs")
require('dotenv').config(); 

//================= { SETTINGS } =================\\
global.owner = process.env.OWNER_NUMBER || "917005972085"; // owner number 
global.botimg = process.env.BOT_IMG || "https://files.catbox.moe/l9gpzm.jpg"
global.previewLink = process.env.PREVIEW_LINK || ""
global.sudo = process.env.SUDO  || " ";
global.ownername = process.env.OWNER_NAME || "AKUM";
global.botname = process.env.BOT_NAME || "AKANE"
global.onlypc = process.env.ONLYPC_MSG  || "Sorry buddy the bot won't work directly in group chat to reduce spam use in private chat";
global.onlygc = process.env.ONLYGC_MSG  || "Sorry buddy the bot won't work directly in private chat to reduce spam use in group";
global.session = process.env.SESSION_ID || "Akane-Md_895ee314ca4daaedc1387e659c4dbd78"
global.timezone = process.env.TIME_ZONE || "NAGALAND";


//======= Don't touch =======\\
global.msg = {
    succes: 'Success',
    owner: 'This feature could be used by AKUM only',
	admin: 'This feature could be used by group admin only',
	BotAdmin: 'This feature could be used when the bot is an admin only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'processing...',
    linkm: 'Where is the link?',
    ban: 'Sorry you have been banned 🚶from using command contact owner to unban ❌'
    }
 // cpanel Richie
 global.egg = "15"
global.nestid = "5" // nest ID
global.loc = "1"
global.domain = "https://www.along-bots.zone.id"
global.apikey = "add_api_key"
global.capikey = "add_capikey"
global.creatorName = "ALONG"

//==========================
    
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
