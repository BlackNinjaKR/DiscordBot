module.exports = {
    name: 'userrole',
    description: "Tell us your gaming device(s)!",
    async execute (message, args, Discord, client){
        const channel = '841897591570825216';
        const pc = message.guild.roles.cache.find(role => role.name === 'PC');
        const xbox = message.guild.roles.cache.find(role => role.name === 'XBOX');
        const playstation = message.guild.roles.cache.find(role => role.name === 'Playstation');
        const switches = message.guild.roles.cache.find(role => role.name === 'Switch');
        const mobile = message.guild.roles.cache.find(role => role.name === 'Mobile');

        const pcemoji = '🖥️';
        const xboxemoji = '🎮';
        const playstationemoji = '📼';
        const switchemoji = '🕹️';
        const mobileemoji = '📱';

        let embed = new Discord.MessageEmbed()
        .setColor('#4d94ff')
        .setTitle ('Choose a user role')
        .setDescription('Reacting to the role with give you the respective gaming devices role\n\n'
            +`${pcemoji} PC\n`
            +`${xboxemoji} XBOX\n`
            +`${playstationemoji} Playstation\n`
            +`${switchemoji} Switch\n`
            +`${mobileemoji} Mobile`);
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react (pcemoji);
        messageEmbed.react (xboxemoji);
        messageEmbed.react (playstationemoji);
        messageEmbed.react (switchemoji);
        messageEmbed.react (mobileemoji);

        client.on ('messageReactionAdd', async (reaction, user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name === pcemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pc);
                } else if (reaction.emoji.name === xboxemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(xbox);
                } else if (reaction.emoji.name === playstationemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(playstation);
                }  else if (reaction.emoji.name === switchemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(switches);
                } else if (reaction.emoji.name === mobileemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mobile);
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
                if (reaction.emoji.name === pcemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pc);
                } else if (reaction.emoji.name === xboxemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(xbox);
                } else if (reaction.emoji.name === playstationemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(playstation);
                } else if (reaction.emoji.name === switchemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(switches);
                } else if (reaction.emoji.name === mobileemoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mobile);
                }
            } else {
                return;
            }
        });
    }
}