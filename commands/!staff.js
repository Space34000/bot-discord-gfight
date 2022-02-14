const { MessageEmbed } = require('discord.js')

module.exports = {
    run: async (client, message, args) => {
        const testEmbed = new MessageEmbed().setColor('#000000').setDescription("Le staff de GFight est la pour vous aidez en cas de besoin.\n Si vous souhaitez rentrer dans le staff je vous laisse regarder tout dans ce channel :\n https://discord.gg/Uw3p5vqXHP")
        await message.channel.send({embeds: [testEmbed]});
    },
    name: 'staff',
    aliases: ['t'],
    desciption: "Commande de test"
}