const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play some song !')
        .addStringOption(option =>
            option
                .setName("music")
                .setDescription("Link or Name of the music.")
                .setRequired(true)
            ),
    async execute(interaction) {
        const query = interaction.options.getString("music");
        if (!query) interaction.reply("กรุณาระบุเพลง");

        const res = await interaction.client.manager.search(
            query,
            interaction.author
        );

        const player = interaction.client.manager.create({
            guild: interaction.guild.id,
            voiceChannel: interaction.member.voice.channel.id,
            textChannel: interaction.channel.id,
        });

        player.connect();

        player.queue.add(res.tracks[0]);

        interaction.reply(`กำลังโหลดเพลง ${res.tracks[0].title} เข้าคิว...`);

        if (!player.playing && !player.paused && !player.queue.size)
            return player.play();

        if (
            !player.playing &&
            !player.paused &&
            player.queue.totalSize === res.tracks.length
        )
            return player.play();
    },
};