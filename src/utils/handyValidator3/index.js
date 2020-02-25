// Core components
import errors from './index.errors'
// Built-in Validators
import arrayValidator from './validators/array/array'
import booleanValidator from './validators/boolean/boolean'
import equalToValidator from './validators/equalTo/equalTo'
import nullValidator from './validators/null/null'
import numberValidator from './validators/number/number'
import objectValidator from './validators/object/object'
// import palindromeValidator from './validators/palindrome/palindrome';
import stringValidator from './validators/string/string'
import undefinedValidator from './validators/undefined/undefined'
/**
 * Handy Validator
 * @version 3.0.0
 * @constructor
 */
class HandyValidator {
  /**
   * Init Handy Validator
   * @param {boolean} loadBuiltInValidators
   */
  constructor (loadBuiltInValidators = true) {
    this.loadedValidators = {}
    // Load BuiltIn validators if needed
    if (loadBuiltInValidators === true) {
      this.addValidator('array', arrayValidator)
      this.addValidator('boolean', booleanValidator)
      this.addValidator('equalTo', equalToValidator)
      this.addValidator('null', nullValidator)
      this.addValidator('number', numberValidator)
      this.addValidator('object', objectValidator)
      // this.addValidator('palindrome', palindromeValidator);
      this.addValidator('string', stringValidator)
      this.addValidator('undefined', undefinedValidator)
    }
  }

  /**
   * Adds validator plugin
   */
  addValidator (name, callback) {
    if (typeof name !== 'string') {
      throw new Error(errors.addValidator.nameNotString)
    }
    if (name === '') {
      throw new Error(errors.addValidator.nameEmpty)
    }
    if (typeof callback !== 'function') {
      throw new Error(errors.addValidator.callbackNotFunction)
    }
    if (typeof this.loadedValidators[name] === 'function') {
      throw new Error(errors.addValidator.alreadyLoaded)
    }
    this.loadedValidators[name] = callback
    return true
  }

  /**
   * Removes validator plugin
   */
  removeValidator (name) {
    if (typeof name !== 'string') {
      throw new Error(errors.removeValidator.nameNotString)
    }
    if (name === '') {
      throw new Error(errors.removeValidator.nameEmpty)
    }
    if (typeof this.loadedValidators[name] !== 'function') {
      throw new Error(errors.removeValidator.validatorNotDefined)
    }
    return delete this.loadedValidators[name]
  }

  /**
   * Checks if validator is defined
   */
  checkValidator (name) {
    return typeof this.loadedValidators[name] === 'function'
  }

  /**
   * Returns validator if defined
   */
  getValidator (name) {
    return this.loadedValidators[name] || false
  }

  /**
   * Validates using validator
   */
  validate (name, value, ...args) {
    if (typeof this.loadedValidators[name] !== 'function') {
      throw new Error(errors.validate.validatorNotLoaded)
    }
    return this.loadedValidators[name](value, ...args)
  }
}
export default HandyValidator
