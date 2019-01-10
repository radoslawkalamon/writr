const TIMESTAMP = 1542836053153;
const TIME_HOURS = 22;
const TIME_MINUTES = 34;
const TIME_SECONDS = 13;
const TIME_MILLISECONDS = 153;
const NEXT_UPDATE_INTERVAL = 46847;

const PANEL_NAME = 'test-panel';

const TRANSLATE_TEXT = 'translate-text';
const FAKE_TEXT = 'Fake text';
const FILENAME = 'writr_2018_11_21__22_34.txt';
const FILETYPE = 'text/plain';

const THEME_NAME = 'dark';
const ICON_TEST_URL = '/img/hello.svg';
const ICON_TEST_NAME = 'hello';

export default {
  test: {
    timestamp: TIMESTAMP,
    time: {
      hours: TIME_HOURS,
      minutes: TIME_MINUTES,
      seconds: TIME_SECONDS,
      milliseconds: TIME_MILLISECONDS,
    },
    nextUpdateInterval: NEXT_UPDATE_INTERVAL,
    fakeText: FAKE_TEXT,
    filename: FILENAME,
    filetype: FILETYPE,
    iconTestURL: ICON_TEST_URL,
    iconTestName: ICON_TEST_NAME,
    theme: THEME_NAME,
    panelName: PANEL_NAME,
  },
  mocks: {
    $t: () => TRANSLATE_TEXT,
    $store: {
      getters: {
        getValue: () => THEME_NAME,
      },
    },
  },
};
