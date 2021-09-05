const { Client, Message, MessageEmbed } = require("discord.js");
const glob = require("glob");
module.exports = {
  name: "reload",
  usage: "zak reload",
  description: "Reload all commands at once",

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (message.author.id !== "812561603396370472") return;
    client.commands.sweep(() => true);
    glob(`${__dirname}/../**/*.js`, async (err, filePaths) => {
      if (err) return console.log(err);
      filePaths.forEach((file) => {
        delete require.cache[require.resolve(file)];

        const pull = require(file);
        if (pull.name) {
          client.commands.set(pull.name, pull);
        }
      });
    });
    message.channel.send({ content: "Successfully Reloaded All Commands" });
  },
};
