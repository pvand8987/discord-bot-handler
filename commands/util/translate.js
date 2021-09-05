const { MessageEmbed } = require("discord.js");
const config = require("../../config.json")
const translate = require('@iamtraction/google-translate')

module.exports = {
  name: "trans",
  category: "util",
  description: "No more google translate!",
  usage: `${config.prefix}translate [lang] [content]`,
  emoji: "",
  /**
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
    */
  run: async (client, message, args) => {
    const query = args.slice(1).join(' ');
    const lang = args[0];
    if (!lang) return message.channel.send(':x: | Please specify the language you want to translate');
    if (!query) return message.channel.send(':x: | Please specify the text you want to translate');
    const translated = await translate(query, { to: lang }).catch(err => {
      message.channel.send(':x: | That language is not supported! Use `i;translang` to see supported language.');
    });

    let transembed = new MessageEmbed()
      .setColor(config.color)
      .setDescription(`**Text:** ${query}`)
      .addField(`From:`, translated.from.language.iso, true)
      .addField(`To:`, `${lang}`, true)
      .addField(`Translated text:`, `${translated.text}`, false)
      message.channel.send({embeds: [transembed]})
  },
};
