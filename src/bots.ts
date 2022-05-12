import { Bot } from "grammy";

const bots = new Map<string, Bot>();

export function getBot(token: string) {
    let bot = bots.get(token);
    if (!bot) {
        bot = new Bot(token, {
            client: {
                // We accept the drawback of webhook replies for typing status.
                canUseWebhookReply: (method) => method === "sendChatAction",
            },
        });
        bots.set(token, bot);
    }
    return bot;
}
