<template>
  <button @click="changeCounter">{{ count }}</button>
</template>

<script>
export default {
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
};
</script>

<style></style>
