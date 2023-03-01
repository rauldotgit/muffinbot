import buildExceptions from '../Data/buildExceptions.js'

export default function(props){
    let {msg, opt} = props

    if(opt.length < 1){
        msg.reply('Gimme a champion name!')
        return
    }

    let charName = opt[0] ? opt[0] : ''
    charName = opt[1] ? charName + opt[1] : charName
    
    if(charName in buildExceptions) charName = buildExceptions[charName]

    let url = `https://www.op.gg/champions/${charName}`
    msg.channel.send(`**${charName} build on op.gg**
    ${url}`)
}