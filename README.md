# เริ่มต้นเขียนบอทดิสคอร์ด

## เริ่มต้น 2 ทำ Slash Command, Command and Event handler
[ข้ามไปลุย](https://github.com/manybaht/manybaht-music/tree/main/example2)
## เริ่มต้น 3 Speedrun Any % เขียนโค้ดบอทเพลง
[ข้ามไปลุย](https://github.com/manybaht/manybaht-music/tree/main/example3)

**Repo อันนี้** ไม่ได้ทำมาเพื่อให้เข้ามา ทำการโหลด Source บอทหลายบาท<br/>
แล้วเอาไปเปิดโดยไม่สนใจโลกอะไรเลย<br/>
**Repo อันนี้** จะสอนวิธีการเขียนบอทเบื้องต้น รวมถึงการเริ่มเขียนบอท และการพัฒนาต่อไปให้เท่าบอทหลายบาท

**Repo อันนี้** ใช้ Discord.js เป็นหลัก

หรือหากสนใจ Lib อื่น ๆ ที่ใช้พัฒนาบอทสามารถดูได้ที่<br/>
[รายชื่อ Lib โดยทาง Discord](https://discord.com/developers/docs/topics/community-resources)

# เริ่มต้น 1

ทำการเขียนบอทให้เข้ารู่สะบบและตอบกลับ "hello"

ทำการติดตั้ง Lib discord.js ใน Folder ที่จะเขียนบอท

```
npm i discord.js
```

ทำการสร้างไฟล์ **config.json** แล้วเขียนโค้ด

```
{
	"token": "<โทเค็นบอท>"
}
```

ทำการสร้างไฟล์ **index.js** แล้วเขียนโค้ด

```js
//ทำการโหลด Lib discord.js
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
```

## เริ่มต้น 2 ทำ Slash Command, Command and Event handler
[ลุยกันต่อ](https://github.com/manybaht/manybaht-music/tree/main/example2)