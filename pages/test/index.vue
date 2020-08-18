<template>
  <div class="wrap">
    <div class="txt">「{{ txt }}」</div>
    <SimpleForm initial-value="初期値だよ" @submit="onSubmit" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SimpleForm from '~/components/SimpleForm'

export default {
  components: {
    SimpleForm,
  },
  computed: {
    ...mapGetters('test', ['txt']),
  },
  methods: {
    onSubmit(value) {
      this.$store.dispatch('test/saveTxt', { text: value })
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 40rem;
  margin: 0 auto;
}

.txt {
  margin: 10rem 0 2rem;
  text-align: center;
}
</style>
