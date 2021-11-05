const DIG = require("discord-image-generation");
const Discord = require("discord.js");

module.exports = {
  name: 'affect',
  category: "Images",
  description: 'this won\'t affect my baby!',
  aliases: ["affect"],
  usage: 'affect',
  cooldown: 1,
  memberpermissions: [],
  requiredroles: [], 
  alloweduserids: [],

  run: async (client, message, args) => {

    let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
    let m = await message.channel.send({
      content: "**Please Wait...**"
    });
    let avatar = user.user.displayAvatarURL({
      dynamic: false,
      format: "png",
    });

    let img = await new DIG.Affect().getImage(avatar);

    let attach = new Discord.MessageAttachment(img, "thomas.png");
    setInterval(() => m.delete(), 5000);
    message.channel.send({
      files: [attach]
    });
  },
};