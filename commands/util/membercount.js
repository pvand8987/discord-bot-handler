const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "membercount",
  description: "Gives you total numbers of members from server!",
  usage: `;membercount`,
  emoji: "👬",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setTitle(message.guild.name + "'s members count.")
      .setColor("#303136")
      .setDescription (`__Total:__ **${message.guild.members.cache.size}**\n __Humans:__ **${message.guild.members.cache.filter(member => !member.user.bot).size}**\n__Bots:__ **${message.guild.members.cache.filter(member => member.user.bot).size}**`, true)
    message.channel.send({ embeds: [embed] });
  },
};
