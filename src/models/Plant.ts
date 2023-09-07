export default class Plant {
  id: string;
  name: string;
  price: number;
  image: string;

  constructor(id: string, name: string, price: number, image: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }

  get Id() {
    return this.id;
  }

  get Name() {
    return this.name;
  }

  get Price() {
    return this.price;
  }

  get Image() {
    return this.image;
  }
}
