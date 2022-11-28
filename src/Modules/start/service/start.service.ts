import { IStartRepo } from "../Repo/I.start.repo";
import { ContextFromType } from "../types/context";
import { IStartService } from "./I.start.service";

class StartService implements IStartService {
  private repo: IStartRepo;
  constructor(startRepo: IStartRepo) {
    this.repo = startRepo;
  }

  startSpace = (from: ContextFromType) => {
    console.log(from);
    console.log(from?.id);
    this.repo.saveGroupInfo(from?.id ? from.id.toString() : "");
  };

  startInPV = async (from: ContextFromType) => {
    console.log(from?.username);
  };
}

export default StartService;
