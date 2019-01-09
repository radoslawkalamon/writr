import StatusbarBase from '@/components/Statusbar/Base/Base.vue';
import StatusbarItem from '@/components/Statusbar/Item/Item.vue';
import StatusbarClock from '@/components/Statusbar/Clock/Clock.vue';

export default {
  components: {
    StatusbarBase,
    StatusbarItem,
    StatusbarClock,
  },
  computed: {
    itemCharactersValue() {
      const { stats } = this.$store.state;
      return `${stats.charactersWithoutSpaces} / ${stats.characters}`;
    },
  },
};
