const { Client, Interaction, ChannelType, PermissionFlagsBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require("discord.js");

const config = require("../../config.js");

module.exports = {

  name: "interactionCreate",

   /**
   * 
   * @param {Client} client
   * 
   * @param {Interaction} interaction
   * 
   */

  async execute (interaction, client) {

    if (interaction.isChatInputCommand()) {

      const command = client.slashcommands.get(interaction.commandName);

      if (!command) return;

      try {

        command.execute(client, interaction);

      } catch (error) {

        console.error(error);

      }

    }

  },
  
};
