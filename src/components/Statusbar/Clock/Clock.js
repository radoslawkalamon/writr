export default {
  methods: {
    intervalCallback() {
      const date = new Date();
      const dateHours = date.getHours();
      const dateMinutes = date.getMinutes();
      const dateSeconds = date.getSeconds();
      const dateMilliseconds = date.getMilliseconds();

      this.updateTime(dateHours, dateMinutes);
      this.setupNextUpdate(dateSeconds, dateMilliseconds);
    },
    updateTime(hours, minutes) {
      this.time = [
        hours < 10 ? `0${hours}` : hours,
        ':',
        minutes < 10 ? `0${minutes}` : minutes,
      ].join('');
    },
    setupNextUpdate(second, milliseconds) {
      const baseInterval = 60000;
      const nextUpdateIntervalDiff = (second * 1000) + milliseconds;
      const nextUpdateInterval = baseInterval - nextUpdateIntervalDiff;

      window.setTimeout(this.intervalCallback, nextUpdateInterval);
    },
  },
  created() {
    this.intervalCallback();
  },
  data() {
    return {
      time: '--:--',
      interval: 60000,
    };
  },
};
