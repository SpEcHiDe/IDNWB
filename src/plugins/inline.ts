import { Composer } from "grammy";

const composer = new Composer();

export default composer;

composer.on("inline_query", (ctx) => {
    /**
     * https://grammy.dev/guide/inline-queries.html
     */
    return ctx.answerInlineQuery(
        [
            {
                type: "article",
                id: "1471736013 26632",
                title: "it does not work",
                input_message_content: {
                    message_text:
                        "Just keep in mind that when you say \"\
It doesn't work\", we cannot login to your computer and \
check what's wrong. You should explain what you are \
expecting to happen and what's happening. \
If there is any error, you should also \
send the error message.",
                    parse_mode: "HTML",
                },
                url: "https://t.me/c/1471736013/26632",
                thumb_url: "https://te.legra.ph/file/e8e6d2e8738438ad61d62.jpg",
                thumb_width: 640,
                thumb_height: 640,
            },
            {
                type: "sticker",
                id: "ShitDevsSay",
                sticker_file_id:
                    "CAACAgIAAxkBAAEPu1Fie96etjykdLTIzOW3o4MV6JPv6wACpAwAAqoUyEoBbu6msnyOHCQE",
            },
        ],
        {
            cache_time: 30 * 24 * 3600, // one month in seconds
            switch_pm_text: "[❤️] grammY ",
            switch_pm_parameter: "pkliawot",
        }
    );
});
