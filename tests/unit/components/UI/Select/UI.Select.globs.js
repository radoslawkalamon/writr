const TEST_TITLE = 'This is test title!'
const TEST_LABELS = ['This is test label 1', 'This is test label 2!']
const TEST_ITEM = 'testItem'
const TEST_ACTION = 'testAction'
const TEST_STORE_VALUE = 'label1'
const TEST_STORE_VALIDATOR = ['equalTo', ['label1', '2label']]
const TEST_STORE_VALIDATOR_ARRAY = ['label1', '2label']
const TEST_NAME = 'test-name'

export default {
  test: {
    title: TEST_TITLE,
    labels: TEST_LABELS,
    item: TEST_ITEM,
    action: TEST_ACTION,
    storeValue: TEST_STORE_VALUE,
    storeValidator: TEST_STORE_VALIDATOR,
    storeValidatorArray: TEST_STORE_VALIDATOR_ARRAY,
    name: TEST_NAME
  },
  mocks: {
    $store: {
      getters: {
        getValue: () => TEST_STORE_VALUE,
        getValidator: () => TEST_STORE_VALIDATOR
      },
      dispatch: jest.fn()
    }
  },
  propsData: {
    labels: TEST_LABELS,
    item: TEST_ITEM,
    action: TEST_ACTION,
    name: TEST_NAME
  }
}
