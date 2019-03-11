import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js';

var _sandbox = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/samuel',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bugs: [],
    comments: []
  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    addBug(state, data) {
      state.bugs.push(data)
    },
    setComments(state, data) {
      state.comments = data
    },
    addComment(state, data) {
      state.comments.push(data)
    }
  },
  actions: {
    initialize({ commit }) {
      _sandbox.get('bugs')
        .then(res => {
          commit('setBugs', res.data.results)
        })
    },
    getComments({ commit }, id) {
      _sandbox.get(`bugs/${id}/notes`)
        .then(res => {
          commit('setComments', res.data.results)
        })
    },
    closer({ commit, dispatch }, closedBug) {
      let id = closedBug._id
      _sandbox.delete(`bugs/${id}`, closedBug)
        .then(res => {
          dispatch('initialize')
        })
    },
    addBug({ commit, dispatch }, payload) {
      _sandbox.post('bugs', payload)
        .then(res => {
          dispatch('initialize')
          router.push({ name: 'details', params: { bugId: res.data.results._id } })
        })
    },
    addComment({ commit, dispatch }, payload) {
      let id = payload.bug
      _sandbox.post(`bugs/${id}/notes`, payload)
        .then(res => {
          dispatch('getComments', id)
        })
    },
    deleteComment({ commit, dispatch }, payload) {
      let bugId = payload.bug
      let commentId = payload._id
      _sandbox.delete(`bugs/${bugId}/notes/${commentId}`)
        .then(res => {
          dispatch('getComments', bugId)
        })
    }
  }
})