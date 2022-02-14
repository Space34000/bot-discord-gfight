const { Client, Collection } = require('discord.js');
const path = require('path');
const { readdir, statSync } = require('fs');
const config = require('./config.json');

module.exports = class Bot extends Client {
    constructor() {
        super({intents: 32767});

        this.commands = new Collection();
        this.aliases = new Collection();

        this.config = config 
        void this.start();
    }

    start() {
        void this.loadEvents();
        void this.loadCommands();
        void this.login(this.config.token);
    }

    async loadEvents(filePath = path.join(__dirname, './events')) {
        readdir(filePath, (err, files) => {
             if (err) return console.log(err);
             if (!files) return console.log('pas de dossier nommé "events"');

             for(let i = 0; i < files.length; i++) {
                 if (statSync(path.join(filePath, files[i])).isDirectory()) {
                     this.loadEvents(path.join(filePath, files[i]), files[i]);
             }
             else {
                 const event = require(path.join(filePath, files[i]));
                 this.on (event.name, (...args) => event.run(this, ...args));
                };
             };
        })
    };

    async loadCommands(filePath = path.join(__dirname, './commands')) {
        readdir(filePath, (err, files) => {
            if (err) return console.log(err);
            if (!files) return console.log ('Aucun dossier nommé "commands"');

            for(let i = 0; i < files.length; i++) {
                if (statSync(path.join(filePath, files[i])).isDirectory()) {
                    this.loadCommands(path.join(filePath, files[i], files [i]));
                }
                else {
                    const command = require(path.join(filePath, files[i]));
                    this.commands.set(command.name, command);
                    for(let h = 0; h < command.aliases.length; h++) {
                        this.aliases.set(command.aliases[h], command.name);
                    };
                };
            };
        });
    };
}
client.login(process.env.TOKEN);