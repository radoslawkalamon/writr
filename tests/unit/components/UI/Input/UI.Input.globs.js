const TEST_UNIT = 'inch'
const TEST_ERROR_TIP = 'testErrorTip'
const TEST_ITEM = 'testItem'
const TEST_ACTION = 'testAction'
const TEST_STORE_VALUE = 1337
const TEST_TITLE = 'This is test title!'
const TEST_NAME = 'test-name'

export default {
  test: {
    unit: TEST_UNIT,
    errorTip: TEST_ERROR_TIP,
    item: TEST_ITEM,
    action: TEST_ACTION,
    storeValue: TEST_STORE_VALUE,
    title: TEST_TITLE,
    name: TEST_NAME
  },
  mocks: {
    $store: {
      getters: {
        getValue: () => TEST_STORE_VALUE
      },
      dispatch: jest.fn()
    }
  },
  propsData: {
    errorTip: TEST_ERROR_TIP,
    item: TEST_ITEM,
    action: TEST_ACTION,
    name: TEST_NAME
  }
}
