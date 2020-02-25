import createArrayClassesFromComputed from '@/../tests/unit/helpers/createArrayClassesFromComputed'

export default (computedClasses, DOMElement) => {
  const arrayClasses = createArrayClassesFromComputed(computedClasses)
  const a = DOMElement.classes().every(v => arrayClasses.includes(v))

  expect(a).toBeTruthy()
}
