export default function(props){
    const {msg} = props
    msg.channel.send(`**Welcome to Muffin Bot :cupcake:**
    
    Here's a list of all current commands:

    :crossed_swords: **!bot matchup voice (broken)**        
            Create two randomized teams from people in you're current voice chat.
            *Note: Might include recently disconnected peopl (slow discord cache).*
            *Use command below to be precise.*

    :crossed_swords: **!bot matchup name1 name2 ...**
            Create two randomized teams from provided names.
            *Example: !bot matchup ahri yasuo steve ruben* 
    
    :book: **!bot build champName**
            Quick link to op.gg champion build page.
            *Example: !bot build nunu*

    :book: **!bot counters champName**
            Quick link to counterstats.net champion build page.
            *Example: !bot counters nunu*

    :crown: **!bot skins champName**
            Quick link to an "all skins spotlight" video on Youtube.
            *Example: !bot skins khazix*

    :cat: **!bot miau**
            Get a random miau miau.
    
    :cat: **!bot miau [keyword]**
            Get a miau miau with a specified search word/ sentence. 
            *Example: !bot miau miau very fat*

    :man_beard: **!bot dadjoke**
            Get a random dad joke. 
    `)
}