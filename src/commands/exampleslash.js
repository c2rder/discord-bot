const { EmbedBuilder, SlashCommandBuilder, Client, ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  
  slash: true,

  data: new SlashCommandBuilder()

    .setName("example")

    .setDescription("example.")

    .setDMPermission(false),

    /**
    * 
    * @param {Client} client 
    * 
    * @param {ChatInputCommandInteraction} interaction 
    * 
    */

  async execute(client, interaction) {

    const Embed = new EmbedBuilder()

      .setColor("Blurple")

      .setAuthor({ name: `${client.user.username}`, iconURL: client.user.avatarURL() })

      .setDescription(`example`)

      .setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL() })

      .setTimestamp();

    await interaction.reply({ embeds: [ Embed ] });

  },

};
