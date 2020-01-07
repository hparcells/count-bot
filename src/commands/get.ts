import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

import { db, runDb } from '../database';

import { Account } from '../types';

class GetCommand extends Command {
  constructor() {
    super('get', {
      aliases: ['get']
    });
  }

  async exec(message: Message) {
    // Check if the person has a number yet.
    if(!(await runDb(db().table('numbers').getAll(message.author.id).count().eq(1)))) {
      // Acc to database.
      await runDb(db().table('numbers').insert({
        id: message.author.id,
        number: 0
      }));
    }

    // Get the number.
    const account: Account = await runDb(db().table('numbers').get(message.author.id));
    const number = (account && account.number) || 0;

    // Send message.
    return message.channel.send({embed: {
      title: 'Your Number',
      description: `${number}`,
      color: 0x2FC446
    }});
  }
}

export default GetCommand;
