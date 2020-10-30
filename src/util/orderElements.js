export default (inputElements) => {
  let outputElements = [];
  inputElements.forEach((element) =>
    outputElements.splice(element.ordre - 1, 0, element)
  );
  return outputElements;
};
