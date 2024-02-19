const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("cron");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const channelId = process.env.CHANNEL_ID;
const botToken = process.env.BOT_TOKEN;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  const channel = client.channels.cache.get(channelId);
  if (!channel) return console.error("Channel doesn't exist!");
  channel
    .send("This is a test message, one minute from the script start.")
    .then((message) => {
      console.log(`Message sent successfully to ${message.channel.name}`);
    })
    .catch((error) => {
      console.error(`Failed to send message: ${error}`);
    });
});

client.login(botToken);
