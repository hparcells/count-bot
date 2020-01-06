import { AkairoClient } from 'discord-akairo';
import { config as setupEnv } from 'dotenv';

import { botLog } from './utils/logger';

// Get access to our env variables in the .env file.
setupEnv();

const client = new AkairoClient({ prefix: '%' }, {});

// Login using the token.
client.login(process.env.TOKEN as string);

// Log.
botLog('Bot started.');
