import createArrayClassesFromComputed from '@/../tests/unit/helpers/createArrayClassesFromComputed';

export default (computedClasses, assertionArray) => {
  const arrayClasses = createArrayClassesFromComputed(computedClasses);
  const a = assertionArray.every(v => arrayClasses.includes(v));

  expect(a).toBeTruthy();
};
