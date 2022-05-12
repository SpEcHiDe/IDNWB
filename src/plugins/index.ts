import { Composer } from "grammy";

import inline from "./inline.js";
import start from "./start.js";
import tgbte from "./tgbte.js";

const composer = new Composer();

export default composer;

composer.use(inline);
composer.use(start);
composer.use(tgbte);
