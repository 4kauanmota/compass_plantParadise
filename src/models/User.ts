export default class User {
  private Name: string;
  private Email: string;
  private Image: string;

  constructor(Name: string = "", Email: string = "", Image: string = "") {
    this.Name = Name;
    this.Email = Email;
    this.Image = Image;
  }

  get name() {
    return this.Name;
  }

  get email() {
    return this.Email;
  }

  get image() {
    return this.Image;
  }
}
