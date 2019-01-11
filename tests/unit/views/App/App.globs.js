const TEST_THEMENAME = 'dark';
const TEST_LANG = 'pl';
const TEST_LANG_CHANGE = 'en';
const TEST_TRANSLATE_TEXT = 'test-translate-text';
const TEST_PANEL_NAME = 'testPanel';
const TEST_TEXT = 'This is test text!';

export default {
  test: {
    themeName: TEST_THEMENAME,
    lang: TEST_LANG,
    langChange: TEST_LANG_CHANGE,
    panelName: TEST_PANEL_NAME,
    text: TEST_TEXT,
  },
  mocks: {
    $store: {
      getters: {
        getValue: () => TEST_THEMENAME,
      },
      state: {
        settings: {
          misc: {
            language: TEST_LANG,
            version: 'alfa',
          },
          statusBar: {
            isVisible: true,
          },
        },
      },
    },
    $i18n: {
      locale: TEST_LANG,
    },
    $t: () => TEST_TRANSLATE_TEXT,
  },
};
