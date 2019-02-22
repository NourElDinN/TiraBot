const Discord = require('discord.js');
const client = new Discord.Client();
const ownerid = ('295216776428388362')
const package = ('package.json');
let prefix = "*"



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

const moment = ('moment');

 

 
    client.on('message', message => {
 
     
        // Example: Fetching Balance
        if (message.content.toUpperCase() === `${prefix}credits`) {
 
            client.fetchBal(message.author.id).then((i) => {
                message.channel.send(`**Balance:** ${i.money}`);
            })
 
 
        }
 
        if (message.content.toUpperCase() === `${prefix}payyou`) {

            client.updateBal(message.author.id, 1000000) //.then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
                 message.channel.send(`**You got $1000000!**\n**New Balance:** ${i.money}`);
            
 
        }
 
        if (message.content.toUpperCase() === `${prefix}payfine`) {
 
            client.updateBal(message.author.id, -500).then((i) => { // Since the 'value' is -500, it will 'add' -500, making the bal $500 lower.
                message.channel.send(`**You paid your fine of $500!**\n**New Balance:** ${i.money}`);
            })
 
        }
 
        if (message.content.toUpperCase() === prefix + `daily`) {

                if (client[message.author.username + message.guild.name] != moment().format('L')) {
                    client[message.author.username + message.guild.name] = moment().format('L')
                    client.updateBal(message.author.id, 500 ,200).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
                        message.channel.send({embed: {
                            color: 3447003,
                            description: 'Recieved your **$500** \`^daily`\. I think you should check \`^credits\`.',
                            author: {
                                name: `${message.author.username}#${message.author.discriminator}`,
                                icon_url: message.author.avatarURL 
                            }
                        }});
                    })
                } else {
                    message.channel.send({embed: {
                        color: 3447003,
                        description: 'You already recieved your \`^daily`\. Check later **' + moment().endOf('day').fromNow() + '**.', // When you got your daily already, this message will show up.
                        author: {
                            name: `${message.author.username}#${message.author.discriminator}`,
                            icon_url: message.author.avatarURL 
                        }
                    }});
                }
            }
          });

client.login(process.env.BOT_TOKEN);
