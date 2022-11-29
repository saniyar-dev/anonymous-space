import { Telegraf } from "telegraf";
import { SceneContext } from "telegraf/typings/scenes";

export const startCommand = (bot: Telegraf<SceneContext>) => {
  bot.start((ctx) => ctx.scene.enter("start-scene"));
};
