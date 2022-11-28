import { Scenes, Telegraf } from "telegraf";
import { SceneContext } from "telegraf/typings/scenes";
import startScene from "./Modules/start/scene/startScene";

const botStage = new Scenes.Stage([startScene]);

export const setupStages = (bot: Telegraf<SceneContext>) => {
  bot.use(botStage.middleware());
};
