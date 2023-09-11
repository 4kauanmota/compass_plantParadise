const passwordConfirmationValidator = (
  passwordConfirmation: any,
  password: any
) => {
  if (passwordConfirmation.value.length === 0) {
    passwordConfirmation.errors.push("Cannot be empty");
  } else if (passwordConfirmation.value !== password.value) {
    passwordConfirmation.errors.push("Passwords must be the same");
  }
};

export default passwordConfirmationValidator;
