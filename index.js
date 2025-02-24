const { Client, Partials, Events } = require("discord.js");

const client = new Client({ intents: 131071, partials: Object.values(Partials).filter((x) => typeof x === "string"), shards: "auto" });

require("./src/handlers/commandHandler.js")(client);

const config = require("./config.js");

client.login(config.client.bot_token);