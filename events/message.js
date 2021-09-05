const client = require("../index");
const { MessageEmbed } = require('discord.js')
const color = require("../config.json").color;
const prefix = require("../config.json").prefix;

client.on("messageCreate", async (message) => {

  if(message.content === `<@!${client.user.id}>`) {
    let emb = new MessageEmbed()
      .setColor(color)
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`Hi Human! This is **${client.user.username}** My prefix is **\`${prefix}\`** and unchangeable.`)
      .addFields(
        { name: "Help", value: `\`${prefix}help\``, inline: true },
        { name: "Commands", value: `\`${prefix}help <cagetory>\``, inline: true },
        { name: "Contact", value: "`Aimatov 浣.#7700`", inline: true }
      )
    message.channel.send({ embeds: [emb] })
  }

  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd) || client.commands.find(
    (c) => c.aliases && c.aliases.includes(cmd)
  );

  const numberOfCommands = client.commands.size

  if (command) command.run(client, message, args, numberOfCommands);


});
