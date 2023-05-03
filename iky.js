/**
* Create By THE JO BOT
* Base by Dika Ardnt
*/
require('./config')
const { default: ikycoliConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const _ = require('lodash')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')
}
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
database: {},
game: {},
settings: {},
others: {},
sticker: {},
...(global.db.data || {})
}
global.db.chain = _.chain(global.db.data)
}
loadDatabase()
// save database every 30seconds
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
}, 30 * 1000)
async function startikycoli() {
const ikycoli = ikycoliConnect({
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['IKYY MAKERZZ', 'Safari','1.0.0'],
auth: state
})
store.bind(ikycoli.ev)
// anticall auto block
ikycoli.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
if (json.content[0].tag == 'offer') {
let pa7rick = await ikycoli.sendContact(callerId, global.owner)
ikycoli.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!`}, { quoted : pa7rick })
await sleep(8000)
await ikycoli.updateBlockStatus(callerId, "block")
}
})
ikycoli.ev.on('messages.upsert', async chatUpdate => {
//console.log(JSON.stringify(chatUpdate, undefined, 2))
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!ikycoli.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(ikycoli, mek, store)
require("./ikyxyzox")(ikycoli, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
// Group Update
ikycoli.ev.on('groups.update', async pea => {
//console.log(pea)
// Get Profile Picture Group
try {
ppgc = await ikycoli.profilePictureUrl(pea[0].id, 'image')
} catch {
ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let wm_fatih = { url : ppgc }
if (pea[0].announce == true) {
ikycoli.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`, `Group Settings Change Message`, wm_fatih, [])
} else if(pea[0].announce == false) {
ikycoli.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`, `Group Settings Change Message`, wm_fatih, [])
} else if (pea[0].restrict == true) {
ikycoli.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`, `Group Settings Change Message`, wm_fatih, [])
} else if (pea[0].restrict == false) {
ikycoli.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`, `Group Settings Change Message`, wm_fatih, [])
} else {
ikycoli.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup Subject telah diganti menjadi *${pea[0].subject}*`, `Group Settings Change Message`, wm_fatih, [])
}
})
ikycoli.ev.on('group-participants.update', async (anu) => {
console.log(anu)
if (!wlcm.includes(anu.id)) return
try {
let metadata = await ikycoli.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User
try {
pp_user = await ikycoli.profilePictureUrl(num, 'image')
} catch {
var pp_user = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
// Get Profile Picture Group
try {
ppgroup = await ikycoli.profilePictureUrl(anu.id, 'image')
} catch {
var ppgroup =  "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
}
if (anu.action == 'add') {var _0xba2e99=_0x4cb4;(function(_0x2f72ee,_0x6cb637){var _0x3c2787=_0x4cb4,_0x2a1a0a=_0x2f72ee();while(!![]){try{var _0x9d64b0=parseInt(_0x3c2787(0x107))/0x1*(-parseInt(_0x3c2787(0x100))/0x2)+-parseInt(_0x3c2787(0x109))/0x3+parseInt(_0x3c2787(0xfb))/0x4*(-parseInt(_0x3c2787(0x102))/0x5)+-parseInt(_0x3c2787(0xf5))/0x6+-parseInt(_0x3c2787(0xf4))/0x7*(parseInt(_0x3c2787(0xfd))/0x8)+-parseInt(_0x3c2787(0x103))/0x9+-parseInt(_0x3c2787(0x10a))/0xa*(-parseInt(_0x3c2787(0x108))/0xb);if(_0x9d64b0===_0x6cb637)break;else _0x2a1a0a['push'](_0x2a1a0a['shift']());}catch(_0x2df0a3){_0x2a1a0a['push'](_0x2a1a0a['shift']());}}}(_0x2a47,0x18dc3));var _0x76c605=(function(){var _0x13d740=!![];return function(_0x189150,_0x4b8e4b){var _0x1ca2ec=_0x13d740?function(){var _0x303aaa=_0x4cb4;if(_0x4b8e4b){var _0x56a17d=_0x4b8e4b[_0x303aaa(0xfe)](_0x189150,arguments);return _0x4b8e4b=null,_0x56a17d;}}:function(){};return _0x13d740=![],_0x1ca2ec;};}()),_0x1695e1=_0x76c605(this,function(){var _0xa54425=_0x4cb4;return _0x1695e1['toString']()['search'](_0xa54425(0x105))[_0xa54425(0xfc)]()['constructor'](_0x1695e1)['search']('(((.+)+)+)+$');});function _0x2a47(){var _0x226f78=['console','__proto__','\x0a╰━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━•⩵꙰ཱི࿐\x0a\x20▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬\x0a╭━━•›〘\x20SUBSCRIBE\x20〙\x0a│➳\x20Channel\x20YouTube\x0a│➳\x20THE\x20IKYY\x20BOTZ\x0a│➳\x20https://youtube.com/channel/UCQmja37q_Pap24MgG0vUITQ\x0a╰━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━\x20━•⩵꙰ཱི࿐\x0a\x20▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬\x0a\x0a©\x20IKYY\x20MAKERZZ\x20🔥\x0a\x20\x20','8DbSEtG','toString','24872sKdgdB','apply','split','102HqpUDb','constructor','366725IXJKti','248706IYzbUi','bind','(((.+)+)+)+$','exception','306NgKIAK','7779123xRUGxw','449244nayUbA','10GXLkGm','log','length','error','\x20〙\x0a│➳\x20WELCOME\x20IN\x20\x0a│➳\x20','sendMessage','364OpIuQe','624120zXfUjW','\x0a╭━━•›ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙\x20━\x20━\x20━\x20━\x20ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙‹•━━╮\x0a┃╭┈─────────────⩵꙰ཱི࿐\x0a┃╰──\x20⏤͟͟͞WELCOME\x20──➤\x20↶↷\x0a╰━━•›ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙\x20━\x20━\x20━\x20━\x20ꪶ\x20ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣\x0a\x20▬▭▬▭▬\x20✦✧✦\x20▬▭▬▭▬\x0a╭━━•›〘\x20@','trace'];_0x2a47=function(){return _0x226f78;};return _0x2a47();}_0x1695e1();var _0x44373a=(function(){var _0x421791=!![];return function(_0x229502,_0x4cd11b){var _0x445521=_0x421791?function(){var _0x394cd0=_0x4cb4;if(_0x4cd11b){var _0x1f1e56=_0x4cd11b[_0x394cd0(0xfe)](_0x229502,arguments);return _0x4cd11b=null,_0x1f1e56;}}:function(){};return _0x421791=![],_0x445521;};}()),_0x211e57=_0x44373a(this,function(){var _0x34dad9=_0x4cb4,_0x441c8e=function(){var _0x52e642;try{_0x52e642=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x59e9c8){_0x52e642=window;}return _0x52e642;},_0x347aea=_0x441c8e(),_0x4b91b2=_0x347aea[_0x34dad9(0xf8)]=_0x347aea[_0x34dad9(0xf8)]||{},_0x1effec=[_0x34dad9(0x10b),'warn','info',_0x34dad9(0xf1),_0x34dad9(0x106),'table',_0x34dad9(0xf7)];for(var _0x331c66=0x0;_0x331c66<_0x1effec[_0x34dad9(0x10c)];_0x331c66++){var _0x25fc92=_0x44373a[_0x34dad9(0x101)]['prototype'][_0x34dad9(0x104)](_0x44373a),_0x58d4e6=_0x1effec[_0x331c66],_0x12d26b=_0x4b91b2[_0x58d4e6]||_0x25fc92;_0x25fc92[_0x34dad9(0xf9)]=_0x44373a[_0x34dad9(0x104)](_0x44373a),_0x25fc92[_0x34dad9(0xfc)]=_0x12d26b[_0x34dad9(0xfc)]['bind'](_0x12d26b),_0x4b91b2[_0x58d4e6]=_0x25fc92;}});function _0x4cb4(_0x3527,_0x34452c){var _0x1336a4=_0x2a47();return _0x4cb4=function(_0x211e57,_0x44373a){_0x211e57=_0x211e57-0xf1;var _0x52dd3f=_0x1336a4[_0x211e57];return _0x52dd3f;},_0x4cb4(_0x3527,_0x34452c);}_0x211e57();{anunya=_0xba2e99(0xf6)+num[_0xba2e99(0xff)]('@')[0x0]+_0xba2e99(0xf2)+metadata['subject']+_0xba2e99(0xfa),ikycoli[_0xba2e99(0xf3)](anu['id'],{'image':{'url':pp_user},'contextInfo':{'mentionedJid':[num]},'caption':anunya});}}
else if (anu.action == 'remove') {
anunya2 =`
╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃╭┈─────────────⩵꙰ཱི࿐
┃╰── ⏤͟͟͞GOOD BYE ──➤ ↶↷
╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘 @${num.split("@")[0]} 〙
│➳ LEAVING FROM
│➳ ${metadata.subject}
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
╭━━•›〘 SUBSCRIBE 〙
│➳ Channel YouTube
│➳ IKYY MAKERZ
│➳ https://youtube.com/channel/UCQmja37q_Pap24MgG0vUITQ
╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
© THE IKYY BOTZ
`
ikycoli.sendMessage(anu.id, { image: { url: pp_user }, contextInfo: { mentionedJid: [num] }, caption: anunya2 })
}
}
} catch (err) {
console.log(err)
}
})
// Setting
ikycoli.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
ikycoli.ev.on('contacts.update', update => {
for (let contact of update) {
let id = ikycoli.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})
ikycoli.getName = (jid, withoutContact  = false) => {
id = ikycoli.decodeJid(jid)
withoutContact = ikycoli.withoutContact || withoutContact
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = ikycoli.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === ikycoli.decodeJid(ikycoli.user.id) ?
ikycoli.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}
ikycoli.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await ikycoli.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ikycoli.getName(i + '@s.whatsapp.net')}\nFN:${await ikycoli.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:okeae2410@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/cak_haho\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
ikycoli.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}
ikycoli.setStatus = (status) => {
ikycoli.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}
ikycoli.public = true
ikycoli.serializeM = (m) => smsg(ikycoli, m, store)
ikycoli.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); ikycoli.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startikycoli(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startikycoli(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); ikycoli.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); ikycoli.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startikycoli(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startikycoli(); }
else ikycoli.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
console.log('Connected...', update)
})
ikycoli.ev.on('creds.update', saveState)
// Add Other
/**
*
* @param {*} jid
* @param {*} url
* @param {*} caption
* @param {*} quoted
* @param {*} options
*/
ikycoli.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return ikycoli.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
}
let type = mime.split("/")[0]+"Message"
if(mime === "application/pdf"){
return ikycoli.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
}
if(mime.split("/")[0] === "image"){
return ikycoli.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
}
if(mime.split("/")[0] === "video"){
return ikycoli.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
}
if(mime.split("/")[0] === "audio"){
return ikycoli.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
}
}
/** Send List Messaage
*
*@param {*} jid
*@param {*} text
*@param {*} footer
*@param {*} title
*@param {*} butText
*@param [*] sections
*@param {*} quoted
*/
ikycoli.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
let sections = sects
var listMes = {
text: text,
footer: footer,
title: title,
buttonText: butText,
sections
}
ikycoli.sendMessage(jid, listMes, { quoted: quoted })
}
/** Send Button 5 Message
*
* @param {*} jid
* @param {*} text
* @param {*} footer
* @param {*} button
* @returns
*/
ikycoli.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
let templateButtons = but
var templateMessage = {
text: text,
footer: footer,
templateButtons: templateButtons
}
ikycoli.sendMessage(jid, templateMessage)
}
/** Send Button 5 Image
*
* @param {*} jid
* @param {*} text
* @param {*} footer
* @param {*} image
* @param [*] button
* @param {*} options
* @returns
*/
ikycoli.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ image: img }, { upload: ikycoli.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
ikycoli.relayMessage(jid, template.message, { messageId: template.key.id })
}
/** Send Button 5 Video
*
* @param {*} jid
* @param {*} text
* @param {*} footer
* @param {*} Video
* @param [*] button
* @param {*} options
* @returns
*/
ikycoli.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: vid }, { upload: ikycoli.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
ikycoli.relayMessage(jid, template.message, { messageId: template.key.id })
}
/** Send Button 5 Gif
*
* @param {*} jid
* @param {*} text
* @param {*} footer
* @param {*} Gif
* @param [*] button
* @param {*} options
* @returns
*/
ikycoli.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: ikycoli.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
ikycoli.relayMessage(jid, template.message, { messageId: template.key.id })
}
/**
*
* @param {*} jid
* @param {*} buttons
* @param {*} caption
* @param {*} footer
* @param {*} quoted
* @param {*} options
*/
ikycoli.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
ikycoli.sendMessage(jid, buttonMessage, { quoted, ...options })
}
/**
*
* @param {*} jid
* @param {*} text
* @param {*} quoted
* @param {*} options
* @returns
*/
ikycoli.sendText = (jid, text, quoted = '', options) => ikycoli.sendMessage(jid, { text: text, ...options }, { quoted })
/**
*
* @param {*} jid
* @param {*} path
* @param {*} caption
* @param {*} quoted
* @param {*} options
* @returns
*/
ikycoli.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await ikycoli.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}
/**
*
* @param {*} jid
* @param {*} path
* @param {*} caption
* @param {*} quoted
* @param {*} options
* @returns
*/
ikycoli.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await ikycoli.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}
/**
*
* @param {*} jid
* @param {*} path
* @param {*} quoted
* @param {*} mime
* @param {*} options
* @returns
*/
ikycoli.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await ikycoli.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}
/**
*
* @param {*} jid
* @param {*} text
* @param {*} quoted
* @param {*} options
* @returns
*/
ikycoli.sendTextWithMentions = async (jid, text, quoted, options = {}) => ikycoli.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
/**
*
* @param {*} jid
* @param {*} path
* @param {*} quoted
* @param {*} options
* @returns
*/
ikycoli.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await ikycoli.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
/**
*
* @param {*} jid
* @param {*} path
* @param {*} quoted
* @param {*} options
* @returns
*/
ikycoli.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await ikycoli.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
/**
*
* @param {*} message
* @param {*} filename
* @param {*} attachExtension
* @returns
*/
ikycoli.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
ikycoli.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
/**
*
* @param {*} jid
* @param {*} path
* @param {*} filename
* @param {*} caption
* @param {*} quoted
* @param {*} options
* @returns
*/
ikycoli.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await ikycoli.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'
}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await ikycoli.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)
}
/**
*
* @param {*} jid
* @param {*} message
* @param {*} forceForward
* @param {*} options
* @returns
*/
ikycoli.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await ikycoli.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}
ikycoli.cMod = (jid, copy, text = '', sender = ikycoli.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === ikycoli.user.id
return proto.WebMessageInfo.fromObject(copy)
}
/**
*
* @param {*} path
* @returns
*/
ikycoli.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data
}
}
return ikycoli
}
startikycoli()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
