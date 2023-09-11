const passwordValidator = (password: any) => {
  const numbers = /[0-9]/g;
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;

  if (password.value.trim().length <= 8) {
    password.errors.push("Must be longer than 8 characters");
  }

  if (!password.value.match(lowerCaseLetters)) {
    password.errors.push("Must have at least one lower-case letter");
  }

  if (!password.value.match(upperCaseLetters)) {
    password.errors.push("Must have at least one upper-case letter");
  }

  if (!password.value.match(numbers)) {
    password.errors.push("Must have at least one number");
  }
};

export default passwordValidator;
