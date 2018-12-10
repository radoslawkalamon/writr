export default {
  methods: {
    readTime() {
      const date = new Date();
      const dateHours = date.getHours().toString();
      const dateMinutes = date.getMinutes().toString();

      this.time = [
        dateHours < 10 ? `0${dateHours}` : dateHours,
        ':',
        dateMinutes < 10 ? `0${dateMinutes}` : dateMinutes,
      ].join('');
    },
    intervalCreate(interval) {
      const checkedInterval = typeof interval === 'number' ? interval : this.interval;
      setTimeout(this.intervalCallback, checkedInterval);
    },
    intervalCallback(isFirstTime) {
      let interval;

      /**
       * This is need to proper update time,
       * eg. if someone open writr on HH:MM:50
       */
      if (isFirstTime) {
        const date = new Date();
        interval = ((this.interval / 1000) - date.getSeconds()) * 1000;
      }

      this.readTime();
      this.intervalCreate(interval);
    },
  },
  created() {
    this.intervalCallback(true);
  },
  data() {
    return {
      time: '--:--',
      interval: 60000,
    };
  },
};
