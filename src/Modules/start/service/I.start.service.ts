import { ContextFromType } from "../types/context";

export interface IStartService {
  startSpace: (from: ContextFromType) => void;
  startInPV: (from: ContextFromType) => Promise<void>;
}
