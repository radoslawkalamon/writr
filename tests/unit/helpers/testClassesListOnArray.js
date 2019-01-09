import createArrayClassesFromComputed from '@/../tests/unit/helpers/createArrayClassesFromComputed';

export default (computedClasses, assertionArray) => {
  const arrayClasses = createArrayClassesFromComputed(computedClasses);

  arrayClasses.forEach((element) => {
    expect(assertionArray.includes(element)).toBeTruthy();
  });
};
