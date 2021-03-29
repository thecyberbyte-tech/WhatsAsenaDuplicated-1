/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```📡FazoBoT🤖 By Fazil vk```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Telegram Group:* https://t.me/cc_chat1\n*Telegram Channel:* https://t.me/cinem_company' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by 📡FazoBoT🤖*', MessageType.text);
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```Hi 👋, I am Alive```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Owner:* *Fazil vk*\n*Insta:* https://www.instagram.com/mu.fazil_vk' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by 📡FazoBoT🤖*', MessageType.text);
        }
    }));

    Asena.addCommand({pattern: 'tools', fromMe: false, desc: Lang.TOOLS_DESC}, (async (message, match) => {
    await message.sendMessage(
        '*📲Features Added*\n-------------------------------\n\n*.lovelogo* : ```Eg: .loveimage Rohith```\n\n*.wood* : ```Eg: .wood Rohith```\n\n*.bf4* : ```Eg: .pb4 Rohith```\n\n*.candlemug* : ``` Eg: .candlemug Rohith```\n\n*.mugflower* : ``` Eg: .mugflower Rohith```\n\n*.narutobanner*:```Eg: .narutobanner Rohith```\n\n*.papperongrass*:```Eg: .papperongrass Rohith```\n\n*.romancetxt*: ```Eg: .romancetxt Rohith```\n\n*.underwatertxt*:```Eg: .underwatertxt Rohith```\n\n*.sweetcandy*:```Eg : .sweetcandy Rohith```\n\n*.shadow*: ```Eg: .shadow Rohith```\n\n*.8bit*: ```Eg: .8bit Fazo```\n\n*.glitch*: ```Eg: .glitch Fazo```\n\n*.3dtext*: ```Eg: .3dtext Fazo```\n\n*.neonlight*: ```Eg: .neonlight Fazo```\n\n*.ninjalogo*: ```Eg: .ninjalogo Fazo```\n\n*.watercolor*: ```Eg: .watercolor Fazo```\n\n*.sparkling*: ```Eg: .sparkling FazoFaz```\n\n*.harrypotter*: ```Eg: .harrypotter Fazo```*' , MessageType.text
    );
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
