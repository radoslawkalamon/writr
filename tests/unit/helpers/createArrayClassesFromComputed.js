export default computedObject => computedObject.reduce((arrayClasses, currentClass) => {
  if (typeof currentClass === 'string') return [...arrayClasses, currentClass]
  if (typeof currentClass === 'object' && currentClass !== null) {
    const elementClassName = Object.keys(currentClass)
    return currentClass[elementClassName[0]]
      ? [...arrayClasses, elementClassName[0]]
      : arrayClasses
  }

  return arrayClasses
}, [])
