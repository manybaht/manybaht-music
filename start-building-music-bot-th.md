ใครจะทำบอทเพลง

ตัวโหลดเพลงแบบมีตัวจัดการครอบ : https://github.com/freyacodes/Lavalink (ใช้ตัว Dev)
หรือจะเขียนขึ้นมาเอง : https://github.com/Walkyst/lavaplayer-fork

เริ่มต้นใช้ Lavalink ศึกษาจากในหน้าเว็บ Github ตัว Lavalink + Client เชื่อม หรือจะเขียนขึ้นเองก็ได้

แนะนำใช้ Java 13 ในการรัน Lavalink หรือจะใช้เวอร์อื่นก็ได้ อย่าให้อะไรมาห้าม แต่ระวังแตร๊ก
ควรให้แรมกับ Lavalink อย่างน้อยสัก 2GB เพื่อใช้งาน Filter ด้วย

ควรมีการตั้งค่า Buffer เพื่อไม่ให้บอทกระตุก bufferDurationMs และ frameBufferDurationMs ถ้าใส่เป็น 0 จะประมวลผลสด ๆ ถ้าเกิดอาการ Spike ของ CPU มีผลทำให้เพลงที่เล่นกระตุกเหมือนผีเข้า

เข้าใจการส่งค่า OP ไป Lavalink, เข้าใจการส่งค่า Filter จูน เอฟเฟค, เข้าใจสถิติที่ Lavalink ส่งมา : https://github.com/freyacodes/Lavalink/blob/master/IMPLEMENTATION.md

ปัญหา 429 เรทลิมิตยูทูบ : https://blog.arbjerg.dev/2020/3/tunnelbroker-with-lavalink

ปัญหามีคนใส่ลิงก์เพื่อดัก IP ตัว Lavalink : https://github.com/freyacodes/Lavalink/commit/6099bc4385c108f43a016ece9324dcade697137d (ถ้าไม่อยากหา Proxy ก็ปิด http : false)

ปัญหา Lavalink ไม่สามารถเล่นคลิปที่จำกัดอายุ : https://github.com/Walkyst/lavaplayer-fork/issues/18

ขี้เกียจเขียนตัวโหลด Spotify/Apple Music : https://github.com/Topis-Lavalink-Plugins/Topis-Source-Managers-Plugin

Pornhub, Tiktok : https://github.com/DuncteBot/skybot-lavalink-plugin

Filter หรือปรับเสียงตัว Lavalink : มีผลกระทบต่อแรม แต่น้อยมาก

การที่มี Players ไม่ได้ทำไรเลยค้างอยู่ใน Lavalink เยอะ จะทำให้ GC Java ไม่เก็บไปทิ้ง + Stack กันไปเรื่อย ๆ ตอนมี Player ใหม่ Unique แล้วแรมจะเต็ม
