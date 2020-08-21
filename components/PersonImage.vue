<template>
  <div class="personImage">
    <img
      :id="editable ? 'pick-avatar' : ''"
      :src="
        src ||
        'https://res.cloudinary.com/kiyopikko/image/upload/v1561617116/empty-user-image_o4ll8m.png'
      "
      alt
      width="80"
      class="img"
    />
    <AvatarCropper
      trigger="#pick-avatar"
      :labels="labels"
      :upload-url="uploadUrl"
      :upload-headers="headers"
      :output-options="{ width: 160, height: 160 }"
      @uploading="isUploading = true"
      @uploaded="handleUploaded"
    />
    <Loader v-if="isUploading" />
  </div>
</template>

<script>
import AvatarCropper from 'vue-avatar-cropper'

export default {
  components: {
    AvatarCropper,
  },
  props: {
    src: {
      type: String,
      default: '',
    },
    editable: {
      type: Boolean,
    },
  },
  data() {
    return {
      isUploading: false,
    }
  },
  computed: {
    labels: () => ({
      submit: '完了',
      cancel: 'キャンセル',
    }),
    uploadUrl: () => 'https://httpbin.org/post', // 仮のURL
    headers: () => ({}), // 仮のheader
  },
  methods: {
    handleUploaded(res) {
      this.isUploading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.personImage {
  color: #222;
  text-align: center;
}

.img {
  border-radius: 50%;
}
</style>

<style lang="scss">
.avatar-cropper-close {
  text-decoration: none;
}

.avatar-cropper .avatar-cropper-mark {
  background: rgba(0, 0, 0, 0.7);
}
</style>
