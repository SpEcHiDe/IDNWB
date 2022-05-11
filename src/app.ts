import express from "express";
import { webhookCallback } from "grammy";
import { Bot } from "grammy";

import { start } from './plugins/start.js';
import { inline } from './plugins/inline.js';
import { telegram_bot_tokenextract } from './plugins/tgbte.js';

const app = express();

app.use(express.json());

app.use(
    '/:botToken',
    (req, res) => {
        // Create an instance of the `Bot` class and pass your authentication token to it.
        const bot = new Bot(
            req.params.botToken,
            {
                client: {
                    // We accept the drawback of webhook replies for typing status.
                    canUseWebhookReply: (method) => method === "sendChatAction",
                }
            }
        );
        // You can now register listeners on your bot object `bot`.
        // grammY will call the listeners when users send messages to your bot.
        // Handle the /start command.
        bot.command("start", start);
        bot.on("inline_query", inline);
        bot
            .on("msg:text")
            .filter(
                (ctx) => ctx.message?.forward_from?.username?.toLowerCase() === "botfather",
                telegram_bot_tokenextract
            )
        // finally, register the webhook
        // https://t.me/c/1493653006/49880
        return webhookCallback(bot, "express")(req, res);
    }
);

app.listen(Number(process.env.PORT), () => {
    console.log(
        `Running on ${process.env.PORT}! Join https://t.me/c/1195659882/19121`
    );
});

// if you want to test locally,
// comment above lines,
// and, un-comment below line
// https://t.me/c/1493653006/49922
// bot.start()
