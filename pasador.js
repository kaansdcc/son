const db = require("quick.db"); 
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login(process.env.token);
const fetch = require("node-fetch");
const fs = require('fs')
// PASADOR CODE
setInterval(() => {
  var links = db.get("linkler");
  if(!links) return 
  var linkA = links.map(c => c.url)
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Başarıyla Pinglendi.")
}, 60000)
// PASADOR CODE
client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {
db.set("linkler", [])
}
})
require("express")().listen(1343);

// PASADOR CODE
// PASADOR CODE

client.on("ready", () => {
  client.user.setGame(`Pasador Code </>`);
        }, 
  console.log("Bağlandım!")
);




client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "!ekle") {
  var link = spl[1]
  fetch(link).then(() => {
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("**Bu bot zaten uptime ediliyor.** ❎")
    
    let embedPasador = new Discord.RichEmbed()
        .setAuthor(client.user.username)
        .setColor('#c1ed2f')
        .setDescription("**Projeniz artık 7/24 halinde başarıyla aktif.** ✅")
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
     message.channel.send(embedPasador).then(msg => msg.delete(60000));
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    let embedPasador = new Discord.RichEmbed()
        .setAuthor(client.user.username)
        .setColor('#df03fc')
        .setDescription("**Hata! Sadece düzgün url'ler ekleyebilirsiniz.** ❎")
        .setFooter(`${client.user.username}`)
        .setTimestamp()
   return message.channel.send(embedPasador).then(msg => msg.delete(60000)); 
  })
  }
})
// PASADOR CODE

client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "!botsay") {
  var link = spl[1]
 message.channel.send(`**${db.get("linkler").length} / 1000**`)
}})
// PASADOR CODE


const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "!uptime") {
let pasadorEmbed = new Discord.RichEmbed()
.setColor('#c1ed2f')
.setAuthor(`Pasador Code・Yardım Paneli ⚙️`, client.user.avatarURL)
.setTitle('🌟 __**Komutlar Listesi:**__')
.addField('❗ **__ Gerekli Not =__**', '🌟 `Uptime komudunu kullandıktan sonra sisteme eklenmesi için 2-3 dk bekleyiniz.`')
.addField('🌟 **7/24 Yapma » Eklediğiniz proje linkini 7/24 açık yapar.**', '🌟 `!ekle <link>`')
.addField('🌟 **Bot Sayma » Kaç tane proje bağlı olduğunu öğrenirsiniz.**', '🌟 `!botsay`')
.setTimestamp()
.addField(`:scroll: Linkler » `, `[Davet Linki](DAVET LİNKİ) **・** [Destek Sunucu](DAVET LİNKİ)`)
.setFooter(`Pasador Code | Uptime Sistemi`)
return message.channel.send(pasadorEmbed);
    }
  // PASADOR CODE
  })
  const log = message => {
  console.log(`${message}`);
}
// PASADOR CODE