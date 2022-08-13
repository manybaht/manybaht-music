const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('seek')
        .setDescription('Seek the song !')
        .addStringOption(option =>
            option
                .setName("time")
                .setDescription("Example 120.")
                .setRequired(true)
            ),
    async execute(interaction) {
        const time = interaction.options.getString("time");
        if (!time) return interaction.reply("กรุณาระบุเวลา");

        const player = interaction.client.manager.get(interaction?.guild?.id);
        if (!player) return interaction.reply("ไม่มีการเล่นเพลงอยู่");

        player.seek(parseInt(time) * 1000);

        return interaction.reply("ข้ามเวลาไปช่วงที่ต้องการสำเร็จ");
    },
};