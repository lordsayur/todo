import { TaskStatus } from "../enums";
import { ModelBase } from "./model-base";

export class Task extends ModelBase {
  public description: string;
  public status: TaskStatus;
  public parentTaskId: number | null;

  constructor(
    id: number,
    createdByUserId: number,
    description: string,
    status?: TaskStatus,
    parentTaskId?: number
  ) {
    super(id, createdByUserId);
    this.description = description;
    this.status = status ?? TaskStatus.ToDo;
    this.parentTaskId = parentTaskId ?? null;
  }
}
