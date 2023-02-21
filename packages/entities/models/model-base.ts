export class ModelBase {
  public id: number;
  public createdDate: Date;
  public updatedDate: Date | null = null;
  public createdByUserId: number;
  public updatedByUserId: number | null = null;
}
