export default function(props){
    const {msg, opt} = props
    const champName = opt[0]

    if(opt.length > 1) {
        msg.reply('Too many arguments. Just type: !bot build nunu without brackets.')
        return
    } else if (opt.length < 1) {
        msg.reply('Please provide a champ name. Like: !bot build azir')
        return
    }

    let url = `https://www.op.gg/champions/${champName}`
    msg.reply(`**${champName} build on op.gg**
    ${url}`)
}