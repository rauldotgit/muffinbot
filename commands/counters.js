import counterExceptions from '../Data/counterExceptions.js'

export default function(props){
    let {msg, opt} = props

    if(opt.length < 1){
        msg.reply('Gimme a champion name!')
        return
    }

    let charName = opt[0] ? opt[0] : ''
    charName = opt[1] ? charName + '-' + opt[1] : charName
    
    if(charName in counterExceptions) charName = counterExceptions[charName]

    let url = `https://www.counterstats.net/league-of-legends/${charName}`
    msg.reply(url)
}