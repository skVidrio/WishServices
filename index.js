const Disc = require('discord.js');
const client = new Disc.Client();
const token = 'NjkzNzI2MzI2ODkyMzk2NTk1.XoBXwQ.Es00vmfQYcOs2XGYctJUjw1H2ZE'


client.login(token);

client.on('ready', () => {
    console.log('Bot is ONLINE!')
})

client.on('message', msg=>{
    if(msg.content === ">download"){
        msg.channel.send('*Currently, Phoenix Swapper is under maintanince. It will be released in download channel as soon as it comes out.* ***Thank you for your patience.***')
}})

client.on('message', msg=>{
    if(msg.content === ">help"){
        msg.channel.send(`*Please Message @ryda#2020 or @vazity#4076 for assistance.*`)
}})

client.on('message', msg=>{
    if(msg.content === ">apply"){
        msg.channel.send(`**Applications are currently closed.**`)
}})

client.on('message', msg=>{
    if(msg.content === ">application"){
        msg.channel.send(`**Applications are currently closed.**`)
}})

client.on('message', msg=>{
    if(msg.content === ">applications"){
        msg.channel.send(`**Applications are currently closed.**`)
}})

