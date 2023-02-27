import fetch from 'node-fetch'
import {tenor_key} from '../config.js'

export default async function (props){

    const {msg, opt1} = props
    let search = 'cat'
    let title = 'Random miau miau'
    let random = true

    if(opt1){
        search = `${opt1} cat`
        title = `${opt1} miau miau`
        random = false
    }

    let url = `https://api.tenor.com/v2/search?q=${search}&key=${tenor_key}&limit=1&random=${random}`
    let response = await fetch(url)
    let json = await response.json()
    if(json.error){
        msg.reply('Oh no, we ran out of cats T_T')
    }
    
    let reply = json.results[0].url
    msg.reply(`${title} - Via Tenor.
    ${reply}`)
}