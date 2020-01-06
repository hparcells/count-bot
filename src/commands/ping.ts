import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

class PingCommand extends Command {
  constructor() {
    super('ping', {
      aliases: ['ping']
    });
  }

  async exec(message: Message) {
    // Send the first message.
    const sent = await message.channel.send({embed: {
      title: 'Ponging in Process',
      description: 'Ponging...',
      thumbnail: {
        url: 'https://images.emojiterra.com/twitter/v12/512px/1f3d3.png'
      },
      color: 0x2FC446
    }}) as Message;

    // Get the difference between the two.
    const timeDiff = sent.createdAt.valueOf() - message.createdAt.valueOf();

      // Update message.
      return sent.edit({embed: {
        title: ':ping_pong: Pong!',
        description: `${timeDiff} ms`,
        thumbnail: {
          url: 'https://images.emojiterra.com/twitter/v12/512px/1f3d3.png'
        },
        color: 0x2FC446
      }});
  }
}

export default PingCommand;
