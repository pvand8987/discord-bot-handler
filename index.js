const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("hello hell!")
})

app.listen(3000, () => {
 console.log("__________LOADING__________")
})

const config = require("./config.json");
const { Client, Collection } = require("discord.js");
const discord = require("discord.js");

const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);

const chalk = require("chalk");
const client = new discord.Client({ intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.DIRECT_MESSAGES], partials: ["CHANNEL"] })
const fs = require("fs");

module.exports = client;

// global variables

client.commands = new discord.Collection();
client.slashCommands = new Collection();

// command handler
console.log("__________COMMANDS__________")

let folders = fs.readdirSync("./commands/");

folders.forEach((dir) => {
  const commandFiles = fs
    .readdirSync(`./commands/${dir}/`)
    .filter((file) => file.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(`./commands/${dir}/${file}`);

    client.commands.set(command.name, command);

    console.log(chalk.green(`[COMMAND] | ${command.name}`));
  }
});

// event handler
console.log("__________EVENTS__________")

let eventFolder = fs.readdirSync("./events");

eventFolder.forEach((dir) => {
  const eventFiles = fs
    .readdirSync(`./events/`)
    .filter((file) => file.endsWith(".js"));

  for (const file of eventFiles) {
    const Event = require(`./events/${file}`);
    const eventNames = file.split(".")[0];
    console.log(chalk.yellow(`[EVENT] | ${eventNames}`));
  }
});


client.login(process.env.layout);
