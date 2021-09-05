const { MessageEmbed } = require("discord.js");
const config = require("../../config.json")


module.exports = {
  name: "avatar",
  category: "info",
  aliases: ["avt"],
  description: "Gives you profile picture of given person or yourself!",
  usage: `${config.prefix}avatar [user]`,
  emoji: "",

  run: async (client, message, args) => {
    let user = message.mentions.members.first() || message.member || message.author;

    let b = new MessageEmbed()
      .setColor(config.color)
      .setAuthor(`${user.user.username}'s profile picture.`, user.user.displayAvatarURL({ dynamic: true }))
      .setDescription(`[[.png]](${user.user.displayAvatarURL({ format: "png", size: 2048 })}) | [[.gif]](${user.user.displayAvatarURL({ format: "gif", size: 2048 })})`)
      .setImage(user.user.displayAvatarURL({ dynamic: true, size: 2048 }))

    if (!user) return;
    else {
      message.channel.send({ embeds: [b] })
    }
  },
};
