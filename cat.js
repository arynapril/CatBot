const snekfetch = require('snekfetch');
const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    console.log('Ready to rumble!');
});
client.on('message', msg => {
    if (msg.content === '+cat') {
        snekfetch.get('http://lorempixel.com/500/500/cats/')
        .then(r => fs.writeFile('download.jpg', r.body));
        msg.channel.send("Here you go", {
            file: "download.jpg"
        });
    }
});
client.on('message', msg => {
    if (msg.content === '+help') {
        msg.channel.send('There is one command. +cat. @yeahimdaf')
}});
client.login('Token here')
