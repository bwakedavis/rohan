const Discord = require('discord.js')
require('dotenv').config()
const client = new Discord.Client()



const prefix = 'p!'

client.on('ready', ()=>{
    console.log('Am ready you can start')
})

client.on('message', message =>{
    let args = message.content.substring(prefix.length).split(' ')

    switch(args[0]){
        case 'poll':
            const Embed = new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle('Initiate poll')
            .setDescription('people can initiate a yes or no poll')

            if(!args[1]){
                message.channel.send(Embed)
                break;
            }

            let msgargs = args.slice(1).join(' ')

            message.channel.send(msgargs).then(messageReaction=>{
                messageReaction.react('☺️')
                messageReaction.react('☺️')
            })
            break;
    }
})

client.login(process.env.BOT_TOKEN)