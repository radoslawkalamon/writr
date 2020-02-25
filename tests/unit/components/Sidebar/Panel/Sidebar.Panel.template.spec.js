import { mount } from '@vue/test-utils'
import SidebarPanel from '@/components/Sidebar/Panel/Panel.vue'
import GLOBS from './Sidebar.Panel.globs'

describe('@Components/Sidebar/Panel#computed', () => {
  it('should wrapper have proper classes', () => {
    const w = mount(SidebarPanel, {
      context: {
        props: {
          name: GLOBS.test.name
        }
      }
    })
    const a = `sidebar-panel sidebar-panel--${GLOBS.test.name}`

    expect(w.attributes('class')).toEqual(a)
  })
})
