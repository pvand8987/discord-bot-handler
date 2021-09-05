const { Client, Message, MessageEmbed } = require("discord.js");
const color = require("../../config.json").color;

module.exports = {
  name: "firstmsg",
  description: "Gives you first message of channel!",
  usage: `zak firstmsg`,
  emoji: "💬",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const fetchMessages = await message.channel.messages.fetch({
      after: 1,
      limit: 1,
    });
    const msg = fetchMessages.first();

    const embed = new MessageEmbed()

      .setTitle(`First Messsage in #${message.channel.name}`)
      .setThumbnail(msg.author.displayAvatarURL({ dynamic: true })).setDescription(`[Jump](${msg.url})`)
      .addField("Author", `${msg.author}`, true)
      .addField("Message ID", `${msg.id}`, true)
      .addField(
        "Created At",
        `${message.createdAt.toLocaleDateString()}`,
        true
      )
      .setColor(color)
    message.channel.send({ embeds: [embed] });
  },
};
