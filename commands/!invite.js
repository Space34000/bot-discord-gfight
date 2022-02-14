const { MessageEmbed } = require('discord.js')

module.exports = {
    run: async (client, message, args) => {
        const testEmbed = new MessageEmbed().setColor('#000000').setDescription("**SOON...**")
        await message.channel.send({embeds: [testEmbed]});
    },
    name: 'reglement',
    aliases: ['t'],
    desciption: "Commande de test"
}