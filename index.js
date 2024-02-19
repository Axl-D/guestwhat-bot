const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("cron");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const channelId = process.env.CHANNEL_ID;
const botToken = process.env.BOT_TOKEN;

console.log(channelId, botToken);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  const channel = client.channels.cache.get(channelId);
  if (!channel) return console.error("Channel doesn't exist!");
  channel
    .send("Réunion Guestwhat aujourd'hui à 11:30 - confirmez votre participation avec un réaction à ce message ✅ ❌")
    .then((message) => {
      console.log(`Message sent successfully to ${message.channel.name}`);
      message
        .react("✅")
        .then(() => message.react("❌"))
        .then(() => console.log("Reactions added successfully"))
        .catch((error) => console.error("Failed to add reaction:", error));
    })
    .catch((error) => {
      console.error(`Failed to send message: ${error}`);
    });
});

client.login(botToken);
