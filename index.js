const Discord = require("discord.js");

const TOKEN = "NTA0NDgwMzgwNzAzOTk3OTUz.DrivEA.w6gvk57oGSr5wck9gxrrZjP3u6Q";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Ready");
    bot.user.setGame("Managing over 500 servers!");
});

bot.on("message", function(message) {
    console.log(message.content);
    if (message.author.equals(bot.user)) return;

    if (message.content == "hello") {
        message.channel.send("Hi, there!");
    }

    var readline = require('readline-sync');
    var input = readline
    if (input !== null) {
        
        message.channel.send(input);
    }
});

bot.login(TOKEN);
