import { Composer } from "grammy";

import inline from "./inline.js";
import start from "./start.js";
import tgbte from "./tgbte.js";

export const composer = new Composer();

composer.use(inline);
composer.use(start);
composer.use(tgbte);
