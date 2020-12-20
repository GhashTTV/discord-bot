module.exports = {
    name: 'avatar',
    description: 'Display avatar URL.',
    execute(message) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Votre avatar est : ${message.author.displayAvatarURL({format: 'png' })}`);
        }
  
        const avatarList = message.mentions.users.map(user => {
            return `${user.username} : ${user.displayAvatarURL({ format: 'png' })}`;
        });
  
        message.channel.send(avatarList);
    }
   };