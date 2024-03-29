﻿//ทำการโหลด Lib discord.js
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

//ทำการสร้าง Client (ตัวจัดการบอท) จาก Lib discord.js
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
//Intents.FLAGS.GUILDS เพื่อรับ Event ต่าง ๆ จากเซิร์ฟ เช่น ลบห้อง สร้างห้อง, เพิ่มโรล ลบโรล, ใส่อำนาจ ลดอำนาจ
//Intents.FLAGS.GUILD_MESSAGE เพื่อรับ Event ข้อความจากเซิร์ฟ
//ข้างบน ต้องเปิด "MESSAGE CONTENT INTENT" ใน Discord Developer Portal ตรงหน้าเมนูบอทเรา (ที่รับ Token มา)

//ทำการให้บอทส่ง Event "Ready" ครั้งเดียว หลังบอทพร้อม (หลังโหลด Cache จากดิสเซิร์ฟทั้งหมดที่บอทใช้งาน)
client.once('ready', (bot) => {
    console.log(bot.user.username, 'is Ready !');
});

//ทำการให้บอทส่ง Event "ข้อความที่ถูกสร้าง" ไม่ใช่ Event "ข้อความทั้งหมด" ตามอัปเดตใหม่
client.on('messageCreate', (m) => {
    if (!m.guild) return; //ถ้าข้อความส่งมาใน DM (เพราะไม่มีค่าเซิร์ฟเวอร์) ให้ปัดทิ้ง
    if (m.author.bot) return; //ถ้าข้อความส่งมาเป็นบอท (เช็ก Boolean ค่า Bot) ให้ปัดทิ้ง

    if (m.content == 'hello') //เช็กว่าข้อความที่ส่งมา = hello
    {
        m.reply('hi'); //ตอบกลับว่า hi
    }
});

client.login(token); //login บอทเข้าสู่ระบบ