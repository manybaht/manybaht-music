//คนที่ก็อปไฟล์ทั้งหมดไป อย่าลืมเปลี่ยน ../ ./ เนื่องจากตำแหน่งอาจไม่ถูกต้อง
const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('../config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] }); //เราไม่จำเป็นต้องใช้ FLAGS.GUILD_MESSAGES อีกแล้ว เนื่องจาก interaction มีให้เราทุกอย่าง

//ทำการโหลดไฟล์คำสั่งเข้าบอท
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}
//ทำการโหลดไฟล์คำสั่งเข้าบอท

client.once('ready', (bot) => {
	console.log(bot.user.username, 'is Ready !');
});

//รับค่า event interaction
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Error trying to executing this command.', ephemeral: true });
	}
});

client.login(token);