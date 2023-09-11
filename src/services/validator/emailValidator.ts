const emailValidator = (email: any) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (email.value.length === 0) {
    email.errors.push("Cannot be empty");
  } else if (!email.value.match(regex)) {
    email.errors.push("Invalid email");
  }
};

export default emailValidator;
