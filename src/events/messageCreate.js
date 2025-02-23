const { Client, Message, PermissionFlagsBits } = require("discord.js");

const config = require("../../config.js")

const Database = require("aixe.db");

const db = new Database();

module.exports = {

  name: "messageCreate",

   /**
   * 
   * @param { Client } client
   * 
   * @param { Message } message
   * 
   */

  async execute (message, client) {

    {

    const Prefix = config.client.bot_prefix;

    if (message.author.bot) return;

    if (!message.content.startsWith(Prefix)) return;

    let command = message.content.split(" ")[0].slice(Prefix.length);

    let args = message.content.split(" ").slice(1);

    let cmd = client.commands.get(command);

    if (!cmd) return;

    cmd.execute(client, message, args);

    }

  },
  
};
