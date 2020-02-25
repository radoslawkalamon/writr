const TEST_FONTSIZE = 12
const TEST_LINEHEIGHT = 10
const TEST_PARAGRAPHINDENT = 20
const TEST_MAXWIDTH = 100
const TEST_MARGINTOP = 110
const TEST_MARGINBOTTOM = 120
const TEST_STATUS_BAR_HEIGHT = 30
const TEST_SPELLCHECKER = false
const TEST_WELCOMETEXT = 'Welcome Text'

export default {
  test: {
    fontSize: TEST_FONTSIZE,
    lineHeight: TEST_LINEHEIGHT,
    paragraphIndent: TEST_PARAGRAPHINDENT,
    maxWidth: TEST_MAXWIDTH,
    marginTop: TEST_MARGINTOP,
    marginBottom: TEST_MARGINBOTTOM,
    spellChecker: TEST_SPELLCHECKER,
    statusBarHeight: TEST_STATUS_BAR_HEIGHT
  },
  mocks: {
    $store: {
      state: {
        settings: {
          editor: {
            text: {
              fontSize: TEST_FONTSIZE,
              lineHeight: TEST_LINEHEIGHT,
              paragraphIndent: TEST_PARAGRAPHINDENT
            },
            window: {
              maxWidth: TEST_MAXWIDTH,
              marginTop: TEST_MARGINTOP,
              marginBottom: TEST_MARGINBOTTOM
            }
          },
          misc: {
            spellChecker: TEST_SPELLCHECKER
          }
        },
        sizes: {
          statusBar: {
            height: TEST_STATUS_BAR_HEIGHT
          }
        }
      }
    },
    $t: () => TEST_WELCOMETEXT
  }
}
