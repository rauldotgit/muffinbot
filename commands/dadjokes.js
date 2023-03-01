import fetch from 'node-fetch'
import {dad_host, dad_key} from '../config.js'

export default async function (props){
    const {msg} = props

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': dad_key,
            'X-RapidAPI-Host': dad_host
        }
    }
    try {
        const url = 'https://dad-jokes.p.rapidapi.com/random/joke'
        const response = await fetch(url, options)
        var json = await response.json()
    } catch (err) {
        console.log(err)
        msg.channel.send('All out of dad jokes for today ...')
        return
    }

    // if(!json.success || !json){
    //     msg.channel.send('All out of dad jokes for today ...')
    //     return
    // }

    const setup = json.body[0].setup
    const punchline = json.body[0].punchline
    const joke = `${setup}.
    .
    .
    ${punchline}.` 

    msg.channel.send(joke)
}
