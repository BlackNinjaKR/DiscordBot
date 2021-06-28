module.exports = {
    name: 'vreactrole',
    description: "Set up a reaction role message!",
    async execute (message, args, Discord, client){
        const channel = '841905556994523136';
        const ninja = message.guild.roles.cache.find(role => role.name === 'Ninja');

        const ninjaemoji = '✅';

        let embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle ('You have read and agreed to the rules')
        .setDescription('Reacting to the role with give you access to the rest of the server\n\n'
            +`${ninjaemoji} You have read and agreed to abide by the rules`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react (ninjaemoji);

        client.on ('messageReactionAdd', async (reaction, user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name === ninjaemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ninja);
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
                if (reaction.emoji.name === ninjaemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ninja);
                }
            } else {
                return;
            }
        });
    }
}