module.exports = {
    name: 'ban',
    description: 'Bans a member from a guild.',
    execute (message, args){
        if (message.member.roles.cache.has('856179026624118814')){
            const member = message.mentions.users.first();
            if (member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(`<@${memberTarget.user.id}> has been banned`);
            } else {
            message.channel.send("Who do you think you are banning?")
            }
        } else if (message.member.roles.cache.has('841900527112945669')){
            const member = message.mentions.users.first();
            if (member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(`<@${memberTarget.user.id}> has been banned`);
            } else {
            message.channel.send("Who do you think you are kicking?")
            }
        } else if (message.member.roles.cache.has('841900187122270218')){
            const member = message.mentions.users.first();
            if (member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(`<@${memberTarget.user.id}> has been banned`);
            } else {
            message.channel.send("Who do you think you are banning?")
            }
        } else {
            message.reply ("You don't have the permissions to use that command.");
        }
    }
}