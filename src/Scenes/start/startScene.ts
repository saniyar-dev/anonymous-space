import { Scenes } from "telegraf";
import StartController from "../../Modules/start/controller/start.controller";
import StartRepo from "../../Modules/start/Repo/start.repo";
import StartService from "../../Modules/start/service/start.service";

const startScene = new Scenes.BaseScene<Scenes.SceneContext>("start-scene");

const startController = new StartController(new StartService(new StartRepo()));

startScene.enter((ctx) => {
  startController.enter(ctx);
});

export default startScene;
