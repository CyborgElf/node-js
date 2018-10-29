
const Discord = require("discord.js");

const TOKEN = "NTA0NDgwMzgwNzAzOTk3OTUz.DrivEA.w6gvk57oGSr5wck9gxrrZjP3u6Q";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Ready");
});

bot.on("message", function(message) {
    console.log(message.content);
    if (message.author.equals(bot.user)) return;

    if (message.content == "hello") {
        message.channel.send("Hi, there!");
    }
});

bot.login(TOKEN);
