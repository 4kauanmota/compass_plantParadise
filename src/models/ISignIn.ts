export default interface ISignIn {
  email: {
    value: string;
    errors: Array<string>;
  };
  password: {
    value: string;
    errors: Array<string>;
  };
}
