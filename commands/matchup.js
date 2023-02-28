import setTeams from '../utils/setTeams.js'

export default function(props){

    const {msg, opt} = props
    let players = []

    if(opt.length < 1){
        msg.reply('Forgot options after matchup. Either !bot matchup voice, or !bot matchup name1 name2 name3 ...')
        return
    }

    // opt is either a list or the string voice "voice",
    // if its opt, use the user provided options as players

    if(opt[0] === 'voice'){
  
        let members = null

        try{
            members =  msg.member.voice.channel.members
        } catch (err) {
            msg.reply('You\'re not currently in a voice chat.')
            return
        }

        // rendundant but ... maybe necessary?
        if(!members){
            msg.reply('No voice channel members found.')
            return
        }

        members.forEach((member) => {
            const name = member.user.username.replaceAll(/([^a-zA-Z ]|\s)/g, '')
    
            if(name !== 'MuffinBot')
                players.push(name)          
        })

    } else {
        // get teams from the options
        players = opt.map(( player )=>{
            return player.replaceAll(/[^a-zA-Z ]/g, '')
        })
    }

    if(!players){
        msg.reply('Didn\'t get any players :( Use !bot help to check how to use commands.')
        return
    }

    let {team1, team2} = setTeams(players)
    const team1Str = team1.join('  ')
    const team2Str = team2.join('  ')

    const reply = `**5v5 Matchup**
    
        :blue_circle: **Team 1**:  ${team1Str}
    
        :red_circle: **Team 2**:  ${team2Str}`

    msg.reply(reply)
}