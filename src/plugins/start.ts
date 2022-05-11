import {
    Context,
    InlineKeyboard,
} from 'grammy';


export default function start(ctx: Context) {
    ctx.replyWithSticker(
        "CAACAgIAAxkBAAEPu1Fie96etjykdLTIzOW3o4MV6JPv6wACpAwAAqoUyEoBbu6msnyOHCQE",
        {
            reply_markup: new InlineKeyboard().url(
                "source",
                "https://t.me/c/1471736013/26632",
            ),
        }
    );
}
