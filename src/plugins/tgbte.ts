import {
    Bot,
    Context,
} from 'grammy';


function extract_bot_token(msg_text: string, entities: any) {
    // https://github.com/wjclub/telegram-bot-tokenextract/pull/1
    for (let entity_ in entities) {
        let entity = entities[
            Number(entity_)
        ];
        if (entity.type == "code") {
            return msg_text?.substring(entity.offset, entity.offset + entity.length);
        }
    }
}


export async function telegram_bot_tokenextract(ctx: Context) {
    let entities = ctx.message?.entities;
    let msg_text = ctx.message?.text || "";
    let bot_token = extract_bot_token(
        msg_text,
        entities
    );
    if (bot_token !== undefined) {
        // Create an instance of the `Bot` class and pass your authentication token to it.
        const bot = new Bot(
            bot_token,
            {
                client: {
                    // We accept the drawback of webhook replies for typing status.
                    canUseWebhookReply: (method) => method === "sendChatAction",
                }
            }
        );
        // Make sure it is `https` not `http`!
        await bot.api.setWebhook(`https://${process.env.URL}/${secretPath}`);
    }
    await ctx.replyWithSticker(
        "CAACAgUAAxkBAAEPvDFie_SFX9QPy_PzMr9bOY9LDIbekwAC3wEAAjzLfB_2ory8DFKOUyQE"
    );
}
