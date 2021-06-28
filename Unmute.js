module.exports = {
    name: 'unmute',
    description: "unmutes members",
    execute (message, args){
        if (message.member.roles.cache.has('856179026624118814')){
            const target = message.mentions.users.first();
            if (target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Ninja');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
            } else {
                message.channel.send("Couldn't find the specified target")
            }
        } else if (message.member.roles.cache.has('841900527112945669')){
            const target = message.mentions.users.first();
            if (target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Ninja');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
            } else {
                message.channel.send("Couldn't find the specified target")
            }
        } else if (message.member.roles.cache.has('841900187122270218')){
            const target = message.mentions.users.first();
            if (target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Ninja');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
            } else {
                message.channel.send("Couldn't find the specified target")
            }
        } else {
            message.reply ("You don't have the permissions to use that command.");
        }
    }
}