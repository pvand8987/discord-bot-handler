const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: `invite`,
  description: "Gives you invite link of bot!",
  usage: `i;invite`,
  emoji: "👨",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#303136")
      .setTitle("Click Here To Invite Me!")
      .setURL("https://discord.com/oauth2/authorize?client_id=878900633426604032&scope=bot&permissions=2953276543");
    message.channel.send({ embeds: [embed] });
  },
};
