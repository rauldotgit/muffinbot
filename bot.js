console.log("beep beep")

const {Client, GatewayIntentBits} = require('discord.js')
const {token} = require('./config.json')

const client = new Client({
    intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
})



// will have to be hidden in an env file
client.login(token)

client.on('ready', readyDiscord)

client.on('message', gotMessage)

function gotMessage(msg){
    console.log('')
}

function readyDiscord(){
    console.log('Im ready!')
}
