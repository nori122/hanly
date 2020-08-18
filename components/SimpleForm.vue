<template>
  <form class="form" @submit.prevent="$emit('submit', value)">
    <input v-model="value" type="text" class="input" />
    <BaseButton is-full>送信</BaseButton>
  </form>
</template>

<script>
import BaseButton from './BaseButton'

export default {
  components: {
    BaseButton,
  },
  props: {
    initialValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      value: this.initialValue,
    }
  },
}
</script>

<style lang="scss" scoped>
.input {
  text-align: center;
  margin-bottom: 1rem;
  // border: none;
  background: #f6f6f6;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  border-radius: 2rem;
  border: 1px solid transarent;
  outline: 0;
  &:focus {
    border: 1px solid #32c0e4;
  }
}
</style>
