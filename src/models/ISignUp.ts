export default interface ISignUp {
  name: {
    value: string;
    errors: Array<string>;
  };
  email: {
    value: string;
    errors: Array<string>;
  };
  password: {
    value: string;
    errors: Array<string>;
  };
  ["password confirmation"]: {
    value: string;
    errors: Array<string>;
  };
}
