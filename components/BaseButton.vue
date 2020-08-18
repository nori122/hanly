<template>
  <button
    class="btn"
    :class="clr"
    :style="{
      width: isFull ? '100%' : 'auto',
    }"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    clr: {
      type: String,
      default: '',
    },
    isFull: {
      type: Boolean,
    },
  },
  methods: {
    onClick() {
      this.$emit('myclick')
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  border: none;
  background: #35495e;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 0 2rem;
  height: 4rem;
  line-height: 4rem;
  border-radius: 2rem;
  &:hover {
    background: darken(#35495e, 5%);
  }
  &.red {
    background: #b70f0f;
    &:hover {
      background: darken(#b70f0f, 5%);
    }
  }
}
</style>
