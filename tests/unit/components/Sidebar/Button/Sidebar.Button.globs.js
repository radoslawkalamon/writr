import { mount } from '@vue/test-utils'
import SidebarButton from '@/components/Sidebar/Button/Button.vue'

const TEST_ACTION = jest.fn(() => {})
const TEST_ALT = 'test-alt'
const TEST_ICON = 'test'
const TEST_ICON_URL = '/test/icon.svg'
const TEST_NAME = 'test-name'
const TEST_PARENT_RESOLVE_ICON = jest.fn(() => TEST_ICON_URL)

export default {
  test: {
    action: TEST_ACTION,
    alt: TEST_ALT,
    icon: TEST_ICON,
    iconUrl: TEST_ICON_URL,
    name: TEST_NAME,
    parent: {
      resolveIcon: {
        fn: TEST_PARENT_RESOLVE_ICON,
        return: TEST_ICON_URL
      }
    }
  },
  wrapperFactory (props = {}) {
    return mount(SidebarButton, {
      context: {
        props: {
          action: TEST_ACTION,
          activePanel: false,
          icon: TEST_ICON,
          name: TEST_NAME,
          ...props
        }
      },
      parentComponent: {
        methods: {
          resolveIcon: TEST_PARENT_RESOLVE_ICON
        }
      }
    })
  }
}
