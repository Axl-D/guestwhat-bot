const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("cron");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const YOUR_CHANNEL_ID = "1070313793713885206";
const BOT_TOKEN = "MTAzNzA2NTE1OTQ3MjA3MDc2Nw.GvEp7V.Trv9wmmpwRfbVoIMOb0iuJiGSETZI7pOi7iGUU";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  const channel = client.channels.cache.get(YOUR_CHANNEL_ID);
  if (!channel) return console.error("Channel doesn't exist!");
  channel
    .send("This is a test message, one minute from the script start.")
    .then((message) => {
      console.log(`Message sent successfully to ${message.channel.name}`);
    })
    .catch((error) => {
      console.error(`Failed to send message: ${error}`);
    });
  /*
  // Schedule messages for Monday, Wednesday, and Friday at 9:00 AM
  const scheduledMessage = new cron.CronJob("00 00 09 * * 1,3,5", () => {
    const channel = client.channels.cache.get(YOUR_CHANNEL_ID);
    if (!channel) return console.error("Channel doesn't exist!");
    channel.send("Good morning! Don't forget our meeting today.");
  });

  scheduledMessage.start(); // Start the cron job
  */
});

client.login(BOT_TOKEN);
