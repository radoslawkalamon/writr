import errors from './number.errors'
import strategies from './number.strategies'

const operatorsPermitted = Object.keys(strategies)
/**
 * Validate validatorArrayGroup for Number validator
 */
export default (validatorArrayGroup) => {
  if (validatorArrayGroup && !Array.isArray(validatorArrayGroup)) {
    throw new Error(errors.parentNotAnArray)
  }
  validatorArrayGroup.forEach((validatorArray) => {
    if (!Array.isArray(validatorArray)) {
      throw new Error(errors.itemNotAnArray)
    }
    const [validatorOperator, validatorValue] = validatorArray
    if (!operatorsPermitted.includes(validatorOperator)) {
      throw new Error(errors.unknownOperator)
    }
    if (validatorArray.length !== strategies[validatorOperator].length) {
      throw new Error(errors.itemLengthError)
    }
    if (typeof validatorValue !== 'number') {
      throw new Error(errors.itemTypesError)
    }
  })
  return true
}
