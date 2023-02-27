import status from './commands/status.js'
import wrongReply from './utils/wrongReply.js'
import miau from './commands/miau.js'
import dadjoke from './commands/dadjokes.js'
import match from './commands/matchup.js'

const commands = { status, match, miau, dadjoke }

export default function(msg){

    const content = msg.content
    const separated = content.split(' ')
    let [bot, cmd, ...options] = separated 

    // we mostly need the options as a whole string
    let opt = options.join(' ')

    const params = {msg, opt}
  
    if(bot !== '!bot') return

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

