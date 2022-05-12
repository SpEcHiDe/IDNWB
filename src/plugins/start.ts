import { Composer, InlineKeyboard } from "grammy";

export const composer = new Composer();

export default composer;

composer.command("start", (ctx) => {
    return ctx.replyWithSticker(
        "CAACAgIAAxkBAAEPu1Fie96etjykdLTIzOW3o4MV6JPv6wACpAwAAqoUyEoBbu6msnyOHCQE",
        {
            reply_markup: new InlineKeyboard().switchInlineCurrent(
                "Share",
                "https://t.me/c/1471736013/26632"
            ),
        }
    );
});
