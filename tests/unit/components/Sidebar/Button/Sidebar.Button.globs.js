const TEST_ICON = 'test';
const TEST_ICON_URL = '/test/icon.svg';
const TEST_THEME = 'dark';
const TEST_NAME = 'test-name';
const TEST_ALT = 'test-alt';

export default {
  test: {
    icon: TEST_ICON,
    iconUrl: TEST_ICON_URL,
    theme: TEST_THEME,
    name: TEST_NAME,
    alt: TEST_ALT,
  },
  mocks: {
    $store: {
      getters: {
        getValue: () => TEST_THEME,
      },
    },
    iconList: {
      [TEST_THEME]: {
        [TEST_ICON]: TEST_ICON_URL,
      },
    },
  },
};
