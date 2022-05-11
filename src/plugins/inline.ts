import { Context } from 'grammy';


export function inline(ctx: Context) {
    /**
     * https://grammy.dev/guide/inline-queries.html
     */
    ctx.answerInlineQuery(
        [
            {
                type: "sticker",
                id: "ShitDevsSay",
                sticker_file_id: "CAACAgIAAxkBAAEPu1Fie96etjykdLTIzOW3o4MV6JPv6wACpAwAAqoUyEoBbu6msnyOHCQE",
            },
        ],
        { cache_time: 30 * 24 * 3600 }, // one month in seconds
    );
}
