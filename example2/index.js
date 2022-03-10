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

//ทำการโหลดไฟล์ Event เข้าบอท
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
//ทำการโหลดไฟล์ Event เข้าบอท

client.login(token);