const postToDiscord = require("./post-to-discord.js");
const cron = require("cron");

// Schedule the script to run on Monday, Wednesday, and Friday at 9 am
const job = new cron.CronJob("00 09 * * 1,3,5", postToDiscord, null, true, "UTC");

// Start the cron job
job.start();
