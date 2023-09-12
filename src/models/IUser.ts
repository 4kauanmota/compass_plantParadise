export default interface IUser {
  name: {
    value: string;
    errors: Array<string>;
  };
  image: {
    value: string;
    errors: Array<string>;
  };
  password: {
    value: string;
    errors: Array<string>;
  };
}
