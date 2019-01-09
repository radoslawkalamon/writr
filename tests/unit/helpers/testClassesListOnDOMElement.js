import createArrayClassesFromComputed from '@/../tests/unit/helpers/createArrayClassesFromComputed';

export default (computedClasses, DOMElement) => {
  const arrayClasses = createArrayClassesFromComputed(computedClasses);

  arrayClasses.forEach((element) => {
    expect(DOMElement.classes(element)).toBeTruthy();
  });
};
