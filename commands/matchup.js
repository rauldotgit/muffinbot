import teamParse from '../utils/teamParse.js'

export default function (props){
    const {msg, opt} = props
    let team1, team2

    if(!opt){
        msg.reply('Bro I need names. Try !bot match (dude1, dude2, ..etc).')
        return
    }

    const firstBracket = opt[0]
    const lastBracket = opt[opt.length-1]

    if(firstBracket !== '(' || lastBracket !== ')'){
        msg.reply('The input is missing brackets mate.')
        return
    }

    try {
        let teams = teamParse(opt)
        team1 = teams.team1
        team2 = teams.team2
    } catch (err) {
        console.error(err)
        msg.reply('Dangit! Matchup failed :( Did you check your input?')
        return
    }

    const reply = `**5v5 Matchup**

    :blue_circle: **Team 1**: ${team1}

    :red_circle: **Team 2**: ${team2}`

    msg.reply(reply)
}