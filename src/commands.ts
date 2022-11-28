import { Telegraf } from "telegraf";
import { SceneContext } from "telegraf/typings/scenes";
import { startCommand } from "./Modules/start/startCommand";

export const setupCommands = (bot: Telegraf<SceneContext>) => {
  startCommand(bot);
};
