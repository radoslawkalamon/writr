import validate from 'handy-validator';
import { throttle } from 'throttle-debounce';

const CALCULATE_STATS_THROTTLE = 1000;

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
    if (payload.componentObject !== null && typeof payload.componentObject === 'object') {
      payload.componentObject[componentErrorProperty] = !isValueValid;
    }
  },
  calculateStats: throttle(
    CALCULATE_STATS_THROTTLE,
    (context, text) => {
      const { pageFormulaMainIngredient, pageFormulaDivider } = context.state.settings.stats;
      const statsToSave = {
        characters: text.length,
        charactersWithoutSpaces: text.length - (text.split(/\s/).length - 1),
        words: text.split(/\s/).filter(n => n !== '').length,
        paragraphs: text.split(/\n/).filter(n => n !== '').length,
      };
      const pages = ~~((statsToSave[pageFormulaMainIngredient] / pageFormulaDivider) + 1);

      context.commit('COMMIT_STATS', {
        ...statsToSave,
        pages,
      });
    },
  ),
};
