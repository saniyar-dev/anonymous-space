import { SceneContext } from "telegraf/typings/scenes";

export interface IStartController {
  enter: (ctx: SceneContext) => Promise<void>;
}
