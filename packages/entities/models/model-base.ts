export abstract class ModelBase {
  public id: number;
  public createdDate: Date;
  public updatedDate: Date | null = null;
  public createdByUserId: number;
  public updatedByUserId: number | null = null;

  constructor(id: number, createdByUserId: number) {
    this.id = id;
    this.createdDate = new Date();
    this.createdByUserId = createdByUserId;
  }
}
