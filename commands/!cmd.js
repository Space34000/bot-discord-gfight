const { MessageEmbed } = require('discord.js')

module.exports = {
    run: async (client, message, args) => {
        const testEmbed = new MessageEmbed().setColor('#000000').setDescription("**Liste commandes :**\n\n**!reglement**\n**!cmd**\n**!invite**\n**!staff**\n**!bda**\n**!objectif**\n**!grade**\n**!tessvii**")
        await message.channel.send({embeds: [testEmbed]});
    },
    name: 'cmd',
    aliases: ['t'],
    desciption: "Commande de test"
}