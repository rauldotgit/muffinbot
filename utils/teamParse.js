import shuffle from './shuffle.js'

export default function (team){
    let playerString = team.replace('(', '').replace(')', '').replaceAll(' ', '')
    let players = playerString.split(',')

    let newPlayers = shuffle(players)

    const middleIndex = Math.ceil(newPlayers.length / 2)
    const firstHalf = newPlayers.splice(0, middleIndex)   
    const secondHalf = newPlayers.splice(-middleIndex)

    const team1 = firstHalf.join('  ')
    const team2 = secondHalf.join('  ')

    return { team1, team2 }
}