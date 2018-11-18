import validate from 'handy-validator';

export default {
  changeState(context, payload) {
    // const payload_template = {
    //   item: 'settings/editor/text/fontSize',
    //   value: 16,
    //   componentObject: this,
    //   componentErrorProperty: 'error',
    // };
    const defaultComponentErrorProperty = 'error';

    const validator = context.getters.getValidator(payload.item);
    const isValueValid = validate(validator, payload.value);
    const componentErrorProperty = payload.componentErrorProperty || defaultComponentErrorProperty;

    if (isValueValid) {
      context.commit('CHANGE_STATE', {
        item: payload.item,
        value: payload.value,
      });
    }

    // Send error to componentObject
    if (typeof payload.componentObject === 'object') {
      payload.componentObject[componentErrorProperty] = !isValueValid;
    }
  },
};
