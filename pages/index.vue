<template>
  <div>
    <div class="imgWrap">
      <img
        class="img"
        src="https://res.cloudinary.com/kiyopikko/image/upload/v1561802660/hanly-splash_ushtah.png"
        alt
        :width="178"
      />
    </div>
    <div class="buttons">
      <BaseButton to="/signin">ログイン</BaseButton>
      <BaseButton to="/signup">新規登録</BaseButton>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.imgWrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: calc(100% - 10.25rem);
}

.buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
}
</style>
