console.log("beep beep")

// const {Client, Events, GatewayIntentBits, Partials} = require('discord.js')
// const {discord_token} = require('./config.json')
// const cmdHandler = require("./cmdHandler")

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

// login to discord with the token
client.login(discord_token)

client.once(Events.ClientReady, readyDiscord)

client.on('messageCreate', cmdHandler)

function readyDiscord(){
    console.log('Im ready!')
}