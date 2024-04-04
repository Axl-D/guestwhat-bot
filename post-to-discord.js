const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const channelId = process.env.CHANNEL_ID;
const botToken = process.env.BOT_TOKEN;

console.log("channelId " + channelId, "botToken " + botToken);

function postToDiscord() {
  console.log("Running script...");

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
          .then(() => {
            console.log("Reactions added successfully");
            process.exit();
          })
          .catch((error) => console.error("Failed to add reaction:", error));
      })
      .catch((error) => {
        console.error(`Failed to send message: ${error}`);
        process.exit(1);
      });
  });

  client.login(botToken);
}

module.exports = postToDiscord;
