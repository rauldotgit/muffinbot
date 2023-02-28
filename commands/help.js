export default function(props){
    const {msg} = props
    msg.reply(`**Welcome to Muffin Bot :cupcake:**
    
    Here's a list of all current commands:

    :crossed_swords: **!bot matchup voice**
        Create two randomized teams from people in you're current voice chat.

        *Note: Includes all people in voice channel if more than 10.*

    :crossed_swords: **!bot matchup name1 name2 ...**
        Create two random teams of 5.

        *Example: !bot matchup ahri yasuo steve ruben* 
    
    :book: **!bot build [champName]**
        Quick link to op.gg champion build page.

        *Example: !bot build nunu* 

    :cat: **!bot miau**
        Get a random miau miau.

        *Example: !bot miau*
    
    :cat: **!bot miau [keyword]**
        Get a miau miau with a specified search word/ sentence. 

        *Example: !bot miau miau very fat*

    :man_beard: **!bot dadjoke**
        Get a random dadjoke. 
        
        *Example: !bot dadjoke*
    `)
}