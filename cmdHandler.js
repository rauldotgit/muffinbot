import status from './commands/status.js'
import wrongReply from './utils/wrongReply.js'
import miau from './commands/miau.js'
import dadjoke from './commands/dadjokes.js'

const commands = { status, miau, dadjoke }

export default function(msg){

    const content = msg.content
    const separated = content.split(' ')
    const bot = separated[0]
    const cmd = separated[1]
    const opt1 = separated[2]
    const opt2 = separated[3]
    const opt3 = separated[4]

    const params = {msg, opt1, opt2, opt3}
  
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

