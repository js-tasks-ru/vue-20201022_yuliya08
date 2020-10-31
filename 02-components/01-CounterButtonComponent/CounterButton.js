export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="changeCounter">{{ counter }}</button>',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      counter: this.count || this.value,
    };
  },

  methods: {
    changeCounter() {
      this.counter += 1;
      this.$emit('increment', this.counter);
      this.$emit('input', this.counter);
    },
  },

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы
};
