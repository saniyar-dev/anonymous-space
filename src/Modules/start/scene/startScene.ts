import { Scenes } from "telegraf";
import { getValue } from "../../../i18n/i18n";
import StartController from "../controller/start.controller";
import StartRepo from "../Repo/start.repo";
import StartService from "../service/start.service";

const startScene = new Scenes.BaseScene<Scenes.SceneContext>("start-scene");

const startController = new StartController(new StartService(new StartRepo()));

startScene.enter((ctx) => {
  startController.enter(ctx);
});

export default startScene;
