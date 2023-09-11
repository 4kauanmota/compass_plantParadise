export default class User {
  private Name: string;
  private Email: string;
  private Password: string;
  private Image: string;

  constructor(
    Name: string = "",
    Email: string = "",
    Password: string = "",
    Image: string = ""
  ) {
    this.Name = Name;
    this.Email = Email;
    this.Password = Password;
    this.Image = Image;
  }

  get name() {
    return this.Name;
  }

  get email() {
    return this.Email;
  }

  get password() {
    return this.Password;
  }

  get image() {
    return this.Image;
  }
}
