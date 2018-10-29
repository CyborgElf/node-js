const Discord = require("discord.js");
var fs = require('fs');
const data = 0;
fs.readFile('token.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    //console.log(data);
    bot.login(data);
});

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Ready");
    bot.user.setGame("type !help");
});

bot.on("message", function(message) {
    console.log(message.content);
    if (message.author.equals(bot.user)) return;

    if (message.content.toLowerCase() == "!help") {
        message.channel.send("!STFU!");
    }
});
