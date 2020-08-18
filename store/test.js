export const state = () => ({
  txt: '',
  films: {},
})

export const getters = {
  txt(state) {
    return `${state.txt}`
  },
  film(state) {
    return `${state.films.release_date}`
  },
}

export const mutations = {
  // setTxt(state, txt) {
  //   state.txt = txt
  // },
  setFilms(state, films) {
    state.films = films
  },
}

// export const actions = {
//   async saveTxt({ commit }, { text }) {
//     // const txt = await this.$axios.post(...) 本来はサーバーへリクエストを書くことが多い
//     const txt = await getValueAfter100ms(text)
//     commit('setTxt', txt)
//   },
// }

export const actions = {
  async fetchFilms({ commit }) {
    // axios は AJAX 用の関数
    // 要は JavaScript で、URL からデータをとってきて変数にいれるためのもの
    const res = await this.$axios('https://ghibliapi.herokuapp.com/films')
    const films = res.data // 配列で映画データが入ってくる
    commit('setFilms', films) // mutations に渡す
  },
}

// 1秒後に値を返すだけの関数、サーバーっぽい挙動にするため。
// function getValueAfter100ms(txt) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(txt)
//     }, 100)
//   })
// }
