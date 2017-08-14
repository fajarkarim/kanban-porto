
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
      db.ref('kanban').child(payload['key']).set({
        title: payload.title,
        description: payload.description,
        point: payload.point,
        assignee: payload.assignee,
        status: payload.status
      })
    },
    editStatus ({ commit }, payload) {
      db.ref('kanban').child(`${payload['.key']}/status`).set(payload.status + 1)
    }
  }
})

export default store
