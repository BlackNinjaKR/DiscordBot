module.exports = {
    name: 'colorrole',
    description: "Set up a color reaction role message!",
    async execute (message, args, Discord, client){
        const channel = '841897591570825216';
        const red = message.guild.roles.cache.find(role => role.name === 'Red');
        const purple = message.guild.roles.cache.find(role => role.name === 'Purple');
        const green = message.guild.roles.cache.find(role => role.name === 'Green');
        const pink = message.guild.roles.cache.find(role => role.name === 'Pink');
        const orange = message.guild.roles.cache.find(role => role.name === 'Orange');
        const yellow = message.guild.roles.cache.find(role => role.name === 'Yellow');
        const blue = message.guild.roles.cache.find(role => role.name === 'Blue');

        const redemoji = '🔴';
        const purpleemoji = '🟣';
        const greenemoji = '🟢';
        const pinkemoji = '🟤';
        const orangeemoji = '🟠';
        const yellowemoji = '🟡';
        const blueemoji = '🔵';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle ('Choose a colour role')
        .setDescription('Reacting to the role with give you the respective colour role\n\n'
            +`${redemoji} Red\n`
            +`${purpleemoji} Purple\n`
            +`${greenemoji} Green\n`
            +`${pinkemoji} Pink\n`
            +`${orangeemoji} Orange\n`
            +`${yellowemoji} Yellow\n`
            +`${blueemoji} Blue`);
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react (redemoji);
        messageEmbed.react (purpleemoji);
        messageEmbed.react (greenemoji);
        messageEmbed.react (pinkemoji);
        messageEmbed.react (orangeemoji);
        messageEmbed.react (yellowemoji);
        messageEmbed.react (blueemoji);

        client.on ('messageReactionAdd', async (reaction, user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name === redemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(red);
                } else if (reaction.emoji.name === purpleemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purple);
                } else if (reaction.emoji.name === greenemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(green);
                } else if (reaction.emoji.name === pinkemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pink);
                } else if (reaction.emoji.name === orangeemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(orange);
                } else if (reaction.emoji.name === yellowemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellow);
                } else if (reaction.emoji.name === blueemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blue);
                }
            } else {
                return;
            }
        })

        client.on ('messageReactionRemove', async (reaction, user) =>{

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name === redemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(red);
                } else if (reaction.emoji.name === purpleemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purple);
                } else if (reaction.emoji.name === greenemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(green);
                } else if (reaction.emoji.name === pinkemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pink);
                } else if (reaction.emoji.name === orangeemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(orange);
                } else if (reaction.emoji.name === yellowemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellow);
                } else if (reaction.emoji.name === blueemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blue);
                }
            } else {
                return;
            }
        });
    }
}