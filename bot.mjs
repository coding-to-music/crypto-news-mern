import { Telegraf } from 'telegraf';
import cron from 'node-cron';
import axios from 'axios';
import config from './config/config.mjs';
import { startCommand } from './src/commands/start.mjs';
import { newsCommand } from './src/commands/news.mjs';
import { helpCommand } from './src/commands/help.mjs';
import { hourNewsCommand } from './src/commands/hournews.mjs';
import { dailyNewsCommand } from './src/commands/dailynews.mjs';
import { startAction } from './src/actions/start.mjs';
import { priceAction } from './src/actions/price.mjs';
import { infoAction } from './src/actions/info.mjs';
import { topCoinAction } from './src/actions/topCoin.mjs';
import { greetingsMessageHandler } from './src/messageHandlers/basicMessageHandler.mjs';
import { apiHearer } from './src/hearers/apiHearer.mjs';
import { authorHearer } from './src/hearers/authorHearer.mjs';
import { removeKeyboardHearer } from './src/hearers/removeKeyboardHearer.mjs';

let bot = new Telegraf(config.BOT_API);
const apikey=config.CRYPTO_INFO_API;

startCommand(bot);
newsCommand(bot);
helpCommand(bot);
hourNewsCommand(bot);
dailyNewsCommand(bot);
greetingsMessageHandler(bot);

startAction(bot);
priceAction(bot);
infoAction(bot);
topCoinAction(bot);

apiHearer(bot);
authorHearer(bot);
removeKeyboardHearer(bot);


bot.on('text', (ctx) => ctx.reply('Please use the command /help to have access for help'));
bot.on('sticker', (ctx) => {
    ctx.reply('👍');
});
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

bot.launch();

