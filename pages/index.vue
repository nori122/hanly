<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">hanly</h1>
      <h2 class="subtitle">こっちにも「{{ txt }}」</h2>
      <div class="links">
        <nuxt-link to="/test" class="button--green">テストページへ</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  computed: {
    ...mapGetters('test', ['txt']),
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
