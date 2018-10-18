import config from '@/config';

export default {
  CHANGE_STATE(state, payload) {
    payload.item
      .split(config.splitChar)
      .reduce((prev, cur, index, array) => {
        if (index + 1 === array.length) {
          prev[cur] = payload.value;
        }

        return prev[cur];
      }, state);
  },
};
