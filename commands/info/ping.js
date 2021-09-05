const { MessageEmbed } = require("discord.js");
const color = require("../../config.json").color

module.exports = {
  name: "ping",
  category: "info",
  description: "Get bot's real time ping status",
  usage: "i;ping",
  emoji: "🏓",

  run: async (client, message, args) => {
    let circles = {
      green: "🟢",
      yellow: "🟡",
      red: "🔴"
    }
    let days = Math.floor(client.uptime / 86400000)
    let hours = Math.floor(client.uptime / 3600000) % 24
    let minutes = Math.floor(client.uptime / 60000) % 60
    let seconds = Math.floor(client.uptime / 1000) % 60

    let botLatency = new Date() - message.createdAt
    let apiLatency = client.ws.ping;

    const pingEmbed = new MessageEmbed()
      .setColor(color)

      .addField("Bot",
        `${botLatency <= 200 ? circles.green : botLatency <= 400 ? circles.yellow : circles.red} ${botLatency}ms`
        , true
      )
      .addField("API",
        `${apiLatency <= 200 ? circles.green : apiLatency <= 400 ? circles.yellow : circles.red} ${apiLatency}ms`
        , true
      )
    return message.channel.send({ embeds: [pingEmbed] })
  },
};
