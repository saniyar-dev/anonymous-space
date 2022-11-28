import { IStartRepo } from "./I.start.repo";

class StartRepo implements IStartRepo {
  constructor() {}

  saveGroupInfo = (chatId: string) => {
    console.log("chatId saved!");
  };
}

export default StartRepo;
