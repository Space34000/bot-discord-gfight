module.exports = {
    run: async(client, message) => {
        await message.guild.members.fetch();
        if (!message.author || !message.member || !message.guild || !message.guild.id) return;
        if (message.author.bot) return;

        const [command, ...args] = message.content.slice(client.config.prefix.length).split(" ");
        const cmd = client.commands.get(client.aliases.get(command) || command);
        if (!cmd) return;
        cmd.run(client, message, args)
    },
    name: 'messageCreate'
}