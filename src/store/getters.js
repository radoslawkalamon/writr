export default {
  getSettings: (_state) => (_property) => {
    const propertyPath = _property.split('/');
    return propertyPath.reduce((_prevValue, _curValue) => {
      return _prevValue[_curValue];
    }, _state.settings);
  },
  getSettingsType: (_state) => (_property) => {
    const propertyPath = _property.split('/');
    return propertyPath.reduce((_prevValue, _curValue) => {
      return _prevValue[_curValue];
    }, _state.types.settings);
  },
};
