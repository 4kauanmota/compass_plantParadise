const imageValidator = (image: any = "") => {
  const imageUrl = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i;

  if (!image.value.match(imageUrl) && image.value !== "") {
    image.errors.push("This link isn't a valid image");
  }
};

export default imageValidator;
