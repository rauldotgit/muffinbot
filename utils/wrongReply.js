const replies = [
    'That command doesn\'t exist :(',
    'Oof, I can\'t do that.',
    'Oooor you could choose a command that exists. Like !bot help.',
    'Don\'t know that one yet',
    'Ask me again later. Jk, wrong command.',
    'Hmm, maybe Alexa knows that command. I don\'t',
    'Not a fan of that command',
    'If I had a dollar for every time someone types a wrong command ...' 
]

export default function(){
    let rNumber = Math.floor(Math.random() * replies.length)
    return replies[rNumber]
}