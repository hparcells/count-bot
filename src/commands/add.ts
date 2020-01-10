import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import r from 'rethinkdb';

import { db, runDb } from '../database';

import { Account } from '../types';

class AddCommand extends Command {
  constructor() {
    super('add', {
      aliases: ['add'],
      args: [
        {
          id: 'number',
          type: 'number'
        }
      ]
    });
  }

  async exec(message: Message, args: any) {
    // Check if argument is met.
    if(!args.number && args.number !== 0) {
      message.reply('You can only set your number to a number.');
      return;
    }
    if(!isFinite(args.number)) {
      message.reply('Finite numbers only.');
      return;
    }

    // Check if the person has a number yet.
    if(!(await runDb(db().table('numbers').getAll(message.author.id).count().eq(1)))) {
      // Acc to database.
      await runDb(db().table('numbers').insert({
        id: message.author.id,
        number: args.number
      }));
    }

    // Update the number in the database.
    await runDb(db().table('numbers').get(message.author.id).update({ number: r.row('number').add(args.number) }));

    const account: Account = await runDb(db().table('numbers').get(message.author.id));

    // Send the message.
    return message.channel.send({embed: {
      title: 'Number Updated!',
      description: `Your number has been updated to: \`${account?.number}\`.`,
      thumbnail: {
        url: 'https://images.emojiterra.com/twitter/v12/512px/1f44d.png'
      },
      color: 0x2FC446
    }});
  }
}

export default AddCommand;
