const STATUSBAR_HEIGHT = 29;

export default {
  test: {
    statusBarHeight: STATUSBAR_HEIGHT,
  },
  mocks: {
    $el: {
      getBoundingClientRect() {
        return {
          height: STATUSBAR_HEIGHT,
        };
      },
    },
    $store: {
      dispatch: () => {},
    },
  },
};
