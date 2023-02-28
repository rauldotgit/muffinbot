import status from './commands/status.js'
import wrongReply from './utils/wrongReply.js'
import miau from './commands/miau.js'
import dadjoke from './commands/dadjokes.js'
import matchup from './commands/matchup.js'
import help from './commands/help.js'
import build from './commands/build.js'
import counters from './commands/counters.js'

const commands = { status, help, matchup, miau, dadjoke, build, counters }

export default function(msg){

    const content = msg.content
    let [bot, cmd, ...opt] = content.split(' ')
    const params = {msg, opt}
  
    if(bot !== '!bot') return
    if(!cmd){
        msg.reply('Please add a command like: !bot help, !bot miau ...')
        return
    }

    const useCommand = commands[cmd]
    if(!useCommand){
        let newReply = wrongReply()
        msg.reply(newReply)
        return
    } 

    try {
        useCommand(params)
    } catch(err) {
        console.error(err)
        msg.reply('Dang, something went wrong...')
    }

}

