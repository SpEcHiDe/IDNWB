import express from "express";
import { webhookCallback } from "grammy";

import { composer } from "./plugins/index.js";
import { getBot } from "./bots.js";

const app = express();

app.use(express.json());

app.use("/:botToken", (req, res) => {
    // Create an instance of the `Bot` class and pass your authentication token to it.
    const bot = getBot(req.params.botToken);
    if (bot !== undefined) {
        // You can now register listeners on your bot object `bot`.
        // grammY will call the listeners when users send messages to your bot.
        // Handle the /start command.
        bot.use(composer)
        // finally, register the webhook
        // https://t.me/c/1493653006/49880
        return webhookCallback(bot, "express")(req, res);
    }
    res.send("-_-");
});

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
