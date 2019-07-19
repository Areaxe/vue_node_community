import axios from '@/util/axios'

const getUserInfo = ({ commit }, username, callback) => {
  return axios.get('/api/user/' + username).then(res => {
    commit('saveUserInfo', { name: username, data: res.data.data })
  })
}

const getUserTopicList = ({ commit, state }, params, callback) => {
  return axios
    .get('/api/topics', {
      params: {
        ...params,
        mdrender: false
      }
    })
    .then(res => {
      commit('getTopicList', { type: params.tab, list: res.data.data })
    })
}

export default {
  getUserInfo,
  getUserTopicList
}
