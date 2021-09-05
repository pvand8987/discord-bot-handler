const { Client, Message, MessageEmbed } = require("discord.js");
const config = require('../../config.json')
module.exports = {
  name: "eval",
  description: "Evaluate code",
  usage: "zak eval <code>",
  emoji: "💻",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (message.author.id !== "812561603396370472") return;

    try {
      const code = args.join(" ");
      if (!code) {
        return message.channel.send("What do you want to evaluate?");
      }
      let evaled = eval(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      let embed = new MessageEmbed()
        .addField("Input", `\`\`\`js\n${code}\`\`\``)
        .addField("Output", `\`\`\`${evaled}\`\`\``)
        .setColor(config.color);

      message.channel.send({ embeds: [embed] });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
    }
  },
};


