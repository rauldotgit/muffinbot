import shuffle from './shuffle.js'


// gets an array of player strings and returns two arrays of randomized players
export default function (players){
    let newPlayers = shuffle(players)

    const middleIndex = Math.ceil(newPlayers.length / 2)
    const team1 = newPlayers.splice(0, middleIndex)   
    const team2 = newPlayers.splice(-middleIndex)

    return { team1, team2 }
}