export default class Plant {
  private Id: string;
  private Title: string;
  private Description: string;
  private Price: number;
  private Category: string;
  private CategoryId: string;
  private Image: string;

  constructor(
    Id: string,
    Title: string,
    Description: string,
    Price: number,
    Category: string,
    CategoryId: string,
    Image: string
  ) {
    this.Id = Id;
    this.Title = Title;
    this.Description = Description;
    this.Price = Price;
    this.Category = Category;
    this.CategoryId = CategoryId;
    this.Image = Image;
  }

  get id() {
    return this.Id;
  }

  get title() {
    return this.Title;
  }

  get description() {
    return this.Description;
  }

  get price() {
    return this.Price;
  }

  get category() {
    return this.Category;
  }

  get categoryId() {
    return this.CategoryId;
  }

  get image() {
    return this.Image;
  }
}
