const { EmbedBuilder, Message, Client } = require("discord.js");

module.exports = {

  slash: false,

  name: ["example"],

  /**
   * 
  * @param {Client} client
  * 
  * @param {Message<true>} message
  * 
  * @param {string[]} args
  * 
  */

  async execute(client, message, args) {
    
    const Embed = new EmbedBuilder()

      .setColor("Blurple")

      .setAuthor({ name: `${client.user.username}`, iconURL: client.user.avatarURL() })

      .setDescription(`example`)

      .setFooter({ text: message.author.username, iconURL: message.author.avatarURL() })

      .setTimestamp();

    await message.reply({ embeds: [ Embed ] });

  },
  
};
