import config from '@/config';

const reducersGetValue = (prev, cur) => prev[cur];

export default {
  getValue: state => property =>
    property
      .split(config.splitChar)
      .reduce(reducersGetValue, state),
  getValidator: state => property =>
    property
      .split(config.splitChar)
      .reduce(reducersGetValue, state.validators),
};
