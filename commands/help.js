const comandos = [
    '-----------------------------------------------------------------------------------------------------------------',
    '@uni NOME_DA_UNIVERSIDADE  =  cria um cargo para a sua universidade e te atribui a ele! ---  ex: @uni UEL'
]

module.exports = {
    name: 'help',
    description: 'display bot commands',
    execute(message, command, args) {
        message.reply(' O prefixo para usar os comandos é o @\nOs comandos disponíveis até agora são:\n' + comandos.join('\n'))
    }
}