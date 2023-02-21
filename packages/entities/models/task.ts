import { TaskStatus } from "../enums";
import { ModelBase } from "./model-base";

export class Task extends ModelBase {
  public description: string;
  public status: TaskStatus;
  public parentTaskId: number | null;
}
