import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: "1",
    },
    items: [
      {
        id: "2",
        title: "title 2",
        image_url: "https://picsum.photos/600/300/?image=2",
        content:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: "3",
        title: "title 3",
        image_url: "https://picsum.photos/600/300/?image=3",
        content:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: "4",
        title: "title 4",
        image_url: "https://picsum.photos/600/300/?image=4",
        content:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: "5",
        title: "title 5",
        image_url: "https://picsum.photos/600/300/?image=5",
        content:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: "6",
        title: "title 6",
        image_url: "https://picsum.photos/600/300/?image=6",
        content:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
