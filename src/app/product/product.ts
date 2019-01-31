export class Product {
  //? is used for optional argument
  constructor(
    public id?: number,
    public name?: string,
    public price?: number,
    public quantity?: number
  ) {

  }
}