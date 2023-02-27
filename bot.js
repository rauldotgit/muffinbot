console.log('beep beep')

import {Client, Events, GatewayIntentBits} from 'discord.js'
import {discord_token} from './config.js'
import cmdHandler from './cmdHandler.js'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
})

client.login(discord_token)

client.once(Events.ClientReady, readyDiscord)

client.on('messageCreate', cmdHandler)

function readyDiscord(){
    console.log('Im ready!')
}