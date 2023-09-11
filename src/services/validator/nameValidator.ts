const nameValidator = (name: any) => {
  const letters = /^[A-Za-z]+$/;

  if (name.value.length === 0) {
    name.errors.push("Cannot be empty");
  } else {
    if (name.value.length <= 1) {
      name.errors.push("Must be longer than 1 character");
    }

    if (!name.value.match(letters)) {
      name.errors.push("Should only contain letters");
    }
  }
};

export default nameValidator;
