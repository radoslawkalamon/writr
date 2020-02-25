import strategies from './number.strategies'
import validatorArrayGroupTypeGuard from './number.validatorArrayGroup.typeGuard'
/**
 * Number validator
 * @version 1.0.0
 */
export default (value, validatorArrayGroup = [], validateSome = false) => {
  let validationResultArray
  if (typeof value !== 'number') {
    return false
  }
  try {
    validatorArrayGroupTypeGuard(validatorArrayGroup)
    validationResultArray = validatorArrayGroup.map((validatorArray) => {
      const [validatorOperator, validatorValue] = validatorArray
      const operatorToUse = strategies[validatorOperator]
      const validationResult = operatorToUse(value, validatorValue)
      if (validationResult === false) {
        if (validateSome) {
          return false
        }
        throw new Error()
      }
      return true
    })
  } catch (e) {
    // eslint-disable-next-line no-console
    if (e.message !== '') {
      console.error(e)
    }
    return false
  }
  return validateSome
    ? validationResultArray.some(x => x === true)
    : true
}
