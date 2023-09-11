const emailValidator = (email: any) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email.value.match(regex)) {
    email.errors.push("Invalid email");
  }
};

export default emailValidator;
