import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      profile_img_url: "http://archivenew.vop.co.kr/images/90952a5d266e2222a78d4eb07938162f/2018-05/26023757_DeDeCbRVQAAhzEb.jpg",
    },
    items: [],
  },
  mutations: {
    LOAD_ITEMS: function (state, results) {
      state.items = results
    },
  },
  actions: {
    LoadItems: function({commit}){
      axios({
        method: 'get',
        url: 'https://863eacd4-7426-49b5-9db8-918ff0076ba7.mock.pstmn.io/cards',
      })
        .then((res) => {
          console.log(res)
          commit('LOAD_ITEMS', res.data)
        })
    },
    
  },
  modules: {
  }
})
