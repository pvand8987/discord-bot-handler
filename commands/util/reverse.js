const { MessageEmbed } = require("discord.js");
const config = require("../../config.json")
const cat = require('popcat-wrapper')

module.exports = {
  name: "reverse",
  category: "util",
  description: "!txet ruoy esreveR",
  aliases: ["rev", "revrs"],
  usage: `${config.prefix}reverse <text>`,
  emoji: "",
  /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */
  run: async (client, message, args) => {
    try {
      const text = args.join(" ")
      if (!text) return message.channel.send({ content: "Please provide something to reverse!" })
      else {
        let textreverse = await cat.reverse(text)
        message.channel.send({ content: textreverse })
      }
    } catch (error) {
      return message.channel.send({content: "Oops! Errors! Please try again."})
    }
  },
};

