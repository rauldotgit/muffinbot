import fetch from 'node-fetch'
import {tenor_key} from '../config.js'

export default async function (props){
    console.log(tenor_key)
    console.log('miau miau')
    // !bot sad miau
    const {msg, opt2} = props
    const search = !opt2 ? 'cat' : `${opt2} cat`
    
    let url = `https://api.tenor.com/v1/search?q=${search}&key=${tenor_key}&limit=3`
    let response = await fetch(url)
    let json = await response.json()
    if(json.error){
        msg.reply('Oh no, we ran out of cats T_T')
    }
    console.log(json)
}