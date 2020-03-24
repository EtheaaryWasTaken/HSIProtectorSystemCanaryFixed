const Discord = require('discord.js');
const HSIBot = new Discord.Client();
const Token = "Njc5NjI2NjA0ODk2NzE0Nzc5.XlB1lA.1FdhbU-fPJVmSQHqbkwPSrVJ-ws"
const PREFIX = '>';
HSIBot.login(Token)
HSIBot.on('ready', () =>{
    console.log("HSI Protector Bot Online")
    HSIBot.guilds.get("609465408398819338").channels.get('680880657932615747').bulkDelete(4)
    HSIBot.guilds.get("609465408398819338").channels.get('680880657932615747').send("Alright I'm ready to go!.")
    //HSIBot.guilds.get("609465408398819338").channels.get('680880657932615747').send("Ugh..... HELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP ME")
    HSIBot.guilds.get("609465408398819338").channels.get('680880617822486581').send("!WARNING! :warning: Server Migration CTL is going to be activated in a moment. :warning: !WARNING!")
    //HSIBot.guilds.get("609465408398819338").channels.get('680880617822486581').send("HELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP ME")
    HSIBot.user.setPresence({ game: { name: 'Watching closely at [Project HSI]! But I\'m Still giving Coopydood HUGE Hugs! Even in 19 Hecking 78!' }, status: 'online' })
    //HSIBot.user.setPresence({ game: { name: 'I can\'t..!' }, status: 'idle' })
    HSIBot.guilds.get("609465408398819338").channels.get('680880657932615747').send("Ready.")
    .catch(console.error);
})
HSIBot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(">>")
    let HSIBotOwnerID = "374339462353780748"
    switch(args[0]){
        case "Test":
            message.channel.send("Test-Test-Test-Test")
            break;
        case 'Info':
            if (args[1] === 'VersionNum') {
                const DiscordEmbedVersionNumber = new Discord.RichEmbed()
                .addField("Server ID",message.guild.id, false)
                .addField("Server Name",message.guild.name)
                .setTitle("Version Info")
                .setColor("#ffff7f")
                .setFooter("[Project HSI] Protector Systems, Github Rep is at https://github.com/ProjectHSI/HSI-Protector-System")
                .setDescription("Hi there! Curious looking ay\'? My version number is Version 0.0.1! The latest version yet!")
                message.channel.send(DiscordEmbedVersionNumber)
                //message.channel.send("HELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP ME")
                break;
            }
            if (args[1] === 'Ping') {
                const DiscordEmbedVersionNumber = new Discord.RichEmbed()
                .addField("Server ID",message.guild.id, false)
                .addField("Server Name",message.guild.name)
                .setTitle("Ping Status Info")
                .setColor("#ffff7f")
                .setFooter("[Project HSI] Protector Systems, Github Rep is at https://github.com/ProjectHSI/HSI-Protector-System")
                .setDescription("Hi there! Curious looking ay\'? My ping is " + HSIBot.ping + "ms!")
                message.channel.send(DiscordEmbedVersionNumber)
                //message.channel.send("HELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP ME")
                break;
            }
            else{
            const DiscordEmbedOhmygod = new Discord.RichEmbed()
            .addField("Server ID",message.guild.id, false)
            .addField("Server Name",message.guild.name)
            .setTitle("Oh my god. WHY DID YOU DO THIS?")
            .setColor("#ffff7f")
            .setFooter("[Project HSI] Protector Systems, Github Rep is at https://github.com/ProjectHSI/HSI-Protector-System")
            .setDescription("Oh my god you silly, you need to enter Ping or VersionNum!")
            message.channel.send(DiscordEmbedOhmygod)
            throw new console.warn("An error has happened with user ID: "+message.author.id+". Did not enter a vaild argument.")
            break;
            }
        case "BulkDelete":
            if(!args[1]) return message.reply("Unknown statement: [NULL] As ARGUMENT #1, please enter a vaild number")
            //if(guild.id == "609465408398819338") return message.reply("Woah woah woah! WHAT THE HECK ARE YOU DOING!? This server")
        message.channel.bulkDelete(args[1]);
        const DiscordEmbedBulkDelete = new Discord.RichEmbed()
            .addField("Server ID",message.guild.id, false)
            .addField("Server Name",message.guild.name)
            .setTitle("Bulk Delete Sucessful")
            .setColor("#ffff7f")
            .setFooter("[Project HSI] Protector Systems, Github Rep is at https://github.com/ProjectHSI/HSI-Protector-System")
            .setDescription("Bulk delete was sucessful, please beware that if the bot did not delete some message that you requested, that means that the messages are 14+ days old, this means the bot will not be able to delete them due to DiscordAPI Limitations.")
            message.channel.send(DiscordEmbedBulkDelete)
            //message.channel.send("HELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP MEHELP ME")
        console.log("/// [Project HSI] Protector / Command >BulkDelete to be ran.")
        break;
    } 
})