module.exports = {
    name: 'pronounrole',
    description: "Tell us your pronoun!",
    async execute (message, args, Discord, client){
        const channel = '841897591570825216';
        const he = message.guild.roles.cache.find(role => role.name === 'He/Him');
        const she = message.guild.roles.cache.find(role => role.name === 'She/Her');
        const they = message.guild.roles.cache.find(role => role.name === 'They/Them');
        const ask = message.guild.roles.cache.find(role => role.name === 'Ask');

        const heemoji = '♂️';
        const sheemoji = '♀️';
        const theyemoji = '❓';
        const askemoji = '❔';

        let embed = new Discord.MessageEmbed()
        .setColor('#4d94ff')
        .setTitle ('Choose a gender role')
        .setDescription('Reacting to the role with give you the respective gender role\n\n'
            +`${heemoji} He/Him\n`
            +`${sheemoji} She/Her\n`
            +`${theyemoji} They/Them\n`
            +`${askemoji} Ask`);
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react (heemoji);
        messageEmbed.react (sheemoji);
        messageEmbed.react (theyemoji);
        messageEmbed.react (askemoji);

        client.on ('messageReactionAdd', async (reaction, user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name === heemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(he);
                } else if (reaction.emoji.name === sheemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(she);
                } else if (reaction.emoji.name === theyemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(they);
                } else if (reaction.emoji.name === askemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ask);
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
                if (reaction.emoji.name === heemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(he);
                } else if (reaction.emoji.name === sheemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(she);
                } else if (reaction.emoji.name === theyemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(they);
                } else if (reaction.emoji.name === askemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ask);
                } 
            } else {
                return;
            }
        });
    }
}