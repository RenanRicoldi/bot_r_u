module.exports = {
    name: 'uni',
    description: 'create a role for your university',
    async execute(message, command, args) {
        if (command === 'uni') {

            const role = await message.guild.roles.create({
                data: {
                    name: args[0],
                    color: '#af9efe'
                },
                reason: 'new guardian'
            })
    
            message.member.roles.add(role)
        }
    }
}