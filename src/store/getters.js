export default {
  getTodoById: (state) => (id) => {
    return state.todos.find((todo) => todo.id === id);
  },
  getSettings: (_state) => (_property) => {
    const propertyPath = _property.split('/');
    return propertyPath.reduce((_prevValue, _curValue) => {
      return _prevValue[_curValue];
    }, _state.settings);
  },
};
