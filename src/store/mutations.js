import config from '@/config'

export default {
  CHANGE_STATE (state, payload) {
    payload.item
      .split(config.splitChar)
      .reduce((prev, cur, index, array) => {
        if (prev[cur] === undefined) {
          const s = `$store.mutations.CHANGE_STATE :: Item does not exists! :: ${payload.item}`
          throw new Error(s)
        }

        if (index + 1 === array.length) {
          // eslint-disable-next-line no-param-reassign
          prev[cur] = payload.value
        }

        return prev[cur]
      }, state)
  },
  COMMIT_STATS (state, payload) {
    state.stats = {
      characters: payload.characters,
      charactersWithoutSpaces: payload.charactersWithoutSpaces,
      words: payload.words,
      paragraphs: payload.paragraphs,
      pages: payload.pages
    }
  }
}
