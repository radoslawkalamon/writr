// General
import BaseHeader from '@/components/UI/Header/Header.vue'
import BaseInput from '@/components/UI/Input/Input.vue'
import BaseSection from '@/components/UI/Section/Section.vue'
import BaseSelect from '@/components/UI/Select/Select.vue'
import BaseText from '@/components/UI/Text/Text.vue'
import BaseToggle from '@/components/UI/Toggle/Toggle.vue'
import SidebarPanel from '@/components/Sidebar/Panel/Panel.vue'
// Sections
import SectionTheme from '@/views/Settings/sections/Theme.vue'
import SectionText from '@/views/Settings/sections/Text.vue'
import SectionTextEditor from '@/views/Settings/sections/TextEditor.vue'
import SectionStats from '@/views/Settings/sections/Stats.vue'
import SectionStatusbar from '@/views/Settings/sections/Statusbar.vue'
import SectionStatusbarContent from '@/views/Settings/sections/StatusbarContent.vue'
import SectionMisc from '@/views/Settings/sections/Misc.vue'

export default {
  components: {
    BaseHeader,
    BaseInput,
    BaseSection,
    BaseSelect,
    BaseText,
    BaseToggle,
    SidebarPanel,
    SectionTheme,
    SectionText,
    SectionTextEditor,
    SectionStats,
    SectionStatusbar,
    SectionStatusbarContent,
    SectionMisc
  }
}
