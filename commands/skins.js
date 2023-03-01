import {yt_key} from '../config.js'

export default async function(props){
    const {msg, opt} = props

    if(opt.length > 1){
        msg.reply('Too many arguments. Just type in !bot skins (champName).')
        return
    }

    const search = `All ${opt[0]} SKINS`

    // https://www.youtube.com/@SQUPO/ channel id
    try {
        const result = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${yt_key}&type=video&part=snippet`)
        const json = await result.json()
        var videoId = json.items[0].id.videoId
    } catch (err) {
        msg.reply('Coulnd\'t find your Video T_T')
        return
    }

    const url = `https://youtube.com/watch?v=${videoId}`
    msg.reply(url)
}