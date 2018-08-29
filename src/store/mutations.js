export default {
  getTextEditorElement(_state, _payload) {
    _state.textEditorElement = _payload;
  },
  changeSettings(_state, _payload) {
    const propertyPath = _payload.item.split('/');

    propertyPath.reduce((_prevValue, _curValue, _index, _array) => {
      if (_index + 1 === _array.length) {
        _prevValue[_curValue] = _payload.value;
      } else {
        return _prevValue[_curValue];
      }
    }, _state.settings);
  },
};
