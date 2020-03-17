const Discord = require('discord.js');
const fs = require('fs')

require('dotenv').config()

const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'what is my avatar') {
      // Send the user's avatar URL
      message.reply(message.author.displayAvatarURL());
    }
  });

  client.on('message', message => {
    // If the message is '!rip'
    if (message.content === 'rip') {
      // Create the attachment using MessageAttachment
      const attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
      // Send the attachment in the message channel
      message.channel.send(attachment);
    }
  });

  client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!rip') {
      // Create the attachment using MessageAttachment
      const attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
      // Send the attachment in the message channel with a content
      message.channel.send(`${message.author},`, attachment);
    }
  });

  client.on('message', message => {
    // If the message is '!rip'
    if (message.content === 'ripper') {
      // Create the attachment using MessageAttachment
      const attachment = new Discord.MessageAttachment('./giphy.gif');
      // Send the attachment in the message channel with a content
      message.channel.send(`${message.author},`, attachment);
    }
  });

  client.on('message', message => {
    // If the message is '!memes'
    if (message.content === '!memes') {
      // Get the buffer from the 'memes.txt', assuming that the file exists
      const buffer = fs.readFileSync('./memes.txt');
  
      /**
       * Create the attachment using MessageAttachment,
       * overwritting the default file name to 'memes.txt'
       * Read more about it over at
       * http://discord.js.org/#/docs/main/master/class/MessageAttachment
       */
      const attachment = new Discord.MessageAttachment(buffer, 'memes.txt');
      // Send the attachment in the message channel with a content
      message.channel.send(`${message.author}, here are your memes!`, attachment);
    }
  });

  // Create an event listener for new guild members
  client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === "bwake's server");
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });

  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'how to embed') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
      const embed = new Discord.MessageEmbed()
        // Set the title of the field
        .setTitle('A slick little embed')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('Hello, this is a slick embed!');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });


client.login(process.env.BOT_TOKEN);
