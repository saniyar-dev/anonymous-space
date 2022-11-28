import { SceneContext, SceneSessionData } from "telegraf/typings/scenes";
import { getValue } from "../../../i18n/i18n";
import { IStartService } from "../service/I.start.service";
import { IStartController } from "./I.start.controller";

class StartController implements IStartController {
  private service: IStartService;
  constructor(StartService: IStartService) {
    this.service = StartService;
  }

  enter = async (ctx: SceneContext<SceneSessionData>) => {
    const chatType = ctx.chat?.type;
    switch (chatType) {
      case "channel":
        ctx.reply(getValue("forbidden-action"));
        break;
      case "private":
        this.service.startInPV(ctx.from);
        ctx.reply("started in pv");
        break;
      default:
        this.service.startSpace(ctx.from);
        ctx.reply("started in group");
    }
  };
}

export default StartController;
