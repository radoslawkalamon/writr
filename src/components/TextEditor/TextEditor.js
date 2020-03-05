export default {
  computed: {
    spellcheckValue () {
      return this.$store.state.settings.misc.spellChecker
    },
    mainStyle () {
      const store = this.$store.state
      return {
        height: `calc(100vh - ${store.sizes.statusBar.height}px)`
      }
    },
    textEditorStyle () {
      const store = this.$store.state.settings.editor
      return {
        fontSize: `${store.text.fontSize}px`,
        lineHeight: `${store.text.lineHeight}em`,
        textIndent: `${store.text.paragraphIndent}px`,
        maxWidth: `${store.window.maxWidth}px`,
        paddingTop: `${store.window.marginTop}px`,
        paddingBottom: `${store.window.marginBottom}px`
      }
    }
  },
  methods: {
    onChange (_e) {
      const textEditor = _e.target
      if (textEditor.firstChild && textEditor.firstChild.nodeType === Node.TEXT_NODE) {
        textEditor.innerHTML = `<div>${textEditor.innerHTML}</div>`
        window.getSelection().collapse(textEditor.firstChild, 1)
      }

      // Calculate stats
      this.$store.dispatch('calculateStats', textEditor.innerText)
    },
    onPaste (_e) {
      const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
      const clipboardText = _e.clipboardData.getData('text/plain')

      if (isFirefox) {
        // TODO: Implement like Chrome / Safari pasting - \n creates new <div>
        alert('Pasting not supported on Firefox yet!')
        return false
      }

      // Works on Chrome & Safari
      document.execCommand('inserttext', false, clipboardText)
      return true
    }
  },
  data () {
    return {
      welcomeText: this.$t('components.TextEditor.welcomeText')
    }
  }
}
