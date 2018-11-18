const TEST_ITEM = 'test.item.store';
const TEST_ITEM_WRONG = 'test.item.notExists';
const TEST_VALUE = 'This is changed test value!';
const TEST_VALUE_WRONG = 13;
const TEST_NOT_CHANGED_VALUE = 'NOT CHANGED!';
const TEST_VALIDATOR = 'String';

export default {
  test: {
    item: TEST_ITEM,
    itemWrong: TEST_ITEM_WRONG,
    value: TEST_VALUE,
    valueWrong: TEST_VALUE_WRONG,
    notChangedValue: TEST_NOT_CHANGED_VALUE,
    validator: TEST_VALIDATOR,
  },
  state: {
    test: {
      item: {
        store: TEST_NOT_CHANGED_VALUE,
      },
    },
    validators: {
      test: {
        item: {
          store: TEST_VALIDATOR,
        },
      },
    },
  },
};
