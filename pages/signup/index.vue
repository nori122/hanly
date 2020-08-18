<template>
  <div class="wrap">
    <SignUpForm :is-sending="isSending" @submit="submit" />
    <BaseButton to="/" class="mts" is-txt>戻る</BaseButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSending: false,
    }
  },
  methods: {
    submit({ nickname, email, password }) {
      // this.isSending を true にする
      console.log(nickname, email, password)
      // nickname, email, password を使ってサーバーにリクエスト
      // this.isSending を false にする
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 2.5rem 1rem 0;
}
</style>
