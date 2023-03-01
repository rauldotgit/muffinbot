# Muffinbot - Discord Bot (Live :white_check_mark:)

This is a discord bot for a personal league of legends discord channel with friends.

Muffinbot is currenlty live on Vultr. If you wish to add Muffinbot to your discord server, you can use [this link.](https://discord.com/api/oauth2/authorize?client_id=1079226740326547496&permissions=8&scope=bot)

_Note: The link is used to add Muffinbot with admin permissions, yet Muffinbot will only send messages/ links in chat and read current voice channel members._

Features include:
  - Create randomized teams from discord voice channel or provided list 
  - Get link to [op.gg](https://op.gg/champions) for champion specific builds
  - Get link to [counterstats.net](https://counterstats.net/) for champion specific counters
  - Get link to an "all skins spotlight" video on [YouTube](https://youtube.com/) for a specified champion
  - Get random cat related gif with/without search words from [Tenor API](https://tenor.com/gifapi)
  - Get a random dad joke from [DadJokes API](https://dadjokes.io/)

  
## :book: Table of contents

- [Muffinbot - Discord Bot (Live :white\_check\_mark:)](#muffinbot---discord-bot-live-white_check_mark)
  - [:book: Table of contents](#book-table-of-contents)
  - [Overview](#overview)
    - [:cat: List of supported commands](#cat-list-of-supported-commands)
      - [!bot help](#bot-help)
      - [!bot matchup (playerNames)](#bot-matchup-playernames)
      - [!bot build (champName)](#bot-build-champname)
      - [!bot counters (champName)](#bot-counters-champname)
      - [!bot skins (champName)](#bot-skins-champname)
      - [!bot miau (searchWords)](#bot-miau-searchwords)
      - [!bot dadjoke](#bot-dadjoke)
    - [:camera: Screenshot](#camera-screenshot)
  - [My process](#my-process)
    - [:wrench: Built with](#wrench-built-with)
    - [:bulb: What I learned](#bulb-what-i-learned)
    - [:mountain\_bicyclist: Continued development](#mountain_bicyclist-continued-development)
    - [:cake: Useful resources](#cake-useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)


## Overview

### :cat: List of supported commands

  #### !bot help

  Returns a list of all Muffin Bot commands.
  
  #### !bot matchup (playerNames)

  Returns two randomized teams from the current voice chat members using **voice** as options. Can also be called with an empty space separated list of people as options for specific names.

  Examples:
    - Voice: !bot matchup voice
    - List: !bot matchup steve pete jan max ruben 

  #### !bot build (champName)

  Returns a build recommendation link from [op.gg](https://op.gg/champions/) with the specified champion name

  Examples:
    -  !bot build masteryi

  #### !bot counters (champName)

  Returns a counter recommendation link from [counterstats.net](https://counterstats.net) with the specified champion name

  Examples:
    -  !bot counters teemo


  #### !bot skins (champName)

  Returns an "all skins spotlight" video from Youtube.

  Examples:
    - !bot skins khazix

  #### !bot miau (searchWords)

  Returns a random or specified searchword cat gif from the [Tenor Api](https://tenor.com/gifapi).

  Examples:
    - !bot miau
    - !bot miau very chonky

  #### !bot dadjoke

  Returns a random dad joke from the [Dadjokes Api](https://dadjokes.io/)


### :camera: Screenshot

**!bot matchup (options)**
![Matchup Image](/public/screenshots/screenshot_matchup.png?raw=true "!bot matchup (options)")

**!bot counters aurelion**
![Counters Image](/public/screenshots/screenshot_counters.png?raw=true "!bot counters aurelion")

**!bot miau chonk**
![Miau Image](/public/screenshots/screenshot_miau.png?raw=true "!bot miau chonk")

<!-- ### :link: Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com) -->

## My process

### :wrench: Built with

- [Node.js](https://nodejs.org/) - JS server env
- [Discord.js](https://reactjs.org/) - JS Discord library
- [Tenor](https://tenor.com/gifapi) - Gif API 
- [DadJokes.io](https://dadjokes.io/) - DadJokes API
- [Vultr](https://vultr.com/) - VPS Host 
- [YouTube Data API v3](https://developers.google.com/youtube/v3) - YouTube API

### :bulb: What I learned

Soon.

### :mountain_bicyclist: Continued development

Development wise, the discord.js message event is not the best way of handling requests, which is why at some point this application should be refactored using [Discord Slash Commands](https://discordjs.guide/creating-your-bot/slash-commands.html) instead.

In the future, I'd love to implement my own counter stats and serve them with pretty discord embeds, to make the whole build/ counter decision a lot quicker and the discord command more useful.

### :cake: Useful resources

- [The Coding Train](https://www.youtube.com/watch?v=7A-bnPlxj4k&list=PLRqwX-V7Uu6avBYxeBSwF48YhAnSn_sA4) - Initial video I watched that got this whole project going. Great start for message based discord bots.
- [DiscordJS Guide](https://discordjs.guide/#before-you-begin) - Good guide on how to setup more modern bots with slash commands.
- [Vultr Youtube Channe](https://www.youtube.com/@vultr) - Videos that helped me understand how to host my bot.

## Author

- Github - [Rauldotgit](https://github/rauldotgit)


## Acknowledgments



