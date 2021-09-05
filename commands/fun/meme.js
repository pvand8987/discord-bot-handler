const { MessageEmbed } = require("discord.js");
const db = require('quick.db')
const config = require("../../config.json");
const cat = require("popcat-wrapper");


module.exports = {
  name: "meme",
  category: "fun",
  description: "Random meme",
  usage: `${config.prefix}meme`,
  emoji: "",
 /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let meme = await cat.randommeme()
    let memeEmbed = new MessageEmbed()
    .setColor(config.color)
    .setTitle(meme.title)
    .setURL(meme.url)
    .setImage(meme.image)
    .setFooter(`Upvote: ${meme.upvotes} ; Comments: ${meme.comments}`);
    message.channel.send({embeds:[memeEmbed]})
  },
};
