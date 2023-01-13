export class EspecificationDB {
  constructor(
    private name: string,
    private description: string,
    private value: number
  ) {}

  public getName = () => {
    return this.name;
  };
  public setName = (newName: string) => {
    this.name = newName;
  };

  public getDescription = () => {
    return this.description;
  };
  public setDescription = (newDescription: string) => {
    this.description = newDescription;
  };

  public getValue = () => {
    return this.value;
  };
  public setValue = (newValue: number) => {
    this.value = newValue;
  };
}
