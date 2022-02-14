const Discord = require("discord.js")
const { Bot } = require("discord.js")

module.exports = {
    run: async(client) => {
        client.user.setPresence({
              status: "online",
              activities: [
                  {
                      name: "GFight",
                      type: "Joue"
                  }
              ]
          });
        console.log(`Bot opérationnel`);
      },
    name:'ready'
    }