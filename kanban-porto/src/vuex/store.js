
import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    msg: 'hello world',
    tasks: []
  },
  mutations: {

  },
  actions: {
    createNewTask ({ commit }, payload) {
      db.ref('kanban').push(payload)
    },
    saveEditedTask ({ commit }, payload) {
      db.ref('kanban').child()
    }
  }
})

export default store
