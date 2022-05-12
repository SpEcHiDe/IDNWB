import { Composer, InlineKeyboard } from "grammy";
import { getBot } from "../bots";

const composer = new Composer();

export default composer;

composer.on("msg:text").filter(
    (ctx) => ctx.msg.forward_from?.username?.toLowerCase() === "botfather",
    async (ctx) => {
        let entities = ctx.message?.entities;
        let msg_text = ctx.message?.text || "";
        // extract bot token
        let bot_token = extract_bot_token(msg_text, entities);
        if (bot_token !== undefined) {
            // Create an instance of the `Bot` class and pass your authentication token to it.
            const bot = getBot(bot_token);
            if (bot !== undefined) {
                // Make sure it is `https` not `http`!
                await bot.api.setWebhook(`${process.env.URL}/${bot_token}`);
            }
        }
        // finally reply done to the user
        await ctx.replyWithSticker(
            "CAACAgUAAxkBAAEPvDFie_SFX9QPy_PzMr9bOY9LDIbekwAC3wEAAjzLfB_2ory8DFKOUyQE",
            {
                reply_markup: new InlineKeyboard().url(
                    "Source Code",
                    "https://github.com/SpEcHiDe/IDNWB"
                ),
            }
        );
    }
);

function extract_bot_token(msg_text: string, entities: any) {
    // https://github.com/wjclub/telegram-bot-tokenextract/pull/1
    for (let entity_ in entities) {
        let entity = entities[Number(entity_)];
        if (entity.type == "code") {
            return msg_text?.substring(
                entity.offset,
                entity.offset + entity.length
            );
        }
    }
}
