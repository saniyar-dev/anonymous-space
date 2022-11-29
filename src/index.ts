import { Telegraf, Scenes, session } from "telegraf";
import * as dotenv from "dotenv";
dotenv.config();
import { SocksProxyAgent } from "socks-proxy-agent";
import { setupStages } from "./Scenes";
import { setupCommands } from "./Commands";
const proxyAgent = new SocksProxyAgent({
  hostname: "127.0.0.1",
  port: "1080",
});

if (process.env.BOT_TOKEN === "" || !process.env.BOT_TOKEN)
  throw new Error("NO BOT_TOKEN");

const bot = new Telegraf<Scenes.SceneContext>(process.env.BOT_TOKEN, {
  telegram: {
    agent: proxyAgent,
  },
});

bot.use(session());
setupStages(bot);

setupCommands(bot);

bot.launch();
