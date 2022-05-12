import { Composer } from "grammy";

import inline from "./inline";
import start from "./start";
import tgbte from "./tgbte";

const composer = new Composer();

export default composer;

composer.use(inline);
composer.use(start);
composer.use(tgbte);
