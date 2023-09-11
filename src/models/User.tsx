export default class User {
  Name: string;
  Email: string;
  Password: string;

  constructor(Name: string = "", Email: string = "", Password: string = "") {
    this.Name = Name;
    this.Email = Email;
    this.Password = Password;
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
}
