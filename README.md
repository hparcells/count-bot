# Count Bot
> A simple bot for counting.

## Usage
**Getting Your Number**

`%get`

**Setting Your Number**

`%set [number]`

- Number provided has to be finite (i.e. not infinity).
- Number has to be an actual number.

## Installation Instructions
In the case you want to host this on your machine, you need to download a few things.

- You need to download a version of [RethinkDB](https://rethinkdb.com/) over 2.3.0 (latest tested version). 
  - If you are running this on windows, the link for 2.4.0 is broken, use https://download.rethinkdb.com/windows/rethinkdb-2.3.6.zip
- Install [Node.js](https://nodejs.org/en/), and be sure to install NPM along with it.

Clone this repository using:
```
git clone https://github.com/hparcells/count-bot.git
```

Create a file called `.env`. You may have to turn on "Show file extensions" on Windows. On the first any only line, insert
```
TOKEN=BOT_TOKEN
```
where `BOT_TOKEN` is the bot token from `https://discordapp.com/developers/`. If you have not created a bot, do so. Create a new application, then create a bot.

Invite the bot to your server using this url: `https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot&permissions=68608`, where `CLIENT_ID` is replaced by the client ID in the Discord Developer Portal.

Start the RethinkDB server.

In the root file of the project (the folder that contains the `src` folder), run the command:
```
npm install && npm start
```
You only need to run `npm install` the first time you setup the bot. From now on you can just simply use `npm start`.

If done correctly, there should be no errors. If there is an error, try installing Node.js again, or join my Discord server at https://discordapp.com/invite/UuzfXXF for help.
