const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping a Pong !'),
    async execute(interaction) {
        await interaction.reply('Pong !');
    },
};