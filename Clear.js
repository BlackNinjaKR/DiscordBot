module.exports = {
    name: 'clear',
    description: "Clears messages from the chat",
    async execute (message, args){
        if (message.member.roles.cache.has('856179026624118814')){
            
            if (!args[0]) return message.reply ("Please rerun the command and enter the number of messages you want to clear!");
            if (isNaN(args[0])) return message.reply("Please enter natural numbers only.");

            if (args[0] > 100) return message.reply ("Please enter a number less than a 100");
            if (args[0] < 1) return message.reply ("You need to delete atleast one message");

           await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            })
        } else if (message.member.roles.cache.has('841900527112945669')){
            
            if (!args[0]) return message.reply ("Please rerun the command and enter the number of messages you want to clear!");
            if (isNaN(args[0])) return message.reply("Please enter natural numbers only.");

            if (args[0] > 100) return message.reply ("Please enter a number less than a 100");
            if (args[0] < 1) return message.reply ("You need to delete atleast one message");

           await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            })
        } else if (message.member.roles.cache.has('841900187122270218')){
            
            if (!args[0]) return message.reply ("Please rerun the command and enter the number of messages you want to clear!");
            if (isNaN(args[0])) return message.reply("Please enter natural numbers only.");

            if (args[0] > 100) return message.reply ("Please enter a number less than a 100");
            if (args[0] < 1) return message.reply ("You need to delete atleast one message");

           await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            })
        } else {
            message.reply ("You don't have the permissions to use that command.");
        }
    }
}