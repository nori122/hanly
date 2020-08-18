<template>
  <form class="form" @submit.prevent="$emit('submit', { email, password })">
    <BaseInput v-model="email" placeholder="メールアドレス" type="email" />
    <BaseInput v-model="password" placeholder="パスワード" type="password" />
    <BaseButton class="mts" :disabled="isSending">ログイン</BaseButton>
  </form>
</template>

<script>
export default {
  props: {
    isSending: Boolean,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>
