export default (styleObject, DOMElement) => {
  const propertiesToTest = Object.keys(styleObject);

  propertiesToTest.forEach((property) => {
    const DOMElementStyleProperty = DOMElement.style[property];
    const a = styleObject[property];

    expect(DOMElementStyleProperty).toEqual(a);
  });
};
