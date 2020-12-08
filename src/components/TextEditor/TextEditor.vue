<template>
  <main
    :style="mainStyle"
    class="text-editor"
  >
    <div
      id="text-editor"
      :spellcheck="spellcheckValue"
      :style="textEditorStyle"
      class="text-editor__wrapper"
      contenteditable="true"
      @input="onChange"
      @paste.prevent="onPaste"
    >
      <div>Writr v2.1.4 [pre-γ]<br><br>Witaj we Writrze - Ultralekkim i szybkim edytorze tekstu.<br><br>- działa na każdym urządzeniu wyposażonym w nowoczesną przeglądarkę,<br>- możesz korzystać z niego na telefonie i tablecie,<br>- jest ultralekki i szybki,<br>- prosty i nierozpraszający interfejs,<br>- stworzony z myślą o pisarzach i tworzących teksty,<br><br>Changelog:<br>2.0.1<br>- dodano tekst powitalny,<br>- dodany przycisk Nowy Plik.<br>2.0.0<br>- dodano system statystyk,<br>- dodano dedykowany panel statystyk,<br>- dodano status bar ze statystykami i zegarem,<br>- poprawiono błędy zgłoszone przez użytkowników.<br>1.1.0<br>- naprawiono błąd związany z brakiem marginesu paragrafów.<br>1.0.0<br>- pierwsza publiczna wersja Writra.<br><br>Plany:<br>- system pliku *.wrt (otwieranie i zapisywanie)<br>- alarmy i cele,<br>- system kopii zapasowych i autozapisu,<br>- notatki,<br>- znajdź i zamień,<br>- konwersja na aplikację iOS, Android, Windows,<br>- dostosowanie czcionki.</div>
    </div>
  </main>
</template>

<script src='./TextEditor.js'></script>
<style src='./TextEditor.scss' lang='scss' scoped></style>
