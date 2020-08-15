const fs = require('fs')
const Discord = require('discord.js')
require('dotenv').config()

const client = new Discord.Client()
client.commands = new Discord.Collection()

const prefix = '@'

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
	const command = require(`./commands/${file}`)
	client.commands.set(command.name, command)
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('guildMemberAdd', member => {
    let greeting= member.guild.channels.find("name", "CHANNEL_NAME");

    if (greeting) {
        greeting.send(`Bem Vinde Guardiãe! Para usar o bot > @help\n Sem data prevista para o surubao de guardiões :(`);
    } else {
        member.guild.defaultChannel.send(`Bem Vinde Guardiãe! Para usar o bot > @help\n Sem data prevista para o surubao de guardiões :(`);
    }
})

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).trim().split(/ +/)
    
    const command = args.shift().toLowerCase()

	if (!client.commands.has(command)) return

    try {
        client.commands.get(command).execute(message, command, args)
    } catch (error) {
        console.error(error)
        message.reply('there was an error trying to execute that command!')
    }
})

client.channels.cache

client.login(process.env.TOKEN)