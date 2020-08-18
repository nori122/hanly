<template>
  <div>
    <nuxt-link class="user" to="/me">
      <img
        class="user__icon"
        :src="
          face_image_url ||
          'https://res.cloudinary.com/kiyopikko/image/upload/v1561617116/empty-user-image_o4ll8m.png'
        "
      />
      <div class="user__txt">マイページ</div>
    </nuxt-link>
    <div v-if="getFriends.length > 0" class="friends">
      <h2 class="headline">友だち</h2>
      <ul>
        <FriendItem
          v-for="friend in getFriends"
          :key="friend.id"
          :to="`/friends/${friend.id}`"
          :nickname="friend.nickname"
          :date="friend.date"
          :img="friend.img"
        />
      </ul>
    </div>
    <div v-else class="noFriends">
      <img
        src="https://res.cloudinary.com/kiyopikko/image/upload/v1562219254/hanly-gray_2x_pdy6qo.png"
        alt
        :width="178"
      />
      <p class="txt">
        右下のボタンからピンを打って近くの友だちを探しましょう
      </p>
    </div>
    <button
      class="pin"
      :class="isPinning ? 'isPinning' : ''"
      :disabled="isPinning"
      @click="pin"
    />
  </div>
</template>

<script>
// 友だちデータ、サーバーからくるデータを模したもの
const dummyFriends = [
  {
    id: 'dummy-id',
    nickname: 'dummy-nickname',
    face_image_url: '',
    pin: {
      datetime: new Date(),
      latitude: 0,
      longitude: 0,
    },
  },
]

export default {
  data() {
    return {
      isPinning: false,
      friends: dummyFriends,
      face_image_url: '', // 自分の顔写真、実際はサーバーからとってくる
    }
  },
  computed: {
    getFriends() {
      return this.friends.map((f) => ({
        id: f.id,
        nickname: f.nickname,
        date: f.pin
          ? this.$dayjs(f.pin.datetime).format('YYYY/MM/DD HH:mm')
          : '',
        img: f.face_image_url,
      }))
    },
  },
  methods: {
    async pin() {
      this.isPinning = true
      const { lat, lng } = await this.$getLocation()
      console.log('緯度：' + lat, '経度：' + lng) // 実際はサーバーに緯度・経度を送信
      this.isPinning = false
    },
  },
}
</script>

<style lang="scss" scoped>
.user {
  text-decoration: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  padding-right: 1.25rem;
  background-position: 100% calc(50% - 1px);
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='11' height='14' viewBox='0 0 11 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l9 6.333L1 13' stroke='%23fff' stroke-opacity='.2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  z-index: 1;
}

.user__icon {
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
}

.user__txt {
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: rgba($color: #fff, $alpha: 0.7);
}

.headline {
  padding-left: 1rem;
  font-size: 0.875rem;
  margin-bottom: 0.375rem;
  margin-top: 5.375rem;
}

.noFriends {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.txt {
  font-size: 0.875rem;
  color: rgba($color: #fff, $alpha: 0.7);
  text-align: center;
  max-width: 17.5rem;
  margin-top: 2.5rem;
}

.pin {
  z-index: 1;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 3.375rem;
  height: 3.375rem;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06);
  background-color: #ec354b;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='28' viewBox='0 0 20 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19.72 10.876c0 7.21-9.72 17.084-9.72 17.084S.28 18.087.28 10.876C.28 5.4 4.632.96 10 .96s9.72 4.44 9.72 9.916zM10 14.977c2.3 0 4.166-1.903 4.166-4.25S12.3 6.477 10 6.477c-2.3 0-4.166 1.903-4.166 4.25S7.7 14.977 10 14.977z' fill='%23fff'/%3E%3C/svg%3E");
  &.isPinning {
    animation: pin 0.5s infinite linear;
  }
  &:disabled {
    opacity: 0.3;
  }
}

@keyframes pin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
