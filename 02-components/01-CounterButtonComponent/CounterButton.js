export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="changeCounter">{{ count }}</button>',
  model: {
    prop: 'count',
    event: 'increment',
  },
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    changeCounter() {
      this.$emit('increment', this.count + 1);
    },
  },

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы
};
